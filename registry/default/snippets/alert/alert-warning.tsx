import { TriangleAlertIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertWarningDemo() {
  return (
    <Alert className='border-amber-500/50 text-amber-500 dark:border-amber-500 [&>svg]:text-amber-500'>
      <TriangleAlertIcon className='h-4 w-4' />
      <AlertTitle>Low Storage Space</AlertTitle>
      <AlertDescription>
        Your device is running low on storage. Please free up space to avoid
        performance issues.
      </AlertDescription>
    </Alert>
  );
}
