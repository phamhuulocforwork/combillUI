"use client";

import { useState } from "react";

import { CheckCircleIcon, Copy } from "lucide-react";
import { toast } from "sonner";

import MonacoEditor from "@/components/blocks/monaco-editor/monaco-editor";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { EditorLanguage } from "@/types";

export type SnippetMode = "vscode" | "sublimetext" | "atom";

interface SnippetOutputProps {
  mode: SnippetMode;
  onModeChange: (mode: SnippetMode) => void;
  generatedSnippet: string;
}

export function SnippetOutput({
  mode,
  onModeChange,
  generatedSnippet,
}: SnippetOutputProps) {
  const [copyLabel, setCopyLabel] = useState("Copy");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedSnippet);
      setCopyLabel("Copied!");
      setTimeout(() => setCopyLabel("Copy"), 1500);
      toast.success("Snippet copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy snippet");
    }
  };

  return (
    <div className='flex flex-col h-full space-y-4'>
      <div className='flex flex-row items-center justify-between space-y-0'>
        <Tabs
          value={mode}
          onValueChange={(value) => onModeChange(value as SnippetMode)}
        >
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger className='flex items-center gap-2' value='vscode'>
              <Icons.vscode className='size-4' />
              VS Code
            </TabsTrigger>
            <TabsTrigger
              className='flex items-center gap-2'
              value='sublimetext'
            >
              <Icons.sublime className='size-4' />
              Sublime Text
            </TabsTrigger>
            <TabsTrigger className='flex items-center gap-2' value='atom'>
              <Icons.atom className='size-4' />
              Atom
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Button
          variant='outline'
          className='font-medium text-sm ml-2'
          onClick={copyToClipboard}
        >
          {copyLabel === "Copied!" ? (
            <CheckCircleIcon className='text-green-500' />
          ) : (
            <Copy />
          )}
          <span>{copyLabel}</span>
        </Button>
      </div>

      <div className='flex-1 min-h-0'>
        <MonacoEditor
          code={generatedSnippet}
          onCodeChange={() => {}}
          language={EditorLanguage.JSON}
          editable={false}
        />
      </div>
    </div>
  );
}
