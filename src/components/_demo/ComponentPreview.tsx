import React from 'react';
import { cn } from '@/lib/utils';
import { CodeBlock } from '@/components/ui/code-block/CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { getFileSource } from '@/lib/get-file-source';
import { Index } from '.';
import { ComponentPreviewClient } from '@/components/_demo/ComponentPreviewClient';

const tabsListClassName = cn(
  'flex h-9 w-full items-center justify-start gap-4',
  'rounded-none border-b border-border bg-transparent p-1',
);

const tabsTriggerClassName = cn(
  'h-9 bg-transparent px-3 py-1.5',
  'data-[state=active]:border-b-2 data-[state=active]:border-b-primary',
  'data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:dark:text-background font-semibold',
);

interface ComponentPreviewProps {
  name: string;
  className?: string;
  preview?: string;
  expandable?: boolean;
}

export function ComponentPreview({
  name,
  className,
  expandable,
}: ComponentPreviewProps) {
  const type = name.split('/')[0];
  const componentName = name.split('/')[1];

  if (type === 'ui') {
    const demos: {
      component: React.ComponentType;
      code: Array<{
        fileName: string;
        code: string;
      }>;
    }[] = [
      {
        component: Index['ui'][componentName].component,
        code: Index['ui'][componentName].files.map((file: string) => {
          const { fileName, content } = getFileSource(file);
          return {
            fileName,
            code: content,
          };
        }),
      },
    ];

    return (
      <Tabs defaultValue='preview' className={cn(className, 'w-full')}>
        <TabsList className={tabsListClassName}>
          <TabsTrigger className={tabsTriggerClassName} value='preview'>
            Preview
          </TabsTrigger>
          <TabsTrigger className={tabsTriggerClassName} value='code'>
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value='preview'
          className='flex items-center justify-center'
        >
          <ComponentPreviewClient
            demos={demos.map((elem, index) => {
              const Comp = elem.component;
              return <Comp key={index} />;
            })}
          />
        </TabsContent>
        <TabsContent value='code'>
          <ComponentPreviewClient
            demos={demos.map((elem, index) => {
              return (
                <CodeBlock
                  key={index}
                  files={elem.code.map((file) => ({
                    fileName: file.fileName,
                    code: file.code,
                    lang: 'tsx',
                  }))}
                  expandable={expandable}
                />
              );
            })}
          />
        </TabsContent>
      </Tabs>
    );
  }
}
