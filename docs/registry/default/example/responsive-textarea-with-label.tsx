'use client';

import * as React from 'react';

import { Label } from '@/components/ui/label';

import { ResponsiveTextarea } from '@/registry/default/ui/responsive-textarea';

export default function ResponsiveTextareaWithLabel() {
  return (
    <div className="grid w-full gap-2">
      <Label>Your message</Label>
      <ResponsiveTextarea
        placeholder="Type your message here."
        className="w-full"
      />
    </div>
  );
}
