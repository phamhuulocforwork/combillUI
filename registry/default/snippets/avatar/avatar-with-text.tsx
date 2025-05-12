import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarWithText() {
  return (
    <div className='flex gap-3'>
      <Avatar>
        <AvatarImage
          src='http://github.com/phamhuulocforwork.png'
          alt='@phamhuulocforwork'
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='flex flex-col'>
        <span className='font-semibold tracking-tight'>Pham Huu Loc</span>
        <span className='leading-none text-sm text-muted-foreground'>
          phamhuulocforwork@gmail.com
        </span>
      </div>
    </div>
  );
}
