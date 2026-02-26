import { Badge } from '@/components/ui/badge';

export default function StatusBadge() {
  return (
    <div className="flex flex-col flex-wrap gap-3">
      <Badge className="rounded-full border-amber-600/60 bg-amber-600/10 text-amber-500 shadow-none hover:bg-amber-600/10 dark:bg-amber-600/20">
        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-amber-500" /> In
        Progress
      </Badge>
      <Badge className="rounded-full border-red-600/60 bg-red-600/10 text-red-500 shadow-none hover:bg-red-600/10 dark:bg-red-600/20">
        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-red-500" /> Blocked
      </Badge>
      <Badge className="rounded-full border-emerald-600/60 bg-emerald-600/10 text-emerald-500 shadow-none hover:bg-emerald-600/10 dark:bg-emerald-600/20">
        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500" /> Done
      </Badge>
    </div>
  );
}
