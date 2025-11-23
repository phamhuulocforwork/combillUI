import { Download } from "lucide-react";
import { toast } from "sonner";

import MonacoEditor from "@/components/blocks/monaco-editor/monaco-editor";
import CopyButton from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { EditorLanguage } from "@/types";

import { formatJSON } from "./utils/json-utils";

interface JSONResultCardProps {
  comparisonResult: {
    differences: Record<string, any>;
    paths: string[];
  } | null;
  mergedResult: any | null;
  mode: "two-files" | "template";
}

export default function JSONResultCard({
  comparisonResult,
  mergedResult,
  mode,
}: JSONResultCardProps) {
  const hasComparison = comparisonResult !== null;
  const hasMerge = mergedResult !== null;
  const hasResults = hasComparison || hasMerge;

  const downloadJSON = (data: any, filename: string) => {
    if (!data) {
      toast.error("No data to download");
      return;
    }

    const jsonString = formatJSON(data);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(`${filename} downloaded!`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
        <CardDescription>
          {hasResults
            ? "View comparison differences and merged output"
            : "Results will appear here after comparison or merge"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!hasResults ? (
          <div className='h-[400px] border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center'>
            <div className='text-center text-muted-foreground'>
              <p>No results yet</p>
              <p className='text-sm mt-1'>
                Enter JSON data and click Compare or Merge
              </p>
            </div>
          </div>
        ) : (
          <Tabs defaultValue='comparison' className='w-full'>
            <TabsList className='grid w-full grid-cols-2'>
              <TabsTrigger value='comparison' disabled={!hasComparison}>
                Comparison
              </TabsTrigger>
              <TabsTrigger value='merge' disabled={!hasMerge}>
                Merged
              </TabsTrigger>
            </TabsList>

            <TabsContent value='comparison' className='space-y-4'>
              {hasComparison && (
                <>
                  <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-sm font-medium'>
                        Keys in JSON 1 not in JSON 2
                        {mode === "template" && " (Template)"}
                      </h3>
                      <div className='flex gap-2'>
                        <CopyButton
                          source={formatJSON(comparisonResult.differences)}
                          toast='Comparison result copied!'
                          btnClassName='h-8'
                        />
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={() =>
                            downloadJSON(
                              comparisonResult.differences,
                              "comparison-result.json",
                            )
                          }
                        >
                          <Download className='h-4 w-4' />
                          Download
                        </Button>
                      </div>
                    </div>

                    {comparisonResult.paths.length > 0 ? (
                      <>
                        <div className='text-sm text-muted-foreground'>
                          Found {comparisonResult.paths.length} difference
                          {comparisonResult.paths.length !== 1 ? "s" : ""}:
                        </div>
                        <ScrollArea className='h-[100px] rounded-md border p-3'>
                          <ul className='space-y-1 text-sm font-mono'>
                            {comparisonResult.paths.map((path, index) => (
                              <li key={index} className='text-muted-foreground'>
                                • {path}
                              </li>
                            ))}
                          </ul>
                        </ScrollArea>
                      </>
                    ) : (
                      <div className='text-sm text-muted-foreground p-3 border rounded-md'>
                        No differences found. All keys in JSON 1 exist in JSON
                        2.
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className='space-y-2'>
                    <h3 className='text-sm font-medium'>
                      Difference Structure (JSON)
                    </h3>
                    <div className='h-[300px] rounded-md border overflow-hidden'>
                      <MonacoEditor
                        code={formatJSON(comparisonResult.differences)}
                        onCodeChange={() => {}}
                        language={EditorLanguage.JSON}
                        editable={false}
                      />
                    </div>
                  </div>
                </>
              )}
            </TabsContent>

            <TabsContent value='merge' className='space-y-4'>
              {hasMerge && (
                <>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-sm font-medium'>Merged JSON</h3>
                    <div className='flex gap-2'>
                      <CopyButton
                        source={formatJSON(mergedResult)}
                        toast='Merged JSON copied!'
                        btnClassName='h-8'
                      />
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() =>
                          downloadJSON(mergedResult, "merged-result.json")
                        }
                      >
                        <Download className='h-4 w-4' />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className='h-[700px] rounded-md border overflow-hidden'>
                    <MonacoEditor
                      code={formatJSON(mergedResult)}
                      onCodeChange={() => {}}
                      language={EditorLanguage.JSON}
                      editable={false}
                    />
                  </div>
                </>
              )}
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
}
