import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDefault() {
  return (
    <Avatar>
      <AvatarImage
        src='https://github.com/shadcn.png'
        alt='@phamhuulocforwork'
      />
      <AvatarFallback>HL</AvatarFallback>
    </Avatar>
  );
}
