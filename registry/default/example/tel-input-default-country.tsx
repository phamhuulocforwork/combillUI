"use client";

import * as React from "react";

import { TelInput } from "@/registry/default/ui/tel-input";

export default function TelInputDefaultCountry() {
  const [value, setValue] = React.useState<string>("");

  return (
    <div className='flex flex-col gap-2'>
      <TelInput
        value={value}
        onChange={setValue}
        defaultCountry='VN'
        placeholder='Default country (Vietnam)'
      />
      <p className='text-sm text-muted-foreground'>
        Phone number: {value || "No phone number entered"}
      </p>
    </div>
  );
}
