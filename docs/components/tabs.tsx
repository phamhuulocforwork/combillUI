'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

// Variants for TabsList
const tabsListVariants = cva('flex shrink-0 items-center', {
  variants: {
    variant: {
      default: 'bg-accent p-1',
      button: '',
      line: 'border-border border-b',
    },
    shape: {
      default: '',
      pill: '',
    },
    size: {
      lg: 'gap-2.5',
      md: 'gap-2',
      sm: 'gap-1.5',
      xs: 'gap-1',
    },
  },
  compoundVariants: [
    { variant: 'default', size: 'lg', className: 'gap-2.5 p-1.5' },
    { variant: 'default', size: 'md', className: 'gap-2 p-1' },
    { variant: 'default', size: 'sm', className: 'gap-1.5 p-1' },
    { variant: 'default', size: 'xs', className: 'gap-1 p-1' },

    {
      variant: 'default',
      shape: 'default',
      size: 'lg',
      className: 'rounded-lg',
    },
    {
      variant: 'default',
      shape: 'default',
      size: 'md',
      className: 'rounded-lg',
    },
    {
      variant: 'default',
      shape: 'default',
      size: 'sm',
      className: 'rounded-md',
    },
    {
      variant: 'default',
      shape: 'default',
      size: 'xs',
      className: 'rounded-md',
    },

    { variant: 'line', size: 'lg', className: 'gap-9' },
    { variant: 'line', size: 'md', className: 'gap-8' },
    { variant: 'line', size: 'sm', className: 'gap-4' },
    { variant: 'line', size: 'xs', className: 'gap-4' },

    {
      variant: 'default',
      shape: 'pill',
      className: 'rounded-full [&_[role=tab]]:rounded-full',
    },
    {
      variant: 'button',
      shape: 'pill',
      className: 'rounded-full [&_[role=tab]]:rounded-full',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

// Variants for TabsTrigger
const tabsTriggerVariants = cva(
  'inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 [&:hover_svg]:text-primary [&[data-state=active]_svg]:text-primary [&_svg]:shrink-0 [&_svg]:text-muted-foreground',
  {
    variants: {
      variant: {
        default:
          'text-muted-foreground hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-black/5 data-[state=active]:shadow-xs',
        button:
          'rounded-lg text-accent-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:bg-accent data-[state=active]:text-foreground',
        line: 'border-transparent border-b-2 text-muted-foreground hover:text-primary data-[state=active]:border-primary data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:text-primary',
      },
      size: {
        lg: 'gap-2.5 text-sm [&_svg]:size-5',
        md: 'gap-2 text-sm [&_svg]:size-4',
        sm: 'gap-1.5 text-xs [&_svg]:size-3.5',
        xs: 'gap-1 text-xs [&_svg]:size-3.5',
      },
    },
    compoundVariants: [
      { variant: 'default', size: 'lg', className: 'rounded-md px-4 py-2.5' },
      { variant: 'default', size: 'md', className: 'rounded-md px-3 py-1.5' },
      { variant: 'default', size: 'sm', className: 'rounded-sm px-2.5 py-1.5' },
      { variant: 'default', size: 'xs', className: 'rounded-sm px-2 py-1' },

      { variant: 'button', size: 'lg', className: 'rounded-lg px-4 py-3' },
      { variant: 'button', size: 'md', className: 'rounded-lg px-3 py-2.5' },
      { variant: 'button', size: 'sm', className: 'rounded-md px-2.5 py-2' },
      { variant: 'button', size: 'xs', className: 'rounded-md px-2 py-1.5' },

      { variant: 'line', size: 'lg', className: 'py-3' },
      { variant: 'line', size: 'md', className: 'py-2.5' },
      { variant: 'line', size: 'sm', className: 'py-2' },
      { variant: 'line', size: 'xs', className: 'py-1.5' },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

// Variants for TabsContent
const tabsContentVariants = cva(
  'mt-2.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

// Context
type TabsContextType = {
  variant?: 'default' | 'button' | 'line';
  size?: 'lg' | 'sm' | 'xs' | 'md';
};
const TabsContext = React.createContext<TabsContextType>({
  variant: 'default',
  size: 'md',
});

// Components
function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('', className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  variant = 'default',
  shape = 'default',
  size = 'md',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsContext.Provider
      value={{ variant: variant || 'default', size: size || 'md' }}
    >
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(tabsListVariants({ variant, shape, size }), className)}
        {...props}
      />
    </TabsContext.Provider>
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { variant, size } = React.useContext(TabsContext);

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content> &
  VariantProps<typeof tabsContentVariants>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(tabsContentVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
