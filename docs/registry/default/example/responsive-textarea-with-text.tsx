"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";

import { ResponsiveTextarea } from "@/registry/default/ui/responsive-textarea";

export default function ResponsiveTextareaWithText() {
  return (
    <div className='grid w-full gap-2'>
      <Label>Your message</Label>

      <ResponsiveTextarea
        placeholder='Type your message here.'
        className='w-full'
      />
      <p className='text-sm text-muted-foreground'>
        Your message will be copied to the support team.
      </p>
    </div>
  );
}
