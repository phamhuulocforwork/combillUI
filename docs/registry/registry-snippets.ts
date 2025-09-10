import type { Registry } from "@/registry/schema";

export const snippets: Registry = [
  {
    "name": "accordion-box-contained",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/accordion/accordion-box-contained.tsx",
        "content": "import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from \"@/components/ui/accordion\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n  },\n];\n\nexport default function AccordionBoxContained() {\n  return (\n    <Accordion type='single' collapsible className='max-w-lg my-4 w-full'>\n      {items.map(({ title, content }, index) => (\n        <AccordionItem\n          key={index}\n          value={`item-${index}`}\n          className='last:border-none first:rounded-t-md last:rounded-b-md px-4 bg-muted'\n        >\n          <AccordionTrigger>{title}</AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "accordion-box",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/accordion/accordion-box.tsx",
        "content": "import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from \"@/components/ui/accordion\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n  },\n];\n\nexport default function AccordionBox() {\n  return (\n    <Accordion type='single' collapsible className='max-w-lg my-4 w-full'>\n      {items.map(({ title, content }, index) => (\n        <AccordionItem\n          key={index}\n          value={`item-${index}`}\n          className='border border-b-0 last:border-b first:rounded-t-md last:rounded-b-md px-4'\n        >\n          <AccordionTrigger>{title}</AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "accordion-contained",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/accordion/accordion-contained.tsx",
        "content": "import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from \"@/components/ui/accordion\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n  },\n];\n\nexport default function AccordionContained() {\n  return (\n    <Accordion\n      type='single'\n      collapsible\n      className='max-w-lg my-4 w-full space-y-2'\n    >\n      {items.map(({ title, content }, index) => (\n        <AccordionItem\n          key={index}\n          value={`item-${index}`}\n          className='border-none rounded-md px-4 bg-secondary'\n        >\n          <AccordionTrigger>{title}</AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "accordion-default",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/accordion/accordion-default.tsx",
        "content": "import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from \"@/components/ui/accordion\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n  },\n];\n\nexport default function AccordionDefaut() {\n  return (\n    <Accordion type='single' collapsible className='max-w-lg my-4 w-full'>\n      {items.map(({ title, content }, index) => (\n        <AccordionItem key={index} value={`item-${index}`}>\n          <AccordionTrigger>{title}</AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "accordion-disabled-item",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/accordion/accordion-disabled-item.tsx",
        "content": "import { Contrast, Palette, Zap } from \"lucide-react\";\n\nimport {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from \"@/components/ui/accordion\";\n\nimport { cn } from \"@/lib/utils\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n    icon: Contrast,\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n    icon: Palette,\n    disabled: true,\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n    icon: Zap,\n  },\n];\n\nexport default function AccordionItemDisabled() {\n  return (\n    <Accordion\n      defaultValue='item-0'\n      type='single'\n      collapsible\n      className='max-w-lg my-4 w-full'\n    >\n      {items.map(({ title, content, icon: Icon, disabled }, index) => (\n        <AccordionItem key={index} value={`item-${index}`}>\n          <AccordionTrigger\n            disabled={disabled}\n            className={cn({\n              \"opacity-50\": disabled,\n            })}\n          >\n            <div className='flex items-start gap-3'>\n              <Icon />\n              {title}\n            </div>\n          </AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "accordion-expand-icon",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/accordion/accordion-expand-icon.tsx",
        "content": "import * as AccordionPrimitive from \"@radix-ui/react-accordion\";\nimport { Plus } from \"lucide-react\";\n\nimport {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n} from \"@/components/ui/accordion\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n  },\n];\n\nexport default function AccordionDefaultOpen() {\n  return (\n    <Accordion\n      defaultValue='item-0'\n      type='single'\n      collapsible\n      className='max-w-lg my-4 w-full'\n    >\n      {items.map(({ title, content }, index) => (\n        <AccordionItem key={index} value={`item-${index}`}>\n          <AccordionPrimitive.Header className='flex'>\n            <AccordionPrimitive.Trigger className='flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45'>\n              {title}\n              <Plus className='h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200' />\n            </AccordionPrimitive.Trigger>\n          </AccordionPrimitive.Header>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "accordion-highlight-active-item",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/accordion/accordion-highlight-active-item.tsx",
        "content": "import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from \"@/components/ui/accordion\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n  },\n];\n\nexport default function AccordionHighlightActiveItem() {\n  return (\n    <Accordion\n      defaultValue='item-0'\n      type='single'\n      collapsible\n      className='max-w-lg my-4 w-full'\n    >\n      {items.map(({ title, content }, index) => (\n        <AccordionItem\n          key={index}\n          value={`item-${index}`}\n          className='data-[state=open]:border-b-2 data-[state=open]:border-indigo-600 dark:data-[state=open]:border-indigo-500'\n        >\n          <AccordionTrigger className='data-[state=open]:text-indigo-600 dark:data-[state=open]:text-indigo-500'>\n            {title}\n          </AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "accordion-media-content",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/accordion/accordion-media-content.tsx",
        "content": "import { Contrast, Palette, Zap } from \"lucide-react\";\n\nimport {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from \"@/components/ui/accordion\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n    icon: Contrast,\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n    icon: Palette,\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n    icon: Zap,\n  },\n];\n\nexport default function AccordionMediaContent() {\n  return (\n    <Accordion\n      defaultValue='item-0'\n      type='single'\n      collapsible\n      className='max-w-lg my-4 w-full'\n    >\n      {items.map(({ title, content, icon: Icon }, index) => (\n        <AccordionItem key={index} value={`item-${index}`}>\n          <AccordionTrigger>\n            <div className='flex items-start gap-3'>\n              <Icon />\n              {title}\n            </div>\n          </AccordionTrigger>\n          <AccordionContent>\n            {content}\n            <div className='mt-4 w-full bg-muted rounded-xl'>\n              <img\n                src='/svgs/placeholder.svg'\n                alt='placeholder'\n                className='object-cover aspect-[18/9]'\n              />\n            </div>\n          </AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "accordion-multiple-expanded-at-a-time",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/accordion/accordion-multiple-expanded-at-a-time.tsx",
        "content": "import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from \"@/components/ui/accordion\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n  },\n];\n\nexport default function AccordionMultipleOpen() {\n  return (\n    <Accordion\n      defaultValue={[\"item-0\", \"item-1\"]}\n      type='multiple'\n      className='max-w-lg my-4 w-full'\n    >\n      {items.map(({ title, content }, index) => (\n        <AccordionItem key={index} value={`item-${index}`}>\n          <AccordionTrigger>{title}</AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "accordion-outline",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/accordion/accordion-outline.tsx",
        "content": "import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from \"@/components/ui/accordion\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n  },\n];\n\nexport default function AccordionOutline() {\n  return (\n    <Accordion\n      type='single'\n      collapsible\n      className='max-w-lg my-4 w-full space-y-2'\n    >\n      {items.map(({ title, content }, index) => (\n        <AccordionItem\n          key={index}\n          value={`item-${index}`}\n          className='border rounded-md px-4'\n        >\n          <AccordionTrigger>{title}</AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "accordion-tabs",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/accordion/accordion-tabs.tsx",
        "content": "import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from \"@/components/ui/accordion\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n  },\n];\n\nexport default function AccordionTabs() {\n  return (\n    <Accordion\n      type='single'\n      collapsible\n      defaultValue='item-0'\n      className='max-w-lg my-4 w-full space-y-2'\n    >\n      {items.map(({ title, content }, index) => (\n        <AccordionItem\n          key={index}\n          value={`item-${index}`}\n          className='border-none rounded-md px-4 data-[state=open]:bg-secondary'\n        >\n          <AccordionTrigger className='data-[state=closed]:py-2'>\n            {title}\n          </AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "accordion-with-icon",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/accordion/accordion-with-icon.tsx",
        "content": "import { Contrast, Palette, Zap } from \"lucide-react\";\n\nimport {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from \"@/components/ui/accordion\";\n\nconst items = [\n  {\n    title: \"Is it accessible?\",\n    content: \"Yes. It adheres to the WAI-ARIA design pattern.\",\n    icon: Contrast,\n  },\n  {\n    title: \"Is it styled?\",\n    content:\n      \"Yes. It comes with default styles that matches the other components' aesthetic.\",\n    icon: Palette,\n  },\n  {\n    title: \"Is it animated?\",\n    content:\n      \"Yes. It's animated by default, but you can disable it if you prefer.\",\n    icon: Zap,\n  },\n];\n\nexport default function AccordionWithIcon() {\n  return (\n    <Accordion\n      defaultValue='item-0'\n      type='single'\n      collapsible\n      className='max-w-lg my-4 w-full'\n    >\n      {items.map(({ title, content, icon: Icon }, index) => (\n        <AccordionItem key={index} value={`item-${index}`}>\n          <AccordionTrigger>\n            <div className='flex items-start gap-3'>\n              <Icon />\n              {title}\n            </div>\n          </AccordionTrigger>\n          <AccordionContent>{content}</AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-default",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alert/alert-default.tsx",
        "content": "import { CircleFadingArrowUpIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function AlertDemo() {\n  return (\n    <Alert>\n      <CircleFadingArrowUpIcon className='h-4 w-4' />\n      <AlertTitle>System Notification</AlertTitle>\n      <AlertDescription>\n        Your application has been updated to the latest version.\n      </AlertDescription>\n    </Alert>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-destructive",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alert/alert-destructive.tsx",
        "content": "import { OctagonAlertIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function DestructiveAlertDemo() {\n  return (\n    <Alert variant='destructive'>\n      <OctagonAlertIcon className='h-4 w-4' />\n      <AlertTitle>Critical Error</AlertTitle>\n      <AlertDescription>\n        Failed to save changes. Your data may be lost or corrupted.\n      </AlertDescription>\n    </Alert>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-info",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alert/alert-info.tsx",
        "content": "import { InfoIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function AlertInfoDemo() {\n  return (\n    <Alert className='border-cyan-600/50 text-cyan-600 dark:border-cyan-600 [&>svg]:text-cyan-600'>\n      <InfoIcon className='h-4 w-4' />\n      <AlertTitle>Pro Tip</AlertTitle>\n      <AlertDescription>\n        You can customize your workspace by accessing the settings panel.\n      </AlertDescription>\n    </Alert>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-soft",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alert/alert-soft.tsx",
        "content": "import {\n  CircleFadingArrowUpIcon,\n  OctagonAlert,\n  ShieldAlert,\n} from \"lucide-react\";\n\nimport { Alert, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function AlertCalloutDemo() {\n  return (\n    <div className='w-full space-y-2 mt-9'>\n      <Alert className='bg-emerald-500/10 dark:bg-emerald-600/30 border-none'>\n        <CircleFadingArrowUpIcon className='h-4 w-4 !text-emerald-500' />\n        <AlertTitle>\n          Payment processed successfully. Your order is confirmed.\n        </AlertTitle>\n      </Alert>\n      <Alert className='bg-blue-500/10 dark:bg-blue-600/30 border-none'>\n        <CircleFadingArrowUpIcon className='h-4 w-4 !text-blue-500' />\n        <AlertTitle>\n          Feature preview available. Try our new dashboard layout.\n        </AlertTitle>\n      </Alert>\n      <Alert className='bg-amber-500/10 dark:bg-amber-600/30 border-none'>\n        <ShieldAlert className='h-4 w-4 !text-amber-500' />\n        <AlertTitle>\n          Unusual account activity detected. Verify recent logins.\n        </AlertTitle>\n      </Alert>\n      <Alert className='bg-destructive/10 dark:bg-destructive/20 border-none'>\n        <OctagonAlert className='h-4 w-4 !text-destructive' />\n        <AlertTitle>\n          Connection lost. Service unavailable until connectivity is restored.\n        </AlertTitle>\n      </Alert>\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-success",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alert/alert-success.tsx",
        "content": "import { CircleCheckBigIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function AlertSuccessDemo() {\n  return (\n    <Alert className='border-emerald-600/50 text-emerald-600 dark:border-emerald-600 [&>svg]:text-emerald-600'>\n      <CircleCheckBigIcon className='h-4 w-4' />\n      <AlertTitle>Account Verified</AlertTitle>\n      <AlertDescription>\n        Your account has been successfully verified and is now ready to use\n      </AlertDescription>\n    </Alert>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-warning",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alert/alert-warning.tsx",
        "content": "import { TriangleAlertIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function AlertWarningDemo() {\n  return (\n    <Alert className='border-amber-500/50 text-amber-500 dark:border-amber-500 [&>svg]:text-amber-500'>\n      <TriangleAlertIcon className='h-4 w-4' />\n      <AlertTitle>Low Storage Space</AlertTitle>\n      <AlertDescription>\n        Your device is running low on storage. Please free up space to avoid\n        performance issues.\n      </AlertDescription>\n    </Alert>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-with-action",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alert/alert-with-action.tsx",
        "content": "\"use client\";\n\nimport { useState } from \"react\";\n\nimport { CircleFadingArrowUpIcon, XIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\nimport { Button } from \"@/components/ui/button\";\n\nexport default function AlertWithActionsDemo() {\n  const [isAlertVisible, setIsAlertVisible] = useState(true);\n\n  const showAlert = () => {\n    setIsAlertVisible(true);\n  };\n  const hideAlert = () => {\n    setIsAlertVisible(false);\n  };\n\n  return (\n    <div className='w-full'>\n      {isAlertVisible && (\n        <Alert className='flex justify-between items-center pr-2 [&>svg+div]:translate-y-0'>\n          <CircleFadingArrowUpIcon className='h-4 w-4' />\n          <div className='flex-col justify-center'>\n            <AlertTitle>Privacy Policy Update</AlertTitle>\n            <AlertDescription>\n              We've updated our privacy policy. Please review the changes before\n              continuing.\n            </AlertDescription>\n          </div>\n          <Button\n            size='icon'\n            variant='ghost'\n            className='!pl-0'\n            onClick={hideAlert}\n          >\n            <XIcon className='h-5 w-5' />\n          </Button>\n        </Alert>\n      )}\n      {!isAlertVisible && (\n        <div className='flex justify-center'>\n          <Button className='mt-2 mx-auto' onClick={showAlert}>\n            Reopen\n          </Button>\n        </div>\n      )}\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-with-background",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alert/alert-with-background.tsx",
        "content": "import { OctagonAlertIcon } from \"lucide-react\";\n\nimport { Alert, AlertDescription, AlertTitle } from \"@/components/ui/alert\";\n\nexport default function AlertWithBackgroundDemo() {\n  return (\n    <Alert\n      variant='destructive'\n      className='bg-destructive text-destructive-foreground [&>svg]:text-destructive-foreground'\n    >\n      <OctagonAlertIcon className='h-4 w-4' />\n      <AlertTitle>Authentication Failed</AlertTitle>\n      <AlertDescription>\n        Your session has expired. Please log in again to continue.\n      </AlertDescription>\n    </Alert>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-dialog-default",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alertDialog/alert-dialog-default.tsx",
        "content": "import {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from \"@/components/ui/alert-dialog\";\nimport { Button } from \"@/components/ui/button\";\n\nexport default function AlertDialogDefault() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger asChild>\n        <Button variant='outline'>Default Dialog</Button>\n      </AlertDialogTrigger>\n      <AlertDialogContent>\n        <AlertDialogHeader>\n          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>\n          <AlertDialogDescription className='text-[15px]'>\n            This action cannot be undone. This will permanently delete your\n            account and remove your data from our servers.\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter>\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\n          <AlertDialogAction>Continue</AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-dialog-destructive",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alertDialog/alert-dialog-destructive.tsx",
        "content": "import { OctagonAlert } from \"lucide-react\";\n\nimport {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from \"@/components/ui/alert-dialog\";\nimport { Button, buttonVariants } from \"@/components/ui/button\";\n\nexport default function AlertDialogDestructive() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger asChild>\n        <Button variant='outline'>\n          <OctagonAlert />\n          Destructive\n        </Button>\n      </AlertDialogTrigger>\n      <AlertDialogContent>\n        <AlertDialogHeader className='items-center'>\n          <AlertDialogTitle>\n            <div className='mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10'>\n              <OctagonAlert className='h-7 w-7 text-destructive' />\n            </div>\n            Are you absolutely sure?\n          </AlertDialogTitle>\n          <AlertDialogDescription className='text-[15px] text-center'>\n            This action cannot be undone. This will permanently delete your\n            account and remove your data from our servers.\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter className='mt-2 sm:justify-center'>\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\n          <AlertDialogAction\n            className={buttonVariants({ variant: \"destructive\" })}\n          >\n            Continue\n          </AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-dialog-info",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alertDialog/alert-dialog-info.tsx",
        "content": "import { CircleFadingArrowUp, Rocket } from \"lucide-react\";\n\nimport {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from \"@/components/ui/alert-dialog\";\nimport { Badge } from \"@/components/ui/badge\";\nimport { Button } from \"@/components/ui/button\";\n\nexport default function AlertDialogInfo() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger asChild>\n        <Button variant='outline'>\n          <CircleFadingArrowUp />\n          Info Dialog\n        </Button>\n      </AlertDialogTrigger>\n      <AlertDialogContent>\n        <AlertDialogHeader>\n          <div className='mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10'>\n            <CircleFadingArrowUp className='h-[18px] w-[18px] text-primary' />\n          </div>\n          <AlertDialogTitle className='text-2xl font-bold tracking-tight'>\n            New Software Update Available\n          </AlertDialogTitle>\n          <AlertDialogDescription className='!mt-3 text-[15px]'>\n            A new software update is available for your device. Please update to\n            the latest version to continue using the app.\n          </AlertDialogDescription>\n          <div className='!mt-6 flex flex-wrap gap-2'>\n            <Badge variant='outline' className='py-1'>\n              Faster Performance\n            </Badge>\n            <Badge variant='outline' className='py-1'>\n              Advanced Blocks\n            </Badge>\n            <Badge variant='outline' className='py-1'>\n              Customized Components\n            </Badge>\n            <Badge variant='outline' className='py-1'>\n              UI Revamp\n            </Badge>\n            <Badge variant='outline' className='py-1'>\n              Security Improvements\n            </Badge>\n            <Badge variant='outline' className='py-1'>\n              Other Improvements\n            </Badge>\n            <Badge variant='outline' className='py-1'>\n              Bug Fixes\n            </Badge>\n            <Badge variant='outline' className='py-1'>\n              + much more\n            </Badge>\n          </div>\n        </AlertDialogHeader>\n        <AlertDialogFooter className='mt-4'>\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\n          <AlertDialogAction>\n            <Rocket /> Update Now\n          </AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-dialog-success",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alertDialog/alert-dialog-success.tsx",
        "content": "import { CheckCircle } from \"lucide-react\";\n\nimport {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from \"@/components/ui/alert-dialog\";\nimport { Button, buttonVariants } from \"@/components/ui/button\";\n\nexport default function AlertDialogSuccess() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger asChild>\n        <Button variant='outline'>\n          <CheckCircle />\n          Success Dialog\n        </Button>\n      </AlertDialogTrigger>\n      <AlertDialogContent>\n        <AlertDialogHeader className='items-center'>\n          <AlertDialogTitle>\n            <div className='mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/10'>\n              <CheckCircle className='h-7 w-7 text-success' />\n            </div>\n            Success!\n          </AlertDialogTitle>\n          <AlertDialogDescription className='text-[15px] text-center'>\n            Your account has been successfully created. You can now log in and\n            start using our services.\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter className='mt-2 sm:justify-center'>\n          <AlertDialogCancel>Close</AlertDialogCancel>\n          <AlertDialogAction className={buttonVariants({ variant: \"success\" })}>\n            Log In\n          </AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-dialog-warning",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alertDialog/alert-dialog-warning.tsx",
        "content": "import { OctagonAlert } from \"lucide-react\";\n\nimport {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from \"@/components/ui/alert-dialog\";\nimport { Button, buttonVariants } from \"@/components/ui/button\";\n\nexport default function AlertDialogWarning() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger asChild>\n        <Button variant='outline'>\n          <OctagonAlert />\n          Warning Dialog\n        </Button>\n      </AlertDialogTrigger>\n      <AlertDialogContent>\n        <AlertDialogHeader className='items-center'>\n          <AlertDialogTitle>\n            <div className='mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-warning/10'>\n              <OctagonAlert className='h-7 w-7 text-warning' />\n            </div>\n            Warning: Proceed with Caution\n          </AlertDialogTitle>\n          <AlertDialogDescription className='text-[15px] text-center'>\n            You are about to perform an action that may have unintended\n            consequences. Please ensure you understand the implications before\n            proceeding.\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter className='mt-2 sm:justify-center'>\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\n          <AlertDialogAction className={buttonVariants({ variant: \"warning\" })}>\n            Proceed\n          </AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-dialog-with-footer",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alertDialog/alert-dialog-with-footer.tsx",
        "content": "import {\n  ExternalLink,\n  OctagonAlert,\n  PanelBottom,\n  Trash,\n  X,\n} from \"lucide-react\";\n\nimport {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from \"@/components/ui/alert-dialog\";\nimport { Button, buttonVariants } from \"@/components/ui/button\";\n\nexport default function AlertDialogWithFooter() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger asChild>\n        <Button variant='outline'>\n          <PanelBottom />\n          With Footer\n        </Button>\n      </AlertDialogTrigger>\n      <AlertDialogContent className='overflow-hidden'>\n        <AlertDialogHeader className='pb-4'>\n          <AlertDialogTitle>\n            <div className='mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10'>\n              <OctagonAlert className='h-5 w-5 text-destructive' />\n            </div>\n            Are you absolutely sure?\n          </AlertDialogTitle>\n          <AlertDialogDescription className='text-[15px]'>\n            This action cannot be undone. This will permanently delete your\n            account and remove your data from our servers.\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter className='border-t -mx-6 -mb-6 px-6 py-5'>\n          <Button\n            variant='link'\n            className='-ml-3 mr-auto text-muted-foreground'\n          >\n            Learn more <ExternalLink />\n          </Button>\n          <AlertDialogCancel>\n            <X /> Cancel\n          </AlertDialogCancel>\n          <AlertDialogAction\n            className={buttonVariants({ variant: \"destructive\" })}\n          >\n            <Trash />\n            Continue\n          </AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-dialog-with-header",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alertDialog/alert-dialog-with-header.tsx",
        "content": "import * as AlertDialogPrimitive from \"@radix-ui/react-alert-dialog\";\nimport { OctagonAlert, PanelTop, X } from \"lucide-react\";\n\nimport {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from \"@/components/ui/alert-dialog\";\nimport { Button, buttonVariants } from \"@/components/ui/button\";\n\nexport default function AlertDialogWithHeader() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger asChild>\n        <Button variant='outline'>\n          <PanelTop />\n          With Header\n        </Button>\n      </AlertDialogTrigger>\n      <AlertDialogContent>\n        <div className='-mt-3 -mx-6 border-b pb-3 px-6 flex justify-between items-center'>\n          <AlertDialogTitle>Delete Account</AlertDialogTitle>\n          <AlertDialogPrimitive.Cancel\n            className={buttonVariants({\n              variant: \"ghost\",\n              size: \"icon\",\n              className: \"!h-7 !w-7\",\n            })}\n          >\n            <X />\n          </AlertDialogPrimitive.Cancel>\n        </div>\n        <AlertDialogHeader className='pt-2'>\n          <AlertDialogTitle>\n            <div className='mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10'>\n              <OctagonAlert className='h-5 w-5 text-destructive' />\n            </div>\n            Are you absolutely sure?\n          </AlertDialogTitle>\n          <AlertDialogDescription className='text-[15px]'>\n            This action cannot be undone. This will permanently delete your\n            account and remove your data from our servers.\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter className='mt-2'>\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\n          <AlertDialogAction>Continue</AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-dialog-with-icon",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/alertDialog/alert-dialog-with-icon.tsx",
        "content": "import { Combine, OctagonAlert } from \"lucide-react\";\n\nimport {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from \"@/components/ui/alert-dialog\";\nimport { Button } from \"@/components/ui/button\";\n\nexport default function AlertDialogWithIcon() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger asChild>\n        <Button variant='outline'>\n          <Combine />\n          With Icon\n        </Button>\n      </AlertDialogTrigger>\n      <AlertDialogContent>\n        <AlertDialogHeader>\n          <AlertDialogTitle>\n            <div className='mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10'>\n              <OctagonAlert className='h-5 w-5 text-destructive' />\n            </div>\n            Are you absolutely sure?\n          </AlertDialogTitle>\n          <AlertDialogDescription className='text-[15px]'>\n            This action cannot be undone. This will permanently delete your\n            account and remove your data from our servers.\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter>\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\n          <AlertDialogAction>Continue</AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "avatar-default",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/avatar/avatar-default.tsx",
        "content": "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarDefault() {\n  return (\n    <Avatar>\n      <AvatarImage\n        src='http://github.com/phamhuulocforwork.png'\n        alt='@phamhuulocforwork'\n      />\n      <AvatarFallback>HL</AvatarFallback>\n    </Avatar>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "avatar-group-max",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/avatar/avatar-group-max.tsx",
        "content": "import * as React from \"react\";\n\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nimport { cn } from \"@/lib/utils\";\n\ntype AvatarProps = React.ComponentProps<typeof Avatar>;\n\ninterface AvatarGroupProps extends React.ComponentProps<\"div\"> {\n  children: React.ReactElement<AvatarProps>[];\n  max?: number;\n}\n\nconst AvatarGroup = ({\n  children,\n  max,\n  className,\n  ...props\n}: AvatarGroupProps) => {\n  const totalAvatars = React.Children.count(children);\n  const displayedAvatars = React.Children.toArray(children)\n    .slice(0, max)\n    .reverse();\n  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\n\n  return (\n    <div\n      className={cn(\"flex items-center flex-row-reverse\", className)}\n      {...props}\n    >\n      {remainingAvatars > 0 && (\n        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\n          <AvatarFallback className='bg-muted-foreground text-white'>\n            +{remainingAvatars}\n          </AvatarFallback>\n        </Avatar>\n      )}\n      {displayedAvatars.map((avatar, index) => {\n        if (!React.isValidElement(avatar)) return null;\n\n        return (\n          <div key={index} className='-ml-2 hover:z-10 relative'>\n            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\n              className: \"ring-2 ring-background\",\n            })}\n          </div>\n        );\n      })}\n    </div>\n  );\n};\n\nexport default function AvatarGroupMaxAvatar() {\n  return (\n    <AvatarGroup className='flex items-center' max={3}>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarImage\n          src='http://github.com/phamhuulocforwork.png'\n          alt='@phamhuulocforwork'\n        />\n        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-indigo-500 text-white'>VK</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-orange-500 text-white'>RS</AvatarFallback>\n      </Avatar>\n    </AvatarGroup>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "avatar-group",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/avatar/avatar-group.tsx",
        "content": "import * as React from \"react\";\n\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nimport { cn } from \"@/lib/utils\";\n\ntype AvatarProps = React.ComponentProps<typeof Avatar>;\n\ninterface AvatarGroupProps extends React.ComponentProps<\"div\"> {\n  children: React.ReactElement<AvatarProps>[];\n  max?: number;\n}\n\nconst AvatarGroupItem = ({\n  children,\n  max,\n  className,\n  ...props\n}: AvatarGroupProps) => {\n  const totalAvatars = React.Children.count(children);\n  const displayedAvatars = React.Children.toArray(children)\n    .slice(0, max)\n    .reverse();\n  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\n\n  return (\n    <div\n      className={cn(\"flex items-center flex-row-reverse\", className)}\n      {...props}\n    >\n      {remainingAvatars > 0 && (\n        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\n          <AvatarFallback className='bg-muted-foreground text-white'>\n            +{remainingAvatars}\n          </AvatarFallback>\n        </Avatar>\n      )}\n      {displayedAvatars.map((avatar, index) => {\n        if (!React.isValidElement(avatar)) return null;\n\n        return (\n          <div key={index} className='-ml-2 hover:z-10 relative'>\n            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\n              className: \"ring-2 ring-background\",\n            })}\n          </div>\n        );\n      })}\n    </div>\n  );\n};\n\nexport default function AvatarGroup() {\n  return (\n    <AvatarGroupItem>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarImage\n          src='http://github.com/phamhuulocforwork.png'\n          alt='@phamhuulocforwork'\n        />\n        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\n      </Avatar>\n    </AvatarGroupItem>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "avatar-hover-card",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/avatar/avatar-hover-card.tsx",
        "content": "import { CalendarIcon } from \"lucide-react\";\n\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\nimport {\n  HoverCard,\n  HoverCardContent,\n  HoverCardTrigger,\n} from \"@/components/ui/hover-card\";\n\nexport default function AvatarHoverCard() {\n  return (\n    <HoverCard>\n      <HoverCardTrigger className='cursor-pointer'>\n        <Avatar>\n          <AvatarImage\n            src='http://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>HL</AvatarFallback>\n        </Avatar>\n      </HoverCardTrigger>\n      <HoverCardContent className='w-full max-w-xs'>\n        <div className='flex justify-between space-x-4'>\n          <Avatar>\n            <AvatarImage\n              src='http://github.com/phamhuulocforwork.png'\n              alt='@phamhuulocforwork'\n            />\n            <AvatarFallback>HL</AvatarFallback>\n          </Avatar>\n          <div className='space-y-1'>\n            <h4 className='text-sm font-semibold'>@phamhuulocforwork</h4>\n            <p className='text-sm'>\n              I'm currently studying at University (I stay up late and my hair\n              is getting thinner and thinner. Do you think I'm bald? xD)\n            </p>\n            <div className='flex items-center pt-2'>\n              <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{\" \"}\n              <span className='text-xs text-muted-foreground'>\n                Joined February 2025\n              </span>\n            </div>\n          </div>\n        </div>\n      </HoverCardContent>\n    </HoverCard>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "avatar-shape",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/avatar/avatar-shape.tsx",
        "content": "import { Avatar, AvatarFallback } from \"@/components/ui/avatar\";\n\nexport default function AvatarShape() {\n  return (\n    <div className='grid gap-5'>\n      <div className='flex items-center gap-4'>\n        <Avatar className='rounded-none'>\n          <AvatarFallback className='rounded-none bg-indigo-500 text-white'>\n            CN\n          </AvatarFallback>\n        </Avatar>\n        <Avatar className='rounded-md'>\n          <AvatarFallback className='rounded-lg bg-indigo-500 text-white'>\n            CN\n          </AvatarFallback>\n        </Avatar>\n        <Avatar className='rounded-full'>\n          <AvatarFallback className='rounded-full bg-indigo-500 text-white'>\n            CN\n          </AvatarFallback>\n        </Avatar>\n      </div>\n      <div className='flex items-center gap-4'>\n        <Avatar className='rounded-none'>\n          <AvatarFallback className='rounded-none bg-indigo-500/25 text-indigo-500'>\n            CN\n          </AvatarFallback>\n        </Avatar>\n        <Avatar className='rounded-md'>\n          <AvatarFallback className='rounded-lg bg-indigo-500/25 text-indigo-500'>\n            CN\n          </AvatarFallback>\n        </Avatar>\n        <Avatar className='rounded-full'>\n          <AvatarFallback className='rounded-full bg-indigo-500/25 text-indigo-500'>\n            CN\n          </AvatarFallback>\n        </Avatar>\n      </div>\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "avatar-with-ring",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/avatar/avatar-with-ring.tsx",
        "content": "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarWithRing() {\n  return (\n    <Avatar className='ring-2 ring-green-500 ring-offset-[3px] ring-offset-background'>\n      <AvatarImage\n        src='http://github.com/phamhuulocforwork.png'\n        alt='@phamhuulocforwork'\n      />\n      <AvatarFallback>HL</AvatarFallback>\n    </Avatar>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "avatar-with-status",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/avatar/avatar-with-status.tsx",
        "content": "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarWithStatus() {\n  return (\n    <div className='flex items-center gap-3'>\n      {/* Online */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='http://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-green-500 absolute bottom-0 right-0'></div>\n      </div>\n\n      {/* DND */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='http://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-red-500 absolute bottom-0 right-0'></div>\n      </div>\n\n      {/* Busy */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='http://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-yellow-500 absolute bottom-0 right-0'></div>\n      </div>\n\n      {/* Offline */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='http://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background border-2 border-muted-foreground rounded-full bg-background absolute bottom-0 right-0'></div>\n      </div>\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "avatar-with-text",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/avatar/avatar-with-text.tsx",
        "content": "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarWithText() {\n  return (\n    <div className='flex gap-3'>\n      <Avatar>\n        <AvatarImage\n          src='http://github.com/phamhuulocforwork.png'\n          alt='@phamhuulocforwork'\n        />\n        <AvatarFallback>CN</AvatarFallback>\n      </Avatar>\n      <div className='flex flex-col'>\n        <span className='font-semibold tracking-tight'>Pham Huu Loc</span>\n        <span className='leading-none text-sm text-muted-foreground'>\n          phamhuulocforwork@gmail.com\n        </span>\n      </div>\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "badge-default",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/badge/badge-default.tsx",
        "content": "import { Badge } from \"@/components/ui/badge\";\n\nexport default function BadgeDefault() {\n  return <Badge>Badge</Badge>;\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "badge-destructive",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/badge/badge-destructive.tsx",
        "content": "import { Badge } from \"@/components/ui/badge\";\n\nexport default function BadgeDestructive() {\n  return <Badge variant='destructive'>Destructive</Badge>;\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "badge-outline",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/badge/badge-outline.tsx",
        "content": "import { Badge } from \"@/components/ui/badge\";\n\nexport default function BadgeOutline() {\n  return <Badge variant='outline'>Outline</Badge>;\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "badge-rounded",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/badge/badge-rounded.tsx",
        "content": "import React from \"react\";\n\nimport { Badge } from \"@/components/ui/badge\";\n\nexport default function BadgeRounded() {\n  return <Badge className='rounded-full'>Rounded</Badge>;\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "badge-secondary",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/badge/badge-secondary.tsx",
        "content": "import { Badge } from \"@/components/ui/badge\";\n\nexport default function BadgeSecondary() {\n  return <Badge variant='secondary'>Secondary</Badge>;\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "badge-soft",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/badge/badge-soft.tsx",
        "content": "import { Badge } from \"@/components/ui/badge\";\n\nexport default function SoftBadge() {\n  return (\n    <div className='flex flex-col gap-3 flex-wrap'>\n      <Badge className='bg-amber-600/10 dark:bg-amber-600/20 hover:bg-amber-600/10 text-amber-500 shadow-none rounded-full'>\n        <div className='h-1.5 w-1.5 rounded-full bg-amber-500 mr-2' /> In\n        Progress\n      </Badge>\n      <Badge className='bg-red-600/10 dark:bg-red-600/20 hover:bg-red-600/10 text-red-500 shadow-none rounded-full'>\n        <div className='h-1.5 w-1.5 rounded-full bg-red-500 mr-2' /> Blocked\n      </Badge>\n      <Badge className='bg-emerald-600/10 dark:bg-emerald-600/20 hover:bg-emerald-600/10 text-emerald-500 shadow-none rounded-full'>\n        <div className='h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2' /> Done\n      </Badge>\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "badge-status",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/badge/badge-status.tsx",
        "content": "import { Badge } from \"@/components/ui/badge\";\n\nexport default function StatusBadge() {\n  return (\n    <div className='flex flex-col gap-3 flex-wrap'>\n      <Badge className='bg-amber-600/10 dark:bg-amber-600/20 hover:bg-amber-600/10 text-amber-500 border-amber-600/60 shadow-none rounded-full'>\n        <div className='h-1.5 w-1.5 rounded-full bg-amber-500 mr-2' /> In\n        Progress\n      </Badge>\n      <Badge className='bg-red-600/10 dark:bg-red-600/20 hover:bg-red-600/10 text-red-500 border-red-600/60 shadow-none rounded-full'>\n        <div className='h-1.5 w-1.5 rounded-full bg-red-500 mr-2' /> Blocked\n      </Badge>\n      <Badge className='bg-emerald-600/10 dark:bg-emerald-600/20 hover:bg-emerald-600/10 text-emerald-500 border-emerald-600/60 shadow-none rounded-full'>\n        <div className='h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2' /> Done\n      </Badge>\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "breadcrumb-default",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/breadcrumb/breadcrumb-default.tsx",
        "content": "import { HomeIcon } from \"lucide-react\";\n\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbList,\n  BreadcrumbPage,\n  BreadcrumbSeparator,\n} from \"@/components/ui/breadcrumb\";\n\nconst BreadcrumbDefault = () => {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <HomeIcon className='size-4' />\n          <BreadcrumbLink href='#'>Home</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbPage>Add Document</BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n  );\n};\n\nexport default BreadcrumbDefault;\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "breadcrumb-slash",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/breadcrumb/breadcrumb-slash.tsx",
        "content": "import { HomeIcon } from \"lucide-react\";\n\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbList,\n  BreadcrumbPage,\n  BreadcrumbSeparator,\n} from \"@/components/ui/breadcrumb\";\n\nconst BreadcrumbSlash = () => {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#' className='flex items-center gap-2'>\n            <HomeIcon className='size-4' />\n            Home\n          </BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbPage>Add Document</BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n  );\n};\n\nexport default BreadcrumbSlash;\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "breadcrumb-steps",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/breadcrumb/breadcrumb-steps.tsx",
        "content": "import { Fragment } from \"react\";\n\nimport { Package, ShoppingCart, Store, Truck } from \"lucide-react\";\n\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbList,\n  BreadcrumbPage,\n} from \"@/components/ui/breadcrumb\";\n\nconst steps = [\n  {\n    label: \"Store\",\n    href: \"#/store\",\n    icon: Store,\n  },\n  {\n    label: \"Delivery Tracking\",\n    href: \"#/delivery-tracking\",\n    icon: Truck,\n  },\n  {\n    label: \"Cart\",\n    href: \"#/cart\",\n    icon: ShoppingCart,\n  },\n  {\n    label: \"Package\",\n    href: \"#/package\",\n    icon: Package,\n    active: true,\n  },\n];\n\nexport default function BreadcrumbsSteps() {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        {steps.map((step, index) => (\n          <Fragment key={index}>\n            <BreadcrumbItem>\n              {step.active ? (\n                <BreadcrumbPage>\n                  <step.icon className='h-5 w-5' />\n                </BreadcrumbPage>\n              ) : (\n                <BreadcrumbLink href={step.href}>\n                  <step.icon className='h-5 w-5' />\n                </BreadcrumbLink>\n              )}\n            </BreadcrumbItem>\n            {index !== steps.length - 1 && (\n              <li\n                role='presentation'\n                aria-hidden='true'\n                className='inline-block h-[2px] w-[40px] bg-muted'\n              />\n            )}\n          </Fragment>\n        ))}\n      </BreadcrumbList>\n    </Breadcrumb>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "breadcrumb-tab-active",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/breadcrumb/breadcrumb-tab-active.tsx",
        "content": "import React from \"react\";\n\nimport { ChevronsRight } from \"lucide-react\";\n\nimport { Badge } from \"@/components/ui/badge\";\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbList,\n  BreadcrumbPage,\n  BreadcrumbSeparator,\n} from \"@/components/ui/breadcrumb\";\n\nexport default function BreadcrumbTabActive() {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#'>Home</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator>\n          <ChevronsRight />\n        </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#/components'>Components</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator>\n          <ChevronsRight />\n        </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbPage>\n            <Badge className='shadow-none rounded-full'>Breadcrumb</Badge>\n          </BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "breadcrumb-with-dropdown",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/breadcrumb/breadcrumb-with-dropdown.tsx",
        "content": "import { ChevronDown, HomeIcon } from \"lucide-react\";\n\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbList,\n  BreadcrumbPage,\n  BreadcrumbSeparator,\n} from \"@/components/ui/breadcrumb\";\nimport {\n  DropdownMenu,\n  DropdownMenuContent,\n  DropdownMenuLabel,\n  DropdownMenuTrigger,\n} from \"@/components/ui/dropdown-menu\";\n\nconst BreadcrumbWithDropdown = () => {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <HomeIcon className='size-4' />\n          <BreadcrumbLink href='#'>Home</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <BreadcrumbPage>\n            <DropdownMenu>\n              <DropdownMenuTrigger className='group flex items-center gap-1'>\n                Add Document\n                <ChevronDown className='size-4 transition-transform group-data-[state=open]:rotate-180' />\n              </DropdownMenuTrigger>\n              <DropdownMenuContent align='start'>\n                <DropdownMenuLabel>Themes</DropdownMenuLabel>\n                <DropdownMenuLabel>Github</DropdownMenuLabel>\n                <DropdownMenuLabel>Documentation</DropdownMenuLabel>\n              </DropdownMenuContent>\n            </DropdownMenu>\n          </BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n  );\n};\n\nexport default BreadcrumbWithDropdown;\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "breadcrumb-with-icon",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/breadcrumb/breadcrumb-with-icon.tsx",
        "content": "import { File, Folder, HomeIcon } from \"lucide-react\";\n\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbList,\n  BreadcrumbPage,\n  BreadcrumbSeparator,\n} from \"@/components/ui/breadcrumb\";\n\nconst BreadcrumbWithIcon = () => {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#' className='flex items-center gap-2'>\n            <HomeIcon className='size-4' />\n            Home\n          </BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbLink href='#' className='flex items-center gap-2'>\n            <Folder className='size-4' />\n            Documents\n          </BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator> / </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbPage className='flex items-center gap-2'>\n            <File className='size-4' />\n            Add Document\n          </BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n  );\n};\n\nexport default BreadcrumbWithIcon;\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "carousel-default",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/carousel/carousel-default.tsx",
        "content": "import * as React from \"react\";\n\nimport { Card, CardContent } from \"@/components/ui/card\";\nimport {\n  Carousel,\n  CarouselContent,\n  CarouselItem,\n  CarouselNext,\n  CarouselPrevious,\n} from \"@/components/ui/carousel\";\n\nexport default function CarouselDefault() {\n  return (\n    <Carousel className='w-full max-w-xs'>\n      <CarouselContent>\n        {Array.from({ length: 5 }).map((_, index) => (\n          <CarouselItem key={index}>\n            <div className='p-1'>\n              <Card>\n                <CardContent className='flex aspect-video items-center justify-center p-6'>\n                  <span className='text-4xl font-semibold'>{index + 1}</span>\n                </CardContent>\n              </Card>\n            </div>\n          </CarouselItem>\n        ))}\n      </CarouselContent>\n      <CarouselPrevious />\n      <CarouselNext />\n    </Carousel>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "carousel-multiple-slides",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/carousel/carousel-multiple-slides.tsx",
        "content": "import React from \"react\";\n\nimport { Card, CardContent } from \"@/components/ui/card\";\nimport {\n  Carousel,\n  CarouselContent,\n  CarouselItem,\n  CarouselNext,\n  CarouselPrevious,\n} from \"@/components/ui/carousel\";\n\nexport default function CarouselWithMultipleSlides() {\n  return (\n    <Carousel\n      opts={{\n        align: \"start\",\n      }}\n      className='w-full max-w-sm'\n    >\n      <CarouselContent>\n        {Array.from({ length: 5 }).map((_, index) => (\n          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>\n            <div className='p-1'>\n              <Card>\n                <CardContent className='flex aspect-square items-center justify-center p-6'>\n                  <span className='text-3xl font-semibold'>{index + 1}</span>\n                </CardContent>\n              </Card>\n            </div>\n          </CarouselItem>\n        ))}\n      </CarouselContent>\n      <CarouselPrevious />\n      <CarouselNext />\n    </Carousel>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "carousel-slide-status-2",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/carousel/carousel-slide-status-2.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport { Card, CardContent } from \"@/components/ui/card\";\nimport {\n  Carousel,\n  type CarouselApi,\n  CarouselContent,\n  CarouselItem,\n  CarouselNext,\n  CarouselPrevious,\n} from \"@/components/ui/carousel\";\n\nexport default function CarouselSlideStatus2() {\n  const [api, setApi] = React.useState<CarouselApi>();\n  const [current, setCurrent] = React.useState(0);\n  const [count, setCount] = React.useState(0);\n\n  React.useEffect(() => {\n    if (!api) {\n      return;\n    }\n\n    setCount(api.scrollSnapList().length);\n    setCurrent(api.selectedScrollSnap() + 1);\n\n    api.on(\"select\", () => {\n      setCurrent(api.selectedScrollSnap() + 1);\n    });\n  }, [api]);\n\n  return (\n    <div className='mx-auto max-w-xs'>\n      <Carousel setApi={setApi} className='w-full max-w-xs'>\n        <CarouselContent>\n          {Array.from({ length: 5 }).map((_, index) => (\n            <CarouselItem key={index}>\n              <Card>\n                <CardContent className='flex aspect-video items-center justify-center p-6'>\n                  <span className='text-4xl font-semibold'>{index + 1}</span>\n                </CardContent>\n              </Card>\n            </CarouselItem>\n          ))}\n        </CarouselContent>\n        <CarouselPrevious />\n        <CarouselNext />\n      </Carousel>\n      <div className='mt-4 text-center text-sm text-muted-foreground'>\n        {current} / {count}\n      </div>\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "carousel-slide-status",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/carousel/carousel-slide-status.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport { Card, CardContent } from \"@/components/ui/card\";\nimport {\n  Carousel,\n  type CarouselApi,\n  CarouselContent,\n  CarouselItem,\n  CarouselNext,\n  CarouselPrevious,\n} from \"@/components/ui/carousel\";\n\nexport default function CarouselSlideStatus() {\n  const [api, setApi] = React.useState<CarouselApi>();\n  const [current, setCurrent] = React.useState(0);\n  const [count, setCount] = React.useState(0);\n\n  React.useEffect(() => {\n    if (!api) {\n      return;\n    }\n\n    setCount(api.scrollSnapList().length);\n    setCurrent(api.selectedScrollSnap() + 1);\n\n    api.on(\"select\", () => {\n      setCurrent(api.selectedScrollSnap() + 1);\n    });\n  }, [api]);\n\n  return (\n    <div className='mx-auto max-w-xs'>\n      <Carousel setApi={setApi} className='w-full max-w-xs'>\n        <CarouselContent>\n          {Array.from({ length: 5 }).map((_, index) => (\n            <CarouselItem key={index}>\n              <Card>\n                <CardContent className='flex aspect-video items-center justify-center p-6'>\n                  <span className='text-4xl font-semibold'>{index + 1}</span>\n                </CardContent>\n              </Card>\n            </CarouselItem>\n          ))}\n        </CarouselContent>\n        <CarouselPrevious />\n        <CarouselNext />\n      </Carousel>\n      <div className='mt-4 text-center text-sm text-muted-foreground'>\n        Slide {current} of {count}\n      </div>\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "carousel-vertical",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/carousel/carousel-vertical.tsx",
        "content": "import * as React from \"react\";\n\nimport { Card, CardContent } from \"@/components/ui/card\";\nimport {\n  Carousel,\n  CarouselContent,\n  CarouselItem,\n  CarouselNext,\n  CarouselPrevious,\n} from \"@/components/ui/carousel\";\n\nexport default function CarouselVertical() {\n  return (\n    <Carousel\n      opts={{\n        align: \"start\",\n      }}\n      orientation='vertical'\n      className='w-full max-w-xs my-14'\n    >\n      <CarouselContent className='-mt-1 h-[200px]'>\n        {Array.from({ length: 5 }).map((_, index) => (\n          <CarouselItem key={index} className='pt-1 md:basis-1/2'>\n            <div className='p-1'>\n              <Card>\n                <CardContent className='flex items-center justify-center p-6'>\n                  <span className='text-3xl font-semibold'>{index + 1}</span>\n                </CardContent>\n              </Card>\n            </div>\n          </CarouselItem>\n        ))}\n      </CarouselContent>\n      <CarouselPrevious />\n      <CarouselNext />\n    </Carousel>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "carousel-with-footer",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/carousel/carousel-with-footer.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport { Card, CardContent } from \"@/components/ui/card\";\nimport {\n  Carousel,\n  type CarouselApi,\n  CarouselContent,\n  CarouselItem,\n  CarouselNext,\n  CarouselPrevious,\n} from \"@/components/ui/carousel\";\n\nimport { cn } from \"@/lib/utils\";\n\nexport default function CarouselWithFooter() {\n  const [api, setApi] = React.useState<CarouselApi>();\n  const [current, setCurrent] = React.useState(0);\n  const [count, setCount] = React.useState(0);\n\n  React.useEffect(() => {\n    if (!api) {\n      return;\n    }\n\n    setCount(api.scrollSnapList().length);\n    setCurrent(api.selectedScrollSnap() + 1);\n\n    api.on(\"select\", () => {\n      setCurrent(api.selectedScrollSnap() + 1);\n    });\n  }, [api]);\n\n  return (\n    <div className='mx-auto max-w-xs py-4'>\n      <Carousel setApi={setApi} className='w-full max-w-xs'>\n        <CarouselContent>\n          {Array.from({ length: 5 }).map((_, index) => (\n            <CarouselItem key={index}>\n              <Card>\n                <CardContent className='flex aspect-video items-center justify-center p-6'>\n                  <span className='text-4xl font-semibold'>{index + 1}</span>\n                </CardContent>\n              </Card>\n            </CarouselItem>\n          ))}\n        </CarouselContent>\n        <CarouselPrevious className='top-[calc(100%+0.5rem)] translate-y-0 left-0' />\n        <CarouselNext className='top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full' />\n      </Carousel>\n      <div className='mt-4 flex items-center justify-end gap-2'>\n        {Array.from({ length: count }).map((_, index) => (\n          <button\n            key={index}\n            onClick={() => api?.scrollTo(index)}\n            className={cn(\"h-3.5 w-3.5 rounded-full border-2\", {\n              \"border-primary\": current === index + 1,\n            })}\n          />\n        ))}\n      </div>\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "carousel-with-pagination",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/carousel/carousel-with-pagination.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport { Card, CardContent } from \"@/components/ui/card\";\nimport {\n  Carousel,\n  type CarouselApi,\n  CarouselContent,\n  CarouselItem,\n  CarouselNext,\n  CarouselPrevious,\n} from \"@/components/ui/carousel\";\n\nimport { cn } from \"@/lib/utils\";\n\nexport default function CarouselWithPagination() {\n  const [api, setApi] = React.useState<CarouselApi>();\n  const [current, setCurrent] = React.useState(0);\n  const [count, setCount] = React.useState(0);\n\n  React.useEffect(() => {\n    if (!api) {\n      return;\n    }\n\n    setCount(api.scrollSnapList().length);\n    setCurrent(api.selectedScrollSnap() + 1);\n\n    api.on(\"select\", () => {\n      setCurrent(api.selectedScrollSnap() + 1);\n    });\n  }, [api]);\n\n  return (\n    <div className='mx-auto max-w-xs'>\n      <Carousel setApi={setApi} className='w-full max-w-xs'>\n        <CarouselContent>\n          {Array.from({ length: 5 }).map((_, index) => (\n            <CarouselItem key={index}>\n              <Card>\n                <CardContent className='flex aspect-video items-center justify-center p-6'>\n                  <span className='text-4xl font-semibold'>{index + 1}</span>\n                </CardContent>\n              </Card>\n            </CarouselItem>\n          ))}\n        </CarouselContent>\n        <CarouselPrevious />\n        <CarouselNext />\n      </Carousel>\n      <div className='mt-4 flex items-center justify-center gap-2'>\n        {Array.from({ length: count }).map((_, index) => (\n          <button\n            key={index}\n            onClick={() => api?.scrollTo(index)}\n            className={cn(\"h-3.5 w-3.5 rounded-full border-2\", {\n              \"border-primary\": current === index + 1,\n            })}\n          />\n        ))}\n      </div>\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "carousel-with-progress",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/carousel/carousel-with-progress.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport { Card, CardContent } from \"@/components/ui/card\";\nimport {\n  Carousel,\n  type CarouselApi,\n  CarouselContent,\n  CarouselItem,\n  CarouselNext,\n  CarouselPrevious,\n} from \"@/components/ui/carousel\";\nimport { Progress } from \"@/components/ui/progress\";\n\nexport default function CarouselWithProgress() {\n  const [api, setApi] = React.useState<CarouselApi>();\n  const [current, setCurrent] = React.useState(0);\n  const [count, setCount] = React.useState(0);\n\n  const progress = (current * 100) / count;\n\n  React.useEffect(() => {\n    if (!api) {\n      return;\n    }\n\n    setCount(api.scrollSnapList().length);\n    setCurrent(api.selectedScrollSnap() + 1);\n\n    api.on(\"select\", () => {\n      setCurrent(api.selectedScrollSnap() + 1);\n    });\n  }, [api]);\n\n  return (\n    <div className='mx-auto max-w-xs py-4'>\n      <Carousel setApi={setApi} className='w-full max-w-xs'>\n        <CarouselContent>\n          {Array.from({ length: 5 }).map((_, index) => (\n            <CarouselItem key={index}>\n              <Card>\n                <CardContent className='flex aspect-video items-center justify-center p-6'>\n                  <span className='text-4xl font-semibold'>{index + 1}</span>\n                </CardContent>\n              </Card>\n            </CarouselItem>\n          ))}\n        </CarouselContent>\n        <CarouselPrevious className='top-[calc(100%+0.5rem)] translate-y-0 left-0' />\n        <CarouselNext className='top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full' />\n      </Carousel>\n      <Progress value={progress} className='mt-4 w-24 ml-auto' />\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "collapsible-default",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/collapsible/collapsible-default.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport { ChevronsUpDown } from \"lucide-react\";\n\nimport { Button } from \"@/components/ui/button\";\nimport {\n  Collapsible,\n  CollapsibleContent,\n  CollapsibleTrigger,\n} from \"@/components/ui/collapsible\";\n\nexport default function CollapsibleDefault() {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Collapsible\n      open={isOpen}\n      onOpenChange={setIsOpen}\n      className='w-[350px] space-y-2'\n    >\n      <div className='flex items-center justify-between space-x-4 px-4'>\n        <h4 className='text-sm font-semibold'>\n          @peduarte starred 3 repositories\n        </h4>\n        <CollapsibleTrigger asChild>\n          <Button variant='ghost' size='sm'>\n            <ChevronsUpDown className='h-4 w-4' />\n            <span className='sr-only'>Toggle</span>\n          </Button>\n        </CollapsibleTrigger>\n      </div>\n      <div className='rounded-md border px-4 py-2 font-mono text-sm shadow-sm'>\n        @radix-ui/primitives\n      </div>\n      <CollapsibleContent className='space-y-2'>\n        <div className='rounded-md border px-4 py-2 font-mono text-sm shadow-sm'>\n          @radix-ui/colors\n        </div>\n        <div className='rounded-md border px-4 py-2 font-mono text-sm shadow-sm'>\n          @stitches/react\n        </div>\n      </CollapsibleContent>\n    </Collapsible>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "collapsible-file-tree",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/collapsible/collapsible-file-tree.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport { ChevronRight, FileIcon, FolderIcon } from \"lucide-react\";\n\nimport {\n  Collapsible,\n  CollapsibleContent,\n  CollapsibleTrigger,\n} from \"@/components/ui/collapsible\";\n\ninterface FileTreeItem {\n  name: string;\n  type: \"folder\" | \"file\";\n  children?: FileTreeItem[];\n}\n\nconst fileTree: FileTreeItem[] = [\n  {\n    name: \"src\",\n    type: \"folder\",\n    children: [\n      {\n        name: \"components\",\n        type: \"folder\",\n        children: [\n          { name: \"button.tsx\", type: \"file\" },\n          { name: \"input.tsx\", type: \"file\" },\n        ],\n      },\n    ],\n  },\n  {\n    name: \"public\",\n    type: \"folder\",\n    children: [\n      { name: \"favicon.ico\", type: \"file\" },\n      { name: \"index.html\", type: \"file\" },\n    ],\n  },\n  {\n    name: \"package.json\",\n    type: \"file\",\n  },\n];\n\nexport default function FileTreeCollapsible() {\n  return (\n    <div className='w-[350px] bg-accent p-4 rounded-lg'>\n      <div className='w-full -ml-4'>\n        {fileTree.map((treeItem) => (\n          <FileTreeItem key={treeItem.name} {...treeItem} />\n        ))}\n      </div>\n    </div>\n  );\n}\n\nconst FileTreeItem = ({ name, type, children }: FileTreeItem) => {\n  if (type === \"file\") {\n    return (\n      <div className='flex items-center gap-2 pl-10 py-1'>\n        <FileIcon className='h-4 w-4' /> {name}\n      </div>\n    );\n  }\n\n  return (\n    <Collapsible className='pl-4'>\n      <CollapsibleTrigger className='w-full group flex items-center gap-2 py-1'>\n        <ChevronRight className='h-4 w-4 group-data-[state=open]:rotate-90 transition-transform' />\n        <span className='flex items-center gap-2'>\n          <FolderIcon className='h-4 w-4 fill-current' /> {name}\n        </span>\n      </CollapsibleTrigger>\n      <CollapsibleContent>\n        {children?.map((child) => (\n          <FileTreeItem key={child.name} {...child} />\n        ))}\n      </CollapsibleContent>\n    </Collapsible>\n  );\n};\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "collapsible-show-more",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/collapsible/collapsible-show-more.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport { ChevronDown, ChevronUp } from \"lucide-react\";\n\nimport { Button } from \"@/components/ui/button\";\nimport {\n  Collapsible,\n  CollapsibleContent,\n  CollapsibleTrigger,\n} from \"@/components/ui/collapsible\";\n\nexport default function ShowMoreCollapsible() {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  return (\n    <Collapsible\n      open={isOpen}\n      onOpenChange={setIsOpen}\n      className='w-full max-w-xs space-y-2'\n    >\n      {Array.from({ length: 2 }).map((_, index) => (\n        <div key={index} className='flex items-center gap-2'>\n          <div className='h-10 w-10 shrink-0 rounded-full bg-accent' />\n          <div className='w-full flex flex-col gap-1.5'>\n            <div className='h-2.5 w-[40%] rounded-lg bg-accent' />\n            <div className='h-2.5 w-full rounded-lg bg-accent' />\n          </div>\n        </div>\n      ))}\n      <CollapsibleContent className='space-y-2'>\n        {Array.from({ length: 3 }).map((_, index) => (\n          <div key={index + 2} className='flex items-center gap-2'>\n            <div className='h-10 w-10 shrink-0 rounded-full bg-accent' />\n            <div className='w-full flex flex-col gap-1.5'>\n              <div className='h-2.5 w-[40%] rounded-lg bg-accent' />\n              <div className='h-2.5 w-full rounded-lg bg-accent' />\n            </div>\n          </div>\n        ))}\n      </CollapsibleContent>\n      <CollapsibleTrigger asChild>\n        <Button\n          variant='outline'\n          size='sm'\n          className='!mt-4 data-[state=open]:hidden'\n        >\n          Show more <ChevronDown />\n        </Button>\n      </CollapsibleTrigger>\n      <CollapsibleTrigger asChild>\n        <Button\n          variant='outline'\n          size='sm'\n          className='!mt-4 data-[state=open]:inline-flex hidden'\n        >\n          Show less <ChevronUp />\n        </Button>\n      </CollapsibleTrigger>\n    </Collapsible>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "spinner-circle",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/spinner/spinner-circle.tsx",
        "content": "import { Loader2Icon } from \"lucide-react\";\n\nexport default function SpinnerCircle() {\n  return <Loader2Icon className='animate-spin' />;\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "spinner-default",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/spinner/spinner-default.tsx",
        "content": "import { LoaderIcon } from \"lucide-react\";\n\nexport default function SpinnerDefault() {\n  return <LoaderIcon className='animate-spin' />;\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "lazy-tooltip",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/tooltip/lazy-tooltip.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport { Button } from \"@/components/ui/button\";\nimport {\n  Tooltip,\n  TooltipContent,\n  TooltipTrigger,\n} from \"@/components/ui/tooltip\";\n\nexport default function LazyTooltip() {\n  const [enabled, setEnabled] = React.useState(true);\n\n  const triggerProps = {\n    onPointerEnter: () => setEnabled(true),\n    onTouchStart: () => setEnabled(true),\n  } as const;\n\n  if (!enabled) {\n    return (\n      <>\n        <Button variant='secondary'>Lazy Tooltip</Button>\n      </>\n    );\n  }\n\n  return (\n    <Tooltip>\n      <TooltipTrigger asChild>\n        <Button variant='outline' {...triggerProps}>\n          Lazy Tooltip\n        </Button>\n      </TooltipTrigger>\n      <TooltipContent>This mounts on first hover</TooltipContent>\n    </Tooltip>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "tooltip-directions",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/tooltip/tooltip-directions.tsx",
        "content": "import { Button } from \"@/components/ui/button\";\nimport {\n  Tooltip,\n  TooltipContent,\n  TooltipProvider,\n  TooltipTrigger,\n} from \"@/components/ui/tooltip\";\n\nexport default function TooltipDirections() {\n  return (\n    <TooltipProvider>\n      <div className='flex gap-2 flex-wrap'>\n        <Tooltip>\n          <TooltipTrigger asChild>\n            <Button variant='outline'>Left</Button>\n          </TooltipTrigger>\n          <TooltipContent side='left'>\n            <p>Hey there!</p>\n          </TooltipContent>\n        </Tooltip>\n\n        <Tooltip>\n          <TooltipTrigger asChild>\n            <Button variant='outline'>Top</Button>\n          </TooltipTrigger>\n          <TooltipContent side='top'>\n            <p>Hey there!</p>\n          </TooltipContent>\n        </Tooltip>\n\n        <Tooltip>\n          <TooltipTrigger asChild>\n            <Button variant='outline'>Bottom</Button>\n          </TooltipTrigger>\n          <TooltipContent side='bottom'>\n            <p>Hey there!</p>\n          </TooltipContent>\n        </Tooltip>\n\n        <Tooltip>\n          <TooltipTrigger asChild>\n            <Button variant='outline'>Right</Button>\n          </TooltipTrigger>\n          <TooltipContent side='right'>\n            <p>Hey there!</p>\n          </TooltipContent>\n        </Tooltip>\n      </div>\n    </TooltipProvider>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "with-arrrow-tooltip",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/tooltip/with-arrrow-tooltip.tsx",
        "content": "import * as TooltipPrimitive from \"@radix-ui/react-tooltip\";\n\nimport { Button } from \"@/components/ui/button\";\nimport {\n  Tooltip,\n  TooltipContent,\n  TooltipProvider,\n  TooltipTrigger,\n} from \"@/components/ui/tooltip\";\n\nexport default function WithArrowTooltip() {\n  return (\n    <TooltipProvider>\n      <Tooltip>\n        <TooltipTrigger asChild>\n          <Button variant='outline'>With Arrow</Button>\n        </TooltipTrigger>\n        <TooltipContent>\n          <p>Tooltip with Arrow</p>\n          <TooltipPrimitive.Arrow className='fill-foreground' />\n        </TooltipContent>\n      </Tooltip>\n    </TooltipProvider>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "with-delay-tooltip",
    "type": "registry:ui",
    "files": [
      {
        "path": "registry/default/snippets/tooltip/with-delay-tooltip.tsx",
        "content": "\"use client\";\n\nimport { ChangeEvent, useState } from \"react\";\n\nimport { Button } from \"@/components/ui/button\";\nimport { Input } from \"@/components/ui/input\";\nimport { Label } from \"@/components/ui/label\";\nimport {\n  Tooltip,\n  TooltipContent,\n  TooltipProvider,\n  TooltipTrigger,\n} from \"@/components/ui/tooltip\";\n\nexport default function WithDelayTooltipDemo() {\n  const [delayDuration, setDelayDuration] = useState<number | undefined>(500);\n\n  const handleDelayDurationChange = (e: ChangeEvent<HTMLInputElement>) => {\n    setDelayDuration(\n      e.target.value === \"\" ? undefined : Math.max(0, +e.target.value),\n    );\n  };\n\n  return (\n    <div className='flex w-full items-end gap-2 '>\n      <div className='flex flex-col gap-1'>\n        <Label>Delay</Label>\n        <Input\n          type='number'\n          value={delayDuration}\n          onChange={handleDelayDurationChange}\n        />\n      </div>\n      <TooltipProvider>\n        <Tooltip delayDuration={delayDuration}>\n          <TooltipTrigger asChild>\n            <Button variant='outline'>Hover</Button>\n          </TooltipTrigger>\n          <TooltipContent>\n            <p>Hello there!</p>\n          </TooltipContent>\n        </Tooltip>\n      </TooltipProvider>\n    </div>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  }
];
