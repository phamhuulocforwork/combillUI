import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDefault() {
  return (
    <Avatar>
      <AvatarImage
        src='http://github.com/phamhuulocforwork.png'
        alt='@phamhuulocforwork'
      />
      <AvatarFallback>HL</AvatarFallback>
    </Avatar>
  );
}
