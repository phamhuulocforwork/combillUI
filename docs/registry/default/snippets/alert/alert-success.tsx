import { CircleCheckBigIcon } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AlertSuccessDemo() {
  return (
    <Alert className="border-emerald-600/50 text-emerald-600 dark:border-emerald-600 [&>svg]:text-emerald-600">
      <CircleCheckBigIcon className="h-4 w-4" />
      <AlertTitle>Account Verified</AlertTitle>
      <AlertDescription>
        Your account has been successfully verified and is now ready to use
      </AlertDescription>
    </Alert>
  );
}
