import {
  ArrowDown,
  ArrowUp,
  MoreHorizontal,
  Pin,
  Settings,
  Share2,
  Trash,
  TriangleAlert,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const stats = [
  {
    title: "All Orders",
    value: 122380,
    delta: 15.1,
    lastMonth: 105922,
    positive: true,
    prefix: "",
    suffix: "",
  },
  {
    title: "Organic Sales",
    value: 98100000,
    delta: 0.4,
    lastMonth: 97800000,
    positive: true,
    prefix: "$",
    suffix: "M",
    format: (v: number) => `$${(v / 1_000_000).toFixed(1)}M`,
    lastFormat: (v: number) => `$${(v / 1_000_000).toFixed(1)}M`,
  },
  {
    title: "Active Users",
    value: 48210,
    delta: 3.7,
    lastMonth: 46480,
    positive: true,
    prefix: "",
    suffix: "",
  },
];

function formatNumber(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return n.toLocaleString();
  return n.toString();
}

export default function StatisticCard1() {
  return (
    <div className='min-h-screen flex items-center justify-center p-6 lg:p-8'>
      <div className='grow grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className='border-0 flex flex-row items-center justify-between space-y-0'>
              <CardTitle className='text-muted-foreground text-sm font-medium'>
                {stat.title}
              </CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='ghost' className='-me-1.5'>
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' side='bottom'>
                  <DropdownMenuItem>
                    <Settings />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TriangleAlert /> Add Alert
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Pin /> Pin to Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Share2 /> Share
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Trash />
                    Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className='space-y-2.5'>
              <div className='flex items-center gap-2.5'>
                <span className='text-2xl font-medium text-foreground tracking-tight'>
                  {stat.format
                    ? stat.format(stat.value)
                    : stat.prefix + formatNumber(stat.value) + stat.suffix}
                </span>
                <Badge
                  variant={stat.positive ? "success" : "destructive"}
                  appearance='light'
                >
                  {stat.delta > 0 ? <ArrowUp /> : <ArrowDown />}
                  {stat.delta}%
                </Badge>
              </div>
              <div className='text-xs text-muted-foreground mt-2 border-t pt-2.5'>
                Vs last month:{" "}
                <span className='font-medium text-foreground'>
                  {stat.lastFormat
                    ? stat.lastFormat(stat.lastMonth)
                    : stat.prefix + formatNumber(stat.lastMonth) + stat.suffix}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
