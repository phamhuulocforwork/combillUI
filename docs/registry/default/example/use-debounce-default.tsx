'use client';

import { useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { useDebounce } from '@/registry/default/hooks/use-debounce';

export default function UseDebounceDefault() {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <Card>
      <CardHeader>
        <CardTitle>useDebounce Example</CardTitle>
        <CardDescription>
          A hook that delays updating a value until after a specified delay
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="space-y-2">
          <div className="font-medium text-sm">Type something:</div>
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type here..."
          />
        </div>
        <div className="space-y-2">
          <div className="font-medium text-sm">Input value (immediate):</div>
          <div className="rounded-md border bg-muted p-2">{inputValue}</div>
        </div>
        <div className="space-y-2">
          <div className="font-medium text-sm">
            Debounced value (500ms delay):
          </div>
          <div className="rounded-md border bg-muted p-2">{debouncedValue}</div>
        </div>
      </CardContent>
    </Card>
  );
}
