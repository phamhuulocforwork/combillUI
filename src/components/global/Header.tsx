'use client';

import { Button, Logo, SwitchModeButton } from '@/components';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Header() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-bg top-0 z-20 flex w-full justify-center duration-200 ${isScrolled ? 'sticky my-4 bg-background py-4 dark:bg-background-dark' : 'bg-transparent py-16'}`}
    >
      <div className='container flex w-full flex-row items-center justify-between px-8'>
        <Link href='/'>
          <Logo width={64} height={64} />
        </Link>
        <div className='flex flex-row items-center justify-center gap-2'>
          <Button
            className='text-background-dark dark:text-background'
            variant='link'
          >
            <Link href='/docs'>Docs</Link>
          </Button>
          <Button
            className='text-background-dark dark:text-background'
            variant='link'
          >
            Component
          </Button>
          <SwitchModeButton />
        </div>
      </div>
    </header>
  );
}
