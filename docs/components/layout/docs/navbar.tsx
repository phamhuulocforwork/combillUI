'use client';

import { SidebarTrigger } from 'fumadocs-core/sidebar';
import { Menu, X } from 'lucide-react';
import type { ButtonHTMLAttributes, HTMLAttributes } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';

import { cn } from '@/lib/utils';

export function Navbar(props: HTMLAttributes<HTMLElement>) {
  const { open } = useSidebar();

  return (
    <header
      {...props}
      className={cn(
        'sticky top-[var(--fd-banner-height)] flex flex-row items-center border-fd-foreground/10 border-b px-4 transition-colors',
        open && 'bg-fd-background/80 backdrop-blur-lg',
        props.className,
      )}
    >
      {props.children}
    </header>
  );
}

export function NavbarSidebarTrigger(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { open } = useSidebar();

  return (
    <SidebarTrigger
      {...props}
      className={cn(
        buttonVariants({
          variant: 'ghost',
          size: 'icon',
        }),
        props.className,
      )}
    >
      {open ? <X /> : <Menu />}
    </SidebarTrigger>
  );
}
