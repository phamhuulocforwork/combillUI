import type { ReactNode } from "react";

import ScrollToTop from "@/components/layout/scroll-to-top";

const PagesContent = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex flex-1'>
      <div className='flex flex-1 flex-col' id='main-section'>
        {children}
      </div>
      <ScrollToTop />
    </main>
  );
};

export default PagesContent;
