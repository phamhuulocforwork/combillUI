"use client";

import { useEffect, useState } from "react";

import { useCompletion } from "@ai-sdk/react";
import { CheckCircleIcon, Copy, LoaderCircle, Zap } from "lucide-react";
import { Atom, Code, Eye } from "lucide-react";

import { CodeEditor, oneDarkPro } from "@/components/layout/code-editor";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { htmlToJsx } from "@/lib/utils";

import { useToast } from "@/hooks/use-toast";

import ResultOutput from "./_components/result-output";

export default function TestPage() {
  const [activeTab, setActiveTab] = useState("preview");
  const [htmlCode, setHtmlCode] = useState("");
  const [copyLabel, setCopyLabel] = useState("Copy");
  const { toast } = useToast();

  const { completion, complete, isLoading, error } = useCompletion({
    api: "/api/generate-skeleton",
    onFinish: () => setActiveTab("preview"),
  });

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    }
  }, [error]);

  const code = completion.replace(/^```html\n/, "").replace(/\n```$/, "");
  return (
    <div className='h-[calc(100vh-2*var(--header-height))] grid grid-cols-1 lg:grid-cols-2 gap-4'>
      <div className='col-span-1'>
        <Card className='h-full'>
          <CardHeader className='pb-3'>
            <div className='flex items-center justify-between'>
              <CardTitle className='text-lg'>Paste Your HTML Code</CardTitle>
              <Button
                onClick={async () => {
                  setActiveTab("html");
                  await complete(htmlCode);
                }}
                disabled={isLoading}
                className='flex items-center gap-2'
              >
                {isLoading ? (
                  <>
                    <LoaderCircle className='animate-spin w-4 h-4' />
                    Generating
                  </>
                ) : (
                  <>
                    <Zap className='w-4 h-4' />
                    Generate
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent className='p-0'>
            <CodeEditor
              value={htmlCode}
              onChange={(value) => setHtmlCode(value || "")}
              language='html'
              height='calc(100vh - 8rem)'
              customDarkTheme={{
                base: "vs-dark",
                inherit: true,
                ...oneDarkPro,
              }}
            />
          </CardContent>
        </Card>
      </div>
      <div className='col-span-1'>
        <Card className='h-full'>
          <CardHeader className='pb-3'>
            <div className='flex items-center justify-between'>
              <CardTitle className='text-lg'>Generated Skeleton</CardTitle>
              <Button
                variant='outline'
                size='sm'
                onClick={() => {
                  navigator.clipboard.writeText(
                    activeTab === "html" ? code : htmlToJsx(code),
                  );
                  setCopyLabel("Copied!");
                  setTimeout(() => setCopyLabel("Copy"), 1500);
                }}
                className='flex items-center gap-2'
              >
                {copyLabel === "Copied!" ? (
                  <CheckCircleIcon className='w-4 h-4 text-green-500' />
                ) : (
                  <Copy className='w-4 h-4' />
                )}
                {copyLabel}
              </Button>
            </div>
          </CardHeader>
          <CardContent className='p-0'>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className='h-full'
            >
              <TabsList className='grid w-full grid-cols-3 mb-4'>
                <TabsTrigger
                  value='preview'
                  className='flex items-center gap-2'
                >
                  <Eye className='w-4 h-4' />
                  Preview
                </TabsTrigger>
                <TabsTrigger value='html' className='flex items-center gap-2'>
                  <Code className='w-4 h-4' />
                  HTML
                </TabsTrigger>
                <TabsTrigger value='react' className='flex items-center gap-2'>
                  <Atom className='w-4 h-4' />
                  React
                </TabsTrigger>
              </TabsList>
              <TabsContent value='preview' className='mt-0 h-[calc(100%-5rem)]'>
                <ResultOutput
                  activeTab='preview'
                  code={code}
                  onCodeChange={(code) => {}}
                />
              </TabsContent>
              <TabsContent value='html' className='mt-0 h-[calc(100%-5rem)]'>
                <ResultOutput
                  activeTab='html'
                  code={code}
                  onCodeChange={(code) => {}}
                />
              </TabsContent>
              <TabsContent value='react' className='mt-0 h-[calc(100%-5rem)]'>
                <ResultOutput
                  activeTab='react'
                  code={code}
                  onCodeChange={(code) => {}}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
