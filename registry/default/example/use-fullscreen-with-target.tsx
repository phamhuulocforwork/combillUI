"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import { useFullscreen } from "@/registry/default/hooks/use-fullscreen";

export default function UseFullscreenWithTarget() {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const { ref, toggle, fullscreen } = useFullscreen();

  React.useEffect(() => {
    if (elementRef.current) {
      ref(elementRef.current);
    }
  }, [ref]);

  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <img
        ref={ref}
        src='https://raw.githubusercontent.com/phamhuulocforwork/combillUI/master/public/images/demo.png'
        alt='demo'
        width={200}
        className='rounded-md'
      />
      <Button onClick={toggle} variant={fullscreen ? "destructive" : "default"}>
        {fullscreen ? "Exit fullscreen" : "View in fullscreen"}
      </Button>
    </div>
  );
}
