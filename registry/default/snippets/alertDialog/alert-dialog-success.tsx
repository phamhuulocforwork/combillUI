import { CheckCircle } from "lucide-react";

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

export default function AlertDialogSuccess() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>
          <CheckCircle />
          Success Dialog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className='items-center'>
          <AlertDialogTitle>
            <div className='mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/10'>
              <CheckCircle className='h-7 w-7 text-success' />
            </div>
            Success!
          </AlertDialogTitle>
          <AlertDialogDescription className='text-[15px] text-center'>
            Your account has been successfully created. You can now log in and
            start using our services.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='mt-2 sm:justify-center'>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction className={buttonVariants({ variant: "success" })}>
            Log In
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
