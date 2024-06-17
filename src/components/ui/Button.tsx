import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 text-primary-foreground hover:bg-primary/90',
        block:
          'w-full bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive focus:ring-4 focus:outline-none focus:ring-destructive-300 text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-primary text-primary bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary focus:ring-4 focus:outline-none focus:ring-secondary-300 text-secondary-foreground hover:bg-secondary/80',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 rounded-md px-4 py-2',
        xs: 'h-6 rounded-md px-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 rounded-md w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
