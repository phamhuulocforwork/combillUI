"use client";

import { useEffect, useState } from "react";

import { useCompletion } from "@ai-sdk/react";
import {
  ArrowBigRightDash,
  CheckCircleIcon,
  Code,
  Copy,
  Eye,
  LoaderCircle,
} from "lucide-react";

import { Icons } from "@/components/icons";
import CodeInput from "@/components/tools/skeleton-generator/code-input";
import ResultOutput from "@/components/tools/skeleton-generator/result-output";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { htmlToJsx } from "@/lib/utils";

import { useToast } from "@/hooks/use-toast";

export default function SkeletonGenerator() {
  const [activeTab, setActiveTab] = useState("preview");
  const [htmlCode, setHtmlCode] = useState("");
  const [copyLabel, setCopyLabel] = useState("Copy");
  const { toast } = useToast();

  const { completion, complete, isLoading, error } = useCompletion({
    api: "/api/generate-skeleton",
    onFinish: () => {
      console.log("Completion finished, switching to preview tab");
      setActiveTab("preview");
    },
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
    <div className='flex flex-col h-[calc(100vh-var(--header-height))] container mx-auto border border-border border-dashed'>
      <main className='flex-grow flex overflow-hidden '>
        <div className='flex-1 flex flex-col lg:flex-row overflow-hidden'>
          <div className='flex-1 flex flex-col overflow-hidden rounded-none lg:border-r'>
            <div className='flex flex-row items-center justify-between  px-4 pt-4 pb-0'>
              <div className='text-lg font-bold '>HTML Code</div>
              <Button
                onClick={async () => {
                  setActiveTab("html");
                  await complete(htmlCode);
                }}
                disabled={isLoading}
                className='text-sm font-medium'
              >
                {isLoading ? (
                  <>
                    Generating
                    <LoaderCircle className='animate-spin' />
                  </>
                ) : (
                  <>
                    Submit
                    <ArrowBigRightDash />
                  </>
                )}
              </Button>
            </div>
            <div className='flex-grow p-4 overflow-hidden'>
              <CodeInput
                code={htmlCode}
                onCodeChange={(code) => setHtmlCode(code)}
              />
            </div>
          </div>
          <div className='flex-1 flex flex-col overflow-hidden rounded-none'>
            <div className='flex flex-row items-center justify-between space-y-0 pt-4 pb-0 px-4'>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className='w-full'
              >
                <TabsList className='grid w-full grid-cols-3 max-w-xs'>
                  <TabsTrigger
                    value='preview'
                    className='flex items-center gap-2'
                  >
                    <Eye className='size-4' />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value='html' className='flex items-center gap-2'>
                    <Code className='size-4' />
                    HTML
                  </TabsTrigger>
                  <TabsTrigger
                    value='react'
                    className='flex items-center gap-2'
                  >
                    <Icons.reactjs className='size-4' />
                    React
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <Button
                variant='outline'
                className='font-medium text-sm'
                onClick={() => {
                  navigator.clipboard.writeText(
                    activeTab === "html" ? code : htmlToJsx(code),
                  );
                  setCopyLabel("Copied!");
                  setTimeout(() => setCopyLabel("Copy"), 1500);
                }}
              >
                {copyLabel === "Copied!" ? (
                  <CheckCircleIcon className='text-green-500 ' />
                ) : (
                  <Copy />
                )}
                {copyLabel}
              </Button>
            </div>
            <div className='flex-grow p-4 overflow-hidden'>
              <ResultOutput
                activeTab={activeTab}
                code={code}
                onCodeChange={(code) => {}}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
