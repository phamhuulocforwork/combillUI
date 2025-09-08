"use client";

import { useEffect, useState } from "react";

import { useCompletion } from "@ai-sdk/react";
import { LoaderCircle, Zap } from "lucide-react";

import { CodeEditor, oneDarkPro } from "@/components/layout/code-editor";
import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";

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
        <div className='h-[var(--header-height)] flex flex-row items-center justify-between space-y-0 px-4'>
          <div className='text-lg font-bold'>Paste Your HTML Code</div>
          <Button
            onClick={async () => {
              setActiveTab("html");
              await complete(htmlCode);
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <LoaderCircle className='animate-spin w-4 h-4 mr-2' />
                Generating
              </>
            ) : (
              <>
                <Zap className='w-4 h-4 mr-2' />
                Generate
              </>
            )}
          </Button>
        </div>
        <CodeEditor
          value={htmlCode}
          onChange={(value) => setHtmlCode(value || "")}
          className='h-[calc(100vh-3*var(--header-height))] bg-red-500'
          customDarkTheme={{
            base: "vs-dark",
            inherit: true,
            ...oneDarkPro,
          }}
        />
      </div>
      <div className='col-span-1'>
        <div className='flex flex-row items-center justify-between space-y-0 pt-4 pb-0 px-4'>
          <div className='text-lg font-bold'>Preview</div>
        </div>
      </div>
    </div>
  );
}
