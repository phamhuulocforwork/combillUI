"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import { useFullscreen } from "@/registry/default/hooks/use-fullscreen";

export default function UseElementSizeDefault() {
  const { toggle, fullscreen } = useFullscreen();
  return (
    <Button onClick={toggle} variant={fullscreen ? "destructive" : "default"}>
      {fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
    </Button>
  );
}
