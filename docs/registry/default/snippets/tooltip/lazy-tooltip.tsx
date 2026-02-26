'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function LazyTooltip() {
  const [enabled, setEnabled] = React.useState(true);

  const triggerProps = {
    onPointerEnter: () => setEnabled(true),
    onTouchStart: () => setEnabled(true),
  } as const;

  if (!enabled) {
    return (
      <>
        <Button variant="secondary">Lazy Tooltip</Button>
      </>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" {...triggerProps}>
          Lazy Tooltip
        </Button>
      </TooltipTrigger>
      <TooltipContent>This mounts on first hover</TooltipContent>
    </Tooltip>
  );
}
