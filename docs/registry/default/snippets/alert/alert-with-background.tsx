import { OctagonAlertIcon } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AlertWithBackgroundDemo() {
  return (
    <Alert
      variant="destructive"
      className="bg-destructive text-destructive-foreground [&>svg]:text-destructive-foreground"
    >
      <OctagonAlertIcon className="h-4 w-4" />
      <AlertTitle>Authentication Failed</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again to continue.
      </AlertDescription>
    </Alert>
  );
}
