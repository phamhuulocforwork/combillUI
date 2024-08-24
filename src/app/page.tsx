'use client';

import { Label, Lever, LeverButton, ResponsiveTextarea } from '@/components';
import { useState } from 'react';

export default function Home() {
  const [selected, setSelected] = useState(true);

  const handleToggle = (value: boolean) => {
    setSelected(value);
  };

  return (
    <main className='flex min-h-screen w-full flex-col items-center justify-center gap-8'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-center text-4xl font-bold'>
          Welcome to the TailwindCSS UI Kit!
        </h1>
        <p className='text-center text-lg'>
          This is a Next.js starter template with TailwindCSS and TypeScript.
        </p>
      </div>
      <div className='flex min-w-96 flex-col gap-8'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <Label className='w-full'>1. Lever</Label>
          <Lever onClick={() => handleToggle(!selected)}>
            <LeverButton selected={selected}>Danh sách phát</LeverButton>
            <LeverButton selected={!selected}>Nghe gần đây</LeverButton>
          </Lever>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <Label className='w-full'>2. Responsive Textarea</Label>
          <ResponsiveTextarea className='text-text'></ResponsiveTextarea>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <Label className='w-full'>3. Responsive Textarea</Label>
        </div>
      </div>
    </main>
  );
}
