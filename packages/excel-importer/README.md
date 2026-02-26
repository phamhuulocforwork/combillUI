# @combillui/excel-importer

Core logic package for Excel data import with validation and transformation.

## Features

- 📊 **Excel File Parsing** - Parse `.xlsx` and `.xls` files
- ✅ **Field Validation** - Required, unique, regex, and type validation
- 🔄 **Type Conversion** - Automatic conversion for number, date, and boolean
- 🗺️ **Smart Field Mapping** - Auto-detect headers and map to schema
- 📝 **Template Generation** - Generate Excel/CSV templates from schema
- ⚛️ **React Hook** - Easy integration with `useParseExcel` hook

## Installation

```bash
npm install @combillui/excel-importer
```

## Usage

### Basic Example

```typescript
import { useParseExcel, ExcelFieldOption } from "@combillui/excel-importer";

const fields: ExcelFieldOption[] = [
  { label: "Full Name", value: "name", required: true },
  { label: "Email", value: "email", required: true, parseRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  { label: "Age", value: "age", parseType: "number" },
];

function MyComponent() {
  const {
    onParseFile,
    validationResults,
    validateData,
    getSanitizedData,
  } = useParseExcel({ fields });

  const handleImport = async (file: File) => {
    await onParseFile(file);
    const summary = validateData();
    const validData = validationResults
      .filter((r) => !r.errors)
      .map((r) => r.formatData);
    const sanitized = getSanitizedData({ data: validData });
    // Do something with sanitized data
  };
}
```

### Generate Template

```typescript
import { generateTemplateExcel } from "@combillui/excel-importer";

generateTemplateExcel(fields, {
  fileName: "employee-template",
  includeExample: true,
});
```

## API

### Types

- `ExcelFieldOption` - Field configuration with validation rules
- `ValidationResult` - Result of field validation
- `ValidationError` - Validation error details
- `DataValidationSummary` - Summary of all validation results

### Functions

- `parseExcelFile(file, options?)` - Parse Excel file to raw data
- `validateField(value, field)` - Validate single field value
- `detectDuplicates(data, field)` - Check for duplicate values
- `generateTemplateExcel(fields, options?)` - Generate Excel template
- `generateTemplateCSV(fields, options?)` - Generate CSV template

### Hook

- `useParseExcel({ fields, onSuccess?, onError? })` - Main state management hook

## License

MIT
