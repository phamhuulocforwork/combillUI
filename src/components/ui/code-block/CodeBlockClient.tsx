'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check, Copy, ChevronUp, ChevronDown } from 'lucide-react';
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Button, ButtonProps } from '@/components/ui/Button';

const tabsListClassName = cn(
  'flex h-9 w-full items-center justify-start gap-4',
  '!rounded-t-md border-b border-border bg-background dark:bg-foreground-900 p-1',
);

const tabsTriggerClassName = cn(
  'h-9 bg-transparent px-3 py-1.5',
  'data-[state=active]:border-b-2 data-[state=active]:border-b-secondary',
  'data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:dark:text-background font-semibold',
);

interface CodeBlockClientProps {
  files: {
    fileName: string;
    codeStr: string;
    code: JSX.Element;
    lang: string;
  }[];
  expandable?: boolean;
}
const CodeBlockClient = ({
  files,
  expandable,
  ...props
}: CodeBlockClientProps) => {
  const [expandedStates, setExpandedStates] = React.useState<boolean[]>(
    new Array(files.length).fill(false),
  );

  const handleExpand = (index: number) => {
    setExpandedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <Tabs defaultValue={files[0].fileName} className='space-y-0'>
      {files.length > 0 && (
        <TabsList className={tabsListClassName}>
          {files.map((file) => (
            <TabsTrigger
              key={file.fileName}
              value={file.fileName}
              className={tabsTriggerClassName}
            >
              {file.fileName}
            </TabsTrigger>
          ))}
        </TabsList>
      )}
      {files.map((file, index) => (
        <TabsContent key={file.fileName} value={file.fileName}>
          <CodeBlockContainer {...props}>
            <ScrollArea
              className={cn(
                !expandedStates[index] ? 'h-48 overflow-hidden' : 'h-fit',
                'relative rounded-b-md bg-background p-4 dark:bg-foreground',
              )}
            >
              <CodeBlockCopyButton code={file.codeStr}></CodeBlockCopyButton>
              {file.code}
              <ScrollBar />
              {expandable && (
                <CodeBlockExpandButton
                  expanded={expandedStates[index]}
                  onClick={() => handleExpand(index)}
                />
              )}
            </ScrollArea>
          </CodeBlockContainer>
        </TabsContent>
      ))}
    </Tabs>
  );
};

interface CodeBlockContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const CodeBlockContainer = ({
  children,
  ...props
}: CodeBlockContainerProps) => {
  return (
    <div className='overflow-hidden' {...props}>
      {children}
    </div>
  );
};

interface CodeBlockExpandButtonProps extends ButtonProps {
  expanded: boolean;
}
const CodeBlockExpandButton = ({
  expanded,
  ...props
}: CodeBlockExpandButtonProps) => {
  return (
    <Button
      variant='ghost'
      size='icon'
      className='absolute bottom-0 left-0 h-12 w-full from-primary/80 hover:bg-gradient-to-t dark:from-foreground-800/50'
      {...props}
    >
      {expanded ? (
        <ChevronUp className='accordion-up h-5 w-5 text-primary' />
      ) : (
        <ChevronDown className='accordion-up h-5 w-5 text-primary' />
      )}
    </Button>
  );
};

interface CodeBlockCopyButtonProps extends ButtonProps {
  code: string;
}
const CodeBlockCopyButton = ({ code, ...props }: CodeBlockCopyButtonProps) => {
  const [isCopied, setCopied] = React.useState(false);
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => handleCopy(code)}
      className='absolute right-2 top-2 z-50 hover:bg-muted-100 dark:hover:bg-muted-900'
      {...props}
    >
      {isCopied ? (
        <Check className='accordion-up h-5 w-5 text-green-500' />
      ) : (
        <Copy className='accordion-up h-5 w-5 text-muted-900 dark:text-muted-100' />
      )}
    </Button>
  );
};

export { CodeBlockClient };
