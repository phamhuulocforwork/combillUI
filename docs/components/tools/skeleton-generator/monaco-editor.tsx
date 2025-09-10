"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";

import Editor, { OnMount } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useTheme } from "next-themes";

import { EditorLanguage } from "@/types";

import oneDarkPro from "./onedarkpro.json";

interface MonacoEditorProps {
  code: string;
  onCodeChange: (code: string) => void;
  editable?: boolean;
  language?: EditorLanguage;
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({
  code,
  onCodeChange,
  language = EditorLanguage.HTML,
}) => {
  const editorRef = useRef<any>(null);
  const { theme: systemTheme } = useTheme();

  const activeTheme = systemTheme || "dark";

  const editorTheme = useMemo(() => {
    if (activeTheme === "light") {
      return "vs-light";
    }

    if (activeTheme === "dark") {
      return "one-dark-pro";
    }

    return activeTheme === "dark" ? "vs-dark" : "light";
  }, [activeTheme]);

  const defaultOptions: editor.IStandaloneEditorConstructionOptions = {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
    scrollBeyondLastLine: false,
    automaticLayout: true,
    minimap: { enabled: false },
    lineNumbers: "on",
    wordWrap: "on",
    tabSize: 2,
    insertSpaces: true,
    bracketPairColorization: { enabled: true },
    cursorBlinking: "blink",
    formatOnPaste: true,
    formatOnType: true,
    suggestOnTriggerCharacters: true,
    quickSuggestions: true,
    parameterHints: { enabled: true },
    hover: { enabled: true },
    folding: true,
    foldingStrategy: "auto",
    renderLineHighlight: "all",
    selectOnLineNumbers: true,
    smoothScrolling: true,
  };

  const beforeMount = useCallback((monaco: any) => {
    monaco.editor.defineTheme("one-dark-pro", {
      base: "vs-dark",
      inherit: true,
      ...oneDarkPro,
    });
  }, []);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;

    editor.onDidChangeModelContent(() => {
      const value = editor.getValue();
      onCodeChange(value);
    });
  };

  const languageMap = {
    [EditorLanguage.HTML]: "html",
    [EditorLanguage.JAVASCRIPT]: "javascript",
  };

  return (
    <div className='w-full h-full border border-border overflow-hidden rounded-md shadow-md'>
      <Editor
        height='100%'
        language={languageMap[language]}
        value={code}
        theme={editorTheme}
        onMount={handleEditorDidMount}
        beforeMount={beforeMount}
        options={defaultOptions}
      />
    </div>
  );
};

export default MonacoEditor;
