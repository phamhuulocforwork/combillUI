import { FileJson2 } from 'lucide-react';

export default function JSONCompareHeader() {
  return (
    <div className="mb-8 text-center">
      <h1 className="mb-2 flex items-center justify-center gap-2 font-bold text-3xl">
        <FileJson2 className="h-8 w-8" />
        JSON Compare & Merge
      </h1>
      <p className="text-muted-foreground">
        Compare and merge JSON files with recursive key comparison at all
        nesting levels. Paste JSON code or upload files to get started.
      </p>
    </div>
  );
}
