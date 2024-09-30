'use client';

import {
  ButtonWrapper,
  ColorPalette,
  Lever,
  LeverButton,
  ResponsiveTextarea,
  SwitchModeButton,
} from '@/components';
import { useState } from 'react';
import { ComponentWarpper } from '@/components';

export default function Home() {
  const [selected, setSelected] = useState(true);

  const handleToggle = (value: boolean) => {
    setSelected(value);
  };

  return (
    <div className='relative z-20 flex translate-x-10 flex-row items-start'>
      <div className='flex min-w-[896px] flex-col gap-8 rounded-xl border border-border bg-transparent p-16 shadow-md dark:border-foreground-dark'>
        <ComponentWarpper label='Colors'>
          <ColorPalette />
        </ComponentWarpper>

        <ComponentWarpper label='Button'>
          <ButtonWrapper />
        </ComponentWarpper>

        <ComponentWarpper label='Lever'>
          <Lever onClick={() => handleToggle(!selected)}>
            <LeverButton selected={selected}>Danh sách phát</LeverButton>
            <LeverButton selected={!selected}>Nghe gần đây</LeverButton>
          </Lever>
        </ComponentWarpper>

        <ComponentWarpper label='Responsive Textarea'>
          <ResponsiveTextarea className='text-text'></ResponsiveTextarea>
        </ComponentWarpper>
      </div>
      <SwitchModeButton />
    </div>
  );
}
