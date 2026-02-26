import { InfoIcon } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AlertInfoDemo() {
  return (
    <Alert className="border-cyan-600/50 text-cyan-600 dark:border-cyan-600 [&>svg]:text-cyan-600">
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Pro Tip</AlertTitle>
      <AlertDescription>
        You can customize your workspace by accessing the settings panel.
      </AlertDescription>
    </Alert>
  );
}
