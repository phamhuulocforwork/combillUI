import React from "react";

import MonacoEditor, { MonacoEditorRef } from "./monaco-editor";

interface CodeInputProps {
  code: string;
  onCodeChange: (code: string) => void;
}

const CodeInput = React.forwardRef<MonacoEditorRef, CodeInputProps>(
  ({ code, onCodeChange }, ref) => {
    return (
      <div className='w-full h-full rounded-md overflow-auto'>
        <MonacoEditor ref={ref} code={code} onCodeChange={onCodeChange} />
      </div>
    );
  },
);

CodeInput.displayName = "CodeInput";

export default CodeInput;
