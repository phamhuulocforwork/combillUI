"use client";

import {
  type HTMLAttributes,
  type ReactNode,
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import { usePathname } from "next/navigation";

import type {
  CollapsibleContentProps,
  CollapsibleTriggerProps,
} from "@radix-ui/react-collapsible";
import { cva } from "class-variance-authority";
import Link, { type LinkProps } from "fumadocs-core/link";
import { useOnChange } from "fumadocs-core/utils/use-on-change";
import { ChevronRight, ExternalLink } from "lucide-react";

import { isActive } from "@/lib/is-active";
import { cn } from "@/lib/utils";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Sidebar as ShadCNSidebar,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "../ui/sidebar";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  defaultOpenLevel?: number;
  prefetch?: boolean;
}

interface InternalContext {
  defaultOpenLevel: number;
  prefetch: boolean;
}

const itemVariants = cva(
  "flex flex-row items-center gap-2.5 rounded-sm px-3 py-2 text-fd-muted-foreground/90 transition-all duration-200 [overflow-wrap:anywhere] md:px-2.5 md:py-2 [&_svg]:size-4 hover:translate-x-0.5",
  {
    variants: {
      active: {
        true: "bg-fd-primary font-medium text-fd-primary translate-x-0.5",
        false: "hover:bg-fd-accent hover:text-fd-accent-foreground",
      },
    },
  },
);

const Context = createContext<InternalContext | undefined>(undefined);
const FolderContext = createContext<
  | {
      open: boolean;
      setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

export function Sidebar({
  defaultOpenLevel = 0,
  prefetch = true,
  ...props
}: SidebarProps) {
  const context = useMemo<InternalContext>(() => {
    return {
      defaultOpenLevel,
      prefetch,
    };
  }, [defaultOpenLevel, prefetch]);

  return (
    <Context.Provider value={context}>
      <ShadCNSidebar className='border-dashed'>{props.children}</ShadCNSidebar>
    </Context.Provider>
  );
}

export function SidebarSeparator(props: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <SidebarGroupLabel
      {...props}
      className='text-[11px] uppercase tracking-wider text-fd-muted-foreground/60 font-semibold pt-4 pb-2'
    >
      {props.children}
    </SidebarGroupLabel>
  );
}

export function SidebarItem({
  icon,
  ...props
}: LinkProps & {
  icon?: ReactNode;
}) {
  const pathname = usePathname();
  const active =
    props.href !== undefined && isActive(props.href, pathname, false);
  const { prefetch } = useInternalContext();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          {...props}
          data-active={active}
          className={cn(
            itemVariants({ active }),
            "group/item transition-all duration-200",
          )}
          prefetch={prefetch}
        >
          {icon ??
            (props.external ? <ExternalLink className='shrink-0' /> : null)}
          <span className='flex-1 truncate'>{props.children}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export function SidebarFolder({
  level,
  defaultOpen,
  ...props
}: {
  children: ReactNode;
  defaultOpen?: boolean;
  level: number;
}) {
  const { defaultOpenLevel } = useInternalContext();
  const shouldExtend = defaultOpen ?? defaultOpenLevel >= level;
  const [open, setOpen] = useState(shouldExtend);

  useOnChange(shouldExtend, (v) => {
    if (v) setOpen(v);
  });

  return (
    <Collapsible
      className='group/collapsible'
      open={open}
      onOpenChange={setOpen}
    >
      <FolderContext.Provider
        value={useMemo(() => ({ open, setOpen }), [open])}
      >
        {props.children}
      </FolderContext.Provider>
    </Collapsible>
  );
}

export function SidebarFolderTrigger(props: CollapsibleTriggerProps) {
  return (
    <SidebarMenuItem>
      <CollapsibleTrigger
        className={cn(
          itemVariants({ active: false }),
          "w-full pe-3 md:pe-2 group/trigger",
        )}
        asChild
        {...props}
      >
        <SidebarMenuButton>
          {props.children}
          <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
        </SidebarMenuButton>
      </CollapsibleTrigger>
    </SidebarMenuItem>
  );
}

export function SidebarFolderLink(props: LinkProps) {
  const { setOpen } = useFolderContext();
  const { prefetch } = useInternalContext();

  const pathname = usePathname();
  const active =
    props.href !== undefined && isActive(props.href, pathname, false);

  useLayoutEffect(() => {
    if (active) {
      setOpen(true);
    }
  }, [active, setOpen]);

  return (
    <Link
      {...props}
      data-active={active}
      className={cn(
        itemVariants({ active }),
        "w-full pe-3.5 md:pe-1.5 h-8",
        props.className,
      )}
      onClick={(e) => {
        if ((e.target as HTMLElement).hasAttribute("data-icon") || active) {
          setOpen((prev) => !prev);
          e.preventDefault();
        }
      }}
      prefetch={prefetch}
    >
      {props.children}
      <ChevronRight className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
    </Link>
  );
}

export function SidebarFolderContent(props: CollapsibleContentProps) {
  return (
    <CollapsibleContent forceMount {...props}>
      <SidebarMenuSub className='ml-3 border-l-[1.5px] border-fd-border/50 pl-1.5 pr-1.5'>
        {props.children}
      </SidebarMenuSub>
    </CollapsibleContent>
  );
}

function useFolderContext() {
  const ctx = useContext(FolderContext);

  if (!ctx) throw new Error("Missing sidebar folder");
  return ctx;
}

function useInternalContext(): InternalContext {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("<Sidebar /> component required.");

  return ctx;
}
