import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarWithText() {
  return (
    <div className="flex gap-3">
      <Avatar>
        <AvatarImage
          src="http://github.com/phamhuulocforwork.png"
          alt="@phamhuulocforwork"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="font-semibold tracking-tight">Pham Huu Loc</span>
        <span className="text-muted-foreground text-sm leading-none">
          phamhuulocforwork@gmail.com
        </span>
      </div>
    </div>
  );
}
