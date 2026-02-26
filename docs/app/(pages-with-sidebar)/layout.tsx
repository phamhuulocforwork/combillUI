import type { ReactNode } from 'react';

import PagesLayout from '@/components/layout/pages-layout';
import { SidebarProvider } from '@/components/ui/sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <PagesLayout>{children}</PagesLayout>
    </SidebarProvider>
  );
};

export default Layout;
