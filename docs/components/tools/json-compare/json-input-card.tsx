import { useState } from "react";

import { FileUp, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ResponsiveTextarea } from "@/registry/default/ui/responsive-textarea";

import { parseJSON } from "./utils/json-utils";

interface JSONInputCardProps {
  onCompare: (json1: any, json2: any, mode: "two-files" | "template") => void;
  onMerge: (json1: any, json2: any) => void;
  isProcessing: boolean;
}

export default function JSONInputCard({
  onCompare,
  onMerge,
  isProcessing,
}: JSONInputCardProps) {
  const [json1Text, setJson1Text] = useState("");
  const [json2Text, setJson2Text] = useState("");
  const [mode, setMode] = useState<"two-files" | "template">("two-files");

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setterFn: (text: string) => void,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".json")) {
      toast.error("Please upload a JSON file");
      return;
    }

    try {
      const text = await file.text();
      const result = parseJSON(text);

      if (result.success) {
        setterFn(text);
        toast.success(`${file.name} loaded successfully`);
      } else {
        toast.error(`Invalid JSON in ${file.name}: ${result.error}`);
      }
    } catch (error) {
      toast.error("Error reading file");
    }

    // Reset input
    e.target.value = "";
  };

  const validateAndProcess = (
    action: "compare" | "merge",
  ): { json1: any; json2: any } | null => {
    const result1 = parseJSON(json1Text);
    const result2 = parseJSON(json2Text);

    if (!result1.success) {
      toast.error(`JSON 1 Error: ${result1.error}`);
      return null;
    }

    if (!result2.success) {
      toast.error(`JSON 2 Error: ${result2.error}`);
      return null;
    }

    return { json1: result1.data, json2: result2.data };
  };

  const handleCompare = () => {
    const result = validateAndProcess("compare");
    if (result) {
      onCompare(result.json1, result.json2, mode);
    }
  };

  const handleMerge = () => {
    const result = validateAndProcess("merge");
    if (result) {
      onMerge(result.json1, result.json2);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input JSON Files</CardTitle>
        <CardDescription>
          Paste JSON code or upload files to compare or merge
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='mode-select'>Comparison Mode</Label>
          <Select
            value={mode}
            onValueChange={(value) => setMode(value as "two-files" | "template")}
          >
            <SelectTrigger id='mode-select'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='two-files'>Compare Two Files</SelectItem>
              <SelectItem value='template'>Compare with Template</SelectItem>
            </SelectContent>
          </Select>
          <p className='text-xs text-muted-foreground'>
            {mode === "two-files"
              ? "Find keys in JSON 1 that don't exist in JSON 2"
              : "Find keys in JSON 1 that don't exist in the template (JSON 2)"}
          </p>
        </div>

        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <Label htmlFor='json1'>JSON 1</Label>
            <Button
              variant='outline'
              size='sm'
              onClick={() => document.getElementById("file1")?.click()}
              disabled={isProcessing}
            >
              <FileUp className='h-4 w-4 mr-2' />
              Upload File
            </Button>
            <input
              id='file1'
              type='file'
              accept='.json'
              className='hidden'
              onChange={(e) => handleFileUpload(e, setJson1Text)}
            />
          </div>
          <ResponsiveTextarea
            id='json1'
            value={json1Text}
            onChange={(e) => setJson1Text(e.target.value)}
            placeholder='Paste JSON here or upload a file...'
            className='font-mono text-sm min-h-[200px]'
          />
        </div>

        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <Label htmlFor='json2'>
              JSON 2 {mode === "template" && "(Template)"}
            </Label>
            <Button
              variant='outline'
              size='sm'
              onClick={() => document.getElementById("file2")?.click()}
              disabled={isProcessing}
            >
              <FileUp className='h-4 w-4 mr-2' />
              Upload File
            </Button>
            <input
              id='file2'
              type='file'
              accept='.json'
              className='hidden'
              onChange={(e) => handleFileUpload(e, setJson2Text)}
            />
          </div>
          <ResponsiveTextarea
            id='json2'
            value={json2Text}
            onChange={(e) => setJson2Text(e.target.value)}
            placeholder='Paste JSON here or upload a file...'
            className='font-mono text-sm min-h-[200px]'
          />
        </div>

        <div className='flex gap-2'>
          <Button
            onClick={handleCompare}
            disabled={!json1Text.trim() || !json2Text.trim() || isProcessing}
            className='flex-1'
          >
            {isProcessing ? (
              <>
                <Loader2 className='h-4 w-4 mr-2 animate-spin' />
                Processing...
              </>
            ) : (
              "Compare"
            )}
          </Button>
          <Button
            onClick={handleMerge}
            disabled={!json1Text.trim() || !json2Text.trim() || isProcessing}
            variant='outline'
            className='flex-1'
          >
            Merge
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
