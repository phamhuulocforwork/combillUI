import { CircleFadingArrowUpIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <Alert>
      <CircleFadingArrowUpIcon className='h-4 w-4' />
      <AlertTitle>System Notification</AlertTitle>
      <AlertDescription>
        Your application has been updated to the latest version.
      </AlertDescription>
    </Alert>
  );
}
