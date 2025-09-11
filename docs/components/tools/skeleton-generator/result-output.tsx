import React from "react";

import { htmlToJsx } from "@/lib/utils";

import { EditorLanguage } from "@/types";

import MonacoEditor from "./monaco-editor";
import Previewer from "./previewer";

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
  return (
    <React.Fragment>
      {activeTab === "preview" ? (
        <div className={`w-full h-full overflow-auto ${code && "rounded-md"}`}>
          <Previewer code={code} />
        </div>
      ) : (
        <div className='w-full h-full rounded-md overflow-auto'>
          <MonacoEditor
            code={activeTab === "html" ? code : htmlToJsx(code, "Skeleton")}
            onCodeChange={onCodeChange}
            editable={false}
            language={
              activeTab === "html"
                ? EditorLanguage.HTML
                : EditorLanguage.JAVASCRIPT
            }
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default ResultOutput;
