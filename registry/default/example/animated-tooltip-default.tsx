"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  AnimatedTooltip,
  AnimatedTooltipContent,
  AnimatedTooltipProvider,
  AnimatedTooltipTrigger,
} from "@/registry/default/ui/animated-tooltip";

export default function AnimatedTooltipDefault() {
  return (
    <AnimatedTooltipProvider>
      <AnimatedTooltip>
        <AnimatedTooltipTrigger>
          <Avatar className='ring-2 ring-green-500 ring-offset-[3px] ring-offset-background'>
            <AvatarImage
              src='https://github.com/shadcn.png'
              alt='@phamhuulocforwork'
            />
            <AvatarFallback>HL</AvatarFallback>
          </Avatar>
        </AnimatedTooltipTrigger>
        <AnimatedTooltipContent className='bg-black'>
          <span className='font-bold text-white relative z-30 text-base'>
            Pham Huu Loc
          </span>
          <span className='text-white text-xs'>Web Developer</span>
        </AnimatedTooltipContent>
      </AnimatedTooltip>
    </AnimatedTooltipProvider>
  );
}
