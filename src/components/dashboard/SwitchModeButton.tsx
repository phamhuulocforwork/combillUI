import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components';

export function SwitchModeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <div className='sticky top-1/2 flex translate-x-10 items-center space-x-2'>
      {theme === 'light' ? (
        <Button size='icon' onClick={() => setTheme('dark')}>
          <Moon />
        </Button>
      ) : (
        <Button size='icon' onClick={() => setTheme('light')}>
          <Sun />
        </Button>
      )}
    </div>
  );
}
