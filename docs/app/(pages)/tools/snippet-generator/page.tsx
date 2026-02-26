'use client';

import { useEffect, useState } from 'react';

import { SnippetInput } from '@/components/tools/snippet-generator/snippet-input';
import {
  type SnippetMode,
  SnippetOutput,
} from '@/components/tools/snippet-generator/snippet-output';
import {
  parseAtom,
  parseSublimeText,
  parseVSCode,
} from '@/components/tools/snippet-generator/utils';

const parseSnippet = (
  mode: SnippetMode,
  description: string,
  tabTrigger: string,
  snippet: string,
): string => {
  if (mode === 'vscode') {
    return parseVSCode(description, tabTrigger, snippet);
  }
  if (mode === 'sublimetext') {
    return parseSublimeText(description, tabTrigger, snippet);
  }
  if (mode === 'atom') {
    return parseAtom(description, tabTrigger, snippet);
  }
  return '';
};

export default function SnippetGeneratorPage() {
  const [description, setDescription] = useState('');
  const [tabTrigger, setTabTrigger] = useState('');
  const [snippet, setSnippet] = useState('');
  const [mode, setMode] = useState<SnippetMode>('vscode');

  useEffect(() => {
    const url = new URL(window.location.href);
    const urlDescription = url.searchParams.get('description') || '';
    const urlTabTrigger = url.searchParams.get('tabtrigger') || '';
    const urlSnippet = url.searchParams.get('snippet') || '';
    const urlMode = (url.searchParams.get('mode') || 'vscode') as SnippetMode;

    setDescription(urlDescription);
    setTabTrigger(urlTabTrigger);
    setSnippet(urlSnippet);
    setMode(urlMode);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('description', description);
    url.searchParams.set('tabtrigger', tabTrigger);
    url.searchParams.set('snippet', snippet);
    url.searchParams.set('mode', mode);

    window.history.replaceState({}, '', `${url.pathname}?${url.searchParams}`);
  }, [description, tabTrigger, snippet, mode]);

  const generatedSnippet = parseSnippet(mode, description, tabTrigger, snippet);

  return (
    <div className="container mx-auto flex h-[calc(100vh-var(--header-height))] flex-col border border-border border-dashed">
      <main className="flex flex-grow overflow-hidden">
        <div className="flex flex-1 flex-col overflow-hidden lg:flex-row">
          <div className="flex flex-1 flex-col overflow-hidden rounded-none lg:border-r">
            <div className="flex-grow overflow-hidden p-4">
              <SnippetInput
                description={description}
                onDescriptionChange={setDescription}
                tabTrigger={tabTrigger}
                onTabTriggerChange={setTabTrigger}
                snippet={snippet}
                onSnippetChange={setSnippet}
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col overflow-hidden rounded-none">
            <div className="flex-grow overflow-hidden p-4">
              <SnippetOutput
                mode={mode}
                onModeChange={setMode}
                generatedSnippet={generatedSnippet}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
