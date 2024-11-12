'use client';

import * as React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/_app/Logo';
import { Button } from '@/components/ui/Button';
import { SwitchModeButton } from '@/components/_app/SwitchModeButton';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      setIsScrolled(window.scrollY > 0);
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <header
      className={cn(
        'transition-bg sticky top-0 z-20 flex w-full items-center justify-center bg-transparent py-6 duration-200',
        isScrolled && 'bg-background py-4 dark:bg-foreground',
      )}
    >
      <div className='container flex w-full items-center justify-between px-8'>
        <Logo className='max-w-16' />
        <div className='flex flex-row items-center justify-center gap-2'>
          <Button variant='link'>
            <Link
              className='text-foreground dark:text-background'
              href='/docs/installation'
            >
              Docs
            </Link>
          </Button>
          <Button variant='link'>
            <Link
              className='text-foreground dark:text-background'
              href='/components'
            >
              Component
            </Link>
          </Button>
          <SwitchModeButton />
        </div>
      </div>
    </header>
  );
}
