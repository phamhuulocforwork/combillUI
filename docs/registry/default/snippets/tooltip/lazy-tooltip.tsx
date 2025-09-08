"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LazyTooltip() {
  const [enabled, setEnabled] = React.useState(true);

  const triggerProps = {
    onPointerEnter: () => setEnabled(true),
    onTouchStart: () => setEnabled(true),
  } as const;

  if (!enabled) {
    return (
      <>
        <Button variant='secondary'>Hover</Button>
      </>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline' {...triggerProps}>
          Hover
        </Button>
      </TooltipTrigger>
      <TooltipContent>This mounts on first hover</TooltipContent>
    </Tooltip>
  );
}
