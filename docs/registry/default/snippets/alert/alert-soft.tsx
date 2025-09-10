import {
  CircleFadingArrowUpIcon,
  OctagonAlert,
  ShieldAlert,
} from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";

export default function AlertCalloutDemo() {
  return (
    <div className='w-full space-y-2 mt-9'>
      <Alert className='bg-emerald-500/10 dark:bg-emerald-600/30 border-none'>
        <CircleFadingArrowUpIcon className='h-4 w-4 !text-emerald-500' />
        <AlertTitle>
          Payment processed successfully. Your order is confirmed.
        </AlertTitle>
      </Alert>
      <Alert className='bg-blue-500/10 dark:bg-blue-600/30 border-none'>
        <CircleFadingArrowUpIcon className='h-4 w-4 !text-blue-500' />
        <AlertTitle>
          Feature preview available. Try our new dashboard layout.
        </AlertTitle>
      </Alert>
      <Alert className='bg-amber-500/10 dark:bg-amber-600/30 border-none'>
        <ShieldAlert className='h-4 w-4 !text-amber-500' />
        <AlertTitle>
          Unusual account activity detected. Verify recent logins.
        </AlertTitle>
      </Alert>
      <Alert className='bg-destructive/10 dark:bg-destructive/20 border-none'>
        <OctagonAlert className='h-4 w-4 !text-destructive' />
        <AlertTitle>
          Connection lost. Service unavailable until connectivity is restored.
        </AlertTitle>
      </Alert>
    </div>
  );
}
