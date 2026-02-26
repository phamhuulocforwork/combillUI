export type FieldType = "string" | "number" | "date" | "boolean";

export interface ExcelFieldOption {
  label: string;
  value: string;
  required?: boolean;
  unique?: boolean;
  parseType?: FieldType;
  parseRegex?: RegExp | string;
  parseRegexMessage?: string;
}

export interface ValidationError {
  fieldKey: string;
  rawValue: string;
  description: string;
  type: "format" | "blankInRequired" | "duplicate";
}

export interface ValidationResult<T = Record<string, unknown>> {
  rowIndex: number;
  rawData: T;
  formatData?: T;
  errors?: ValidationError[];
}

export interface DataValidationSummary<T = Record<string, unknown>> {
  totalRows: number;
  validRows: number;
  errorRows: number;
  data: ValidationResult<T>[];
}
