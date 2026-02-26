'use client';

import { DirectionProvider } from '@radix-ui/react-direction';
import { LoaderCircleIcon, RotateCw } from 'lucide-react';
import React, { type ReactNode, useEffect, useState } from 'react';
import { Index } from '@/__registry__';
import { Tabs, TabsList, TabsTrigger } from '@/components/tabs';
import { Button } from '@/components/ui/button';
import { trackDirectionChange, trackViewChange } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import { CliCodeCopyButton } from './cli-code-copy-button';
import { OpenInV0Button } from './open-in-v0-button';

type themeType = 'dark' | 'light' | '';

type ComponentTabsContext = {
  name: string;
  code: string;
  codeElement: ReactNode;
  view: 'code' | 'preview';
  setView: (view: 'code' | 'preview') => void;
  theme: themeType;
  setTheme: React.Dispatch<React.SetStateAction<themeType>>;
  rtl: boolean;
  setRtl: React.Dispatch<React.SetStateAction<boolean>>;
  reloadKey: number;
  reload: () => void;
};

export interface ComponentTabsProps {
  name: string;
  children?: ReactNode;
}

const ComponentTabsContext = React.createContext<ComponentTabsContext | null>(
  null,
);

export function useComponentTabs() {
  const context = React.useContext(ComponentTabsContext);
  if (!context) {
    throw new Error(
      'useComponentTabs must be used within a ComponentTabsProvider.',
    );
  }
  return context;
}

function ComponentTabsProvider({
  name,
  code,
  codeElement,
  children,
}: {
  name: string;
  code: string;
  codeElement: ReactNode;
  children: ReactNode;
}) {
  const [view, setView] = useState<ComponentTabsContext['view']>('preview');
  const [theme, setTheme] = useState<themeType>('');
  const [rtl, setRtl] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const reload = () => {
    setReloadKey((prev) => prev + 1);
  };

  return (
    <ComponentTabsContext.Provider
      value={{
        name,
        code,
        codeElement,
        view,
        setView,
        theme,
        setTheme,
        rtl,
        setRtl,
        reloadKey,
        reload,
      }}
    >
      <div
        data-view={view}
        className="group/block-view-wrapper flex min-w-0 flex-col items-stretch gap-4"
      >
        {children}
      </div>
    </ComponentTabsContext.Provider>
  );
}

function RtlToggleButton() {
  const { name, rtl, setRtl } = useComponentTabs();

  return (
    <Button
      size="sm"
      variant="outline"
      className={cn('size-7.5 text-[0.6rem] text-muted-foreground leading-[0]')}
      onClick={() => {
        const newDirection = rtl ? 'ltr' : 'rtl';
        setRtl(!rtl);
        trackDirectionChange(name, newDirection);
      }}
    >
      {rtl ? 'LTR' : 'RTL'}
    </Button>
  );
}

function ReloadButton() {
  const { reload } = useComponentTabs();

  return (
    <Button size="sm" variant="outline" className="size-7.5" onClick={reload}>
      <RotateCw className="size-3.5" />
    </Button>
  );
}

function ComponentTabsToolbar() {
  const { setView, name } = useComponentTabs();

  return (
    <div className="flex items-center justify-between gap-2.5">
      <div className={cn('flex w-full items-center justify-between gap-2')}>
        <Tabs
          defaultValue="preview"
          onValueChange={(value) => {
            setView(value as 'preview' | 'code');
            trackViewChange(name, value as 'preview' | 'code');
          }}
          className="flex"
        >
          <TabsList className="flex h-7.5 items-stretch gap-1 rounded-md bg-accent/70 px-1 py-1">
            <TabsTrigger value="preview" className="rounded-sm px-2.5 text-xs">
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="rounded-sm px-2.5 text-xs">
              Code
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <CliCodeCopyButton name={name.replaceAll('/', '-')} />
          <RtlToggleButton />
          <ReloadButton />

          {name && <OpenInV0Button name={name.replaceAll('/', '-')} />}
        </div>
      </div>
    </div>
  );
}

function ComponentTabsDemo() {
  const { theme, rtl, name, view, reloadKey } = useComponentTabs();
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  // Load the component from registry
  useEffect(() => {
    const loadComponent = () => {
      try {
        // Clear the component first to show loading state
        setComponent(null);

        // Get component from registry
        const ComponentFromRegistry = Index['default'][name]?.component;

        if (ComponentFromRegistry) {
          setComponent(() => ComponentFromRegistry);
        } else {
          console.error(`Component ${name} not found in registry`);
        }
      } catch (error) {
        console.error(`Failed to load component: ${name}`, error);
      }
    };

    loadComponent();
  }, [name, reloadKey]); // reloadKey dependency will trigger reload

  if (view !== 'preview') return null; // Return null if not in preview mode

  // Always render component skeleton
  return (
    <DirectionProvider dir={rtl ? 'rtl' : 'ltr'}>
      <div
        className={cn(
          'flex grow items-center justify-center rounded-lg border border-border/90 bg-background p-6 lg:min-h-[350px] lg:p-10',
          theme === 'dark' && 'dark',
          theme === 'light' && 'light',
        )}
        dir={rtl ? 'rtl' : 'ltr'}
        style={{ direction: rtl ? 'rtl' : 'ltr' }}
      >
        {Component ? (
          <Component key={reloadKey} />
        ) : (
          <div className="flex h-full items-center justify-center gap-1.5 text-muted-foreground text-xs">
            <LoaderCircleIcon className="size-4 animate-spin" />
            Loading
          </div>
        )}
      </div>
    </DirectionProvider>
  );
}

function ComponentTabsCode() {
  const { view, codeElement } = useComponentTabs();

  if (view !== 'code') return null;

  return (
    <div>
      <div
        className={cn(
          'relative overflow-hidden rounded-xl bg-neutral-950 text-white dark:bg-neutral-900 [&_figure]:my-0',
        )}
      >
        {codeElement}
      </div>
    </div>
  );
}

// Helper function to extract plain text code from children
function extractCodeFromChildren(children: ReactNode): string {
  const extractText = (node: any): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (!node) return '';

    if (Array.isArray(node)) {
      return node.map(extractText).join('');
    }

    if (React.isValidElement(node)) {
      // If it's a code element, extract its text content
      const props = node.props as { children?: ReactNode };
      if (props.children) {
        return extractText(props.children);
      }
    }

    return '';
  };

  return extractText(children);
}

export function ComponentTabs({ name, children }: ComponentTabsProps) {
  // Extract code text from children for copy functionality
  const code = extractCodeFromChildren(children);

  if (!code && !children) {
    return null;
  }

  return (
    <div className="mb-14 pt-3.5">
      <ComponentTabsProvider name={name} code={code} codeElement={children}>
        <ComponentTabsToolbar />
        <ComponentTabsDemo />
        <ComponentTabsCode />
      </ComponentTabsProvider>
    </div>
  );
}
