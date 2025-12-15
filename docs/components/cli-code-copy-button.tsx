import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { trackBlockCliCopy } from "@/lib/analytics";

import { useConfig } from "@/hooks/use-config";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export function CliCodeCopyButton({
  name,
}: { name: string } & React.ComponentProps<typeof Button>) {
  const { copy, copied } = useCopyToClipboard();
  const [config] = useConfig();
  const packageManager = config.packageManager || "pnpm";
  const commands = {
    pnpm: `pnpm dlx shadcn@latest add @combillui/${name}`,
    npm: `npx shadcn@latest add @combillui/${name}`,
    yarn: `npx shadcn@latest add @combillui/${name}`,
    bun: `bunx --bun shadcn@latest add @combillui/${name}`,
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size='sm'
            variant='outline'
            className='h-7.5 text-muted-foreground w-36 justify-start'
            title='Copy CLI command'
            onClick={() => {
              copy(commands[packageManager]);
              // Track the CLI command copy event
              trackBlockCliCopy(name, packageManager);
            }}
          >
            {copied ? <Check className='text-secondary-foreground' /> : ">_"}
            <span className='truncate'>{commands[packageManager]}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{commands[packageManager]}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
