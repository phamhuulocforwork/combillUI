import type { ComponentType, SVGProps } from "react";

import Avatar from "@/assets/svg/avatar";

export type ComponentCategory = {
  slug: string;
  name: string;
} & (
  | {
      components: { name: string }[];
      breakpoints?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
      };
      svg: ComponentType<SVGProps<SVGSVGElement>>;
      isComingSoon?: never | false;
    }
  | {
      svg?: never;
      components?: never;
      breakpoints?: never | undefined;
      isComingSoon: true;
    }
);

export const categories: ComponentCategory[] = [
  {
    slug: "avatar",
    name: "Avatar",
    svg: Avatar,
    breakpoints: {
      sm: 2,
      lg: 3,
    },
    components: [
      { name: "avatar-default" },
      { name: "avatar-group-max" },
      { name: "avatar-group" },
      { name: "avatar-hover-card" },
      { name: "avatar-with-ring" },
      { name: "avatar-with-status" },
    ],
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    svg: Avatar,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: [
      { name: "breadcrumb-default" },
      { name: "breadcrumb-slash" },
      { name: "breadcrumb-with-icon" },
      { name: "breadcrumb-with-dropdown" },
    ],
  },
];

export function getCategory(slug: string): ComponentCategory | undefined {
  return categories.find((category) => category.slug === slug);
}
