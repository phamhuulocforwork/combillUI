"use client";

import MonacoEditor from "@/components/blocks/monaco-editor/monaco-editor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { EditorLanguage } from "@/types";

interface SnippetInputProps {
  description: string;
  onDescriptionChange: (value: string) => void;
  tabTrigger: string;
  onTabTriggerChange: (value: string) => void;
  snippet: string;
  onSnippetChange: (value: string) => void;
}

export function SnippetInput({
  description,
  onDescriptionChange,
  tabTrigger,
  onTabTriggerChange,
  snippet,
  onSnippetChange,
}: SnippetInputProps) {
  return (
    <div className='flex flex-col h-full space-y-4'>
      <div className='flex space-x-4 mb-2'>
        <div className='flex-1'>
          <Label htmlFor='description'>Title & Description</Label>
          <Input
            id='description'
            placeholder='Title & Description...'
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
        </div>

        <div className='flex-1'>
          <Label htmlFor='tabTrigger'>Tab Trigger</Label>
          <Input
            id='tabTrigger'
            placeholder='Tab trigger...'
            value={tabTrigger}
            onChange={(e) => onTabTriggerChange(e.target.value)}
          />
        </div>
      </div>

      <div className='flex-1 flex flex-col min-h-0'>
        <Label htmlFor='snippet' className='mb-1.5'>
          Snippet
        </Label>
        <p className='text-xs text-muted-foreground mb-3'>
          📌 Tip: Use Tab to insert tabs, type placeholders like $
          {"{1:example}"} 👌
        </p>
        <div className='flex-1 min-h-0'>
          <MonacoEditor
            code={snippet}
            onCodeChange={onSnippetChange}
            language={EditorLanguage.TEXT}
          />
        </div>
      </div>
    </div>
  );
}
