'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import * as SwitchPrimitives from '@radix-ui/react-switch';

const Lever = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<
    typeof SwitchPrimitives.Root & {
      children: React.ReactNode;
    }
  >
>(({ className, children, ...props }, ref) => {
  const [checked, setChecked] = React.useState(false);

  const handleToggle = () => {
    setChecked((prev) => !prev);
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        'text-text-light dark:text-text-dark relative flex w-fit cursor-pointer items-center rounded-full bg-primary-500 ring-2 ring-primary-500 transition-colors',
        className,
      )}
      {...props}
      ref={ref}
      checked={checked}
      onCheckedChange={handleToggle}
    >
      {children}
      <SwitchPrimitives.Thumb
        className={cn(
          'absolute inset-0 z-0 flex data-[state=unchecked]:justify-start data-[state=checked]:justify-end',
        )}
      >
        <motion.span
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className='h-full w-1/2 rounded-full bg-background'
        />
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});
Lever.displayName = 'Lever';

const LeverButton = ({
  children,
  selected,
}: {
  children: React.ReactNode;
  selected: boolean;
}) => (
  <div
    className={cn(
      'relative z-10 flex items-center gap-2 px-3 py-3 text-xs font-bold transition-colors md:py-1.5 md:pl-3 md:pr-3.5',
      selected ? 'text-primary' : 'text-primary-foreground',
    )}
    onMouseDown={(e) => e.preventDefault()}
  >
    <span className='relative z-10'>{children}</span>
  </div>
);

export { Lever, LeverButton };
