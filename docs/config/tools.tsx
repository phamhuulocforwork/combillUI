import { Braces, FileJson2, LayoutTemplate, type LucideIcon, QrCode } from "lucide-react";

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

export const categoriesTools: ComponentCategory[] = [
  {
    slug: "qr-generator",
    name: "QR Generator",
    description:
      "Generate QR codes for your website, social media, or any other content.",
    icon: QrCode,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: [],
  },
  {
    slug: "skeleton-generator",
    name: "Skeleton Generator",
    description:
      "Generate skeleton loading for your website with React and Tailwind CSS.",
    icon: LayoutTemplate,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: [],
  },
  {
    slug: "snippet-generator",
    name: "Snippet Generator",
    description: "Generate code snippets for VSCode, Sublime Text, and Atom",
    icon: Braces,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: [],
  },
  {
    slug: "json-compare",
    name: "JSON Compare",
    description:
      "Compare and merge JSON files with recursive key comparison at all levels.",
    icon: FileJson2,
    breakpoints: {
      sm: 1,
      lg: 2,
    },
    components: [],
  },
];

export function getCategory(slug: string): ComponentCategory | undefined {
  return categoriesTools.find((category) => category.slug === slug);
}
