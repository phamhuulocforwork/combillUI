'use client';

import type React from 'react';
import { useEffect, useRef } from 'react';

interface PreviewerProps {
  code: string;
}

const EmptyState: React.FC = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="max-w-lg rounded-lg border border-border p-8 text-center">
        <h2 className="mb-4 font-bold text-2xl">No Skeletons Yet</h2>
        <p className="mb-6 hidden md:block">
          This is where your AI-generated skeletons will appear.
        </p>
        <div className="mb-6 space-y-4">
          <Step number={1} text="Paste your code in the left panel" />
          <Step number={2} text='Click the "Submit" button' />
          <Step number={3} text="Watch your skeleton come to life here!" />
        </div>
        <p className="rounded bg-muted p-3 text-sm italic">
          Tip: The generator works best with Tailwind CSS classes.
        </p>
      </div>
    </div>
  );
};

const Step: React.FC<{ number: number; text: string }> = ({ number, text }) => (
  <div className="flex items-center text-left">
    <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
      {number}
    </div>
    <p className="text-sm">{text}</p>
  </div>
);

const Previewer: React.FC<PreviewerProps> = ({ code }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframeDocument = iframeRef.current?.contentDocument;
    if (!iframeDocument) return;
    iframeDocument.open();
    iframeDocument.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          @media (prefers-color-scheme: dark) {
            body {
              background-color: #23272e;
            }
          }
          @media (prefers-color-scheme: light) {
            body {
              background-color: transparent;
            }
          }
          body {
            margin: 0;
            padding: 16px;
            border-radius: calc(var(--radius) /* 0.25rem = 4px */ - 2px);
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
          }
        </style>
      </head>
      <body>
        ${code}
      </body>
      </html>
    `);
    iframeDocument.close();
  }, [code]);

  return (
    <div className="h-full">
      {code && code.trim() ? (
        <iframe ref={iframeRef} className="h-full w-full border-0"></iframe>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Previewer;
