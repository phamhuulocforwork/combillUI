'use client';

import { useI18n, useSearchContext } from 'fumadocs-ui/provider';
import { SearchIcon } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Kbd, Key } from '@/registry/default/ui/kbd';

export function SearchToggle(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpenSearch } = useSearchContext();

  return (
    <button
      type="button"
      className={cn(
        'rounded-md p-1.5 hover:bg-secondary hover:text-secondary-foreground [&_svg]:size-5',
        props.className,
      )}
      data-search=""
      aria-label="Open Search"
      onClick={() => {
        setOpenSearch(true);
      }}
    >
      <SearchIcon />
    </button>
  );
}

export function LargeSearchToggle(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { hotKey, setOpenSearch } = useSearchContext();
  const { text } = useI18n();

  return (
    <button
      type="button"
      data-search-full=""
      {...props}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border bg-fd-secondary/50 p-1.5 text-fd-muted-foreground text-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground',
        props.className,
      )}
      onClick={() => {
        setOpenSearch(true);
      }}
    >
      <SearchIcon className="ms-1 size-4" />
      {text.search}
      <div className="ms-auto inline-flex gap-0.5">
        {hotKey.map((k, i) => (
          <Kbd key={i} variant="outline" size="sm">
            <Key>{k.display}</Key>
          </Kbd>
        ))}
      </div>
    </button>
  );
}
