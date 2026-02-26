'use client';

import { CircleFadingArrowUpIcon, XIcon } from 'lucide-react';
import { useState } from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export default function AlertWithActionsDemo() {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const showAlert = () => {
    setIsAlertVisible(true);
  };
  const hideAlert = () => {
    setIsAlertVisible(false);
  };

  return (
    <div className="w-full">
      {isAlertVisible && (
        <Alert className="flex items-center justify-between pr-2 [&>svg+div]:translate-y-0">
          <CircleFadingArrowUpIcon className="h-4 w-4" />
          <div className="flex-col justify-center">
            <AlertTitle>Privacy Policy Update</AlertTitle>
            <AlertDescription>
              We've updated our privacy policy. Please review the changes before
              continuing.
            </AlertDescription>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="!pl-0"
            onClick={hideAlert}
          >
            <XIcon className="h-5 w-5" />
          </Button>
        </Alert>
      )}
      {!isAlertVisible && (
        <div className="flex justify-center">
          <Button className="mx-auto mt-2" onClick={showAlert}>
            Reopen
          </Button>
        </div>
      )}
    </div>
  );
}
