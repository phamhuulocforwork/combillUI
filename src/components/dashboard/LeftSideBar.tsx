import { Button, Label } from '@/components';
import Link from 'next/link';
export function LeftSideBar() {
  return (
    <aside className='sticky top-20 hidden w-full max-w-48 flex-col items-start justify-center gap-4 rounded-lg bg-transparent lg:flex'>
      <Label className='text-base'>Navigation</Label>
      <Link className='text-sm font-bold hover:underline' href='/'>
        1. Simple UI
      </Link>
      <Link className='text-sm font-bold hover:underline' href='/complex'>
        2. Complex UI
      </Link>
    </aside>
  );
}
