import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarWithStatus() {
  return (
    <div className="flex items-center gap-3">
      {/* Online */}
      <div className="relative">
        <Avatar>
          <AvatarImage
            src="http://github.com/phamhuulocforwork.png"
            alt="@phamhuulocforwork"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-[2px] ring-background"></div>
      </div>

      {/* DND */}
      <div className="relative">
        <Avatar>
          <AvatarImage
            src="http://github.com/phamhuulocforwork.png"
            alt="@phamhuulocforwork"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-red-500 ring-[2px] ring-background"></div>
      </div>

      {/* Busy */}
      <div className="relative">
        <Avatar>
          <AvatarImage
            src="http://github.com/phamhuulocforwork.png"
            alt="@phamhuulocforwork"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-yellow-500 ring-[2px] ring-background"></div>
      </div>

      {/* Offline */}
      <div className="relative">
        <Avatar>
          <AvatarImage
            src="http://github.com/phamhuulocforwork.png"
            alt="@phamhuulocforwork"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-muted-foreground bg-background ring-[2px] ring-background"></div>
      </div>
    </div>
  );
}
