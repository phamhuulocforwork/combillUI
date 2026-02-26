import type { ReactNode } from 'react';

import Header from '@/components/layout/header';

const PagesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full min-h-screen w-full min-w-0 flex-col">
      <Header />
      {children}
    </div>
  );
};

export default PagesLayout;
