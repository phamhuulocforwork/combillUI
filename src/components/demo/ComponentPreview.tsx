import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { CodeBlock } from '@/components/ui/code-block/CodeBlock';

interface ComponentPreviewProps {
  name?: string;
  children: React.ReactNode;
  className?: string;
  preview?: string;
  expandable?: boolean;
}

export function ComponentPreview({
  name,
  children,
  className,
}: ComponentPreviewProps) {
  return (
    <Tabs defaultValue='preview' className='w-[400px]'>
      <TabsList className='flex items-center justify-start gap-4'>
        <TabsTrigger value='preview'>Preview</TabsTrigger>
        <TabsTrigger value='code'>Code</TabsTrigger>
      </TabsList>
      <TabsContent value='preview'>{children}</TabsContent>
      <TabsContent value='code'>
        {/* <CodeBlock files /> */}
        <h1>Code</h1>
      </TabsContent>
    </Tabs>
  );
}
