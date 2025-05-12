import type { LucideIcon } from "lucide-react";
import {
  AlertCircleIcon,
  GalleryThumbnails,
  HomeIcon,
  ListCollapse,
  RectangleHorizontal,
  TriangleAlert,
  UserIcon,
} from "lucide-react";

import {
  accordionComponents,
  alertComponents,
  alertDialogComponents,
  avatarComponents,
  badgeComponents,
  breadcrumbComponents,
  carouselComponents,
} from "@/registry/default/snippets";

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
      isNew?: never | true;
      isUpdated?: never | true;
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
    slug: "accordion",
    name: "Accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    icon: ListCollapse,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: accordionComponents,
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
    components: alertComponents,
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    icon: TriangleAlert,
    breakpoints: {
      sm: 2,
      lg: 3,
    },
    components: alertDialogComponents,
  },
  {
    slug: "avatar",
    name: "Avatar",
    description: "An image element with a fallback for representing the user.",
    icon: UserIcon,
    isUpdated: true,
    breakpoints: {
      sm: 2,
      lg: 3,
    },
    components: avatarComponents,
  },
  {
    slug: "badge",
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    icon: RectangleHorizontal,
    isNew: true,
    breakpoints: {
      sm: 2,
      lg: 3,
      xl: 4,
    },
    components: badgeComponents,
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    description:
      "Displays the path to the current resource using a hierarchy of links.",
    icon: HomeIcon,
    isUpdated: true,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: breadcrumbComponents,
  },
  {
    slug: "carousel",
    name: "Carousel",
    description: "A carousel with motion and swipe built using Embla.",
    icon: GalleryThumbnails,
    isNew: true,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: carouselComponents,
  },
];

export function getCategory(slug: string): ComponentCategory | undefined {
  return categories.find((category) => category.slug === slug);
}
