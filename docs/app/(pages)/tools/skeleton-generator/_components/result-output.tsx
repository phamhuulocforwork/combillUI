import React from "react";

import { CodeEditor, oneDarkPro } from "@/components/layout/code-editor";

import { htmlToJsx } from "@/lib/utils";

import Previewer from "@/app/(pages)/tools/skeleton-generator/_components/previewer";

interface ResultOutputProps {
  activeTab: string;
  code: string;
  onCodeChange: (code: string) => void;
}

const ResultOutput: React.FC<ResultOutputProps> = ({
  activeTab,
  code,
  onCodeChange = () => {},
}) => {
  const handleCodeChange = (value: string | undefined) => {
    onCodeChange(value || "");
  };
  return (
    <React.Fragment>
      {activeTab === "preview" ? (
        <div
          className={`w-full h-full overflow-auto ${
            code && "p-4 bg-white rounded-md"
          }`}
        >
          <Previewer code={code} />
        </div>
      ) : (
        <div className='w-full h-full rounded-md overflow-auto'>
          <CodeEditor
            value={activeTab === "html" ? code : htmlToJsx(code, "Skeleton")}
            onChange={handleCodeChange}
            language={activeTab === "html" ? "html" : "javascript"}
            height='100%'
            options={{
              readOnly: true,
              minimap: { enabled: false },
              lineNumbers: "on",
              wordWrap: "on",
              scrollBeyondLastLine: false,
            }}
            customDarkTheme={{
              base: "vs-dark",
              inherit: true,
              ...oneDarkPro,
            }}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default ResultOutput;
