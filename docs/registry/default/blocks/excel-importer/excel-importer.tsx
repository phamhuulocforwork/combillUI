"use client";

import * as React from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { CommandList } from "cmdk";
import {
  AlertCircle,
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronDown,
  Download,
  Upload,
  X,
} from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

import type {
  ExcelFieldOption,
  ValidationResult,
} from "@combillui/excel-importer";
import { generateTemplateExcel, useParseExcel } from "@combillui/excel-importer";
import { FileUploader } from "@/registry/default/blocks/file-uploader/file-uploader";

interface ExcelImporterProps
  extends React.ComponentPropsWithoutRef<typeof DialogTrigger>,
    ButtonProps {
  fields: ExcelFieldOption[];
  onImport: (data: Record<string, unknown>[]) => void;
  maxRows?: number;
}

type Step = "upload" | "configure" | "map" | "validate";

export function ExcelImporter({
  fields,
  onImport,
  maxRows,
  className,
  ...props
}: ExcelImporterProps) {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState<Step>("upload");
  const [rowsExceeded, setRowsExceeded] = React.useState<{
    total: number;
    limit: number;
  } | null>(null);

  const {
    rawData,
    headerRow,
    dataStartRow,
    mappedData,
    fieldMappings,
    validationResults,
    onParseFile,
    setRowIndices,
    extractData,
    onFieldChange,
    onFieldToggle,
    onFieldsReset,
    validateData,
    getSanitizedData,
    updateValidationResult,
  } = useParseExcel({ fields });

  const [validationSummary, setValidationSummary] = React.useState<{
    totalRows: number;
    validRows: number;
    errorRows: number;
    data: ValidationResult[];
  } | null>(null);

  const [editingCell, setEditingCell] = React.useState<{
    rowIndex: number;
    fieldValue: string;
  } | null>(null);

  // Auto-update validation summary when validation results change
  React.useEffect(() => {
    if (validationResults.length > 0 && step === "validate") {
      const errorRows = validationResults.filter(
        (r) => r.errors && r.errors.length > 0,
      ).length;
      const validRows = validationResults.length - errorRows;

      setValidationSummary({
        totalRows: validationResults.length,
        validRows,
        errorRows,
        data: validationResults,
      });
    }
  }, [validationResults, step]);

  const handleFileUpload = async (files: File[]) => {
    const file = files[0];
    if (!file) return;

    // Reset row exceeded warning
    setRowsExceeded(null);

    await onParseFile(file);
    setStep("configure");
  };

  const handleConfigure = () => {
    if (headerRow === null || dataStartRow === null) {
      alert("Please select header row and data start row");
      return;
    }

    // Check row limit before extracting
    if (maxRows && rawData.length > 0) {
      const dataRows = rawData.length - (dataStartRow + 1);
      if (dataRows > maxRows) {
        setRowsExceeded({
          total: dataRows,
          limit: maxRows,
        });
        return;
      }
    }

    extractData();
    setStep("map");
  };

  const handleMap = () => {
    const summary = validateData();
    setValidationSummary(summary);
    setStep("validate");
  };

  const handleImport = () => {
    const validData = validationResults
      .filter((r) => !r.errors || r.errors.length === 0)
      .map((r) => r.formatData!);

    onImport(getSanitizedData({ data: validData }));
    setOpen(false);
    resetState();
  };

  const resetState = () => {
    setStep("upload");
    setValidationSummary(null);
    setEditingCell(null);
    setRowsExceeded(null);
  };

  const handleCellEdit = (
    rowIndex: number,
    fieldValue: string,
    newValue: string,
  ) => {
    const result = validationResults.find((r) => r.rowIndex === rowIndex);
    if (!result) return;

    // Update the cell value - useEffect will handle summary update
    const updatedData = {
      ...result.formatData,
      [fieldValue]: newValue,
    };

    updateValidationResult(rowIndex, updatedData);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline' className={cn("w-fit", className)} {...props}>
          <Upload />
          Import
        </Button>
      </DialogTrigger>

      {/* Step 1: Upload */}
      {step === "upload" && (
        <DialogContent className='p-8 sm:max-w-xl'>
          <DialogHeader>
            <DialogTitle>Upload File</DialogTitle>
            <DialogDescription>
              Upload an Excel file (.xlsx, .xls)
            </DialogDescription>
          </DialogHeader>
          <FileUploader
            accept={{
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                [".xlsx"],
              "application/vnd.ms-excel": [".xls"],
            }}
            multiple={false}
            maxSize={10 * 1024 * 1024}
            maxFileCount={1}
            onUpload={handleFileUpload}
          />

          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-background px-2 text-muted-foreground'>
                Or download a template
              </span>
            </div>
          </div>

          <div className='flex flex-col gap-2 sm:flex-row'>
            <Button
              type='button'
              variant='outline'
              className='flex-1'
              onClick={() => generateTemplateExcel(fields)}
            >
              <Download className='mr-2 size-4' />
              Download Template
            </Button>
          </div>
        </DialogContent>
      )}

      {/* Step 2: Configure (Excel only) */}
      {step === "configure" && (
        <DialogContent className='overflow-hidden p-8 sm:max-w-6xl'>
          <DialogHeader>
            <DialogTitle>Configure Data Extraction</DialogTitle>
            <DialogDescription>
              Select the header row and data start row
            </DialogDescription>
          </DialogHeader>

          <div className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label>Header Row</Label>
                <Select
                  value={headerRow?.toString()}
                  onValueChange={(value) =>
                    setRowIndices(parseInt(value), dataStartRow ?? 0)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Select header row' />
                  </SelectTrigger>
                  <SelectContent>
                    {rawData.map((_, index) => (
                      <SelectItem key={index} value={index.toString()}>
                        Row {index + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className='space-y-2'>
                <Label>Data Start Row</Label>
                <Select
                  value={dataStartRow?.toString()}
                  onValueChange={(value) =>
                    setRowIndices(headerRow ?? 0, parseInt(value))
                  }
                  disabled={headerRow === null}
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Select data start row' />
                  </SelectTrigger>
                  <SelectContent>
                    {rawData
                      .map((_, index) => index)
                      .filter((i) => headerRow === null || i > headerRow)
                      .map((index) => (
                        <SelectItem key={index} value={index.toString()}>
                          Row {index + 1}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {rowsExceeded && (
              <Alert variant='destructive'>
                <AlertCircle className='h-4 w-4' />
                <AlertTitle>Row Limit Exceeded</AlertTitle>
                <AlertDescription>
                  Your file contains {rowsExceeded.total} data rows, but the
                  maximum allowed is {rowsExceeded.limit} rows. Please reduce
                  the number of rows in your file.
                </AlertDescription>
              </Alert>
            )}

            <div className='grid h-[26.25rem] w-full overflow-hidden rounded-md border'>
              <div className='overflow-auto'>
                <Table>
                  <TableHeader className='sticky top-0 z-10 bg-background shadow'>
                    <TableRow className='bg-muted/50'>
                      {rawData[0]?.map((_, colIndex) => (
                        <TableHead key={colIndex} className='border-r'>
                          Column {colIndex + 1}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rawData.map((row, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        className={cn(
                          "h-10",
                          rowIndex === headerRow &&
                            "bg-blue-50 dark:bg-blue-950",
                          rowIndex === dataStartRow &&
                            "bg-green-50 dark:bg-green-950",
                        )}
                      >
                        {(row as unknown[]).map((cell, cellIndex) => (
                          <TableCell key={cellIndex} className='border-r'>
                            <span className='line-clamp-1'>
                              {String(cell ?? "")}
                            </span>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          <DialogFooter className='gap-2 sm:space-x-0'>
            <Button variant='outline' onClick={() => setStep("upload")}>
              <ArrowLeft className='size-4' aria-hidden='true' />
              Back
            </Button>
            <Button onClick={handleConfigure} disabled={!!rowsExceeded}>
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      )}

      {/* Step 3: Map Fields */}
      {step === "map" && (
        <DialogContent className='overflow-hidden p-8 sm:max-w-6xl'>
          <div className='flex flex-col items-center gap-2 sm:flex-row'>
            <DialogHeader className='flex-1'>
              <DialogTitle>Map Fields</DialogTitle>
              <DialogDescription>
                Map the columns in your file to the target fields
              </DialogDescription>
            </DialogHeader>
            <Button
              variant='outline'
              className='w-full sm:w-fit'
              onClick={onFieldsReset}
            >
              Reset
            </Button>
          </div>

          {rowsExceeded && (
            <Alert variant='destructive'>
              <AlertCircle className='h-4 w-4' />
              <AlertTitle>Row Limit Exceeded</AlertTitle>
              <AlertDescription>
                Your file contains {rowsExceeded.total} data rows, but the
                maximum allowed is {rowsExceeded.limit} rows. Please reduce the
                number of rows in your file or upload a different file.
              </AlertDescription>
            </Alert>
          )}

          <div className='grid h-[26.25rem] w-full overflow-hidden rounded-md border'>
            <div className='overflow-auto'>
              <Table className='border-b'>
                <TableHeader className='sticky top-0 z-10 bg-background shadow'>
                  <TableRow className='bg-muted/50'>
                    {fields.map((field) => (
                      <PreviewTableHead
                        key={field.value}
                        field={field}
                        onFieldChange={(f) => {
                          onFieldChange({
                            oldValue: f.value,
                            newValue: field.value,
                          });
                        }}
                        onFieldToggle={onFieldToggle}
                        originalFieldMappings={fieldMappings.original}
                        currentFieldMapping={fieldMappings.current[field.value]}
                        className='border-r'
                      />
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mappedData.map((row, i) => (
                    <TableRow key={i} className='h-10'>
                      {fields.map((field) => (
                        <TableCell
                          key={field.value}
                          className='border-r last:border-r-0'
                        >
                          <span className='line-clamp-1'>
                            {String(row[field.value] ?? "")}
                          </span>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <DialogFooter className='gap-2 sm:space-x-0'>
            <Button variant='outline' onClick={() => setStep("configure")}>
              <ArrowLeft className='size-4' aria-hidden='true' />
              Back
            </Button>
            <Button onClick={handleMap} disabled={!!rowsExceeded}>
              <Upload className='size-4' aria-hidden='true' />
              Validate & Import
            </Button>
          </DialogFooter>
        </DialogContent>
      )}

      {/* Step 4: Validation Results */}
      {step === "validate" && validationSummary && (
        <DialogContent className='overflow-hidden p-8 sm:max-w-6xl'>
          <DialogHeader>
            <DialogTitle>Validation Results</DialogTitle>
            <DialogDescription>
              Review validation results and fix errors before importing
            </DialogDescription>
          </DialogHeader>
          <TooltipProvider>
            <div className='space-y-4'>
              {/* Summary Cards */}
              <div className='grid grid-cols-3 gap-4'>
                <div className='rounded-lg border p-4'>
                  <div className='text-2xl font-bold'>
                    {validationSummary.totalRows}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Total Rows
                  </div>
                </div>
                <div className='rounded-lg border p-4'>
                  <div className='text-2xl font-bold text-green-600'>
                    {validationSummary.validRows}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Valid Rows
                  </div>
                </div>
                <div className='rounded-lg border p-4'>
                  <div className='text-2xl font-bold text-red-600'>
                    {validationSummary.errorRows}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Error Rows
                  </div>
                </div>
              </div>

              {/* Validation Results Table */}
              <div className='grid h-[26.25rem] w-full overflow-hidden rounded-md border'>
                <Table>
                  <TableHeader className='sticky top-0 z-10 bg-background shadow'>
                    <TableRow className='bg-muted/50'>
                      <TableHead className='w-20 border-r'>Row</TableHead>
                      <TableHead className='w-24 border-r'>Status</TableHead>
                      {fields.map((field) => (
                        <TableHead key={field.value} className='border-r'>
                          {field.label}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {validationResults.map((result) => {
                      const hasErrors =
                        result.errors && result.errors.length > 0;
                      return (
                        <TableRow
                          key={result.rowIndex}
                          className={cn(
                            "h-10",
                            hasErrors
                              ? "bg-red-50 dark:bg-red-950/20"
                              : "bg-green-50 dark:bg-green-950/20",
                          )}
                        >
                          <TableCell className='border-r font-medium'>
                            {result.rowIndex}
                          </TableCell>
                          <TableCell className='border-r'>
                            {hasErrors ? (
                              <span className='flex items-center gap-1 text-xs text-red-600'>
                                <X className='size-3' />
                                Error
                              </span>
                            ) : (
                              <span className='flex items-center gap-1 text-xs text-green-600'>
                                <Check className='size-3' />
                                Valid
                              </span>
                            )}
                          </TableCell>
                          {fields.map((field) => {
                            const fieldError = result.errors?.find(
                              (e) => e.fieldKey === field.value,
                            );
                            const isEditing =
                              editingCell?.rowIndex === result.rowIndex &&
                              editingCell?.fieldValue === field.value;

                            const cellValue = String(
                              result.formatData?.[field.value] ?? "",
                            );

                            return (
                              <TableCell
                                key={field.value}
                                className={cn(
                                  "border-r p-0",
                                  fieldError && "bg-red-100 dark:bg-red-900/30",
                                )}
                              >
                                <Tooltip delayDuration={0}>
                                  <TooltipTrigger asChild>
                                    <Input
                                      defaultValue={cellValue}
                                      onBlur={(e) => {
                                        const newValue = e.target.value;
                                        if (newValue !== cellValue) {
                                          handleCellEdit(
                                            result.rowIndex,
                                            field.value,
                                            newValue,
                                          );
                                        }
                                        setEditingCell(null);
                                      }}
                                      onFocus={() =>
                                        setEditingCell({
                                          rowIndex: result.rowIndex,
                                          fieldValue: field.value,
                                        })
                                      }
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                          e.currentTarget.blur();
                                        }
                                      }}
                                      className={cn(
                                        "h-10 rounded-none border-0 focus-visible:ring-1 focus-visible:ring-inset",
                                        fieldError &&
                                          "focus-visible:ring-red-500",
                                        !fieldError &&
                                          "focus-visible:ring-blue-500",
                                      )}
                                    />
                                  </TooltipTrigger>
                                  {fieldError && (
                                    <TooltipContent
                                      side='bottom'
                                      className='bg-red-600 text-white'
                                    >
                                      {fieldError.description}
                                      <TooltipPrimitive.Arrow className='fill-red-600' />
                                    </TooltipContent>
                                  )}
                                </Tooltip>
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

              {/* Alert */}
              {validationSummary.errorRows > 0 ? (
                <Alert variant='destructive'>
                  <AlertCircle className='h-4 w-4' />
                  <AlertTitle>Validation Errors Found</AlertTitle>
                  <AlertDescription>
                    {validationSummary.errorRows} row(s) have validation errors.
                    Click on any cell to edit and fix errors, or import only
                    valid rows.
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert>
                  <CheckCircle2 className='h-4 w-4' />
                  <AlertTitle>All Data Valid</AlertTitle>
                  <AlertDescription>
                    All rows passed validation. You can proceed with the import.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </TooltipProvider>

          <DialogFooter className='gap-2 sm:space-x-0'>
            <Button variant='outline' onClick={() => setStep("map")}>
              <ArrowLeft className='size-4' aria-hidden='true' />
              Back to Mapping
            </Button>
            <Button
              onClick={handleImport}
              disabled={validationSummary.validRows === 0}
            >
              <Upload className='size-4' aria-hidden='true' />
              Import {validationSummary.validRows} Row(s)
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}

interface PreviewTableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  field: ExcelFieldOption;
  onFieldChange: (props: { value: string; required?: boolean }) => void;
  onFieldToggle: (props: { value: string; checked: boolean }) => void;
  currentFieldMapping: string | undefined;
  originalFieldMappings: Record<string, string | undefined>;
}

function PreviewTableHead({
  field,
  onFieldChange,
  onFieldToggle,
  currentFieldMapping,
  originalFieldMappings,
  className,
  ...props
}: PreviewTableHeadProps) {
  const id = React.useId();
  const [open, setOpen] = React.useState(false);

  return (
    <TableHead className={cn("whitespace-nowrap py-2", className)} {...props}>
      <div className='flex items-center gap-4 pr-1.5'>
        <div className='flex items-center gap-2'>
          <Checkbox
            id={`${id}-${field.value}`}
            defaultChecked
            onCheckedChange={(checked) => {
              onFieldToggle({
                value: field.value,
                checked: !!checked,
              });
            }}
            disabled={field.required}
          />
          <Label htmlFor={`${id}-${field.value}`} className='truncate'>
            {field.label}
            {field.required && <span className='text-red-500'> *</span>}
            {field.unique && <span className='text-orange-500'> !</span>}
          </Label>
        </div>
        <ArrowLeft className='size-4' aria-hidden='true' />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              size='sm'
              role='combobox'
              aria-expanded={open}
              className='w-48 justify-between'
            >
              {currentFieldMapping || "Select field..."}
              <ChevronDown className='ml-2 size-4 shrink-0 opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[var(--radix-popover-trigger-width)] p-0'>
            <Command>
              <CommandInput placeholder='Search field...' />
              <CommandEmpty>No field found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  {[...new Set(Object.values(originalFieldMappings))].map(
                    (fm) => (
                      <CommandItem
                        key={fm}
                        value={fm}
                        onSelect={() => {
                          onFieldChange({
                            value: fm ?? "",
                          });
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 size-4",
                            currentFieldMapping === fm
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        <span className='line-clamp-1'>{fm}</span>
                      </CommandItem>
                    ),
                  )}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </TableHead>
  );
}
