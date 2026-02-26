'use client';

import * as React from 'react';

import { FileUploader } from '@/registry/default/blocks/file-uploader/file-uploader';

export default function FileUploaderWithProgress() {
  const [progresses, setProgresses] = React.useState<Record<string, number>>(
    {},
  );

  async function onUpload(files: File[]) {
    // Simulate upload with incremental progress per file
    for (const file of files) {
      await new Promise<void>((resolve) => {
        let value = 0;

        const interval = window.setInterval(() => {
          value += 10;
          setProgresses((prev) => ({
            ...prev,
            [file.name]: Math.min(value, 100),
          }));

          if (value >= 100) {
            window.clearInterval(interval);
            resolve();
          }
        }, 120);
      });
    }

    // Clear progress after short delay
    window.setTimeout(() => {
      setProgresses({});
    }, 800);
  }

  return (
    <div className="flex flex-col gap-4">
      <FileUploader
        multiple
        maxFileCount={3}
        progresses={progresses}
        onUpload={onUpload}
      />
    </div>
  );
}
