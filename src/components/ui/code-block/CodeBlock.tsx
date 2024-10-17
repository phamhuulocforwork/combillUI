import type { BundledLanguage } from 'shiki';
import { CodeBlockClient } from './CodeBlockClient';
import { Fira_Code } from 'next/font/google';

import { cn } from '@/lib/utils';

const firaCode = Fira_Code({ subsets: ['latin'] });

interface CodeBlockProps {
  files: {
    fileName: string;
    code: string;
    lang: BundledLanguage;
  }[];
  expandable?: boolean;
}

const CodeBlock = async ({ files: _files, ...props }: CodeBlockProps) => {
  const { codeToHtml } = await import('shiki');
  const files = await Promise.all(
    _files.map(async ({ fileName, code, lang }) => {
      const html = await codeToHtml(code, {
        lang: lang,
        themes: {
          light: 'github-light',
          dark: 'one-dark-pro',
        },
      });

      return {
        fileName,
        codeStr: code,
        code: (
          <div
            className={cn(
              firaCode.className,
              '[&_pre]:!bg-transparent [&_pre]:!font-semibold [&_pre]:!outline-none [&_span]:!bg-transparent [&_span]:!font-semibold dark:[&_span]:!text-[var(--shiki-dark)]',
            )}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ),
        lang,
      };
    }),
  );

  return <CodeBlockClient files={files} expandable={true}></CodeBlockClient>;
};

export { CodeBlock };
