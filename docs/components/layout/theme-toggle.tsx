"use client";

import { type ButtonHTMLAttributes } from "react";
import { useEffect, useState } from "react";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): React.ReactElement {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button
        variant='outline'
        size='icon'
        className='cursor-pointer'
        {...props}
      >
        <span className='sr-only'>Toggle Theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant='outline'
      size='icon'
      className='cursor-pointer'
      onClick={toggleTheme}
      {...props}
    >
      {theme === "dark" ? (
        <Sun className='size-5' />
      ) : (
        <MoonStar className='size-5' />
      )}
      <span className='sr-only'>Toggle Theme</span>
    </Button>
  );
}

export default ThemeToggle;
