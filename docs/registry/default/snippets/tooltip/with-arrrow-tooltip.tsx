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
          <Button variant='outline'>Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip with arrow</p>
          <TooltipPrimitive.Arrow className='fill-foreground' />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
