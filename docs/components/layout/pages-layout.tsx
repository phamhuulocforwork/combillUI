import type { ReactNode } from 'react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import PagesContent from '@/components/layout/pages-content';
import AppSidebar, { CustomSidebarTrigger } from '@/components/layout/sidebar';

const PagesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full min-h-screen w-full min-w-0 flex-col">
      <Header
        toggle={
          <CustomSidebarTrigger className="size-8 md:hidden [&_svg]:size-[18px]" />
        }
      />
      <div className="flex flex-1">
        <div className="container mx-auto flex w-full border-dashed min-[1400px]:border-x">
          <AppSidebar />
          <PagesContent>{children}</PagesContent>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PagesLayout;
