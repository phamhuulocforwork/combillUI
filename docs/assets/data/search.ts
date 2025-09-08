import type { ForwardRefExoticComponent, RefAttributes } from "react";

import { Circle, File, type LucideProps } from "lucide-react";

import { categoriesSnippet } from "@/config/snippets";

type SearchData = {
  title: string;
  data: {
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    name: string;
    href: string;
    shortcut?: string;
  }[];
};

export const searchData: SearchData[] = [
  {
    title: "Links",
    data: [
      {
        icon: File,
        name: "Docs",
        href: "/docs",
      },
      {
        icon: File,
        name: "Snippets",
        href: "/snippets",
      },
    ],
  },
  {
    title: "Snippets",
    data: [
      ...categoriesSnippet
        .filter((category) => !category.isComingSoon)
        .map((category) => ({
          icon: Circle,
          name: category.name,
          href: `/snippets/${category.slug}`,
        })),
    ],
  },
];
