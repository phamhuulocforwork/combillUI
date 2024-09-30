'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ResponsiveTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const ResponsiveTextarea = React.forwardRef<
  HTMLTextAreaElement,
  ResponsiveTextareaProps
>(({ className, ...props }, ref) => {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const [val, setVal] = React.useState<string>('');

  React.useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + 'px';
    }
  }, [val]);

  return (
    <textarea
      className={cn(
        'border-input placeholder:text-muted-foreground focus-visible:ring-ring bg-background-light ring-offset-background-dark flex min-h-[80px] w-full resize-none overflow-hidden rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={textAreaRef}
      onChange={(e) => setVal(e.target.value)}
      {...props}
    />
  );
});
ResponsiveTextarea.displayName = 'Textarea';

export { ResponsiveTextarea as ResponsiveTextarea };
