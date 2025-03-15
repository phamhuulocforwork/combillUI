"use client";

import * as React from "react";

import { Check } from "lucide-react";
import { type PopperProps, usePopper } from "react-popper";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from "@/components/ui/command";
import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";

import { useControllableState } from "@/registry/default/hooks/use-controllable-state";

interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}

const nonPrintableKeys = [
  "Tab",
  "Control",
  "Alt",
  "Shift",
  "Delete",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "Insert",
  "ArrowLeft",
  "ArrowRight",
];

interface ComboboxInputProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof CommandInput>,
    "defaultValue" | "value" | "onValueChange"
  > {
  options: Option[];
  input?: string;
  onInputChange?: (value: string) => void;
  defaultValue?: Option;
  value?: Option;
  onValueChange?: (option: Option) => void;
  emptyMessage?: string;
  immediate?: boolean;
  placement?: PopperProps<HTMLElement>["placement"];
  alignOffset?: number;
  sideOffset?: number;
  loading?: boolean;
}

export function ComboboxInput({
  options,
  input,
  onInputChange,
  defaultValue,
  value,
  onValueChange,
  placeholder,
  emptyMessage = "No results found",
  placement = "bottom-start",
  alignOffset = 0,
  sideOffset = 4,
  immediate = false,
  loading = false,
  className,
  ...props
}: ComboboxInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [controlledInput, setControlledInput] = useControllableState({
    prop: input,
    onChange: onInputChange,
  });

  const [currentOption, setCurrentOption] = useControllableState({
    defaultProp: defaultValue,
    prop: value,
    onChange: onValueChange,
  });

  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "offset", options: { offset: [alignOffset, sideOffset] } },
    ],
    placement,
  });

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const inputElement = inputRef.current;
      if (!inputElement) return;

      if (nonPrintableKeys.includes(event.key)) return;

      if (event.key === "Backspace" && inputElement.value === "" && !open) {
        if (open) setOpen(false);
        return;
      }

      if (event.key === "Escape") {
        if (currentOption && inputElement.value === currentOption.label) {
          if (open) setOpen(false);
          return;
        }

        if (inputElement.value === "") {
          if (open) setOpen(false);
          return;
        }

        setControlledInput("");
        setOpen(false);
        setCurrentOption(undefined);
        inputRef.current?.focus();
      }

      if (event.key === "Enter" && inputElement.value !== "") {
        const selectedOption = options.find(
          (option) => option.label === inputElement.value,
        );
        setCurrentOption(selectedOption);
      }

      if (!open) setOpen(true);
    },
    [currentOption, open, options, setControlledInput, setCurrentOption],
  );

  const onBlur = React.useCallback(() => {
    setOpen(false);
    setControlledInput(currentOption?.label ?? "");
  }, [currentOption?.label, setControlledInput]);

  const onSelect = React.useCallback(
    (selectedOption: Option) => {
      setControlledInput(selectedOption.label);
      setCurrentOption(selectedOption);
      setOpen(false);
    },
    [setControlledInput, setCurrentOption],
  );

  return (
    <Command
      ref={setReferenceElement}
      className='relative overflow-visible [&_[cmdk-input-wrapper]]:rounded-md [&_[cmdk-input-wrapper]]:border'
      onKeyDown={onKeyDown}
      {...attributes.reference}
    >
      <CommandInput
        ref={inputRef}
        value={controlledInput}
        onValueChange={(value) => {
          if (loading) return;

          setControlledInput(value);
          if (value === "") {
            setCurrentOption(undefined);
          }
        }}
        onBlur={onBlur}
        onFocus={() => {
          if (immediate) {
            setOpen(true);
          }
        }}
        placeholder={placeholder}
        className={cn("border-b-0", className)}
        {...props}
      />
      <CommandList
        ref={setPopperElement}
        data-state={open ? "open" : "closed"}
        style={styles.popper}
        className={cn(
          "z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[popper-placement=bottom-end]:translate-x-1/2 data-[popper-placement=bottom-start]:-translate-x-1/2 data-[popper-placement=left-end]:translate-y-1/2 data-[popper-placement=left-start]:-translate-y-1/2 data-[popper-placement=right-end]:translate-y-1/2 data-[popper-placement=right-start]:-translate-y-1/2 data-[popper-placement=top-end]:translate-x-1/2 data-[popper-placement=top-start]:-translate-x-1/2 data-[popper-placement=bottom-end]:slide-in-from-top-2 data-[popper-placement=bottom-start]:slide-in-from-top-2 data-[popper-placement=bottom]:slide-in-from-top-2 data-[popper-placement=left-end]:slide-in-from-right-2 data-[popper-placement=left-start]:slide-in-from-right-2 data-[popper-placement=left]:slide-in-from-right-2 data-[popper-placement=right-end]:slide-in-from-left-2 data-[popper-placement=right-start]:slide-in-from-left-2 data-[popper-placement=right]:slide-in-from-left-2 data-[popper-placement=top-end]:slide-in-from-bottom-2 data-[popper-placement=top-start]:slide-in-from-bottom-2 data-[popper-placement=top]:slide-in-from-bottom-2",
        )}
        {...attributes.popper}
      >
        {loading ? (
          <CommandLoading className='p-1'>
            <Skeleton className='h-8 w-full' />
          </CommandLoading>
        ) : null}
        {options.length > 0 && !loading ? (
          <CommandGroup>
            {options.map((option) => {
              const isSelected = currentOption?.value === option.value;

              return (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                  }}
                  onSelect={() => onSelect(option)}
                  className={cn("flex w-full items-center gap-2", {
                    "pl-8": !isSelected,
                  })}
                >
                  {isSelected ? (
                    <Check className='w-4' aria-hidden='true' />
                  ) : null}
                  {option.label}
                </CommandItem>
              );
            })}
          </CommandGroup>
        ) : null}
        {loading ? null : <CommandEmpty>{emptyMessage}</CommandEmpty>}
      </CommandList>
    </Command>
  );
}
