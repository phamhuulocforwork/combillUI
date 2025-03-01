"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useBoolean } from "@/registry/default/hooks/use-boolean";

export default function UseBooleanDemo() {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);

  const customToggle = () => {
    setValue((x: boolean) => !x);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>useBoolean Example</CardTitle>
        <CardDescription>
          A hook for managing boolean state with convenient control methods
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <div className='text-center text-lg font-medium'>
          Current value:{" "}
          <span className='font-bold'>{value ? "True" : "False"}</span>
        </div>
        <div className='flex flex-wrap gap-2 justify-center'>
          <Button onClick={setTrue} variant='default' disabled={value}>
            Set True
          </Button>
          <Button onClick={setFalse} variant='default' disabled={!value}>
            Set False
          </Button>
          <Button onClick={toggle} variant='outline'>
            Toggle
          </Button>
          <Button onClick={customToggle} variant='outline'>
            Custom Toggle
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
