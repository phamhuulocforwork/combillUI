'use client';

import { Lever, LeverButton } from '@/components/ui/Lever';
import { useState } from 'react';

export function LeverDemo() {
  const [selected, setSelected] = useState(true);

  const handleToggle = (value: boolean) => {
    setSelected(value);
  };
  return (
    <div className='flex min-h-48 w-full items-center justify-center rounded-lg bg-background dark:bg-foreground'>
      <Lever onClick={() => handleToggle(!selected)}>
        <LeverButton selected={selected}>Danh sách phát</LeverButton>
        <LeverButton selected={!selected}>Nghe gần đây</LeverButton>
      </Lever>
    </div>
  );
}
