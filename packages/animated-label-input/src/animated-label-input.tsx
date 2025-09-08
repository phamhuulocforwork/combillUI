import * as React from "react";

import { Slot } from "@radix-ui/react-slot";

import { AnimatedInput, AnimatedInputProps } from "./animated-input";
import { AnimatedLabel } from "./animated-label";

export interface AnimatedLabelInputProps extends AnimatedInputProps {
  label?: string;
  asChild?: boolean;
}

const AnimatedLabelInput = React.forwardRef<
  React.ElementRef<typeof AnimatedInput>,
  AnimatedLabelInputProps
>(({ id, label, asChild = false, ...props }, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const Comp = asChild ? Slot : "div";

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

AnimatedLabelInput.displayName = "AnimatedLabelInput";

export { AnimatedLabelInput };
