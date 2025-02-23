import type { Registry } from "@/registry/schema";

export const ui: Registry = [
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
