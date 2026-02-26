'use client';

import Editor, { type OnMount } from '@monaco-editor/react';
import type { editor } from 'monaco-editor';
import { useTheme } from 'next-themes';
import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';

import { EditorLanguage } from '@/types';

import vercelTheme from './vercel-theme.json';

export interface MonacoEditorRef {
  formatCode: () => void;
}

interface MonacoEditorProps {
  code: string;
  onCodeChange: (code: string) => void;
  editable?: boolean;
  language?: EditorLanguage;
}

const MonacoEditor = React.forwardRef<MonacoEditorRef, MonacoEditorProps>(
  ({ code, onCodeChange, language = EditorLanguage.HTML }, ref) => {
    const editorRef = useRef<any>(null);
    const { theme: systemTheme } = useTheme();

    const activeTheme = systemTheme || 'dark';

    const editorTheme = useMemo(() => {
      if (activeTheme === 'light') {
        return 'vs-light';
      }

      if (activeTheme === 'dark') {
        return 'vs-dark';
      }

      return activeTheme === 'dark' ? 'vs-dark' : 'light';
    }, [activeTheme]);

    const defaultOptions: editor.IStandaloneEditorConstructionOptions = {
      fontSize: 14,
      fontWeight: '500',
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
      scrollBeyondLastLine: false,
      automaticLayout: true,
      minimap: { enabled: false },
      lineNumbers: 'on',
      wordWrap: 'on',
      tabSize: 2,
      insertSpaces: true,
      bracketPairColorization: { enabled: true },
      cursorBlinking: 'blink',
      formatOnPaste: true,
      formatOnType: true,
      suggestOnTriggerCharacters: true,
      quickSuggestions: true,
      parameterHints: { enabled: true },
      hover: { enabled: true },
      folding: true,
      foldingStrategy: 'auto',
      renderLineHighlight: 'all',
      selectOnLineNumbers: true,
      smoothScrolling: true,
    };

    const beforeMount = useCallback((monaco: any) => {
      monaco.editor.defineTheme('vs-dark', {
        ...vercelTheme,
      });
    }, []);

    const handleEditorDidMount: OnMount = (editor, _monaco) => {
      editorRef.current = editor;

      editor.onDidChangeModelContent(() => {
        const value = editor.getValue();
        onCodeChange(value);
      });
    };

    useImperativeHandle(ref, () => ({
      formatCode: () => {
        if (editorRef.current) {
          editorRef.current.getAction('editor.action.formatDocument')?.run();
        }
      },
    }));

    const languageMap = {
      [EditorLanguage.HTML]: 'html',
      [EditorLanguage.JAVASCRIPT]: 'javascript',
    };

    return (
      <div className="h-full w-full overflow-hidden rounded-md border border-border shadow-md">
        <Editor
          height="100%"
          language={languageMap[language as keyof typeof languageMap]}
          value={code}
          theme={editorTheme}
          onMount={handleEditorDidMount}
          beforeMount={beforeMount}
          options={defaultOptions}
        />
      </div>
    );
  },
);

MonacoEditor.displayName = 'MonacoEditor';

export default MonacoEditor;
