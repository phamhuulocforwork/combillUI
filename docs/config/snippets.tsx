import type { LucideIcon } from 'lucide-react';
import {
  AlertCircleIcon,
  ChevronsUpDown,
  GalleryThumbnails,
  HomeIcon,
  ListCollapse,
  Loader2Icon,
  MessagesSquare,
  RectangleHorizontal,
  TriangleAlert,
  UserIcon,
} from 'lucide-react';

import {
  accordionComponents,
  alertComponents,
  alertDialogComponents,
  avatarComponents,
  badgeComponents,
  breadcrumbComponents,
  carouselComponents,
  collapsibleComponents,
  spinnerComponents,
  tooltipComponents,
} from '@/registry/default/snippets';

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

export const categoriesSnippet: ComponentCategory[] = [
  {
    slug: 'accordion',
    name: 'Accordion',
    description:
      'A vertically stacked set of interactive headings that each reveal a section of content.',
    icon: ListCollapse,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: accordionComponents,
  },
  {
    slug: 'alert',
    name: 'Alert',
    description: 'Displays a callout for user attention.',
    icon: AlertCircleIcon,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: alertComponents,
  },
  {
    slug: 'alert-dialog',
    name: 'Alert Dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
    icon: TriangleAlert,
    breakpoints: {
      sm: 2,
      lg: 3,
    },
    components: alertDialogComponents,
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    description: 'An image element with a fallback for representing the user.',
    icon: UserIcon,
    breakpoints: {
      sm: 2,
      lg: 3,
    },
    components: avatarComponents,
  },
  {
    slug: 'badge',
    name: 'Badge',
    description: 'Displays a badge or a component that looks like a badge.',
    icon: RectangleHorizontal,
    breakpoints: {
      sm: 2,
      lg: 3,
      xl: 4,
    },
    components: badgeComponents,
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    description:
      'Displays the path to the current resource using a hierarchy of links.',
    icon: HomeIcon,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: breadcrumbComponents,
  },
  {
    slug: 'carousel',
    name: 'Carousel',
    description: 'A carousel with motion and swipe built using Embla.',
    icon: GalleryThumbnails,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: carouselComponents,
  },
  {
    slug: 'collapsible',
    name: 'Collapsible',
    description: 'An interactive component which expands/collapses a panel.',
    icon: ChevronsUpDown,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: collapsibleComponents,
  },
  {
    slug: 'spinner',
    name: 'Spinner',
    description: 'Informs users about the status of ongoing processes.',
    icon: Loader2Icon,
    breakpoints: {
      sm: 2,
      lg: 3,
      xl: 4,
    },
    components: spinnerComponents,
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    description: 'Displays a tooltip with information about the current state.',
    icon: MessagesSquare,
    breakpoints: {
      sm: 1,
      lg: 2,
      xl: 3,
    },
    components: tooltipComponents,
  },
];

export function getCategory(slug: string): ComponentCategory | undefined {
  return categoriesSnippet.find((category) => category.slug === slug);
}
