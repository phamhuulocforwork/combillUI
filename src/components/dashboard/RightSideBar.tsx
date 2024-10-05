'use client';

import { SwitchModeButton } from '../layout/SwitchModeButton';

export function RightSideBar() {
  return (
    <aside className='sticky top-20 hidden w-full max-w-48 flex-col items-center justify-center rounded-lg bg-transparent p-4 lg:flex'>
      <SwitchModeButton />
    </aside>
  );
}
