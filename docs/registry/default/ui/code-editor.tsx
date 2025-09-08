"use client";

import * as React from "react";

import {
  type BeforeMount,
  Editor as MonacoEditor,
  type OnMount,
} from "@monaco-editor/react";
import { type VariantProps, cva } from "class-variance-authority";
import type { editor } from "monaco-editor";

import { cn } from "@/lib/utils";

export interface Language {
  value: string;
  label: string;
}

export const languages: Language[] = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "json", label: "JSON" },
  { value: "markdown", label: "Markdown" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "cpp", label: "C++" },
];

const codeEditorVariants = cva(
  "w-full overflow-hidden rounded-md border bg-background",
  {
    variants: {
      variant: {
        default: "border-border",
        outline: "border-2",
      },
      size: {
        default: "min-h-[300px]",
        sm: "min-h-[200px]",
        lg: "min-h-[500px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface CodeEditorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof codeEditorVariants> {
  value: string;
  onChange?: (value: string) => void;
  language?: string;
  height?: string;
  theme?: "light" | "dark";
  options?: editor.IStandaloneEditorConstructionOptions;
  onMount?: OnMount;
  readOnly?: boolean;
}

const CodeEditor = React.forwardRef<HTMLDivElement, CodeEditorProps>(
  (
    {
      className,
      variant,
      size,
      value,
      onChange,
      language = "javascript",
      height = "300px",
      theme = "dark",
      options,
      onMount,
      readOnly = false,
      ...props
    },
    ref,
  ) => {
    const handleEditorDidMount: OnMount = (editor, monaco) => {
      if (onMount) {
        onMount(editor, monaco);
      }
    };

    const handleBeforeMount: BeforeMount = (monaco) => {
      // Define VS Code dark theme
      monaco.editor.defineTheme("vs-dark-custom", {
        base: "vs-dark",
        inherit: true,
        rules: [],
        colors: {
          "editor.background": "#1e1e1e",
          "editor.foreground": "#d4d4d4",
          "editor.lineHighlightBackground": "#2d2d2d",
          "editorLineNumber.foreground": "#858585",
          "editor.selectionBackground": "#264f78",
          "editor.inactiveSelectionBackground": "#3a3d41",
        },
      });

      monaco.editor.defineTheme("vs-light-custom", {
        base: "vs",
        inherit: true,
        rules: [],
        colors: {
          "editor.background": "#ffffff",
          "editor.foreground": "#000000",
          "editor.lineHighlightBackground": "#f5f5f5",
          "editorLineNumber.foreground": "#999999",
          "editor.selectionBackground": "#b3d7ff",
          "editor.inactiveSelectionBackground": "#e5ebf1",
        },
      });

      if (monaco.languages.typescript) {
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          target: monaco.languages.typescript.ScriptTarget.Latest,
          allowNonTsExtensions: true,
          moduleResolution:
            monaco.languages.typescript.ModuleResolutionKind.NodeJs,
          module: monaco.languages.typescript.ModuleKind.CommonJS,
          noEmit: true,
          esModuleInterop: true,
          jsx: monaco.languages.typescript.JsxEmit.React,
          reactNamespace: "React",
          allowJs: true,
        });
      }
    };

    const defaultOptions: editor.IStandaloneEditorConstructionOptions = {
      fontSize: 14,
      scrollBeyondLastLine: false,
      automaticLayout: true,
      minimap: { enabled: false },
      folding: true,
      lineNumbers: "on",
      wordWrap: "on",
      tabSize: 2,
      bracketPairColorization: { enabled: true },
      cursorBlinking: "blink",
      formatOnPaste: true,
      readOnly,
      ...options,
    };

    return (
      <div
        className={cn(codeEditorVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <MonacoEditor
          height={height}
          language={language}
          value={value}
          onChange={(value) => onChange?.(value || "")}
          theme={theme === "dark" ? "vs-dark-custom" : "vs-light-custom"}
          options={defaultOptions}
          beforeMount={handleBeforeMount}
          onMount={handleEditorDidMount}
          loading={
            <div className='flex h-full w-full items-center justify-center text-sm text-muted-foreground'>
              Loading editor...
            </div>
          }
        />
      </div>
    );
  },
);

CodeEditor.displayName = "CodeEditor";

export { CodeEditor, codeEditorVariants };
