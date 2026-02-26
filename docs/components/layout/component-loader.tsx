'use client';

import { Loader2Icon } from 'lucide-react';
import Link from 'next/link';
import type { ComponentType } from 'react';
import React from 'react';
import { Index } from '@/__registry__';
import type { RegistryItem } from '@/lib/components';

type ComponentLoaderProps = {
  component: RegistryItem;
};

const ComponentLoader = <TProps extends object>({
  component,
  ...props
}: ComponentLoaderProps & TProps) => {
  const ComponentElement = React.useMemo(() => {
    try {
      const Component = Index['default'][component.name]
        ?.component as ComponentType<TProps>;

      if (!Component) {
        return (
          <p className="text-muted-foreground text-sm">
            Component{' '}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              {component.name}
            </code>{' '}
            not found in registry, please{' '}
            <Link
              href="https://github.com/phamhuulocforwork/combillUI/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline hover:no-underline"
            >
              open an issue
            </Link>
            .
          </p>
        );
      }

      return (
        <Component {...(props as TProps)} currentPage={1} totalPages={10} />
      );
    } catch (error) {
      console.error(`Failed to load component ${component.name}:`, error);
      return null;
    }
  }, [component.name, props]);

  return (
    <React.Suspense
      fallback={
        <div className="flex w-full items-center justify-center font-semibold text-muted-foreground text-sm">
          <Loader2Icon className="mr-2 size-5 animate-spin" /> Loading...
        </div>
      }
    >
      {ComponentElement}
    </React.Suspense>
  );
};

export default ComponentLoader;
