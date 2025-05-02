import type { Registry } from "@/registry/schema";

export const snippets: Registry = [
  {
    name: "alert-default",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alert/alert-default.tsx",
        content:
          'import { CircleFadingArrowUpIcon } from "lucide-react";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";\r\n\r\nexport default function AlertDemo() {\r\n  return (\r\n    <Alert>\r\n      <CircleFadingArrowUpIcon className=\'h-4 w-4\' />\r\n      <AlertTitle>System Notification</AlertTitle>\r\n      <AlertDescription>\r\n        Your application has been updated to the latest version.\r\n      </AlertDescription>\r\n    </Alert>\r\n  );\r\n}\r\n',
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-destructive",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alert/alert-destructive.tsx",
        content:
          "import { OctagonAlertIcon } from \"lucide-react\";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\r\n\r\nexport default function DestructiveAlertDemo() {\r\n  return (\r\n    <Alert variant='destructive'>\r\n      <OctagonAlertIcon className='h-4 w-4' />\r\n      <AlertTitle>Critical Error</AlertTitle>\r\n      <AlertDescription>\r\n        Failed to save changes. Your data may be lost or corrupted.\r\n      </AlertDescription>\r\n    </Alert>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-info",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alert/alert-info.tsx",
        content:
          "import { InfoIcon } from \"lucide-react\";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\r\n\r\nexport default function AlertInfoDemo() {\r\n  return (\r\n    <Alert className='border-cyan-600/50 text-cyan-600 dark:border-cyan-600 [&>svg]:text-cyan-600'>\r\n      <InfoIcon className='h-4 w-4' />\r\n      <AlertTitle>Pro Tip</AlertTitle>\r\n      <AlertDescription>\r\n        You can customize your workspace by accessing the settings panel.\r\n      </AlertDescription>\r\n    </Alert>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-soft",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alert/alert-soft.tsx",
        content:
          "import {\r\n  CircleFadingArrowUpIcon,\r\n  OctagonAlert,\r\n  ShieldAlert,\r\n} from \"lucide-react\";\r\n\r\nimport { Alert, AlertTitle } from \"@/components/ui/alert\";\r\n\r\nexport default function AlertCalloutDemo() {\r\n  return (\r\n    <div className='w-full space-y-4'>\r\n      <Alert className='bg-emerald-500/10 dark:bg-emerald-600/30 border-none'>\r\n        <CircleFadingArrowUpIcon className='h-4 w-4 !text-emerald-500' />\r\n        <AlertTitle>\r\n          Payment processed successfully. Your order is confirmed.\r\n        </AlertTitle>\r\n      </Alert>\r\n      <Alert className='bg-blue-500/10 dark:bg-blue-600/30 border-none'>\r\n        <CircleFadingArrowUpIcon className='h-4 w-4 !text-blue-500' />\r\n        <AlertTitle>\r\n          Feature preview available. Try our new dashboard layout.\r\n        </AlertTitle>\r\n      </Alert>\r\n      <Alert className='bg-amber-500/10 dark:bg-amber-600/30 border-none'>\r\n        <ShieldAlert className='h-4 w-4 !text-amber-500' />\r\n        <AlertTitle>\r\n          Unusual account activity detected. Verify recent logins.\r\n        </AlertTitle>\r\n      </Alert>\r\n      <Alert className='bg-destructive/10 dark:bg-destructive/20 border-none'>\r\n        <OctagonAlert className='h-4 w-4 !text-destructive' />\r\n        <AlertTitle>\r\n          Connection lost. Service unavailable until connectivity is restored.\r\n        </AlertTitle>\r\n      </Alert>\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-success",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alert/alert-success.tsx",
        content:
          "import { CircleCheckBigIcon } from \"lucide-react\";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\r\n\r\nexport default function AlertSuccessDemo() {\r\n  return (\r\n    <Alert className='border-emerald-600/50 text-emerald-600 dark:border-emerald-600 [&>svg]:text-emerald-600'>\r\n      <CircleCheckBigIcon className='h-4 w-4' />\r\n      <AlertTitle>Account Verified</AlertTitle>\r\n      <AlertDescription>\r\n        Your account has been successfully verified and is now ready to use\r\n      </AlertDescription>\r\n    </Alert>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-warning",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alert/alert-warning.tsx",
        content:
          "import { TriangleAlertIcon } from \"lucide-react\";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\r\n\r\nexport default function AlertWarningDemo() {\r\n  return (\r\n    <Alert className='border-amber-500/50 text-amber-500 dark:border-amber-500 [&>svg]:text-amber-500'>\r\n      <TriangleAlertIcon className='h-4 w-4' />\r\n      <AlertTitle>Low Storage Space</AlertTitle>\r\n      <AlertDescription>\r\n        Your device is running low on storage. Please free up space to avoid performance issues.\r\n      </AlertDescription>\r\n    </Alert>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-with-action",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alert/alert-with-action.tsx",
        content:
          "\"use client\";\r\n\r\nimport { useState } from \"react\";\r\n\r\nimport { CircleFadingArrowUpIcon, XIcon } from \"lucide-react\";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\r\nimport { Button } from \"@/components/ui/button\";\r\n\r\nexport default function AlertWithActionsDemo() {\r\n  const [isAlertVisible, setIsAlertVisible] = useState(true);\r\n\r\n  const showAlert = () => {\r\n    setIsAlertVisible(true);\r\n  };\r\n  const hideAlert = () => {\r\n    setIsAlertVisible(false);\r\n  };\r\n\r\n  return (\r\n    <div className='w-full'>\r\n      {isAlertVisible && (\r\n        <Alert className='flex justify-between items-center pr-2 [&>svg+div]:translate-y-0'>\r\n          <CircleFadingArrowUpIcon className='h-4 w-4' />\r\n          <div className='flex-col justify-center'>\r\n            <AlertTitle>Privacy Policy Update</AlertTitle>\r\n            <AlertDescription>\r\n              We've updated our privacy policy. Please review the changes before\r\n              continuing.\r\n            </AlertDescription>\r\n          </div>\r\n          <Button\r\n            size='icon'\r\n            variant='ghost'\r\n            className='!pl-0'\r\n            onClick={hideAlert}\r\n          >\r\n            <XIcon className='h-5 w-5' />\r\n          </Button>\r\n        </Alert>\r\n      )}\r\n      {!isAlertVisible && (\r\n        <div className='flex justify-center'>\r\n          <Button className='mt-2 mx-auto' onClick={showAlert}>\r\n            Reopen\r\n          </Button>\r\n        </div>\r\n      )}\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-with-background",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alert/alert-with-background.tsx",
        content:
          "import { OctagonAlertIcon } from \"lucide-react\";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\r\n\r\nexport default function AlertWithBackgroundDemo() {\r\n  return (\r\n    <Alert\r\n      variant='destructive'\r\n      className='bg-destructive text-destructive-foreground [&>svg]:text-destructive-foreground'\r\n    >\r\n      <OctagonAlertIcon className='h-4 w-4' />\r\n      <AlertTitle>Authentication Failed</AlertTitle>\r\n      <AlertDescription>\r\n        Your session has expired. Please log in again to continue.\r\n      </AlertDescription>\r\n    </Alert>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "avatar-default",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-default.tsx",
        content:
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarDefault() {\n  return (\n    <Avatar>\n      <AvatarImage\n        src='https://github.com/shadcn.png'\n        alt='@phamhuulocforwork'\n      />\n      <AvatarFallback>HL</AvatarFallback>\n    </Avatar>\n  );\n}\n",
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
          "import * as React from \"react\";\n\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nimport { cn } from \"@/lib/utils\";\n\ntype AvatarProps = React.ComponentProps<typeof Avatar>;\n\ninterface AvatarGroupProps extends React.ComponentProps<\"div\"> {\n  children: React.ReactElement<AvatarProps>[];\n  max?: number;\n}\n\nconst AvatarGroup = ({\n  children,\n  max,\n  className,\n  ...props\n}: AvatarGroupProps) => {\n  const totalAvatars = React.Children.count(children);\n  const displayedAvatars = React.Children.toArray(children)\n    .slice(0, max)\n    .reverse();\n  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\n\n  return (\n    <div\n      className={cn(\"flex items-center flex-row-reverse\", className)}\n      {...props}\n    >\n      {remainingAvatars > 0 && (\n        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\n          <AvatarFallback className='bg-muted-foreground text-white'>\n            +{remainingAvatars}\n          </AvatarFallback>\n        </Avatar>\n      )}\n      {displayedAvatars.map((avatar, index) => {\n        if (!React.isValidElement(avatar)) return null;\n\n        return (\n          <div key={index} className='-ml-2 hover:z-10 relative'>\n            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\n              className: \"ring-2 ring-background\",\n            })}\n          </div>\n        );\n      })}\n    </div>\n  );\n};\n\nexport default function AvatarGroupMaxAvatarDemo() {\n  return (\n    <AvatarGroup className='flex items-center' max={3}>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarImage\n          src='https://github.com/shadcn.png'\n          alt='@phamhuulocforwork'\n        />\n        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-indigo-500 text-white'>VK</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-orange-500 text-white'>RS</AvatarFallback>\n      </Avatar>\n    </AvatarGroup>\n  );\n}\n",
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
          "import * as React from \"react\";\n\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nimport { cn } from \"@/lib/utils\";\n\ntype AvatarProps = React.ComponentProps<typeof Avatar>;\n\ninterface AvatarGroupProps extends React.ComponentProps<\"div\"> {\n  children: React.ReactElement<AvatarProps>[];\n  max?: number;\n}\n\nconst AvatarGroup = ({\n  children,\n  max,\n  className,\n  ...props\n}: AvatarGroupProps) => {\n  const totalAvatars = React.Children.count(children);\n  const displayedAvatars = React.Children.toArray(children)\n    .slice(0, max)\n    .reverse();\n  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\n\n  return (\n    <div\n      className={cn(\"flex items-center flex-row-reverse\", className)}\n      {...props}\n    >\n      {remainingAvatars > 0 && (\n        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\n          <AvatarFallback className='bg-muted-foreground text-white'>\n            +{remainingAvatars}\n          </AvatarFallback>\n        </Avatar>\n      )}\n      {displayedAvatars.map((avatar, index) => {\n        if (!React.isValidElement(avatar)) return null;\n\n        return (\n          <div key={index} className='-ml-2 hover:z-10 relative'>\n            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\n              className: \"ring-2 ring-background\",\n            })}\n          </div>\n        );\n      })}\n    </div>\n  );\n};\n\nexport default function AvatarGroupDemo() {\n  return (\n    <AvatarGroup>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarImage\n          src='https://github.com/shadcn.png'\n          alt='@phamhuulocforwork'\n        />\n        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\n      </Avatar>\n    </AvatarGroup>\n  );\n}\n",
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
          "import { CalendarIcon } from \"lucide-react\";\n\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\nimport {\n  HoverCard,\n  HoverCardContent,\n  HoverCardTrigger,\n} from \"@/components/ui/hover-card\";\n\nexport default function AvatarHoverCard() {\n  return (\n    <HoverCard>\n      <HoverCardTrigger className='cursor-pointer'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/shadcn.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>HL</AvatarFallback>\n        </Avatar>\n      </HoverCardTrigger>\n      <HoverCardContent className='w-full max-w-xs'>\n        <div className='flex justify-between space-x-4'>\n          <Avatar>\n            <AvatarImage\n              src='https://github.com/shadcn.png'\n              alt='@phamhuulocforwork'\n            />\n            <AvatarFallback>HL</AvatarFallback>\n          </Avatar>\n          <div className='space-y-1'>\n            <h4 className='text-sm font-semibold'>@phamhuulocforwork</h4>\n            <p className='text-sm'>\n              I'm currently studying at University (I stay up late and my hair\n              is getting thinner and thinner. Do you think I'm bald? xD)\n            </p>\n            <div className='flex items-center pt-2'>\n              <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{\" \"}\n              <span className='text-xs text-muted-foreground'>\n                Joined February 2025\n              </span>\n            </div>\n          </div>\n        </div>\n      </HoverCardContent>\n    </HoverCard>\n  );\n}\n",
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
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarWithRing() {\n  return (\n    <Avatar className='ring-2 ring-green-500 ring-offset-[3px] ring-offset-background'>\n      <AvatarImage\n        src='https://github.com/shadcn.png'\n        alt='@phamhuulocforwork'\n      />\n      <AvatarFallback>HL</AvatarFallback>\n    </Avatar>\n  );\n}\n",
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
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarWithStatus() {\n  return (\n    <div className='flex items-center gap-3'>\n      {/* Online */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/shadcn.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-green-500 absolute bottom-0 right-0'></div>\n      </div>\n\n      {/* DND */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/shadcn.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-red-500 absolute bottom-0 right-0'></div>\n      </div>\n\n      {/* Busy */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/shadcn.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-yellow-500 absolute bottom-0 right-0'></div>\n      </div>\n\n      {/* Offline */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/shadcn.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background border-2 border-muted-foreground rounded-full bg-background absolute bottom-0 right-0'></div>\n      </div>\n    </div>\n  );\n}\n",
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
          "import { HomeIcon } from \"lucide-react\";\n\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbList,\n  BreadcrumbPage,\n  BreadcrumbSeparator,\n} from \"@/components/ui/breadcrumb\";\n\nconst BreadcrumbDefault = () => {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <HomeIcon className='size-4' />\n          <BreadcrumbLink href='#'>Home</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbPage>Add Document</BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n  );\n};\n\nexport default BreadcrumbDefault;\n",
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
          "import { HomeIcon } from \"lucide-react\";\n\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbList,\n  BreadcrumbPage,\n  BreadcrumbSeparator,\n} from \"@/components/ui/breadcrumb\";\n\nconst BreadcrumbSlash = () => {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#' className='flex items-center gap-2'>\n            <HomeIcon className='size-4' />\n            Home\n          </BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbPage>Add Document</BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n  );\n};\n\nexport default BreadcrumbSlash;\n",
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
          "import { ChevronDown, HomeIcon } from \"lucide-react\";\n\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbList,\n  BreadcrumbPage,\n  BreadcrumbSeparator,\n} from \"@/components/ui/breadcrumb\";\nimport {\n  DropdownMenu,\n  DropdownMenuContent,\n  DropdownMenuLabel,\n  DropdownMenuTrigger,\n} from \"@/components/ui/dropdown-menu\";\n\nconst BreadcrumbWithDropdown = () => {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <HomeIcon className='size-4' />\n          <BreadcrumbLink href='#'>Home</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbPage>\n            <DropdownMenu>\n              <DropdownMenuTrigger className='group flex items-center gap-1'>\n                Add Document\n                <ChevronDown className='size-4 transition-transform group-data-[state=open]:rotate-180' />\n              </DropdownMenuTrigger>\n              <DropdownMenuContent align='start'>\n                <DropdownMenuLabel>Themes</DropdownMenuLabel>\n                <DropdownMenuLabel>Github</DropdownMenuLabel>\n                <DropdownMenuLabel>Documentation</DropdownMenuLabel>\n              </DropdownMenuContent>\n            </DropdownMenu>\n          </BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n  );\n};\n\nexport default BreadcrumbWithDropdown;\n",
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
          "import { File, Folder, HomeIcon } from \"lucide-react\";\n\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbList,\n  BreadcrumbPage,\n  BreadcrumbSeparator,\n} from \"@/components/ui/breadcrumb\";\n\nconst BreadcrumbWithIcon = () => {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#' className='flex items-center gap-2'>\n            <HomeIcon className='size-4' />\n            Home\n          </BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#' className='flex items-center gap-2'>\n            <Folder className='size-4' />\n            Documents\n          </BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbPage className='flex items-center gap-2'>\n            <File className='size-4' />\n            Add Document\n          </BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n  );\n};\n\nexport default BreadcrumbWithIcon;\n",
        type: "registry:snippet",
      },
    ],
  },
];
