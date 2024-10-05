'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button, Label } from '@/components';

export function SwitchModeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === 'light' ? (
        <Button variant='ghost' size='icon' onClick={() => setTheme('dark')}>
          <Moon />
        </Button>
      ) : (
        <Button variant='ghost' size='icon' onClick={() => setTheme('light')}>
          <Sun />
        </Button>
      )}
    </>
  );
}
