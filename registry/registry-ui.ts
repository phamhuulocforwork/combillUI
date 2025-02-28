import type { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "animated-tooltip",
    type: "registry:ui",
    registryDependencies: [],
    dependencies: ["react", "framer-motion"],
    devDependencies: [],
    tailwind: {},
    cssVars: {
      light: {},
      dark: {},
    },
    files: [
      {
        path: "registry/default/ui/animated-tooltip.tsx",
        content:
          '"use client";\r\n\r\nimport * as React from "react";\r\n\r\nimport * as TooltipPrimitive from "@radix-ui/react-tooltip";\r\nimport { motion, useMotionValue, useSpring, useTransform } from "framer-motion";\r\n\r\nimport { cn } from "@/lib/utils";\r\n\r\nconst AnimatedTooltipProvider = TooltipPrimitive.Provider;\r\nconst AnimatedTooltip = TooltipPrimitive.Root;\r\nconst AnimatedTooltipTrigger = TooltipPrimitive.Trigger;\r\n\r\nconst springConfig = { stiffness: 100, damping: 5 };\r\n\r\nconst AnimatedTooltipContent = React.forwardRef<\r\n  React.ElementRef<typeof TooltipPrimitive.Content>,\r\n  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>\r\n>(({ className, sideOffset = 4, ...props }, ref) => {\r\n  const x = useMotionValue(0);\r\n  const rotate = useSpring(\r\n    useTransform(x, [-100, 100], [-45, 45]),\r\n    springConfig,\r\n  );\r\n  const translateX = useSpring(\r\n    useTransform(x, [-100, 100], [-50, 50]),\r\n    springConfig,\r\n  );\r\n\r\n  const handleMouseMove = (event: any) => {\r\n    const halfWidth = event.currentTarget.offsetWidth / 2;\r\n    x.set(event.nativeEvent.offsetX - halfWidth);\r\n  };\r\n\r\n  return (\r\n    <TooltipPrimitive.Portal>\r\n      <TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} {...props}>\r\n        <motion.div\r\n          onMouseMove={handleMouseMove}\r\n          initial={{ opacity: 0, y: 20, scale: 0.6 }}\r\n          animate={{\r\n            opacity: 1,\r\n            y: 0,\r\n            scale: 1,\r\n            transition: {\r\n              type: "spring",\r\n              stiffness: 260,\r\n              damping: 10,\r\n            },\r\n          }}\r\n          exit={{ opacity: 0, y: 20, scale: 0.6 }}\r\n          style={{\r\n            translateX: translateX,\r\n            rotate: rotate,\r\n          }}\r\n          className={cn(\r\n            "flex flex-col items-center justify-center rounded-md z-50 shadow-xl bg-primary px-3 py-1.5 text-primary-foreground ",\r\n            className,\r\n          )}\r\n        >\r\n          {props.children}\r\n        </motion.div>\r\n      </TooltipPrimitive.Content>\r\n    </TooltipPrimitive.Portal>\r\n  );\r\n});\r\nAnimatedTooltipContent.displayName = TooltipPrimitive.Content.displayName;\r\n\r\nexport {\r\n  AnimatedTooltip,\r\n  AnimatedTooltipTrigger,\r\n  AnimatedTooltipContent,\r\n  AnimatedTooltipProvider,\r\n};\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "labeled-switch",
    type: "registry:ui",
    registryDependencies: [],
    dependencies: ["react", "framer-motion"],
    devDependencies: [],
    tailwind: {},
    cssVars: {
      light: {},
      dark: {},
    },
    files: [
      {
        path: "registry/default/ui/labeled-switch.tsx",
        content:
          '"use client";\r\n\r\nimport * as React from "react";\r\n\r\nimport * as SwitchPrimitives from "@radix-ui/react-switch";\r\nimport { motion } from "framer-motion";\r\n\r\nimport { cn } from "@/lib/utils";\r\n\r\ninterface LabeledSwitchProps {\r\n  firstLabel: React.ReactNode;\r\n  secondLabel: React.ReactNode;\r\n  selected: boolean;\r\n  onToggle: (checked: boolean) => void;\r\n  className?: string;\r\n}\r\n\r\nconst LabeledSwitch = React.forwardRef<\r\n  React.ElementRef<typeof SwitchPrimitives.Root>,\r\n  LabeledSwitchProps\r\n>(\r\n  (\r\n    { className, firstLabel, secondLabel, selected, onToggle, ...props },\r\n    ref,\r\n  ) => {\r\n    return (\r\n      <SwitchPrimitives.Root\r\n        className={cn(\r\n          "relative flex w-fit cursor-pointer items-center rounded-full ring-2 ring-input transition-colors",\r\n          className,\r\n        )}\r\n        ref={ref}\r\n        checked={selected}\r\n        onCheckedChange={onToggle}\r\n      >\r\n        <LabeledSwitchButton selected={selected}>\r\n          {firstLabel}\r\n        </LabeledSwitchButton>\r\n        <LabeledSwitchButton selected={!selected}>\r\n          {secondLabel}\r\n        </LabeledSwitchButton>\r\n        <SwitchPrimitives.Thumb\r\n          className={cn(\r\n            "absolute inset-0 w-full z-0 flex data-[state=unchecked]:justify-start data-[state=checked]:justify-end",\r\n          )}\r\n        >\r\n          <motion.span\r\n            layout\r\n            transition={{ type: "spring", damping: 15, stiffness: 250 }}\r\n            className=\'h-full w-1/2 rounded-full bg-muted\'\r\n          />\r\n        </SwitchPrimitives.Thumb>\r\n      </SwitchPrimitives.Root>\r\n    );\r\n  },\r\n);\r\nLabeledSwitch.displayName = "LabeledSwitch";\r\n\r\nconst LabeledSwitchButton = ({\r\n  children,\r\n  selected,\r\n}: {\r\n  children: React.ReactNode;\r\n  selected: boolean;\r\n}) => (\r\n  <div\r\n    className={cn(\r\n      "relative z-10 flex w-full items-center justify-center gap-2 px-3 py-3 text-xs font-bold transition-colors md:py-1.5 md:pl-3 md:pr-3.5",\r\n      selected ? "text-primary" : "text-muted-foreground",\r\n    )}\r\n    onMouseDown={(e) => e.preventDefault()}\r\n  >\r\n    <span className=\'relative z-10\'>{children}</span>\r\n  </div>\r\n);\r\n\r\nexport { LabeledSwitch };\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "responsive-textarea",
    type: "registry:ui",
    registryDependencies: [],
    dependencies: ["react"],
    devDependencies: [],
    tailwind: {},
    cssVars: {
      light: {},
      dark: {},
    },
    files: [
      {
        path: "registry/default/ui/responsive-textarea.tsx",
        content:
          '"use client";\r\n\r\nimport * as React from "react";\r\n\r\nimport { cn } from "@/lib/utils";\r\n\r\nconst ResponsiveTextarea = React.forwardRef<\r\n  HTMLTextAreaElement,\r\n  React.ComponentProps<"textarea">\r\n>(({ className, ...props }, ref) => {\r\n  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);\r\n  const [val, setVal] = React.useState<string>("");\r\n\r\n  React.useEffect(() => {\r\n    if (textAreaRef.current) {\r\n      textAreaRef.current.style.height = "auto";\r\n      textAreaRef.current.style.height =\r\n        textAreaRef.current.scrollHeight + "px";\r\n    }\r\n  }, [val]);\r\n\r\n  return (\r\n    <textarea\r\n      className={cn(\r\n        "placeholder:text-muted-foreground flex min-h-[80px] w-full resize-none overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",\r\n        className,\r\n      )}\r\n      ref={textAreaRef}\r\n      onChange={(e) => setVal(e.target.value)}\r\n      {...props}\r\n    />\r\n  );\r\n});\r\nResponsiveTextarea.displayName = "ResponsiveTextarea";\r\n\r\nexport { ResponsiveTextarea };\r\n',
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tel-input",
    type: "registry:ui",
    registryDependencies: [
      "button",
      "command",
      "input",
      "popover",
      "scroll-area",
    ],
    dependencies: [
      "react",
      "react-phone-number-input",
      "lucide-react",
      "react-phone-number-input/flags",
    ],
    devDependencies: [],
    tailwind: {},
    cssVars: {
      light: {},
      dark: {},
    },
    files: [
      {
        path: "registry/default/ui/tel-input.tsx",
        content:
          'import * as React from "react";\r\n\r\nimport * as PhoneNumberInput from "react-phone-number-input";\r\nimport { CheckIcon, ChevronsUpDown } from "lucide-react";\r\nimport flags from "react-phone-number-input/flags";\r\n\r\nimport { Button } from "@/components/ui/button";\r\nimport {\r\n  Command,\r\n  CommandEmpty,\r\n  CommandGroup,\r\n  CommandInput,\r\n  CommandItem,\r\n  CommandList,\r\n} from "@/components/ui/command";\r\nimport { Input } from "@/components/ui/input";\r\nimport {\r\n  Popover,\r\n  PopoverContent,\r\n  PopoverTrigger,\r\n} from "@/components/ui/popover";\r\nimport { ScrollArea } from "@/components/ui/scroll-area";\r\n\r\nimport { cn } from "@/lib/utils";\r\n\r\ntype CountryEntry = {\r\n  label: string;\r\n  value: PhoneNumberInput.Country | undefined;\r\n};\r\n\r\ntype CountrySelectProps = {\r\n  disabled?: boolean;\r\n  value: PhoneNumberInput.Country;\r\n  options: CountryEntry[];\r\n  onChange: (country: PhoneNumberInput.Country) => void;\r\n};\r\n\r\ninterface CountrySelectOptionProps extends PhoneNumberInput.FlagProps {\r\n  selectedCountry: PhoneNumberInput.Country;\r\n  onChange: (country: PhoneNumberInput.Country) => void;\r\n}\r\n\r\ntype TelInputProps = Omit<\r\n  React.ComponentProps<"input">,\r\n  "onChange" | "value" | "ref"\r\n> &\r\n  Omit<PhoneNumberInput.Props<typeof PhoneNumberInput.default>, "onChange"> & {\r\n    onChange?: (value: PhoneNumberInput.Value) => void;\r\n  };\r\n\r\nconst FlagComponent = ({\r\n  country,\r\n  countryName,\r\n}: PhoneNumberInput.FlagProps) => {\r\n  const Flag = flags[country];\r\n\r\n  return (\r\n    <span className=\'flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full\'>\r\n      {Flag && <Flag title={countryName} />}\r\n    </span>\r\n  );\r\n};\r\n\r\nconst CountrySelectOption = ({\r\n  country,\r\n  countryName,\r\n  selectedCountry,\r\n  onChange,\r\n}: CountrySelectOptionProps) => {\r\n  return (\r\n    <CommandItem\r\n      className=\'gap-2 cursor-pointer\'\r\n      onSelect={() => onChange(country)}\r\n    >\r\n      <FlagComponent country={country} countryName={countryName} />\r\n      <span className=\'flex-1 text-sm\'>{countryName}</span>\r\n      <span className=\'text-sm text-foreground/50\'>{`+${PhoneNumberInput.getCountryCallingCode(country)}`}</span>\r\n      <CheckIcon\r\n        className={`ml-auto size-4 ${country === selectedCountry ? "opacity-100" : "opacity-0"}`}\r\n      />\r\n    </CommandItem>\r\n  );\r\n};\r\n\r\nconst InputComponent = React.forwardRef<\r\n  HTMLInputElement,\r\n  React.ComponentProps<"input">\r\n>(({ className, ...props }, ref) => (\r\n  <Input\r\n    className={cn("rounded-e-lg rounded-s-none", className)}\r\n    {...props}\r\n    ref={ref}\r\n  />\r\n));\r\nInputComponent.displayName = "InputComponent";\r\n\r\nconst CountrySelect = ({\r\n  disabled,\r\n  value: selectedCountry,\r\n  options: countryList,\r\n  onChange,\r\n}: CountrySelectProps) => {\r\n  return (\r\n    <Popover>\r\n      <PopoverTrigger asChild>\r\n        <Button\r\n          type=\'button\'\r\n          variant=\'outline\'\r\n          className=\'flex gap-1 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10\'\r\n          disabled={disabled}\r\n        >\r\n          <FlagComponent\r\n            country={selectedCountry}\r\n            countryName={selectedCountry}\r\n          />\r\n          <ChevronsUpDown\r\n            className={cn(\r\n              "-mr-2 size-4 opacity-50",\r\n              disabled ? "hidden" : "opacity-100",\r\n            )}\r\n          />\r\n        </Button>\r\n      </PopoverTrigger>\r\n      <PopoverContent className=\'w-[300px] p-0\'>\r\n        <Command>\r\n          <CommandInput placeholder=\'Search country...\' />\r\n          <CommandList>\r\n            <ScrollArea className=\'h-72\'>\r\n              <CommandEmpty>No country found.</CommandEmpty>\r\n              <CommandGroup>\r\n                {countryList.map(({ value, label }) =>\r\n                  value ? (\r\n                    <CountrySelectOption\r\n                      key={value}\r\n                      country={value}\r\n                      countryName={label}\r\n                      selectedCountry={selectedCountry}\r\n                      onChange={onChange}\r\n                    />\r\n                  ) : null,\r\n                )}\r\n              </CommandGroup>\r\n            </ScrollArea>\r\n          </CommandList>\r\n        </Command>\r\n      </PopoverContent>\r\n    </Popover>\r\n  );\r\n};\r\n\r\nconst TelInput: React.ForwardRefExoticComponent<TelInputProps> =\r\n  React.forwardRef<\r\n    React.ElementRef<typeof PhoneNumberInput.default>,\r\n    TelInputProps\r\n  >(({ className, onChange, ...props }, ref) => {\r\n    return (\r\n      <PhoneNumberInput.default\r\n        ref={ref}\r\n        className={cn("flex", className)}\r\n        flagComponent={FlagComponent}\r\n        countrySelectComponent={CountrySelect}\r\n        inputComponent={InputComponent}\r\n        smartCaret={false}\r\n        onChange={(value) =>\r\n          onChange?.(value || ("" as PhoneNumberInput.Value))\r\n        }\r\n        {...props}\r\n      />\r\n    );\r\n  });\r\nTelInput.displayName = "TelInput";\r\n\r\nexport { TelInput };\r\n',
        type: "registry:ui",
      },
    ],
  },
];
