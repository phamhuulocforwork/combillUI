import type { ReactNode } from "react";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import PagesContent from "@/components/layout/pages-content";
import AppSidebar, { CustomSidebarTrigger } from "@/components/layout/sidebar";

const PagesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-full w-full min-w-0 flex-col min-h-screen'>
      <Header toggle={<CustomSidebarTrigger />} />
      <div className='flex flex-1'>
        <div className='mx-auto flex w-full container border-dashed min-[1400px]:border-x'>
          <AppSidebar />
          <PagesContent>{children}</PagesContent>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PagesLayout;
