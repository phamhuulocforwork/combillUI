"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import { BlocksNav } from "@/components/blocks-nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export function BlocksNavMobileToggle() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  // Close sheet when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <div className='lg:hidden -ms-2.5'>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost'>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className='p-0 gap-0 w-[225px]' side='left'>
          <SheetHeader className='p-0 space-y-0' />
          <BlocksNav />
        </SheetContent>
      </Sheet>
    </div>
  );
}
