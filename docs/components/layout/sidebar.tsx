'use client';

import { Code, LayoutPanelTop, PanelLeftIcon, X } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps, MouseEvent } from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { categoriesSnippet } from '@/config/snippets';

import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

type CustomSidebarMenuItemProps = ComponentProps<'li'> & {
  href?: string;
  openInNewTab?: boolean;
};

type CustomSidebarMenuSubItemProps = ComponentProps<'li'> & {
  isNew?: boolean;
  isUpdated?: boolean;
  href?: string;
  openInNewTab?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

export const CustomSidebarTrigger = ({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('size-7', className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Sidebar</span>
    </Button>
  );
};

const CustomSidebarMenuItem = ({
  children,
  href,
  openInNewTab,
}: CustomSidebarMenuItemProps) => {
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();

  const active = href && pathname.startsWith(href);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        className={cn(
          'h-8.5 cursor-pointer rounded-sm px-3 font-medium text-muted-foreground',
          {
            'text-primary hover:text-primary active:text-primary': active,
          },
        )}
        {...(href && { asChild: true })}
      >
        {href ? (
          <Link
            href={href}
            {...(openInNewTab && { target: '_blank' })}
            rel="noopener noreferrer"
            onClick={() => setOpenMobile(false)}
          >
            {children}
          </Link>
        ) : (
          children
        )}
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

const CustomSidebarMenuSubItem = ({
  children,
  href,
  openInNewTab,
  isNew,
  isUpdated,
  onClick,
}: CustomSidebarMenuSubItemProps) => {
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <SidebarMenuSubItem
      className={cn('border-s-1 hover:border-foreground hover:border-s-2', {
        'border-primary border-s-2 hover:border-primary active:border-primary':
          active,
      })}
    >
      <SidebarMenuSubButton
        className={cn(
          'h-8 cursor-pointer px-3 text-muted-foreground hover:bg-transparent hover:ps-[11px] hover:text-foreground active:bg-transparent active:text-foreground',
          {
            'ps-[11px] text-primary hover:text-primary active:text-primary':
              active,
          },
        )}
        {...(href && { asChild: true })}
      >
        {href ? (
          <Link
            href={href}
            {...(openInNewTab && { target: '_blank' })}
            rel="noopener noreferrer"
            onClick={(e) => {
              onClick?.(e);
              setOpenMobile(false);
            }}
          >
            {children}
          </Link>
        ) : (
          children
        )}
      </SidebarMenuSubButton>
      {isUpdated && (
        <SidebarMenuBadge className="!end-0 -translate-y-1/2 top-1/2 rounded-[4px] bg-indigo-500/20 px-2 py-0.5 font-normal text-indigo-500">
          Updated
        </SidebarMenuBadge>
      )}
      {isNew && (
        <SidebarMenuBadge className="!end-0 -translate-y-1/2 top-1/2 rounded-[4px] bg-green-500/20 px-2 py-0.5 font-normal text-green-500">
          New
        </SidebarMenuBadge>
      )}
    </SidebarMenuSubItem>
  );
};

const AppSidebar = () => {
  const isBreakpointReached = useMediaQuery('(max-width: 1023px)');
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar
      collapsible={isBreakpointReached ? 'offcanvas' : 'none'}
      className="border-r border-dashed bg-background"
    >
      {isBreakpointReached && (
        <SidebarHeader className="min-h-[3rem] flex-row items-center justify-between px-6 py-3.5">
          <Link href="/">
            <Icons.logo />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="size-7 cursor-pointer"
            onClick={() => setOpenMobile(false)}
          >
            <X className="size-5" />
            <span className="sr-only">Close</span>
          </Button>
        </SidebarHeader>
      )}
      <ScrollArea className="lg:!sticky max-h-[calc(100vh-3rem)] lg:top-[3rem]">
        <SidebarContent>
          <SidebarGroup
            className={cn('px-3 pt-0 pb-4 last:pb-8 lg:px-4', {
              'first:pt-8': !isBreakpointReached,
            })}
          >
            <SidebarMenu className="gap-2.5">
              <CustomSidebarMenuItem href="/snippets">
                <Code className="!size-5" />
                Snippets
              </CustomSidebarMenuItem>
              <CustomSidebarMenuItem>
                <LayoutPanelTop className="!size-5" />
                Blocks
                <SidebarMenuBadge className="static rounded-full bg-muted px-2 py-0.5 font-normal text-muted-foreground">
                  Coming Soon
                </SidebarMenuBadge>
              </CustomSidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup
            className={cn('px-3 pt-0 pb-4 last:pb-8 lg:px-4', {
              'first:pt-8': !isBreakpointReached,
            })}
          >
            <SidebarGroupLabel className="px-3 pb-2 font-semibold text-sm lg:px-4">
              Snippets
            </SidebarGroupLabel>
            <SidebarMenuSub className="mx-3 gap-0 border-0 p-0 lg:mx-4">
              {categoriesSnippet.map((category) => (
                <CustomSidebarMenuSubItem
                  key={category.slug}
                  isNew={'isNew' in category ? category.isNew : undefined}
                  isUpdated={
                    'isUpdated' in category ? category.isUpdated : undefined
                  }
                  {...(category.isComingSoon
                    ? { href: '/', onClick: (e) => e.preventDefault() }
                    : { href: `/snippets/${category.slug}` })}
                >
                  {category.name}
                  {category.isComingSoon && (
                    <SidebarMenuBadge className="static rounded-full bg-muted px-2 py-0.5 font-normal text-muted-foreground">
                      Coming Soon
                    </SidebarMenuBadge>
                  )}
                </CustomSidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </SidebarGroup>
        </SidebarContent>
      </ScrollArea>
    </Sidebar>
  );
};

export default AppSidebar;
