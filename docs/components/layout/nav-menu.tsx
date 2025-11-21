"use client";

import * as React from "react";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

import { categoriesSnippet } from "@/config/snippets";
import { categoriesTools } from "@/config/tools";

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Components
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Snippets</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {categoriesSnippet.map((snippet) => (
                <ListItem
                  key={snippet.slug}
                  title={snippet.name}
                  href={`/snippets/${snippet.slug}`}
                  icon={snippet.icon}
                >
                  {snippet.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {categoriesTools.map((tool) => (
                <ListItem
                  key={tool.slug}
                  title={tool.name}
                  href={`/tools/${tool.slug}`}
                  icon={tool.icon}
                >
                  {tool.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Blocks</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {categoriesBlock.map((block) => (
                <ListItem
                  key={block.slug}
                  title={block.name}
                  href={`/blocks/${block.slug}`}
                >
                  {block.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  icon?: LucideIcon;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  function ListItemComponent(props, ref) {
    const { className, title, children, icon, ...rest } = props;
    const IconComponent = icon;
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...rest}
          >
            <div className='text-sm font-medium leading-none flex items-center gap-2'>
              {IconComponent && <IconComponent className='h-4 w-4' />}
              {title}
            </div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
