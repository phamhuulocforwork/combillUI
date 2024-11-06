import React from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/Label';

interface ComponentPreviewProps {
  name?: string;
  children: React.ReactNode;
  containerClassName?: string;
  preview?: string;
  expandable?: boolean;
}

export function ComponentPreview({
  name,
  children,
  containerClassName,
}: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-md border border-border bg-white/50 p-16 dark:bg-transparent',
        containerClassName,
      )}
    >
      <Label>{name}</Label>
      {children}
    </div>
  );
}
