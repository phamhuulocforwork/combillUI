'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';

export function TestComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='text-4xl font-bold'>{count}</div>
      <div className='flex gap-2'>
        <Button variant='outline' onClick={() => setCount((prev) => prev - 1)}>
          -
        </Button>
        <Button variant='outline' onClick={() => setCount((prev) => prev + 1)}>
          +
        </Button>
      </div>
    </div>
  );
}
