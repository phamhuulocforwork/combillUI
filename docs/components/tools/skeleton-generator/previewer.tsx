"use client";

import { useEffect, useRef } from "react";
import React from "react";

interface PreviewerProps {
  code: string;
}

const EmptyState: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='text-center p-8 max-w-lg rounded-lg border border-border'>
        <h2 className='text-2xl font-bold  mb-4'>No Skeletons Yet</h2>
        <p className='mb-6 hidden md:block'>
          This is where your AI-generated skeletons will appear.
        </p>
        <div className='space-y-4 mb-6'>
          <Step number={1} text='Paste your code in the left panel' />
          <Step number={2} text='Click the "Submit" button' />
          <Step number={3} text='Watch your skeleton come to life here!' />
        </div>
        <p className='text-sm italic bg-muted p-3 rounded'>
          Tip: The generator works best with Tailwind CSS classes.
        </p>
      </div>
    </div>
  );
};

const Step: React.FC<{ number: number; text: string }> = ({ number, text }) => (
  <div className='flex items-center text-left'>
    <div className='flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mr-3'>
      {number}
    </div>
    <p className='text-sm'>{text}</p>
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
    <div className='h-full'>
      {code && code.trim() ? (
        <iframe ref={iframeRef} className='w-full h-full border-0'></iframe>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Previewer;
