import type { Metadata } from "next";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import { categories } from "@/config/snippets";

//TODO: Add metadata
export const metadata: Metadata = {
  title: "Shadcn Snippets",
  description: "",
  openGraph: {
    title: "Shadcn Snippets",
    description: "",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/snippets`,
    images: [
      {
        url: "",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadcn Snippets",
    description: "",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/snippets`,
  },
};

const Page = () => {
  return (
    <div className='flex flex-col items-start justify-center space-y-4 p-4 sm:space-y-8 sm:p-8'>
      <div className='flex flex-col space-y-3'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Shadcn Snippets</h1>
        <p className='text-muted-foreground'>
          An open-source collection of copy-and-paste Shadcn Snippets designed
          to accelerate your project development. Below is a summary of the
          available component categories:
        </p>
      </div>
      <div className='grid w-full gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4'>
        {categories
          .filter((category) => !category.isComingSoon)
          .map((category) => (
            <div
              key={category.slug}
              className='group overflow-hidden rounded-md border'
            >
              <Link href={`/snippets/${category.slug}`}>
                <div className='flex flex-col gap-1 p-4'>
                  <div className='flex items-center gap-2'>
                    <category.icon className='transition-all duration-300 group-hover:scale-110' />
                    <h2 className='text-lg font-medium'>{category.name}</h2>
                    <Badge variant='secondary'>{`${category.components.length} ${category.components.length === 1 ? "Snippet" : "Snippets"}`}</Badge>
                  </div>

                  <p className='text-muted-foreground text-sm line-clamp-2 mt-1'>
                    {category.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
