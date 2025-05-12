import type { LucideIcon } from "lucide-react";
import { UserIcon } from "lucide-react";

export type ComponentCategory = {
  slug: string;
  name: string;
  description?: string;
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
      icon: LucideIcon;
      isComingSoon?: never | false;
      isNew?: boolean;
      isUpdated?: boolean;
    }
  | {
      icon?: never;
      components?: never;
      breakpoints?: never | undefined;
      isComingSoon: true;
    }
);

export const categories: ComponentCategory[] = [
  {
    slug: "test",
    name: "Test",
    description: "An image element with a fallback for representing the user.",
    icon: UserIcon,
    components: [],
  },
];

export function getCategory(slug: string): ComponentCategory | undefined {
  return categories.find((category) => category.slug === slug);
}
