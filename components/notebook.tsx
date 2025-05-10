import { FC, type HTMLAttributes, type ReactNode } from "react";

import Link from "next/link";
import { notFound } from "next/navigation";

import type { PageTree } from "fumadocs-core/server";
import { TreeContextProvider } from "fumadocs-ui/provider";

import { type Option, RootToggle } from "@/components/layout/root-toggle";

import { TabOptions, getSidebarTabs } from "@/lib/get-sidebar-tabs";
import { cn } from "@/lib/utils";

import { Sidebar, SidebarProps } from "./docs/sidebar";
import { Icons } from "./icons";
import { DocsNavbar, LayoutBody, SidebarItems } from "./notebook.client";
import {
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarTrigger,
} from "./ui/sidebar";

interface SidebarOptions extends SidebarProps {
  tabs?: Option[] | TabOptions | false;

  components?: Partial<SidebarComponents>;
}

export interface SidebarComponents {
  Item: FC<{ item: PageTree.Item }>;
  Folder: FC<{ item: PageTree.Folder; level: number }>;
  Separator: FC<{ item: PageTree.Separator }>;
}

export interface DocsLayoutProps {
  tree: PageTree.Root;

  sidebar?: Partial<SidebarOptions>;

  containerProps?: HTMLAttributes<HTMLDivElement>;

  children?: ReactNode;
}

export function DocsLayout({
  sidebar: { tabs: tabOptions, components: sidebarComponents } = {},
  children,
  ...props
}: DocsLayoutProps) {
  if (props.tree === undefined) notFound();

  let tabs: Option[] = [];
  if (Array.isArray(tabOptions)) {
    tabs = tabOptions;
  } else if (typeof tabOptions === "object") {
    tabs = getSidebarTabs(props.tree, tabOptions);
  } else if (tabOptions !== false) {
    tabs = getSidebarTabs(props.tree);
  }

  return (
    <TreeContextProvider tree={props.tree}>
      <LayoutBody
        {...props.containerProps}
        className={cn(
          "[--fd-nav-height:3.5rem] md:[--fd-sidebar-width:260px] lg:[--fd-toc-width:260px] [&_#nd-toc]:max-lg:hidden [&_#nd-tocnav]:lg:hidden",
          props.containerProps?.className,
        )}
      >
        <Sidebar className='md:[--fd-nav-height:0px]'>
          <SidebarHeader>
            <SidebarHeaderItems>
              <SidebarTrigger className='ms-auto text-fd-muted-foreground' />
            </SidebarHeaderItems>
            {tabs.length > 0 ? <RootToggle options={tabs} /> : null}
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarItems components={sidebarComponents} />
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className='w-full min-w-0 max-w-[var(--fd-content-width)] [--fd-nav-height:3.5rem]'>
            <DocsNavbar />
            <div className='flex flex-row z-[1]'>{children}</div>
          </div>
          <div
            className='min-w-[var(--fd-sidebar-width)] flex-1'
            style={{
              marginInlineStart: "calc(var(--fd-sidebar-width) * -1)",
            }}
          />
        </SidebarInset>
      </LayoutBody>
    </TreeContextProvider>
  );
}

function SidebarHeaderItems({ children }: { children: ReactNode }) {
  return (
    <SidebarGroup className='flex flex-row items-center'>
      <Link
        href='/'
        className='inline-flex items-center gap-1.5 py-1 font-medium'
      >
        <Icons.logo />
        CombillUI
      </Link>
      {children}
    </SidebarGroup>
  );
}
