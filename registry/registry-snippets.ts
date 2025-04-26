import type { Registry } from "@/registry/schema";

export const snippets: Registry = [
  {
    name: "avatar-default",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-default.tsx",
        content:
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\n\r\nexport default function AvatarDefault() {\r\n  return (\r\n    <Avatar>\r\n      <AvatarImage\r\n        src='https://github.com/shadcn.png'\r\n        alt='@phamhuulocforwork'\r\n      />\r\n      <AvatarFallback>HL</AvatarFallback>\r\n    </Avatar>\r\n  );\r\n}\r\n",
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
          "import * as React from \"react\";\r\n\r\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\n\r\nimport { cn } from \"@/lib/utils\";\r\n\r\ntype AvatarProps = React.ComponentProps<typeof Avatar>;\r\n\r\ninterface AvatarGroupProps extends React.ComponentProps<\"div\"> {\r\n  children: React.ReactElement<AvatarProps>[];\r\n  max?: number;\r\n}\r\n\r\nconst AvatarGroup = ({\r\n  children,\r\n  max,\r\n  className,\r\n  ...props\r\n}: AvatarGroupProps) => {\r\n  const totalAvatars = React.Children.count(children);\r\n  const displayedAvatars = React.Children.toArray(children)\r\n    .slice(0, max)\r\n    .reverse();\r\n  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\r\n\r\n  return (\r\n    <div\r\n      className={cn(\"flex items-center flex-row-reverse\", className)}\r\n      {...props}\r\n    >\r\n      {remainingAvatars > 0 && (\r\n        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\r\n          <AvatarFallback className='bg-muted-foreground text-white'>\r\n            +{remainingAvatars}\r\n          </AvatarFallback>\r\n        </Avatar>\r\n      )}\r\n      {displayedAvatars.map((avatar, index) => {\r\n        if (!React.isValidElement(avatar)) return null;\r\n\r\n        return (\r\n          <div key={index} className='-ml-2 hover:z-10 relative'>\r\n            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\r\n              className: \"ring-2 ring-background\",\r\n            })}\r\n          </div>\r\n        );\r\n      })}\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default function AvatarGroupMaxAvatarDemo() {\r\n  return (\r\n    <AvatarGroup className='flex items-center' max={3}>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarImage\r\n          src='https://github.com/shadcn.png'\r\n          alt='@phamhuulocforwork'\r\n        />\r\n        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarFallback className='bg-indigo-500 text-white'>VK</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarFallback className='bg-orange-500 text-white'>RS</AvatarFallback>\r\n      </Avatar>\r\n    </AvatarGroup>\r\n  );\r\n}\r\n",
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
          "import * as React from \"react\";\r\n\r\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\n\r\nimport { cn } from \"@/lib/utils\";\r\n\r\ntype AvatarProps = React.ComponentProps<typeof Avatar>;\r\n\r\ninterface AvatarGroupProps extends React.ComponentProps<\"div\"> {\r\n  children: React.ReactElement<AvatarProps>[];\r\n  max?: number;\r\n}\r\n\r\nconst AvatarGroup = ({\r\n  children,\r\n  max,\r\n  className,\r\n  ...props\r\n}: AvatarGroupProps) => {\r\n  const totalAvatars = React.Children.count(children);\r\n  const displayedAvatars = React.Children.toArray(children)\r\n    .slice(0, max)\r\n    .reverse();\r\n  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\r\n\r\n  return (\r\n    <div\r\n      className={cn(\"flex items-center flex-row-reverse\", className)}\r\n      {...props}\r\n    >\r\n      {remainingAvatars > 0 && (\r\n        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\r\n          <AvatarFallback className='bg-muted-foreground text-white'>\r\n            +{remainingAvatars}\r\n          </AvatarFallback>\r\n        </Avatar>\r\n      )}\r\n      {displayedAvatars.map((avatar, index) => {\r\n        if (!React.isValidElement(avatar)) return null;\r\n\r\n        return (\r\n          <div key={index} className='-ml-2 hover:z-10 relative'>\r\n            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\r\n              className: \"ring-2 ring-background\",\r\n            })}\r\n          </div>\r\n        );\r\n      })}\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default function AvatarGroupDemo() {\r\n  return (\r\n    <AvatarGroup>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarImage\r\n          src='https://github.com/shadcn.png'\r\n          alt='@phamhuulocforwork'\r\n        />\r\n        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\r\n      </Avatar>\r\n    </AvatarGroup>\r\n  );\r\n}\r\n",
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
          "import { CalendarIcon } from \"lucide-react\";\r\n\r\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\nimport {\r\n  HoverCard,\r\n  HoverCardContent,\r\n  HoverCardTrigger,\r\n} from \"@/components/ui/hover-card\";\r\n\r\nexport default function AvatarHoverCard() {\r\n  return (\r\n    <HoverCard>\r\n      <HoverCardTrigger className='cursor-pointer'>\r\n        <Avatar>\r\n          <AvatarImage\r\n            src='https://github.com/shadcn.png'\r\n            alt='@phamhuulocforwork'\r\n          />\r\n          <AvatarFallback>HL</AvatarFallback>\r\n        </Avatar>\r\n      </HoverCardTrigger>\r\n      <HoverCardContent className='w-full max-w-xs'>\r\n        <div className='flex justify-between space-x-4'>\r\n          <Avatar>\r\n            <AvatarImage\r\n              src='https://github.com/shadcn.png'\r\n              alt='@phamhuulocforwork'\r\n            />\r\n            <AvatarFallback>HL</AvatarFallback>\r\n          </Avatar>\r\n          <div className='space-y-1'>\r\n            <h4 className='text-sm font-semibold'>@phamhuulocforwork</h4>\r\n            <p className='text-sm'>\r\n              I'm currently studying at University (I stay up late and my hair\r\n              is getting thinner and thinner. Do you think I'm bald? xD)\r\n            </p>\r\n            <div className='flex items-center pt-2'>\r\n              <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{\" \"}\r\n              <span className='text-xs text-muted-foreground'>\r\n                Joined February 2025\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </HoverCardContent>\r\n    </HoverCard>\r\n  );\r\n}\r\n",
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
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\n\r\nexport default function AvatarWithRing() {\r\n  return (\r\n    <Avatar className='ring-2 ring-green-500 ring-offset-[3px] ring-offset-background'>\r\n      <AvatarImage\r\n        src='https://github.com/shadcn.png'\r\n        alt='@phamhuulocforwork'\r\n      />\r\n      <AvatarFallback>HL</AvatarFallback>\r\n    </Avatar>\r\n  );\r\n}\r\n",
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
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\n\r\nexport default function AvatarWithStatus() {\r\n  return (\r\n    <div className='flex items-center gap-3'>\r\n      {/* Online */}\r\n      <div className='relative'>\r\n        <Avatar>\r\n          <AvatarImage\r\n            src='https://github.com/shadcn.png'\r\n            alt='@phamhuulocforwork'\r\n          />\r\n          <AvatarFallback>CN</AvatarFallback>\r\n        </Avatar>\r\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-green-500 absolute bottom-0 right-0'></div>\r\n      </div>\r\n\r\n      {/* DND */}\r\n      <div className='relative'>\r\n        <Avatar>\r\n          <AvatarImage\r\n            src='https://github.com/shadcn.png'\r\n            alt='@phamhuulocforwork'\r\n          />\r\n          <AvatarFallback>CN</AvatarFallback>\r\n        </Avatar>\r\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-red-500 absolute bottom-0 right-0'></div>\r\n      </div>\r\n\r\n      {/* Busy */}\r\n      <div className='relative'>\r\n        <Avatar>\r\n          <AvatarImage\r\n            src='https://github.com/shadcn.png'\r\n            alt='@phamhuulocforwork'\r\n          />\r\n          <AvatarFallback>CN</AvatarFallback>\r\n        </Avatar>\r\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-yellow-500 absolute bottom-0 right-0'></div>\r\n      </div>\r\n\r\n      {/* Offline */}\r\n      <div className='relative'>\r\n        <Avatar>\r\n          <AvatarImage\r\n            src='https://github.com/shadcn.png'\r\n            alt='@phamhuulocforwork'\r\n          />\r\n          <AvatarFallback>CN</AvatarFallback>\r\n        </Avatar>\r\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background border-2 border-muted-foreground rounded-full bg-background absolute bottom-0 right-0'></div>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "breadcrumb-default",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/breadcrumb/breadcrumb-default.tsx",
        content:
          "import { HomeIcon } from \"lucide-react\";\r\n\r\nimport {\r\n  Breadcrumb,\r\n  BreadcrumbItem,\r\n  BreadcrumbLink,\r\n  BreadcrumbList,\r\n  BreadcrumbPage,\r\n  BreadcrumbSeparator,\r\n} from \"@/components/ui/breadcrumb\";\r\n\r\nconst BreadcrumbDefault = () => {\r\n  return (\r\n    <Breadcrumb>\r\n      <BreadcrumbList>\r\n        <BreadcrumbItem>\r\n          <HomeIcon className='size-4' />\r\n          <BreadcrumbLink href='#'>Home</BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator />\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator />\r\n        <BreadcrumbItem>\r\n          <BreadcrumbPage>Add Document</BreadcrumbPage>\r\n        </BreadcrumbItem>\r\n      </BreadcrumbList>\r\n    </Breadcrumb>\r\n  );\r\n};\r\n\r\nexport default BreadcrumbDefault;\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "breadcrumb-slash",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/breadcrumb/breadcrumb-slash.tsx",
        content:
          "import { HomeIcon } from \"lucide-react\";\r\n\r\nimport {\r\n  Breadcrumb,\r\n  BreadcrumbItem,\r\n  BreadcrumbLink,\r\n  BreadcrumbList,\r\n  BreadcrumbPage,\r\n  BreadcrumbSeparator,\r\n} from \"@/components/ui/breadcrumb\";\r\n\r\nconst BreadcrumbSlash = () => {\r\n  return (\r\n    <Breadcrumb>\r\n      <BreadcrumbList>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href='#' className='flex items-center gap-2'>\r\n            <HomeIcon className='size-4' />\r\n            Home\r\n          </BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbPage>Add Document</BreadcrumbPage>\r\n        </BreadcrumbItem>\r\n      </BreadcrumbList>\r\n    </Breadcrumb>\r\n  );\r\n};\r\n\r\nexport default BreadcrumbSlash;\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "breadcrumb-with-dropdown",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/breadcrumb/breadcrumb-with-dropdown.tsx",
        content:
          "import { ChevronDown, HomeIcon } from \"lucide-react\";\r\n\r\nimport {\r\n  Breadcrumb,\r\n  BreadcrumbItem,\r\n  BreadcrumbLink,\r\n  BreadcrumbList,\r\n  BreadcrumbPage,\r\n  BreadcrumbSeparator,\r\n} from \"@/components/ui/breadcrumb\";\r\nimport {\r\n  DropdownMenu,\r\n  DropdownMenuContent,\r\n  DropdownMenuLabel,\r\n  DropdownMenuTrigger,\r\n} from \"@/components/ui/dropdown-menu\";\r\n\r\nconst BreadcrumbWithDropdown = () => {\r\n  return (\r\n    <Breadcrumb>\r\n      <BreadcrumbList>\r\n        <BreadcrumbItem>\r\n          <HomeIcon className='size-4' />\r\n          <BreadcrumbLink href='#'>Home</BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator />\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator />\r\n        <BreadcrumbItem>\r\n          <BreadcrumbPage>\r\n            <DropdownMenu>\r\n              <DropdownMenuTrigger className='group flex items-center gap-1'>\r\n                Add Document\r\n                <ChevronDown className='size-4 transition-transform group-data-[state=open]:rotate-180' />\r\n              </DropdownMenuTrigger>\r\n              <DropdownMenuContent align='start'>\r\n                <DropdownMenuLabel>Themes</DropdownMenuLabel>\r\n                <DropdownMenuLabel>Github</DropdownMenuLabel>\r\n                <DropdownMenuLabel>Documentation</DropdownMenuLabel>\r\n              </DropdownMenuContent>\r\n            </DropdownMenu>\r\n          </BreadcrumbPage>\r\n        </BreadcrumbItem>\r\n      </BreadcrumbList>\r\n    </Breadcrumb>\r\n  );\r\n};\r\n\r\nexport default BreadcrumbWithDropdown;\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "breadcrumb-with-icon",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/breadcrumb/breadcrumb-with-icon.tsx",
        content:
          "import { File, Folder, HomeIcon } from \"lucide-react\";\r\n\r\nimport {\r\n  Breadcrumb,\r\n  BreadcrumbItem,\r\n  BreadcrumbLink,\r\n  BreadcrumbList,\r\n  BreadcrumbPage,\r\n  BreadcrumbSeparator,\r\n} from \"@/components/ui/breadcrumb\";\r\n\r\nconst BreadcrumbWithIcon = () => {\r\n  return (\r\n    <Breadcrumb>\r\n      <BreadcrumbList>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href='#' className='flex items-center gap-2'>\r\n            <HomeIcon className='size-4' />\r\n            Home\r\n          </BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href='#' className='flex items-center gap-2'>\r\n            <Folder className='size-4' />\r\n            Documents\r\n          </BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbPage className='flex items-center gap-2'>\r\n            <File className='size-4' />\r\n            Add Document\r\n          </BreadcrumbPage>\r\n        </BreadcrumbItem>\r\n      </BreadcrumbList>\r\n    </Breadcrumb>\r\n  );\r\n};\r\n\r\nexport default BreadcrumbWithIcon;\r\n",
        type: "registry:snippet",
      },
    ],
  },
];
