'use client';

import { Label } from '@/components/ui/Label';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='z-10 flex w-full items-center justify-center bg-background p-12 dark:bg-foreground'>
      <div className='container flex w-full items-center justify-between'>
        <div className='flex flex-col gap-4'>
          <Label>Contact</Label>
          <span className='text-3xl font-bold'>
            phamhuulocforwork@gmail.com
          </span>
        </div>

        <div className='flex flex-col gap-4'>
          <Link href='https://github.com/phamhuulocforwork'>
            <FaGithub className='h-12 w-12' />
          </Link>
        </div>
      </div>
    </footer>
  );
}
