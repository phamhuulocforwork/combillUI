'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Lever = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    onToggle?: (value: boolean) => void;
    defaultSelected?: boolean;
    children: [React.ReactNode, React.ReactNode];
  }
>(
  (
    { className, onToggle, defaultSelected = true, children, ...props },
    ref,
  ) => {
    const [selected, setSelected] = React.useState(defaultSelected);

    const handleToggle = (value: boolean) => {
      setSelected(value);
      onToggle?.(value);
    };

    const [optionA, optionB] = React.Children.toArray(children);

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex w-fit cursor-pointer items-center rounded-full bg-slate-500 ring-2 ring-slate-500 transition-colors',
          className,
        )}
        {...props}
        onClick={() => handleToggle(!selected)}
      >
        <LeverButton selected={selected}>{optionA}</LeverButton>
        <LeverButton selected={!selected}>{optionB}</LeverButton>
        <LeverThumb selected={selected} />
      </div>
    );
  },
);
Lever.displayName = 'Lever';

const LeverButton = ({
  children,
  selected,
}: {
  children: React.ReactNode;
  selected: boolean;
}) => (
  <button
    className={cn(
      'relative z-10 flex items-center gap-2 px-3 py-3 text-xs font-bold transition-colors md:py-1.5 md:pl-3 md:pr-3.5',
      selected ? 'text-slate-500' : 'text-slate-300',
    )}
    onMouseDown={(e) => e.preventDefault()}
  >
    <span className='relative z-10'>{children}</span>
  </button>
);

const LeverThumb = ({ selected }: { selected: boolean }) => (
  <div
    className={cn(
      'absolute inset-0 z-0 flex',
      selected ? 'justify-start' : 'justify-end',
    )}
  >
    <motion.span
      layout
      transition={{ type: 'spring', damping: 15, stiffness: 250 }}
      className='h-full w-1/2 rounded-full bg-slate-50'
    />
  </div>
);

export { Lever };
