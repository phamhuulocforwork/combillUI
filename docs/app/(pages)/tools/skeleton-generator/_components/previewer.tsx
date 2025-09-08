import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

interface PreviewerProps {
  code: string;
}

const Previewer: React.FC<PreviewerProps> = ({ code }) => {
  if (!code) {
    return (
      <div className='flex items-center justify-center h-full text-muted-foreground'>
        <p>No HTML code to preview</p>
      </div>
    );
  }

  return (
    <ScrollArea className='h-full w-full'>
      <div
        className='w-full h-full bg-white'
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </ScrollArea>
  );
};

export default Previewer;
