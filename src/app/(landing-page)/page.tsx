'use client';

import { ButtonDemo, Component, ComponentPreview } from '@/components';

export default function Home() {
  return (
    <div className='container min-h-screen'>
      <ComponentPreview>
        <ButtonDemo />
      </ComponentPreview>

      <Component></Component>
    </div>
  );
}
