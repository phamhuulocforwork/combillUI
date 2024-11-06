'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/app/Logo';
import { Button } from '@/components/ui/Button';
import { SwitchModeButton } from '@/components/app/SwitchModeButton';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      setIsScrolled(window.scrollY > 0);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <header className='transition-bg sticky top-0 z-20 flex w-full justify-center bg-background py-4 duration-200 dark:bg-foreground'>
      <div className='container flex w-full flex-row items-center justify-between px-8'>
        <Link href='/'>
          <Logo width={64} height={64} />
        </Link>
        <div className='flex flex-row items-center justify-center gap-2'>
          <Button
            className='text-background-dark dark:text-background'
            variant='link'
          >
            <Link href='/docs/installation'>Docs</Link>
          </Button>
          <Button
            className='text-background-dark dark:text-background'
            variant='link'
          >
            <Link href='/components'>Component</Link>
          </Button>
          <SwitchModeButton />
        </div>
      </div>
    </header>
  );
}
