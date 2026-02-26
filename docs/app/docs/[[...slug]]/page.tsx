import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { source } from '@/app/source';
import { DynamicLink } from '@/components/dynamic-link';
import { useMDXComponents } from '@/components/mdx-components';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
      }}
    >
      <div className="flex flex-col gap-2">
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className="mb-2.5">
          {page.data.description}
        </DocsDescription>
        <div className="flex items-center gap-2">
          {(page.data.links as any)?.doc ? (
            <DynamicLink href={(page.data.links as any).doc}>Docs</DynamicLink>
          ) : null}
          {(page.data.links as any)?.api ? (
            <DynamicLink href={(page.data.links as any).api}>API</DynamicLink>
          ) : null}
        </div>
      </div>
      <DocsBody>
        {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
        <MDX components={useMDXComponents({})} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
