"use client";

import { type HTMLAttributes, type ReactNode } from "react";

import Link from "next/link";

import type { PageTree } from "fumadocs-core/server";
import { SearchOnly, useTreeContext, useTreePath } from "fumadocs-ui/provider";

import { Icons } from "@/components/icons";
import { Navbar } from "@/components/layout/docs/navbar";
import {
  SidebarFolder,
  SidebarFolderContent,
  SidebarFolderLink,
  SidebarFolderTrigger,
  SidebarItem,
  SidebarSeparator,
} from "@/components/layout/docs/sidebar";
import {
  LargeSearchToggle,
  SearchToggle,
} from "@/components/layout/search-toggle";
import { ThemeToggle } from "@/components/layout/theme-toggle";

import { cn } from "@/lib/utils";

import { useIsMobile } from "@/hooks/use-mobile";

import { siteConfig } from "@/config/site";

import type { SidebarComponents } from "./notebook";
import { SidebarMenu, SidebarTrigger, useSidebar } from "./ui/sidebar";

export function LayoutBody(props: HTMLAttributes<HTMLElement>) {
  const { open } = useSidebar();

  return (
    <main
      id='nd-docs-layout'
      {...props}
      className={cn("flex w-full flex-1 flex-row", props.className)}
      style={
        {
          ...props.style,
          "--fd-content-width": !open
            ? "100vw"
            : "calc(min(100vw, var(--fd-layout-width)) - var(--fd-sidebar-width))",
        } as object
      }
    >
      {props.children}
    </main>
  );
}

export function SidebarItems(props: {
  components?: Partial<SidebarComponents>;
}) {
  const { root } = useTreeContext();

  return (
    <SidebarMenu className='-mt-2' {...props}>
      {renderSidebarList(root.children, 1)}
    </SidebarMenu>
  );
}

function PageTreeFolder({
  item,
  children,
  level,
}: {
  item: PageTree.Folder;
  level: number;
  children: ReactNode;
}) {
  const path = useTreePath();

  return (
    <SidebarFolder
      defaultOpen={item.defaultOpen || path.includes(item)}
      level={level + 1}
    >
      {children}
    </SidebarFolder>
  );
}

function renderSidebarList(items: PageTree.Node[], level: number): ReactNode[] {
  return items.map((item, i) => {
    const id = `${item.type}_${i.toString()}`;

    switch (item.type) {
      case "separator":
        return <SidebarSeparator key={id}>{item.name}</SidebarSeparator>;
      case "folder":
        return (
          <PageTreeFolder key={id} item={item} level={level + 1}>
            {item.index ? (
              <SidebarFolderLink
                href={item.index.url}
                external={item.index.external}
              >
                {item.icon}
                {item.name}
              </SidebarFolderLink>
            ) : (
              <SidebarFolderTrigger>
                {item.icon}
                {item.name}
              </SidebarFolderTrigger>
            )}
            <SidebarFolderContent>
              {renderSidebarList(item.children, level + 1)}
            </SidebarFolderContent>
          </PageTreeFolder>
        );
      default:
        return (
          <SidebarItem
            key={item.url}
            href={item.url}
            external={item.external}
            icon={item.icon}
          >
            {item.name}
          </SidebarItem>
        );
    }
  });
}

export function DocsNavbar() {
  const { open } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <Navbar
      id='nd-subnav'
      className='h-14 md:gap-1.5 gap-1 z-[2] border-dashed'
    >
      {!open && <SidebarTrigger className='-ms-1.5 size-8' />}
      {isMobile && <SidebarTrigger className='size-8 [&_svg]:size-[18px]' />}
      <SearchOnly>
        <LargeSearchToggle className='w-full max-w-[240px] rounded-sm max-md:hidden bg-transparent' />
      </SearchOnly>
      <div className='md:hidden'>
        <Link href='/'>
          <Icons.logo />
        </Link>
      </div>
      <div className='flex flex-1 flex-row items-center gap-6 px-2'></div>
      <SearchOnly>
        <SearchToggle className='md:hidden' />
      </SearchOnly>
      <div className='flex flex-row items-center empty:hidden max-lg:hidden'></div>
      <ThemeToggle className='p-0 max-md:hidden' />
      <Link
        className='ml-auto [&_svg]:size-5 [&_svg]:fill-current hover:bg-secondary hover:text-secondary-foreground rounded-md p-1.5'
        href={siteConfig.links.github}
        target='_blank'
      >
        <Icons.github />
      </Link>
    </Navbar>
  );
}
