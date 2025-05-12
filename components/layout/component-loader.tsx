"use client";

import type { ComponentType } from "react";
import React from "react";

import type { RegistryItem } from "@/lib/components";

import { Index } from "@/__registry__";

import { Skeleton } from "../ui/skeleton";

type ComponentLoaderProps = {
  component: RegistryItem;
};

const ComponentLoader = <TProps extends object>({
  component,
  ...props
}: ComponentLoaderProps & TProps) => {
  const ComponentElement = React.useMemo(() => {
    try {
      const Component = Index["default"][component.name]
        ?.component as ComponentType<TProps>;

      if (!Component) {
        return (
          <p className='text-muted-foreground text-sm'>
            Component{" "}
            <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm'>
              {component.name}
            </code>{" "}
            not found in registry.
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
    <React.Suspense fallback={<Skeleton className='h-[100px] w-full' />}>
      {ComponentElement}
    </React.Suspense>
  );
};

export default ComponentLoader;
