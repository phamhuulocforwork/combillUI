"use client";

import * as React from "react";

import { FloatingLabelInput } from "@/registry/default/ui/floating-label-input";

export default function TestPage() {
  return (
    <section className='container flex flex-col items-center justify-center gap-4'>
      <FloatingLabelInput id='floating-demo' label='floating Label' />
    </section>
  );
}
