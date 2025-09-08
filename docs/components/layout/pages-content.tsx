import type { ReactNode } from "react";

import ScrollToTop from "@/components/layout/scroll-to-top";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

const PagesContent = ({ children, className }: Props) => {
  return (
    <main className='flex flex-1'>
      <div className={cn("flex flex-1 flex-col", className)} id='main-section'>
        {children}
      </div>
      <ScrollToTop />
    </main>
  );
};

export default PagesContent;
