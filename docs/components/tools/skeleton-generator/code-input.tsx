import React from "react";

import MonacoEditor from "./monaco-editor";

interface CodeInputProps {
  code: string;
  onCodeChange: (code: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ code, onCodeChange }) => {
  return (
    <div className='w-full h-full rounded-md overflow-auto'>
      <MonacoEditor code={code} onCodeChange={onCodeChange} />
    </div>
  );
};

export default CodeInput;
