"use client";

import * as React from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

const AnimatedTooltipProvider = TooltipPrimitive.Provider;
const AnimatedTooltip = TooltipPrimitive.Root;
const AnimatedTooltipTrigger = TooltipPrimitive.Trigger;

const springConfig = { stiffness: 100, damping: 5 };

const AnimatedTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} {...props}>
        <motion.div
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 10,
            },
          }}
          exit={{ opacity: 0, y: 20, scale: 0.6 }}
          style={{
            translateX: translateX,
            rotate: rotate,
          }}
          className={cn(
            "flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl bg-primary px-3 py-1.5 text-primary-foreground ",
            className,
          )}
        >
          {props.children}
        </motion.div>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
});
AnimatedTooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
  AnimatedTooltip,
  AnimatedTooltipTrigger,
  AnimatedTooltipContent,
  AnimatedTooltipProvider,
};
