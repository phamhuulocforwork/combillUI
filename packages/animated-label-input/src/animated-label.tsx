import * as React from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@combillui/shared";

export interface AnimatedLabelProps extends React.ComponentPropsWithoutRef<"label"> {
  asChild?: boolean;
}

const AnimatedLabel = React.forwardRef<React.ElementRef<"label">, AnimatedLabelProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "label";

    return (
      <Comp
        className={cn(
          "peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-1.5 z-10 origin-[0] -translate-y-4 scale-[0.85] transform bg-background px-2 text-sm text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-[0.85] peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 cursor-text",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

AnimatedLabel.displayName = "AnimatedLabel";

export { AnimatedLabel };
