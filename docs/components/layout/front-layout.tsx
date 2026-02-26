import type { ReactNode } from 'react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import PagesContent from '@/components/layout/pages-content';

const FrontLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full min-h-screen w-full min-w-0 flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="container mx-auto flex w-full border-dashed min-[1400px]:border-x">
          <PagesContent>{children}</PagesContent>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FrontLayout;
