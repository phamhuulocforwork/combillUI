import type { ReactNode } from 'react';

import FrontLayout from '@/components/layout/front-layout';

const Layout = ({ children }: { children: ReactNode }) => {
  return <FrontLayout>{children}</FrontLayout>;
};

export default Layout;
