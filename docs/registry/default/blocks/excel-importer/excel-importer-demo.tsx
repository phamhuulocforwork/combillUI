"use client";

import { ExcelImporter } from "@/registry/default/blocks/excel-importer/excel-importer";
import type { ExcelFieldOption } from "@/registry/default/blocks/excel-importer/excel-types";

interface Employee {
  code: string;
  name: string;
  email: string;
  age: number;
  birthDate: string;
  isActive: boolean;
}

const employeeFields: ExcelFieldOption[] = [
  {
    label: "Employee Code",
    value: "code",
    required: true,
    unique: true,
  },
  {
    label: "Full Name",
    value: "name",
    required: true,
  },
  {
    label: "Email",
    value: "email",
    required: true,
    parseRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    parseRegexMessage: "Invalid email format",
  },
  {
    label: "Age",
    value: "age",
    parseType: "number",
  },
  {
    label: "Birth Date",
    value: "birthDate",
    parseType: "date",
  },
  {
    label: "Active Status",
    value: "isActive",
    parseType: "boolean",
  },
];

export default function ExcelImporterDemo() {
  const handleImport = async (data: Record<string, unknown>[]) => {
    console.log("Importing data:", data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert(`Successfully imported ${data.length} employees!`);
  };

  return (
    <div className='flex min-h-screen items-center justify-center p-8'>
      <div className='w-full max-w-md space-y-6'>
        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold'>Excel Importer Demo</h1>
          <p className='text-muted-foreground'>
            Import employee data from CSV or Excel files
          </p>
        </div>

        <div className='flex justify-center'>
          <ExcelImporter fields={employeeFields} onImport={handleImport} />
        </div>

        <div className='rounded-lg border p-4'>
          <h2 className='mb-2 font-semibold'>Expected Fields:</h2>
          <ul className='space-y-1 text-sm'>
            {employeeFields.map((field) => (
              <li key={field.value} className='flex items-center gap-2'>
                <span className='font-mono text-xs'>{field.value}</span>
                <span className='text-muted-foreground'>({field.label})</span>
                {field.required && <span className='text-red-500'>*</span>}
                {field.unique && <span className='text-orange-500'>!</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className='rounded-lg border p-4'>
          <h2 className='mb-2 font-semibold'>Features:</h2>
          <ul className='list-inside list-disc space-y-1 text-sm text-muted-foreground'>
            <li>Download Excel/CSV templates with example data</li>
            <li>Support for CSV and Excel files (.csv, .xlsx, .xls)</li>
            <li>Automatic column mapping with manual override</li>
            <li>Data validation (required, unique, type conversion)</li>
            <li>Regex pattern validation</li>
            <li>Preview data before import</li>
            <li>Import only valid rows</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
