import React from 'react';
import { cn } from '@/lib/utils';


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
        'flex flex-col gap-4 rounded-md border border-border bg-white p-16 dark:bg-black',
        containerClassName,
      )}
    >
      {children}
    </div>
  );
}
