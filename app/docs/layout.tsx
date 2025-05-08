import type { ReactNode } from "react";

import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layouts/docs";

import { SidebarProvider } from "@/components/ui/sidebar";

import { source } from "@/app/source";

import { baseOptions } from "../layout.config";

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  sidebar: {
    tabs: {
      transform(option, node) {
        const meta = source.getNodeMeta(node);
        if (!meta || !node.icon) return option;

        return {
          ...option,
          icon: (
            <div className='rounded-none p-1 shadow-lg ring-2 [&_svg]:size-5'>
              {node.icon}
            </div>
          ),
        };
      },
    },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <DocsLayout {...docsOptions}>{children}</DocsLayout>
    </SidebarProvider>
  );
}
