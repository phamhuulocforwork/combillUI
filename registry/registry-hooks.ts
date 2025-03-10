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
        path: "registry/default/hooks/use-boolean.ts",
        content:
          'import * as React from "react";\n\ntype UseBooleanReturn = {\n  value: boolean;\n  setValue: React.Dispatch<React.SetStateAction<boolean>>;\n  setTrue: () => void;\n  setFalse: () => void;\n  toggle: () => void;\n};\n\nexport function useBoolean(defaultValue = false): UseBooleanReturn {\n  if (typeof defaultValue !== "boolean") {\n    throw new Error("defaultValue must be `true` or `false`");\n  }\n  const [value, setValue] = React.useState(defaultValue);\n\n  const toggle = React.useCallback(() => {\n    setValue((x) => !x);\n  }, []);\n\n  const setTrue = React.useCallback(() => {\n    setValue(true);\n  }, []);\n\n  const setFalse = React.useCallback(() => {\n    setValue(false);\n  }, []);\n\n  return { value, setValue, setTrue, setFalse, toggle };\n}\n',
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
        path: "registry/default/hooks/use-click-outside.ts",
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
          'import * as React from "react";\n\ntype ObserverRect = Omit<DOMRectReadOnly, "toJSON">;\n\nconst defaultState: ObserverRect = {\n  x: 0,\n  y: 0,\n  width: 0,\n  height: 0,\n  top: 0,\n  left: 0,\n  bottom: 0,\n  right: 0,\n};\n\nexport function useResizeObserver<T extends HTMLElement = any>(\n  options?: ResizeObserverOptions,\n) {\n  const frameID = React.useRef(0);\n  const ref = React.useRef<T>(null);\n\n  const [rect, setRect] = React.useState<ObserverRect>(defaultState);\n\n  const observer = React.useMemo(\n    () =>\n      typeof window !== "undefined"\n        ? new ResizeObserver((entries: any) => {\n            const entry = entries[0];\n\n            if (entry) {\n              cancelAnimationFrame(frameID.current);\n\n              frameID.current = requestAnimationFrame(() => {\n                if (ref.current) {\n                  setRect(entry.contentRect);\n                }\n              });\n            }\n          })\n        : null,\n    [],\n  );\n\n  React.useEffect(() => {\n    if (ref.current) {\n      observer?.observe(ref.current, options);\n    }\n\n    return () => {\n      observer?.disconnect();\n\n      if (frameID.current) {\n        cancelAnimationFrame(frameID.current);\n      }\n    };\n  }, [ref.current]);\n\n  return [ref, rect] as const;\n}\n\nexport function useElementSize<T extends HTMLElement = any>(\n  options?: ResizeObserverOptions,\n) {\n  const [ref, { width, height }] = useResizeObserver<T>(options);\n  return { ref, width, height };\n}\n',
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-fullscreen",
    type: "registry:hook",
    registryDependencies: [],
    dependencies: ["react"],
    devDependencies: [],
    files: [
      {
        path: "registry/default/hooks/use-fullscreen.ts",
        content:
          'import * as React from "react";\r\n\r\nfunction getFullscreenElement(): HTMLElement | null {\r\n  const _document = window.document as any;\r\n\r\n  const fullscreenElement =\r\n    _document.fullscreenElement ||\r\n    _document.webkitFullscreenElement ||\r\n    _document.mozFullScreenElement ||\r\n    _document.msFullscreenElement;\r\n\r\n  return fullscreenElement;\r\n}\r\n\r\nfunction exitFullscreen() {\r\n  const _document = window.document as any;\r\n\r\n  if (typeof _document.exitFullscreen === "function") {\r\n    return _document.exitFullscreen();\r\n  }\r\n  if (typeof _document.msExitFullscreen === "function") {\r\n    return _document.msExitFullscreen();\r\n  }\r\n  if (typeof _document.webkitExitFullscreen === "function") {\r\n    return _document.webkitExitFullscreen();\r\n  }\r\n  if (typeof _document.mozCancelFullScreen === "function") {\r\n    return _document.mozCancelFullScreen();\r\n  }\r\n\r\n  return null;\r\n}\r\n\r\nfunction enterFullScreen(element: HTMLElement) {\r\n  const _element = element as any;\r\n\r\n  return (\r\n    _element.requestFullscreen?.() ||\r\n    _element.msRequestFullscreen?.() ||\r\n    _element.webkitEnterFullscreen?.() ||\r\n    _element.webkitRequestFullscreen?.() ||\r\n    _element.mozRequestFullscreen?.()\r\n  );\r\n}\r\n\r\nconst prefixes = ["", "webkit", "moz", "ms"];\r\n\r\nfunction addEvents(\r\n  element: HTMLElement,\r\n  {\r\n    onFullScreen,\r\n    onError,\r\n  }: { onFullScreen: (event: Event) => void; onError: (event: Event) => void },\r\n) {\r\n  prefixes.forEach((prefix) => {\r\n    element.addEventListener(`${prefix}fullscreenchange`, onFullScreen);\r\n    element.addEventListener(`${prefix}fullscreenerror`, onError);\r\n  });\r\n\r\n  return () => {\r\n    prefixes.forEach((prefix) => {\r\n      element.removeEventListener(`${prefix}fullscreenchange`, onFullScreen);\r\n      element.removeEventListener(`${prefix}fullscreenerror`, onError);\r\n    });\r\n  };\r\n}\r\n\r\nexport function useFullscreen<T extends HTMLElement = any>() {\r\n  const [fullscreen, setFullscreen] = React.useState<boolean>(false);\r\n\r\n  const _ref = React.useRef<T>(null);\r\n\r\n  const handleFullscreenChange = React.useCallback(\r\n    (event: Event) => {\r\n      setFullscreen(event.target === getFullscreenElement());\r\n    },\r\n    [setFullscreen],\r\n  );\r\n\r\n  const handleFullscreenError = React.useCallback(\r\n    (event: Event) => {\r\n      setFullscreen(false);\r\n      // eslint-disable-next-line no-console\r\n      console.error(\r\n        `[@mantine/hooks] use-fullscreen: Error attempting full-screen mode method: ${event} (${event.target})`,\r\n      );\r\n    },\r\n    [setFullscreen],\r\n  );\r\n\r\n  const toggle = React.useCallback(async () => {\r\n    if (!getFullscreenElement()) {\r\n      await enterFullScreen(_ref.current!);\r\n    } else {\r\n      await exitFullscreen();\r\n    }\r\n  }, []);\r\n\r\n  const ref = React.useCallback((element: T | null) => {\r\n    if (element === null) {\r\n      _ref.current = window.document.documentElement as T;\r\n    } else {\r\n      _ref.current = element;\r\n    }\r\n  }, []);\r\n\r\n  React.useEffect(() => {\r\n    if (!_ref.current && window.document) {\r\n      _ref.current = window.document.documentElement as T;\r\n      return addEvents(_ref.current, {\r\n        onFullScreen: handleFullscreenChange,\r\n        onError: handleFullscreenError,\r\n      });\r\n    }\r\n\r\n    if (_ref.current) {\r\n      return addEvents(_ref.current, {\r\n        onFullScreen: handleFullscreenChange,\r\n        onError: handleFullscreenError,\r\n      });\r\n    }\r\n\r\n    return undefined;\r\n  }, [_ref.current]);\r\n\r\n  return { ref, toggle, fullscreen } as const;\r\n}\r\n',
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
        path: "registry/default/hooks/use-mobile.ts",
        content:
          'import * as React from "react";\n\nimport debounce from "lodash.debounce";\n\nconst useIsMobile = (): boolean => {\n  const [isMobile, setIsMobile] = React.useState(false);\n\n  React.useLayoutEffect(() => {\n    const updateSize = (): void => {\n      setIsMobile(window.innerWidth < 768);\n    };\n    const debouncedUpdateSize = debounce(updateSize, 250);\n\n    updateSize();\n\n    window.addEventListener("resize", debouncedUpdateSize);\n\n    return (): void =>\n      window.removeEventListener("resize", debouncedUpdateSize);\n  }, []);\n\n  return isMobile;\n};\n\nexport default useIsMobile;\n',
        type: "registry:hook",
      },
    ],
  },
];
