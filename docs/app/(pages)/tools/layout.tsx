import type { ReactNode } from "react";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const PagesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-full w-full min-w-0 flex-col min-h-screen '>
      <Header />
      {children}
    </div>
  );
};

export default PagesLayout;
