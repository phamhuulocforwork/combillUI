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
          'import * as React from "react";\r\n\r\ntype UseBooleanReturn = {\r\n  value: boolean;\r\n  setValue: React.Dispatch<React.SetStateAction<boolean>>;\r\n  setTrue: () => void;\r\n  setFalse: () => void;\r\n  toggle: () => void;\r\n};\r\n\r\nexport function useBoolean(defaultValue = false): UseBooleanReturn {\r\n  if (typeof defaultValue !== "boolean") {\r\n    throw new Error("defaultValue must be `true` or `false`");\r\n  }\r\n  const [value, setValue] = React.useState(defaultValue);\r\n\r\n  const toggle = React.useCallback(() => {\r\n    setValue((x) => !x);\r\n  }, []);\r\n\r\n  const setTrue = React.useCallback(() => {\r\n    setValue(true);\r\n  }, []);\r\n\r\n  const setFalse = React.useCallback(() => {\r\n    setValue(false);\r\n  }, []);\r\n\r\n  return { value, setValue, setTrue, setFalse, toggle };\r\n}\r\n',
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
          'import * as React from "react";\r\n\r\nconst DEFAULT_EVENTS = ["mousedown", "touchstart"];\r\n\r\nexport function useClickOutside<T extends HTMLElement = any>(\r\n  handler: () => void,\r\n  events?: string[] | null,\r\n  nodes?: (HTMLElement | null)[],\r\n) {\r\n  const ref = React.useRef<T>(null);\r\n\r\n  React.useEffect(() => {\r\n    const listener = (event: any) => {\r\n      const { target } = event ?? {};\r\n      if (Array.isArray(nodes)) {\r\n        const shouldIgnore =\r\n          target?.hasAttribute("data-ignore-outside-clicks") ||\r\n          (!document.body.contains(target) && target.tagName !== "HTML");\r\n        const shouldTrigger = nodes.every(\r\n          (node) => !!node && !event.composedPath().includes(node),\r\n        );\r\n        shouldTrigger && !shouldIgnore && handler();\r\n      } else if (ref.current && !ref.current.contains(target)) {\r\n        handler();\r\n      }\r\n    };\r\n\r\n    (events || DEFAULT_EVENTS).forEach((fn) =>\r\n      document.addEventListener(fn, listener),\r\n    );\r\n\r\n    return () => {\r\n      (events || DEFAULT_EVENTS).forEach((fn) =>\r\n        document.removeEventListener(fn, listener),\r\n      );\r\n    };\r\n  }, [ref, handler, nodes]);\r\n\r\n  return ref;\r\n}\r\n',
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
          'import * as React from "react";\r\n\r\nexport function useDebounce<T>(value: T, delay?: number): T {\r\n  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);\r\n\r\n  React.useEffect(() => {\r\n    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);\r\n    return () => clearTimeout(timer);\r\n  }, [value, delay]);\r\n\r\n  return debouncedValue;\r\n}\r\n',
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
          'import * as React from "react";\r\n\r\nimport debounce from "lodash.debounce";\r\n\r\nconst useIsMobile = (): boolean => {\r\n  const [isMobile, setIsMobile] = React.useState(false);\r\n\r\n  React.useLayoutEffect(() => {\r\n    const updateSize = (): void => {\r\n      setIsMobile(window.innerWidth < 768);\r\n    };\r\n    const debouncedUpdateSize = debounce(updateSize, 250);\r\n\r\n    updateSize();\r\n\r\n    window.addEventListener("resize", debouncedUpdateSize);\r\n\r\n    return (): void =>\r\n      window.removeEventListener("resize", debouncedUpdateSize);\r\n  }, []);\r\n\r\n  return isMobile;\r\n};\r\n\r\nexport default useIsMobile;\r\n',
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
          'import { useEffect, useState } from "react";\r\n\r\nexport function useMounted() {\r\n  const [mounted, setMounted] = useState(false);\r\n  useEffect(() => setMounted(true), []);\r\n  return mounted;\r\n}\r\n',
        type: "registry:hook",
      },
    ],
  },
];
