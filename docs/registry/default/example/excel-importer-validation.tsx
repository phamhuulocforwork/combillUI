'use client';

import type { ExcelFieldOption } from '@combillui/excel-importer';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';

import { ExcelImporter } from '@/registry/default/blocks/excel-importer/excel-importer';

export default function ExcelImporterValidation() {
  const [importedData, setImportedData] = useState<Record<string, unknown>[]>(
    [],
  );

  const fields: ExcelFieldOption[] = [
    {
      label: 'Product SKU',
      value: 'sku',
      required: true,
      unique: true,
      parseRegex: /^[A-Z]{3}-\d{4}$/,
      parseRegexMessage: 'SKU must be in format: XXX-1234',
    },
    {
      label: 'Product Name',
      value: 'name',
      required: true,
    },
    {
      label: 'Price',
      value: 'price',
      required: true,
      parseType: 'number',
    },
    {
      label: 'Stock Quantity',
      value: 'stock',
      parseType: 'number',
    },
    {
      label: 'Release Date',
      value: 'releaseDate',
      parseType: 'date',
    },
    {
      label: 'In Stock',
      value: 'inStock',
      parseType: 'boolean',
    },
  ];

  const handleImport = async (data: Record<string, unknown>[]) => {
    console.log('Imported products:', data);
    setImportedData(data);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg border p-4">
        <h3 className="mb-3 font-semibold">Field Validation Rules:</h3>
        <div className="grid gap-2">
          {fields.map((field) => (
            <div key={field.value} className="flex items-center gap-2 text-sm">
              <code className="rounded bg-muted px-2 py-1 font-mono text-xs">
                {field.value}
              </code>
              <span className="text-muted-foreground">({field.label})</span>
              {field.required && (
                <Badge variant="destructive" className="text-xs">
                  Required
                </Badge>
              )}
              {field.unique && (
                <Badge variant="outline" className="text-xs">
                  Unique
                </Badge>
              )}
              {field.parseType && (
                <Badge variant="secondary" className="text-xs">
                  {field.parseType}
                </Badge>
              )}
              {field.parseRegex && <Badge className="text-xs">Pattern</Badge>}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <ExcelImporter fields={fields} onImport={handleImport} />
      </div>

      {importedData.length > 0 && (
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-semibold">
            Successfully Imported {importedData.length} Products
          </h3>
          <pre className="max-h-60 overflow-auto rounded bg-muted p-4 text-xs">
            {JSON.stringify(importedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
