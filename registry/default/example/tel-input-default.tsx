'use client';

import { TelInput } from '@/registry/default/ui/tel-input';

export default function TelInputDefault() {
  return (
    <div className='flex flex-col gap-2'>
      <TelInput defaultCountry='VN' />
    </div>
  );
}
