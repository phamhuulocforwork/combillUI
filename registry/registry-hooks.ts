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
    name: "use-callback-ref",
    type: "registry:hook",
    registryDependencies: [],
    dependencies: ["react"],
    devDependencies: [],
    files: [
      {
        path: "registry/default/hooks/use-callback-ref.ts",
        content:
          'import * as React from "react";\r\n\r\nfunction useCallbackRef<T extends (...args: never[]) => unknown>(\r\n  callback: T | undefined,\r\n): T {\r\n  const callbackRef = React.useRef(callback);\r\n\r\n  React.useEffect(() => {\r\n    callbackRef.current = callback;\r\n  });\r\n\r\n  return React.useMemo(\r\n    () => ((...args) => callbackRef.current?.(...args)) as T,\r\n    [],\r\n  );\r\n}\r\n\r\nexport { useCallbackRef };\r\n',
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
    name: "use-controllable-state",
    type: "registry:hook",
    registryDependencies: [],
    dependencies: ["react"],
    devDependencies: [],
    files: [
      {
        path: "registry/default/hooks/use-controllable-state.ts",
        content:
          'import * as React from "react";\r\n\r\nimport { useCallbackRef } from "@/registry/default/hooks/use-callback-ref";\r\n\r\ntype UseControllableStateParams<T> = {\r\n  prop?: T | undefined;\r\n  defaultProp?: T | undefined;\r\n  onChange?: (state: T) => void;\r\n};\r\n\r\ntype SetStateFn<T> = (prevState?: T) => T;\r\n\r\nfunction useControllableState<T>({\r\n  prop,\r\n  defaultProp,\r\n  onChange = () => {},\r\n}: UseControllableStateParams<T>) {\r\n  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({\r\n    defaultProp,\r\n    onChange,\r\n  });\r\n  const isControlled = prop !== undefined;\r\n  const value = isControlled ? prop : uncontrolledProp;\r\n  const handleChange = useCallbackRef(onChange);\r\n\r\n  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> =\r\n    React.useCallback(\r\n      (nextValue) => {\r\n        if (isControlled) {\r\n          const setter = nextValue as SetStateFn<T>;\r\n          const value =\r\n            typeof nextValue === "function" ? setter(prop) : nextValue;\r\n          if (value !== prop) handleChange(value as T);\r\n        } else {\r\n          setUncontrolledProp(nextValue);\r\n        }\r\n      },\r\n      [isControlled, prop, setUncontrolledProp, handleChange],\r\n    );\r\n\r\n  return [value, setValue] as const;\r\n}\r\n\r\nfunction useUncontrolledState<T>({\r\n  defaultProp,\r\n  onChange,\r\n}: Omit<UseControllableStateParams<T>, "prop">) {\r\n  const uncontrolledState = React.useState<T | undefined>(defaultProp);\r\n  const [value] = uncontrolledState;\r\n  const prevValueRef = React.useRef(value);\r\n  const handleChange = useCallbackRef(onChange);\r\n\r\n  React.useEffect(() => {\r\n    if (prevValueRef.current !== value) {\r\n      handleChange(value as T);\r\n      prevValueRef.current = value;\r\n    }\r\n  }, [value, prevValueRef, handleChange]);\r\n\r\n  return uncontrolledState;\r\n}\r\n\r\nexport { useControllableState };\r\n',
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
          'import * as React from "react";\n\nfunction getFullscreenElement(): HTMLElement | null {\n  const _document = window.document as any;\n\n  const fullscreenElement =\n    _document.fullscreenElement ||\n    _document.webkitFullscreenElement ||\n    _document.mozFullScreenElement ||\n    _document.msFullscreenElement;\n\n  return fullscreenElement;\n}\n\nfunction exitFullscreen() {\n  const _document = window.document as any;\n\n  if (typeof _document.exitFullscreen === "function") {\n    return _document.exitFullscreen();\n  }\n  if (typeof _document.msExitFullscreen === "function") {\n    return _document.msExitFullscreen();\n  }\n  if (typeof _document.webkitExitFullscreen === "function") {\n    return _document.webkitExitFullscreen();\n  }\n  if (typeof _document.mozCancelFullScreen === "function") {\n    return _document.mozCancelFullScreen();\n  }\n\n  return null;\n}\n\nfunction enterFullScreen(element: HTMLElement) {\n  const _element = element as any;\n\n  return (\n    _element.requestFullscreen?.() ||\n    _element.msRequestFullscreen?.() ||\n    _element.webkitEnterFullscreen?.() ||\n    _element.webkitRequestFullscreen?.() ||\n    _element.mozRequestFullscreen?.()\n  );\n}\n\nconst prefixes = ["", "webkit", "moz", "ms"];\n\nfunction addEvents(\n  element: HTMLElement,\n  {\n    onFullScreen,\n    onError,\n  }: { onFullScreen: (event: Event) => void; onError: (event: Event) => void },\n) {\n  prefixes.forEach((prefix) => {\n    element.addEventListener(`${prefix}fullscreenchange`, onFullScreen);\n    element.addEventListener(`${prefix}fullscreenerror`, onError);\n  });\n\n  return () => {\n    prefixes.forEach((prefix) => {\n      element.removeEventListener(`${prefix}fullscreenchange`, onFullScreen);\n      element.removeEventListener(`${prefix}fullscreenerror`, onError);\n    });\n  };\n}\n\nexport function useFullscreen<T extends HTMLElement = any>() {\n  const [fullscreen, setFullscreen] = React.useState<boolean>(false);\n\n  const _ref = React.useRef<T>(null);\n\n  const handleFullscreenChange = React.useCallback(\n    (event: Event) => {\n      setFullscreen(event.target === getFullscreenElement());\n    },\n    [setFullscreen],\n  );\n\n  const handleFullscreenError = React.useCallback(\n    (event: Event) => {\n      setFullscreen(false);\n      // eslint-disable-next-line no-console\n      console.error(\n        `[@mantine/hooks] use-fullscreen: Error attempting full-screen mode method: ${event} (${event.target})`,\n      );\n    },\n    [setFullscreen],\n  );\n\n  const toggle = React.useCallback(async () => {\n    if (!getFullscreenElement()) {\n      await enterFullScreen(_ref.current!);\n    } else {\n      await exitFullscreen();\n    }\n  }, []);\n\n  const ref = React.useCallback((element: T | null) => {\n    if (element === null) {\n      _ref.current = window.document.documentElement as T;\n    } else {\n      _ref.current = element;\n    }\n  }, []);\n\n  React.useEffect(() => {\n    if (!_ref.current && window.document) {\n      _ref.current = window.document.documentElement as T;\n      return addEvents(_ref.current, {\n        onFullScreen: handleFullscreenChange,\n        onError: handleFullscreenError,\n      });\n    }\n\n    if (_ref.current) {\n      return addEvents(_ref.current, {\n        onFullScreen: handleFullscreenChange,\n        onError: handleFullscreenError,\n      });\n    }\n\n    return undefined;\n  }, [_ref.current]);\n\n  return { ref, toggle, fullscreen } as const;\n}\n',
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
  {
    name: "use-mounted",
    type: "registry:hook",
    registryDependencies: [],
    dependencies: ["react"],
    devDependencies: [],
    files: [
      {
        path: "registry/default/hooks/use-mounted.ts",
        content:
          'import { useEffect, useState } from "react";\n\nexport function useMounted() {\n  const [mounted, setMounted] = useState(false);\n  useEffect(() => setMounted(true), []);\n  return mounted;\n}\n',
        type: "registry:hook",
      },
    ],
  },
];
