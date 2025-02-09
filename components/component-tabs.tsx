'use client';

import * as React from 'react';

import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

import { cn } from '@/lib/utils';

import { Index } from '@/__registry__';

interface ComponentTabsProps extends React.ComponentPropsWithoutRef<'div'> {
  name: string;
  children: React.ReactNode;
  preventPreviewFocus?: boolean;
  scalePreview?: boolean;
  fullPreview?: boolean;
}

export function ComponentTabs({
  name,
  children,
  preventPreviewFocus,
  scalePreview,
  fullPreview,
  className,
}: ComponentTabsProps) {
  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes[0];

  const Preview = React.useMemo(() => {
    const Component = Index['default'][name]?.component;

    if (!Component) {
      return (
        <p className='text-muted-foreground text-sm'>
          Component{' '}
          <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm'>
            {name}
          </code>{' '}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name]);

  return (
    <Tabs items={['Preview', 'Code']} className='rounded-md'>
      <Tab
        value='Preview'
        className={cn('preview-block', {
          'focus-visible:outline-none focus-visible:ring-0':
            preventPreviewFocus,
        })}
        tabIndex={preventPreviewFocus ? -1 : 0}
      >
        <div
          className={cn(
            'flex h-[400px] w-full items-center justify-center p-10',
            {
              'h-full p-0': fullPreview,
              'sm:p-10': scalePreview,
            },
            className,
          )}
        >
          {Preview}
        </div>
      </Tab>
      <Tab value='Code' className='component-block'>
        {Code}
      </Tab>
    </Tabs>
  );
}
