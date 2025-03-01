"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import useIsMobile from "@/registry/default/hooks/use-mobile";

export default function UseMobileDemo() {
  const isMobile = useIsMobile();

  return (
    <Card>
      <CardHeader>
        <CardTitle>useMobile Example</CardTitle>
        <CardDescription>
          A hook that detects if the current device is a mobile device
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <div className='text-center'>
          <div className='text-lg font-medium mb-2'>Current device type:</div>
          {isMobile ? (
            <Badge variant='default' className='text-md px-3 py-1'>
              Mobile Device
            </Badge>
          ) : (
            <Badge variant='outline' className='text-md px-3 py-1'>
              Desktop Device
            </Badge>
          )}
        </div>
        <div className='text-sm text-muted-foreground text-center'>
          <p>Resize your browser window to see the value change.</p>
          <p className='mt-1'>(Mobile is detected when width &lt; 768px)</p>
        </div>
      </CardContent>
    </Card>
  );
}
