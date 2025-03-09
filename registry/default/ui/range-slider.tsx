"use client";

import * as React from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

interface RangeSliderProps
  extends React.ComponentProps<typeof SliderPrimitive.Root> {
  labelPosition?: "top" | "bottom";
  label?: (value: number | undefined) => React.ReactNode;
  orientation?: "horizontal" | "vertical";
}

const RangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  RangeSliderProps
>(
  (
    {
      className,
      label,
      labelPosition = "top",
      orientation = "horizontal",
      ...props
    },
    ref,
  ) => {
    const initialValue = Array.isArray(props.value)
      ? props.value
      : [props.min, props.max];

    return (
      <SliderPrimitive.Root
        ref={ref}
        orientation={orientation}
        className={cn(
          orientation === "horizontal"
            ? "relative flex w-full touch-none select-none items-center"
            : "relative flex h-full min-h-[200px] touch-none select-none flex-col items-center",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(
            orientation === "horizontal"
              ? "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"
              : "relative w-2 h-full grow overflow-hidden rounded-full bg-secondary",
          )}
        >
          <SliderPrimitive.Range
            className={cn(
              orientation === "horizontal"
                ? "absolute h-full bg-primary"
                : "absolute w-full bg-primary",
            )}
          />
        </SliderPrimitive.Track>
        {initialValue.map((value, index) => (
          <React.Fragment key={index}>
            <SliderPrimitive.Thumb
              className={cn(
                "relative block border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                orientation === "horizontal"
                  ? "h-5 w-2 rounded-sm"
                  : "h-2 w-5 rounded-sm",
              )}
            >
              {label && (
                <span
                  className={cn(
                    "absolute flex text-xs justify-center font-medium",
                    orientation === "horizontal"
                      ? labelPosition === "top"
                        ? "-left-2 -top-5"
                        : "-left-2 top-5"
                      : labelPosition === "top"
                        ? "-translate-x-full -translate-y-1/2 -left-2"
                        : "translate-x-full -translate-y-1/2",
                  )}
                >
                  {label(value)}
                </span>
              )}
            </SliderPrimitive.Thumb>
          </React.Fragment>
        ))}
      </SliderPrimitive.Root>
    );
  },
);
RangeSlider.displayName = "RangeSlider";

export { RangeSlider };
