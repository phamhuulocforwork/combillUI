"use client";

import { useCallback, useMemo } from "react";

import { Editor as MonacoEditor } from "@monaco-editor/react";
import { Loader2 } from "lucide-react";
import { editor } from "monaco-editor";
import { useTheme } from "next-themes";

export interface CodeEditorTheme {
  base: string;
  inherit: boolean;
  colors: Record<string, string>;
  rules: Array<{
    token: string;
    foreground?: string;
    background?: string;
    fontStyle?: string;
  }>;
}

export interface CodeEditorProps {
  value?: string;
  onChange?: (value: string | undefined) => void;
  language?: string;
  height?: string | number;
  theme?: "light" | "dark" | "system";
  customLightTheme?: CodeEditorTheme;
  customDarkTheme?: CodeEditorTheme;
  options?: editor.IStandaloneEditorConstructionOptions;
  className?: string;
}

export function CodeEditor({
  value,
  onChange,
  language,
  height = "300px",
  theme: propTheme,
  customLightTheme,
  customDarkTheme,
  options,
  className,
  ...props
}: CodeEditorProps) {
  const { theme: systemTheme } = useTheme();

  const activeTheme = propTheme || systemTheme || "dark";

  const defaultOptions: editor.IStandaloneEditorConstructionOptions = {
    fontSize: 14,
    fontWeight: "600",
    scrollBeyondLastLine: false,
    automaticLayout: true,
    minimap: { enabled: false },
    lineNumbers: "on",
    wordWrap: "on",
    tabSize: 2,
    bracketPairColorization: { enabled: true },
    cursorBlinking: "blink",
    formatOnPaste: true,
    ...options,
  };

  const beforeMount = useCallback(
    (monaco: any) => {
      if (customLightTheme) {
        monaco.editor.defineTheme("custom-light-theme", customLightTheme);
      }

      if (customDarkTheme) {
        monaco.editor.defineTheme("custom-dark-theme", customDarkTheme);
      }
    },
    [customLightTheme, customDarkTheme],
  );

  const editorTheme = useMemo(() => {
    if (activeTheme === "light" && customLightTheme) {
      return "custom-light-theme";
    }

    if (activeTheme === "dark" && customDarkTheme) {
      return "custom-dark-theme";
    }

    return activeTheme === "dark" ? "vs-dark" : "light";
  }, [activeTheme, customLightTheme, customDarkTheme]);

  return (
    <MonacoEditor
      value={value}
      onChange={onChange}
      options={defaultOptions}
      className={className}
      theme={editorTheme}
      height={height}
      beforeMount={beforeMount}
      loading={
        <div className='flex h-full items-center justify-center text-sm text-muted-foreground'>
          <Loader2 className='size-5 animate-spin mr-2' />
          Loading...
        </div>
      }
      {...props}
    />
  );
}
