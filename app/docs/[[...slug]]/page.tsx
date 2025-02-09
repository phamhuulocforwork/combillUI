import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';

import { useMDXComponents } from '@/components/mdx-components';

import { source } from '@/app/source';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className='flex flex-col gap-2'>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className='mb-2.5'>
          {page.data.description}
        </DocsDescription>
      </div>
      <DocsBody>
        <MDX components={useMDXComponents({})} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
