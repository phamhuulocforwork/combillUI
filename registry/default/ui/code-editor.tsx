"use client";

import * as React from "react";
import type { HTMLAttributes } from "react";

import { createHighlighter } from "shiki";

import { cn } from "@/lib/utils";

export interface CodeEditorProps
  extends Omit<HTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  /**
   * The current value of the editor
   */
  value: string;
  /**
   * Callback when the value changes
   */
  onChange?: (value: string) => void;
  /**
   * The language for syntax highlighting
   * @default "javascript"
   */
  language?: string;
  /**
   * Placeholder text when the editor is empty
   * @default "// Write your code here..."
   */
  placeholder?: string;
  /**
   * Whether to show line numbers
   * @default true
   */
  lineNumbers?: boolean;
  /**
   * Whether the editor is read-only
   * @default false
   */
  readOnly?: boolean;
}

const highlighter = await createHighlighter({
  langs: [
    "c",
    "c++",
    "javascript",
    "typescript",
    "jsx",
    "tsx",
    "html",
    "css",
    "json",
    "markdown",
  ],
  themes: ["one-dark-pro", "one-light"],
});

export const CodeEditor = React.forwardRef<
  HTMLTextAreaElement,
  CodeEditorProps
>(
  (
    {
      value,
      onChange,
      language = "javascript",
      placeholder = "// Write your code here...",
      className,
      readOnly = false,
      ...props
    },
    ref,
  ) => {
    const [history, setHistory] = React.useState<string[]>([value || ""]);
    const [historyIndex, setHistoryIndex] = React.useState(0);
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    const preRef = React.useRef<HTMLPreElement>(null);
    const combinedRef = React.useMemo(
      () =>
        ref
          ? (node: HTMLTextAreaElement) => {
              textareaRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) ref.current = node;
            }
          : textareaRef,
      [ref],
    );

    // Handle history for undo/redo
    const updateHistory = React.useCallback(
      (newValue: string) => {
        setHistory((prev) => {
          const newHistory = prev.slice(0, historyIndex + 1);
          newHistory.push(newValue);
          return newHistory;
        });
        setHistoryIndex((prev) => prev + 1);
      },
      [historyIndex],
    );

    // Handle value change
    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        onChange?.(newValue);
        updateHistory(newValue);
      },
      [onChange, updateHistory],
    );

    // Handle undo/redo
    const handleUndo = React.useCallback(() => {
      if (historyIndex > 0) {
        setHistoryIndex((prev) => prev - 1);
        const previousValue = history[historyIndex - 1];
        onChange?.(previousValue);
      }
    }, [history, historyIndex, onChange]);

    const handleRedo = React.useCallback(() => {
      if (historyIndex < history.length - 1) {
        setHistoryIndex((prev) => prev + 1);
        const nextValue = history[historyIndex + 1];
        onChange?.(nextValue);
      }
    }, [history, historyIndex, onChange]);

    // Handle tab key
    const handleTab = React.useCallback(
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Tab") {
          e.preventDefault();
          const textarea = e.currentTarget;
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const newValue =
            textarea.value.substring(0, start) +
            "  " +
            textarea.value.substring(end);
          textarea.value = newValue;
          textarea.selectionStart = textarea.selectionEnd = start + 2;
          handleChange({
            target: textarea,
          } as React.ChangeEvent<HTMLTextAreaElement>);
        }
      },
      [handleChange],
    );

    // Handle keyboard shortcuts
    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        // Tab handling
        if (e.key === "Tab") {
          handleTab(e);
        }

        // Undo/Redo
        if ((e.metaKey || e.ctrlKey) && e.key === "z") {
          e.preventDefault();
          if (e.shiftKey) {
            handleRedo();
          } else {
            handleUndo();
          }
        }

        // Auto-pairing brackets and quotes
        const pairs: Record<string, string> = {
          "(": ")",
          "{": "}",
          "[": "]",
          "'": "'",
          '"': '"',
          "`": "`",
        };

        if (pairs[e.key]) {
          e.preventDefault();
          const textarea = e.currentTarget;
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;

          if (start === end) {
            // No selection, insert pair
            const newValue =
              textarea.value.substring(0, start) +
              e.key +
              pairs[e.key] +
              textarea.value.substring(end);
            textarea.value = newValue;
            textarea.selectionStart = textarea.selectionEnd = start + 1;
          } else {
            // Wrap selection with pair
            const newValue =
              textarea.value.substring(0, start) +
              e.key +
              textarea.value.substring(start, end) +
              pairs[e.key] +
              textarea.value.substring(end);
            textarea.value = newValue;
            textarea.selectionStart = start + 1;
            textarea.selectionEnd = end + 1;
          }

          handleChange({
            target: textarea,
          } as React.ChangeEvent<HTMLTextAreaElement>);
        }
      },
      [handleChange, handleRedo, handleTab, handleUndo],
    );

    // Sync scroll between textarea and highlighted code
    const handleScroll = React.useCallback(() => {
      if (preRef.current && textareaRef.current) {
        preRef.current.scrollTop = textareaRef.current.scrollTop;
        preRef.current.scrollLeft = textareaRef.current.scrollLeft;
      }
    }, []);

    // Generate highlighted HTML
    const highlightedCode = React.useMemo(() => {
      try {
        const html = highlighter.codeToHtml(value || "", {
          lang: language,
          theme: "one-dark-pro",
          colorReplacements: {
            "one-dark-pro": {
              "#282c34": "transparent",
            },
          },
        });
        return html;
      } catch (error) {
        console.error("Syntax highlighting error:", error);
        return `<pre>${value || ""}</pre>`;
      }
    }, [value, language]);

    return (
      <div
        className={cn(
          "relative rounded-md border border-input bg-background font-mono text-sm",
          "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          className,
        )}
      >
        <div className='relative overflow-auto'>
          <pre
            ref={preRef}
            className='pointer-events-none absolute h-full w-full overflow-auto whitespace-pre p-3'
            aria-hidden='true'
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
          <textarea
            ref={combinedRef}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onScroll={handleScroll}
            placeholder={placeholder}
            spellCheck='false'
            className='h-[350px] min-h-[150px] w-full resize-y overflow-auto whitespace-pre bg-transparent p-3 font-mono text-transparent caret-foreground outline-none'
            readOnly={readOnly}
            {...props}
          />
        </div>
      </div>
    );
  },
);
CodeEditor.displayName = "CodeEditor";
