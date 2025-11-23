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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ExcelImporter } from "@/registry/default/blocks/excel-importer/excel-importer";
import type { ExcelFieldOption } from "@/registry/default/blocks/excel-importer/excel-types";

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

  // Test 1: Basic Employee Import
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

  // Test 2: Product Import with Validation
  const productFields: ExcelFieldOption[] = [
    {
      label: "Product SKU",
      value: "sku",
      required: true,
      unique: true,
      parseRegex: /^[A-Z]{3}-\d{4}$/,
      parseRegexMessage: "SKU must be in format: ABC-1234",
    },
    {
      label: "Product Name",
      value: "name",
      required: true,
    },
    {
      label: "Price",
      value: "price",
      required: true,
      parseType: "number",
    },
    {
      label: "Stock Quantity",
      value: "stock",
      parseType: "number",
    },
    {
      label: "In Stock",
      value: "inStock",
      parseType: "boolean",
    },
  ];

  // Test 3: Simple Contact Import
  const contactFields: ExcelFieldOption[] = [
    {
      label: "Name",
      value: "name",
      required: true,
    },
    {
      label: "Phone",
      value: "phone",
      parseRegex: /^\+?[\d\s-()]+$/,
      parseRegexMessage: "Invalid phone number format",
    },
    {
      label: "Email",
      value: "email",
      parseRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      parseRegexMessage: "Invalid email format",
    },
  ];

  // Test 4: All Field Types
  const allTypesFields: ExcelFieldOption[] = [
    {
      label: "Text Field",
      value: "text",
      parseType: "string",
    },
    {
      label: "Number Field",
      value: "number",
      parseType: "number",
    },
    {
      label: "Date Field",
      value: "date",
      parseType: "date",
    },
    {
      label: "Boolean Field",
      value: "boolean",
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
    } catch (error) {
      updateTestResult("employee", "error", "Failed to import employees");
    }
  };

  const handleProductImport = async (data: Record<string, unknown>[]) => {
    try {
      console.log("Product Import:", data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      updateTestResult(
        "product",
        "success",
        `Successfully imported ${data.length} products`,
        data,
      );
    } catch (error) {
      updateTestResult("product", "error", "Failed to import products");
    }
  };

  const handleContactImport = async (data: Record<string, unknown>[]) => {
    try {
      console.log("Contact Import:", data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      updateTestResult(
        "contact",
        "success",
        `Successfully imported ${data.length} contacts`,
        data,
      );
    } catch (error) {
      updateTestResult("contact", "error", "Failed to import contacts");
    }
  };

  const handleAllTypesImport = async (data: Record<string, unknown>[]) => {
    try {
      console.log("All Types Import:", data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      updateTestResult(
        "allTypes",
        "success",
        `Successfully imported ${data.length} rows with all field types`,
        data,
      );
    } catch (error) {
      updateTestResult("allTypes", "error", "Failed to import data");
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
          Comprehensive testing for the Excel/CSV importer component. Download
          templates to get started!
        </p>
      </div>

      <Tabs defaultValue='employee' className='space-y-6'>
        <TabsList className='grid w-full grid-cols-4'>
          <TabsTrigger value='employee'>Employee Test</TabsTrigger>
          <TabsTrigger value='product'>Product Test</TabsTrigger>
          <TabsTrigger value='contact'>Contact Test</TabsTrigger>
          <TabsTrigger value='allTypes'>All Types Test</TabsTrigger>
        </TabsList>

        {/* Test 1: Employee Import */}
        <TabsContent value='employee' className='space-y-4'>
          <Card>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle>Test 1: Employee Import</CardTitle>
                  <CardDescription>
                    Tests required fields, unique constraints, regex validation,
                    and type conversion
                  </CardDescription>
                </div>
                {testResults.employee &&
                  getStatusIcon(testResults.employee.status)}
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
                      <span className='text-muted-foreground'>
                        ({field.label})
                      </span>
                      {field.required && (
                        <Badge variant='destructive'>Required</Badge>
                      )}
                      {field.unique && <Badge variant='outline'>Unique</Badge>}
                      {field.parseType && (
                        <Badge variant='secondary'>{field.parseType}</Badge>
                      )}
                      {field.parseRegex && (
                        <Badge variant='default'>Regex</Badge>
                      )}
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
                  <p className='font-semibold'>
                    {testResults.employee.message}
                  </p>
                  {testResults.employee.data && (
                    <pre className='mt-2 max-h-40 overflow-auto rounded bg-black/5 p-2 text-xs dark:bg-white/5'>
                      {JSON.stringify(testResults.employee.data, null, 2)}
                    </pre>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Test 2: Product Import */}
        <TabsContent value='product' className='space-y-4'>
          <Card>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle>Test 2: Product Import</CardTitle>
                  <CardDescription>
                    Tests SKU format validation and price/stock number parsing
                  </CardDescription>
                </div>
                {testResults.product &&
                  getStatusIcon(testResults.product.status)}
              </div>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex justify-center'>
                <ExcelImporter
                  fields={productFields}
                  onImport={handleProductImport}
                />
              </div>

              <div className='space-y-2'>
                <h3 className='font-semibold'>Field Configuration:</h3>
                <div className='grid gap-2'>
                  {productFields.map((field) => (
                    <div
                      key={field.value}
                      className='flex items-center gap-2 rounded-md border p-2 text-sm'
                    >
                      <code className='rounded bg-muted px-2 py-1'>
                        {field.value}
                      </code>
                      <span className='text-muted-foreground'>
                        ({field.label})
                      </span>
                      {field.required && (
                        <Badge variant='destructive'>Required</Badge>
                      )}
                      {field.unique && <Badge variant='outline'>Unique</Badge>}
                      {field.parseType && (
                        <Badge variant='secondary'>{field.parseType}</Badge>
                      )}
                      {field.parseRegex && (
                        <Badge
                          variant='default'
                          title={field.parseRegexMessage}
                        >
                          Regex
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {testResults.product && (
                <div
                  className={`rounded-lg border p-4 ${
                    testResults.product.status === "success"
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : "border-red-500 bg-red-50 dark:bg-red-950"
                  }`}
                >
                  <p className='font-semibold'>{testResults.product.message}</p>
                  {testResults.product.data && (
                    <pre className='mt-2 max-h-40 overflow-auto rounded bg-black/5 p-2 text-xs dark:bg-white/5'>
                      {JSON.stringify(testResults.product.data, null, 2)}
                    </pre>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Test 3: Contact Import */}
        <TabsContent value='contact' className='space-y-4'>
          <Card>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle>Test 3: Contact Import</CardTitle>
                  <CardDescription>
                    Tests simple import with optional fields and regex
                    validation
                  </CardDescription>
                </div>
                {testResults.contact &&
                  getStatusIcon(testResults.contact.status)}
              </div>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex justify-center'>
                <ExcelImporter
                  fields={contactFields}
                  onImport={handleContactImport}
                />
              </div>

              <div className='space-y-2'>
                <h3 className='font-semibold'>Field Configuration:</h3>
                <div className='grid gap-2'>
                  {contactFields.map((field) => (
                    <div
                      key={field.value}
                      className='flex items-center gap-2 rounded-md border p-2 text-sm'
                    >
                      <code className='rounded bg-muted px-2 py-1'>
                        {field.value}
                      </code>
                      <span className='text-muted-foreground'>
                        ({field.label})
                      </span>
                      {field.required && (
                        <Badge variant='destructive'>Required</Badge>
                      )}
                      {field.parseRegex && (
                        <Badge
                          variant='default'
                          title={field.parseRegexMessage}
                        >
                          Regex
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {testResults.contact && (
                <div
                  className={`rounded-lg border p-4 ${
                    testResults.contact.status === "success"
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : "border-red-500 bg-red-50 dark:bg-red-950"
                  }`}
                >
                  <p className='font-semibold'>{testResults.contact.message}</p>
                  {testResults.contact.data && (
                    <pre className='mt-2 max-h-40 overflow-auto rounded bg-black/5 p-2 text-xs dark:bg-white/5'>
                      {JSON.stringify(testResults.contact.data, null, 2)}
                    </pre>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Test 4: All Field Types */}
        <TabsContent value='allTypes' className='space-y-4'>
          <Card>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle>Test 4: All Field Types</CardTitle>
                  <CardDescription>
                    Tests all supported field types: string, number, date,
                    boolean
                  </CardDescription>
                </div>
                {testResults.allTypes &&
                  getStatusIcon(testResults.allTypes.status)}
              </div>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex justify-center'>
                <ExcelImporter
                  fields={allTypesFields}
                  onImport={handleAllTypesImport}
                />
              </div>

              <div className='space-y-2'>
                <h3 className='font-semibold'>Field Configuration:</h3>
                <div className='grid gap-2'>
                  {allTypesFields.map((field) => (
                    <div
                      key={field.value}
                      className='flex items-center gap-2 rounded-md border p-2 text-sm'
                    >
                      <code className='rounded bg-muted px-2 py-1'>
                        {field.value}
                      </code>
                      <span className='text-muted-foreground'>
                        ({field.label})
                      </span>
                      {field.parseType && (
                        <Badge variant='secondary'>{field.parseType}</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {testResults.allTypes && (
                <div
                  className={`rounded-lg border p-4 ${
                    testResults.allTypes.status === "success"
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : "border-red-500 bg-red-50 dark:bg-red-950"
                  }`}
                >
                  <p className='font-semibold'>
                    {testResults.allTypes.message}
                  </p>
                  {testResults.allTypes.data && (
                    <pre className='mt-2 max-h-40 overflow-auto rounded bg-black/5 p-2 text-xs dark:bg-white/5'>
                      {JSON.stringify(testResults.allTypes.data, null, 2)}
                    </pre>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Test Summary */}
      <Card className='mt-8'>
        <CardHeader>
          <CardTitle>Test Summary</CardTitle>
          <CardDescription>Overview of all test results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {["employee", "product", "contact", "allTypes"].map((testName) => {
              const result = testResults[testName];
              return (
                <div
                  key={testName}
                  className='flex items-center gap-3 rounded-lg border p-4'
                >
                  {getStatusIcon(result?.status)}
                  <div>
                    <p className='font-semibold capitalize'>{testName}</p>
                    <p className='text-sm text-muted-foreground'>
                      {result?.status || "Not tested"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
