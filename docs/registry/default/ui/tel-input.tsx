import { CheckIcon, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';
import * as PhoneNumberInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';

import { cn } from '@/lib/utils';

type CountryEntry = {
  label: string;
  value: PhoneNumberInput.Country | undefined;
};

type CountrySelectProps = {
  disabled?: boolean;
  value: PhoneNumberInput.Country;
  options: CountryEntry[];
  onChange: (country: PhoneNumberInput.Country) => void;
};

interface CountrySelectOptionProps extends PhoneNumberInput.FlagProps {
  selectedCountry: PhoneNumberInput.Country;
  onChange: (country: PhoneNumberInput.Country) => void;
}

type TelInputProps = Omit<
  React.ComponentProps<'input'>,
  'onChange' | 'value' | 'ref'
> &
  Omit<PhoneNumberInput.Props<typeof PhoneNumberInput.default>, 'onChange'> & {
    onChange?: (value: PhoneNumberInput.Value) => void;
  };

const FlagComponent = ({
  country,
  countryName,
}: PhoneNumberInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

const CountrySelectOption = ({
  country,
  countryName,
  selectedCountry,
  onChange,
}: CountrySelectOptionProps) => {
  return (
    <CommandItem
      className="cursor-pointer gap-2"
      onSelect={() => onChange(country)}
    >
      <FlagComponent country={country} countryName={countryName} />
      <span className="flex-1 text-sm">{countryName}</span>
      <span className="text-foreground/50 text-sm">{`+${PhoneNumberInput.getCountryCallingCode(country)}`}</span>
      <CheckIcon
        className={`ml-auto size-4 ${country === selectedCountry ? 'opacity-100' : 'opacity-0'}`}
      />
    </CommandItem>
  );
};

const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, ...props }, ref) => (
  <Input
    className={cn('rounded-s-none rounded-e-lg', className)}
    {...props}
    ref={ref}
  />
));
InputComponent.displayName = 'InputComponent';

const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
}: CountrySelectProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="flex gap-1 rounded-s-lg rounded-e-none border-r-0 px-3 focus:z-10"
          disabled={disabled}
        >
          <FlagComponent
            country={selectedCountry}
            countryName={selectedCountry}
          />
          <ChevronsUpDown
            className={cn(
              '-mr-2 size-4 opacity-50',
              disabled ? 'hidden' : 'opacity-100',
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <ScrollArea className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList.map(({ value, label }) =>
                  value ? (
                    <CountrySelectOption
                      key={value}
                      country={value}
                      countryName={label}
                      selectedCountry={selectedCountry}
                      onChange={onChange}
                    />
                  ) : null,
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const TelInput: React.ForwardRefExoticComponent<TelInputProps> =
  React.forwardRef<
    React.ElementRef<typeof PhoneNumberInput.default>,
    TelInputProps
  >(({ className, onChange, ...props }, ref) => {
    return (
      <PhoneNumberInput.default
        ref={ref}
        className={cn('flex', className)}
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={InputComponent}
        smartCaret={false}
        onChange={(value) =>
          onChange?.(value || ('' as PhoneNumberInput.Value))
        }
        {...props}
      />
    );
  });
TelInput.displayName = 'TelInput';

export { TelInput };
