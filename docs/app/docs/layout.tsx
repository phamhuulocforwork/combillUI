import { FileText, SquareBottomDashedScissors } from 'lucide-react';
import type { ReactNode } from 'react';
import { source } from '@/app/source';
import { DocsLayout } from '@/components/notebook';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <DocsLayout
        sidebar={{
          tabs: [
            {
              icon: <TabIcon icon={<FileText />} />,
              title: 'Docs',
              description: 'Learn how to use CombillUI',
              url: '/docs',
            },
            {
              icon: <TabIcon icon={<SquareBottomDashedScissors />} />,
              title: 'Snippets',
              description: 'Collection of copy-and-paste',
              url: '/snippets',
            },
          ],
        }}
        tree={source.pageTree}
      >
        {children}
      </DocsLayout>
    </SidebarProvider>
  );
}

const TabIcon = ({ icon }: { icon: ReactNode }) => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-fd-muted-foreground/20 to-fd-muted-foreground/40 text-fd-foreground [&>svg]:size-5">
      {icon}
    </div>
  );
};
