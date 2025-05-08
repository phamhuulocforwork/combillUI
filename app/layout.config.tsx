import { type BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Book, SquareBottomDashedScissors } from "lucide-react";

import { Icons } from "@/components/icons";

import { siteConfig } from "@/config/site";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Icons.logo className='size-4' aria-hidden='true' />
        <span className='font-medium [.uwu_&]:hidden [header_&]:text-[15px]'>
          {siteConfig.name}
        </span>
      </>
    ),
  },
  links: [
    {
      text: "Docs",
      url: "/docs/introduction",
      icon: <Book />,
    },
    {
      text: "Snippets",
      url: "/snippets",
      icon: <SquareBottomDashedScissors />,
    },
    {
      type: "icon",
      url: siteConfig.links.github,
      text: "Github",
      icon: <Icons.gitHub className='size-4' aria-hidden='true' />,
      external: true,
    },
  ],
};
