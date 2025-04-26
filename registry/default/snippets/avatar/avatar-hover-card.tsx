import { CalendarIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function AvatarHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger className='cursor-pointer'>
        <Avatar>
          <AvatarImage
            src='https://github.com/shadcn.png'
            alt='@phamhuulocforwork'
          />
          <AvatarFallback>HL</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className='w-full max-w-xs'>
        <div className='flex justify-between space-x-4'>
          <Avatar>
            <AvatarImage
              src='https://github.com/shadcn.png'
              alt='@phamhuulocforwork'
            />
            <AvatarFallback>HL</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>@phamhuulocforwork</h4>
            <p className='text-sm'>
              I'm currently studying at University (I stay up late and my hair
              is getting thinner and thinner. Do you think I'm bald? xD)
            </p>
            <div className='flex items-center pt-2'>
              <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{" "}
              <span className='text-xs text-muted-foreground'>
                Joined February 2025
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
