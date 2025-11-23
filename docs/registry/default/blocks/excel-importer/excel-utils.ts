import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { read, utils, write } from "xlsx";

import type {
  ExcelFieldOption,
  FieldType,
  ValidationError,
} from "./excel-types";

dayjs.extend(customParseFormat);

// Date patterns that Excel/web may return
const DATE_PATTERNS = [
  "DD/MM/YYYY",
  "D/M/YYYY",
  "DD-MM-YYYY",
  "D-M-YYYY",
  "DD.MM.YYYY",
  "D.M.YYYY",
  "YYYY-MM-DD",
  "YYYY/MM/DD",
  "MMM D, YYYY",
  "MMMM D, YYYY",
  "DD MMM YYYY",
  "DD-MMM-YYYY",
  "YYYYMMDD",
  // Date + Time
  "DD/MM/YYYY HH:mm",
  "DD-MM-YYYY HH:mm",
  "YYYY-MM-DD HH:mm",
  "DD MMM YYYY HH:mm",
  "MMM D, YYYY h:mm A",
  "YYYY-MM-DDTHH:mm:ss", // ISO
];

/**
 * Parse Excel file and return raw data as array of arrays
 */
export async function parseExcelFile(
  file: File,
  options?: {
    headerRow?: number;
    dataStartRow?: number;
  },
): Promise<unknown[][]> {
  const buffer = await file.arrayBuffer();
  const workbook = read(buffer, { cellDates: true, dateNF: "dd/MM/yyyy" });
  const sheet = workbook.Sheets[workbook.SheetNames[0] ?? ""];
  const json = utils.sheet_to_json(sheet ?? {}, {
    header: 1,
    raw: false,
  }) as unknown[][];

  // Filter out empty rows
  const filtered = json.filter((row) =>
    row.some((cell) => cell !== null && cell !== undefined && cell !== ""),
  );

  return filtered;
}

/**
 * Normalize date input to YYYY-MM-DD format
 */
export function normalizeDate(input?: string): string | undefined {
  if (!input) return undefined;

  // If Excel sends a serial number (e.g., 45245 = date)
  if (!isNaN(Number(input))) {
    const excelEpoch = dayjs("1899-12-30").add(Number(input), "day");
    return excelEpoch.format("YYYY-MM-DD");
  }

  const matchedPattern = DATE_PATTERNS.find((pattern) => {
    const parsed = dayjs(input, pattern, true);
    return parsed.isValid();
  });

  if (matchedPattern) {
    const parsed = dayjs(input, matchedPattern, true);
    return parsed.format("YYYY-MM-DD");
  }

  const autoParsed = dayjs(input);
  if (autoParsed.isValid()) {
    return autoParsed.format("YYYY-MM-DD");
  }

  console.warn("Could not parse date:", input);
  return undefined;
}

/**
 * Validate and convert a field value based on its type
 */
export function validateField(
  value: unknown,
  field: ExcelFieldOption,
): {
  parsedValue: unknown;
  error?: ValidationError;
} {
  const fieldKey = field.value;
  let parsedValue: unknown = value;

  // Check required
  if (
    field.required &&
    (value === null || value === undefined || value === "")
  ) {
    return {
      parsedValue: value,
      error: {
        fieldKey,
        rawValue: String(value),
        type: "blankInRequired",
        description: `Field "${field.label}" is required but is empty`,
      },
    };
  }

  // Skip parsing if value is empty and not required
  if (value === null || value === undefined || value === "") {
    return { parsedValue: null };
  }

  // Type conversion
  try {
    switch (field.parseType) {
      case "number":
        if (isNaN(Number(String(value).replace(/,/g, "")))) {
          throw new Error(`Cannot convert "${value}" to number`);
        }
        parsedValue = Number(String(value).replace(/,/g, ""));
        break;

      case "boolean":
        if (typeof value === "boolean") {
          parsedValue = value;
        } else if (["true", "1"].includes(String(value).toLowerCase())) {
          parsedValue = true;
        } else if (["false", "0"].includes(String(value).toLowerCase())) {
          parsedValue = false;
        } else {
          throw new Error(`Cannot convert "${value}" to boolean`);
        }
        break;

      case "date":
        const normalized = normalizeDate(String(value));
        if (!normalized) {
          throw new Error(`Cannot convert "${value}" to date`);
        }
        parsedValue = normalized;
        break;

      default:
        parsedValue = String(value);
        break;
    }

    // Regex validation
    if (field.parseRegex && parsedValue != null && parsedValue !== "") {
      const regex =
        typeof field.parseRegex === "string"
          ? new RegExp(field.parseRegex)
          : field.parseRegex;

      if (!regex.test(String(parsedValue))) {
        throw new Error(
          field.parseRegexMessage ||
            `Value "${parsedValue}" does not match required format`,
        );
      }
    }

    return { parsedValue };
  } catch (err) {
    const error = err as Error;
    return {
      parsedValue: value,
      error: {
        fieldKey,
        rawValue: String(value),
        type: "format",
        description: error.message,
      },
    };
  }
}

