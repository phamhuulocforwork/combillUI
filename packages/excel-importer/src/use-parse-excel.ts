import * as React from 'react';

import type {
  DataValidationSummary,
  ExcelFieldOption,
  ValidationError,
  ValidationResult,
} from './types';
import { detectDuplicates, parseExcelFile, validateField } from './utils';

interface ExcelState {
  fileName: string;
  rawData: unknown[][];
  headerRow: number | null;
  dataStartRow: number | null;
  extractedData: Record<string, unknown>[];
  fieldMappings: {
    original: Record<string, string | undefined>;
    current: Record<string, string | undefined>;
  };
  validationResults: ValidationResult[];
  error: string | null;
}

interface UseParseExcelProps {
  fields: ExcelFieldOption[];
  onSuccess?: (data: Record<string, unknown>[]) => void;
  onError?: (message: string) => void;
}

export function useParseExcel({
  fields,
  onSuccess,
  onError,
}: UseParseExcelProps) {
  const [excelState, setExcelState] = React.useState<ExcelState>({
    fileName: '',
    rawData: [],
    headerRow: null,
    dataStartRow: null,
    extractedData: [],
    fieldMappings: {
      original: {},
      current: {},
    },
    validationResults: [],
    error: null,
  });

  /**
   * Parse Excel file and extract raw data
   */
  async function onParseFile(file: File) {
    try {
      const rawData = await parseExcelFile(file);

      // Auto-detect header and data rows
      let headerRow = null;
      let dataStartRow = null;

      if (rawData.length === 2) {
        headerRow = 0;
        dataStartRow = 1;
      } else if (rawData.length >= 3) {
        // For template format: Row 1 = Labels, Row 2 = Values (header), Row 3 = Data
        headerRow = 1;
        dataStartRow = 2;
      }

      setExcelState((prev) => ({
        ...prev,
        fileName: file.name.replace(/\.[^/.]+$/, ''),
        rawData,
        headerRow,
        dataStartRow,
        error: null,
      }));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Failed to parse file';
      setExcelState((prev) => ({ ...prev, error: message }));
      onError?.(message);
    }
  }

  /**
   * Set header and data start rows (for Excel files)
   */
  function setRowIndices(headerRow: number, dataStartRow: number) {
    setExcelState((prev) => ({
      ...prev,
      headerRow,
      dataStartRow,
    }));
  }

  /**
   * Extract data from raw Excel data using header and data row indices
   */
  function extractData() {
    const { rawData, headerRow, dataStartRow } = excelState;

    if (headerRow === null || dataStartRow === null) {
      const message = 'Please select header row and data start row';
      setExcelState((prev) => ({ ...prev, error: message }));
      onError?.(message);
      return;
    }

    const headers = rawData[headerRow] as string[];
    const dataRows = rawData.slice(dataStartRow);

    const extracted = dataRows.map((row) => {
      const rowObj: Record<string, unknown> = {};
      headers.forEach((key, idx) => {
        const cellValue = (row as unknown[])[idx];
        rowObj[String(key) || `col_${idx}`] = cellValue;
      });
      return rowObj;
    });

    // Initialize field mappings
    const mappings = headers.reduce(
      (acc, header) => ({
        ...acc,
        [header]: header,
      }),
      {},
    );

    setExcelState((prev) => ({
      ...prev,
      extractedData: extracted,
      fieldMappings: {
        original: mappings,
        current: mappings,
      },
    }));
  }

  /**
   * Change field mapping
   */
  function onFieldChange({
    oldValue,
    newValue,
  }: {
    oldValue: string;
    newValue: string;
  }) {
    setExcelState((prev) => ({
      ...prev,
      fieldMappings: {
        ...prev.fieldMappings,
        current: { ...prev.fieldMappings.current, [newValue]: oldValue },
      },
    }));
  }

  /**
   * Toggle field inclusion
   */
  function onFieldToggle({
    value,
    checked,
  }: {
    value: string;
    checked: boolean;
  }) {
    setExcelState((prev) => ({
      ...prev,
      fieldMappings: {
        ...prev.fieldMappings,
        current: {
          ...prev.fieldMappings.current,
          [value]: checked ? prev.fieldMappings.original[value] : undefined,
        },
      },
    }));
  }

  /**
   * Reset field mappings to original
   */
  function onFieldsReset() {
    setExcelState((prev) => ({
      ...prev,
      fieldMappings: {
        ...prev.fieldMappings,
        current: prev.fieldMappings.original,
      },
    }));
  }

  /**
   * Validate and transform data based on field mappings
   */
  function validateData(): DataValidationSummary {
    const { extractedData, fieldMappings } = excelState;
    const selectedFields = fields.filter(
      (field) => fieldMappings.current[field.value] !== undefined,
    );

    const validationResults: ValidationResult[] = [];

    // Validate each row
    extractedData.forEach((row, rowIndex) => {
      const rawObj: Record<string, unknown> = {};
      const formattedObj: Record<string, unknown> = {};
      const errors: ValidationError[] = [];

      selectedFields.forEach((field) => {
        const excelColumnKey = fieldMappings.current[field.value];
        const rawValue = excelColumnKey ? row[excelColumnKey] : undefined;
        rawObj[field.value] = rawValue;

        const { parsedValue, error } = validateField(rawValue, field);
        formattedObj[field.value] = parsedValue;

        if (error) {
          errors.push(error);
        }
      });

      validationResults.push({
        rowIndex: rowIndex + 1,
        rawData: rawObj,
        formatData: formattedObj,
        errors: errors.length > 0 ? errors : undefined,
      });
    });

    // Check for duplicates in unique fields
    const uniqueFields = selectedFields.filter((f) => f.unique);
    uniqueFields.forEach((uniqueField) => {
      const formattedData = validationResults.map((r) => r.formatData!);
      const duplicateErrors = detectDuplicates(formattedData, uniqueField);

      duplicateErrors.forEach((error, index) => {
        const result = validationResults[index];
        if (!result) return;

        if (!result.errors) {
          result.errors = [];
        }
        result.errors.push(error);
      });
    });

    setExcelState((prev) => ({
      ...prev,
      validationResults,
    }));

    const errorRows = validationResults.filter(
      (r) => r.errors && r.errors.length > 0,
    ).length;
    const validRows = validationResults.length - errorRows;

    return {
      totalRows: validationResults.length,
      validRows,
      errorRows,
      data: validationResults,
    };
  }

  /**
   * Get mapped data for preview
   */
  function getMappedData(): Record<string, unknown>[] {
    const { extractedData, fieldMappings } = excelState;

    return extractedData.map((row) => {
      const mappedRow: Record<string, unknown> = {};
      fields.forEach((field) => {
        const excelColumnKey = fieldMappings.current[field.value];
        if (excelColumnKey) {
          mappedRow[field.value] = row[excelColumnKey];
        }
      });
      return mappedRow;
    });
  }

  /**
   * Get sanitized data (replace null with empty string)
   */
  function getSanitizedData({
    data,
  }: {
    data: Record<string, unknown>[];
  }): Record<string, unknown>[] {
    return data.map((row) =>
      Object.keys(row).reduce(
        (acc, key) => ({
          ...acc,
          [key]: row[key] === null ? '' : row[key],
        }),
        {},
      ),
    );
  }

  /**
   * Update a specific validation result (for inline editing)
   */
  function updateValidationResult(
    rowIndex: number,
    updatedData: Record<string, unknown>,
  ) {
    setExcelState((prev) => {
      const newResults = [...prev.validationResults];
      const resultIndex = newResults.findIndex((r) => r.rowIndex === rowIndex);

      if (resultIndex !== -1) {
        const result = newResults[resultIndex];
        if (!result) return prev;

        const errors: ValidationError[] = [];

        // Re-validate the updated data
        fields.forEach((field) => {
          const value = updatedData[field.value];
          const { parsedValue, error } = validateField(value, field);
          updatedData[field.value] = parsedValue;

          if (error) {
            errors.push(error);
          }
        });

        newResults[resultIndex] = {
          rowIndex: result.rowIndex,
          rawData: result.rawData,
          formatData: updatedData,
          errors: errors.length > 0 ? errors : undefined,
        };
      }

      // Re-check duplicates for unique fields after the update
      const selectedFields = fields.filter(
        (field) => prev.fieldMappings.current[field.value] !== undefined,
      );
      const uniqueFields = selectedFields.filter((f) => f.unique);

      // Clear existing duplicate errors first
      newResults.forEach((result) => {
        if (result.errors) {
          result.errors = result.errors.filter(
            (error) => !error.description.includes('duplicated'),
          );
          if (result.errors.length === 0) {
            result.errors = undefined;
          }
        }
      });

      // Re-detect duplicates
      uniqueFields.forEach((uniqueField) => {
        const formattedData = newResults.map((r) => r.formatData!);
        const duplicateErrors = detectDuplicates(formattedData, uniqueField);

        duplicateErrors.forEach((error, index) => {
          const result = newResults[index];
          if (!result) return;

          if (!result.errors) {
            result.errors = [];
          }
          result.errors.push(error);
        });
      });

      return {
        ...prev,
        validationResults: newResults,
      };
    });
  }

  return {
    fileName: excelState.fileName,
    rawData: excelState.rawData,
    headerRow: excelState.headerRow,
    dataStartRow: excelState.dataStartRow,
    extractedData: excelState.extractedData,
    mappedData: getMappedData(),
    fieldMappings: excelState.fieldMappings,
    validationResults: excelState.validationResults,
    error: excelState.error,
    onParseFile,
    setRowIndices,
    extractData,
    onFieldChange,
    onFieldToggle,
    onFieldsReset,
    validateData,
    getSanitizedData,
    updateValidationResult,
  };
}
