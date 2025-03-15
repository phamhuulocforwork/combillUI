import type { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    "name": "animated-label-input",
    "type": "registry:ui",
    "registryDependencies": [
      "input",
      "label"
    ],
    "dependencies": [
      "react"
    ],
    "devDependencies": [],
    "tailwind": {},
    "cssVars": {
      "light": {},
      "dark": {}
    },
    "files": [
      {
        "path": "registry/default/ui/animated-label-input.tsx",
        "content": "import * as React from \"react\";\n\nimport { Input } from \"@/components/ui/input\";\nimport { Label } from \"@/components/ui/label\";\n\nimport { cn } from \"@/lib/utils\";\n\nconst AnimatedLabel = React.forwardRef<\n  React.ElementRef<typeof Label>,\n  React.ComponentPropsWithoutRef<typeof Label>\n>(({ className, ...props }, ref) => {\n  return (\n    <Label\n      className={cn(\n        \"peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-1.5 z-10 origin-[0] -translate-y-4 scale-[0.85] transform bg-background px-2 text-sm text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-[0.85] peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 cursor-text\",\n        className,\n      )}\n      ref={ref}\n      {...props}\n    />\n  );\n});\nAnimatedLabel.displayName = \"AnimatedLabel\";\n\ntype AnimatedLabelInputProps = InputProps & { label?: string };\n\nconst AnimatedLabelInput = React.forwardRef<\n  React.ElementRef<typeof AnimatedInput>,\n  React.PropsWithoutRef<AnimatedLabelInputProps>\n>(({ id, label, ...props }, ref) => {\n  const inputRef = React.useRef<HTMLInputElement>(null);\n\n  React.useImperativeHandle(ref, () => inputRef.current!);\n\n  const handleLabelClick = () => {\n    if (inputRef.current) {\n      inputRef.current.focus();\n    }\n  };\n\n  return (\n    <div className='relative '>\n      <AnimatedInput ref={inputRef} id={id} {...props} />\n      <AnimatedLabel htmlFor={id} onClick={handleLabelClick}>\n        {label}\n      </AnimatedLabel>\n    </div>\n  );\n});\nAnimatedLabelInput.displayName = \"AnimatedLabelInput\";\n\nexport interface InputProps\n  extends React.InputHTMLAttributes<HTMLInputElement> {}\n\nconst AnimatedInput = React.forwardRef<HTMLInputElement, InputProps>(\n  ({ className, ...props }, ref) => {\n    return (\n      <Input\n        placeholder=' '\n        className={cn(\"peer\", className)}\n        ref={ref}\n        {...props}\n      />\n    );\n  },\n);\nAnimatedInput.displayName = \"AnimatedInput\";\n\nexport { AnimatedLabelInput, AnimatedLabel, AnimatedInput };\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "animated-tooltip",
    "type": "registry:ui",
    "registryDependencies": [],
    "dependencies": [
      "react",
      "framer-motion"
    ],
    "devDependencies": [],
    "tailwind": {},
    "cssVars": {
      "light": {},
      "dark": {}
    },
    "files": [
      {
        "path": "registry/default/ui/animated-tooltip.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport * as TooltipPrimitive from \"@radix-ui/react-tooltip\";\nimport { motion, useMotionValue, useSpring, useTransform } from \"framer-motion\";\n\nimport { cn } from \"@/lib/utils\";\n\nconst AnimatedTooltipProvider = TooltipPrimitive.Provider;\nconst AnimatedTooltip = TooltipPrimitive.Root;\nconst AnimatedTooltipTrigger = TooltipPrimitive.Trigger;\n\nconst springConfig = { stiffness: 100, damping: 5 };\n\nconst AnimatedTooltipContent = React.forwardRef<\n  React.ElementRef<typeof TooltipPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>\n>(({ className, sideOffset = 4, ...props }, ref) => {\n  const x = useMotionValue(0);\n  const rotate = useSpring(\n    useTransform(x, [-100, 100], [-45, 45]),\n    springConfig,\n  );\n  const translateX = useSpring(\n    useTransform(x, [-100, 100], [-50, 50]),\n    springConfig,\n  );\n\n  const handleMouseMove = (event: any) => {\n    const halfWidth = event.currentTarget.offsetWidth / 2;\n    x.set(event.nativeEvent.offsetX - halfWidth);\n  };\n\n  return (\n    <TooltipPrimitive.Portal>\n      <TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} {...props}>\n        <motion.div\n          onMouseMove={handleMouseMove}\n          initial={{ opacity: 0, y: 20, scale: 0.6 }}\n          animate={{\n            opacity: 1,\n            y: 0,\n            scale: 1,\n            transition: {\n              type: \"spring\",\n              stiffness: 260,\n              damping: 10,\n            },\n          }}\n          exit={{ opacity: 0, y: 20, scale: 0.6 }}\n          style={{\n            translateX: translateX,\n            rotate: rotate,\n          }}\n          className={cn(\n            \"flex flex-col items-center justify-center rounded-md z-50 shadow-xl bg-primary px-3 py-1.5 text-primary-foreground \",\n            className,\n          )}\n        >\n          {props.children}\n        </motion.div>\n      </TooltipPrimitive.Content>\n    </TooltipPrimitive.Portal>\n  );\n});\nAnimatedTooltipContent.displayName = TooltipPrimitive.Content.displayName;\n\nexport {\n  AnimatedTooltip,\n  AnimatedTooltipTrigger,\n  AnimatedTooltipContent,\n  AnimatedTooltipProvider,\n};\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "combobox-input",
    "type": "registry:ui",
    "registryDependencies": [
      "command",
      "skeleton"
    ],
    "dependencies": [
      "react",
      "lucide-react",
      "react-popper"
    ],
    "devDependencies": [],
    "tailwind": {},
    "cssVars": {
      "light": {},
      "dark": {}
    },
    "files": [
      {
        "path": "registry/default/ui/combobox-input.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport { Check } from \"lucide-react\";\nimport { type PopperProps, usePopper } from \"react-popper\";\n\nimport {\n  Command,\n  CommandEmpty,\n  CommandGroup,\n  CommandInput,\n  CommandItem,\n  CommandList,\n  CommandLoading,\n} from \"@/components/ui/command\";\nimport { Skeleton } from \"@/components/ui/skeleton\";\n\nimport { cn } from \"@/lib/utils\";\n\nimport { useControllableState } from \"@/registry/default/hooks/use-controllable-state\";\n\ninterface Option {\n  label: string;\n  value: string;\n  icon?: React.ComponentType<{ className?: string }>;\n  withCount?: boolean;\n}\n\nconst nonPrintableKeys = [\n  \"Tab\",\n  \"Control\",\n  \"Alt\",\n  \"Shift\",\n  \"Delete\",\n  \"Home\",\n  \"End\",\n  \"PageUp\",\n  \"PageDown\",\n  \"Insert\",\n  \"ArrowLeft\",\n  \"ArrowRight\",\n];\n\ninterface ComboboxInputProps\n  extends Omit<\n    React.ComponentPropsWithoutRef<typeof CommandInput>,\n    \"defaultValue\" | \"value\" | \"onValueChange\"\n  > {\n  options: Option[];\n  input?: string;\n  onInputChange?: (value: string) => void;\n  defaultValue?: Option;\n  value?: Option;\n  onValueChange?: (option: Option) => void;\n  emptyMessage?: string;\n  immediate?: boolean;\n  placement?: PopperProps<HTMLElement>[\"placement\"];\n  alignOffset?: number;\n  sideOffset?: number;\n  loading?: boolean;\n}\n\nexport function ComboboxInput({\n  options,\n  input,\n  onInputChange,\n  defaultValue,\n  value,\n  onValueChange,\n  placeholder,\n  emptyMessage = \"No results found\",\n  placement = \"bottom-start\",\n  alignOffset = 0,\n  sideOffset = 4,\n  immediate = false,\n  loading = false,\n  className,\n  ...props\n}: ComboboxInputProps) {\n  const inputRef = React.useRef<HTMLInputElement>(null);\n  const [open, setOpen] = React.useState(false);\n  const [controlledInput, setControlledInput] = useControllableState({\n    prop: input,\n    onChange: onInputChange,\n  });\n\n  const [currentOption, setCurrentOption] = useControllableState({\n    defaultProp: defaultValue,\n    prop: value,\n    onChange: onValueChange,\n  });\n\n  const [referenceElement, setReferenceElement] =\n    React.useState<HTMLDivElement | null>(null);\n  const [popperElement, setPopperElement] =\n    React.useState<HTMLDivElement | null>(null);\n  const { styles, attributes } = usePopper(referenceElement, popperElement, {\n    modifiers: [\n      { name: \"offset\", options: { offset: [alignOffset, sideOffset] } },\n    ],\n    placement,\n  });\n\n  const onKeyDown = React.useCallback(\n    (event: React.KeyboardEvent<HTMLDivElement>) => {\n      const inputElement = inputRef.current;\n      if (!inputElement) return;\n\n      if (nonPrintableKeys.includes(event.key)) return;\n\n      if (event.key === \"Backspace\" && inputElement.value === \"\" && !open) {\n        if (open) setOpen(false);\n        return;\n      }\n\n      if (event.key === \"Escape\") {\n        if (currentOption && inputElement.value === currentOption.label) {\n          if (open) setOpen(false);\n          return;\n        }\n\n        if (inputElement.value === \"\") {\n          if (open) setOpen(false);\n          return;\n        }\n\n        setControlledInput(\"\");\n        setOpen(false);\n        setCurrentOption(undefined);\n        inputRef.current?.focus();\n      }\n\n      if (event.key === \"Enter\" && inputElement.value !== \"\") {\n        const selectedOption = options.find(\n          (option) => option.label === inputElement.value,\n        );\n        setCurrentOption(selectedOption);\n      }\n\n      if (!open) setOpen(true);\n    },\n    [currentOption, open, options, setControlledInput, setCurrentOption],\n  );\n\n  const onBlur = React.useCallback(() => {\n    setOpen(false);\n    setControlledInput(currentOption?.label ?? \"\");\n  }, [currentOption?.label, setControlledInput]);\n\n  const onSelect = React.useCallback(\n    (selectedOption: Option) => {\n      setControlledInput(selectedOption.label);\n      setCurrentOption(selectedOption);\n      setOpen(false);\n    },\n    [setControlledInput, setCurrentOption],\n  );\n\n  return (\n    <Command\n      ref={setReferenceElement}\n      className='relative overflow-visible [&_[cmdk-input-wrapper]]:rounded-md [&_[cmdk-input-wrapper]]:border'\n      onKeyDown={onKeyDown}\n      {...attributes.reference}\n    >\n      <CommandInput\n        ref={inputRef}\n        value={controlledInput}\n        onValueChange={(value) => {\n          if (loading) return;\n\n          setControlledInput(value);\n          if (value === \"\") {\n            setCurrentOption(undefined);\n          }\n        }}\n        onBlur={onBlur}\n        onFocus={() => {\n          if (immediate) {\n            setOpen(true);\n          }\n        }}\n        placeholder={placeholder}\n        className={cn(\"border-b-0\", className)}\n        {...props}\n      />\n      <CommandList\n        ref={setPopperElement}\n        data-state={open ? \"open\" : \"closed\"}\n        style={styles.popper}\n        className={cn(\n          \"z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95\",\n          \"data-[popper-placement=bottom-end]:translate-x-1/2 data-[popper-placement=bottom-start]:-translate-x-1/2 data-[popper-placement=left-end]:translate-y-1/2 data-[popper-placement=left-start]:-translate-y-1/2 data-[popper-placement=right-end]:translate-y-1/2 data-[popper-placement=right-start]:-translate-y-1/2 data-[popper-placement=top-end]:translate-x-1/2 data-[popper-placement=top-start]:-translate-x-1/2 data-[popper-placement=bottom-end]:slide-in-from-top-2 data-[popper-placement=bottom-start]:slide-in-from-top-2 data-[popper-placement=bottom]:slide-in-from-top-2 data-[popper-placement=left-end]:slide-in-from-right-2 data-[popper-placement=left-start]:slide-in-from-right-2 data-[popper-placement=left]:slide-in-from-right-2 data-[popper-placement=right-end]:slide-in-from-left-2 data-[popper-placement=right-start]:slide-in-from-left-2 data-[popper-placement=right]:slide-in-from-left-2 data-[popper-placement=top-end]:slide-in-from-bottom-2 data-[popper-placement=top-start]:slide-in-from-bottom-2 data-[popper-placement=top]:slide-in-from-bottom-2\",\n        )}\n        {...attributes.popper}\n      >\n        {loading ? (\n          <CommandLoading className='p-1'>\n            <Skeleton className='h-8 w-full' />\n          </CommandLoading>\n        ) : null}\n        {options.length > 0 && !loading ? (\n          <CommandGroup>\n            {options.map((option) => {\n              const isSelected = currentOption?.value === option.value;\n\n              return (\n                <CommandItem\n                  key={option.value}\n                  value={option.label}\n                  onMouseDown={(event) => {\n                    event.preventDefault();\n                    event.stopPropagation();\n                  }}\n                  onSelect={() => onSelect(option)}\n                  className={cn(\"flex w-full items-center gap-2\", {\n                    \"pl-8\": !isSelected,\n                  })}\n                >\n                  {isSelected ? (\n                    <Check className='w-4' aria-hidden='true' />\n                  ) : null}\n                  {option.label}\n                </CommandItem>\n              );\n            })}\n          </CommandGroup>\n        ) : null}\n        {loading ? null : <CommandEmpty>{emptyMessage}</CommandEmpty>}\n      </CommandList>\n    </Command>\n  );\n}\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "labeled-switch",
    "type": "registry:ui",
    "registryDependencies": [],
    "dependencies": [
      "react",
      "framer-motion"
    ],
    "devDependencies": [],
    "tailwind": {},
    "cssVars": {
      "light": {},
      "dark": {}
    },
    "files": [
      {
        "path": "registry/default/ui/labeled-switch.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport * as SwitchPrimitives from \"@radix-ui/react-switch\";\nimport { motion } from \"framer-motion\";\n\nimport { cn } from \"@/lib/utils\";\n\ninterface LabeledSwitchProps {\n  firstLabel: React.ReactNode;\n  secondLabel: React.ReactNode;\n  selected: boolean;\n  onToggle: (checked: boolean) => void;\n  className?: string;\n}\n\nconst LabeledSwitch = React.forwardRef<\n  React.ElementRef<typeof SwitchPrimitives.Root>,\n  LabeledSwitchProps\n>(\n  (\n    { className, firstLabel, secondLabel, selected, onToggle, ...props },\n    ref,\n  ) => {\n    return (\n      <SwitchPrimitives.Root\n        className={cn(\n          \"relative flex w-fit cursor-pointer items-center rounded-full ring-2 ring-input transition-colors\",\n          className,\n        )}\n        ref={ref}\n        checked={selected}\n        onCheckedChange={onToggle}\n      >\n        <LabeledSwitchButton selected={selected}>\n          {firstLabel}\n        </LabeledSwitchButton>\n        <LabeledSwitchButton selected={!selected}>\n          {secondLabel}\n        </LabeledSwitchButton>\n        <SwitchPrimitives.Thumb\n          className={cn(\n            \"absolute inset-0 w-full z-0 flex data-[state=unchecked]:justify-start data-[state=checked]:justify-end\",\n          )}\n        >\n          <motion.span\n            layout\n            transition={{ type: \"spring\", damping: 15, stiffness: 250 }}\n            className='h-full w-1/2 rounded-full bg-muted'\n          />\n        </SwitchPrimitives.Thumb>\n      </SwitchPrimitives.Root>\n    );\n  },\n);\nLabeledSwitch.displayName = \"LabeledSwitch\";\n\nconst LabeledSwitchButton = ({\n  children,\n  selected,\n}: {\n  children: React.ReactNode;\n  selected: boolean;\n}) => (\n  <div\n    className={cn(\n      \"relative z-10 flex w-full items-center justify-center gap-2 px-3 py-3 text-xs font-bold transition-colors md:py-1.5 md:pl-3 md:pr-3.5\",\n      selected ? \"text-primary\" : \"text-muted-foreground\",\n    )}\n    onMouseDown={(e) => e.preventDefault()}\n  >\n    <span className='relative z-10'>{children}</span>\n  </div>\n);\n\nexport { LabeledSwitch };\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "range-slider",
    "type": "registry:ui",
    "registryDependencies": [],
    "dependencies": [
      "react"
    ],
    "devDependencies": [],
    "tailwind": {},
    "cssVars": {
      "light": {},
      "dark": {}
    },
    "files": [
      {
        "path": "registry/default/ui/range-slider.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport * as SliderPrimitive from \"@radix-ui/react-slider\";\n\nimport { cn } from \"@/lib/utils\";\n\ninterface RangeSliderProps\n  extends React.ComponentProps<typeof SliderPrimitive.Root> {\n  labelPosition?: \"top\" | \"bottom\";\n  label?: (value: number | undefined) => React.ReactNode;\n  orientation?: \"horizontal\" | \"vertical\";\n}\n\nconst RangeSlider = React.forwardRef<\n  React.ElementRef<typeof SliderPrimitive.Root>,\n  RangeSliderProps\n>(\n  (\n    {\n      className,\n      label,\n      labelPosition = \"top\",\n      orientation = \"horizontal\",\n      ...props\n    },\n    ref,\n  ) => {\n    const initialValue = Array.isArray(props.value)\n      ? props.value\n      : [props.min, props.max];\n\n    return (\n      <SliderPrimitive.Root\n        ref={ref}\n        orientation={orientation}\n        className={cn(\n          orientation === \"horizontal\"\n            ? \"relative flex w-full touch-none select-none items-center\"\n            : \"relative flex h-full min-h-[200px] touch-none select-none flex-col items-center\",\n          className,\n        )}\n        {...props}\n      >\n        <SliderPrimitive.Track\n          className={cn(\n            orientation === \"horizontal\"\n              ? \"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary\"\n              : \"relative w-2 h-full grow overflow-hidden rounded-full bg-secondary\",\n          )}\n        >\n          <SliderPrimitive.Range\n            className={cn(\n              orientation === \"horizontal\"\n                ? \"absolute h-full bg-primary\"\n                : \"absolute w-full bg-primary\",\n            )}\n          />\n        </SliderPrimitive.Track>\n        {initialValue.map((value, index) => (\n          <React.Fragment key={index}>\n            <SliderPrimitive.Thumb\n              className={cn(\n                \"relative block border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50\",\n                orientation === \"horizontal\"\n                  ? \"h-5 w-2 rounded-sm\"\n                  : \"h-2 w-5 rounded-sm\",\n              )}\n            >\n              {label && (\n                <span\n                  className={cn(\n                    \"absolute flex text-xs justify-center font-medium\",\n                    orientation === \"horizontal\"\n                      ? labelPosition === \"top\"\n                        ? \"-left-2 -top-5\"\n                        : \"-left-2 top-5\"\n                      : labelPosition === \"top\"\n                        ? \"-translate-x-full -translate-y-1/2 -left-2\"\n                        : \"translate-x-full -translate-y-1/2\",\n                  )}\n                >\n                  {label(value)}\n                </span>\n              )}\n            </SliderPrimitive.Thumb>\n          </React.Fragment>\n        ))}\n      </SliderPrimitive.Root>\n    );\n  },\n);\nRangeSlider.displayName = \"RangeSlider\";\n\nexport { RangeSlider };\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "responsive-textarea",
    "type": "registry:ui",
    "registryDependencies": [],
    "dependencies": [
      "react"
    ],
    "devDependencies": [],
    "tailwind": {},
    "cssVars": {
      "light": {},
      "dark": {}
    },
    "files": [
      {
        "path": "registry/default/ui/responsive-textarea.tsx",
        "content": "\"use client\";\n\nimport * as React from \"react\";\n\nimport { cn } from \"@/lib/utils\";\n\nconst ResponsiveTextarea = React.forwardRef<\n  HTMLTextAreaElement,\n  React.ComponentProps<\"textarea\">\n>(({ className, ...props }, ref) => {\n  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);\n  const [val, setVal] = React.useState<string>(\"\");\n\n  React.useEffect(() => {\n    if (textAreaRef.current) {\n      textAreaRef.current.style.height = \"auto\";\n      textAreaRef.current.style.height =\n        textAreaRef.current.scrollHeight + \"px\";\n    }\n  }, [val]);\n\n  return (\n    <textarea\n      className={cn(\n        \"placeholder:text-muted-foreground flex min-h-[80px] w-full resize-none overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50\",\n        className,\n      )}\n      ref={textAreaRef}\n      onChange={(e) => setVal(e.target.value)}\n      {...props}\n    />\n  );\n});\nResponsiveTextarea.displayName = \"ResponsiveTextarea\";\n\nexport { ResponsiveTextarea };\n",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "tel-input",
    "type": "registry:ui",
    "registryDependencies": [
      "button",
      "command",
      "input",
      "popover",
      "scroll-area"
    ],
    "dependencies": [
      "react",
      "react-phone-number-input",
      "lucide-react",
      "react-phone-number-input/flags"
    ],
    "devDependencies": [],
    "tailwind": {},
    "cssVars": {
      "light": {},
      "dark": {}
    },
    "files": [
      {
        "path": "registry/default/ui/tel-input.tsx",
        "content": "import * as React from \"react\";\n\nimport * as PhoneNumberInput from \"react-phone-number-input\";\nimport { CheckIcon, ChevronsUpDown } from \"lucide-react\";\nimport flags from \"react-phone-number-input/flags\";\n\nimport { Button } from \"@/components/ui/button\";\nimport {\n  Command,\n  CommandEmpty,\n  CommandGroup,\n  CommandInput,\n  CommandItem,\n  CommandList,\n} from \"@/components/ui/command\";\nimport { Input } from \"@/components/ui/input\";\nimport {\n  Popover,\n  PopoverContent,\n  PopoverTrigger,\n} from \"@/components/ui/popover\";\nimport { ScrollArea } from \"@/components/ui/scroll-area\";\n\nimport { cn } from \"@/lib/utils\";\n\ntype CountryEntry = {\n  label: string;\n  value: PhoneNumberInput.Country | undefined;\n};\n\ntype CountrySelectProps = {\n  disabled?: boolean;\n  value: PhoneNumberInput.Country;\n  options: CountryEntry[];\n  onChange: (country: PhoneNumberInput.Country) => void;\n};\n\ninterface CountrySelectOptionProps extends PhoneNumberInput.FlagProps {\n  selectedCountry: PhoneNumberInput.Country;\n  onChange: (country: PhoneNumberInput.Country) => void;\n}\n\ntype TelInputProps = Omit<\n  React.ComponentProps<\"input\">,\n  \"onChange\" | \"value\" | \"ref\"\n> &\n  Omit<PhoneNumberInput.Props<typeof PhoneNumberInput.default>, \"onChange\"> & {\n    onChange?: (value: PhoneNumberInput.Value) => void;\n  };\n\nconst FlagComponent = ({\n  country,\n  countryName,\n}: PhoneNumberInput.FlagProps) => {\n  const Flag = flags[country];\n\n  return (\n    <span className='flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full'>\n      {Flag && <Flag title={countryName} />}\n    </span>\n  );\n};\n\nconst CountrySelectOption = ({\n  country,\n  countryName,\n  selectedCountry,\n  onChange,\n}: CountrySelectOptionProps) => {\n  return (\n    <CommandItem\n      className='gap-2 cursor-pointer'\n      onSelect={() => onChange(country)}\n    >\n      <FlagComponent country={country} countryName={countryName} />\n      <span className='flex-1 text-sm'>{countryName}</span>\n      <span className='text-sm text-foreground/50'>{`+${PhoneNumberInput.getCountryCallingCode(country)}`}</span>\n      <CheckIcon\n        className={`ml-auto size-4 ${country === selectedCountry ? \"opacity-100\" : \"opacity-0\"}`}\n      />\n    </CommandItem>\n  );\n};\n\nconst InputComponent = React.forwardRef<\n  HTMLInputElement,\n  React.ComponentProps<\"input\">\n>(({ className, ...props }, ref) => (\n  <Input\n    className={cn(\"rounded-e-lg rounded-s-none\", className)}\n    {...props}\n    ref={ref}\n  />\n));\nInputComponent.displayName = \"InputComponent\";\n\nconst CountrySelect = ({\n  disabled,\n  value: selectedCountry,\n  options: countryList,\n  onChange,\n}: CountrySelectProps) => {\n  return (\n    <Popover>\n      <PopoverTrigger asChild>\n        <Button\n          type='button'\n          variant='outline'\n          className='flex gap-1 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10'\n          disabled={disabled}\n        >\n          <FlagComponent\n            country={selectedCountry}\n            countryName={selectedCountry}\n          />\n          <ChevronsUpDown\n            className={cn(\n              \"-mr-2 size-4 opacity-50\",\n              disabled ? \"hidden\" : \"opacity-100\",\n            )}\n          />\n        </Button>\n      </PopoverTrigger>\n      <PopoverContent className='w-[300px] p-0'>\n        <Command>\n          <CommandInput placeholder='Search country...' />\n          <CommandList>\n            <ScrollArea className='h-72'>\n              <CommandEmpty>No country found.</CommandEmpty>\n              <CommandGroup>\n                {countryList.map(({ value, label }) =>\n                  value ? (\n                    <CountrySelectOption\n                      key={value}\n                      country={value}\n                      countryName={label}\n                      selectedCountry={selectedCountry}\n                      onChange={onChange}\n                    />\n                  ) : null,\n                )}\n              </CommandGroup>\n            </ScrollArea>\n          </CommandList>\n        </Command>\n      </PopoverContent>\n    </Popover>\n  );\n};\n\nconst TelInput: React.ForwardRefExoticComponent<TelInputProps> =\n  React.forwardRef<\n    React.ElementRef<typeof PhoneNumberInput.default>,\n    TelInputProps\n  >(({ className, onChange, ...props }, ref) => {\n    return (\n      <PhoneNumberInput.default\n        ref={ref}\n        className={cn(\"flex\", className)}\n        flagComponent={FlagComponent}\n        countrySelectComponent={CountrySelect}\n        inputComponent={InputComponent}\n        smartCaret={false}\n        onChange={(value) =>\n          onChange?.(value || (\"\" as PhoneNumberInput.Value))\n        }\n        {...props}\n      />\n    );\n  });\nTelInput.displayName = \"TelInput\";\n\nexport { TelInput };\n",
        "type": "registry:ui"
      }
    ]
  }
];
