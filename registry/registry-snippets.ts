import type { Registry } from "@/registry/schema";

export const snippets: Registry = [
  {
    name: "accordion-box-contained",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-box-contained.tsx",
        content:
          'import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion";\n\nconst items = [\n  {\n    title: "Is it accessible?",\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\n  },\n  {\n    title: "Is it styled?",\n    content:\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\n  },\n  {\n    title: "Is it animated?",\n    content:\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\n  },\n];\n\nexport default function AccordionBoxContained() {\n  return (\n    <Accordion type=\'single\' collapsible className=\'max-w-lg my-4 w-full\'>\n      {items.map(({ title, content }, index) => (\n        <AccordionItem\n          key={index}\n          value={`item-${index}`}\n          className=\'last:border-none first:rounded-t-md last:rounded-b-md px-4 bg-muted\'\n        >\n          <AccordionTrigger>{title}</AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n',
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "accordion-box",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-box.tsx",
        content:
          'import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion";\n\nconst items = [\n  {\n    title: "Is it accessible?",\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\n  },\n  {\n    title: "Is it styled?",\n    content:\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\n  },\n  {\n    title: "Is it animated?",\n    content:\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\n  },\n];\n\nexport default function AccordionBox() {\n  return (\n    <Accordion type=\'single\' collapsible className=\'max-w-lg my-4 w-full\'>\n      {items.map(({ title, content }, index) => (\n        <AccordionItem\n          key={index}\n          value={`item-${index}`}\n          className=\'border border-b-0 last:border-b first:rounded-t-md last:rounded-b-md px-4\'\n        >\n          <AccordionTrigger>{title}</AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n',
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "accordion-contained",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-contained.tsx",
        content:
          'import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion";\n\nconst items = [\n  {\n    title: "Is it accessible?",\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\n  },\n  {\n    title: "Is it styled?",\n    content:\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\n  },\n  {\n    title: "Is it animated?",\n    content:\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\n  },\n];\n\nexport default function AccordionContained() {\n  return (\n    <Accordion\n      type=\'single\'\n      collapsible\n      className=\'max-w-lg my-4 w-full space-y-2\'\n    >\n      {items.map(({ title, content }, index) => (\n        <AccordionItem\n          key={index}\n          value={`item-${index}`}\n          className=\'border-none rounded-md px-4 bg-secondary\'\n        >\n          <AccordionTrigger>{title}</AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n',
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "accordion-default",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-default.tsx",
        content:
          'import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion";\n\nconst items = [\n  {\n    title: "Is it accessible?",\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\n  },\n  {\n    title: "Is it styled?",\n    content:\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\n  },\n  {\n    title: "Is it animated?",\n    content:\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\n  },\n];\n\nexport default function AccordionDefaut() {\n  return (\n    <Accordion type=\'single\' collapsible className=\'max-w-lg my-4 w-full\'>\n      {items.map(({ title, content }, index) => (\n        <AccordionItem key={index} value={`item-${index}`}>\n          <AccordionTrigger>{title}</AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n',
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "accordion-disabled-item",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-disabled-item.tsx",
        content:
          'import { Contrast, Palette, Zap } from "lucide-react";\n\nimport {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion";\n\nimport { cn } from "@/lib/utils";\n\nconst items = [\n  {\n    title: "Is it accessible?",\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\n    icon: Contrast,\n  },\n  {\n    title: "Is it styled?",\n    content:\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\n    icon: Palette,\n    disabled: true,\n  },\n  {\n    title: "Is it animated?",\n    content:\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\n    icon: Zap,\n  },\n];\n\nexport default function AccordionItemDisabled() {\n  return (\n    <Accordion\n      defaultValue=\'item-0\'\n      type=\'single\'\n      collapsible\n      className=\'max-w-lg my-4 w-full\'\n    >\n      {items.map(({ title, content, icon: Icon, disabled }, index) => (\n        <AccordionItem key={index} value={`item-${index}`}>\n          <AccordionTrigger\n            disabled={disabled}\n            className={cn({\n              "opacity-50": disabled,\n            })}\n          >\n            <div className=\'flex items-start gap-3\'>\n              <Icon />\n              {title}\n            </div>\n          </AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n',
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "accordion-expand-icon",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-expand-icon.tsx",
        content:
          'import * as AccordionPrimitive from "@radix-ui/react-accordion";\nimport { Plus } from "lucide-react";\n\nimport {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n} from "@/components/ui/accordion";\n\nconst items = [\n  {\n    title: "Is it accessible?",\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\n  },\n  {\n    title: "Is it styled?",\n    content:\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\n  },\n  {\n    title: "Is it animated?",\n    content:\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\n  },\n];\n\nexport default function AccordionDefaultOpen() {\n  return (\n    <Accordion\n      defaultValue=\'item-0\'\n      type=\'single\'\n      collapsible\n      className=\'max-w-lg my-4 w-full\'\n    >\n      {items.map(({ title, content }, index) => (\n        <AccordionItem key={index} value={`item-${index}`}>\n          <AccordionPrimitive.Header className=\'flex\'>\n            <AccordionPrimitive.Trigger className=\'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45\'>\n              {title}\n              <Plus className=\'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200\' />\n            </AccordionPrimitive.Trigger>\n          </AccordionPrimitive.Header>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n',
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "accordion-highlight-active-item",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-highlight-active-item.tsx",
        content:
          'import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion";\n\nconst items = [\n  {\n    title: "Is it accessible?",\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\n  },\n  {\n    title: "Is it styled?",\n    content:\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\n  },\n  {\n    title: "Is it animated?",\n    content:\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\n  },\n];\n\nexport default function AccordionHighlightActiveItem() {\n  return (\n    <Accordion\n      defaultValue=\'item-0\'\n      type=\'single\'\n      collapsible\n      className=\'max-w-lg my-4 w-full\'\n    >\n      {items.map(({ title, content }, index) => (\n        <AccordionItem\n          key={index}\n          value={`item-${index}`}\n          className=\'data-[state=open]:border-b-2 data-[state=open]:border-indigo-600 dark:data-[state=open]:border-indigo-500\'\n        >\n          <AccordionTrigger className=\'data-[state=open]:text-indigo-600 dark:data-[state=open]:text-indigo-500\'>\n            {title}\n          </AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n',
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "accordion-media-content",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-media-content.tsx",
        content:
          "import { Contrast, Palette, Zap } from \"lucide-react\";\n\nimport {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from \"@/components/ui/accordion\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n    icon: Contrast,\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n    icon: Palette,\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n    icon: Zap,\n  },\n];\n\nexport default function AccordionMediaContent() {\n  return (\n    <Accordion\n      defaultValue='item-0'\n      type='single'\n      collapsible\n      className='max-w-lg my-4 w-full'\n    >\n      {items.map(({ title, content, icon: Icon }, index) => (\n        <AccordionItem key={index} value={`item-${index}`}>\n          <AccordionTrigger>\n            <div className='flex items-start gap-3'>\n              <Icon />\n              {title}\n            </div>\n          </AccordionTrigger>\n          <AccordionContent>\n            {content}\n            <div className='mt-4 w-full bg-muted rounded-xl'>\n              <img\n                src='/svgs/placeholder.svg'\n                alt='placeholder'\n                className='object-coveraspect-[18/9]'\n              />\n            </div>\n          </AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "accordion-multiple-expanded-at-a-time",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-multiple-expanded-at-a-time.tsx",
        content:
          'import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion";\n\nconst items = [\n  {\n    title: "Is it accessible?",\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\n  },\n  {\n    title: "Is it styled?",\n    content:\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\n  },\n  {\n    title: "Is it animated?",\n    content:\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\n  },\n];\n\nexport default function AccordionMultipleOpen() {\n  return (\n    <Accordion\n      defaultValue={["item-0", "item-1"]}\n      type=\'multiple\'\n      className=\'max-w-lg my-4 w-full\'\n    >\n      {items.map(({ title, content }, index) => (\n        <AccordionItem key={index} value={`item-${index}`}>\n          <AccordionTrigger>{title}</AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n',
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "accordion-outline",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-outline.tsx",
        content:
          'import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion";\n\nconst items = [\n  {\n    title: "Is it accessible?",\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\n  },\n  {\n    title: "Is it styled?",\n    content:\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\n  },\n  {\n    title: "Is it animated?",\n    content:\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\n  },\n];\n\nexport default function AccordionOutline() {\n  return (\n    <Accordion\n      type=\'single\'\n      collapsible\n      className=\'max-w-lg my-4 w-full space-y-2\'\n    >\n      {items.map(({ title, content }, index) => (\n        <AccordionItem\n          key={index}\n          value={`item-${index}`}\n          className=\'border rounded-md px-4\'\n        >\n          <AccordionTrigger>{title}</AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n',
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "accordion-tabs",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-tabs.tsx",
        content:
          'import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion";\n\nconst items = [\n  {\n    title: "Is it accessible?",\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\n  },\n  {\n    title: "Is it styled?",\n    content:\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\n  },\n  {\n    title: "Is it animated?",\n    content:\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\n  },\n];\n\nexport default function AccordionTabs() {\n  return (\n    <Accordion\n      type=\'single\'\n      collapsible\n      defaultValue=\'item-0\'\n      className=\'max-w-lg my-4 w-full space-y-2\'\n    >\n      {items.map(({ title, content }, index) => (\n        <AccordionItem\n          key={index}\n          value={`item-${index}`}\n          className=\'border-none rounded-md px-4 data-[state=open]:bg-secondary\'\n        >\n          <AccordionTrigger className=\'data-[state=closed]:py-2\'>\n            {title}\n          </AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n',
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "accordion-with-icon",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/accordion/accordion-with-icon.tsx",
        content:
          'import { Contrast, Palette, Zap } from "lucide-react";\n\nimport {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion";\n\nconst items = [\n  {\n    title: "Is it accessible?",\n    content: "Yes. It adheres to the WAI-ARIA design pattern.",\n    icon: Contrast,\n  },\n  {\n    title: "Is it styled?",\n    content:\n      "Yes. It comes with default styles that matches the other components\' aesthetic.",\n    icon: Palette,\n  },\n  {\n    title: "Is it animated?",\n    content:\n      "Yes. It\'s animated by default, but you can disable it if you prefer.",\n    icon: Zap,\n  },\n];\n\nexport default function AccordionWithIcon() {\n  return (\n    <Accordion\n      defaultValue=\'item-0\'\n      type=\'single\'\n      collapsible\n      className=\'max-w-lg my-4 w-full\'\n    >\n      {items.map(({ title, content, icon: Icon }, index) => (\n        <AccordionItem key={index} value={`item-${index}`}>\n          <AccordionTrigger>\n            <div className=\'flex items-start gap-3\'>\n              <Icon />\n              {title}\n            </div>\n          </AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n',
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-default",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alert/alert-default.tsx",
        content:
          'import { CircleFadingArrowUpIcon } from "lucide-react";\n\nimport { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";\n\nexport default function AlertDemo() {\n  return (\n    <Alert>\n      <CircleFadingArrowUpIcon className=\'h-4 w-4\' />\n      <AlertTitle>System Notification</AlertTitle>\n      <AlertDescription>\n        Your application has been updated to the latest version.\n      </AlertDescription>\n    </Alert>\n  );\n}\n',
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
          "import { OctagonAlertIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function DestructiveAlertDemo() {\n  return (\n    <Alert variant='destructive'>\n      <OctagonAlertIcon className='h-4 w-4' />\n      <AlertTitle>Critical Error</AlertTitle>\n      <AlertDescription>\n        Failed to save changes. Your data may be lost or corrupted.\n      </AlertDescription>\n    </Alert>\n  );\n}\n",
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
          "import { InfoIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function AlertInfoDemo() {\n  return (\n    <Alert className='border-cyan-600/50 text-cyan-600 dark:border-cyan-600 [&>svg]:text-cyan-600'>\n      <InfoIcon className='h-4 w-4' />\n      <AlertTitle>Pro Tip</AlertTitle>\n      <AlertDescription>\n        You can customize your workspace by accessing the settings panel.\n      </AlertDescription>\n    </Alert>\n  );\n}\n",
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
          "import {\n  CircleFadingArrowUpIcon,\n  OctagonAlert,\n  ShieldAlert,\n} from \"lucide-react\";\n\nimport { Alert, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function AlertCalloutDemo() {\n  return (\n    <div className='w-full space-y-4'>\n      <Alert className='bg-emerald-500/10 dark:bg-emerald-600/30 border-none'>\n        <CircleFadingArrowUpIcon className='h-4 w-4 !text-emerald-500' />\n        <AlertTitle>\n          Payment processed successfully. Your order is confirmed.\n        </AlertTitle>\n      </Alert>\n      <Alert className='bg-blue-500/10 dark:bg-blue-600/30 border-none'>\n        <CircleFadingArrowUpIcon className='h-4 w-4 !text-blue-500' />\n        <AlertTitle>\n          Feature preview available. Try our new dashboard layout.\n        </AlertTitle>\n      </Alert>\n      <Alert className='bg-amber-500/10 dark:bg-amber-600/30 border-none'>\n        <ShieldAlert className='h-4 w-4 !text-amber-500' />\n        <AlertTitle>\n          Unusual account activity detected. Verify recent logins.\n        </AlertTitle>\n      </Alert>\n      <Alert className='bg-destructive/10 dark:bg-destructive/20 border-none'>\n        <OctagonAlert className='h-4 w-4 !text-destructive' />\n        <AlertTitle>\n          Connection lost. Service unavailable until connectivity is restored.\n        </AlertTitle>\n      </Alert>\n    </div>\n  );\n}\n",
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
          "import { CircleCheckBigIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function AlertSuccessDemo() {\n  return (\n    <Alert className='border-emerald-600/50 text-emerald-600 dark:border-emerald-600 [&>svg]:text-emerald-600'>\n      <CircleCheckBigIcon className='h-4 w-4' />\n      <AlertTitle>Account Verified</AlertTitle>\n      <AlertDescription>\n        Your account has been successfully verified and is now ready to use\n      </AlertDescription>\n    </Alert>\n  );\n}\n",
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
          "import { TriangleAlertIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function AlertWarningDemo() {\n  return (\n    <Alert className='border-amber-500/50 text-amber-500 dark:border-amber-500 [&>svg]:text-amber-500'>\n      <TriangleAlertIcon className='h-4 w-4' />\n      <AlertTitle>Low Storage Space</AlertTitle>\n      <AlertDescription>\n        Your device is running low on storage. Please free up space to avoid\n        performance issues.\n      </AlertDescription>\n    </Alert>\n  );\n}\n",
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
          "\"use client\";\n\nimport { useState } from \"react\";\n\nimport { CircleFadingArrowUpIcon, XIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\nimport { Button } from \"@/components/ui/button\";\n\nexport default function AlertWithActionsDemo() {\n  const [isAlertVisible, setIsAlertVisible] = useState(true);\n\n  const showAlert = () => {\n    setIsAlertVisible(true);\n  };\n  const hideAlert = () => {\n    setIsAlertVisible(false);\n  };\n\n  return (\n    <div className='w-full'>\n      {isAlertVisible && (\n        <Alert className='flex justify-between items-center pr-2 [&>svg+div]:translate-y-0'>\n          <CircleFadingArrowUpIcon className='h-4 w-4' />\n          <div className='flex-col justify-center'>\n            <AlertTitle>Privacy Policy Update</AlertTitle>\n            <AlertDescription>\n              We've updated our privacy policy. Please review the changes before\n              continuing.\n            </AlertDescription>\n          </div>\n          <Button\n            size='icon'\n            variant='ghost'\n            className='!pl-0'\n            onClick={hideAlert}\n          >\n            <XIcon className='h-5 w-5' />\n          </Button>\n        </Alert>\n      )}\n      {!isAlertVisible && (\n        <div className='flex justify-center'>\n          <Button className='mt-2 mx-auto' onClick={showAlert}>\n            Reopen\n          </Button>\n        </div>\n      )}\n    </div>\n  );\n}\n",
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
          "import { OctagonAlertIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function AlertWithBackgroundDemo() {\n  return (\n    <Alert\n      variant='destructive'\n      className='bg-destructive text-destructive-foreground [&>svg]:text-destructive-foreground'\n    >\n      <OctagonAlertIcon className='h-4 w-4' />\n      <AlertTitle>Authentication Failed</AlertTitle>\n      <AlertDescription>\n        Your session has expired. Please log in again to continue.\n      </AlertDescription>\n    </Alert>\n  );\n}\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-dialog-default",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-default.tsx",
        content:
          "import {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogDefault() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>Default Dialog</Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <AlertDialogHeader>\r\n          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px]'>\r\n            This action cannot be undone. This will permanently delete your\r\n            account and remove your data from our servers.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter>\r\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\r\n          <AlertDialogAction>Continue</AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-dialog-destructive",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-destructive.tsx",
        content:
          "import { OctagonAlert } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button, buttonVariants } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogDestructive() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <OctagonAlert />\r\n          Destructive\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <AlertDialogHeader className='items-center'>\r\n          <AlertDialogTitle>\r\n            <div className='mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10'>\r\n              <OctagonAlert className='h-7 w-7 text-destructive' />\r\n            </div>\r\n            Are you absolutely sure?\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px] text-center'>\r\n            This action cannot be undone. This will permanently delete your\r\n            account and remove your data from our servers.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter className='mt-2 sm:justify-center'>\r\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\r\n          <AlertDialogAction\r\n            className={buttonVariants({ variant: \"destructive\" })}\r\n          >\r\n            Continue\r\n          </AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-dialog-info",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-info.tsx",
        content:
          "import { CircleFadingArrowUp, Rocket } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Badge } from \"@/components/ui/badge\";\r\nimport { Button } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogInfo() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <CircleFadingArrowUp />\r\n          Info Dialog\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <AlertDialogHeader>\r\n          <div className='mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10'>\r\n            <CircleFadingArrowUp className='h-[18px] w-[18px] text-primary' />\r\n          </div>\r\n          <AlertDialogTitle className='text-2xl font-bold tracking-tight'>\r\n            New Software Update Available\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='!mt-3 text-[15px]'>\r\n            A new software update is available for your device. Please update to\r\n            the latest version to continue using the app.\r\n          </AlertDialogDescription>\r\n          <div className='!mt-6 flex flex-wrap gap-2'>\r\n            <Badge variant='outline' className='py-1'>\r\n              Faster Performance\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              Advanced Blocks\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              Customized Components\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              UI Revamp\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              Security Improvements\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              Other Improvements\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              Bug Fixes\r\n            </Badge>\r\n            <Badge variant='outline' className='py-1'>\r\n              + much more\r\n            </Badge>\r\n          </div>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter className='mt-4'>\r\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\r\n          <AlertDialogAction>\r\n            <Rocket /> Update Now\r\n          </AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-dialog-success",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-success.tsx",
        content:
          "import { CheckCircle } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button, buttonVariants } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogSuccess() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <CheckCircle />\r\n          Success Dialog\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <AlertDialogHeader className='items-center'>\r\n          <AlertDialogTitle>\r\n            <div className='mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/10'>\r\n              <CheckCircle className='h-7 w-7 text-success' />\r\n            </div>\r\n            Success!\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px] text-center'>\r\n            Your account has been successfully created. You can now log in and\r\n            start using our services.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter className='mt-2 sm:justify-center'>\r\n          <AlertDialogCancel>Close</AlertDialogCancel>\r\n          <AlertDialogAction className={buttonVariants({ variant: \"success\" })}>\r\n            Log In\r\n          </AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-dialog-warning",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-warning.tsx",
        content:
          "import { OctagonAlert } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button, buttonVariants } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogWarning() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <OctagonAlert />\r\n          Warning Dialog\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <AlertDialogHeader className='items-center'>\r\n          <AlertDialogTitle>\r\n            <div className='mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-warning/10'>\r\n              <OctagonAlert className='h-7 w-7 text-warning' />\r\n            </div>\r\n            Warning: Proceed with Caution\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px] text-center'>\r\n            You are about to perform an action that may have unintended\r\n            consequences. Please ensure you understand the implications before\r\n            proceeding.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter className='mt-2 sm:justify-center'>\r\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\r\n          <AlertDialogAction className={buttonVariants({ variant: \"warning\" })}>\r\n            Proceed\r\n          </AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-dialog-with-footer",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-with-footer.tsx",
        content:
          "import { ExternalLink, OctagonAlert, PanelBottom, Trash, X } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button, buttonVariants } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogWithFooter() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <PanelBottom />\r\n          With Footer\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent className='overflow-hidden'>\r\n        <AlertDialogHeader className='pb-4'>\r\n          <AlertDialogTitle>\r\n            <div className='mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10'>\r\n              <OctagonAlert className='h-5 w-5 text-destructive' />\r\n            </div>\r\n            Are you absolutely sure?\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px]'>\r\n            This action cannot be undone. This will permanently delete your\r\n            account and remove your data from our servers.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter className='border-t -mx-6 -mb-6 px-6 py-5'>\r\n          <Button\r\n            variant='link'\r\n            className='-ml-3 mr-auto text-muted-foreground'\r\n          >\r\n            Learn more <ExternalLink />\r\n          </Button>\r\n          <AlertDialogCancel>\r\n            <X /> Cancel\r\n          </AlertDialogCancel>\r\n          <AlertDialogAction\r\n            className={buttonVariants({ variant: \"destructive\" })}\r\n          >\r\n            <Trash />\r\n            Continue\r\n          </AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-dialog-with-header",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-with-header.tsx",
        content:
          "import * as AlertDialogPrimitive from \"@radix-ui/react-alert-dialog\";\r\nimport { OctagonAlert, PanelTop, X } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button, buttonVariants } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogWithHeader() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n          <PanelTop />\r\n          With Header\r\n        </Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <div className='-mt-3 -mx-6 border-b pb-3 px-6 flex justify-between items-center'>\r\n          <AlertDialogTitle>Delete Account</AlertDialogTitle>\r\n          <AlertDialogPrimitive.Cancel\r\n            className={buttonVariants({\r\n              variant: \"ghost\",\r\n              size: \"icon\",\r\n              className: \"!h-7 !w-7\",\r\n            })}\r\n          >\r\n            <X />\r\n          </AlertDialogPrimitive.Cancel>\r\n        </div>\r\n        <AlertDialogHeader className='pt-2'>\r\n          <AlertDialogTitle>\r\n            <div className='mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10'>\r\n              <OctagonAlert className='h-5 w-5 text-destructive' />\r\n            </div>\r\n            Are you absolutely sure?\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px]'>\r\n            This action cannot be undone. This will permanently delete your\r\n            account and remove your data from our servers.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter className='mt-2'>\r\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\r\n          <AlertDialogAction>Continue</AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
        type: "registry:snippet",
      },
    ],
  },
  {
    name: "alert-dialog-with-icon",
    type: "registry:snippet",
    files: [
      {
        path: "registry/default/snippets/alertDialog/alert-dialog-with-icon.tsx",
        content:
          "import { Combine, OctagonAlert } from \"lucide-react\";\r\n\r\nimport {\r\n  AlertDialog,\r\n  AlertDialogAction,\r\n  AlertDialogCancel,\r\n  AlertDialogContent,\r\n  AlertDialogDescription,\r\n  AlertDialogFooter,\r\n  AlertDialogHeader,\r\n  AlertDialogTitle,\r\n  AlertDialogTrigger,\r\n} from \"@/components/ui/alert-dialog\";\r\nimport { Button } from \"@/components/ui/button\";\r\n\r\nexport default function AlertDialogWithIcon() {\r\n  return (\r\n    <AlertDialog>\r\n      <AlertDialogTrigger asChild>\r\n        <Button variant='outline'>\r\n        <Combine />\r\n          With Icon</Button>\r\n      </AlertDialogTrigger>\r\n      <AlertDialogContent>\r\n        <AlertDialogHeader>\r\n          <AlertDialogTitle>\r\n            <div className='mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10'>\r\n              <OctagonAlert className='h-5 w-5 text-destructive' />\r\n            </div>\r\n            Are you absolutely sure?\r\n          </AlertDialogTitle>\r\n          <AlertDialogDescription className='text-[15px]'>\r\n            This action cannot be undone. This will permanently delete your\r\n            account and remove your data from our servers.\r\n          </AlertDialogDescription>\r\n        </AlertDialogHeader>\r\n        <AlertDialogFooter>\r\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\r\n          <AlertDialogAction>Continue</AlertDialogAction>\r\n        </AlertDialogFooter>\r\n      </AlertDialogContent>\r\n    </AlertDialog>\r\n  );\r\n}\r\n",
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
