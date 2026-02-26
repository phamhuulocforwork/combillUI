import {
  CircleFadingArrowUpIcon,
  OctagonAlert,
  ShieldAlert,
} from 'lucide-react';

import { Alert, AlertTitle } from '@/components/ui/alert';

export default function AlertCalloutDemo() {
  return (
    <div className="mt-9 w-full space-y-2">
      <Alert className="border-none bg-emerald-500/10 dark:bg-emerald-600/30">
        <CircleFadingArrowUpIcon className="!text-emerald-500 h-4 w-4" />
        <AlertTitle>
          Payment processed successfully. Your order is confirmed.
        </AlertTitle>
      </Alert>
      <Alert className="border-none bg-blue-500/10 dark:bg-blue-600/30">
        <CircleFadingArrowUpIcon className="!text-blue-500 h-4 w-4" />
        <AlertTitle>
          Feature preview available. Try our new dashboard layout.
        </AlertTitle>
      </Alert>
      <Alert className="border-none bg-amber-500/10 dark:bg-amber-600/30">
        <ShieldAlert className="!text-amber-500 h-4 w-4" />
        <AlertTitle>
          Unusual account activity detected. Verify recent logins.
        </AlertTitle>
      </Alert>
      <Alert className="border-none bg-destructive/10 dark:bg-destructive/20">
        <OctagonAlert className="!text-destructive h-4 w-4" />
        <AlertTitle>
          Connection lost. Service unavailable until connectivity is restored.
        </AlertTitle>
      </Alert>
    </div>
  );
}
