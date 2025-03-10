import type { Registry } from "@/registry/schema";

export const hooks: Registry = [
  {
    name: "use-boolean",
    type: "registry:hook",
    registryDependencies: [],
    dependencies: ["react"],
    devDependencies: [],
    files: [
      {
        path: "registry/default/hooks/use-boolean.tsx",
        content:
          '"use client";\n\nimport * as React from "react";\n\ntype UseBooleanReturn = {\n  value: boolean;\n  setValue: React.Dispatch<React.SetStateAction<boolean>>;\n  setTrue: () => void;\n  setFalse: () => void;\n  toggle: () => void;\n};\n\nexport function useBoolean(defaultValue = false): UseBooleanReturn {\n  if (typeof defaultValue !== "boolean") {\n    throw new Error("defaultValue must be `true` or `false`");\n  }\n  const [value, setValue] = React.useState(defaultValue);\n\n  const toggle = React.useCallback(() => {\n    setValue((x) => !x);\n  }, []);\n\n  const setTrue = React.useCallback(() => {\n    setValue(true);\n  }, []);\n\n  const setFalse = React.useCallback(() => {\n    setValue(false);\n  }, []);\n\n  return { value, setValue, setTrue, setFalse, toggle };\n}\n',
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-click-outside",
    type: "registry:hook",
    registryDependencies: [],
    dependencies: ["react"],
    devDependencies: [],
    files: [
      {
        path: "registry/default/hooks/use-click-outside.tsx",
        content:
          'import { useEffect, useRef } from "react";\r\n\r\nconst DEFAULT_EVENTS = ["mousedown", "touchstart"];\r\n\r\nexport function useClickOutside<T extends HTMLElement = any>(\r\n  handler: () => void,\r\n  events?: string[] | null,\r\n  nodes?: (HTMLElement | null)[],\r\n) {\r\n  const ref = useRef<T>(null);\r\n\r\n  useEffect(() => {\r\n    const listener = (event: any) => {\r\n      const { target } = event ?? {};\r\n      if (Array.isArray(nodes)) {\r\n        const shouldIgnore =\r\n          target?.hasAttribute("data-ignore-outside-clicks") ||\r\n          (!document.body.contains(target) && target.tagName !== "HTML");\r\n        const shouldTrigger = nodes.every(\r\n          (node) => !!node && !event.composedPath().includes(node),\r\n        );\r\n        shouldTrigger && !shouldIgnore && handler();\r\n      } else if (ref.current && !ref.current.contains(target)) {\r\n        handler();\r\n      }\r\n    };\r\n\r\n    (events || DEFAULT_EVENTS).forEach((fn) =>\r\n      document.addEventListener(fn, listener),\r\n    );\r\n\r\n    return () => {\r\n      (events || DEFAULT_EVENTS).forEach((fn) =>\r\n        document.removeEventListener(fn, listener),\r\n      );\r\n    };\r\n  }, [ref, handler, nodes]);\r\n\r\n  return ref;\r\n}\r\n',
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-debounce",
    type: "registry:hook",
    registryDependencies: [],
    dependencies: ["react"],
    devDependencies: [],
    files: [
      {
        path: "registry/default/hooks/use-debounce.ts",
        content:
          'import * as React from "react";\n\nexport function useDebounce<T>(value: T, delay?: number): T {\n  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);\n\n  React.useEffect(() => {\n    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  return debouncedValue;\n}\n',
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-mobile",
    type: "registry:hook",
    registryDependencies: [],
    dependencies: ["react", "lodash.debounce"],
    devDependencies: [],
    files: [
      {
        path: "registry/default/hooks/use-mobile.tsx",
        content:
          'import { useLayoutEffect, useState } from "react";\n\nimport debounce from "lodash.debounce";\n\nconst useIsMobile = (): boolean => {\n  const [isMobile, setIsMobile] = useState(false);\n\n  useLayoutEffect(() => {\n    const updateSize = (): void => {\n      setIsMobile(window.innerWidth < 768);\n    };\n    const debouncedUpdateSize = debounce(updateSize, 250);\n\n    updateSize();\n\n    window.addEventListener("resize", debouncedUpdateSize);\n\n    return (): void =>\n      window.removeEventListener("resize", debouncedUpdateSize);\n  }, []);\n\n  return isMobile;\n};\n\nexport default useIsMobile;\n',
        type: "registry:hook",
      },
    ],
  },
];
