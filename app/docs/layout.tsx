import type { ReactNode } from 'react';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { source } from '@/app/source';

import { baseOptions } from '../layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
