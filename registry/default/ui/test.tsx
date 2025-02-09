'use client';

import * as React from 'react';

import { Minus, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function TestComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div className='flex flex-col items-center gap-2'>
      <Label>Count: {count}</Label>
      <div className='flex gap-2'>
        <Button onClick={() => setCount(count + 1)} size='icon'>
          <Plus />
        </Button>

        <Button onClick={() => setCount(count - 1)} size='icon'>
          <Minus />
        </Button>
      </div>
    </div>
  );
}
