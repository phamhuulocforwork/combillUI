import { codeToHtml } from 'shiki';
import type { BundledLanguage } from 'shiki';
import { Fira_Code } from 'next/font/google';
import { cn } from '@/lib/utils';

const firaCode = Fira_Code({ subsets: ['latin'] });

interface CodeBlockProps {
  files: {
    fileName: string;
    code: string;
    lang: BundledLanguage;
  }[];
  preview?: string;
  expandable?: boolean;
}

const CodeBlock = async ({
  files: _files,
  preview: _preview,
  ...props
}: CodeBlockProps) => {
  let preview = undefined;
  if (_preview) {
    const html = await codeToHtml(_preview, {
      lang: 'tsx',
      themes: {
        light: 'github-light',
        dark: 'one-dark-pro',
      },
    });
    preview = (
      <div
        className={cn(
          firaCode.className,
          '[&_pre]:!bg-transparent [&_pre]:!font-semibold [&_pre]:!outline-none [&_span]:!bg-transparent [&_span]:!font-semibold dark:[&_span]:!text-[var(--shiki-dark)]',
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
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

  console.log(preview);

  return (
    <div className='overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800'>
      {preview && (
        <div className='bg-white p-4 dark:bg-gray-900'>
          <h3 className='mb-2 text-sm font-medium text-gray-900 dark:text-gray-100'>
            Preview
          </h3>
          {preview}
        </div>
      )}
      <div className='max-h-96 overflow-y-auto'>
        {files.map((file, index) => (
          <div
            key={index}
            className='border-t border-gray-200 dark:border-gray-800'
          >
            <div className='flex items-center justify-between bg-gray-50 px-4 py-2 dark:bg-gray-800'>
              <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                {file.fileName}
              </span>
              <span className='text-xs text-gray-500 dark:text-gray-400'>
                {file.lang}
              </span>
            </div>
            <div className='overflow-x-auto bg-white p-4 dark:bg-gray-900'>
              {file.code}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CodeBlock };
