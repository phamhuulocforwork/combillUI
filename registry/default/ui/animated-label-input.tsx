import * as React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";

const AnimatedLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        "peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-1.5 z-10 origin-[0] -translate-y-4 scale-[0.85] transform bg-background px-2 text-sm text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-[0.85] peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 cursor-text",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
AnimatedLabel.displayName = "AnimatedLabel";

type AnimatedLabelInputProps = InputProps & { label?: string };

const AnimatedLabelInput = React.forwardRef<
  React.ElementRef<typeof AnimatedInput>,
  React.PropsWithoutRef<AnimatedLabelInputProps>
>(({ id, label, ...props }, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(ref, () => inputRef.current!);

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className='relative '>
      <AnimatedInput ref={inputRef} id={id} {...props} />
      <AnimatedLabel htmlFor={id} onClick={handleLabelClick}>
        {label}
      </AnimatedLabel>
    </div>
  );
});
AnimatedLabelInput.displayName = "AnimatedLabelInput";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const AnimatedInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        placeholder=' '
        className={cn("peer", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
AnimatedInput.displayName = "AnimatedInput";

export { AnimatedLabelInput, AnimatedLabel, AnimatedInput };
