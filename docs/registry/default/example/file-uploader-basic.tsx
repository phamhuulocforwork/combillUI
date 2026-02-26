'use client';

import * as React from 'react';

import { FileUploader } from '@/registry/default/blocks/file-uploader/file-uploader';

export default function FileUploaderBasic() {
  const [uploadedFiles, setUploadedFiles] = React.useState<File[] | null>(null);

  async function onUpload(files: File[]) {
    // Simulate async upload
    await new Promise((resolve) => setTimeout(resolve, 800));
    setUploadedFiles(files);
  }

  return (
    <div className="flex flex-col gap-4">
      <FileUploader
        accept={{
          'image/*': [],
        }}
        maxFileCount={1}
        maxSize={2 * 1024 * 1024}
        onUpload={onUpload}
      />

      {uploadedFiles && uploadedFiles.length > 0 ? (
        <div className="rounded-lg border p-4 text-sm">
          <p className="mb-2 font-medium">Uploaded file</p>
          <ul className="list-inside list-disc space-y-1">
            {uploadedFiles.map((file) => (
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
