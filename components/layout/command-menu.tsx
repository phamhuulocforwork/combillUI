"use client";

import { Fragment, useCallback, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

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

import { useMediaQuery } from "@/hooks/use-media-query";

import { searchData } from "@/assets/data/search";

const CommandMenu = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const isBreakpointReached = useMediaQuery("(max-width: 1279px)");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
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
        variant='outline'
        className='xl:text-muted-foreground relative w-9 cursor-pointer text-sm font-normal xl:w-52 xl:justify-start xl:!pe-12 xl:shadow-none'
        onClick={() => setOpen(true)}
        {...(isBreakpointReached && { size: "icon" })}
      >
        <Search className='size-4' />
        <span className='inline-flex max-xl:hidden'>Search...</span>
        <span className='sr-only'>Search</span>
        <kbd className='bg-muted pointer-events-none absolute top-[.4375rem] right-1.5 flex h-5 items-center gap-1 rounded border px-1.5 text-xs font-medium select-none max-xl:hidden'>
          <span className='text-sm'>⌘</span>K
        </kbd>
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
