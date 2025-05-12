import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarWithRing() {
  return (
    <Avatar className='ring-2 ring-green-500 ring-offset-[3px] ring-offset-background'>
      <AvatarImage
        src='http://github.com/phamhuulocforwork.png'
        alt='@phamhuulocforwork'
      />
      <AvatarFallback>HL</AvatarFallback>
    </Avatar>
  );
}
