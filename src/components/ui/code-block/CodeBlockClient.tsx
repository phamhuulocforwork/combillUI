'use client';

import { Button, ButtonProps, ScrollArea, ScrollBar } from '@/components';
import { cn } from '@/lib/utils';
import { Check, Copy, ChevronUp, ChevronDown } from 'lucide-react';
import React from 'react';

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
  expandable = false,
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
    <>
      {files.map((file, index) => (
        <CodeBlockContainer key={index} {...props}>
          <CodeBlockHeader fileName={file.fileName} lang={file.lang} />
          <ScrollArea
            className={cn(
              !expandedStates[index] ? 'h-32 overflow-hidden' : 'h-fit',
              'relative w-full bg-background p-4 dark:bg-background-dark',
            )}
          >
            <CodeBlockCopyButton code={file.codeStr}></CodeBlockCopyButton>
            {file.code}
            {expandable && (
              <CodeBlockExpandButton
                expanded={expandedStates[index]}
                onClick={() => handleExpand(index)}
              />
            )}
            <ScrollBar />
          </ScrollArea>
        </CodeBlockContainer>
      ))}
    </>
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
    <div
      className='mb-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800'
      {...props}
    >
      {children}
    </div>
  );
};

interface CodeBlockHeaderProps {
  fileName: string;
  lang: string;
}
const CodeBlockHeader = ({ fileName, lang }: CodeBlockHeaderProps) => {
  return (
    <div className='flex items-center justify-between bg-gray-50 px-4 py-2 dark:bg-gray-800'>
      <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
        {fileName}
      </span>
      <span className='text-xs text-gray-500 dark:text-gray-400'>{lang}</span>
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
      className='absolute bottom-0 h-12 w-full hover:bg-gradient-to-t dark:from-gray-800/50'
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
