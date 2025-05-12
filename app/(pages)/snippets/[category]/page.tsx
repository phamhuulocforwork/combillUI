import type { Metadata, ResolvingMetadata } from "next";

import { notFound } from "next/navigation";

import ComponentCard from "@/components/layout/component-card";
import ComponentDetails from "@/components/layout/component-details";
import ComponentLoader from "@/components/layout/component-loader";
import ComponentsGrid from "@/components/layout/components-grid";

import { getComponentsByNames } from "@/lib/components";

import { categories, getCategory } from "@/config/snippets";

type Props = {
  params: { category: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const category = getCategory(params.category);

  if (!category || category.isComingSoon) {
    return {};
  }

  const components = getComponentsByNames(
    category.components.map((item) => item.name),
  );
  const parentMetadata = await parent;

  const isSingleComponent = components.length === 1;

  return {
    title: `Shadcn ${category.name}`,
    description: isSingleComponent
      ? `Elevate your UI with a Shadcn ${category.name.toLowerCase()} component, built using React and Tailwind CSS.`
      : `Elevate your UI with a growing collection of ${components.length}+ Shadcn ${category.name.toLowerCase()} components, built using React and Tailwind CSS.`,
    openGraph: {
      title: `Shadcn ${category.name}`,
      description: isSingleComponent
        ? `Elevate your UI with a Shadcn ${category.name.toLowerCase()} component, built using React and Tailwind CSS.`
        : `Elevate your UI with a growing collection of ${components.length}+ Shadcn ${category.name.toLowerCase()} components, built using React and Tailwind CSS.`,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/snippets/${category.slug}`,
      images: parentMetadata.openGraph?.images,
    },
    twitter: {
      card: parentMetadata.twitter?.card || "summary_large_image",
      title: `Shadcn ${category.name}`,
      description: isSingleComponent
        ? `Elevate your UI with a Shadcn ${category.name.toLowerCase()} component, built using React and Tailwind CSS.`
        : `Elevate your UI with a growing collection of ${components.length}+ Shadcn ${category.name.toLowerCase()} components, built using React and Tailwind CSS.`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/snippets/${category.slug}`,
    },
  };
}

export function generateStaticParams() {
  return categories
    .filter((category) => !category.isComingSoon)
    .map((category) => ({
      category: category.slug,
    }));
}

const Page = ({ params }: { params: { category: string } }) => {
  const category = getCategory(params.category);

  if (!category || category.isComingSoon) {
    notFound();
  }

  const components = getComponentsByNames(
    category.components.map((item) => item.name),
  );

  return (
    <div className='flex flex-1 flex-col space-y-4 p-4 sm:space-y-8 sm:p-8'>
      <div className='flex flex-col space-y-3'>
        <h1 className='text-2xl font-bold sm:text-3xl'>{`Shadcn ${category.name}`}</h1>
      </div>
      <ComponentsGrid {...category.breakpoints}>
        {components.map((component) => (
          <ComponentCard key={component.name} component={component}>
            <ComponentDetails component={component} />
            <ComponentLoader component={component} category={category.slug} />
          </ComponentCard>
        ))}
      </ComponentsGrid>
    </div>
  );
};

export default Page;
