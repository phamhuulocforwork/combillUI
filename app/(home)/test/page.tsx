"use client";

import * as React from "react";

import LabeledSwitchLayout from "@/registry/default/example/labeled-switch-layout";

export default function TestPage() {
  return (
    <section className='container flex flex-col items-center justify-start gap-4'>
      <LabeledSwitchLayout />
    </section>
  );
}
