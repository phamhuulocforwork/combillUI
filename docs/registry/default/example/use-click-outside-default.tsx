'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';

import { useClickOutside } from '@/registry/default/hooks/use-click-outside';

export default function UseClickOutsideDefault() {
  const [opened, setOpened] = React.useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <div ref={ref} className="absolute rounded-md border bg-background p-4">
          <span>Click outside to close</span>
        </div>
      )}
    </>
  );
}
