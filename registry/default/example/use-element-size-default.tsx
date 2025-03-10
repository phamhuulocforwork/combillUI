"use client";

import * as React from "react";

import { useElementSize } from "@/registry/default/hooks/use-element-size";

export default function UseElementSizeDefault() {
  const { ref, width, height } = useElementSize();

  return (
    <div className='flex flex-col gap-4'>
      <textarea ref={ref} style={{ width: 400, height: 120 }} />
      <div>
        Width: {width}, height: {height}
      </div>
    </div>
  );
}
