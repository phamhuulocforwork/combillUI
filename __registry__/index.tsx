// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react";

export const Index: Record<string, any> = {
  default: {
    "animated-label-input": {
      name: "animated-label-input",
      description: "",
      type: "registry:ui",
      files: [
        {
          path: "registry/default/ui/animated-label-input.tsx",
          content:
            'import * as React from "react";\r\n\r\nimport { Input } from "@/components/ui/input";\r\nimport { Label } from "@/components/ui/label";\r\n\r\nimport { cn } from "@/lib/utils";\r\n\r\nconst AnimatedLabel = React.forwardRef<\r\n  React.ElementRef<typeof Label>,\r\n  React.ComponentPropsWithoutRef<typeof Label>\r\n>(({ className, ...props }, ref) => {\r\n  return (\r\n    <Label\r\n      className={cn(\r\n        "peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-1.5 z-10 origin-[0] -translate-y-4 scale-[0.85] transform bg-background px-2 text-sm text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-[0.85] peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 cursor-text",\r\n        className,\r\n      )}\r\n      ref={ref}\r\n      {...props}\r\n    />\r\n  );\r\n});\r\nAnimatedLabel.displayName = "AnimatedLabel";\r\n\r\ntype AnimatedLabelInputProps = InputProps & { label?: string };\r\n\r\nconst AnimatedLabelInput = React.forwardRef<\r\n  React.ElementRef<typeof AnimatedInput>,\r\n  React.PropsWithoutRef<AnimatedLabelInputProps>\r\n>(({ id, label, ...props }, ref) => {\r\n  const inputRef = React.useRef<HTMLInputElement>(null);\r\n\r\n  React.useImperativeHandle(ref, () => inputRef.current!);\r\n\r\n  const handleLabelClick = () => {\r\n    if (inputRef.current) {\r\n      inputRef.current.focus();\r\n    }\r\n  };\r\n\r\n  return (\r\n    <div className=\'relative\'>\r\n      <AnimatedInput ref={inputRef} id={id} {...props} />\r\n      <AnimatedLabel htmlFor={id} onClick={handleLabelClick}>\r\n        {label}\r\n      </AnimatedLabel>\r\n    </div>\r\n  );\r\n});\r\nAnimatedLabelInput.displayName = "AnimatedLabelInput";\r\n\r\nexport interface InputProps\r\n  extends React.InputHTMLAttributes<HTMLInputElement> {}\r\n\r\nconst AnimatedInput = React.forwardRef<HTMLInputElement, InputProps>(\r\n  ({ className, ...props }, ref) => {\r\n    return (\r\n      <Input\r\n        placeholder=\' \'\r\n        className={cn("peer", className)}\r\n        ref={ref}\r\n        {...props}\r\n      />\r\n    );\r\n  },\r\n);\r\nAnimatedInput.displayName = "AnimatedInput";\r\n\r\nexport { AnimatedLabelInput, AnimatedLabel, AnimatedInput };\r\n',
          type: "registry:ui",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/ui/animated-label-input.tsx"),
      ),
    },

    "animated-tooltip": {
      name: "animated-tooltip",
      description: "",
      type: "registry:ui",
      files: [
        {
          path: "registry/default/ui/animated-tooltip.tsx",
          content:
            '"use client";\n\nimport * as React from "react";\n\nimport * as TooltipPrimitive from "@radix-ui/react-tooltip";\nimport { motion, useMotionValue, useSpring, useTransform } from "framer-motion";\n\nimport { cn } from "@/lib/utils";\n\nconst AnimatedTooltipProvider = TooltipPrimitive.Provider;\nconst AnimatedTooltip = TooltipPrimitive.Root;\nconst AnimatedTooltipTrigger = TooltipPrimitive.Trigger;\n\nconst springConfig = { stiffness: 100, damping: 5 };\n\nconst AnimatedTooltipContent = React.forwardRef<\n  React.ElementRef<typeof TooltipPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>\n>(({ className, sideOffset = 4, ...props }, ref) => {\n  const x = useMotionValue(0);\n  const rotate = useSpring(\n    useTransform(x, [-100, 100], [-45, 45]),\n    springConfig,\n  );\n  const translateX = useSpring(\n    useTransform(x, [-100, 100], [-50, 50]),\n    springConfig,\n  );\n\n  const handleMouseMove = (event: any) => {\n    const halfWidth = event.currentTarget.offsetWidth / 2;\n    x.set(event.nativeEvent.offsetX - halfWidth);\n  };\n\n  return (\n    <TooltipPrimitive.Portal>\n      <TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} {...props}>\n        <motion.div\n          onMouseMove={handleMouseMove}\n          initial={{ opacity: 0, y: 20, scale: 0.6 }}\n          animate={{\n            opacity: 1,\n            y: 0,\n            scale: 1,\n            transition: {\n              type: "spring",\n              stiffness: 260,\n              damping: 10,\n            },\n          }}\n          exit={{ opacity: 0, y: 20, scale: 0.6 }}\n          style={{\n            translateX: translateX,\n            rotate: rotate,\n          }}\n          className={cn(\n            "flex flex-col items-center justify-center rounded-md z-50 shadow-xl bg-primary px-3 py-1.5 text-primary-foreground ",\n            className,\n          )}\n        >\n          {props.children}\n        </motion.div>\n      </TooltipPrimitive.Content>\n    </TooltipPrimitive.Portal>\n  );\n});\nAnimatedTooltipContent.displayName = TooltipPrimitive.Content.displayName;\n\nexport {\n  AnimatedTooltip,\n  AnimatedTooltipTrigger,\n  AnimatedTooltipContent,\n  AnimatedTooltipProvider,\n};\n',
          type: "registry:ui",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/ui/animated-tooltip.tsx"),
      ),
    },

    "labeled-switch": {
      name: "labeled-switch",
      description: "",
      type: "registry:ui",
      files: [
        {
          path: "registry/default/ui/labeled-switch.tsx",
          content:
            '"use client";\n\nimport * as React from "react";\n\nimport * as SwitchPrimitives from "@radix-ui/react-switch";\nimport { motion } from "framer-motion";\n\nimport { cn } from "@/lib/utils";\n\ninterface LabeledSwitchProps {\n  firstLabel: React.ReactNode;\n  secondLabel: React.ReactNode;\n  selected: boolean;\n  onToggle: (checked: boolean) => void;\n  className?: string;\n}\n\nconst LabeledSwitch = React.forwardRef<\n  React.ElementRef<typeof SwitchPrimitives.Root>,\n  LabeledSwitchProps\n>(\n  (\n    { className, firstLabel, secondLabel, selected, onToggle, ...props },\n    ref,\n  ) => {\n    return (\n      <SwitchPrimitives.Root\n        className={cn(\n          "relative flex w-fit cursor-pointer items-center rounded-full ring-2 ring-input transition-colors",\n          className,\n        )}\n        ref={ref}\n        checked={selected}\n        onCheckedChange={onToggle}\n      >\n        <LabeledSwitchButton selected={selected}>\n          {firstLabel}\n        </LabeledSwitchButton>\n        <LabeledSwitchButton selected={!selected}>\n          {secondLabel}\n        </LabeledSwitchButton>\n        <SwitchPrimitives.Thumb\n          className={cn(\n            "absolute inset-0 w-full z-0 flex data-[state=unchecked]:justify-start data-[state=checked]:justify-end",\n          )}\n        >\n          <motion.span\n            layout\n            transition={{ type: "spring", damping: 15, stiffness: 250 }}\n            className=\'h-full w-1/2 rounded-full bg-muted\'\n          />\n        </SwitchPrimitives.Thumb>\n      </SwitchPrimitives.Root>\n    );\n  },\n);\nLabeledSwitch.displayName = "LabeledSwitch";\n\nconst LabeledSwitchButton = ({\n  children,\n  selected,\n}: {\n  children: React.ReactNode;\n  selected: boolean;\n}) => (\n  <div\n    className={cn(\n      "relative z-10 flex w-full items-center justify-center gap-2 px-3 py-3 text-xs font-bold transition-colors md:py-1.5 md:pl-3 md:pr-3.5",\n      selected ? "text-primary" : "text-muted-foreground",\n    )}\n    onMouseDown={(e) => e.preventDefault()}\n  >\n    <span className=\'relative z-10\'>{children}</span>\n  </div>\n);\n\nexport { LabeledSwitch };\n',
          type: "registry:ui",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/ui/labeled-switch.tsx"),
      ),
    },

    "responsive-textarea": {
      name: "responsive-textarea",
      description: "",
      type: "registry:ui",
      files: [
        {
          path: "registry/default/ui/responsive-textarea.tsx",
          content:
            '"use client";\n\nimport * as React from "react";\n\nimport { cn } from "@/lib/utils";\n\nconst ResponsiveTextarea = React.forwardRef<\n  HTMLTextAreaElement,\n  React.ComponentProps<"textarea">\n>(({ className, ...props }, ref) => {\n  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);\n  const [val, setVal] = React.useState<string>("");\n\n  React.useEffect(() => {\n    if (textAreaRef.current) {\n      textAreaRef.current.style.height = "auto";\n      textAreaRef.current.style.height =\n        textAreaRef.current.scrollHeight + "px";\n    }\n  }, [val]);\n\n  return (\n    <textarea\n      className={cn(\n        "placeholder:text-muted-foreground flex min-h-[80px] w-full resize-none overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",\n        className,\n      )}\n      ref={textAreaRef}\n      onChange={(e) => setVal(e.target.value)}\n      {...props}\n    />\n  );\n});\nResponsiveTextarea.displayName = "ResponsiveTextarea";\n\nexport { ResponsiveTextarea };\n',
          type: "registry:ui",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/ui/responsive-textarea.tsx"),
      ),
    },

    "tel-input": {
      name: "tel-input",
      description: "",
      type: "registry:ui",
      files: [
        {
          path: "registry/default/ui/tel-input.tsx",
          content:
            'import * as React from "react";\n\nimport * as PhoneNumberInput from "react-phone-number-input";\nimport { CheckIcon, ChevronsUpDown } from "lucide-react";\nimport flags from "react-phone-number-input/flags";\n\nimport { Button } from "@/components/ui/button";\nimport {\n  Command,\n  CommandEmpty,\n  CommandGroup,\n  CommandInput,\n  CommandItem,\n  CommandList,\n} from "@/components/ui/command";\nimport { Input } from "@/components/ui/input";\nimport {\n  Popover,\n  PopoverContent,\n  PopoverTrigger,\n} from "@/components/ui/popover";\nimport { ScrollArea } from "@/components/ui/scroll-area";\n\nimport { cn } from "@/lib/utils";\n\ntype CountryEntry = {\n  label: string;\n  value: PhoneNumberInput.Country | undefined;\n};\n\ntype CountrySelectProps = {\n  disabled?: boolean;\n  value: PhoneNumberInput.Country;\n  options: CountryEntry[];\n  onChange: (country: PhoneNumberInput.Country) => void;\n};\n\ninterface CountrySelectOptionProps extends PhoneNumberInput.FlagProps {\n  selectedCountry: PhoneNumberInput.Country;\n  onChange: (country: PhoneNumberInput.Country) => void;\n}\n\ntype TelInputProps = Omit<\n  React.ComponentProps<"input">,\n  "onChange" | "value" | "ref"\n> &\n  Omit<PhoneNumberInput.Props<typeof PhoneNumberInput.default>, "onChange"> & {\n    onChange?: (value: PhoneNumberInput.Value) => void;\n  };\n\nconst FlagComponent = ({\n  country,\n  countryName,\n}: PhoneNumberInput.FlagProps) => {\n  const Flag = flags[country];\n\n  return (\n    <span className=\'flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full\'>\n      {Flag && <Flag title={countryName} />}\n    </span>\n  );\n};\n\nconst CountrySelectOption = ({\n  country,\n  countryName,\n  selectedCountry,\n  onChange,\n}: CountrySelectOptionProps) => {\n  return (\n    <CommandItem\n      className=\'gap-2 cursor-pointer\'\n      onSelect={() => onChange(country)}\n    >\n      <FlagComponent country={country} countryName={countryName} />\n      <span className=\'flex-1 text-sm\'>{countryName}</span>\n      <span className=\'text-sm text-foreground/50\'>{`+${PhoneNumberInput.getCountryCallingCode(country)}`}</span>\n      <CheckIcon\n        className={`ml-auto size-4 ${country === selectedCountry ? "opacity-100" : "opacity-0"}`}\n      />\n    </CommandItem>\n  );\n};\n\nconst InputComponent = React.forwardRef<\n  HTMLInputElement,\n  React.ComponentProps<"input">\n>(({ className, ...props }, ref) => (\n  <Input\n    className={cn("rounded-e-lg rounded-s-none", className)}\n    {...props}\n    ref={ref}\n  />\n));\nInputComponent.displayName = "InputComponent";\n\nconst CountrySelect = ({\n  disabled,\n  value: selectedCountry,\n  options: countryList,\n  onChange,\n}: CountrySelectProps) => {\n  return (\n    <Popover>\n      <PopoverTrigger asChild>\n        <Button\n          type=\'button\'\n          variant=\'outline\'\n          className=\'flex gap-1 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10\'\n          disabled={disabled}\n        >\n          <FlagComponent\n            country={selectedCountry}\n            countryName={selectedCountry}\n          />\n          <ChevronsUpDown\n            className={cn(\n              "-mr-2 size-4 opacity-50",\n              disabled ? "hidden" : "opacity-100",\n            )}\n          />\n        </Button>\n      </PopoverTrigger>\n      <PopoverContent className=\'w-[300px] p-0\'>\n        <Command>\n          <CommandInput placeholder=\'Search country...\' />\n          <CommandList>\n            <ScrollArea className=\'h-72\'>\n              <CommandEmpty>No country found.</CommandEmpty>\n              <CommandGroup>\n                {countryList.map(({ value, label }) =>\n                  value ? (\n                    <CountrySelectOption\n                      key={value}\n                      country={value}\n                      countryName={label}\n                      selectedCountry={selectedCountry}\n                      onChange={onChange}\n                    />\n                  ) : null,\n                )}\n              </CommandGroup>\n            </ScrollArea>\n          </CommandList>\n        </Command>\n      </PopoverContent>\n    </Popover>\n  );\n};\n\nconst TelInput: React.ForwardRefExoticComponent<TelInputProps> =\n  React.forwardRef<\n    React.ElementRef<typeof PhoneNumberInput.default>,\n    TelInputProps\n  >(({ className, onChange, ...props }, ref) => {\n    return (\n      <PhoneNumberInput.default\n        ref={ref}\n        className={cn("flex", className)}\n        flagComponent={FlagComponent}\n        countrySelectComponent={CountrySelect}\n        inputComponent={InputComponent}\n        smartCaret={false}\n        onChange={(value) =>\n          onChange?.(value || ("" as PhoneNumberInput.Value))\n        }\n        {...props}\n      />\n    );\n  });\nTelInput.displayName = "TelInput";\n\nexport { TelInput };\n',
          type: "registry:ui",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/ui/tel-input.tsx"),
      ),
    },

    "animated-label-input-default": {
      name: "animated-label-input-default",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/animated-label-input-default.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () =>
          import("@/registry/default/example/animated-label-input-default.tsx"),
      ),
    },

    "animated-label-input-with-form": {
      name: "animated-label-input-with-form",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/animated-label-input-with-form.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () =>
          import(
            "@/registry/default/example/animated-label-input-with-form.tsx"
          ),
      ),
    },

    "animated-tooltip-default": {
      name: "animated-tooltip-default",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/animated-tooltip-default.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/example/animated-tooltip-default.tsx"),
      ),
    },

    "labeled-switch-default": {
      name: "labeled-switch-default",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/labeled-switch-default.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/example/labeled-switch-default.tsx"),
      ),
    },

    "labeled-switch-with-form": {
      name: "labeled-switch-with-form",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/labeled-switch-with-form.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/example/labeled-switch-with-form.tsx"),
      ),
    },

    "responsive-textarea-default": {
      name: "responsive-textarea-default",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/responsive-textarea-default.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () =>
          import("@/registry/default/example/responsive-textarea-default.tsx"),
      ),
    },

    "responsive-textarea-with-form": {
      name: "responsive-textarea-with-form",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/responsive-textarea-with-form.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () =>
          import(
            "@/registry/default/example/responsive-textarea-with-form.tsx"
          ),
      ),
    },

    "responsive-textarea-with-label": {
      name: "responsive-textarea-with-label",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/responsive-textarea-with-label.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () =>
          import(
            "@/registry/default/example/responsive-textarea-with-label.tsx"
          ),
      ),
    },

    "responsive-textarea-with-text": {
      name: "responsive-textarea-with-text",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/responsive-textarea-with-text.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () =>
          import(
            "@/registry/default/example/responsive-textarea-with-text.tsx"
          ),
      ),
    },

    "tel-input-custom-labels": {
      name: "tel-input-custom-labels",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/tel-input-custom-labels.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/example/tel-input-custom-labels.tsx"),
      ),
    },

    "tel-input-default-country": {
      name: "tel-input-default-country",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/tel-input-default-country.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () =>
          import("@/registry/default/example/tel-input-default-country.tsx"),
      ),
    },

    "tel-input-default": {
      name: "tel-input-default",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/tel-input-default.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/example/tel-input-default.tsx"),
      ),
    },

    "tel-input-international": {
      name: "tel-input-international",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/tel-input-international.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/example/tel-input-international.tsx"),
      ),
    },

    "tel-input-with-form": {
      name: "tel-input-with-form",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/tel-input-with-form.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/example/tel-input-with-form.tsx"),
      ),
    },

    "use-boolean-default": {
      name: "use-boolean-default",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/use-boolean-default.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/example/use-boolean-default.tsx"),
      ),
    },

    "use-debounce-default": {
      name: "use-debounce-default",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/use-debounce-default.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/example/use-debounce-default.tsx"),
      ),
    },

    "use-mobile-default": {
      name: "use-mobile-default",
      description: "",
      type: "registry:example",
      files: [
        {
          path: "registry/default/example/use-mobile-default.tsx",
          type: "registry:example",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/example/use-mobile-default.tsx"),
      ),
    },

    "avatar-default": {
      name: "avatar-default",
      description: "",
      type: "registry:snippet",
      files: [
        {
          path: "registry/default/snippets/avatar-default.tsx",
          content:
            "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarDefault() {\n  return (\n    <Avatar>\n      <AvatarImage\n        src='https://github.com/phamhuulocforwork.png'\n        alt='@phamhuulocforwork'\n      />\n      <AvatarFallback>HL</AvatarFallback>\n    </Avatar>\n  );\n}\n",
          type: "registry:snippet",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/snippets/avatar-default.tsx"),
      ),
    },

    "avatar-group-max": {
      name: "avatar-group-max",
      description: "",
      type: "registry:snippet",
      files: [
        {
          path: "registry/default/snippets/avatar-group-max.tsx",
          content:
            "import * as React from \"react\";\n\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nimport { cn } from \"@/lib/utils\";\n\ntype AvatarProps = React.ComponentProps<typeof Avatar>;\n\ninterface AvatarGroupProps extends React.ComponentProps<\"div\"> {\n  children: React.ReactElement<AvatarProps>[];\n  max?: number;\n}\n\nconst AvatarGroup = ({\n  children,\n  max,\n  className,\n  ...props\n}: AvatarGroupProps) => {\n  const totalAvatars = React.Children.count(children);\n  const displayedAvatars = React.Children.toArray(children)\n    .slice(0, max)\n    .reverse();\n  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\n\n  return (\n    <div\n      className={cn(\"flex items-center flex-row-reverse\", className)}\n      {...props}\n    >\n      {remainingAvatars > 0 && (\n        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\n          <AvatarFallback className='bg-muted-foreground text-white'>\n            +{remainingAvatars}\n          </AvatarFallback>\n        </Avatar>\n      )}\n      {displayedAvatars.map((avatar, index) => {\n        if (!React.isValidElement(avatar)) return null;\n\n        return (\n          <div key={index} className='-ml-2 hover:z-10 relative'>\n            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\n              className: \"ring-2 ring-background\",\n            })}\n          </div>\n        );\n      })}\n    </div>\n  );\n};\n\nexport default function AvatarGroupMaxAvatarDemo() {\n  return (\n    <AvatarGroup className='flex items-center' max={3}>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarImage\n          src='https://github.com/phamhuulocforwork.png'\n          alt='@phamhuulocforwork'\n        />\n        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-indigo-500 text-white'>VK</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-orange-500 text-white'>RS</AvatarFallback>\n      </Avatar>\n    </AvatarGroup>\n  );\n}\n",
          type: "registry:snippet",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/snippets/avatar-group-max.tsx"),
      ),
    },

    "avatar-group": {
      name: "avatar-group",
      description: "",
      type: "registry:snippet",
      files: [
        {
          path: "registry/default/snippets/avatar-group.tsx",
          content:
            "import * as React from \"react\";\n\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nimport { cn } from \"@/lib/utils\";\n\ntype AvatarProps = React.ComponentProps<typeof Avatar>;\n\ninterface AvatarGroupProps extends React.ComponentProps<\"div\"> {\n  children: React.ReactElement<AvatarProps>[];\n  max?: number;\n}\n\nconst AvatarGroup = ({\n  children,\n  max,\n  className,\n  ...props\n}: AvatarGroupProps) => {\n  const totalAvatars = React.Children.count(children);\n  const displayedAvatars = React.Children.toArray(children)\n    .slice(0, max)\n    .reverse();\n  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\n\n  return (\n    <div\n      className={cn(\"flex items-center flex-row-reverse\", className)}\n      {...props}\n    >\n      {remainingAvatars > 0 && (\n        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\n          <AvatarFallback className='bg-muted-foreground text-white'>\n            +{remainingAvatars}\n          </AvatarFallback>\n        </Avatar>\n      )}\n      {displayedAvatars.map((avatar, index) => {\n        if (!React.isValidElement(avatar)) return null;\n\n        return (\n          <div key={index} className='-ml-2 hover:z-10 relative'>\n            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\n              className: \"ring-2 ring-background\",\n            })}\n          </div>\n        );\n      })}\n    </div>\n  );\n};\n\nexport default function AvatarGroupDemo() {\n  return (\n    <AvatarGroup>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarImage\n          src='https://github.com/phamhuulocforwork.png'\n          alt='@phamhuulocforwork'\n        />\n        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\n      </Avatar>\n      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\n        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\n      </Avatar>\n    </AvatarGroup>\n  );\n}\n",
          type: "registry:snippet",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/snippets/avatar-group.tsx"),
      ),
    },

    "avatar-hover-card": {
      name: "avatar-hover-card",
      description: "",
      type: "registry:snippet",
      files: [
        {
          path: "registry/default/snippets/avatar-hover-card.tsx",
          content:
            "import { CalendarIcon } from \"lucide-react\";\n\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\nimport {\n  HoverCard,\n  HoverCardContent,\n  HoverCardTrigger,\n} from \"@/components/ui/hover-card\";\n\nexport default function AvatarHoverCard() {\n  return (\n    <HoverCard>\n      <HoverCardTrigger className='cursor-pointer'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>HL</AvatarFallback>\n        </Avatar>\n      </HoverCardTrigger>\n      <HoverCardContent className='w-full max-w-xs'>\n        <div className='flex justify-between space-x-4'>\n          <Avatar>\n            <AvatarImage\n              src='https://github.com/phamhuulocforwork.png'\n              alt='@phamhuulocforwork'\n            />\n            <AvatarFallback>HL</AvatarFallback>\n          </Avatar>\n          <div className='space-y-1'>\n            <h4 className='text-sm font-semibold'>@phamhuulocforwork</h4>\n            <p className='text-sm'>\n              I'm currently studying at University (I stay up late and my hair\n              is getting thinner and thinner. Do you think I'm bald? xD)\n            </p>\n            <div className='flex items-center pt-2'>\n              <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{\" \"}\n              <span className='text-xs text-muted-foreground'>\n                Joined February 2025\n              </span>\n            </div>\n          </div>\n        </div>\n      </HoverCardContent>\n    </HoverCard>\n  );\n}\n",
          type: "registry:snippet",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/snippets/avatar-hover-card.tsx"),
      ),
    },

    "avatar-with-ring": {
      name: "avatar-with-ring",
      description: "",
      type: "registry:snippet",
      files: [
        {
          path: "registry/default/snippets/avatar-with-ring.tsx",
          content:
            "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarWithRing() {\n  return (\n    <Avatar className='ring-2 ring-green-500 ring-offset-[3px] ring-offset-background'>\n      <AvatarImage\n        src='https://github.com/phamhuulocforwork.png'\n        alt='@phamhuulocforwork'\n      />\n      <AvatarFallback>HL</AvatarFallback>\n    </Avatar>\n  );\n}\n",
          type: "registry:snippet",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/snippets/avatar-with-ring.tsx"),
      ),
    },

    "avatar-with-status": {
      name: "avatar-with-status",
      description: "",
      type: "registry:snippet",
      files: [
        {
          path: "registry/default/snippets/avatar-with-status.tsx",
          content:
            "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\n\nexport default function AvatarWithStatus() {\n  return (\n    <div className='flex items-center gap-3'>\n      {/* Online */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-green-500 absolute bottom-0 right-0'></div>\n      </div>\n\n      {/* DND */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-red-500 absolute bottom-0 right-0'></div>\n      </div>\n\n      {/* Busy */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-yellow-500 absolute bottom-0 right-0'></div>\n      </div>\n\n      {/* Offline */}\n      <div className='relative'>\n        <Avatar>\n          <AvatarImage\n            src='https://github.com/phamhuulocforwork.png'\n            alt='@phamhuulocforwork'\n          />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <div className='h-2.5 w-2.5 ring-[2px] ring-background border-2 border-muted-foreground rounded-full bg-background absolute bottom-0 right-0'></div>\n      </div>\n    </div>\n  );\n}\n",
          type: "registry:snippet",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/snippets/avatar-with-status.tsx"),
      ),
    },

    "tooltip-with-arrow": {
      name: "tooltip-with-arrow",
      description: "",
      type: "registry:snippet",
      files: [
        {
          path: "registry/default/snippets/tooltip-with-arrow.tsx",
          content:
            'import { Button } from "@/components/ui/button";\r\nimport {\r\n  Tooltip,\r\n  TooltipContent,\r\n  TooltipProvider,\r\n  TooltipTrigger,\r\n} from "@/components/ui/tooltip";\r\nimport { TooltipArrow } from "@radix-ui/react-tooltip";\r\n\r\nexport default function WithArrowTooltipDemo() {\r\n  return (\r\n    <TooltipProvider>\r\n      <Tooltip>\r\n        <TooltipTrigger asChild>\r\n          <Button variant="outline">Hover</Button>\r\n        </TooltipTrigger>\r\n        <TooltipContent>\r\n          <p>Tooltip with arrow</p>\r\n          <TooltipArrow className="fill-foreground" />\r\n        </TooltipContent>\r\n      </Tooltip>\r\n    </TooltipProvider>\r\n  );\r\n}\r\n',
          type: "registry:snippet",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/snippets/tooltip-with-arrow.tsx"),
      ),
    },

    "use-boolean": {
      name: "use-boolean",
      description: "",
      type: "registry:hook",
      files: [
        {
          path: "registry/default/hooks/use-boolean.tsx",
          content:
            '"use client";\n\nimport * as React from "react";\n\ntype UseBooleanReturn = {\n  value: boolean;\n  setValue: React.Dispatch<React.SetStateAction<boolean>>;\n  setTrue: () => void;\n  setFalse: () => void;\n  toggle: () => void;\n};\n\nexport function useBoolean(defaultValue = false): UseBooleanReturn {\n  if (typeof defaultValue !== "boolean") {\n    throw new Error("defaultValue must be `true` or `false`");\n  }\n  const [value, setValue] = React.useState(defaultValue);\n\n  const toggle = React.useCallback(() => {\n    setValue((x) => !x);\n  }, []);\n\n  const setTrue = React.useCallback(() => {\n    setValue(true);\n  }, []);\n\n  const setFalse = React.useCallback(() => {\n    setValue(false);\n  }, []);\n\n  return { value, setValue, setTrue, setFalse, toggle };\n}\n',
          type: "registry:hook",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/hooks/use-boolean.tsx"),
      ),
    },

    "use-debounce": {
      name: "use-debounce",
      description: "",
      type: "registry:hook",
      files: [
        {
          path: "registry/default/hooks/use-debounce.ts",
          content:
            'import * as React from "react";\n\nexport function useDebounce<T>(value: T, delay?: number): T {\n  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);\n\n  React.useEffect(() => {\n    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  return debouncedValue;\n}\n',
          type: "registry:hook",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/hooks/use-debounce.ts"),
      ),
    },

    "use-mobile": {
      name: "use-mobile",
      description: "",
      type: "registry:hook",
      files: [
        {
          path: "registry/default/hooks/use-mobile.tsx",
          content:
            'import { useLayoutEffect, useState } from "react";\n\nimport debounce from "lodash.debounce";\n\nconst useIsMobile = (): boolean => {\n  const [isMobile, setIsMobile] = useState(false);\n\n  useLayoutEffect(() => {\n    const updateSize = (): void => {\n      setIsMobile(window.innerWidth < 768);\n    };\n    const debouncedUpdateSize = debounce(updateSize, 250);\n\n    updateSize();\n\n    window.addEventListener("resize", debouncedUpdateSize);\n\n    return (): void =>\n      window.removeEventListener("resize", debouncedUpdateSize);\n  }, []);\n\n  return isMobile;\n};\n\nexport default useIsMobile;\n',
          type: "registry:hook",
        },
      ],
      component: React.lazy(
        () => import("@/registry/default/hooks/use-mobile.tsx"),
      ),
    },
  },
};
