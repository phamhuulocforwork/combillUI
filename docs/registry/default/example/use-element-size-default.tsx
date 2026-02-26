'use client';

import * as React from 'react';

import { Textarea } from '@/components/ui/textarea';

import { useElementSize } from '@/registry/default/hooks/use-element-size';

export default function UseElementSizeDefault() {
  const { ref, width, height } = useElementSize();

  return (
    <div className="space-y-4">
      <Textarea
        ref={ref}
        placeholder="Type your message here."
        className="w-full"
      />
      <div>
        Width: {width}, height: {height}
      </div>
    </div>
  );
}
