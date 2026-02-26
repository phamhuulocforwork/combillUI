import type { Registry } from "@/registry/schema";

export const hooks: Registry = [
  {
    "name": "use-boolean",
    "type": "registry:hook",
    "registryDependencies": [],
    "dependencies": [
      "react"
    ],
    "devDependencies": [],
    "files": [
      {
        "path": "registry/default/hooks/use-boolean.ts",
        "content": "import * as React from \"react\";\n\ntype UseBooleanReturn = {\n  value: boolean;\n  setValue: React.Dispatch<React.SetStateAction<boolean>>;\n  setTrue: () => void;\n  setFalse: () => void;\n  toggle: () => void;\n};\n\nexport function useBoolean(defaultValue = false): UseBooleanReturn {\n  if (typeof defaultValue !== \"boolean\") {\n    throw new Error(\"defaultValue must be `true` or `false`\");\n  }\n  const [value, setValue] = React.useState(defaultValue);\n\n  const toggle = React.useCallback(() => {\n    setValue((x) => !x);\n  }, []);\n\n  const setTrue = React.useCallback(() => {\n    setValue(true);\n  }, []);\n\n  const setFalse = React.useCallback(() => {\n    setValue(false);\n  }, []);\n\n  return { value, setValue, setTrue, setFalse, toggle };\n}\n",
        "type": "registry:hook"
      }
    ]
  },
  {
    "name": "use-callback-ref",
    "type": "registry:hook",
    "registryDependencies": [],
    "dependencies": [
      "react"
    ],
    "devDependencies": [],
    "files": [
      {
        "path": "registry/default/hooks/use-callback-ref.ts",
        "content": "import * as React from \"react\";\n\nfunction useCallbackRef<T extends (...args: never[]) => unknown>(\n  callback: T | undefined,\n): T {\n  const callbackRef = React.useRef(callback);\n\n  React.useEffect(() => {\n    callbackRef.current = callback;\n  });\n\n  return React.useMemo(\n    () => ((...args) => callbackRef.current?.(...args)) as T,\n    [],\n  );\n}\n\nexport { useCallbackRef };\n",
        "type": "registry:hook"
      }
    ]
  },
  {
    "name": "use-click-outside",
    "type": "registry:hook",
    "registryDependencies": [],
    "dependencies": [
      "react"
    ],
    "devDependencies": [],
    "files": [
      {
        "path": "registry/default/hooks/use-click-outside.ts",
        "content": "import * as React from \"react\";\n\nconst DEFAULT_EVENTS = [\"mousedown\", \"touchstart\"];\n\nexport function useClickOutside<T extends HTMLElement = any>(\n  handler: () => void,\n  events?: string[] | null,\n  nodes?: (HTMLElement | null)[],\n) {\n  const ref = React.useRef<T>(null);\n\n  React.useEffect(() => {\n    const listener = (event: any) => {\n      const { target } = event ?? {};\n      if (Array.isArray(nodes)) {\n        const shouldIgnore =\n          target?.hasAttribute(\"data-ignore-outside-clicks\") ||\n          (!document.body.contains(target) && target.tagName !== \"HTML\");\n        const shouldTrigger = nodes.every(\n          (node) => !!node && !event.composedPath().includes(node),\n        );\n        shouldTrigger && !shouldIgnore && handler();\n      } else if (ref.current && !ref.current.contains(target)) {\n        handler();\n      }\n    };\n\n    (events || DEFAULT_EVENTS).forEach((fn) =>\n      document.addEventListener(fn, listener),\n    );\n\n    return () => {\n      (events || DEFAULT_EVENTS).forEach((fn) =>\n        document.removeEventListener(fn, listener),\n      );\n    };\n  }, [ref, handler, nodes]);\n\n  return ref;\n}\n",
        "type": "registry:hook"
      }
    ]
  },
  {
    "name": "use-controllable-state",
    "type": "registry:hook",
    "registryDependencies": [],
    "dependencies": [
      "react"
    ],
    "devDependencies": [],
    "files": [
      {
        "path": "registry/default/hooks/use-controllable-state.ts",
        "content": "import * as React from \"react\";\n\nimport { useCallbackRef } from \"@/registry/default/hooks/use-callback-ref\";\n\ntype UseControllableStateParams<T> = {\n  prop?: T | undefined;\n  defaultProp?: T | undefined;\n  onChange?: (state: T) => void;\n};\n\ntype SetStateFn<T> = (prevState?: T) => T;\n\nfunction useControllableState<T>({\n  prop,\n  defaultProp,\n  onChange = () => {},\n}: UseControllableStateParams<T>) {\n  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({\n    defaultProp,\n    onChange,\n  });\n  const isControlled = prop !== undefined;\n  const value = isControlled ? prop : uncontrolledProp;\n  const handleChange = useCallbackRef(onChange);\n\n  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> =\n    React.useCallback(\n      (nextValue) => {\n        if (isControlled) {\n          const setter = nextValue as SetStateFn<T>;\n          const value =\n            typeof nextValue === \"function\" ? setter(prop) : nextValue;\n          if (value !== prop) handleChange(value as T);\n        } else {\n          setUncontrolledProp(nextValue);\n        }\n      },\n      [isControlled, prop, setUncontrolledProp, handleChange],\n    );\n\n  return [value, setValue] as const;\n}\n\nfunction useUncontrolledState<T>({\n  defaultProp,\n  onChange,\n}: Omit<UseControllableStateParams<T>, \"prop\">) {\n  const uncontrolledState = React.useState<T | undefined>(defaultProp);\n  const [value] = uncontrolledState;\n  const prevValueRef = React.useRef(value);\n  const handleChange = useCallbackRef(onChange);\n\n  React.useEffect(() => {\n    if (prevValueRef.current !== value) {\n      handleChange(value as T);\n      prevValueRef.current = value;\n    }\n  }, [value, prevValueRef, handleChange]);\n\n  return uncontrolledState;\n}\n\nexport { useControllableState };\n",
        "type": "registry:hook"
      }
    ]
  },
  {
    "name": "use-debounce",
    "type": "registry:hook",
    "registryDependencies": [],
    "dependencies": [
      "react"
    ],
    "devDependencies": [],
    "files": [
      {
        "path": "registry/default/hooks/use-debounce.ts",
        "content": "import * as React from \"react\";\n\nexport function useDebounce<T>(value: T, delay?: number): T {\n  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);\n\n  React.useEffect(() => {\n    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  return debouncedValue;\n}\n",
        "type": "registry:hook"
      }
    ]
  },
  {
    "name": "use-element-size",
    "type": "registry:hook",
    "registryDependencies": [],
    "dependencies": [
      "react"
    ],
    "devDependencies": [],
    "files": [
      {
        "path": "registry/default/hooks/use-element-size.ts",
        "content": "import * as React from \"react\";\n\ntype ObserverRect = Omit<DOMRectReadOnly, \"toJSON\">;\n\nconst defaultState: ObserverRect = {\n  x: 0,\n  y: 0,\n  width: 0,\n  height: 0,\n  top: 0,\n  left: 0,\n  bottom: 0,\n  right: 0,\n};\n\nexport function useResizeObserver<T extends HTMLElement = any>(\n  options?: ResizeObserverOptions,\n) {\n  const frameID = React.useRef(0);\n  const ref = React.useRef<T>(null);\n\n  const [rect, setRect] = React.useState<ObserverRect>(defaultState);\n\n  const observer = React.useMemo(\n    () =>\n      typeof window !== \"undefined\"\n        ? new ResizeObserver((entries: any) => {\n            const entry = entries[0];\n\n            if (entry) {\n              cancelAnimationFrame(frameID.current);\n\n              frameID.current = requestAnimationFrame(() => {\n                if (ref.current) {\n                  setRect(entry.contentRect);\n                }\n              });\n            }\n          })\n        : null,\n    [],\n  );\n\n  React.useEffect(() => {\n    if (ref.current) {\n      observer?.observe(ref.current, options);\n    }\n\n    return () => {\n      observer?.disconnect();\n\n      if (frameID.current) {\n        cancelAnimationFrame(frameID.current);\n      }\n    };\n  }, [ref.current]);\n\n  return [ref, rect] as const;\n}\n\nexport function useElementSize<T extends HTMLElement = any>(\n  options?: ResizeObserverOptions,\n) {\n  const [ref, { width, height }] = useResizeObserver<T>(options);\n  return { ref, width, height };\n}\n",
        "type": "registry:hook"
      }
    ]
  },
  {
    "name": "use-fullscreen",
    "type": "registry:hook",
    "registryDependencies": [],
    "dependencies": [
      "react"
    ],
    "devDependencies": [],
    "files": [
      {
        "path": "registry/default/hooks/use-fullscreen.ts",
        "content": "import * as React from \"react\";\n\nfunction getFullscreenElement(): HTMLElement | null {\n  const _document = window.document as any;\n\n  const fullscreenElement =\n    _document.fullscreenElement ||\n    _document.webkitFullscreenElement ||\n    _document.mozFullScreenElement ||\n    _document.msFullscreenElement;\n\n  return fullscreenElement;\n}\n\nfunction exitFullscreen() {\n  const _document = window.document as any;\n\n  if (typeof _document.exitFullscreen === \"function\") {\n    return _document.exitFullscreen();\n  }\n  if (typeof _document.msExitFullscreen === \"function\") {\n    return _document.msExitFullscreen();\n  }\n  if (typeof _document.webkitExitFullscreen === \"function\") {\n    return _document.webkitExitFullscreen();\n  }\n  if (typeof _document.mozCancelFullScreen === \"function\") {\n    return _document.mozCancelFullScreen();\n  }\n\n  return null;\n}\n\nfunction enterFullScreen(element: HTMLElement) {\n  const _element = element as any;\n\n  return (\n    _element.requestFullscreen?.() ||\n    _element.msRequestFullscreen?.() ||\n    _element.webkitEnterFullscreen?.() ||\n    _element.webkitRequestFullscreen?.() ||\n    _element.mozRequestFullscreen?.()\n  );\n}\n\nconst prefixes = [\"\", \"webkit\", \"moz\", \"ms\"];\n\nfunction addEvents(\n  element: HTMLElement,\n  {\n    onFullScreen,\n    onError,\n  }: { onFullScreen: (event: Event) => void; onError: (event: Event) => void },\n) {\n  prefixes.forEach((prefix) => {\n    element.addEventListener(`${prefix}fullscreenchange`, onFullScreen);\n    element.addEventListener(`${prefix}fullscreenerror`, onError);\n  });\n\n  return () => {\n    prefixes.forEach((prefix) => {\n      element.removeEventListener(`${prefix}fullscreenchange`, onFullScreen);\n      element.removeEventListener(`${prefix}fullscreenerror`, onError);\n    });\n  };\n}\n\nexport function useFullscreen<T extends HTMLElement = any>() {\n  const [fullscreen, setFullscreen] = React.useState<boolean>(false);\n\n  const _ref = React.useRef<T>(null);\n\n  const handleFullscreenChange = React.useCallback(\n    (event: Event) => {\n      setFullscreen(event.target === getFullscreenElement());\n    },\n    [setFullscreen],\n  );\n\n  const handleFullscreenError = React.useCallback(\n    (event: Event) => {\n      setFullscreen(false);\n      // eslint-disable-next-line no-console\n      console.error(\n        `[@mantine/hooks] use-fullscreen: Error attempting full-screen mode method: ${event} (${event.target})`,\n      );\n    },\n    [setFullscreen],\n  );\n\n  const toggle = React.useCallback(async () => {\n    if (!getFullscreenElement()) {\n      await enterFullScreen(_ref.current!);\n    } else {\n      await exitFullscreen();\n    }\n  }, []);\n\n  const ref = React.useCallback((element: T | null) => {\n    if (element === null) {\n      _ref.current = window.document.documentElement as T;\n    } else {\n      _ref.current = element;\n    }\n  }, []);\n\n  React.useEffect(() => {\n    if (!_ref.current && window.document) {\n      _ref.current = window.document.documentElement as T;\n      return addEvents(_ref.current, {\n        onFullScreen: handleFullscreenChange,\n        onError: handleFullscreenError,\n      });\n    }\n\n    if (_ref.current) {\n      return addEvents(_ref.current, {\n        onFullScreen: handleFullscreenChange,\n        onError: handleFullscreenError,\n      });\n    }\n\n    return undefined;\n  }, [_ref.current]);\n\n  return { ref, toggle, fullscreen } as const;\n}\n",
        "type": "registry:hook"
      }
    ]
  },
  {
    "name": "use-mobile",
    "type": "registry:hook",
    "registryDependencies": [],
    "dependencies": [
      "react",
      "lodash.debounce"
    ],
    "devDependencies": [],
    "files": [
      {
        "path": "registry/default/hooks/use-mobile.ts",
        "content": "import * as React from \"react\";\n\nimport debounce from \"lodash.debounce\";\n\nconst useIsMobile = (): boolean => {\n  const [isMobile, setIsMobile] = React.useState(false);\n\n  React.useLayoutEffect(() => {\n    const updateSize = (): void => {\n      setIsMobile(window.innerWidth < 768);\n    };\n    const debouncedUpdateSize = debounce(updateSize, 250);\n\n    updateSize();\n\n    window.addEventListener(\"resize\", debouncedUpdateSize);\n\n    return (): void =>\n      window.removeEventListener(\"resize\", debouncedUpdateSize);\n  }, []);\n\n  return isMobile;\n};\n\nexport default useIsMobile;\n",
        "type": "registry:hook"
      }
    ]
  },
  {
    "name": "use-mounted",
    "type": "registry:hook",
    "registryDependencies": [],
    "dependencies": [
      "react"
    ],
    "devDependencies": [],
    "files": [
      {
        "path": "registry/default/hooks/use-mounted.ts",
        "content": "import { useEffect, useState } from \"react\";\n\nexport function useMounted() {\n  const [mounted, setMounted] = useState(false);\n  useEffect(() => setMounted(true), []);\n  return mounted;\n}\n",
        "type": "registry:hook"
      }
    ]
  },
  {
    "name": "use-parse-csv",
    "type": "registry:hook",
    "registryDependencies": [],
    "dependencies": [
      "react",
      "papaparse"
    ],
    "devDependencies": [],
    "files": [
      {
        "path": "registry/default/hooks/use-parse-csv.ts",
        "content": "import * as React from \"react\";\nimport * as Papa from \"papaparse\";\nimport { getErrorMessage } from \"@/lib/handle-error\";\n\n\ninterface CsvState {\n  fileName: string;\n  data: {\n    parsed: Record<string, unknown>[];\n    mapped: Record<string, unknown>[];\n  };\n  fieldMappings: {\n    original: Record<string, string | undefined>;\n    current: Record<string, string | undefined>;\n  };\n  error: string | null;\n}\n\ninterface UseParseCsvProps extends Papa.ParseConfig {\n  fields: { label: string; value: string; required?: boolean }[];\n  onSuccess?: (data: Record<string, unknown>[]) => void;\n  onError?: (message: string) => void;\n  showEmptyFields?: boolean;\n}\n\nexport function useParseCsv({\n  onSuccess,\n  onError,\n  showEmptyFields,\n  ...props\n}: UseParseCsvProps) {\n  const [csvState, setCsvState] = React.useState<CsvState>({\n    fileName: \"\",\n    data: {\n      parsed: [],\n      mapped: [],\n    },\n    fieldMappings: {\n      current: {},\n      original: {},\n    },\n    error: null,\n  });\n\n  function onParse({ file, limit = Infinity }: { file: File; limit?: number }) {\n    let count = 0;\n    const allResults: Record<string, unknown>[] = [];\n\n    Papa.parse<Record<string, unknown>>(file, {\n      ...props,\n      header: true,\n      dynamicTyping: true,\n      skipEmptyLines: true,\n      beforeFirstChunk: (chunk) => {\n        const parsedChunk = Papa.parse<string[]>(chunk, {\n          header: false,\n          skipEmptyLines: true,\n        });\n\n        const rows = parsedChunk.data;\n        const columns = rows[0] ?? [];\n\n        const newColumns = columns\n          .map((column, index) => {\n            if (column.trim() === \"\" && !showEmptyFields) {\n              const hasNonEmptyValue = rows\n                .slice(1)\n                .some(\n                  (row) =>\n                    row[index] !== \"\" &&\n                    row[index] !== null &&\n                    row[index] !== undefined,\n                );\n              if (!hasNonEmptyValue) {\n                return null;\n              }\n            }\n            return column.trim() === \"\" ? `Field ${index + 1}` : column;\n          })\n          .filter((column) => column !== null);\n\n        rows[0] = newColumns;\n        return Papa.unparse(rows);\n      },\n      step: (results, parser) => {\n        try {\n          if (count === 0) {\n            const mappings = (results.meta.fields ?? [])?.reduce(\n              (acc, field) => ({\n                ...acc,\n                [field]: field,\n              }),\n              {},\n            );\n\n            setCsvState((prevState) => ({\n              ...prevState,\n              fieldMappings: {\n                original: mappings,\n                current: mappings,\n              },\n            }));\n          }\n\n          if (count < limit) {\n            allResults.push(results.data);\n            count++;\n          } else {\n            parser.abort();\n            throw new Error(`Only ${limit} rows are allowed`);\n          }\n        } catch (err) {\n          const message = getErrorMessage(err);\n          setCsvState((prevState) => ({ ...prevState, error: message }));\n          onError?.(message);\n        }\n      },\n      complete: (_, localFile: File) => {\n        setCsvState((prevState) => ({\n          ...prevState,\n          fileName: localFile?.name\n            ? localFile.name.replace(/\\.[^/.]+$/, \"\")\n            : \"Untitled\",\n          data: {\n            parsed: allResults,\n            mapped: allResults,\n          },\n        }));\n        onSuccess?.(allResults);\n      },\n    });\n  }\n\n  function onFieldChange({\n    oldValue,\n    newValue,\n  }: {\n    oldValue: string;\n    newValue: string;\n  }) {\n    setCsvState((prevState) => ({\n      ...prevState,\n      fieldMappings: {\n        ...prevState.fieldMappings,\n        current: { ...prevState.fieldMappings.current, [newValue]: oldValue },\n      },\n      data: {\n        ...prevState.data,\n        mapped: prevState.data.mapped.map((row, index) => ({\n          ...row,\n          [newValue]: prevState.data.parsed[index]?.[oldValue],\n        })),\n      },\n    }));\n  }\n\n  function onFieldToggle({\n    value,\n    checked,\n  }: {\n    value: string;\n    checked: boolean;\n  }) {\n    setCsvState((prevState) => ({\n      ...prevState,\n      fieldMappings: {\n        ...prevState.fieldMappings,\n        current: {\n          ...prevState.fieldMappings.current,\n          [value]: checked ? \"\" : undefined,\n        },\n      },\n      data: {\n        ...prevState.data,\n        mapped: prevState.data.mapped.map((row) => {\n          // eslint-disable-next-line @typescript-eslint/no-unused-vars\n          const { [value]: _, ...rest } = row;\n          return rest;\n        }),\n      },\n    }));\n  }\n\n  function onFieldsReset() {\n    setCsvState((prevState) => ({\n      ...prevState,\n      fieldMappings: {\n        ...prevState.fieldMappings,\n        current: prevState.fieldMappings.original,\n      },\n      data: {\n        ...prevState.data,\n        mapped: prevState.data.parsed,\n      },\n    }));\n  }\n\n  function getSanitizedData({ data }: { data: Record<string, unknown>[] }) {\n    return data.map((row) =>\n      Object.keys(row).reduce(\n        (acc, key) => ({\n          ...acc,\n          [key]: row[key] === null ? \"\" : row[key],\n        }),\n        {},\n      ),\n    );\n  }\n\n  return {\n    fileName: csvState.fileName,\n    data: csvState.data.mapped,\n    fieldMappings: csvState.fieldMappings,\n    error: csvState.error,\n    getSanitizedData,\n    onParse,\n    onFieldChange,\n    onFieldToggle,\n    onFieldsReset,\n  };\n}\n",
        "type": "registry:hook"
      }
    ]
  }
];
