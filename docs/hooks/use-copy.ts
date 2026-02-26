import { useState } from 'react';

import { toast } from 'sonner';

export const useCopy = (duration = 1500, toastMessage?: string) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), duration);
      toastMessage &&
        toast(`${toastMessage} copied to clipboard`, {
          position: 'top-right',
        });

      return true;
    } catch (err) {
      console.error(`${toastMessage} failed to copy to clipboard`, err);
      toastMessage &&
        toast(`${toastMessage} failed to copy to clipboard`, {
          position: 'top-right',
        });

      return false;
    }
  };

  return { copied, copy };
};
