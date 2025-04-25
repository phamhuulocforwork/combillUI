"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <div className='flex items-center gap-5 max-lg:hidden'>
      <Link
        href='/docs'
        className={cn(
          "text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm",
          {
            "text-primary hover:text-primary/80 font-medium":
              pathname.startsWith("/docs"),
          },
        )}
      >
        Docs
      </Link>
      <Link
        href='/snippets'
        className={cn(
          "text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm",
          {
            "text-primary hover:text-primary/80 font-medium":
              pathname.startsWith("/snippets"),
          },
        )}
      >
        Snippets
      </Link>
    </div>
  );
};

export default NavMenu;
