"use client";

import { useState } from "react";

import type { ExcelFieldOption } from "@combillui/excel-importer";

import { ExcelImporter } from "@/registry/default/blocks/excel-importer/excel-importer";

export default function ExcelImporterBasic() {
  const [importedData, setImportedData] = useState<Record<string, unknown>[]>(
    [],
  );

  const fields: ExcelFieldOption[] = [
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

  const handleImport = async (data: Record<string, unknown>[]) => {
    console.log("Imported data:", data);
    setImportedData(data);
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      <ExcelImporter fields={fields} onImport={handleImport} />

      {importedData.length > 0 && (
        <div className='w-full rounded-lg border p-4'>
          <h3 className='mb-2 font-semibold'>Imported Data:</h3>
          <pre className='max-h-60 overflow-auto rounded bg-muted p-4 text-xs'>
            {JSON.stringify(importedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
