"use client";

import { useCallback, useMemo } from "react";

import { Editor as MonacoEditor } from "@monaco-editor/react";
import { Loader2 } from "lucide-react";
import { editor } from "monaco-editor";
import { useTheme } from "next-themes";

import { Badge } from "@/components/ui/badge";

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

  const detectedLanguage = useMemo(() => {
    if (language) return language;

    const languagePatterns = {
      javascript: /\b(const|let|var|function|=>\s*{|import\s+.+\s+from)\b/,
      typescript:
        /\b(interface|type|namespace|const|let|:string|:number|:boolean)\b/,
      python:
        /\b(def|class|import\s+.+|from\s+.+\s+import|if\s+__name__\s*==\s*["']__main__["'])\b/,
      html: /<\/?[a-z][\s\S]*>/i,
      css: /[.#][\w-]+\s*{/,
      json: /^[\s]*[{[][\s\S]*[}\]][\s]*$/,
      sql: /\b(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|FROM|WHERE)\b/i,
    };

    if (!value) return "javascript";

    for (const [lang, pattern] of Object.entries(languagePatterns)) {
      if (pattern.test(value)) {
        return lang;
      }
    }

    return "javascript";
  }, [language, value]);

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
    <div className='relative rounded-md border' style={{ height }}>
      <MonacoEditor
        value={value}
        onChange={onChange}
        options={defaultOptions}
        className={className}
        language={detectedLanguage}
        theme={editorTheme}
        height='100%'
        beforeMount={beforeMount}
        loading={
          <div className='flex h-full items-center justify-center text-sm text-muted-foreground'>
            <Loader2 className='size-5 animate-spin mr-2' />
            Loading...
          </div>
        }
        {...props}
      />
      <div className='absolute bottom-2 right-2 flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity'>
        <Badge>{detectedLanguage}</Badge>
      </div>
    </div>
  );
}
