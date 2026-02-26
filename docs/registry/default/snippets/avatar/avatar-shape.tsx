import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function AvatarShape() {
  return (
    <div className="grid gap-5">
      <div className="flex items-center gap-4">
        <Avatar className="rounded-none">
          <AvatarFallback className="rounded-none bg-indigo-500 text-white">
            CN
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-md">
          <AvatarFallback className="rounded-lg bg-indigo-500 text-white">
            CN
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-full">
          <AvatarFallback className="rounded-full bg-indigo-500 text-white">
            CN
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="rounded-none">
          <AvatarFallback className="rounded-none bg-indigo-500/25 text-indigo-500">
            CN
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-md">
          <AvatarFallback className="rounded-lg bg-indigo-500/25 text-indigo-500">
            CN
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-full">
          <AvatarFallback className="rounded-full bg-indigo-500/25 text-indigo-500">
            CN
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
