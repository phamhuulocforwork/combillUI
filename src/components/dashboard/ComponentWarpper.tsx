import React from 'react';
import { Label } from '@/components';

interface ComponentWarpperProps {
  label?: string;
  children: React.ReactNode;
}

export function ComponentWarpper({ label, children }: ComponentWarpperProps) {
  return (
    <div className='flex flex-col gap-4'>
      {label && <Label className='text-xl font-bold'>{label}</Label>}
      {children}
    </div>
  );
}
