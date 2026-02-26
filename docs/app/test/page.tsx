"use client";

import { useState } from "react";

import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ExcelImporter } from "@/registry/default/blocks/excel-importer/excel-importer";
import type { ExcelFieldOption } from "@combillui/excel-importer";

export default function TestPage() {
  const [testResults, setTestResults] = useState<{
    [key: string]: {
      status: "success" | "error" | "pending";
      message: string;
      data?: any;
    };
  }>({});

  const updateTestResult = (
    testName: string,
    status: "success" | "error" | "pending",
    message: string,
    data?: any,
  ) => {
    setTestResults((prev) => ({
      ...prev,
      [testName]: { status, message, data },
    }));
  };

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

  const handleEmployeeImport = async (data: Record<string, unknown>[]) => {
    try {
      console.log("Employee Import:", data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      updateTestResult(
        "employee",
        "success",
        `Successfully imported ${data.length} employees`,
        data,
      );
    } catch (_error) {
      updateTestResult("employee", "error", "Failed to import employees");
    }
  };

  const getStatusIcon = (status?: "success" | "error" | "pending") => {
    switch (status) {
      case "success":
        return <CheckCircle2 className='h-5 w-5 text-green-500' />;
      case "error":
        return <XCircle className='h-5 w-5 text-red-500' />;
      case "pending":
        return <AlertCircle className='h-5 w-5 text-yellow-500' />;
      default:
        return null;
    }
  };

  return (
    <div className='container mx-auto p-8'>
      <div className='mb-8 space-y-2'>
        <h1 className='text-4xl font-bold'>Excel Importer Test Suite</h1>
        <p className='text-muted-foreground'>
          Comprehensive testing for the Excel importer component. Download
          templates to get started!
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className='flex items-center justify-between'>
            <div>
              <CardTitle>Employee Import</CardTitle>
              <CardDescription>
                Tests required fields, unique constraints, regex validation, and
                type conversion
              </CardDescription>
            </div>
            {testResults.employee && getStatusIcon(testResults.employee.status)}
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex justify-center'>
            <ExcelImporter
              fields={employeeFields}
              onImport={handleEmployeeImport}
            />
          </div>

          <div className='space-y-2'>
            <h3 className='font-semibold'>Field Configuration:</h3>
            <div className='grid gap-2'>
              {employeeFields.map((field) => (
                <div
                  key={field.value}
                  className='flex items-center gap-2 rounded-md border p-2 text-sm'
                >
                  <code className='rounded bg-muted px-2 py-1'>
                    {field.value}
                  </code>
                  <span className='text-muted-foreground'>({field.label})</span>
                  {field.required && (
                    <Badge variant='destructive'>Required</Badge>
                  )}
                  {field.unique && <Badge variant='outline'>Unique</Badge>}
                  {field.parseType && (
                    <Badge variant='secondary'>{field.parseType}</Badge>
                  )}
                  {field.parseRegex && <Badge variant='default'>Regex</Badge>}
                </div>
              ))}
            </div>
          </div>

          {testResults.employee && (
            <div
              className={`rounded-lg border p-4 ${
                testResults.employee.status === "success"
                  ? "border-green-500 bg-green-50 dark:bg-green-950"
                  : "border-red-500 bg-red-50 dark:bg-red-950"
              }`}
            >
              <p className='font-semibold'>{testResults.employee.message}</p>
              {testResults.employee.data && (
                <pre className='mt-2 max-h-40 overflow-auto rounded bg-black/5 p-2 text-xs dark:bg-white/5'>
                  {JSON.stringify(testResults.employee.data, null, 2)}
                </pre>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
