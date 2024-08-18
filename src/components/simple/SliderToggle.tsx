'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import * as React from 'react';

const TOGGLE_CLASSES =
  'text-xs font-bold flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10';

const SliderToggle = () => {
  const [selected, setSelected] = React.useState(true);

  return (
    <div className='relative flex w-fit items-center rounded-full'>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === true ? 'text-slate-500' : 'text-slate-500'
        }`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => {
          setSelected((prev) => !prev);
        }}
      >
        <span className='relative z-10'>A</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === false ? 'text-slate-500' : 'text-slate-500'
        }`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => {
          setSelected((prev) => !prev);
        }}
      >
        <span className='relative z-10'>B</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === false ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.span
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className='h-full w-1/2 rounded-full bg-slate-50'
        />
      </div>
    </div>
  );
};

export { SliderToggle };
