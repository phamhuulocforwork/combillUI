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
          'import * as React from "react";\n\nconst DEFAULT_EVENTS = ["mousedown", "touchstart"];\n\nexport function useClickOutside<T extends HTMLElement = any>(\n  handler: () => void,\n  events?: string[] | null,\n  nodes?: (HTMLElement | null)[],\n) {\n  const ref = React.useRef<T>(null);\n\n  React.useEffect(() => {\n    const listener = (event: any) => {\n      const { target } = event ?? {};\n      if (Array.isArray(nodes)) {\n        const shouldIgnore =\n          target?.hasAttribute("data-ignore-outside-clicks") ||\n          (!document.body.contains(target) && target.tagName !== "HTML");\n        const shouldTrigger = nodes.every(\n          (node) => !!node && !event.composedPath().includes(node),\n        );\n        shouldTrigger && !shouldIgnore && handler();\n      } else if (ref.current && !ref.current.contains(target)) {\n        handler();\n      }\n    };\n\n    (events || DEFAULT_EVENTS).forEach((fn) =>\n      document.addEventListener(fn, listener),\n    );\n\n    return () => {\n      (events || DEFAULT_EVENTS).forEach((fn) =>\n        document.removeEventListener(fn, listener),\n      );\n    };\n  }, [ref, handler, nodes]);\n\n  return ref;\n}\n',
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
    name: "use-element-size",
    type: "registry:hook",
    registryDependencies: [],
    dependencies: ["react"],
    devDependencies: [],
    files: [
      {
        path: "registry/default/hooks/use-element-size.ts",
        content:
          'import * as React from "react";\r\n\r\ntype ObserverRect = Omit<DOMRectReadOnly, "toJSON">;\r\n\r\nconst defaultState: ObserverRect = {\r\n  x: 0,\r\n  y: 0,\r\n  width: 0,\r\n  height: 0,\r\n  top: 0,\r\n  left: 0,\r\n  bottom: 0,\r\n  right: 0,\r\n};\r\n\r\nexport function useResizeObserver<T extends HTMLElement = any>(\r\n  options?: ResizeObserverOptions,\r\n) {\r\n  const frameID = React.useRef(0);\r\n  const ref = React.useRef<T>(null);\r\n\r\n  const [rect, setRect] = React.useState<ObserverRect>(defaultState);\r\n\r\n  const observer = React.useMemo(\r\n    () =>\r\n      typeof window !== "undefined"\r\n        ? new ResizeObserver((entries: any) => {\r\n            const entry = entries[0];\r\n\r\n            if (entry) {\r\n              cancelAnimationFrame(frameID.current);\r\n\r\n              frameID.current = requestAnimationFrame(() => {\r\n                if (ref.current) {\r\n                  setRect(entry.contentRect);\r\n                }\r\n              });\r\n            }\r\n          })\r\n        : null,\r\n    [],\r\n  );\r\n\r\n  React.useEffect(() => {\r\n    if (ref.current) {\r\n      observer?.observe(ref.current, options);\r\n    }\r\n\r\n    return () => {\r\n      observer?.disconnect();\r\n\r\n      if (frameID.current) {\r\n        cancelAnimationFrame(frameID.current);\r\n      }\r\n    };\r\n  }, [ref.current]);\r\n\r\n  return [ref, rect] as const;\r\n}\r\n\r\nexport function useElementSize<T extends HTMLElement = any>(\r\n  options?: ResizeObserverOptions,\r\n) {\r\n  const [ref, { width, height }] = useResizeObserver<T>(options);\r\n  return { ref, width, height };\r\n}\r\n',
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-mobile",
    type: "registry:hook",
    registryDependencies: [],
    dependencies: ["react", "lodash/debounce"],
    devDependencies: [],
    files: [
      {
        path: "registry/default/hooks/use-mobile.tsx",
        content:
          'import * as React from "react";\n\nimport debounce from "lodash/debounce";\n\nconst useIsMobile = (): boolean => {\n  const [isMobile, setIsMobile] = React.useState(false);\n\n  React.useLayoutEffect(() => {\n    const updateSize = (): void => {\n      setIsMobile(window.innerWidth < 768);\n    };\n    const debouncedUpdateSize = debounce(updateSize, 250);\n\n    updateSize();\n\n    window.addEventListener("resize", debouncedUpdateSize);\n\n    return (): void =>\n      window.removeEventListener("resize", debouncedUpdateSize);\n  }, []);\n\n  return isMobile;\n};\n\nexport default useIsMobile;\n',
        type: "registry:hook",
      },
    ],
  },
];
