import type { Registry } from "@/registry/schema";

export const snippets: Registry = [
  {
    name: "avatar-default",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-default.tsx",
        content:
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarDefault() {\n  return (\n    <Avatar>\n      <AvatarImage\n        src='https://github.com/phamhuulocforwork.png'\n        alt='@phamhuulocforwork'\n      />\n      <AvatarFallback>HL</AvatarFallback>\n    </Avatar>\n  );\n}\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "avatar-group-max",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-group-max.tsx",
        content:
          "import * as React from \"react\";\n\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nimport { cn } from \"@/lib/utils\";\n\ntype AvatarProps = React.ComponentProps<typeof Avatar>;\n\ninterface AvatarGroupProps extends React.ComponentProps<\"div\"> {\n  children: React.ReactElement<AvatarProps>[];\n  max?: number;\n}\n\nconst AvatarGroup = ({\n  children,\n  max,\n  className,\n  ...props\n}: AvatarGroupProps) => {\n  const totalAvatars = React.Children.count(children);\n  const displayedAvatars = React.Children.toArray(children)\n    .slice(0, max)\n    .reverse();\n  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\n\n  return (\n    <div\n      className={cn(\"flex items-center flex-row-reverse\", className)}\n      {...props}\n    >\n      {remainingAvatars > 0 && (\n        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\n          <AvatarFallback className='bg-muted-foreground text-white'>\n            +{remainingAvatars}\n          </AvatarFallback>\n        </Avatar>\n      )}\n      {displayedAvatars.map((avatar, index) => {\n        if (!React.isValidElement(avatar)) return null;\n\n        return (\n          <div key={index} className='-ml-2 hover:z-10 relative'>\n            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\n              className: \"ring-2 ring-background\",\n            })}\n          </div>\n        );\n      })}\n    </div>\n  );\n};\n\nexport default function AvatarGroupMaxAvatarDemo() {\n  return (\n    <AvatarGroup className='flex items-center' max={3}>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarImage\n          src='https://github.com/phamhuulocforwork.png'\n          alt='@phamhuulocforwork'\n        />\n        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-indigo-500 text-white'>VK</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-orange-500 text-white'>RS</AvatarFallback>\n      </Avatar>\n    </AvatarGroup>\n  );\n}\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "avatar-group",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-group.tsx",
        content:
          "import * as React from \"react\";\n\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nimport { cn } from \"@/lib/utils\";\n\ntype AvatarProps = React.ComponentProps<typeof Avatar>;\n\ninterface AvatarGroupProps extends React.ComponentProps<\"div\"> {\n  children: React.ReactElement<AvatarProps>[];\n  max?: number;\n}\n\nconst AvatarGroup = ({\n  children,\n  max,\n  className,\n  ...props\n}: AvatarGroupProps) => {\n  const totalAvatars = React.Children.count(children);\n  const displayedAvatars = React.Children.toArray(children)\n    .slice(0, max)\n    .reverse();\n  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\n\n  return (\n    <div\n      className={cn(\"flex items-center flex-row-reverse\", className)}\n      {...props}\n    >\n      {remainingAvatars > 0 && (\n        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\n          <AvatarFallback className='bg-muted-foreground text-white'>\n            +{remainingAvatars}\n          </AvatarFallback>\n        </Avatar>\n      )}\n      {displayedAvatars.map((avatar, index) => {\n        if (!React.isValidElement(avatar)) return null;\n\n        return (\n          <div key={index} className='-ml-2 hover:z-10 relative'>\n            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\n              className: \"ring-2 ring-background\",\n            })}\n          </div>\n        );\n      })}\n    </div>\n  );\n};\n\nexport default function AvatarGroupDemo() {\n  return (\n    <AvatarGroup>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarImage\n          src='https://github.com/phamhuulocforwork.png'\n          alt='@phamhuulocforwork'\n        />\n        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\n      </Avatar>\n    </AvatarGroup>\n  );\n}\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "avatar-hover-card",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-hover-card.tsx",
        content:
          "import { CalendarIcon } from \"lucide-react\";\n\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\nimport {\n  HoverCard,\n  HoverCardContent,\n  HoverCardTrigger,\n} from \"@/components/ui/hover-card\";\n\nexport default function AvatarHoverCard() {\n  return (\n    <HoverCard>\n      <HoverCardTrigger className='cursor-pointer'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>HL</AvatarFallback>\n        </Avatar>\n      </HoverCardTrigger>\n      <HoverCardContent className='w-full max-w-xs'>\n        <div className='flex justify-between space-x-4'>\n          <Avatar>\n            <AvatarImage\n              src='https://github.com/phamhuulocforwork.png'\n              alt='@phamhuulocforwork'\n            />\n            <AvatarFallback>HL</AvatarFallback>\n          </Avatar>\n          <div className='space-y-1'>\n            <h4 className='text-sm font-semibold'>@phamhuulocforwork</h4>\n            <p className='text-sm'>\n              I'm currently studying at University (I stay up late and my hair\n              is getting thinner and thinner. Do you think I'm bald? xD)\n            </p>\n            <div className='flex items-center pt-2'>\n              <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{\" \"}\n              <span className='text-xs text-muted-foreground'>\n                Joined February 2025\n              </span>\n            </div>\n          </div>\n        </div>\n      </HoverCardContent>\n    </HoverCard>\n  );\n}\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "avatar-with-ring",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-with-ring.tsx",
        content:
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarWithRing() {\n  return (\n    <Avatar className='ring-2 ring-green-500 ring-offset-[3px] ring-offset-background'>\n      <AvatarImage\n        src='https://github.com/phamhuulocforwork.png'\n        alt='@phamhuulocforwork'\n      />\n      <AvatarFallback>HL</AvatarFallback>\n    </Avatar>\n  );\n}\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "avatar-with-status",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-with-status.tsx",
        content:
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarWithStatus() {\n  return (\n    <div className='flex items-center gap-3'>\n      {/* Online */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-green-500 absolute bottom-0 right-0'></div>\n      </div>\n\n      {/* DND */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-red-500 absolute bottom-0 right-0'></div>\n      </div>\n\n      {/* Busy */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-yellow-500 absolute bottom-0 right-0'></div>\n      </div>\n\n      {/* Offline */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background border-2 border-muted-foreground rounded-full bg-background absolute bottom-0 right-0'></div>\n      </div>\n    </div>\n  );\n}\n",
        type: "registry:snippet",
      },
    ],
  },
];
