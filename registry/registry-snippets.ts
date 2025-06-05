import type { Registry } from "@/registry/schema";

export const snippets: Registry = [
  {
    name: "accordion-box-contained",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-box-contained.tsx",
        content:
          'import {\r\n  Accordion,\r\n  AccordionContent,\r\n  AccordionItem,\r\n  AccordionTrigger,\r\n} from "@/components/ui/accordion";\r\n\r\nconst items = [\r\n  {\r\n    title: "Is it accessible?",\r\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\r\n  },\r\n  {\r\n    title: "Is it styled?",\r\n    content:\r\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\r\n  },\r\n  {\r\n    title: "Is it animated?",\r\n    content:\r\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\r\n  },\r\n];\r\n\r\nexport default function AccordionBoxContained() {\r\n  return (\r\n    <Accordion type=\'single\' collapsible className=\'max-w-lg my-4 w-full\'>\r\n      {items.map(({ title, content }, index) => (\r\n        <AccordionItem\r\n          key={index}\r\n          value={`item-${index}`}\r\n          className=\'last:border-none first:rounded-t-md last:rounded-b-md px-4 bg-muted\'\r\n        >\r\n          <AccordionTrigger>{title}</AccordionTrigger>\r\n          <AccordionContent>{content}</AccordionContent>\r\n        </AccordionItem>\r\n      ))}\r\n    </Accordion>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "accordion-box",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-box.tsx",
        content:
          'import {\r\n  Accordion,\r\n  AccordionContent,\r\n  AccordionItem,\r\n  AccordionTrigger,\r\n} from "@/components/ui/accordion";\r\n\r\nconst items = [\r\n  {\r\n    title: "Is it accessible?",\r\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\r\n  },\r\n  {\r\n    title: "Is it styled?",\r\n    content:\r\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\r\n  },\r\n  {\r\n    title: "Is it animated?",\r\n    content:\r\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\r\n  },\r\n];\r\n\r\nexport default function AccordionBox() {\r\n  return (\r\n    <Accordion type=\'single\' collapsible className=\'max-w-lg my-4 w-full\'>\r\n      {items.map(({ title, content }, index) => (\r\n        <AccordionItem\r\n          key={index}\r\n          value={`item-${index}`}\r\n          className=\'border border-b-0 last:border-b first:rounded-t-md last:rounded-b-md px-4\'\r\n        >\r\n          <AccordionTrigger>{title}</AccordionTrigger>\r\n          <AccordionContent>{content}</AccordionContent>\r\n        </AccordionItem>\r\n      ))}\r\n    </Accordion>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "accordion-contained",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-contained.tsx",
        content:
          'import {\r\n  Accordion,\r\n  AccordionContent,\r\n  AccordionItem,\r\n  AccordionTrigger,\r\n} from "@/components/ui/accordion";\r\n\r\nconst items = [\r\n  {\r\n    title: "Is it accessible?",\r\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\r\n  },\r\n  {\r\n    title: "Is it styled?",\r\n    content:\r\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\r\n  },\r\n  {\r\n    title: "Is it animated?",\r\n    content:\r\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\r\n  },\r\n];\r\n\r\nexport default function AccordionContained() {\r\n  return (\r\n    <Accordion\r\n      type=\'single\'\r\n      collapsible\r\n      className=\'max-w-lg my-4 w-full space-y-2\'\r\n    >\r\n      {items.map(({ title, content }, index) => (\r\n        <AccordionItem\r\n          key={index}\r\n          value={`item-${index}`}\r\n          className=\'border-none rounded-md px-4 bg-secondary\'\r\n        >\r\n          <AccordionTrigger>{title}</AccordionTrigger>\r\n          <AccordionContent>{content}</AccordionContent>\r\n        </AccordionItem>\r\n      ))}\r\n    </Accordion>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "accordion-default",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-default.tsx",
        content:
          'import {\r\n  Accordion,\r\n  AccordionContent,\r\n  AccordionItem,\r\n  AccordionTrigger,\r\n} from "@/components/ui/accordion";\r\n\r\nconst items = [\r\n  {\r\n    title: "Is it accessible?",\r\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\r\n  },\r\n  {\r\n    title: "Is it styled?",\r\n    content:\r\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\r\n  },\r\n  {\r\n    title: "Is it animated?",\r\n    content:\r\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\r\n  },\r\n];\r\n\r\nexport default function AccordionDefaut() {\r\n  return (\r\n    <Accordion type=\'single\' collapsible className=\'max-w-lg my-4 w-full\'>\r\n      {items.map(({ title, content }, index) => (\r\n        <AccordionItem key={index} value={`item-${index}`}>\r\n          <AccordionTrigger>{title}</AccordionTrigger>\r\n          <AccordionContent>{content}</AccordionContent>\r\n        </AccordionItem>\r\n      ))}\r\n    </Accordion>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "accordion-disabled-item",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-disabled-item.tsx",
        content:
          'import { Contrast, Palette, Zap } from "lucide-react";\r\n\r\nimport {\r\n  Accordion,\r\n  AccordionContent,\r\n  AccordionItem,\r\n  AccordionTrigger,\r\n} from "@/components/ui/accordion";\r\n\r\nimport { cn } from "@/lib/utils";\r\n\r\nconst items = [\r\n  {\r\n    title: "Is it accessible?",\r\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\r\n    icon: Contrast,\r\n  },\r\n  {\r\n    title: "Is it styled?",\r\n    content:\r\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\r\n    icon: Palette,\r\n    disabled: true,\r\n  },\r\n  {\r\n    title: "Is it animated?",\r\n    content:\r\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\r\n    icon: Zap,\r\n  },\r\n];\r\n\r\nexport default function AccordionItemDisabled() {\r\n  return (\r\n    <Accordion\r\n      defaultValue=\'item-0\'\r\n      type=\'single\'\r\n      collapsible\r\n      className=\'max-w-lg my-4 w-full\'\r\n    >\r\n      {items.map(({ title, content, icon: Icon, disabled }, index) => (\r\n        <AccordionItem key={index} value={`item-${index}`}>\r\n          <AccordionTrigger\r\n            disabled={disabled}\r\n            className={cn({\r\n              "opacity-50": disabled,\r\n            })}\r\n          >\r\n            <div className=\'flex items-start gap-3\'>\r\n              <Icon />\r\n              {title}\r\n            </div>\r\n          </AccordionTrigger>\r\n          <AccordionContent>{content}</AccordionContent>\r\n        </AccordionItem>\r\n      ))}\r\n    </Accordion>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "accordion-expand-icon",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-expand-icon.tsx",
        content:
          'import * as AccordionPrimitive from "@radix-ui/react-accordion";\r\nimport { Plus } from "lucide-react";\r\n\r\nimport {\r\n  Accordion,\r\n  AccordionContent,\r\n  AccordionItem,\r\n} from "@/components/ui/accordion";\r\n\r\nconst items = [\r\n  {\r\n    title: "Is it accessible?",\r\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\r\n  },\r\n  {\r\n    title: "Is it styled?",\r\n    content:\r\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\r\n  },\r\n  {\r\n    title: "Is it animated?",\r\n    content:\r\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\r\n  },\r\n];\r\n\r\nexport default function AccordionDefaultOpen() {\r\n  return (\r\n    <Accordion\r\n      defaultValue=\'item-0\'\r\n      type=\'single\'\r\n      collapsible\r\n      className=\'max-w-lg my-4 w-full\'\r\n    >\r\n      {items.map(({ title, content }, index) => (\r\n        <AccordionItem key={index} value={`item-${index}`}>\r\n          <AccordionPrimitive.Header className=\'flex\'>\r\n            <AccordionPrimitive.Trigger className=\'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45\'>\r\n              {title}\r\n              <Plus className=\'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200\' />\r\n            </AccordionPrimitive.Trigger>\r\n          </AccordionPrimitive.Header>\r\n          <AccordionContent>{content}</AccordionContent>\r\n        </AccordionItem>\r\n      ))}\r\n    </Accordion>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "accordion-highlight-active-item",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-highlight-active-item.tsx",
        content:
          'import {\r\n  Accordion,\r\n  AccordionContent,\r\n  AccordionItem,\r\n  AccordionTrigger,\r\n} from "@/components/ui/accordion";\r\n\r\nconst items = [\r\n  {\r\n    title: "Is it accessible?",\r\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\r\n  },\r\n  {\r\n    title: "Is it styled?",\r\n    content:\r\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\r\n  },\r\n  {\r\n    title: "Is it animated?",\r\n    content:\r\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\r\n  },\r\n];\r\n\r\nexport default function AccordionHighlightActiveItem() {\r\n  return (\r\n    <Accordion\r\n      defaultValue=\'item-0\'\r\n      type=\'single\'\r\n      collapsible\r\n      className=\'max-w-lg my-4 w-full\'\r\n    >\r\n      {items.map(({ title, content }, index) => (\r\n        <AccordionItem\r\n          key={index}\r\n          value={`item-${index}`}\r\n          className=\'data-[state=open]:border-b-2 data-[state=open]:border-indigo-600 dark:data-[state=open]:border-indigo-500\'\r\n        >\r\n          <AccordionTrigger className=\'data-[state=open]:text-indigo-600 dark:data-[state=open]:text-indigo-500\'>\r\n            {title}\r\n          </AccordionTrigger>\r\n          <AccordionContent>{content}</AccordionContent>\r\n        </AccordionItem>\r\n      ))}\r\n    </Accordion>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "accordion-media-content",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-media-content.tsx",
        content:
          "import { Contrast, Palette, Zap } from \"lucide-react\";\r\n\r\nimport {\r\n  Accordion,\r\n  AccordionContent,\r\n  AccordionItem,\r\n  AccordionTrigger,\r\n} from \"@/components/ui/accordion\";\r\n\r\nconst items = [\r\n  {\r\n    title: \"Is it accessible?\",\r\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\r\n    icon: Contrast,\r\n  },\r\n  {\r\n    title: \"Is it styled?\",\r\n    content:\r\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\r\n    icon: Palette,\r\n  },\r\n  {\r\n    title: \"Is it animated?\",\r\n    content:\r\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\r\n    icon: Zap,\r\n  },\r\n];\r\n\r\nexport default function AccordionMediaContent() {\r\n  return (\r\n    <Accordion\r\n      defaultValue='item-0'\r\n      type='single'\r\n      collapsible\r\n      className='max-w-lg my-4 w-full'\r\n    >\r\n      {items.map(({ title, content, icon: Icon }, index) => (\r\n        <AccordionItem key={index} value={`item-${index}`}>\r\n          <AccordionTrigger>\r\n            <div className='flex items-start gap-3'>\r\n              <Icon />\r\n              {title}\r\n            </div>\r\n          </AccordionTrigger>\r\n          <AccordionContent>\r\n            {content}\r\n            <div className='mt-4 w-full bg-muted rounded-xl'>\r\n              <img\r\n                src='/svgs/placeholder.svg'\r\n                alt='placeholder'\r\n                className='object-cover aspect-[18/9]'\r\n              />\r\n            </div>\r\n          </AccordionContent>\r\n        </AccordionItem>\r\n      ))}\r\n    </Accordion>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "accordion-multiple-expanded-at-a-time",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-multiple-expanded-at-a-time.tsx",
        content:
          'import {\r\n  Accordion,\r\n  AccordionContent,\r\n  AccordionItem,\r\n  AccordionTrigger,\r\n} from "@/components/ui/accordion";\r\n\r\nconst items = [\r\n  {\r\n    title: "Is it accessible?",\r\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\r\n  },\r\n  {\r\n    title: "Is it styled?",\r\n    content:\r\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\r\n  },\r\n  {\r\n    title: "Is it animated?",\r\n    content:\r\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\r\n  },\r\n];\r\n\r\nexport default function AccordionMultipleOpen() {\r\n  return (\r\n    <Accordion\r\n      defaultValue={["item-0", "item-1"]}\r\n      type=\'multiple\'\r\n      className=\'max-w-lg my-4 w-full\'\r\n    >\r\n      {items.map(({ title, content }, index) => (\r\n        <AccordionItem key={index} value={`item-${index}`}>\r\n          <AccordionTrigger>{title}</AccordionTrigger>\r\n          <AccordionContent>{content}</AccordionContent>\r\n        </AccordionItem>\r\n      ))}\r\n    </Accordion>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "accordion-outline",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-outline.tsx",
        content:
          'import {\r\n  Accordion,\r\n  AccordionContent,\r\n  AccordionItem,\r\n  AccordionTrigger,\r\n} from "@/components/ui/accordion";\r\n\r\nconst items = [\r\n  {\r\n    title: "Is it accessible?",\r\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\r\n  },\r\n  {\r\n    title: "Is it styled?",\r\n    content:\r\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\r\n  },\r\n  {\r\n    title: "Is it animated?",\r\n    content:\r\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\r\n  },\r\n];\r\n\r\nexport default function AccordionOutline() {\r\n  return (\r\n    <Accordion\r\n      type=\'single\'\r\n      collapsible\r\n      className=\'max-w-lg my-4 w-full space-y-2\'\r\n    >\r\n      {items.map(({ title, content }, index) => (\r\n        <AccordionItem\r\n          key={index}\r\n          value={`item-${index}`}\r\n          className=\'border rounded-md px-4\'\r\n        >\r\n          <AccordionTrigger>{title}</AccordionTrigger>\r\n          <AccordionContent>{content}</AccordionContent>\r\n        </AccordionItem>\r\n      ))}\r\n    </Accordion>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "accordion-tabs",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-tabs.tsx",
        content:
          'import {\r\n  Accordion,\r\n  AccordionContent,\r\n  AccordionItem,\r\n  AccordionTrigger,\r\n} from "@/components/ui/accordion";\r\n\r\nconst items = [\r\n  {\r\n    title: "Is it accessible?",\r\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\r\n  },\r\n  {\r\n    title: "Is it styled?",\r\n    content:\r\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\r\n  },\r\n  {\r\n    title: "Is it animated?",\r\n    content:\r\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\r\n  },\r\n];\r\n\r\nexport default function AccordionTabs() {\r\n  return (\r\n    <Accordion\r\n      type=\'single\'\r\n      collapsible\r\n      defaultValue=\'item-0\'\r\n      className=\'max-w-lg my-4 w-full space-y-2\'\r\n    >\r\n      {items.map(({ title, content }, index) => (\r\n        <AccordionItem\r\n          key={index}\r\n          value={`item-${index}`}\r\n          className=\'border-none rounded-md px-4 data-[state=open]:bg-secondary\'\r\n        >\r\n          <AccordionTrigger className=\'data-[state=closed]:py-2\'>\r\n            {title}\r\n          </AccordionTrigger>\r\n          <AccordionContent>{content}</AccordionContent>\r\n        </AccordionItem>\r\n      ))}\r\n    </Accordion>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "accordion-with-icon",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-with-icon.tsx",
        content:
          'import { Contrast, Palette, Zap } from "lucide-react";\r\n\r\nimport {\r\n  Accordion,\r\n  AccordionContent,\r\n  AccordionItem,\r\n  AccordionTrigger,\r\n} from "@/components/ui/accordion";\r\n\r\nconst items = [\r\n  {\r\n    title: "Is it accessible?",\r\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\r\n    icon: Contrast,\r\n  },\r\n  {\r\n    title: "Is it styled?",\r\n    content:\r\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\r\n    icon: Palette,\r\n  },\r\n  {\r\n    title: "Is it animated?",\r\n    content:\r\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\r\n    icon: Zap,\r\n  },\r\n];\r\n\r\nexport default function AccordionWithIcon() {\r\n  return (\r\n    <Accordion\r\n      defaultValue=\'item-0\'\r\n      type=\'single\'\r\n      collapsible\r\n      className=\'max-w-lg my-4 w-full\'\r\n    >\r\n      {items.map(({ title, content, icon: Icon }, index) => (\r\n        <AccordionItem key={index} value={`item-${index}`}>\r\n          <AccordionTrigger>\r\n            <div className=\'flex items-start gap-3\'>\r\n              <Icon />\r\n              {title}\r\n            </div>\r\n          </AccordionTrigger>\r\n          <AccordionContent>{content}</AccordionContent>\r\n        </AccordionItem>\r\n      ))}\r\n    </Accordion>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-default",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alert/alert-default.tsx",
        content:
          'import { CircleFadingArrowUpIcon } from "lucide-react";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";\r\n\r\nexport default function AlertDemo() {\r\n  return (\r\n    <Alert>\r\n      <CircleFadingArrowUpIcon className=\'h-4 w-4\' />\r\n      <AlertTitle>System Notification</AlertTitle>\r\n      <AlertDescription>\r\n        Your application has been updated to the latest version.\r\n      </AlertDescription>\r\n    </Alert>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-destructive",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alert/alert-destructive.tsx",
        content:
          "import { OctagonAlertIcon } from \"lucide-react\";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\r\n\r\nexport default function DestructiveAlertDemo() {\r\n  return (\r\n    <Alert variant='destructive'>\r\n      <OctagonAlertIcon className='h-4 w-4' />\r\n      <AlertTitle>Critical Error</AlertTitle>\r\n      <AlertDescription>\r\n        Failed to save changes. Your data may be lost or corrupted.\r\n      </AlertDescription>\r\n    </Alert>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-info",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alert/alert-info.tsx",
        content:
          "import { InfoIcon } from \"lucide-react\";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\r\n\r\nexport default function AlertInfoDemo() {\r\n  return (\r\n    <Alert className='border-cyan-600/50 text-cyan-600 dark:border-cyan-600 [&>svg]:text-cyan-600'>\r\n      <InfoIcon className='h-4 w-4' />\r\n      <AlertTitle>Pro Tip</AlertTitle>\r\n      <AlertDescription>\r\n        You can customize your workspace by accessing the settings panel.\r\n      </AlertDescription>\r\n    </Alert>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-soft",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alert/alert-soft.tsx",
        content:
          "import {\r\n  CircleFadingArrowUpIcon,\r\n  OctagonAlert,\r\n  ShieldAlert,\r\n} from \"lucide-react\";\r\n\r\nimport { Alert, AlertTitle } from \"@/components/ui/alert\";\r\n\r\nexport default function AlertCalloutDemo() {\r\n  return (\r\n    <div className='w-full space-y-4'>\r\n      <Alert className='bg-emerald-500/10 dark:bg-emerald-600/30 border-none'>\r\n        <CircleFadingArrowUpIcon className='h-4 w-4 !text-emerald-500' />\r\n        <AlertTitle>\r\n          Payment processed successfully. Your order is confirmed.\r\n        </AlertTitle>\r\n      </Alert>\r\n      <Alert className='bg-blue-500/10 dark:bg-blue-600/30 border-none'>\r\n        <CircleFadingArrowUpIcon className='h-4 w-4 !text-blue-500' />\r\n        <AlertTitle>\r\n          Feature preview available. Try our new dashboard layout.\r\n        </AlertTitle>\r\n      </Alert>\r\n      <Alert className='bg-amber-500/10 dark:bg-amber-600/30 border-none'>\r\n        <ShieldAlert className='h-4 w-4 !text-amber-500' />\r\n        <AlertTitle>\r\n          Unusual account activity detected. Verify recent logins.\r\n        </AlertTitle>\r\n      </Alert>\r\n      <Alert className='bg-destructive/10 dark:bg-destructive/20 border-none'>\r\n        <OctagonAlert className='h-4 w-4 !text-destructive' />\r\n        <AlertTitle>\r\n          Connection lost. Service unavailable until connectivity is restored.\r\n        </AlertTitle>\r\n      </Alert>\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-success",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alert/alert-success.tsx",
        content:
          "import { CircleCheckBigIcon } from \"lucide-react\";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\r\n\r\nexport default function AlertSuccessDemo() {\r\n  return (\r\n    <Alert className='border-emerald-600/50 text-emerald-600 dark:border-emerald-600 [&>svg]:text-emerald-600'>\r\n      <CircleCheckBigIcon className='h-4 w-4' />\r\n      <AlertTitle>Account Verified</AlertTitle>\r\n      <AlertDescription>\r\n        Your account has been successfully verified and is now ready to use\r\n      </AlertDescription>\r\n    </Alert>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-warning",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alert/alert-warning.tsx",
        content:
          "import { TriangleAlertIcon } from \"lucide-react\";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\r\n\r\nexport default function AlertWarningDemo() {\r\n  return (\r\n    <Alert className='border-amber-500/50 text-amber-500 dark:border-amber-500 [&>svg]:text-amber-500'>\r\n      <TriangleAlertIcon className='h-4 w-4' />\r\n      <AlertTitle>Low Storage Space</AlertTitle>\r\n      <AlertDescription>\r\n        Your device is running low on storage. Please free up space to avoid\r\n        performance issues.\r\n      </AlertDescription>\r\n    </Alert>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-with-action",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alert/alert-with-action.tsx",
        content:
          "\"use client\";\r\n\r\nimport { useState } from \"react\";\r\n\r\nimport { CircleFadingArrowUpIcon, XIcon } from \"lucide-react\";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\r\nimport { Button } from \"@/components/ui/button\";\r\n\r\nexport default function AlertWithActionsDemo() {\r\n  const [isAlertVisible, setIsAlertVisible] = useState(true);\r\n\r\n  const showAlert = () => {\r\n    setIsAlertVisible(true);\r\n  };\r\n  const hideAlert = () => {\r\n    setIsAlertVisible(false);\r\n  };\r\n\r\n  return (\r\n    <div className='w-full'>\r\n      {isAlertVisible && (\r\n        <Alert className='flex justify-between items-center pr-2 [&>svg+div]:translate-y-0'>\r\n          <CircleFadingArrowUpIcon className='h-4 w-4' />\r\n          <div className='flex-col justify-center'>\r\n            <AlertTitle>Privacy Policy Update</AlertTitle>\r\n            <AlertDescription>\r\n              We've updated our privacy policy. Please review the changes before\r\n              continuing.\r\n            </AlertDescription>\r\n          </div>\r\n          <Button\r\n            size='icon'\r\n            variant='ghost'\r\n            className='!pl-0'\r\n            onClick={hideAlert}\r\n          >\r\n            <XIcon className='h-5 w-5' />\r\n          </Button>\r\n        </Alert>\r\n      )}\r\n      {!isAlertVisible && (\r\n        <div className='flex justify-center'>\r\n          <Button className='mt-2 mx-auto' onClick={showAlert}>\r\n            Reopen\r\n          </Button>\r\n        </div>\r\n      )}\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-with-background",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alert/alert-with-background.tsx",
        content:
          "import { OctagonAlertIcon } from \"lucide-react\";\r\n\r\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\r\n\r\nexport default function AlertWithBackgroundDemo() {\r\n  return (\r\n    <Alert\r\n      variant='destructive'\r\n      className='bg-destructive text-destructive-foreground [&>svg]:text-destructive-foreground'\r\n    >\r\n      <OctagonAlertIcon className='h-4 w-4' />\r\n      <AlertTitle>Authentication Failed</AlertTitle>\r\n      <AlertDescription>\r\n        Your session has expired. Please log in again to continue.\r\n      </AlertDescription>\r\n    </Alert>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-dialog-default",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-default.tsx",
        content:
          "import {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogDefault() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>Default Dialog</Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <AlertDialogHeader>\r\n          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px]'>\r\n            This action cannot be undone. This will permanently delete your\r\n            account and remove your data from our servers.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter>\r\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\r\n          <AlertDialogAction>Continue</AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-dialog-destructive",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-destructive.tsx",
        content:
          "import { OctagonAlert } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button, buttonVariants } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogDestructive() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <OctagonAlert />\r\n          Destructive\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <AlertDialogHeader className='items-center'>\r\n          <AlertDialogTitle>\r\n            <div className='mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10'>\r\n              <OctagonAlert className='h-7 w-7 text-destructive' />\r\n            </div>\r\n            Are you absolutely sure?\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px] text-center'>\r\n            This action cannot be undone. This will permanently delete your\r\n            account and remove your data from our servers.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter className='mt-2 sm:justify-center'>\r\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\r\n          <AlertDialogAction\r\n            className={buttonVariants({ variant: \"destructive\" })}\r\n          >\r\n            Continue\r\n          </AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-dialog-info",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-info.tsx",
        content:
          "import { CircleFadingArrowUp, Rocket } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Badge } from \"@/components/ui/badge\";\r\nimport { Button } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogInfo() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <CircleFadingArrowUp />\r\n          Info Dialog\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <AlertDialogHeader>\r\n          <div className='mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10'>\r\n            <CircleFadingArrowUp className='h-[18px] w-[18px] text-primary' />\r\n          </div>\r\n          <AlertDialogTitle className='text-2xl font-bold tracking-tight'>\r\n            New Software Update Available\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='!mt-3 text-[15px]'>\r\n            A new software update is available for your device. Please update to\r\n            the latest version to continue using the app.\r\n          </AlertDialogDescription>\r\n          <div className='!mt-6 flex flex-wrap gap-2'>\r\n            <Badge variant='outline' className='py-1'>\r\n              Faster Performance\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              Advanced Blocks\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              Customized Components\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              UI Revamp\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              Security Improvements\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              Other Improvements\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              Bug Fixes\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              + much more\r\n            </Badge>\r\n          </div>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter className='mt-4'>\r\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\r\n          <AlertDialogAction>\r\n            <Rocket /> Update Now\r\n          </AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-dialog-success",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-success.tsx",
        content:
          "import { CheckCircle } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button, buttonVariants } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogSuccess() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <CheckCircle />\r\n          Success Dialog\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <AlertDialogHeader className='items-center'>\r\n          <AlertDialogTitle>\r\n            <div className='mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/10'>\r\n              <CheckCircle className='h-7 w-7 text-success' />\r\n            </div>\r\n            Success!\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px] text-center'>\r\n            Your account has been successfully created. You can now log in and\r\n            start using our services.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter className='mt-2 sm:justify-center'>\r\n          <AlertDialogCancel>Close</AlertDialogCancel>\r\n          <AlertDialogAction className={buttonVariants({ variant: \"success\" })}>\r\n            Log In\r\n          </AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-dialog-warning",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-warning.tsx",
        content:
          "import { OctagonAlert } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button, buttonVariants } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogWarning() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <OctagonAlert />\r\n          Warning Dialog\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <AlertDialogHeader className='items-center'>\r\n          <AlertDialogTitle>\r\n            <div className='mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-warning/10'>\r\n              <OctagonAlert className='h-7 w-7 text-warning' />\r\n            </div>\r\n            Warning: Proceed with Caution\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px] text-center'>\r\n            You are about to perform an action that may have unintended\r\n            consequences. Please ensure you understand the implications before\r\n            proceeding.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter className='mt-2 sm:justify-center'>\r\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\r\n          <AlertDialogAction className={buttonVariants({ variant: \"warning\" })}>\r\n            Proceed\r\n          </AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-dialog-with-footer",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-with-footer.tsx",
        content:
          "import {\r\n  ExternalLink,\r\n  OctagonAlert,\r\n  PanelBottom,\r\n  Trash,\r\n  X,\r\n} from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button, buttonVariants } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogWithFooter() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <PanelBottom />\r\n          With Footer\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent className='overflow-hidden'>\r\n        <AlertDialogHeader className='pb-4'>\r\n          <AlertDialogTitle>\r\n            <div className='mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10'>\r\n              <OctagonAlert className='h-5 w-5 text-destructive' />\r\n            </div>\r\n            Are you absolutely sure?\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px]'>\r\n            This action cannot be undone. This will permanently delete your\r\n            account and remove your data from our servers.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter className='border-t -mx-6 -mb-6 px-6 py-5'>\r\n          <Button\r\n            variant='link'\r\n            className='-ml-3 mr-auto text-muted-foreground'\r\n          >\r\n            Learn more <ExternalLink />\r\n          </Button>\r\n          <AlertDialogCancel>\r\n            <X /> Cancel\r\n          </AlertDialogCancel>\r\n          <AlertDialogAction\r\n            className={buttonVariants({ variant: \"destructive\" })}\r\n          >\r\n            <Trash />\r\n            Continue\r\n          </AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-dialog-with-header",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-with-header.tsx",
        content:
          "import * as AlertDialogPrimitive from \"@radix-ui/react-alert-dialog\";\r\nimport { OctagonAlert, PanelTop, X } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button, buttonVariants } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogWithHeader() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <PanelTop />\r\n          With Header\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <div className='-mt-3 -mx-6 border-b pb-3 px-6 flex justify-between items-center'>\r\n          <AlertDialogTitle>Delete Account</AlertDialogTitle>\r\n          <AlertDialogPrimitive.Cancel\r\n            className={buttonVariants({\r\n              variant: \"ghost\",\r\n              size: \"icon\",\r\n              className: \"!h-7 !w-7\",\r\n            })}\r\n          >\r\n            <X />\r\n          </AlertDialogPrimitive.Cancel>\r\n        </div>\r\n        <AlertDialogHeader className='pt-2'>\r\n          <AlertDialogTitle>\r\n            <div className='mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10'>\r\n              <OctagonAlert className='h-5 w-5 text-destructive' />\r\n            </div>\r\n            Are you absolutely sure?\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px]'>\r\n            This action cannot be undone. This will permanently delete your\r\n            account and remove your data from our servers.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter className='mt-2'>\r\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\r\n          <AlertDialogAction>Continue</AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-dialog-with-icon",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-with-icon.tsx",
        content:
          "import { Combine, OctagonAlert } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogWithIcon() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <Combine />\r\n          With Icon\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <AlertDialogHeader>\r\n          <AlertDialogTitle>\r\n            <div className='mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10'>\r\n              <OctagonAlert className='h-5 w-5 text-destructive' />\r\n            </div>\r\n            Are you absolutely sure?\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px]'>\r\n            This action cannot be undone. This will permanently delete your\r\n            account and remove your data from our servers.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter>\r\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\r\n          <AlertDialogAction>Continue</AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar-default",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-default.tsx",
        content:
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\n\r\nexport default function AvatarDefault() {\r\n  return (\r\n    <Avatar>\r\n      <AvatarImage\r\n        src='http://github.com/phamhuulocforwork.png'\r\n        alt='@phamhuulocforwork'\r\n      />\r\n      <AvatarFallback>HL</AvatarFallback>\r\n    </Avatar>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar-group-max",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-group-max.tsx",
        content:
          "import * as React from \"react\";\r\n\r\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\n\r\nimport { cn } from \"@/lib/utils\";\r\n\r\ntype AvatarProps = React.ComponentProps<typeof Avatar>;\r\n\r\ninterface AvatarGroupProps extends React.ComponentProps<\"div\"> {\r\n  children: React.ReactElement<AvatarProps>[];\r\n  max?: number;\r\n}\r\n\r\nconst AvatarGroup = ({\r\n  children,\r\n  max,\r\n  className,\r\n  ...props\r\n}: AvatarGroupProps) => {\r\n  const totalAvatars = React.Children.count(children);\r\n  const displayedAvatars = React.Children.toArray(children)\r\n    .slice(0, max)\r\n    .reverse();\r\n  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\r\n\r\n  return (\r\n    <div\r\n      className={cn(\"flex items-center flex-row-reverse\", className)}\r\n      {...props}\r\n    >\r\n      {remainingAvatars > 0 && (\r\n        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\r\n          <AvatarFallback className='bg-muted-foreground text-white'>\r\n            +{remainingAvatars}\r\n          </AvatarFallback>\r\n        </Avatar>\r\n      )}\r\n      {displayedAvatars.map((avatar, index) => {\r\n        if (!React.isValidElement(avatar)) return null;\r\n\r\n        return (\r\n          <div key={index} className='-ml-2 hover:z-10 relative'>\r\n            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\r\n              className: \"ring-2 ring-background\",\r\n            })}\r\n          </div>\r\n        );\r\n      })}\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default function AvatarGroupMaxAvatar() {\r\n  return (\r\n    <AvatarGroup className='flex items-center' max={3}>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarImage\r\n          src='http://github.com/phamhuulocforwork.png'\r\n          alt='@phamhuulocforwork'\r\n        />\r\n        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarFallback className='bg-indigo-500 text-white'>VK</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarFallback className='bg-orange-500 text-white'>RS</AvatarFallback>\r\n      </Avatar>\r\n    </AvatarGroup>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar-group",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-group.tsx",
        content:
          "import * as React from \"react\";\r\n\r\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\n\r\nimport { cn } from \"@/lib/utils\";\r\n\r\ntype AvatarProps = React.ComponentProps<typeof Avatar>;\r\n\r\ninterface AvatarGroupProps extends React.ComponentProps<\"div\"> {\r\n  children: React.ReactElement<AvatarProps>[];\r\n  max?: number;\r\n}\r\n\r\nconst AvatarGroupItem = ({\r\n  children,\r\n  max,\r\n  className,\r\n  ...props\r\n}: AvatarGroupProps) => {\r\n  const totalAvatars = React.Children.count(children);\r\n  const displayedAvatars = React.Children.toArray(children)\r\n    .slice(0, max)\r\n    .reverse();\r\n  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\r\n\r\n  return (\r\n    <div\r\n      className={cn(\"flex items-center flex-row-reverse\", className)}\r\n      {...props}\r\n    >\r\n      {remainingAvatars > 0 && (\r\n        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\r\n          <AvatarFallback className='bg-muted-foreground text-white'>\r\n            +{remainingAvatars}\r\n          </AvatarFallback>\r\n        </Avatar>\r\n      )}\r\n      {displayedAvatars.map((avatar, index) => {\r\n        if (!React.isValidElement(avatar)) return null;\r\n\r\n        return (\r\n          <div key={index} className='-ml-2 hover:z-10 relative'>\r\n            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\r\n              className: \"ring-2 ring-background\",\r\n            })}\r\n          </div>\r\n        );\r\n      })}\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default function AvatarGroup() {\r\n  return (\r\n    <AvatarGroupItem>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarImage\r\n          src='http://github.com/phamhuulocforwork.png'\r\n          alt='@phamhuulocforwork'\r\n        />\r\n        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r\n        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\r\n      </Avatar>\r\n    </AvatarGroupItem>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar-hover-card",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-hover-card.tsx",
        content:
          "import { CalendarIcon } from \"lucide-react\";\r\n\r\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\nimport {\r\n  HoverCard,\r\n  HoverCardContent,\r\n  HoverCardTrigger,\r\n} from \"@/components/ui/hover-card\";\r\n\r\nexport default function AvatarHoverCard() {\r\n  return (\r\n    <HoverCard>\r\n      <HoverCardTrigger className='cursor-pointer'>\r\n        <Avatar>\r\n          <AvatarImage\r\n            src='http://github.com/phamhuulocforwork.png'\r\n            alt='@phamhuulocforwork'\r\n          />\r\n          <AvatarFallback>HL</AvatarFallback>\r\n        </Avatar>\r\n      </HoverCardTrigger>\r\n      <HoverCardContent className='w-full max-w-xs'>\r\n        <div className='flex justify-between space-x-4'>\r\n          <Avatar>\r\n            <AvatarImage\r\n              src='http://github.com/phamhuulocforwork.png'\r\n              alt='@phamhuulocforwork'\r\n            />\r\n            <AvatarFallback>HL</AvatarFallback>\r\n          </Avatar>\r\n          <div className='space-y-1'>\r\n            <h4 className='text-sm font-semibold'>@phamhuulocforwork</h4>\r\n            <p className='text-sm'>\r\n              I'm currently studying at University (I stay up late and my hair\r\n              is getting thinner and thinner. Do you think I'm bald? xD)\r\n            </p>\r\n            <div className='flex items-center pt-2'>\r\n              <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{\" \"}\r\n              <span className='text-xs text-muted-foreground'>\r\n                Joined February 2025\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </HoverCardContent>\r\n    </HoverCard>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar-shape",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-shape.tsx",
        content:
          "import { Avatar, AvatarFallback } from \"@/components/ui/avatar\";\r\n\r\nexport default function AvatarShape() {\r\n  return (\r\n    <div className='grid gap-5'>\r\n      <div className='flex items-center gap-4'>\r\n        <Avatar className='rounded-none'>\r\n          <AvatarFallback className='rounded-none bg-indigo-500 text-white'>\r\n            CN\r\n          </AvatarFallback>\r\n        </Avatar>\r\n        <Avatar className='rounded-md'>\r\n          <AvatarFallback className='rounded-lg bg-indigo-500 text-white'>\r\n            CN\r\n          </AvatarFallback>\r\n        </Avatar>\r\n        <Avatar className='rounded-full'>\r\n          <AvatarFallback className='rounded-full bg-indigo-500 text-white'>\r\n            CN\r\n          </AvatarFallback>\r\n        </Avatar>\r\n      </div>\r\n      <div className='flex items-center gap-4'>\r\n        <Avatar className='rounded-none'>\r\n          <AvatarFallback className='rounded-none bg-indigo-500/25 text-indigo-500'>\r\n            CN\r\n          </AvatarFallback>\r\n        </Avatar>\r\n        <Avatar className='rounded-md'>\r\n          <AvatarFallback className='rounded-lg bg-indigo-500/25 text-indigo-500'>\r\n            CN\r\n          </AvatarFallback>\r\n        </Avatar>\r\n        <Avatar className='rounded-full'>\r\n          <AvatarFallback className='rounded-full bg-indigo-500/25 text-indigo-500'>\r\n            CN\r\n          </AvatarFallback>\r\n        </Avatar>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar-with-ring",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-with-ring.tsx",
        content:
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\n\r\nexport default function AvatarWithRing() {\r\n  return (\r\n    <Avatar className='ring-2 ring-green-500 ring-offset-[3px] ring-offset-background'>\r\n      <AvatarImage\r\n        src='http://github.com/phamhuulocforwork.png'\r\n        alt='@phamhuulocforwork'\r\n      />\r\n      <AvatarFallback>HL</AvatarFallback>\r\n    </Avatar>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar-with-status",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-with-status.tsx",
        content:
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\n\r\nexport default function AvatarWithStatus() {\r\n  return (\r\n    <div className='flex items-center gap-3'>\r\n      {/* Online */}\r\n      <div className='relative'>\r\n        <Avatar>\r\n          <AvatarImage\r\n            src='http://github.com/phamhuulocforwork.png'\r\n            alt='@phamhuulocforwork'\r\n          />\r\n          <AvatarFallback>CN</AvatarFallback>\r\n        </Avatar>\r\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-green-500 absolute bottom-0 right-0'></div>\r\n      </div>\r\n\r\n      {/* DND */}\r\n      <div className='relative'>\r\n        <Avatar>\r\n          <AvatarImage\r\n            src='http://github.com/phamhuulocforwork.png'\r\n            alt='@phamhuulocforwork'\r\n          />\r\n          <AvatarFallback>CN</AvatarFallback>\r\n        </Avatar>\r\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-red-500 absolute bottom-0 right-0'></div>\r\n      </div>\r\n\r\n      {/* Busy */}\r\n      <div className='relative'>\r\n        <Avatar>\r\n          <AvatarImage\r\n            src='http://github.com/phamhuulocforwork.png'\r\n            alt='@phamhuulocforwork'\r\n          />\r\n          <AvatarFallback>CN</AvatarFallback>\r\n        </Avatar>\r\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-yellow-500 absolute bottom-0 right-0'></div>\r\n      </div>\r\n\r\n      {/* Offline */}\r\n      <div className='relative'>\r\n        <Avatar>\r\n          <AvatarImage\r\n            src='http://github.com/phamhuulocforwork.png'\r\n            alt='@phamhuulocforwork'\r\n          />\r\n          <AvatarFallback>CN</AvatarFallback>\r\n        </Avatar>\r\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background border-2 border-muted-foreground rounded-full bg-background absolute bottom-0 right-0'></div>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar-with-text",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/avatar/avatar-with-text.tsx",
        content:
          "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\r\n\r\nexport default function AvatarWithText() {\r\n  return (\r\n    <div className='flex gap-3'>\r\n      <Avatar>\r\n        <AvatarImage\r\n          src='http://github.com/phamhuulocforwork.png'\r\n          alt='@phamhuulocforwork'\r\n        />\r\n        <AvatarFallback>CN</AvatarFallback>\r\n      </Avatar>\r\n      <div className='flex flex-col'>\r\n        <span className='font-semibold tracking-tight'>Pham Huu Loc</span>\r\n        <span className='leading-none text-sm text-muted-foreground'>\r\n          phamhuulocforwork@gmail.com\r\n        </span>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge-default",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/badge/badge-default.tsx",
        content:
          'import { Badge } from "@/components/ui/badge";\r\n\r\nexport default function BadgeDefault() {\r\n  return <Badge>Badge</Badge>;\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge-destructive",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/badge/badge-destructive.tsx",
        content:
          "import { Badge } from \"@/components/ui/badge\";\r\n\r\nexport default function BadgeDestructive() {\r\n  return <Badge variant='destructive'>Destructive</Badge>;\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge-outline",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/badge/badge-outline.tsx",
        content:
          "import { Badge } from \"@/components/ui/badge\";\r\n\r\nexport default function BadgeOutline() {\r\n  return <Badge variant='outline'>Outline</Badge>;\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge-rounded",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/badge/badge-rounded.tsx",
        content:
          'import React from "react";\r\n\r\nimport { Badge } from "@/components/ui/badge";\r\n\r\nexport default function BadgeRounded() {\r\n  return <Badge className=\'rounded-full\'>Rounded</Badge>;\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge-secondary",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/badge/badge-secondary.tsx",
        content:
          "import { Badge } from \"@/components/ui/badge\";\r\n\r\nexport default function BadgeSecondary() {\r\n  return <Badge variant='secondary'>Secondary</Badge>;\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge-soft",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/badge/badge-soft.tsx",
        content:
          "import { Badge } from \"@/components/ui/badge\";\r\n\r\nexport default function SoftBadge() {\r\n  return (\r\n    <div className='flex flex-col gap-3 flex-wrap'>\r\n      <Badge className='bg-amber-600/10 dark:bg-amber-600/20 hover:bg-amber-600/10 text-amber-500 shadow-none rounded-full'>\r\n        <div className='h-1.5 w-1.5 rounded-full bg-amber-500 mr-2' /> In\r\n        Progress\r\n      </Badge>\r\n      <Badge className='bg-red-600/10 dark:bg-red-600/20 hover:bg-red-600/10 text-red-500 shadow-none rounded-full'>\r\n        <div className='h-1.5 w-1.5 rounded-full bg-red-500 mr-2' /> Blocked\r\n      </Badge>\r\n      <Badge className='bg-emerald-600/10 dark:bg-emerald-600/20 hover:bg-emerald-600/10 text-emerald-500 shadow-none rounded-full'>\r\n        <div className='h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2' /> Done\r\n      </Badge>\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge-status",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/badge/badge-status.tsx",
        content:
          "import { Badge } from \"@/components/ui/badge\";\r\n\r\nexport default function StatusBadge() {\r\n  return (\r\n    <div className='flex flex-col gap-3 flex-wrap'>\r\n      <Badge className='bg-amber-600/10 dark:bg-amber-600/20 hover:bg-amber-600/10 text-amber-500 border-amber-600/60 shadow-none rounded-full'>\r\n        <div className='h-1.5 w-1.5 rounded-full bg-amber-500 mr-2' /> In\r\n        Progress\r\n      </Badge>\r\n      <Badge className='bg-red-600/10 dark:bg-red-600/20 hover:bg-red-600/10 text-red-500 border-red-600/60 shadow-none rounded-full'>\r\n        <div className='h-1.5 w-1.5 rounded-full bg-red-500 mr-2' /> Blocked\r\n      </Badge>\r\n      <Badge className='bg-emerald-600/10 dark:bg-emerald-600/20 hover:bg-emerald-600/10 text-emerald-500 border-emerald-600/60 shadow-none rounded-full'>\r\n        <div className='h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2' /> Done\r\n      </Badge>\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "breadcrumb-default",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/breadcrumb/breadcrumb-default.tsx",
        content:
          "import { HomeIcon } from \"lucide-react\";\r\n\r\nimport {\r\n  Breadcrumb,\r\n  BreadcrumbItem,\r\n  BreadcrumbLink,\r\n  BreadcrumbList,\r\n  BreadcrumbPage,\r\n  BreadcrumbSeparator,\r\n} from \"@/components/ui/breadcrumb\";\r\n\r\nconst BreadcrumbDefault = () => {\r\n  return (\r\n    <Breadcrumb>\r\n      <BreadcrumbList>\r\n        <BreadcrumbItem>\r\n          <HomeIcon className='size-4' />\r\n          <BreadcrumbLink href='#'>Home</BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator />\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator />\r\n        <BreadcrumbItem>\r\n          <BreadcrumbPage>Add Document</BreadcrumbPage>\r\n        </BreadcrumbItem>\r\n      </BreadcrumbList>\r\n    </Breadcrumb>\r\n  );\r\n};\r\n\r\nexport default BreadcrumbDefault;\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "breadcrumb-slash",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/breadcrumb/breadcrumb-slash.tsx",
        content:
          "import { HomeIcon } from \"lucide-react\";\r\n\r\nimport {\r\n  Breadcrumb,\r\n  BreadcrumbItem,\r\n  BreadcrumbLink,\r\n  BreadcrumbList,\r\n  BreadcrumbPage,\r\n  BreadcrumbSeparator,\r\n} from \"@/components/ui/breadcrumb\";\r\n\r\nconst BreadcrumbSlash = () => {\r\n  return (\r\n    <Breadcrumb>\r\n      <BreadcrumbList>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href='#' className='flex items-center gap-2'>\r\n            <HomeIcon className='size-4' />\r\n            Home\r\n          </BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbPage>Add Document</BreadcrumbPage>\r\n        </BreadcrumbItem>\r\n      </BreadcrumbList>\r\n    </Breadcrumb>\r\n  );\r\n};\r\n\r\nexport default BreadcrumbSlash;\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "breadcrumb-steps",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/breadcrumb/breadcrumb-steps.tsx",
        content:
          'import { Fragment } from "react";\r\n\r\nimport { Package, ShoppingCart, Store, Truck } from "lucide-react";\r\n\r\nimport {\r\n  Breadcrumb,\r\n  BreadcrumbItem,\r\n  BreadcrumbLink,\r\n  BreadcrumbList,\r\n  BreadcrumbPage,\r\n} from "@/components/ui/breadcrumb";\r\n\r\nconst steps = [\r\n  {\r\n    label: "Store",\r\n    href: "#/store",\r\n    icon: Store,\r\n  },\r\n  {\r\n    label: "Delivery Tracking",\r\n    href: "#/delivery-tracking",\r\n    icon: Truck,\r\n  },\r\n  {\r\n    label: "Cart",\r\n    href: "#/cart",\r\n    icon: ShoppingCart,\r\n  },\r\n  {\r\n    label: "Package",\r\n    href: "#/package",\r\n    icon: Package,\r\n    active: true,\r\n  },\r\n];\r\n\r\nexport default function BreadcrumbsSteps() {\r\n  return (\r\n    <Breadcrumb>\r\n      <BreadcrumbList>\r\n        {steps.map((step, index) => (\r\n          <Fragment key={index}>\r\n            <BreadcrumbItem>\r\n              {step.active ? (\r\n                <BreadcrumbPage>\r\n                  <step.icon className=\'h-5 w-5\' />\r\n                </BreadcrumbPage>\r\n              ) : (\r\n                <BreadcrumbLink href={step.href}>\r\n                  <step.icon className=\'h-5 w-5\' />\r\n                </BreadcrumbLink>\r\n              )}\r\n            </BreadcrumbItem>\r\n            {index !== steps.length - 1 && (\r\n              <li\r\n                role=\'presentation\'\r\n                aria-hidden=\'true\'\r\n                className=\'inline-block h-[2px] w-[40px] bg-muted\'\r\n              />\r\n            )}\r\n          </Fragment>\r\n        ))}\r\n      </BreadcrumbList>\r\n    </Breadcrumb>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "breadcrumb-tab-active",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/breadcrumb/breadcrumb-tab-active.tsx",
        content:
          'import React from "react";\r\n\r\nimport { ChevronsRight } from "lucide-react";\r\n\r\nimport { Badge } from "@/components/ui/badge";\r\nimport {\r\n  Breadcrumb,\r\n  BreadcrumbItem,\r\n  BreadcrumbLink,\r\n  BreadcrumbList,\r\n  BreadcrumbPage,\r\n  BreadcrumbSeparator,\r\n} from "@/components/ui/breadcrumb";\r\n\r\nexport default function BreadcrumbTabActive() {\r\n  return (\r\n    <Breadcrumb>\r\n      <BreadcrumbList>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href=\'#\'>Home</BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator>\r\n          <ChevronsRight />\r\n        </BreadcrumbSeparator>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href=\'#/components\'>Components</BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator>\r\n          <ChevronsRight />\r\n        </BreadcrumbSeparator>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbPage>\r\n            <Badge className=\'shadow-none rounded-full\'>Breadcrumb</Badge>\r\n          </BreadcrumbPage>\r\n        </BreadcrumbItem>\r\n      </BreadcrumbList>\r\n    </Breadcrumb>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "breadcrumb-with-dropdown",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/breadcrumb/breadcrumb-with-dropdown.tsx",
        content:
          "import { ChevronDown, HomeIcon } from \"lucide-react\";\r\n\r\nimport {\r\n  Breadcrumb,\r\n  BreadcrumbItem,\r\n  BreadcrumbLink,\r\n  BreadcrumbList,\r\n  BreadcrumbPage,\r\n  BreadcrumbSeparator,\r\n} from \"@/components/ui/breadcrumb\";\r\nimport {\r\n  DropdownMenu,\r\n  DropdownMenuContent,\r\n  DropdownMenuLabel,\r\n  DropdownMenuTrigger,\r\n} from \"@/components/ui/dropdown-menu\";\r\n\r\nconst BreadcrumbWithDropdown = () => {\r\n  return (\r\n    <Breadcrumb>\r\n      <BreadcrumbList>\r\n        <BreadcrumbItem>\r\n          <HomeIcon className='size-4' />\r\n          <BreadcrumbLink href='#'>Home</BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator />\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator />\r\n        <BreadcrumbItem>\r\n          <BreadcrumbPage>\r\n            <DropdownMenu>\r\n              <DropdownMenuTrigger className='group flex items-center gap-1'>\r\n                Add Document\r\n                <ChevronDown className='size-4 transition-transform group-data-[state=open]:rotate-180' />\r\n              </DropdownMenuTrigger>\r\n              <DropdownMenuContent align='start'>\r\n                <DropdownMenuLabel>Themes</DropdownMenuLabel>\r\n                <DropdownMenuLabel>Github</DropdownMenuLabel>\r\n                <DropdownMenuLabel>Documentation</DropdownMenuLabel>\r\n              </DropdownMenuContent>\r\n            </DropdownMenu>\r\n          </BreadcrumbPage>\r\n        </BreadcrumbItem>\r\n      </BreadcrumbList>\r\n    </Breadcrumb>\r\n  );\r\n};\r\n\r\nexport default BreadcrumbWithDropdown;\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "breadcrumb-with-icon",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/breadcrumb/breadcrumb-with-icon.tsx",
        content:
          "import { File, Folder, HomeIcon } from \"lucide-react\";\r\n\r\nimport {\r\n  Breadcrumb,\r\n  BreadcrumbItem,\r\n  BreadcrumbLink,\r\n  BreadcrumbList,\r\n  BreadcrumbPage,\r\n  BreadcrumbSeparator,\r\n} from \"@/components/ui/breadcrumb\";\r\n\r\nconst BreadcrumbWithIcon = () => {\r\n  return (\r\n    <Breadcrumb>\r\n      <BreadcrumbList>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href='#' className='flex items-center gap-2'>\r\n            <HomeIcon className='size-4' />\r\n            Home\r\n          </BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbLink href='#' className='flex items-center gap-2'>\r\n            <Folder className='size-4' />\r\n            Documents\r\n          </BreadcrumbLink>\r\n        </BreadcrumbItem>\r\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\r\n        <BreadcrumbItem>\r\n          <BreadcrumbPage className='flex items-center gap-2'>\r\n            <File className='size-4' />\r\n            Add Document\r\n          </BreadcrumbPage>\r\n        </BreadcrumbItem>\r\n      </BreadcrumbList>\r\n    </Breadcrumb>\r\n  );\r\n};\r\n\r\nexport default BreadcrumbWithIcon;\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "carousel-default",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/carousel/carousel-default.tsx",
        content:
          "import * as React from \"react\";\r\n\r\nimport { Card, CardContent } from \"@/components/ui/card\";\r\nimport {\r\n  Carousel,\r\n  CarouselContent,\r\n  CarouselItem,\r\n  CarouselNext,\r\n  CarouselPrevious,\r\n} from \"@/components/ui/carousel\";\r\n\r\nexport default function CarouselDefault() {\r\n  return (\r\n    <Carousel className='w-full max-w-xs'>\r\n      <CarouselContent>\r\n        {Array.from({ length: 5 }).map((_, index) => (\r\n          <CarouselItem key={index}>\r\n            <div className='p-1'>\r\n              <Card>\r\n                <CardContent className='flex aspect-video items-center justify-center p-6'>\r\n                  <span className='text-4xl font-semibold'>{index + 1}</span>\r\n                </CardContent>\r\n              </Card>\r\n            </div>\r\n          </CarouselItem>\r\n        ))}\r\n      </CarouselContent>\r\n      <CarouselPrevious />\r\n      <CarouselNext />\r\n    </Carousel>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "carousel-multiple-slides",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/carousel/carousel-multiple-slides.tsx",
        content:
          "import React from \"react\";\r\n\r\nimport { Card, CardContent } from \"@/components/ui/card\";\r\nimport {\r\n  Carousel,\r\n  CarouselContent,\r\n  CarouselItem,\r\n  CarouselNext,\r\n  CarouselPrevious,\r\n} from \"@/components/ui/carousel\";\r\n\r\nexport default function CarouselWithMultipleSlides() {\r\n  return (\r\n    <Carousel\r\n      opts={{\r\n        align: \"start\",\r\n      }}\r\n      className='w-full max-w-sm'\r\n    >\r\n      <CarouselContent>\r\n        {Array.from({ length: 5 }).map((_, index) => (\r\n          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>\r\n            <div className='p-1'>\r\n              <Card>\r\n                <CardContent className='flex aspect-square items-center justify-center p-6'>\r\n                  <span className='text-3xl font-semibold'>{index + 1}</span>\r\n                </CardContent>\r\n              </Card>\r\n            </div>\r\n          </CarouselItem>\r\n        ))}\r\n      </CarouselContent>\r\n      <CarouselPrevious />\r\n      <CarouselNext />\r\n    </Carousel>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "carousel-slide-status-2",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/carousel/carousel-slide-status-2.tsx",
        content:
          "\"use client\";\r\n\r\nimport * as React from \"react\";\r\n\r\nimport { Card, CardContent } from \"@/components/ui/card\";\r\nimport {\r\n  Carousel,\r\n  type CarouselApi,\r\n  CarouselContent,\r\n  CarouselItem,\r\n  CarouselNext,\r\n  CarouselPrevious,\r\n} from \"@/components/ui/carousel\";\r\n\r\nexport default function CarouselSlideStatus2() {\r\n  const [api, setApi] = React.useState<CarouselApi>();\r\n  const [current, setCurrent] = React.useState(0);\r\n  const [count, setCount] = React.useState(0);\r\n\r\n  React.useEffect(() => {\r\n    if (!api) {\r\n      return;\r\n    }\r\n\r\n    setCount(api.scrollSnapList().length);\r\n    setCurrent(api.selectedScrollSnap() + 1);\r\n\r\n    api.on(\"select\", () => {\r\n      setCurrent(api.selectedScrollSnap() + 1);\r\n    });\r\n  }, [api]);\r\n\r\n  return (\r\n    <div className='mx-auto max-w-xs'>\r\n      <Carousel setApi={setApi} className='w-full max-w-xs'>\r\n        <CarouselContent>\r\n          {Array.from({ length: 5 }).map((_, index) => (\r\n            <CarouselItem key={index}>\r\n              <Card>\r\n                <CardContent className='flex aspect-video items-center justify-center p-6'>\r\n                  <span className='text-4xl font-semibold'>{index + 1}</span>\r\n                </CardContent>\r\n              </Card>\r\n            </CarouselItem>\r\n          ))}\r\n        </CarouselContent>\r\n        <CarouselPrevious />\r\n        <CarouselNext />\r\n      </Carousel>\r\n      <div className='mt-4 text-center text-sm text-muted-foreground'>\r\n        {current} / {count}\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "carousel-slide-status",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/carousel/carousel-slide-status.tsx",
        content:
          "\"use client\";\r\n\r\nimport * as React from \"react\";\r\n\r\nimport { Card, CardContent } from \"@/components/ui/card\";\r\nimport {\r\n  Carousel,\r\n  type CarouselApi,\r\n  CarouselContent,\r\n  CarouselItem,\r\n  CarouselNext,\r\n  CarouselPrevious,\r\n} from \"@/components/ui/carousel\";\r\n\r\nexport default function CarouselSlideStatus() {\r\n  const [api, setApi] = React.useState<CarouselApi>();\r\n  const [current, setCurrent] = React.useState(0);\r\n  const [count, setCount] = React.useState(0);\r\n\r\n  React.useEffect(() => {\r\n    if (!api) {\r\n      return;\r\n    }\r\n\r\n    setCount(api.scrollSnapList().length);\r\n    setCurrent(api.selectedScrollSnap() + 1);\r\n\r\n    api.on(\"select\", () => {\r\n      setCurrent(api.selectedScrollSnap() + 1);\r\n    });\r\n  }, [api]);\r\n\r\n  return (\r\n    <div className='mx-auto max-w-xs'>\r\n      <Carousel setApi={setApi} className='w-full max-w-xs'>\r\n        <CarouselContent>\r\n          {Array.from({ length: 5 }).map((_, index) => (\r\n            <CarouselItem key={index}>\r\n              <Card>\r\n                <CardContent className='flex aspect-video items-center justify-center p-6'>\r\n                  <span className='text-4xl font-semibold'>{index + 1}</span>\r\n                </CardContent>\r\n              </Card>\r\n            </CarouselItem>\r\n          ))}\r\n        </CarouselContent>\r\n        <CarouselPrevious />\r\n        <CarouselNext />\r\n      </Carousel>\r\n      <div className='mt-4 text-center text-sm text-muted-foreground'>\r\n        Slide {current} of {count}\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "carousel-vertical",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/carousel/carousel-vertical.tsx",
        content:
          "import * as React from \"react\";\r\n\r\nimport { Card, CardContent } from \"@/components/ui/card\";\r\nimport {\r\n  Carousel,\r\n  CarouselContent,\r\n  CarouselItem,\r\n  CarouselNext,\r\n  CarouselPrevious,\r\n} from \"@/components/ui/carousel\";\r\n\r\nexport default function CarouselVertical() {\r\n  return (\r\n    <Carousel\r\n      opts={{\r\n        align: \"start\",\r\n      }}\r\n      orientation='vertical'\r\n      className='w-full max-w-xs my-14'\r\n    >\r\n      <CarouselContent className='-mt-1 h-[200px]'>\r\n        {Array.from({ length: 5 }).map((_, index) => (\r\n          <CarouselItem key={index} className='pt-1 md:basis-1/2'>\r\n            <div className='p-1'>\r\n              <Card>\r\n                <CardContent className='flex items-center justify-center p-6'>\r\n                  <span className='text-3xl font-semibold'>{index + 1}</span>\r\n                </CardContent>\r\n              </Card>\r\n            </div>\r\n          </CarouselItem>\r\n        ))}\r\n      </CarouselContent>\r\n      <CarouselPrevious />\r\n      <CarouselNext />\r\n    </Carousel>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "carousel-with-footer",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/carousel/carousel-with-footer.tsx",
        content:
          '"use client";\r\n\r\nimport * as React from "react";\r\n\r\nimport { Card, CardContent } from "@/components/ui/card";\r\nimport {\r\n  Carousel,\r\n  type CarouselApi,\r\n  CarouselContent,\r\n  CarouselItem,\r\n  CarouselNext,\r\n  CarouselPrevious,\r\n} from "@/components/ui/carousel";\r\n\r\nimport { cn } from "@/lib/utils";\r\n\r\nexport default function CarouselWithFooter() {\r\n  const [api, setApi] = React.useState<CarouselApi>();\r\n  const [current, setCurrent] = React.useState(0);\r\n  const [count, setCount] = React.useState(0);\r\n\r\n  React.useEffect(() => {\r\n    if (!api) {\r\n      return;\r\n    }\r\n\r\n    setCount(api.scrollSnapList().length);\r\n    setCurrent(api.selectedScrollSnap() + 1);\r\n\r\n    api.on("select", () => {\r\n      setCurrent(api.selectedScrollSnap() + 1);\r\n    });\r\n  }, [api]);\r\n\r\n  return (\r\n    <div className=\'mx-auto max-w-xs py-4\'>\r\n      <Carousel setApi={setApi} className=\'w-full max-w-xs\'>\r\n        <CarouselContent>\r\n          {Array.from({ length: 5 }).map((_, index) => (\r\n            <CarouselItem key={index}>\r\n              <Card>\r\n                <CardContent className=\'flex aspect-video items-center justify-center p-6\'>\r\n                  <span className=\'text-4xl font-semibold\'>{index + 1}</span>\r\n                </CardContent>\r\n              </Card>\r\n            </CarouselItem>\r\n          ))}\r\n        </CarouselContent>\r\n        <CarouselPrevious className=\'top-[calc(100%+0.5rem)] translate-y-0 left-0\' />\r\n        <CarouselNext className=\'top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full\' />\r\n      </Carousel>\r\n      <div className=\'mt-4 flex items-center justify-end gap-2\'>\r\n        {Array.from({ length: count }).map((_, index) => (\r\n          <button\r\n            key={index}\r\n            onClick={() => api?.scrollTo(index)}\r\n            className={cn("h-3.5 w-3.5 rounded-full border-2", {\r\n              "border-primary": current === index + 1,\r\n            })}\r\n          />\r\n        ))}\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "carousel-with-pagination",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/carousel/carousel-with-pagination.tsx",
        content:
          '"use client";\r\n\r\nimport * as React from "react";\r\n\r\nimport { Card, CardContent } from "@/components/ui/card";\r\nimport {\r\n  Carousel,\r\n  type CarouselApi,\r\n  CarouselContent,\r\n  CarouselItem,\r\n  CarouselNext,\r\n  CarouselPrevious,\r\n} from "@/components/ui/carousel";\r\n\r\nimport { cn } from "@/lib/utils";\r\n\r\nexport default function CarouselWithPagination() {\r\n  const [api, setApi] = React.useState<CarouselApi>();\r\n  const [current, setCurrent] = React.useState(0);\r\n  const [count, setCount] = React.useState(0);\r\n\r\n  React.useEffect(() => {\r\n    if (!api) {\r\n      return;\r\n    }\r\n\r\n    setCount(api.scrollSnapList().length);\r\n    setCurrent(api.selectedScrollSnap() + 1);\r\n\r\n    api.on("select", () => {\r\n      setCurrent(api.selectedScrollSnap() + 1);\r\n    });\r\n  }, [api]);\r\n\r\n  return (\r\n    <div className=\'mx-auto max-w-xs\'>\r\n      <Carousel setApi={setApi} className=\'w-full max-w-xs\'>\r\n        <CarouselContent>\r\n          {Array.from({ length: 5 }).map((_, index) => (\r\n            <CarouselItem key={index}>\r\n              <Card>\r\n                <CardContent className=\'flex aspect-video items-center justify-center p-6\'>\r\n                  <span className=\'text-4xl font-semibold\'>{index + 1}</span>\r\n                </CardContent>\r\n              </Card>\r\n            </CarouselItem>\r\n          ))}\r\n        </CarouselContent>\r\n        <CarouselPrevious />\r\n        <CarouselNext />\r\n      </Carousel>\r\n      <div className=\'mt-4 flex items-center justify-center gap-2\'>\r\n        {Array.from({ length: count }).map((_, index) => (\r\n          <button\r\n            key={index}\r\n            onClick={() => api?.scrollTo(index)}\r\n            className={cn("h-3.5 w-3.5 rounded-full border-2", {\r\n              "border-primary": current === index + 1,\r\n            })}\r\n          />\r\n        ))}\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "carousel-with-progress",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/carousel/carousel-with-progress.tsx",
        content:
          "\"use client\";\r\n\r\nimport * as React from \"react\";\r\n\r\nimport { Card, CardContent } from \"@/components/ui/card\";\r\nimport {\r\n  Carousel,\r\n  type CarouselApi,\r\n  CarouselContent,\r\n  CarouselItem,\r\n  CarouselNext,\r\n  CarouselPrevious,\r\n} from \"@/components/ui/carousel\";\r\nimport { Progress } from \"@/components/ui/progress\";\r\n\r\nexport default function CarouselWithProgress() {\r\n  const [api, setApi] = React.useState<CarouselApi>();\r\n  const [current, setCurrent] = React.useState(0);\r\n  const [count, setCount] = React.useState(0);\r\n\r\n  const progress = (current * 100) / count;\r\n\r\n  React.useEffect(() => {\r\n    if (!api) {\r\n      return;\r\n    }\r\n\r\n    setCount(api.scrollSnapList().length);\r\n    setCurrent(api.selectedScrollSnap() + 1);\r\n\r\n    api.on(\"select\", () => {\r\n      setCurrent(api.selectedScrollSnap() + 1);\r\n    });\r\n  }, [api]);\r\n\r\n  return (\r\n    <div className='mx-auto max-w-xs py-4'>\r\n      <Carousel setApi={setApi} className='w-full max-w-xs'>\r\n        <CarouselContent>\r\n          {Array.from({ length: 5 }).map((_, index) => (\r\n            <CarouselItem key={index}>\r\n              <Card>\r\n                <CardContent className='flex aspect-video items-center justify-center p-6'>\r\n                  <span className='text-4xl font-semibold'>{index + 1}</span>\r\n                </CardContent>\r\n              </Card>\r\n            </CarouselItem>\r\n          ))}\r\n        </CarouselContent>\r\n        <CarouselPrevious className='top-[calc(100%+0.5rem)] translate-y-0 left-0' />\r\n        <CarouselNext className='top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full' />\r\n      </Carousel>\r\n      <Progress value={progress} className='mt-4 w-24 ml-auto' />\r\n    </div>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "collapsible-default",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/collapsible/collapsible-default.tsx",
        content:
          "\"use client\";\r\n\r\nimport * as React from \"react\";\r\n\r\nimport { ChevronsUpDown } from \"lucide-react\";\r\n\r\nimport { Button } from \"@/components/ui/button\";\r\nimport {\r\n  Collapsible,\r\n  CollapsibleContent,\r\n  CollapsibleTrigger,\r\n} from \"@/components/ui/collapsible\";\r\n\r\nexport default function CollapsibleDefault() {\r\n  const [isOpen, setIsOpen] = React.useState(false);\r\n\r\n  return (\r\n    <Collapsible\r\n      open={isOpen}\r\n      onOpenChange={setIsOpen}\r\n      className='w-[350px] space-y-2'\r\n    >\r\n      <div className='flex items-center justify-between space-x-4 px-4'>\r\n        <h4 className='text-sm font-semibold'>\r\n          @peduarte starred 3 repositories\r\n        </h4>\r\n        <CollapsibleTrigger asChild>\r\n          <Button variant='ghost' size='sm'>\r\n            <ChevronsUpDown className='h-4 w-4' />\r\n            <span className='sr-only'>Toggle</span>\r\n          </Button>\r\n        </CollapsibleTrigger>\r\n      </div>\r\n      <div className='rounded-md border px-4 py-2 font-mono text-sm shadow-sm'>\r\n        @radix-ui/primitives\r\n      </div>\r\n      <CollapsibleContent className='space-y-2'>\r\n        <div className='rounded-md border px-4 py-2 font-mono text-sm shadow-sm'>\r\n          @radix-ui/colors\r\n        </div>\r\n        <div className='rounded-md border px-4 py-2 font-mono text-sm shadow-sm'>\r\n          @stitches/react\r\n        </div>\r\n      </CollapsibleContent>\r\n    </Collapsible>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "collapsible-file-tree",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/collapsible/collapsible-file-tree.tsx",
        content:
          '"use client";\r\n\r\nimport * as React from "react";\r\n\r\nimport { ChevronRight, FileIcon, FolderIcon } from "lucide-react";\r\n\r\nimport {\r\n  Collapsible,\r\n  CollapsibleContent,\r\n  CollapsibleTrigger,\r\n} from "@/components/ui/collapsible";\r\n\r\ninterface FileTreeItem {\r\n  name: string;\r\n  type: "folder" | "file";\r\n  children?: FileTreeItem[];\r\n}\r\n\r\nconst fileTree: FileTreeItem[] = [\r\n  {\r\n    name: "src",\r\n    type: "folder",\r\n    children: [\r\n      {\r\n        name: "components",\r\n        type: "folder",\r\n        children: [\r\n          { name: "button.tsx", type: "file" },\r\n          { name: "input.tsx", type: "file" },\r\n        ],\r\n      },\r\n    ],\r\n  },\r\n  {\r\n    name: "public",\r\n    type: "folder",\r\n    children: [\r\n      { name: "favicon.ico", type: "file" },\r\n      { name: "index.html", type: "file" },\r\n    ],\r\n  },\r\n  {\r\n    name: "package.json",\r\n    type: "file",\r\n  },\r\n];\r\n\r\nexport default function FileTreeCollapsible() {\r\n  return (\r\n    <div className=\'w-[350px] bg-accent p-4 rounded-lg\'>\r\n      <div className=\'w-full -ml-4\'>\r\n        {fileTree.map((treeItem) => (\r\n          <FileTreeItem key={treeItem.name} {...treeItem} />\r\n        ))}\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n\r\nconst FileTreeItem = ({ name, type, children }: FileTreeItem) => {\r\n  if (type === "file") {\r\n    return (\r\n      <div className=\'flex items-center gap-2 pl-10 py-1\'>\r\n        <FileIcon className=\'h-4 w-4\' /> {name}\r\n      </div>\r\n    );\r\n  }\r\n\r\n  return (\r\n    <Collapsible className=\'pl-4\'>\r\n      <CollapsibleTrigger className=\'w-full group flex items-center gap-2 py-1\'>\r\n        <ChevronRight className=\'h-4 w-4 group-data-[state=open]:rotate-90 transition-transform\' />\r\n        <span className=\'flex items-center gap-2\'>\r\n          <FolderIcon className=\'h-4 w-4 fill-current\' /> {name}\r\n        </span>\r\n      </CollapsibleTrigger>\r\n      <CollapsibleContent>\r\n        {children?.map((child) => <FileTreeItem key={child.name} {...child} />)}\r\n      </CollapsibleContent>\r\n    </Collapsible>\r\n  );\r\n};\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "collapsible-show-more",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/collapsible/collapsible-show-more.tsx",
        content:
          "\"use client\";\r\n\r\nimport * as React from \"react\";\r\n\r\nimport { ChevronDown, ChevronUp } from \"lucide-react\";\r\n\r\nimport { Button } from \"@/components/ui/button\";\r\nimport {\r\n  Collapsible,\r\n  CollapsibleContent,\r\n  CollapsibleTrigger,\r\n} from \"@/components/ui/collapsible\";\r\n\r\nexport default function ShowMoreCollapsible() {\r\n  const [isOpen, setIsOpen] = React.useState(false);\r\n\r\n  return (\r\n    <Collapsible\r\n      open={isOpen}\r\n      onOpenChange={setIsOpen}\r\n      className='w-full max-w-xs space-y-2'\r\n    >\r\n      {Array.from({ length: 2 }).map((_, index) => (\r\n        <div key={index} className='flex items-center gap-2'>\r\n          <div className='h-10 w-10 shrink-0 rounded-full bg-accent' />\r\n          <div className='w-full flex flex-col gap-1.5'>\r\n            <div className='h-2.5 w-[40%] rounded-lg bg-accent' />\r\n            <div className='h-2.5 w-full rounded-lg bg-accent' />\r\n          </div>\r\n        </div>\r\n      ))}\r\n      <CollapsibleContent className='space-y-2'>\r\n        {Array.from({ length: 3 }).map((_, index) => (\r\n          <div key={index + 2} className='flex items-center gap-2'>\r\n            <div className='h-10 w-10 shrink-0 rounded-full bg-accent' />\r\n            <div className='w-full flex flex-col gap-1.5'>\r\n              <div className='h-2.5 w-[40%] rounded-lg bg-accent' />\r\n              <div className='h-2.5 w-full rounded-lg bg-accent' />\r\n            </div>\r\n          </div>\r\n        ))}\r\n      </CollapsibleContent>\r\n      <CollapsibleTrigger asChild>\r\n        <Button\r\n          variant='outline'\r\n          size='sm'\r\n          className='!mt-4 data-[state=open]:hidden'\r\n        >\r\n          Show more <ChevronDown />\r\n        </Button>\r\n      </CollapsibleTrigger>\r\n      <CollapsibleTrigger asChild>\r\n        <Button\r\n          variant='outline'\r\n          size='sm'\r\n          className='!mt-4 data-[state=open]:inline-flex hidden'\r\n        >\r\n          Show less <ChevronUp />\r\n        </Button>\r\n      </CollapsibleTrigger>\r\n    </Collapsible>\r\n  );\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "spinner-circle",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/spinner/spinner-circle.tsx",
        content:
          "import { Loader2Icon } from \"lucide-react\";\r\n\r\nexport default function SpinnerCircle() {\r\n  return <Loader2Icon className='animate-spin' />;\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "spinner-default",
    type: "registry:ui",
    files: [
      {
        path: "registry/default/snippets/spinner/spinner-default.tsx",
        content:
          "import { LoaderIcon } from \"lucide-react\";\r\n\r\nexport default function SpinnerDefault() {\r\n  return <LoaderIcon className='animate-spin' />;\r\n}\r\n",
        type: "registry:ui",
      },
    ],
  },
];
