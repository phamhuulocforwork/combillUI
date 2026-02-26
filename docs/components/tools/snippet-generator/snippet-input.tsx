'use client';

import MonacoEditor from '@/components/blocks/monaco-editor/monaco-editor';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { EditorLanguage } from '@/types';

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
    <div className="flex h-full flex-col space-y-4">
      <div className="mb-2 flex space-x-4">
        <div className="flex-1">
          <Label htmlFor="description">Title & Description</Label>
          <Input
            id="description"
            placeholder="Title & Description..."
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
        </div>

        <div className="flex-1">
          <Label htmlFor="tabTrigger">Tab Trigger</Label>
          <Input
            id="tabTrigger"
            placeholder="Tab trigger..."
            value={tabTrigger}
            onChange={(e) => onTabTriggerChange(e.target.value)}
          />
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <Label htmlFor="snippet" className="mb-1.5">
          Snippet
        </Label>
        <p className="mb-3 text-muted-foreground text-xs">
          📌 Tip: Use Tab to insert tabs, type placeholders like $
          {'{1:example}'} 👌
        </p>
        <div className="min-h-0 flex-1">
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
