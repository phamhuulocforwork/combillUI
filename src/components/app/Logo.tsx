'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import * as React from 'react';

interface ColorProps {
  textColor: string;
  primaryColor: string;
}

const COLORS = {
  dark: {
    text: '#FFFFFF',
  },
  light: {
    text: '#23272E',
  },
  primary: '#70d5f0',
} as const;

const FullLogo: React.FC<React.SVGProps<SVGElement> & ColorProps> = ({
  textColor,
  primaryColor,
}) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 769.02 666'>
    <path
      fill={primaryColor}
      d='M439.26 475.61h-109.5v-.02l54.75-94.81z'
    ></path>
    <path
      fill={textColor}
      d='M767.74 665.26H1.28l54.75-94.83 218.99-379.3 54.74-94.82 54.75-94.83 54.75 94.83v.01l-54.75 94.81-54.75 94.83v.01l-54.74 94.81-109.5 189.65H603.5l-54.75-94.82v-.02L494 380.78l-54.74-94.82v-.02L494 191.13l54.75 94.83v.01l54.75 94.81z'
    ></path>
  </svg>
);

export function Logo({ className }: { className?: string }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const colors = React.useMemo<ColorProps>(
    () => ({
      textColor: !mounted
        ? COLORS.light.text
        : theme === 'dark'
          ? COLORS.dark.text
          : COLORS.light.text,
      primaryColor: COLORS.primary,
    }),
    [theme, mounted],
  );

  return (
    <div className={cn(className, 'flex w-full items-center justify-center')}>
      <FullLogo {...colors} />
    </div>
  );
}
