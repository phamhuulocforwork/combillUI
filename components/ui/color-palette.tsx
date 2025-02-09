'use client';

import * as React from 'react';

import { Label } from '@/components/ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import config from '@/tailwind.config';

interface ColorShadeProps extends React.HTMLAttributes<HTMLDivElement> {
  shade?: string;
  hex: string;
  isDefault?: boolean;
}

const ColorShade = React.forwardRef<HTMLDivElement, ColorShadeProps>(
  ({ shade, hex, isDefault = false, className, ...props }, ref) => {
    const [showTooltip, setShowTooltip] = React.useState(false);

    const handleClick = async () => {
      await navigator.clipboard.writeText(hex);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 1000);
    };

    return (
      <TooltipProvider>
        <Tooltip open={showTooltip}>
          <TooltipTrigger asChild>
            <div
              ref={ref}
              className={cn(
                'flex h-10 w-full cursor-pointer items-center justify-center rounded-md border shadow-md dark:border-none',
                className,
              )}
              style={{ backgroundColor: hex }}
              onClick={handleClick}
              {...props}
            >
              <Label
                className='truncate text-xs font-semibold md:text-sm'
                style={{ color: getContrastingColor(hex) }}
              >
                {isDefault ? 'Default' : shade}
              </Label>
            </div>
          </TooltipTrigger>
          <TooltipContent className='bg-background text-foreground dark:bg-foreground dark:text-background'>
            Copied ✅
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
);
ColorShade.displayName = 'ColorShade';

interface ColorRowProps extends React.HTMLAttributes<HTMLDivElement> {
  colorName: string;
  colorObj: Record<string, string>;
}

const ColorRow = React.forwardRef<HTMLDivElement, ColorRowProps>(
  ({ colorName, colorObj, className, ...props }, ref) => {
    const shades = Object.entries(colorObj).filter(
      ([key]) => key !== 'foreground' && key !== 'DEFAULT',
    );

    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-2', className)}
        {...props}
      >
        <Label className='capitalize'>{colorName}</Label>
        <div className='flex items-center gap-2'>
          <div className='grid flex-1 grid-cols-6 gap-1 md:grid-cols-12'>
            {colorObj.DEFAULT && (
              <ColorShade hex={colorObj.DEFAULT} isDefault />
            )}
            {shades.map(([shade, hex]) => (
              <ColorShade key={shade} shade={shade} hex={hex} />
            ))}
          </div>
        </div>
      </div>
    );
  },
);
ColorRow.displayName = 'ColorRow';

const colors = Object.entries(config.theme.extend.colors).filter(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ([_, value]) => typeof value === 'object' && value !== null,
);

function getContrastingColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

const ColorPaletteDemo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex select-none flex-col gap-4 rounded-lg bg-background p-8 shadow-md border border-border',
        className,
      )}
      {...props}
    >
      {colors.map(([colorName, colorValue]) => {
        const colorObj = colorValue as Record<string, string>;
        return (
          <ColorRow key={colorName} colorName={colorName} colorObj={colorObj} />
        );
      })}
    </div>
  );
});
ColorPaletteDemo.displayName = 'ColorPaletteDemo';

export { ColorPaletteDemo };
