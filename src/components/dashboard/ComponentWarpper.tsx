import React from 'react';
import { Label } from '@/components';
import { cn } from '@/lib/utils';

interface ComponentWarpperProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
}

export function ComponentWarpper({
  label,
  children,
  className,
}: ComponentWarpperProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {label && <Label className='text-xl font-bold'>{label}</Label>}
      {children}
    </div>
  );
}
