"use client";

import { ChangeEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WithDelayTooltipDemo() {
  const [delayDuration, setDelayDuration] = useState<number | undefined>(500);

  const handleDelayDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDelayDuration(
      e.target.value === "" ? undefined : Math.max(0, +e.target.value),
    );
  };

  return (
    <div className='flex w-full items-end gap-2 '>
      <div className='flex flex-col gap-1'>
        <Label>Delay</Label>
        <Input
          type='number'
          value={delayDuration}
          onChange={handleDelayDurationChange}
        />
      </div>
      <TooltipProvider>
        <Tooltip delayDuration={delayDuration}>
          <TooltipTrigger asChild>
            <Button variant='outline'>Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Hello there!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
