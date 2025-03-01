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
          '"use client";\r\n\r\nimport * as React from "react";\r\n\r\ntype UseBooleanReturn = {\r\n  value: boolean;\r\n  setValue: React.Dispatch<React.SetStateAction<boolean>>;\r\n  setTrue: () => void;\r\n  setFalse: () => void;\r\n  toggle: () => void;\r\n};\r\n\r\nexport function useBoolean(defaultValue = false): UseBooleanReturn {\r\n  if (typeof defaultValue !== "boolean") {\r\n    throw new Error("defaultValue must be `true` or `false`");\r\n  }\r\n  const [value, setValue] = React.useState(defaultValue);\r\n\r\n  const toggle = React.useCallback(() => {\r\n    setValue((x) => !x);\r\n  }, []);\r\n\r\n  const setTrue = React.useCallback(() => {\r\n    setValue(true);\r\n  }, []);\r\n\r\n  const setFalse = React.useCallback(() => {\r\n    setValue(false);\r\n  }, []);\r\n\r\n  return { value, setValue, setTrue, setFalse, toggle };\r\n}\r\n',
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
          'import * as React from "react";\r\n\r\nexport function useDebounce<T>(value: T, delay?: number): T {\r\n  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);\r\n\r\n  React.useEffect(() => {\r\n    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);\r\n    return () => clearTimeout(timer);\r\n  }, [value, delay]);\r\n\r\n  return debouncedValue;\r\n}\r\n',
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
          'import { useLayoutEffect, useState } from "react";\r\n\r\nimport debounce from "lodash.debounce";\r\n\r\nconst useIsMobile = (): boolean => {\r\n  const [isMobile, setIsMobile] = useState(false);\r\n\r\n  useLayoutEffect(() => {\r\n    const updateSize = (): void => {\r\n      setIsMobile(window.innerWidth < 768);\r\n    };\r\n    const debouncedUpdateSize = debounce(updateSize, 250);\r\n\r\n    updateSize();\r\n\r\n    window.addEventListener("resize", debouncedUpdateSize);\r\n\r\n    return (): void =>\r\n      window.removeEventListener("resize", debouncedUpdateSize);\r\n  }, []);\r\n\r\n  return isMobile;\r\n};\r\n\r\nexport default useIsMobile;\r\n',
        type: "registry:hook",
      },
    ],
  },
];
