"use client";

/**
 * @see https://github.com/shadcn-ui/ui/blob/main/apps/www/components/code-block-wrapper.tsx
 */
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { cn } from "@/lib/utils";

interface CodeBlockProps
  extends React.ComponentPropsWithoutRef<typeof Collapsible> {
  expandButtonTitle?: string;
  maxHeight?: string;
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  maxHeight = "max-h-32",
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <CollapsibleContent
        forceMount
        className={cn("overflow-hidden", !open && maxHeight)}
      >
        <div
          className={cn(
            "[&_figure]:my-0 [&_figure]:pb-[20px]",
            !open ? "[&_figure]:overflow-hidden" : "[&_figure]:overflow-auto]",
          )}
        >
          {children}
        </div>
      </CollapsibleContent>
      <div
        className={cn(
          "absolute flex items-center justify-center bg-gradient-to-b from-background/30 to-background/90 p-2",
          open ? "inset-x-0 bottom-0 h-12" : "inset-0",
        )}
      >
        <CollapsibleTrigger asChild>
          <Button className='h-[2.15rem] bg-background px-3.5 text-foreground hover:bg-background/70'>
            {open ? "Collapse" : expandButtonTitle} code
          </Button>
        </CollapsibleTrigger>
      </div>
    </Collapsible>
  );
}
