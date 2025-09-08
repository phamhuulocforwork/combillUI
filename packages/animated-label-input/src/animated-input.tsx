import * as React from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@combillui/shared";

export interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
}

const AnimatedInput = React.forwardRef<HTMLInputElement, AnimatedInputProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "input";

    return <Comp placeholder=" " className={cn("peer", className)} ref={ref} {...props} />;
  }
);

AnimatedInput.displayName = "AnimatedInput";

export { AnimatedInput };
