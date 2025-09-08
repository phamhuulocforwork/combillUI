"use client";

import * as React from "react";

import Link from "next/link";

import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Index } from "@/__registry__";

interface ComponentTabsProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  preventPreviewFocus?: boolean;
  scalePreview?: boolean;
  fullPreview?: boolean;
}

export function ComponentTabs({
  name,
  children,
  align = "center",
  preventPreviewFocus,
  scalePreview,
  fullPreview,
  className,
}: ComponentTabsProps) {
  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes[0];

  const Preview = React.useMemo(() => {
    const Component = Index["default"][name]?.component;

    if (!Component) {
      return (
        <p className='text-muted-foreground text-sm'>
          Component{" "}
          <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm'>
            {name}
          </code>{" "}
          not found in registry, please{" "}
          <Link
            href='https://github.com/phamhuulocforwork/combillUI/issues'
            target='_blank'
            rel='noopener noreferrer'
            className='text-foreground font-medium underline hover:no-underline'
          >
            open an issue
          </Link>
          .
        </p>
      );
    }

    return <Component />;
  }, [name]);

  return (
    <Tabs items={["Preview", "Code"]} className='rounded-md'>
      <Tab
        value='Preview'
        className={cn("preview-block", {
          "focus-visible:outline-hidden focus-visible:ring-0":
            preventPreviewFocus,
        })}
        tabIndex={preventPreviewFocus ? -1 : 0}
      >
        <div
          className={cn(
            "flex h-[400px] w-full justify-center p-10",
            {
              "items-start": align === "start",
              "items-center": align === "center",
              "items-end": align === "end",
              "h-full p-0": fullPreview,
              "sm:p-10": scalePreview,
            },
            className,
          )}
        >
          <React.Suspense
            fallback={
              <div className='flex w-full items-center justify-center text-muted-foreground text-sm font-semibold'>
                <Loader2Icon className='mr-2 animate-spin size-5' /> Loading...
              </div>
            }
          >
            {Preview}
          </React.Suspense>
        </div>
      </Tab>
      <Tab value='Code' className='component-block py-0'>
        {Code}
      </Tab>
    </Tabs>
  );
}
