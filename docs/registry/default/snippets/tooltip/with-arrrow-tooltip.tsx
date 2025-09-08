import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WithArrowTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>With Arrow</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip with Arrow</p>
          <TooltipPrimitive.Arrow className='fill-foreground' />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
