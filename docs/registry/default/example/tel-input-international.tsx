'use client';

import * as React from 'react';

import { TelInput } from '@/registry/default/ui/tel-input';

export default function TelInputInternational() {
  const [value, setValue] = React.useState<string>('');

  return (
    <div className="flex flex-col gap-2">
      <TelInput
        value={value}
        onChange={setValue}
        defaultCountry="VN"
        international
        placeholder="Force international format"
      />
      <p className="text-muted-foreground text-sm">
        Phone number: {value || 'No phone number entered'}
      </p>
    </div>
  );
}
