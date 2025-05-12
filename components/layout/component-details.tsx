"use client";

import { useEffect, useState } from "react";
import type { JSX } from "react";

import Link from "next/link";

import { Code } from "lucide-react";

import CodeBlock, { highlight } from "@/components/code-block";
// import ComponentCli from "@/components/component-cli";
import CopyButton from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import type { RegistryItem } from "@/lib/components";
import { convertRegistryPaths } from "@/lib/components";

const ComponentDetails = ({ component }: { component: RegistryItem }) => {
  const [code, setCode] = useState<string | null>(null);
  const [highlightedCode, setHighlightedCode] = useState<JSX.Element | null>(
    null,
  );

  useEffect(() => {
    const handleEmptyCode = () => {
      setCode("");
      setHighlightedCode(null);
    };

    const loadCode = async () => {
      try {
        const response = await fetch(`/registry/${component.name}.json`);

        if (!response.ok) {
          handleEmptyCode();

          return;
        }

        const contentType = response.headers.get("content-type");

        if (!contentType || !contentType.includes("application/json")) {
          handleEmptyCode();

          return;
        }

        const data = await response.json();
        const codeContent = convertRegistryPaths(data.files[0].content) || "";

        setCode(codeContent);

        // Pre-highlight the code
        const highlighted = await highlight(codeContent, "tsx");

        setHighlightedCode(highlighted);
      } catch (error) {
        console.error("Failed to load code:", error);
        handleEmptyCode();
      }
    };

    loadCode();
  }, [component.name]);

  return (
    <Dialog>
      <div className='flex gap-2 justify-end w-full absolute -top-0.5 -right-0.5'>
        <CopyButton
          source={code}
          toast='Code'
          className='text-muted-foreground hover:text-foreground cursor-pointer opacity-0 transition-none group-focus-within/item:opacity-100 group-hover/item:opacity-100 disabled:opacity-100'
        />
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground hover:text-foreground cursor-pointer opacity-0 transition-none group-focus-within/item:opacity-100 group-hover/item:opacity-100 disabled:opacity-100'
                >
                  <Code aria-hidden={true} className='size-4' />
                </Button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>View code</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <DialogContent className='sm:max-w-[650px] max-w-2xl'>
        <DialogHeader>
          <DialogTitle className='text-left'>Installation</DialogTitle>
          <DialogDescription className='sr-only'>
            Use the CLI to add components to your project
          </DialogDescription>
        </DialogHeader>
        <div className='min-w-0 space-y-5'>
          <div className='space-y-4'>
            <div className='relative'>
              {code === "" ? (
                <p className='text-muted-foreground text-sm'>
                  No code available. If you think this is an error, please{" "}
                  <Link
                    href='https://github.com/phamhuulocforwork/combillUI/issues'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-foreground font-medium underline hover:no-underline'
                  >
                    open an issue
                  </Link>
                  .
                </p>
              ) : (
                <>
                  <CodeBlock
                    code={code}
                    lang='tsx'
                    preHighlighted={highlightedCode}
                  />
                  <CopyButton
                    source={code}
                    className='dark absolute end-1 top-1'
                    toast='Code'
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComponentDetails;
