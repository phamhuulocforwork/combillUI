import { OctagonAlertIcon } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function DestructiveAlertDemo() {
  return (
    <Alert variant="destructive">
      <OctagonAlertIcon className="h-4 w-4" />
      <AlertTitle>Critical Error</AlertTitle>
      <AlertDescription>
        Failed to save changes. Your data may be lost or corrupted.
      </AlertDescription>
    </Alert>
  );
}
