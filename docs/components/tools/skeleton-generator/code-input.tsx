import React from 'react';

import MonacoEditor, {
  type MonacoEditorRef,
} from '@/components/blocks/monaco-editor/monaco-editor';

interface CodeInputProps {
  code: string;
  onCodeChange: (code: string) => void;
}

const CodeInput = React.forwardRef<MonacoEditorRef, CodeInputProps>(
  ({ code, onCodeChange }, ref) => {
    return (
      <div className="h-full w-full overflow-auto rounded-md">
        <MonacoEditor ref={ref} code={code} onCodeChange={onCodeChange} />
      </div>
    );
  },
);

CodeInput.displayName = 'CodeInput';

export default CodeInput;
