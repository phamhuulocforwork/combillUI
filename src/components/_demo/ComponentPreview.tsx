import React from 'react';
import { cn } from '@/lib/utils';
import { CodeBlock } from '@/components/ui/code-block/CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
  preview?: string;
  expandable?: boolean;
}

export function ComponentPreview({
  children,
  className,
}: ComponentPreviewProps) {
  return (
    <Tabs defaultValue='preview' className={cn(className, 'w-full')}>
      <TabsList className='flex items-center justify-start gap-4'>
        <TabsTrigger value='preview'>Preview</TabsTrigger>
        <TabsTrigger value='code'>Code</TabsTrigger>
      </TabsList>
      <TabsContent value='preview'>{children}</TabsContent>
      <TabsContent value='code'>
        <CodeBlock
          files={[
            {
              fileName: 'ButtonDemo.tsx',
              code: `
import { Squirrel } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ButtonDemo() {
  return (
    <div className='grid w-full grid-cols-1 items-center gap-4 md:grid-cols-3'>
      <Button variant='default'>Default Button</Button>
      <Button variant='secondary'>Secondary Button</Button>
      <Button variant='destructive'>Destructive Button</Button>
      <Button variant='outline'>Outline Button</Button>
      <Button variant='link'>Link Button</Button>
      <Button variant='block'>Block Button</Button>
      <Button size='xs'>Extra Small Button</Button>
      <Button size='sm'>Small Button</Button>
      <Button size='lg'>Large Button</Button>
      <Button size='icon'>
        <Squirrel />
      </Button>
      <Button variant='ghost'>Ghost Button</Button>
    </div>
  );
}
            `,
              lang: 'typescript',
            },
          ]}
        />
      </TabsContent>
    </Tabs>
  );
}
