'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

const ResponsiveTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
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
        'placeholder:text-muted-foreground flex min-h-[80px] w-full resize-none overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={textAreaRef}
      onChange={(e) => setVal(e.target.value)}
      {...props}
    />
  );
});
ResponsiveTextarea.displayName = 'ResponsiveTextarea';

export { ResponsiveTextarea };
