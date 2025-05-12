import { OctagonAlert } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";

export default function AlertDialogWarning() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>
          <OctagonAlert />
          Warning Dialog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className='items-center'>
          <AlertDialogTitle>
            <div className='mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-warning/10'>
              <OctagonAlert className='h-7 w-7 text-warning' />
            </div>
            Warning: Proceed with Caution
          </AlertDialogTitle>
          <AlertDialogDescription className='text-[15px] text-center'>
            You are about to perform an action that may have unintended
            consequences. Please ensure you understand the implications before
            proceeding.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='mt-2 sm:justify-center'>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className={buttonVariants({ variant: "warning" })}>
            Proceed
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
