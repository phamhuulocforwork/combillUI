'use client';

import { useSidebar } from 'fumadocs-ui/provider';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type HTMLAttributes, type ReactNode, useMemo, useState } from 'react';

import { isActive } from '@/lib/is-active';
import { cn } from '@/lib/utils';

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';

export interface Option {
  url: string;

  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;

  props?: HTMLAttributes<HTMLElement>;
}

export function RootToggle({
  options,
  ...props
}: {
  options: Option[];
} & HTMLAttributes<HTMLButtonElement>) {
  const [open, setOpen] = useState(false);
  const { closeOnRedirect } = useSidebar();
  const pathname = usePathname();
  const selected = useMemo(() => {
    return options.find((item) => isActive(item.url, pathname, true));
  }, [options, pathname]);

  const onClick = () => {
    closeOnRedirect.current = false;
    setOpen(false);
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild {...props}>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {selected ? <Item {...selected} /> : null}
              <ChevronDown className="me-1.5 size-4 text-fd-muted-foreground" />
            </SidebarMenuButton>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] overflow-hidden p-0">
            {options.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                onClick={onClick}
                {...item.props}
                className={cn(
                  'flex w-full flex-row items-center gap-2 px-2 py-1.5',
                  selected === item
                    ? 'bg-fd-accent text-fd-accent-foreground'
                    : 'hover:bg-fd-accent/50',
                  item.props?.className,
                )}
              >
                <Item {...item} />
              </Link>
            ))}
          </PopoverContent>
        </Popover>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function Item(props: Option) {
  return (
    <>
      {props.icon}
      <div className="flex-1 text-start">
        <p className="font-medium text-sm">{props.title}</p>
        {props.description ? (
          <p className="text-fd-muted-foreground text-xs">
            {props.description}
          </p>
        ) : null}
      </div>
    </>
  );
}
