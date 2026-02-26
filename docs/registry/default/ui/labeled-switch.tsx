'use client';

import * as SwitchPrimitives from '@radix-ui/react-switch';
import { motion } from 'framer-motion';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface LabeledSwitchProps {
  firstLabel: React.ReactNode;
  secondLabel: React.ReactNode;
  selected: boolean;
  onToggle: (checked: boolean) => void;
  className?: string;
}

const LabeledSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  LabeledSwitchProps
>(
  (
    { className, firstLabel, secondLabel, selected, onToggle, ...props },
    ref,
  ) => {
    return (
      <SwitchPrimitives.Root
        className={cn(
          'relative flex w-fit cursor-pointer items-center rounded-full ring-2 ring-input transition-colors',
          className,
        )}
        ref={ref}
        checked={selected}
        onCheckedChange={onToggle}
      >
        <LabeledSwitchButton selected={selected}>
          {firstLabel}
        </LabeledSwitchButton>
        <LabeledSwitchButton selected={!selected}>
          {secondLabel}
        </LabeledSwitchButton>
        <SwitchPrimitives.Thumb
          className={cn(
            'absolute inset-0 z-0 flex w-full data-[state=unchecked]:justify-start data-[state=checked]:justify-end',
          )}
        >
          <motion.span
            layout
            transition={{ type: 'spring', damping: 15, stiffness: 250 }}
            className="h-full w-1/2 rounded-full bg-muted"
          />
        </SwitchPrimitives.Thumb>
      </SwitchPrimitives.Root>
    );
  },
);
LabeledSwitch.displayName = 'LabeledSwitch';

const LabeledSwitchButton = ({
  children,
  selected,
}: {
  children: React.ReactNode;
  selected: boolean;
}) => (
  <div
    className={cn(
      'relative z-10 flex w-full items-center justify-center gap-2 px-3 py-3 font-bold text-xs transition-colors md:py-1.5 md:pr-3.5 md:pl-3',
      selected ? 'text-primary' : 'text-muted-foreground',
    )}
    onMouseDown={(e) => e.preventDefault()}
  >
    <span className="relative z-10">{children}</span>
  </div>
);

export { LabeledSwitch };
