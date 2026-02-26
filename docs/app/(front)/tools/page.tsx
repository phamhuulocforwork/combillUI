import type { Metadata } from 'next';

import Link from 'next/link';

import { categoriesTools } from '@/config/tools';

//TODO: Add metadata
export const metadata: Metadata = {
  title: 'Tools',
  description: '',
  openGraph: {
    title: 'Tools',
    description: '',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/tools`,
    images: [
      {
        url: '',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: '',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tools',
    description: '',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/tools`,
  },
};

const Page = () => {
  return (
    <div className="flex flex-col items-start justify-center space-y-4 p-4 sm:space-y-8 sm:p-8">
      <div className="flex flex-col space-y-3">
        <h1 className="font-bold text-2xl sm:text-3xl">Tools</h1>
        <p className="text-muted-foreground">
          An open-source collection of Tools designed to accelerate your project
          development. Below is a summary of the available tools:
        </p>
      </div>
      <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
        {categoriesTools
          .filter((category) => !category.isComingSoon)
          .map((category) => (
            <div
              key={category.slug}
              className="group overflow-hidden rounded-md border"
            >
              <Link href={`/tools/${category.slug}`}>
                <div className="flex flex-col gap-1 p-4">
                  <div className="flex items-center gap-2">
                    <category.icon className="size-6 transition-all duration-300 group-hover:scale-110" />
                    <h2 className="font-medium text-base">{category.name}</h2>
                  </div>

                  <p className="mt-1 line-clamp-2 text-muted-foreground text-sm">
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
