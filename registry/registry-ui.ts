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
          '"use client";\n\nimport * as React from "react";\n\nimport * as TooltipPrimitive from "@radix-ui/react-tooltip";\nimport { motion, useMotionValue, useSpring, useTransform } from "framer-motion";\n\nimport { cn } from "@/lib/utils";\n\nconst AnimatedTooltipProvider = TooltipPrimitive.Provider;\nconst AnimatedTooltip = TooltipPrimitive.Root;\nconst AnimatedTooltipTrigger = TooltipPrimitive.Trigger;\n\nconst springConfig = { stiffness: 100, damping: 5 };\n\nconst AnimatedTooltipContent = React.forwardRef<\n  React.ElementRef<typeof TooltipPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>\n>(({ className, sideOffset = 4, ...props }, ref) => {\n  const x = useMotionValue(0);\n  const rotate = useSpring(\n    useTransform(x, [-100, 100], [-45, 45]),\n    springConfig,\n  );\n  const translateX = useSpring(\n    useTransform(x, [-100, 100], [-50, 50]),\n    springConfig,\n  );\n\n  const handleMouseMove = (event: any) => {\n    const halfWidth = event.currentTarget.offsetWidth / 2;\n    x.set(event.nativeEvent.offsetX - halfWidth);\n  };\n\n  return (\n    <TooltipPrimitive.Portal>\n      <TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} {...props}>\n        <motion.div\n          onMouseMove={handleMouseMove}\n          initial={{ opacity: 0, y: 20, scale: 0.6 }}\n          animate={{\n            opacity: 1,\n            y: 0,\n            scale: 1,\n            transition: {\n              type: "spring",\n              stiffness: 260,\n              damping: 10,\n            },\n          }}\n          exit={{ opacity: 0, y: 20, scale: 0.6 }}\n          style={{\n            translateX: translateX,\n            rotate: rotate,\n          }}\n          className={cn(\n            "flex flex-col items-center justify-center rounded-md z-50 shadow-xl bg-primary px-3 py-1.5 text-primary-foreground ",\n            className,\n          )}\n        >\n          {props.children}\n        </motion.div>\n      </TooltipPrimitive.Content>\n    </TooltipPrimitive.Portal>\n  );\n});\nAnimatedTooltipContent.displayName = TooltipPrimitive.Content.displayName;\n\nexport {\n  AnimatedTooltip,\n  AnimatedTooltipTrigger,\n  AnimatedTooltipContent,\n  AnimatedTooltipProvider,\n};\n',
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
          '"use client";\n\nimport * as React from "react";\n\nimport * as SwitchPrimitives from "@radix-ui/react-switch";\nimport { motion } from "framer-motion";\n\nimport { cn } from "@/lib/utils";\n\ninterface LabeledSwitchProps {\n  firstLabel: React.ReactNode;\n  secondLabel: React.ReactNode;\n  selected: boolean;\n  onToggle: (checked: boolean) => void;\n  className?: string;\n}\n\nconst LabeledSwitch = React.forwardRef<\n  React.ElementRef<typeof SwitchPrimitives.Root>,\n  LabeledSwitchProps\n>(\n  (\n    { className, firstLabel, secondLabel, selected, onToggle, ...props },\n    ref,\n  ) => {\n    return (\n      <SwitchPrimitives.Root\n        className={cn(\n          "relative flex w-fit cursor-pointer items-center rounded-full ring-2 ring-input transition-colors",\n          className,\n        )}\n        ref={ref}\n        checked={selected}\n        onCheckedChange={onToggle}\n      >\n        <LabeledSwitchButton selected={selected}>\n          {firstLabel}\n        </LabeledSwitchButton>\n        <LabeledSwitchButton selected={!selected}>\n          {secondLabel}\n        </LabeledSwitchButton>\n        <SwitchPrimitives.Thumb\n          className={cn(\n            "absolute inset-0 w-full z-0 flex data-[state=unchecked]:justify-start data-[state=checked]:justify-end",\n          )}\n        >\n          <motion.span\n            layout\n            transition={{ type: "spring", damping: 15, stiffness: 250 }}\n            className=\'h-full w-1/2 rounded-full bg-muted\'\n          />\n        </SwitchPrimitives.Thumb>\n      </SwitchPrimitives.Root>\n    );\n  },\n);\nLabeledSwitch.displayName = "LabeledSwitch";\n\nconst LabeledSwitchButton = ({\n  children,\n  selected,\n}: {\n  children: React.ReactNode;\n  selected: boolean;\n}) => (\n  <div\n    className={cn(\n      "relative z-10 flex w-full items-center justify-center gap-2 px-3 py-3 text-xs font-bold transition-colors md:py-1.5 md:pl-3 md:pr-3.5",\n      selected ? "text-primary" : "text-muted-foreground",\n    )}\n    onMouseDown={(e) => e.preventDefault()}\n  >\n    <span className=\'relative z-10\'>{children}</span>\n  </div>\n);\n\nexport { LabeledSwitch };\n',
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
          '"use client";\n\nimport * as React from "react";\n\nimport { cn } from "@/lib/utils";\n\nconst ResponsiveTextarea = React.forwardRef<\n  HTMLTextAreaElement,\n  React.ComponentProps<"textarea">\n>(({ className, ...props }, ref) => {\n  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);\n  const [val, setVal] = React.useState<string>("");\n\n  React.useEffect(() => {\n    if (textAreaRef.current) {\n      textAreaRef.current.style.height = "auto";\n      textAreaRef.current.style.height =\n        textAreaRef.current.scrollHeight + "px";\n    }\n  }, [val]);\n\n  return (\n    <textarea\n      className={cn(\n        "placeholder:text-muted-foreground flex min-h-[80px] w-full resize-none overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",\n        className,\n      )}\n      ref={textAreaRef}\n      onChange={(e) => setVal(e.target.value)}\n      {...props}\n    />\n  );\n});\nResponsiveTextarea.displayName = "ResponsiveTextarea";\n\nexport { ResponsiveTextarea };\n',
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
          'import * as React from "react";\n\nimport * as PhoneNumberInput from "react-phone-number-input";\nimport { CheckIcon, ChevronsUpDown } from "lucide-react";\nimport flags from "react-phone-number-input/flags";\n\nimport { Button } from "@/components/ui/button";\nimport {\n  Command,\n  CommandEmpty,\n  CommandGroup,\n  CommandInput,\n  CommandItem,\n  CommandList,\n} from "@/components/ui/command";\nimport { Input } from "@/components/ui/input";\nimport {\n  Popover,\n  PopoverContent,\n  PopoverTrigger,\n} from "@/components/ui/popover";\nimport { ScrollArea } from "@/components/ui/scroll-area";\n\nimport { cn } from "@/lib/utils";\n\ntype CountryEntry = {\n  label: string;\n  value: PhoneNumberInput.Country | undefined;\n};\n\ntype CountrySelectProps = {\n  disabled?: boolean;\n  value: PhoneNumberInput.Country;\n  options: CountryEntry[];\n  onChange: (country: PhoneNumberInput.Country) => void;\n};\n\ninterface CountrySelectOptionProps extends PhoneNumberInput.FlagProps {\n  selectedCountry: PhoneNumberInput.Country;\n  onChange: (country: PhoneNumberInput.Country) => void;\n}\n\ntype TelInputProps = Omit<\n  React.ComponentProps<"input">,\n  "onChange" | "value" | "ref"\n> &\n  Omit<PhoneNumberInput.Props<typeof PhoneNumberInput.default>, "onChange"> & {\n    onChange?: (value: PhoneNumberInput.Value) => void;\n  };\n\nconst FlagComponent = ({\n  country,\n  countryName,\n}: PhoneNumberInput.FlagProps) => {\n  const Flag = flags[country];\n\n  return (\n    <span className=\'flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full\'>\n      {Flag && <Flag title={countryName} />}\n    </span>\n  );\n};\n\nconst CountrySelectOption = ({\n  country,\n  countryName,\n  selectedCountry,\n  onChange,\n}: CountrySelectOptionProps) => {\n  return (\n    <CommandItem\n      className=\'gap-2 cursor-pointer\'\n      onSelect={() => onChange(country)}\n    >\n      <FlagComponent country={country} countryName={countryName} />\n      <span className=\'flex-1 text-sm\'>{countryName}</span>\n      <span className=\'text-sm text-foreground/50\'>{`+${PhoneNumberInput.getCountryCallingCode(country)}`}</span>\n      <CheckIcon\n        className={`ml-auto size-4 ${country === selectedCountry ? "opacity-100" : "opacity-0"}`}\n      />\n    </CommandItem>\n  );\n};\n\nconst InputComponent = React.forwardRef<\n  HTMLInputElement,\n  React.ComponentProps<"input">\n>(({ className, ...props }, ref) => (\n  <Input\n    className={cn("rounded-e-lg rounded-s-none", className)}\n    {...props}\n    ref={ref}\n  />\n));\nInputComponent.displayName = "InputComponent";\n\nconst CountrySelect = ({\n  disabled,\n  value: selectedCountry,\n  options: countryList,\n  onChange,\n}: CountrySelectProps) => {\n  return (\n    <Popover>\n      <PopoverTrigger asChild>\n        <Button\n          type=\'button\'\n          variant=\'outline\'\n          className=\'flex gap-1 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10\'\n          disabled={disabled}\n        >\n          <FlagComponent\n            country={selectedCountry}\n            countryName={selectedCountry}\n          />\n          <ChevronsUpDown\n            className={cn(\n              "-mr-2 size-4 opacity-50",\n              disabled ? "hidden" : "opacity-100",\n            )}\n          />\n        </Button>\n      </PopoverTrigger>\n      <PopoverContent className=\'w-[300px] p-0\'>\n        <Command>\n          <CommandInput placeholder=\'Search country...\' />\n          <CommandList>\n            <ScrollArea className=\'h-72\'>\n              <CommandEmpty>No country found.</CommandEmpty>\n              <CommandGroup>\n                {countryList.map(({ value, label }) =>\n                  value ? (\n                    <CountrySelectOption\n                      key={value}\n                      country={value}\n                      countryName={label}\n                      selectedCountry={selectedCountry}\n                      onChange={onChange}\n                    />\n                  ) : null,\n                )}\n              </CommandGroup>\n            </ScrollArea>\n          </CommandList>\n        </Command>\n      </PopoverContent>\n    </Popover>\n  );\n};\n\nconst TelInput: React.ForwardRefExoticComponent<TelInputProps> =\n  React.forwardRef<\n    React.ElementRef<typeof PhoneNumberInput.default>,\n    TelInputProps\n  >(({ className, onChange, ...props }, ref) => {\n    return (\n      <PhoneNumberInput.default\n        ref={ref}\n        className={cn("flex", className)}\n        flagComponent={FlagComponent}\n        countrySelectComponent={CountrySelect}\n        inputComponent={InputComponent}\n        smartCaret={false}\n        onChange={(value) =>\n          onChange?.(value || ("" as PhoneNumberInput.Value))\n        }\n        {...props}\n      />\n    );\n  });\nTelInput.displayName = "TelInput";\n\nexport { TelInput };\n',
        type: "registry:ui",
      },
    ],
  },
];
