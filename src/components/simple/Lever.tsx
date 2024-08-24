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
  const [selected, setSelected] = React.useState(true);

  const handleToggle = (value: boolean) => {
    setSelected(value);
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        'relative flex w-fit cursor-pointer items-center rounded-full bg-slate-500 ring-2 ring-slate-500 transition-colors',
        className,
      )}
      {...props}
      onClick={() => handleToggle(!selected)}
      ref={ref}
    >
      <LeverButton selected={selected}>A</LeverButton>
      <LeverButton selected={!selected}>B</LeverButton>
      <SwitchPrimitives.Thumb
        className={cn(
          'absolute inset-0 z-0 flex data-[state=unchecked]:justify-start data-[state=checked]:justify-end',
        )}
      >
        <motion.span
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className='h-full w-1/2 rounded-full bg-slate-50'
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
      selected ? 'text-slate-500' : 'text-slate-300',
    )}
    onMouseDown={(e) => e.preventDefault()}
  >
    <span className='relative z-10'>{children}</span>
  </div>
);

export { Lever, LeverButton };
