"use client";

import { Fragment, useCallback, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { useSearchContext } from "fumadocs-ui/provider";
import { Code, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { useIsMobile } from "@/hooks/use-mobile";

import { searchData } from "@/assets/data/search";
import { Kbd, Key } from "@/registry/default/ui/kbd";

const CommandMenu = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const isMobile = useIsMobile();
  const router = useRouter();

  const { hotKey } = useSearchContext();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "enter" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        {...(isMobile ? { variant: "ghost" } : { variant: "outline" })}
        className='xl:text-muted-foreground relative w-9 cursor-pointer text-sm font-normal xl:w-52 xl:justify-start xl:!pe-12 xl:shadow-none'
        onClick={() => setOpen(true)}
        {...(isMobile && { size: "icon" })}
      >
        <Search className='size-4' />
        <span className='inline-flex max-xl:hidden'>Search...</span>
        <span className='sr-only'>Search</span>
        {hotKey.map((k, i) => (
          <Kbd key={i} variant='outline' size='sm' className='max-xl:hidden'>
            <Key>{k.display}</Key>
          </Kbd>
        ))}
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder='Type a command or search...'
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {search ? (
            searchData.map((searchGroup, index) => (
              <Fragment key={index}>
                <CommandGroup heading={searchGroup.title}>
                  {searchGroup.data.map((item, i) => (
                    <CommandItem
                      key={i}
                      onSelect={() => runCommand(() => router.push(item.href))}
                    >
                      <item.icon />
                      <span>{item.name}</span>
                      {item.shortcut && (
                        <CommandShortcut>{item.shortcut}</CommandShortcut>
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
                {index !== searchData.length - 1 && <CommandSeparator />}
              </Fragment>
            ))
          ) : (
            <CommandGroup heading='Suggestions'>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/snippets"))}
              >
                <Code />
                <span>Snippets</span>
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandMenu;
