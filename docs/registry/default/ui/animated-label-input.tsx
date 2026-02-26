import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { cn } from '@/lib/utils';

export interface AnimatedLabelProps
  extends React.ComponentPropsWithoutRef<typeof Label> {
  asChild?: boolean;
}

const AnimatedLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  AnimatedLabelProps
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : Label;

  return (
    <Comp
      className={cn(
        'peer-focus:secondary peer-focus:dark:secondary -translate-y-4 peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-4 absolute start-2 top-1.5 z-10 origin-[0] scale-[0.85] transform cursor-text bg-background px-2 text-muted-foreground text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:scale-[0.85] peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-background',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
AnimatedLabel.displayName = 'AnimatedLabel';

export interface AnimatedLabelInputProps extends InputProps {
  label?: string;
  asChild?: boolean;
}

const AnimatedLabelInput = React.forwardRef<
  React.ElementRef<typeof AnimatedInput>,
  AnimatedLabelInputProps
>(({ id, label, asChild = false, ...props }, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const Comp = asChild ? Slot : 'div';

  React.useImperativeHandle(ref, () => inputRef.current!);

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Comp className="relative">
      <AnimatedInput ref={inputRef} id={id} {...props} />
      <AnimatedLabel htmlFor={id} onClick={handleLabelClick}>
        {label}
      </AnimatedLabel>
    </Comp>
  );
});
AnimatedLabelInput.displayName = 'AnimatedLabelInput';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
}

const AnimatedInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Input;

    return (
      <Comp
        placeholder=" "
        className={cn('peer', className)}
        ref={ref}
        {...props}
      />
    );
  },
);
AnimatedInput.displayName = 'AnimatedInput';

export { AnimatedLabelInput, AnimatedLabel, AnimatedInput };