/**
 * Detect duplicate values in a field across all rows
 */
export function detectDuplicates<T extends Record<string, unknown>>(
  data: T[],
  field: ExcelFieldOption,
): Map<number, ValidationError> {
  const seen = new Map<string, number[]>();
  const errors = new Map<number, ValidationError>();

  data.forEach((row, index) => {
    const value = row[field.value];
    if (value == null || value === "") return;

    const key = String(value).trim().toLowerCase();
    if (!seen.has(key)) {
      seen.set(key, [index]);
    } else {
      const existing = seen.get(key);
      if (existing) existing.push(index);
    }
  });

  seen.forEach((indices, key) => {
    if (indices.length > 1) {
      indices.forEach((index) => {
        errors.set(index, {
          fieldKey: field.value,
          rawValue: key,
          type: "duplicate",
          description: `Value "${key}" is duplicated in field "${field.label}"`,
        });
      });
    }
  });

  return errors;
}

/**
 * Check if a path is a nested object path (e.g., "user.name")
 */
function isObjectPath(path: string): boolean {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*(\.[a-zA-Z_$][a-zA-Z0-9_$]*)+$/.test(path);
}

/**
 * Get value from object by path (supports nested paths like "user.name")
 */
export function getValueByPath(obj: unknown, path: string): unknown {
  if (isObjectPath(path)) {
    return path.split(".").reduce((acc: unknown, key) => {
      if (acc && typeof acc === "object" && key in acc) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj);
  }
}

/**
 * Generate example value for a field based on its type and configuration
 */
function generateExampleValue(field: ExcelFieldOption): string {
  // If field has regex, try to generate a matching example
  if (field.parseRegex) {
    const regexStr = field.parseRegex.toString();

    // Email pattern
    if (regexStr.includes("@")) {
      return "example@email.com";
    }

    // Phone pattern
    if (regexStr.includes("\\d") && regexStr.includes("[\\s-()]")) {
      return "+1 (555) 123-4567";
    }

    // SKU pattern (ABC-1234)
    if (regexStr.includes("[A-Z]") && regexStr.includes("\\d")) {
      return "ABC-1234";
    }
  }

  // Generate based on type
  switch (field.parseType) {
    case "number":
      return "100";
    case "date":
      return "2024-01-15";
    case "boolean":
      return "true";
    default:
      // Generate based on label
      const label = field.label.toLowerCase();
      if (label.includes("email")) return "example@email.com";
      if (label.includes("phone")) return "+1 (555) 123-4567";
      if (label.includes("name")) return "John Doe";
      if (label.includes("code") || label.includes("id")) return "ABC123";
      if (label.includes("age")) return "30";
      if (label.includes("date")) return "2024-01-15";
      return "Sample Data";
  }
}

/**
 * Generate Excel template file from field configuration
 */
export function generateTemplateExcel(
  fields: ExcelFieldOption[],
  options?: {
    includeExample?: boolean;
    fileName?: string;
  },
): void {
  const { includeExample = true, fileName = "template" } = options || {};

  // Create workbook
  const workbook = utils.book_new();

  // Row 1: Labels (display names)
  const labels = fields.map((field) => field.label);

  // Row 2: Values (field keys)
  const values = fields.map((field) => field.value);

  // Create data array starting with labels and values
  const data: string[][] = [labels, values];

  // Row 3: Add example row if requested
  if (includeExample) {
    const exampleRow = fields.map((field) => generateExampleValue(field));
    data.push(exampleRow);
  }

  // Create worksheet
  const worksheet = utils.aoa_to_sheet(data);

  // Set column widths
  const columnWidths = fields.map((field) => ({
    wch: Math.max(field.label.length + 2, 15),
  }));
  worksheet["!cols"] = columnWidths;

  // Add worksheet to workbook
  utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Generate Excel file and trigger download
  const excelBuffer = write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  downloadFile(blob, `${fileName}.xlsx`);
}

/**
 * Generate CSV template file from field configuration
 */
export function generateTemplateCSV(
  fields: ExcelFieldOption[],
  options?: {
    includeExample?: boolean;
    fileName?: string;
  },
): void {
  const { includeExample = true, fileName = "template" } = options || {};

  // Create header row
  const headers = fields.map((field) => field.label);
  let csvContent = headers.map((h) => `"${h}"`).join(",") + "\n";

  // Add example row if requested
  if (includeExample) {
    const exampleRow = fields.map((field) => generateExampleValue(field));
    csvContent += exampleRow.map((v) => `"${v}"`).join(",") + "\n";
  }

  // Create blob and trigger download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  downloadFile(blob, `${fileName}.csv`);
}

/**
 * Trigger file download in browser
 */
function downloadFile(blob: Blob, fileName: string): void {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
