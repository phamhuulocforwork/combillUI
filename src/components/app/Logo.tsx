import Image from 'next/image';
import { useTheme } from 'next-themes';

interface LogoProps {
  width?: number;
  height?: number;
}

export function Logo({ width = 24, height = 24 }: LogoProps) {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === 'light' ? '/dark_logo.svg' : '/light_logo.svg'}
      alt='logo'
      width={width}
      height={height}
    />
  );
}
