"use client";

import { useEffect, useState } from "react";

import { PanelRightOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useIsMobile } from "@/hooks/use-mobile";

export function BlocksNavToggle() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useIsMobile();

  const handleToggle = () => {
    if (!isMobile) {
      setIsCollapsed(!isCollapsed);
    }
  };

  useEffect(() => {
    if (isCollapsed) {
      document.body.setAttribute("data-sidebar-collapse", "true");
    } else {
      document.body.removeAttribute("data-sidebar-collapse");
    }
  }, [isCollapsed]);

  return (
    <div className='-ms-2 hidden lg:block 2xl:hidden'>
      <TooltipProvider>
        <Tooltip delayDuration={1250}>
          <TooltipTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='size-8'
              onClick={handleToggle}
            >
              <PanelRightOpen className='in-data-sidebar-collapse:-rotate-180 transition-transform duration-300' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Toggle sidebar navigation</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
