import type { Registry } from '@/registry/schema';

export const ui: Registry = [
  {
    name: 'responsive-textarea',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['react'],
    devDependencies: [],
    tailwind: {},
    cssVars: {
      light: {},
      dark: {},
    },
    files: [
      {
        path: 'registry/default/ui/responsive-textarea.tsx',
        content:
          "'use client';\n\nimport * as React from 'react';\n\nimport { cn } from '@/lib/utils';\n\nexport interface ResponsiveTextareaProps\n  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}\n\nconst ResponsiveTextarea = React.forwardRef<\n  HTMLTextAreaElement,\n  ResponsiveTextareaProps\n>(({ className, ...props }, ref) => {\n  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);\n  const [val, setVal] = React.useState<string>('');\n\n  React.useEffect(() => {\n    if (textAreaRef.current) {\n      textAreaRef.current.style.height = 'auto';\n      textAreaRef.current.style.height =\n        textAreaRef.current.scrollHeight + 'px';\n    }\n  }, [val]);\n\n  return (\n    <textarea\n      className={cn(\n        'placeholder:text-muted-foreground flex min-h-[80px] w-full resize-none overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',\n        className,\n      )}\n      ref={textAreaRef}\n      onChange={(e) => setVal(e.target.value)}\n      {...props}\n    />\n  );\n});\nResponsiveTextarea.displayName = 'ResponsiveTextarea';\n\nexport { ResponsiveTextarea };\n",
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'test-component',
    type: 'registry:ui',
    registryDependencies: ['button'],
    dependencies: ['react'],
    devDependencies: [],
    tailwind: {},
    cssVars: {
      light: {},
      dark: {},
    },
    files: [
      {
        path: 'registry/default/ui/test-component.tsx',
        content:
          "'use client';\r\n\r\nimport * as React from 'react';\r\n\r\nimport { Button } from '@/components/ui/button';\r\n\r\nexport function TestComponent() {\r\n  const [count, setCount] = React.useState(0);\r\n\r\n  return (\r\n    <div className='flex flex-col items-center gap-4'>\r\n      <div className='text-4xl font-bold'>{count}</div>\r\n      <div className='flex gap-2'>\r\n        <Button variant='outline' onClick={() => setCount((prev) => prev - 1)}>\r\n          -\r\n        </Button>\r\n        <Button variant='outline' onClick={() => setCount((prev) => prev + 1)}>\r\n          +\r\n        </Button>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n",
        type: 'registry:ui',
      },
    ],
  },
];
