'use client';

import * as React from 'react';

import { ResponsiveTextarea } from '@/registry/default/ui/responsive-textarea';

export default function ResponsiveTextareaDefault() {
  return (
    <div className="grid w-full gap-2">
      <ResponsiveTextarea
        placeholder="Type your message here."
        className="w-full"
      />
    </div>
  );
}
