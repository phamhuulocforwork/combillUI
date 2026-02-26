import Link from 'next/link';
import type { ReactNode } from 'react';

import { FaGithub } from 'react-icons/fa';

import { Icons } from '@/components/icons';
import CommandMenu from '@/components/layout/command-menu';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { NavMenu } from './nav-menu';

interface HeaderProps {
  toggle?: ReactNode;
  fullWidth?: boolean;
}

export default function Header({ toggle, fullWidth }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex h-[var(--header-height)] min-h-12 w-full flex-shrink-0 items-center justify-center border-b border-dashed bg-background/60 backdrop-blur-[8px]">
      <div
        className={`mx-auto flex h-full w-full items-center border-dashed ${fullWidth ? 'min-w-screen max-w-[1400px]' : 'container min-[1400px]:border-x'}`}
      >
        <div className="flex w-full items-center max-lg:gap-4">
          <div className="flex items-center gap-3 ps-4 sm:ps-8">
            {toggle}
            <Link href="/">
              <Icons.logo className="size-6" aria-hidden="true" />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer font-medium text-muted-foreground text-sm hover:text-foreground max-sm:hidden">
                v1.0.0
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link
                      href="https://github.com/phamhuulocforwork/combillUI/blob/main/CHANGELOG.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      Changelog
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/#roadmap" className="cursor-pointer">
                      Roadmap
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <nav className="flex flex-1 items-center justify-end gap-1.5 pe-4 sm:gap-4 sm:pe-8 lg:justify-between lg:ps-8">
            <NavMenu />
            <div className="flex items-center gap-2 md:gap-4">
              <CommandMenu />
              <ThemeToggle className="p-0 max-md:hidden" />
              <div className="flex items-center gap-1.5">
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer"
                  asChild
                >
                  <Link
                    href="https://github.com/phamhuulocforwork/combillUI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="size-5" />
                    <span className="sr-only">Github</span>
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
