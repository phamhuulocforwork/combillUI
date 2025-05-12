import type { LucideIcon } from "lucide-react";
import { AlertCircleIcon, HomeIcon, UserIcon } from "lucide-react";

export type ComponentCategory = {
  slug: string;
  name: string;
  description?: string;
  isNew?: boolean;
  isUpdated?: boolean;
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
    slug: "avatar",
    name: "Avatar",
    description: "An image element with a fallback for representing the user.",
    icon: UserIcon,
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
    description:
      "Displays the path to the current resource using a hierarchy of links.",
    icon: HomeIcon,
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
  {
    slug: "alert",
    name: "Alert",
    description: "Displays a callout for user attention.",
    icon: AlertCircleIcon,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: [
      { name: "alert-default" },
      { name: "alert-destructive" },
      { name: "alert-info" },
      { name: "alert-soft" },
      { name: "alert-success" },
      { name: "alert-warning" },
      { name: "alert-with-action" },
      { name: "alert-with-background" },
    ],
  },
];

export function getCategory(slug: string): ComponentCategory | undefined {
  return categories.find((category) => category.slug === slug);
}
