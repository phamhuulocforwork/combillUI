'use client';

import * as React from 'react';

import { FileUploader } from '@/registry/default/blocks/file-uploader/file-uploader';

export default function FileUploaderMultiple() {
  const [files, setFiles] = React.useState<File[]>([]);

  return (
    <div className="flex flex-col gap-4">
      <FileUploader
        value={files}
        onValueChange={setFiles}
        multiple
        maxFileCount={5}
        maxSize={5 * 1024 * 1024}
      />

      {files.length > 0 ? (
        <div className="rounded-lg border p-4 text-sm">
          <p className="mb-2 font-medium">Selected files ({files.length}/5)</p>
          <ul className="list-inside list-disc space-y-1">
            {files.map((file) => (
              <li key={file.name}>
                <span className="font-medium">{file.name}</span>{' '}
                <span className="text-muted-foreground">
                  ({Math.round(file.size / 1024)} KB)
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
