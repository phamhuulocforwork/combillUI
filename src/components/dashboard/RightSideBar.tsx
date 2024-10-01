'use client';

import { SwitchModeButton } from '@/components';

export function RightSideBar() {
  return (
    <aside className='sticky top-1/2 min-w-fit flex-col bg-transparent lg:min-w-56'>
      <SwitchModeButton />
    </aside>
  );
}
