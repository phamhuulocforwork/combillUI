var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var init_utils = __esm({
  "lib/utils.ts"() {
    "use strict";
  }
});

// components/ui/input.tsx
import * as React2 from "react";
var Input;
var init_input = __esm({
  "components/ui/input.tsx"() {
    "use strict";
    init_utils();
    Input = React2.forwardRef(
      ({ className, type, ...props }, ref) => {
        return /* @__PURE__ */ React2.createElement(
          "input",
          {
            type,
            className: cn(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className
            ),
            ref,
            ...props
          }
        );
      }
    );
    Input.displayName = "Input";
  }
});

// components/ui/label.tsx
import * as React3 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
var labelVariants, Label;
var init_label = __esm({
  "components/ui/label.tsx"() {
    "use strict";
    "use client";
    init_utils();
    labelVariants = cva(
      "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    );
    Label = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React3.createElement(
      LabelPrimitive.Root,
      {
        ref,
        className: cn(labelVariants(), className),
        ...props
      }
    ));
    Label.displayName = LabelPrimitive.Root.displayName;
  }
});

// registry/default/ui/animated-label-input.tsx
var animated_label_input_exports = {};
__export(animated_label_input_exports, {
  AnimatedInput: () => AnimatedInput,
  AnimatedLabel: () => AnimatedLabel,
  AnimatedLabelInput: () => AnimatedLabelInput
});
import * as React4 from "react";
var AnimatedLabel, AnimatedLabelInput, AnimatedInput;
var init_animated_label_input = __esm({
  "registry/default/ui/animated-label-input.tsx"() {
    "use strict";
    init_input();
    init_label();
    init_utils();
    AnimatedLabel = React4.forwardRef(({ className, ...props }, ref) => {
      return /* @__PURE__ */ React4.createElement(
        Label,
        {
          className: cn(
            "peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-1.5 z-10 origin-[0] -translate-y-4 scale-[0.85] transform bg-background px-2 text-sm text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-[0.85] peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 cursor-text",
            className
          ),
          ref,
          ...props
        }
      );
    });
    AnimatedLabel.displayName = "AnimatedLabel";
    AnimatedLabelInput = React4.forwardRef(({ id, label, ...props }, ref) => {
      const inputRef = React4.useRef(null);
      React4.useImperativeHandle(ref, () => inputRef.current);
      const handleLabelClick = () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      };
      return /* @__PURE__ */ React4.createElement("div", { className: "relative " }, /* @__PURE__ */ React4.createElement(AnimatedInput, { ref: inputRef, id, ...props }), /* @__PURE__ */ React4.createElement(AnimatedLabel, { htmlFor: id, onClick: handleLabelClick }, label));
    });
    AnimatedLabelInput.displayName = "AnimatedLabelInput";
    AnimatedInput = React4.forwardRef(
      ({ className, ...props }, ref) => {
        return /* @__PURE__ */ React4.createElement(
          Input,
          {
            placeholder: " ",
            className: cn("peer", className),
            ref,
            ...props
          }
        );
      }
    );
    AnimatedInput.displayName = "AnimatedInput";
  }
});

// registry/default/ui/animated-tooltip.tsx
var animated_tooltip_exports = {};
__export(animated_tooltip_exports, {
  AnimatedTooltip: () => AnimatedTooltip,
  AnimatedTooltipContent: () => AnimatedTooltipContent,
  AnimatedTooltipProvider: () => AnimatedTooltipProvider,
  AnimatedTooltipTrigger: () => AnimatedTooltipTrigger
});
import * as React5 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
var AnimatedTooltipProvider, AnimatedTooltip, AnimatedTooltipTrigger, springConfig, AnimatedTooltipContent;
var init_animated_tooltip = __esm({
  "registry/default/ui/animated-tooltip.tsx"() {
    "use strict";
    "use client";
    init_utils();
    AnimatedTooltipProvider = TooltipPrimitive.Provider;
    AnimatedTooltip = TooltipPrimitive.Root;
    AnimatedTooltipTrigger = TooltipPrimitive.Trigger;
    springConfig = { stiffness: 100, damping: 5 };
    AnimatedTooltipContent = React5.forwardRef(({ className, sideOffset = 4, ...props }, ref) => {
      const x = useMotionValue(0);
      const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
      );
      const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
      );
      const handleMouseMove = (event) => {
        const halfWidth = event.currentTarget.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth);
      };
      return /* @__PURE__ */ React5.createElement(TooltipPrimitive.Portal, null, /* @__PURE__ */ React5.createElement(TooltipPrimitive.Content, { ref, sideOffset, ...props }, /* @__PURE__ */ React5.createElement(
        motion.div,
        {
          onMouseMove: handleMouseMove,
          initial: { opacity: 0, y: 20, scale: 0.6 },
          animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 10
            }
          },
          exit: { opacity: 0, y: 20, scale: 0.6 },
          style: {
            translateX,
            rotate
          },
          className: cn(
            "flex flex-col items-center justify-center rounded-md z-50 shadow-xl bg-primary px-3 py-1.5 text-primary-foreground ",
            className
          )
        },
        props.children
      )));
    });
    AnimatedTooltipContent.displayName = TooltipPrimitive.Content.displayName;
  }
});

// components/ui/dialog.tsx
import * as React6 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
var DialogPortal, DialogOverlay, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription;
var init_dialog = __esm({
  "components/ui/dialog.tsx"() {
    "use strict";
    "use client";
    init_utils();
    DialogPortal = DialogPrimitive.Portal;
    DialogOverlay = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React6.createElement(
      DialogPrimitive.Overlay,
      {
        ref,
        className: cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=open]:animate-in",
          className
        ),
        ...props
      }
    ));
    DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
    DialogContent = React6.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React6.createElement(DialogPortal, null, /* @__PURE__ */ React6.createElement(DialogOverlay, null), /* @__PURE__ */ React6.createElement(
      DialogPrimitive.Content,
      {
        ref,
        className: cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:rounded-lg",
          className
        ),
        ...props
      },
      children,
      /* @__PURE__ */ React6.createElement(DialogPrimitive.Close, { className: "absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, /* @__PURE__ */ React6.createElement(X, { className: "h-4 w-4" }), /* @__PURE__ */ React6.createElement("span", { className: "sr-only" }, "Close"))
    )));
    DialogContent.displayName = DialogPrimitive.Content.displayName;
    DialogHeader = ({
      className,
      ...props
    }) => /* @__PURE__ */ React6.createElement(
      "div",
      {
        className: cn(
          "flex flex-col space-y-1.5 text-center sm:text-left",
          className
        ),
        ...props
      }
    );
    DialogHeader.displayName = "DialogHeader";
    DialogFooter = ({
      className,
      ...props
    }) => /* @__PURE__ */ React6.createElement(
      "div",
      {
        className: cn(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
          className
        ),
        ...props
      }
    );
    DialogFooter.displayName = "DialogFooter";
    DialogTitle = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React6.createElement(
      DialogPrimitive.Title,
      {
        ref,
        className: cn(
          "font-semibold text-lg leading-none tracking-tight",
          className
        ),
        ...props
      }
    ));
    DialogTitle.displayName = DialogPrimitive.Title.displayName;
    DialogDescription = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React6.createElement(
      DialogPrimitive.Description,
      {
        ref,
        className: cn("text-muted-foreground text-sm", className),
        ...props
      }
    ));
    DialogDescription.displayName = DialogPrimitive.Description.displayName;
  }
});

// components/ui/command.tsx
import * as React7 from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
var Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandSeparator, CommandItem, CommandLoading, CommandShortcut;
var init_command = __esm({
  "components/ui/command.tsx"() {
    "use strict";
    "use client";
    init_dialog();
    init_utils();
    Command = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React7.createElement(
      CommandPrimitive,
      {
        ref,
        className: cn(
          "flex size-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
          className
        ),
        ...props
      }
    ));
    Command.displayName = CommandPrimitive.displayName;
    CommandInput = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React7.createElement("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "" }, /* @__PURE__ */ React7.createElement(Search, { className: "mr-2 size-4 shrink-0 opacity-50" }), /* @__PURE__ */ React7.createElement(
      CommandPrimitive.Input,
      {
        ref,
        className: cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    )));
    CommandInput.displayName = CommandPrimitive.Input.displayName;
    CommandList = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React7.createElement(
      CommandPrimitive.List,
      {
        ref,
        className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
        ...props
      }
    ));
    CommandList.displayName = CommandPrimitive.List.displayName;
    CommandEmpty = React7.forwardRef((props, ref) => /* @__PURE__ */ React7.createElement(
      CommandPrimitive.Empty,
      {
        ref,
        className: "py-6 text-center text-sm",
        ...props
      }
    ));
    CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
    CommandGroup = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React7.createElement(
      CommandPrimitive.Group,
      {
        ref,
        className: cn(
          "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
          className
        ),
        ...props
      }
    ));
    CommandGroup.displayName = CommandPrimitive.Group.displayName;
    CommandSeparator = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React7.createElement(
      CommandPrimitive.Separator,
      {
        ref,
        className: cn("-mx-1 h-px bg-border", className),
        ...props
      }
    ));
    CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
    CommandItem = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React7.createElement(
      CommandPrimitive.Item,
      {
        ref,
        className: cn(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
          className
        ),
        ...props
      }
    ));
    CommandItem.displayName = CommandPrimitive.Item.displayName;
    CommandLoading = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React7.createElement(
      CommandPrimitive.Loading,
      {
        ref,
        className: cn("flex justify-center", className),
        ...props
      }
    ));
    CommandLoading.displayName = CommandPrimitive.Loading.displayName;
    CommandShortcut = ({
      className,
      ...props
    }) => {
      return /* @__PURE__ */ React7.createElement(
        "span",
        {
          className: cn(
            "ml-auto text-xs tracking-widest text-muted-foreground",
            className
          ),
          ...props
        }
      );
    };
    CommandShortcut.displayName = "CommandShortcut";
  }
});

// components/ui/skeleton.tsx
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-primary/10", className),
      ...props
    }
  );
}
var init_skeleton = __esm({
  "components/ui/skeleton.tsx"() {
    "use strict";
    init_utils();
  }
});

// registry/default/hooks/use-callback-ref.ts
var use_callback_ref_exports = {};
__export(use_callback_ref_exports, {
  useCallbackRef: () => useCallbackRef
});
import * as React8 from "react";
function useCallbackRef(callback) {
  const callbackRef = React8.useRef(callback);
  React8.useEffect(() => {
    callbackRef.current = callback;
  });
  return React8.useMemo(
    () => (...args) => callbackRef.current?.(...args),
    []
  );
}
var init_use_callback_ref = __esm({
  "registry/default/hooks/use-callback-ref.ts"() {
    "use strict";
  }
});

// registry/default/hooks/use-controllable-state.ts
var use_controllable_state_exports = {};
__export(use_controllable_state_exports, {
  useControllableState: () => useControllableState
});
import * as React9 from "react";
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  }
}) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);
  const setValue = React9.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value2 !== prop) handleChange(value2);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const uncontrolledState = React9.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = React9.useRef(value);
  const handleChange = useCallbackRef(onChange);
  React9.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);
  return uncontrolledState;
}
var init_use_controllable_state = __esm({
  "registry/default/hooks/use-controllable-state.ts"() {
    "use strict";
    init_use_callback_ref();
  }
});

// registry/default/ui/combobox-input.tsx
var combobox_input_exports = {};
__export(combobox_input_exports, {
  ComboboxInput: () => ComboboxInput
});
import * as React10 from "react";
import { Check } from "lucide-react";
import { usePopper } from "react-popper";
function ComboboxInput({
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
}) {
  const inputRef = React10.useRef(null);
  const [open, setOpen] = React10.useState(false);
  const [controlledInput, setControlledInput] = useControllableState({
    prop: input,
    onChange: onInputChange
  });
  const [currentOption, setCurrentOption] = useControllableState({
    defaultProp: defaultValue,
    prop: value,
    onChange: onValueChange
  });
  const [referenceElement, setReferenceElement] = React10.useState(null);
  const [popperElement, setPopperElement] = React10.useState(null);
  const { styles: styles2, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "offset", options: { offset: [alignOffset, sideOffset] } }
    ],
    placement
  });
  const onKeyDown = React10.useCallback(
    (event) => {
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
        setCurrentOption(void 0);
        inputRef.current?.focus();
      }
      if (event.key === "Enter" && inputElement.value !== "") {
        const selectedOption = options.find(
          (option) => option.label === inputElement.value
        );
        setCurrentOption(selectedOption);
      }
      if (!open) setOpen(true);
    },
    [currentOption, open, options, setControlledInput, setCurrentOption]
  );
  const onBlur = React10.useCallback(() => {
    setOpen(false);
    setControlledInput(currentOption?.label ?? "");
  }, [currentOption?.label, setControlledInput]);
  const onSelect = React10.useCallback(
    (selectedOption) => {
      setControlledInput(selectedOption.label);
      setCurrentOption(selectedOption);
      setOpen(false);
    },
    [setControlledInput, setCurrentOption]
  );
  return /* @__PURE__ */ React10.createElement(
    Command,
    {
      ref: setReferenceElement,
      className: "relative overflow-visible [&_[cmdk-input-wrapper]]:rounded-md [&_[cmdk-input-wrapper]]:border",
      onKeyDown,
      ...attributes.reference
    },
    /* @__PURE__ */ React10.createElement(
      CommandInput,
      {
        ref: inputRef,
        value: controlledInput,
        onValueChange: (value2) => {
          if (loading) return;
          setControlledInput(value2);
          if (value2 === "") {
            setCurrentOption(void 0);
          }
        },
        onBlur,
        onFocus: () => {
          if (immediate) {
            setOpen(true);
          }
        },
        placeholder,
        className: cn("border-b-0", className),
        ...props
      }
    ),
    /* @__PURE__ */ React10.createElement(
      CommandList,
      {
        ref: setPopperElement,
        "data-state": open ? "open" : "closed",
        style: styles2.popper,
        className: cn(
          "z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[popper-placement=bottom-end]:translate-x-1/2 data-[popper-placement=bottom-start]:-translate-x-1/2 data-[popper-placement=left-end]:translate-y-1/2 data-[popper-placement=left-start]:-translate-y-1/2 data-[popper-placement=right-end]:translate-y-1/2 data-[popper-placement=right-start]:-translate-y-1/2 data-[popper-placement=top-end]:translate-x-1/2 data-[popper-placement=top-start]:-translate-x-1/2 data-[popper-placement=bottom-end]:slide-in-from-top-2 data-[popper-placement=bottom-start]:slide-in-from-top-2 data-[popper-placement=bottom]:slide-in-from-top-2 data-[popper-placement=left-end]:slide-in-from-right-2 data-[popper-placement=left-start]:slide-in-from-right-2 data-[popper-placement=left]:slide-in-from-right-2 data-[popper-placement=right-end]:slide-in-from-left-2 data-[popper-placement=right-start]:slide-in-from-left-2 data-[popper-placement=right]:slide-in-from-left-2 data-[popper-placement=top-end]:slide-in-from-bottom-2 data-[popper-placement=top-start]:slide-in-from-bottom-2 data-[popper-placement=top]:slide-in-from-bottom-2"
        ),
        ...attributes.popper
      },
      loading ? /* @__PURE__ */ React10.createElement(CommandLoading, { className: "p-1" }, /* @__PURE__ */ React10.createElement(Skeleton, { className: "h-8 w-full" })) : null,
      options.length > 0 && !loading ? /* @__PURE__ */ React10.createElement(CommandGroup, null, options.map((option) => {
        const isSelected = currentOption?.value === option.value;
        return /* @__PURE__ */ React10.createElement(
          CommandItem,
          {
            key: option.value,
            value: option.label,
            onMouseDown: (event) => {
              event.preventDefault();
              event.stopPropagation();
            },
            onSelect: () => onSelect(option),
            className: cn("flex w-full items-center gap-2", {
              "pl-8": !isSelected
            })
          },
          isSelected ? /* @__PURE__ */ React10.createElement(Check, { className: "w-4", "aria-hidden": "true" }) : null,
          option.label
        );
      })) : null,
      loading ? null : /* @__PURE__ */ React10.createElement(CommandEmpty, null, emptyMessage)
    )
  );
}
var nonPrintableKeys;
var init_combobox_input = __esm({
  "registry/default/ui/combobox-input.tsx"() {
    "use strict";
    "use client";
    init_command();
    init_skeleton();
    init_utils();
    init_use_controllable_state();
    nonPrintableKeys = [
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
      "ArrowRight"
    ];
  }
});

// registry/default/ui/labeled-switch.tsx
var labeled_switch_exports = {};
__export(labeled_switch_exports, {
  LabeledSwitch: () => LabeledSwitch
});
import * as React11 from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { motion as motion2 } from "framer-motion";
var LabeledSwitch, LabeledSwitchButton;
var init_labeled_switch = __esm({
  "registry/default/ui/labeled-switch.tsx"() {
    "use strict";
    "use client";
    init_utils();
    LabeledSwitch = React11.forwardRef(
      ({ className, firstLabel, secondLabel, selected, onToggle, ...props }, ref) => {
        return /* @__PURE__ */ React11.createElement(
          SwitchPrimitives.Root,
          {
            className: cn(
              "relative flex w-fit cursor-pointer items-center rounded-full ring-2 ring-input transition-colors",
              className
            ),
            ref,
            checked: selected,
            onCheckedChange: onToggle
          },
          /* @__PURE__ */ React11.createElement(LabeledSwitchButton, { selected }, firstLabel),
          /* @__PURE__ */ React11.createElement(LabeledSwitchButton, { selected: !selected }, secondLabel),
          /* @__PURE__ */ React11.createElement(
            SwitchPrimitives.Thumb,
            {
              className: cn(
                "absolute inset-0 w-full z-0 flex data-[state=unchecked]:justify-start data-[state=checked]:justify-end"
              )
            },
            /* @__PURE__ */ React11.createElement(
              motion2.span,
              {
                layout: true,
                transition: { type: "spring", damping: 15, stiffness: 250 },
                className: "h-full w-1/2 rounded-full bg-muted"
              }
            )
          )
        );
      }
    );
    LabeledSwitch.displayName = "LabeledSwitch";
    LabeledSwitchButton = ({
      children,
      selected
    }) => /* @__PURE__ */ React11.createElement(
      "div",
      {
        className: cn(
          "relative z-10 flex w-full items-center justify-center gap-2 px-3 py-3 text-xs font-bold transition-colors md:py-1.5 md:pl-3 md:pr-3.5",
          selected ? "text-primary" : "text-muted-foreground"
        ),
        onMouseDown: (e) => e.preventDefault()
      },
      /* @__PURE__ */ React11.createElement("span", { className: "relative z-10" }, children)
    );
  }
});

// registry/default/ui/range-slider.tsx
var range_slider_exports = {};
__export(range_slider_exports, {
  RangeSlider: () => RangeSlider
});
import * as React12 from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
var RangeSlider;
var init_range_slider = __esm({
  "registry/default/ui/range-slider.tsx"() {
    "use strict";
    "use client";
    init_utils();
    RangeSlider = React12.forwardRef(
      ({
        className,
        label,
        labelPosition = "top",
        orientation = "horizontal",
        ...props
      }, ref) => {
        const initialValue = Array.isArray(props.value) ? props.value : [props.min, props.max];
        return /* @__PURE__ */ React12.createElement(
          SliderPrimitive.Root,
          {
            ref,
            orientation,
            className: cn(
              orientation === "horizontal" ? "relative flex w-full touch-none select-none items-center" : "relative flex h-full min-h-[200px] touch-none select-none flex-col items-center",
              className
            ),
            ...props
          },
          /* @__PURE__ */ React12.createElement(
            SliderPrimitive.Track,
            {
              className: cn(
                orientation === "horizontal" ? "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary" : "relative w-2 h-full grow overflow-hidden rounded-full bg-secondary"
              )
            },
            /* @__PURE__ */ React12.createElement(
              SliderPrimitive.Range,
              {
                className: cn(
                  orientation === "horizontal" ? "absolute h-full bg-primary" : "absolute w-full bg-primary"
                )
              }
            )
          ),
          initialValue.map((value, index) => /* @__PURE__ */ React12.createElement(React12.Fragment, { key: index }, /* @__PURE__ */ React12.createElement(
            SliderPrimitive.Thumb,
            {
              className: cn(
                "relative block border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                orientation === "horizontal" ? "h-5 w-2 rounded-sm" : "h-2 w-5 rounded-sm"
              )
            },
            label && /* @__PURE__ */ React12.createElement(
              "span",
              {
                className: cn(
                  "absolute flex text-xs justify-center font-medium",
                  orientation === "horizontal" ? labelPosition === "top" ? "-left-2 -top-5" : "-left-2 top-5" : labelPosition === "top" ? "-translate-x-full -translate-y-1/2 -left-2" : "translate-x-full -translate-y-1/2"
                )
              },
              label(value)
            )
          )))
        );
      }
    );
    RangeSlider.displayName = "RangeSlider";
  }
});

// registry/default/ui/responsive-textarea.tsx
var responsive_textarea_exports = {};
__export(responsive_textarea_exports, {
  ResponsiveTextarea: () => ResponsiveTextarea
});
import * as React13 from "react";
var ResponsiveTextarea;
var init_responsive_textarea = __esm({
  "registry/default/ui/responsive-textarea.tsx"() {
    "use strict";
    "use client";
    init_utils();
    ResponsiveTextarea = React13.forwardRef(({ className, ...props }, ref) => {
      const textAreaRef = React13.useRef(null);
      const [val, setVal] = React13.useState("");
      React13.useEffect(() => {
        if (textAreaRef.current) {
          textAreaRef.current.style.height = "auto";
          textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
        }
      }, [val]);
      return /* @__PURE__ */ React13.createElement(
        "textarea",
        {
          className: cn(
            "placeholder:text-muted-foreground flex min-h-[80px] w-full resize-none overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          ),
          ref: textAreaRef,
          onChange: (e) => setVal(e.target.value),
          ...props
        }
      );
    });
    ResponsiveTextarea.displayName = "ResponsiveTextarea";
  }
});

// registry/default/ui/star-rating.tsx
var star_rating_exports = {};
__export(star_rating_exports, {
  default: () => star_rating_default
});
import * as React14 from "react";
import { Star } from "lucide-react";
var nextId, generateStarIds, StarIcon, StarRating, star_rating_default;
var init_star_rating = __esm({
  "registry/default/ui/star-rating.tsx"() {
    "use strict";
    "use client";
    init_utils();
    nextId = 0;
    generateStarIds = (count2) => Array.from({ length: count2 }, () => `star-${nextId++}`);
    StarIcon = React14.memo(
      ({
        size,
        index,
        isInteractive,
        onClick,
        onMouseMove,
        style
      }) => /* @__PURE__ */ React14.createElement(
        Star,
        {
          key: index,
          size,
          fill: style.fill,
          color: style.color,
          onClick,
          onMouseMove,
          className: cn(
            "transition-colors duration-200",
            isInteractive && "cursor-pointer hover:scale-110"
          ),
          style
        }
      )
    );
    StarIcon.displayName = "StarIcon";
    StarRating = ({
      className,
      color = "#e4c616",
      size = 24,
      maxStars = 5,
      onChange,
      readOnly = false,
      value
    }) => {
      const [hoverRating, setHoverRating] = React14.useState(null);
      const [starIds] = React14.useState(() => generateStarIds(maxStars));
      const handleStarClick = React14.useCallback(
        (index, event) => {
          if (readOnly || !onChange) return;
          const newRating = index + 1;
          onChange(newRating);
        },
        [readOnly, onChange]
      );
      const handleStarHover = React14.useCallback(
        (index, event) => {
          if (!readOnly) {
            setHoverRating(index + 1);
          }
        },
        [readOnly]
      );
      const handleMouseLeave = React14.useCallback(() => {
        if (!readOnly) {
          setHoverRating(null);
        }
      }, [readOnly]);
      const getStarStyle = React14.useCallback(
        (index) => {
          const ratingToUse = !readOnly && hoverRating !== null ? hoverRating : value;
          const difference = ratingToUse - index;
          if (difference <= 0) return { color: "gray", fill: "transparent" };
          if (difference >= 1) return { color, fill: color };
          return {
            color,
            fill: `url(#${starIds[index]})`
          };
        },
        [readOnly, hoverRating, value, color, starIds]
      );
      const renderGradientDefs = () => {
        if (!readOnly && hoverRating !== null) return null;
        const partialStarIndex = Math.floor(value);
        const partialFill = value % 1 * 100;
        if (partialFill > 0) {
          return /* @__PURE__ */ React14.createElement(
            "linearGradient",
            {
              id: starIds[partialStarIndex],
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "0%"
            },
            /* @__PURE__ */ React14.createElement("stop", { offset: `${partialFill}%`, stopColor: color }),
            /* @__PURE__ */ React14.createElement("stop", { offset: `${partialFill}%`, stopColor: "transparent" })
          );
        }
        return null;
      };
      const stars = React14.useMemo(() => {
        return Array.from({ length: maxStars }).map((_, index) => {
          const style = getStarStyle(index);
          return /* @__PURE__ */ React14.createElement(
            StarIcon,
            {
              key: index,
              index,
              style,
              size,
              onClick: (e) => handleStarClick(index, e),
              onMouseMove: (e) => handleStarHover(index, e),
              isInteractive: !readOnly
            }
          );
        });
      }, [
        maxStars,
        getStarStyle,
        size,
        handleStarClick,
        handleStarHover,
        readOnly
      ]);
      return /* @__PURE__ */ React14.createElement(
        "div",
        {
          className: cn("relative flex items-center gap-x-0.5", className),
          onMouseLeave: handleMouseLeave
        },
        /* @__PURE__ */ React14.createElement("svg", { width: "0", height: "0", style: { position: "absolute" } }, /* @__PURE__ */ React14.createElement("defs", null, renderGradientDefs())),
        stars
      );
    };
    star_rating_default = StarRating;
  }
});

// components/ui/button.tsx
import * as React15 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
var buttonVariants, Button;
var init_button = __esm({
  "components/ui/button.tsx"() {
    "use strict";
    init_utils();
    buttonVariants = cva2(
      "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
          },
          size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
          }
        },
        defaultVariants: {
          variant: "default",
          size: "default"
        }
      }
    );
    Button = React15.forwardRef(
      ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return /* @__PURE__ */ React15.createElement(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
      }
    );
    Button.displayName = "Button";
  }
});

// registry/default/ui/stepper.tsx
var stepper_exports = {};
__export(stepper_exports, {
  defineStepper: () => defineStepper2
});
import * as React16 from "react";
import * as Stepperize from "@stepperize/react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva3 } from "class-variance-authority";
function scrollIntoStepperPanel(node, tracking) {
  if (tracking) {
    node?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
var StepperContext, useStepperProvider, defineStepper2, StepperTitle, StepperDescription, StepperSeparator, CircleStepIndicator, listVariants, classForSeparator, useStepChildren, extractChildren, onStepKeyDown, getStepState;
var init_stepper = __esm({
  "registry/default/ui/stepper.tsx"() {
    "use strict";
    init_button();
    init_utils();
    StepperContext = React16.createContext(null);
    useStepperProvider = () => {
      const context = React16.useContext(StepperContext);
      if (!context) {
        throw new Error("useStepper must be used within a StepperProvider.");
      }
      return context;
    };
    defineStepper2 = (...steps) => {
      const { Scoped, useStepper: useStepper2, ...rest } = Stepperize.defineStepper(...steps);
      const StepperContainer = ({
        children,
        className,
        ...props
      }) => {
        const methods = useStepper2();
        return /* @__PURE__ */ React16.createElement("div", { className: cn("w-full", className), ...props }, typeof children === "function" ? children({ methods }) : children);
      };
      return {
        ...rest,
        useStepper: useStepper2,
        StepperProvider: ({
          variant = "horizontal",
          labelOrientation = "horizontal",
          tracking = false,
          children,
          className,
          ...props
        }) => {
          return /* @__PURE__ */ React16.createElement(
            StepperContext.Provider,
            {
              value: { variant, labelOrientation, tracking }
            },
            /* @__PURE__ */ React16.createElement(
              Scoped,
              {
                initialStep: props.initialStep,
                initialMetadata: props.initialMetadata
              },
              /* @__PURE__ */ React16.createElement(StepperContainer, { className, ...props }, children)
            )
          );
        },
        StepperNavigation: ({
          children,
          className,
          "aria-label": ariaLabel = "Stepper Navigation",
          ...props
        }) => {
          const { variant } = useStepperProvider();
          return /* @__PURE__ */ React16.createElement(
            "nav",
            {
              "aria-label": ariaLabel,
              role: "tablist",
              className: cn("stepper-navigation", className),
              ...props
            },
            /* @__PURE__ */ React16.createElement("ol", { className: listVariants({ variant }) }, children)
          );
        },
        StepperStep: ({ children, className, icon, ...props }) => {
          const { variant, labelOrientation } = useStepperProvider();
          const { current } = useStepper2();
          const utils = rest.utils;
          const steps2 = rest.steps;
          const stepIndex = utils.getIndex(props.of);
          const step = steps2[stepIndex];
          const currentIndex = utils.getIndex(current.id);
          const isLast = utils.getLast().id === props.of;
          const isActive = current.id === props.of;
          const dataState = getStepState(currentIndex, stepIndex);
          const childMap = useStepChildren(children);
          const title = childMap.get("title");
          const description = childMap.get("description");
          const panel = childMap.get("panel");
          if (variant === "circle") {
            return /* @__PURE__ */ React16.createElement(
              "li",
              {
                className: cn(
                  "flex shrink-0 items-center gap-4 rounded-md transition-colors",
                  className
                )
              },
              /* @__PURE__ */ React16.createElement(
                CircleStepIndicator,
                {
                  currentStep: stepIndex + 1,
                  totalSteps: steps2.length
                }
              ),
              /* @__PURE__ */ React16.createElement("div", { className: "flex flex-col items-start gap-1" }, title, description)
            );
          }
          return /* @__PURE__ */ React16.createElement(React16.Fragment, null, /* @__PURE__ */ React16.createElement(
            "li",
            {
              className: cn([
                "group peer relative flex items-center gap-2",
                "data-[variant=vertical]:flex-row",
                "data-[label-orientation=vertical]:w-full",
                "data-[label-orientation=vertical]:flex-col",
                "data-[label-orientation=vertical]:justify-center"
              ]),
              "data-variant": variant,
              "data-label-orientation": labelOrientation,
              "data-state": dataState,
              "data-disabled": props.disabled
            },
            /* @__PURE__ */ React16.createElement(
              Button,
              {
                id: `step-${step.id}`,
                type: "button",
                role: "tab",
                tabIndex: dataState !== "inactive" ? 0 : -1,
                className: "rounded-full",
                variant: dataState !== "inactive" ? "default" : "secondary",
                size: "icon",
                "aria-controls": `step-panel-${props.of}`,
                "aria-current": isActive ? "step" : void 0,
                "aria-posinset": stepIndex + 1,
                "aria-setsize": steps2.length,
                "aria-selected": isActive,
                onKeyDown: (e) => onStepKeyDown(
                  e,
                  utils.getNext(props.of),
                  utils.getPrev(props.of)
                ),
                ...props
              },
              icon ?? stepIndex + 1
            ),
            variant === "horizontal" && labelOrientation === "vertical" && /* @__PURE__ */ React16.createElement(
              StepperSeparator,
              {
                orientation: "horizontal",
                labelOrientation,
                isLast,
                state: dataState,
                disabled: props.disabled
              }
            ),
            /* @__PURE__ */ React16.createElement("div", { className: "flex flex-col items-start" }, title, description)
          ), variant === "horizontal" && labelOrientation === "horizontal" && /* @__PURE__ */ React16.createElement(
            StepperSeparator,
            {
              orientation: "horizontal",
              isLast,
              state: dataState,
              disabled: props.disabled
            }
          ), variant === "vertical" && /* @__PURE__ */ React16.createElement("div", { className: "flex gap-4" }, !isLast && /* @__PURE__ */ React16.createElement("div", { className: "flex justify-center ps-5" }, /* @__PURE__ */ React16.createElement(
            StepperSeparator,
            {
              orientation: "vertical",
              isLast,
              state: dataState,
              disabled: props.disabled
            }
          )), /* @__PURE__ */ React16.createElement("div", { className: "my-3 flex-1 ps-4" }, panel)));
        },
        StepperTitle,
        StepperDescription,
        StepperPanel: ({ children, className, asChild, ...props }) => {
          const Comp = asChild ? Slot2 : "div";
          const { tracking } = useStepperProvider();
          return /* @__PURE__ */ React16.createElement(
            Comp,
            {
              className,
              ref: (node) => scrollIntoStepperPanel(node, tracking),
              ...props
            },
            children
          );
        },
        StepperControls: ({ children, className, asChild, ...props }) => {
          const Comp = asChild ? Slot2 : "div";
          return /* @__PURE__ */ React16.createElement(Comp, { className: cn(" flex justify-end gap-4", className), ...props }, children);
        }
      };
    };
    StepperTitle = ({
      children,
      className,
      asChild,
      ...props
    }) => {
      const Comp = asChild ? Slot2 : "h4";
      return /* @__PURE__ */ React16.createElement(Comp, { className: cn("text-base font-medium m-0", className), ...props }, children);
    };
    StepperDescription = ({
      children,
      className,
      asChild,
      ...props
    }) => {
      const Comp = asChild ? Slot2 : "p";
      return /* @__PURE__ */ React16.createElement(Comp, { className: cn("text-sm text-muted-foreground", className), ...props }, children);
    };
    StepperSeparator = ({
      orientation,
      isLast,
      labelOrientation,
      state,
      disabled
    }) => {
      if (isLast) {
        return null;
      }
      return /* @__PURE__ */ React16.createElement(
        "div",
        {
          "data-orientation": orientation,
          "data-state": state,
          "data-disabled": disabled,
          role: "separator",
          tabIndex: -1,
          className: classForSeparator({ orientation, labelOrientation })
        }
      );
    };
    CircleStepIndicator = ({
      currentStep,
      totalSteps,
      size = 80,
      strokeWidth = 6
    }) => {
      const radius = (size - strokeWidth) / 2;
      const circumference = radius * 2 * Math.PI;
      const fillPercentage = currentStep / totalSteps * 100;
      const dashOffset = circumference - circumference * fillPercentage / 100;
      return /* @__PURE__ */ React16.createElement(
        "div",
        {
          role: "progressbar",
          "aria-valuenow": currentStep,
          "aria-valuemin": 1,
          "aria-valuemax": totalSteps,
          tabIndex: -1,
          className: "relative inline-flex items-center justify-center"
        },
        /* @__PURE__ */ React16.createElement("svg", { width: size, height: size }, /* @__PURE__ */ React16.createElement("title", null, "Step Indicator"), /* @__PURE__ */ React16.createElement(
          "circle",
          {
            cx: size / 2,
            cy: size / 2,
            r: radius,
            fill: "none",
            stroke: "currentColor",
            strokeWidth,
            className: "text-muted-foreground"
          }
        ), /* @__PURE__ */ React16.createElement(
          "circle",
          {
            cx: size / 2,
            cy: size / 2,
            r: radius,
            fill: "none",
            stroke: "currentColor",
            strokeWidth,
            strokeDasharray: circumference,
            strokeDashoffset: dashOffset,
            className: "text-primary transition-all duration-300 ease-in-out",
            transform: `rotate(-90 ${size / 2} ${size / 2})`
          }
        )),
        /* @__PURE__ */ React16.createElement("div", { className: "absolute inset-0 flex items-center justify-center" }, /* @__PURE__ */ React16.createElement("span", { className: "text-sm font-medium", "aria-live": "polite" }, currentStep, " of ", totalSteps))
      );
    };
    listVariants = cva3(" flex gap-2", {
      variants: {
        variant: {
          horizontal: "flex-row items-center justify-between",
          vertical: "flex-col",
          circle: "flex-row items-center justify-between"
        }
      }
    });
    classForSeparator = cva3(
      [
        "bg-muted",
        "data-[state=completed]:bg-primary data-[disabled]:opacity-50",
        "transition-all duration-300 ease-in-out"
      ],
      {
        variants: {
          orientation: {
            horizontal: "h-0.5 flex-1",
            vertical: "h-full w-0.5"
          },
          labelOrientation: {
            vertical: "absolute left-[calc(50%+30px)] right-[calc(-50%+20px)] top-5 block shrink-0"
          }
        }
      }
    );
    useStepChildren = (children) => {
      return React16.useMemo(() => extractChildren(children), [children]);
    };
    extractChildren = (children) => {
      const childrenArray = React16.Children.toArray(children);
      const map = /* @__PURE__ */ new Map();
      for (const child of childrenArray) {
        if (React16.isValidElement(child)) {
          if (child.type === StepperTitle) {
            map.set("title", child);
          } else if (child.type === StepperDescription) {
            map.set("description", child);
          } else {
            map.set("panel", child);
          }
        }
      }
      return map;
    };
    onStepKeyDown = (e, nextStep, prevStep) => {
      const { key } = e;
      const directions = {
        next: ["ArrowRight", "ArrowDown"],
        prev: ["ArrowLeft", "ArrowUp"]
      };
      if (directions.next.includes(key) || directions.prev.includes(key)) {
        const direction = directions.next.includes(key) ? "next" : "prev";
        const step = direction === "next" ? nextStep : prevStep;
        if (!step) {
          return;
        }
        const stepElement = document.getElementById(`step-${step.id}`);
        if (!stepElement) {
          return;
        }
        const isActive = stepElement.parentElement?.getAttribute("data-state") !== "inactive";
        if (isActive || direction === "prev") {
          stepElement.focus();
        }
      }
    };
    getStepState = (currentIndex, stepIndex) => {
      if (currentIndex === stepIndex) {
        return "active";
      }
      if (currentIndex > stepIndex) {
        return "completed";
      }
      return "inactive";
    };
  }
});

// components/ui/popover.tsx
import * as React17 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
var Popover, PopoverTrigger, PopoverContent;
var init_popover = __esm({
  "components/ui/popover.tsx"() {
    "use strict";
    "use client";
    init_utils();
    Popover = PopoverPrimitive.Root;
    PopoverTrigger = PopoverPrimitive.Trigger;
    PopoverContent = React17.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ React17.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ React17.createElement(
      PopoverPrimitive.Content,
      {
        ref,
        align,
        sideOffset,
        className: cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
          className
        ),
        ...props
      }
    )));
    PopoverContent.displayName = PopoverPrimitive.Content.displayName;
  }
});

// components/ui/scroll-area.tsx
import * as React18 from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
var ScrollArea, ScrollBar;
var init_scroll_area = __esm({
  "components/ui/scroll-area.tsx"() {
    "use strict";
    "use client";
    init_utils();
    ScrollArea = React18.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React18.createElement(
      ScrollAreaPrimitive.Root,
      {
        ref,
        className: cn("relative overflow-hidden", className),
        ...props
      },
      /* @__PURE__ */ React18.createElement(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]" }, children),
      /* @__PURE__ */ React18.createElement(ScrollBar, null),
      /* @__PURE__ */ React18.createElement(ScrollAreaPrimitive.Corner, null)
    ));
    ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
    ScrollBar = React18.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ React18.createElement(
      ScrollAreaPrimitive.ScrollAreaScrollbar,
      {
        ref,
        orientation,
        className: cn(
          "flex touch-none select-none transition-colors",
          orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
          orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
          className
        ),
        ...props
      },
      /* @__PURE__ */ React18.createElement(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
    ));
    ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
  }
});

// registry/default/ui/tel-input.tsx
var tel_input_exports = {};
__export(tel_input_exports, {
  TelInput: () => TelInput
});
import * as React19 from "react";
import * as PhoneNumberInput from "react-phone-number-input";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import flags from "react-phone-number-input/flags";
var FlagComponent, CountrySelectOption, InputComponent, CountrySelect, TelInput;
var init_tel_input = __esm({
  "registry/default/ui/tel-input.tsx"() {
    "use strict";
    init_button();
    init_command();
    init_input();
    init_popover();
    init_scroll_area();
    init_utils();
    FlagComponent = ({
      country,
      countryName
    }) => {
      const Flag = flags[country];
      return /* @__PURE__ */ React19.createElement("span", { className: "flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full" }, Flag && /* @__PURE__ */ React19.createElement(Flag, { title: countryName }));
    };
    CountrySelectOption = ({
      country,
      countryName,
      selectedCountry,
      onChange
    }) => {
      return /* @__PURE__ */ React19.createElement(
        CommandItem,
        {
          className: "gap-2 cursor-pointer",
          onSelect: () => onChange(country)
        },
        /* @__PURE__ */ React19.createElement(FlagComponent, { country, countryName }),
        /* @__PURE__ */ React19.createElement("span", { className: "flex-1 text-sm" }, countryName),
        /* @__PURE__ */ React19.createElement("span", { className: "text-sm text-foreground/50" }, `+${PhoneNumberInput.getCountryCallingCode(country)}`),
        /* @__PURE__ */ React19.createElement(
          CheckIcon,
          {
            className: `ml-auto size-4 ${country === selectedCountry ? "opacity-100" : "opacity-0"}`
          }
        )
      );
    };
    InputComponent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React19.createElement(
      Input,
      {
        className: cn("rounded-e-lg rounded-s-none", className),
        ...props,
        ref
      }
    ));
    InputComponent.displayName = "InputComponent";
    CountrySelect = ({
      disabled,
      value: selectedCountry,
      options: countryList,
      onChange
    }) => {
      return /* @__PURE__ */ React19.createElement(Popover, null, /* @__PURE__ */ React19.createElement(PopoverTrigger, { asChild: true }, /* @__PURE__ */ React19.createElement(
        Button,
        {
          type: "button",
          variant: "outline",
          className: "flex gap-1 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10",
          disabled
        },
        /* @__PURE__ */ React19.createElement(
          FlagComponent,
          {
            country: selectedCountry,
            countryName: selectedCountry
          }
        ),
        /* @__PURE__ */ React19.createElement(
          ChevronsUpDown,
          {
            className: cn(
              "-mr-2 size-4 opacity-50",
              disabled ? "hidden" : "opacity-100"
            )
          }
        )
      )), /* @__PURE__ */ React19.createElement(PopoverContent, { className: "w-[300px] p-0" }, /* @__PURE__ */ React19.createElement(Command, null, /* @__PURE__ */ React19.createElement(CommandInput, { placeholder: "Search country..." }), /* @__PURE__ */ React19.createElement(CommandList, null, /* @__PURE__ */ React19.createElement(ScrollArea, { className: "h-72" }, /* @__PURE__ */ React19.createElement(CommandEmpty, null, "No country found."), /* @__PURE__ */ React19.createElement(CommandGroup, null, countryList.map(
        ({ value, label }) => value ? /* @__PURE__ */ React19.createElement(
          CountrySelectOption,
          {
            key: value,
            country: value,
            countryName: label,
            selectedCountry,
            onChange
          }
        ) : null
      )))))));
    };
    TelInput = React19.forwardRef(({ className, onChange, ...props }, ref) => {
      return /* @__PURE__ */ React19.createElement(
        PhoneNumberInput.default,
        {
          ref,
          className: cn("flex", className),
          flagComponent: FlagComponent,
          countrySelectComponent: CountrySelect,
          inputComponent: InputComponent,
          smartCaret: false,
          onChange: (value) => onChange?.(value || ""),
          ...props
        }
      );
    });
    TelInput.displayName = "TelInput";
  }
});

// registry/default/example/animated-label-input-default.tsx
var animated_label_input_default_exports = {};
__export(animated_label_input_default_exports, {
  default: () => AnimatedLabelInputDefault
});
import * as React20 from "react";
function AnimatedLabelInputDefault() {
  return /* @__PURE__ */ React20.createElement(AnimatedLabelInput, { label: "Animated Label" });
}
var init_animated_label_input_default = __esm({
  "registry/default/example/animated-label-input-default.tsx"() {
    "use strict";
    "use client";
    init_animated_label_input();
  }
});

// components/ui/form.tsx
import * as React21 from "react";
import { Slot as Slot3 } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext
} from "react-hook-form";
var Form, FormFieldContext, FormField, useFormField, FormItemContext, FormItem, FormLabel, FormControl, FormDescription, FormMessage;
var init_form = __esm({
  "components/ui/form.tsx"() {
    "use strict";
    "use client";
    init_label();
    init_utils();
    Form = FormProvider;
    FormFieldContext = React21.createContext(
      {}
    );
    FormField = ({
      ...props
    }) => {
      return /* @__PURE__ */ React21.createElement(FormFieldContext.Provider, { value: { name: props.name } }, /* @__PURE__ */ React21.createElement(Controller, { ...props }));
    };
    useFormField = () => {
      const fieldContext = React21.useContext(FormFieldContext);
      const itemContext = React21.useContext(FormItemContext);
      const { getFieldState, formState } = useFormContext();
      const fieldState = getFieldState(fieldContext.name, formState);
      if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
      }
      const { id } = itemContext;
      return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
      };
    };
    FormItemContext = React21.createContext(
      {}
    );
    FormItem = React21.forwardRef(({ className, ...props }, ref) => {
      const id = React21.useId();
      return /* @__PURE__ */ React21.createElement(FormItemContext.Provider, { value: { id } }, /* @__PURE__ */ React21.createElement("div", { ref, className: cn("space-y-2", className), ...props }));
    });
    FormItem.displayName = "FormItem";
    FormLabel = React21.forwardRef(({ className, ...props }, ref) => {
      const { error, formItemId } = useFormField();
      return /* @__PURE__ */ React21.createElement(
        Label,
        {
          ref,
          className: cn(error && "text-destructive", className),
          htmlFor: formItemId,
          ...props
        }
      );
    });
    FormLabel.displayName = "FormLabel";
    FormControl = React21.forwardRef(({ ...props }, ref) => {
      const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
      return /* @__PURE__ */ React21.createElement(
        Slot3,
        {
          ref,
          id: formItemId,
          "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
          "aria-invalid": !!error,
          ...props
        }
      );
    });
    FormControl.displayName = "FormControl";
    FormDescription = React21.forwardRef(({ className, ...props }, ref) => {
      const { formDescriptionId } = useFormField();
      return /* @__PURE__ */ React21.createElement(
        "p",
        {
          ref,
          id: formDescriptionId,
          className: cn("text-[0.8rem] text-muted-foreground", className),
          ...props
        }
      );
    });
    FormDescription.displayName = "FormDescription";
    FormMessage = React21.forwardRef(({ className, children, ...props }, ref) => {
      const { error, formMessageId } = useFormField();
      const body = error ? String(error?.message) : children;
      if (!body) {
        return null;
      }
      return /* @__PURE__ */ React21.createElement(
        "p",
        {
          ref,
          id: formMessageId,
          className: cn("font-medium text-[0.8rem] text-destructive", className),
          ...props
        },
        body
      );
    });
    FormMessage.displayName = "FormMessage";
  }
});

// hooks/use-toast.tsx
import * as React22 from "react";
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React22.useState(memoryState);
  React22.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
var TOAST_LIMIT, TOAST_REMOVE_DELAY, count, toastTimeouts, addToRemoveQueue, reducer, listeners, memoryState;
var init_use_toast = __esm({
  "hooks/use-toast.tsx"() {
    "use strict";
    "use client";
    TOAST_LIMIT = 1;
    TOAST_REMOVE_DELAY = 1e6;
    count = 0;
    toastTimeouts = /* @__PURE__ */ new Map();
    addToRemoveQueue = (toastId) => {
      if (toastTimeouts.has(toastId)) {
        return;
      }
      const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId);
        dispatch({
          type: "REMOVE_TOAST",
          toastId
        });
      }, TOAST_REMOVE_DELAY);
      toastTimeouts.set(toastId, timeout);
    };
    reducer = (state, action) => {
      switch (action.type) {
        case "ADD_TOAST":
          return {
            ...state,
            toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
          };
        case "UPDATE_TOAST":
          return {
            ...state,
            toasts: state.toasts.map(
              (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
            )
          };
        case "DISMISS_TOAST": {
          const { toastId } = action;
          if (toastId) {
            addToRemoveQueue(toastId);
          } else {
            state.toasts.forEach((toast2) => {
              addToRemoveQueue(toast2.id);
            });
          }
          return {
            ...state,
            toasts: state.toasts.map(
              (t) => t.id === toastId || toastId === void 0 ? {
                ...t,
                open: false
              } : t
            )
          };
        }
        case "REMOVE_TOAST":
          if (action.toastId === void 0) {
            return {
              ...state,
              toasts: []
            };
          }
          return {
            ...state,
            toasts: state.toasts.filter((t) => t.id !== action.toastId)
          };
      }
    };
    listeners = [];
    memoryState = { toasts: [] };
  }
});

// registry/default/example/animated-label-input-with-form.tsx
var animated_label_input_with_form_exports = {};
__export(animated_label_input_with_form_exports, {
  default: () => AnimatedLabelInputWithForm
});
import * as React23 from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
function AnimatedLabelInputWithForm() {
  const { toast: toast2 } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  function onSubmit(data) {
    toast2({
      title: "Form submitted!",
      description: `Email: ${data.email}`
    });
  }
  return /* @__PURE__ */ React23.createElement(Form, { ...form }, /* @__PURE__ */ React23.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "w-full space-y-4" }, /* @__PURE__ */ React23.createElement(
    FormField,
    {
      control: form.control,
      name: "email",
      render: ({ field }) => /* @__PURE__ */ React23.createElement(FormItem, null, /* @__PURE__ */ React23.createElement(FormControl, null, /* @__PURE__ */ React23.createElement(AnimatedLabelInput, { label: "Email", ...field })), /* @__PURE__ */ React23.createElement(FormMessage, null))
    }
  ), /* @__PURE__ */ React23.createElement(
    FormField,
    {
      control: form.control,
      name: "password",
      render: ({ field }) => /* @__PURE__ */ React23.createElement(FormItem, null, /* @__PURE__ */ React23.createElement(FormControl, null, /* @__PURE__ */ React23.createElement(
        AnimatedLabelInput,
        {
          label: "Password",
          type: "password",
          ...field
        }
      )), /* @__PURE__ */ React23.createElement(FormMessage, null))
    }
  ), /* @__PURE__ */ React23.createElement(Button, { className: "w-full", type: "submit" }, "Submit", /* @__PURE__ */ React23.createElement(Send, null))));
}
var formSchema;
var init_animated_label_input_with_form = __esm({
  "registry/default/example/animated-label-input-with-form.tsx"() {
    "use strict";
    "use client";
    init_button();
    init_form();
    init_use_toast();
    init_animated_label_input();
    formSchema = z.object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(8, "Password must be at least 8 characters")
    });
  }
});

// components/ui/avatar.tsx
import * as React24 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
var Avatar, AvatarImage, AvatarFallback;
var init_avatar = __esm({
  "components/ui/avatar.tsx"() {
    "use strict";
    "use client";
    init_utils();
    Avatar = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React24.createElement(
      AvatarPrimitive.Root,
      {
        ref,
        className: cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
          className
        ),
        ...props
      }
    ));
    Avatar.displayName = AvatarPrimitive.Root.displayName;
    AvatarImage = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React24.createElement(
      AvatarPrimitive.Image,
      {
        ref,
        className: cn("aspect-square h-full w-full not-prose", className),
        ...props
      }
    ));
    AvatarImage.displayName = AvatarPrimitive.Image.displayName;
    AvatarFallback = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React24.createElement(
      AvatarPrimitive.Fallback,
      {
        ref,
        className: cn(
          "flex h-full w-full items-center justify-center rounded-full bg-muted",
          className
        ),
        ...props
      }
    ));
    AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
  }
});

// registry/default/example/animated-tooltip-default.tsx
var animated_tooltip_default_exports = {};
__export(animated_tooltip_default_exports, {
  default: () => AnimatedTooltipDefault
});
import * as React25 from "react";
function AnimatedTooltipDefault() {
  return /* @__PURE__ */ React25.createElement(AnimatedTooltipProvider, null, /* @__PURE__ */ React25.createElement(AnimatedTooltip, null, /* @__PURE__ */ React25.createElement(AnimatedTooltipTrigger, null, /* @__PURE__ */ React25.createElement(Avatar, { className: "ring-2 ring-green-500 ring-offset-[3px] ring-offset-background" }, /* @__PURE__ */ React25.createElement(
    AvatarImage,
    {
      src: "https://github.com/phamhuulocforwork.png",
      alt: "@phamhuulocforwork"
    }
  ), /* @__PURE__ */ React25.createElement(AvatarFallback, null, "HL"))), /* @__PURE__ */ React25.createElement(AnimatedTooltipContent, { className: "bg-black" }, /* @__PURE__ */ React25.createElement("span", { className: "font-bold text-white relative z-30 text-base" }, "Pham Huu Loc"), /* @__PURE__ */ React25.createElement("span", { className: "text-white text-xs" }, "Web Developer"))));
}
var init_animated_tooltip_default = __esm({
  "registry/default/example/animated-tooltip-default.tsx"() {
    "use strict";
    "use client";
    init_avatar();
    init_animated_tooltip();
  }
});

// registry/default/example/combobox-input-default.tsx
var combobox_input_default_exports = {};
__export(combobox_input_default_exports, {
  default: () => ComboboxInputDefault,
  mockData: () => mockData
});
import React26 from "react";
function ComboboxInputDefault() {
  return /* @__PURE__ */ React26.createElement("div", null, /* @__PURE__ */ React26.createElement(
    ComboboxInput,
    {
      placeholder: "Search...",
      options: mockData.map((data) => ({
        label: data.name,
        value: data.id
      }))
    }
  ));
}
var mockData;
var init_combobox_input_default = __esm({
  "registry/default/example/combobox-input-default.tsx"() {
    "use strict";
    init_combobox_input();
    mockData = [
      {
        id: crypto.randomUUID(),
        name: "Data 1"
      },
      {
        id: crypto.randomUUID(),
        name: "Data 2"
      },
      {
        id: crypto.randomUUID(),
        name: "Data 3"
      }
    ];
  }
});

// registry/default/example/labeled-switch-default.tsx
var labeled_switch_default_exports = {};
__export(labeled_switch_default_exports, {
  default: () => LabeledSwitchDefault
});
import * as React27 from "react";
function LabeledSwitchDefault() {
  const [selected, setSelected] = React27.useState(false);
  return /* @__PURE__ */ React27.createElement(
    LabeledSwitch,
    {
      firstLabel: "False",
      secondLabel: "True",
      selected,
      onToggle: setSelected
    }
  );
}
var init_labeled_switch_default = __esm({
  "registry/default/example/labeled-switch-default.tsx"() {
    "use strict";
    init_labeled_switch();
  }
});

// registry/default/example/labeled-switch-with-form.tsx
var labeled_switch_with_form_exports = {};
__export(labeled_switch_with_form_exports, {
  default: () => LabeledSwitchWithForm
});
import * as React28 from "react";
import * as z2 from "zod";
import { zodResolver as zodResolver2 } from "@hookform/resolvers/zod";
import { Send as Send2 } from "lucide-react";
import { useForm as useForm2 } from "react-hook-form";
function LabeledSwitchWithForm() {
  const { toast: toast2 } = useToast();
  const form = useForm2({
    resolver: zodResolver2(formSchema2),
    defaultValues: {
      consent: false
    }
  });
  function onSubmit(data) {
    toast2({
      title: "Form submitted!",
      description: `Consent: ${data.consent ? "Accepted" : "Not accepted"}`
    });
  }
  return /* @__PURE__ */ React28.createElement(Form, { ...form }, /* @__PURE__ */ React28.createElement(
    "form",
    {
      onSubmit: form.handleSubmit(onSubmit),
      className: "max-w-xs space-y-4"
    },
    /* @__PURE__ */ React28.createElement(
      FormField,
      {
        control: form.control,
        name: "consent",
        render: ({ field }) => /* @__PURE__ */ React28.createElement(FormItem, null, /* @__PURE__ */ React28.createElement(FormLabel, null, "Terms and Conditions"), /* @__PURE__ */ React28.createElement(FormControl, null, /* @__PURE__ */ React28.createElement(
          LabeledSwitch,
          {
            firstLabel: "Decline",
            secondLabel: "Accept",
            selected: field.value,
            onToggle: field.onChange
          }
        )), /* @__PURE__ */ React28.createElement(FormMessage, null))
      }
    ),
    /* @__PURE__ */ React28.createElement(Button, { className: "w-full", type: "submit" }, "Submit", /* @__PURE__ */ React28.createElement(Send2, null))
  ));
}
var formSchema2;
var init_labeled_switch_with_form = __esm({
  "registry/default/example/labeled-switch-with-form.tsx"() {
    "use strict";
    "use client";
    init_button();
    init_form();
    init_use_toast();
    init_labeled_switch();
    formSchema2 = z2.object({
      consent: z2.boolean({
        required_error: "You must accept the terms and conditions"
      })
    });
  }
});

// registry/default/example/range-slider-default.tsx
var range_slider_default_exports = {};
__export(range_slider_default_exports, {
  default: () => RangeSliderDefault
});
import * as React29 from "react";
function RangeSliderDefault() {
  return /* @__PURE__ */ React29.createElement(
    RangeSlider,
    {
      defaultValue: [20, 80],
      max: 100,
      step: 1,
      className: "w-full"
    }
  );
}
var init_range_slider_default = __esm({
  "registry/default/example/range-slider-default.tsx"() {
    "use strict";
    init_range_slider();
  }
});

// registry/default/example/range-slider-vertical.tsx
var range_slider_vertical_exports = {};
__export(range_slider_vertical_exports, {
  default: () => RangeSliderVertical
});
import * as React30 from "react";
function RangeSliderVertical() {
  const [verticalValue, setVerticalValue] = React30.useState([30, 70]);
  return /* @__PURE__ */ React30.createElement("div", { className: "flex gap-12 mt-10" }, /* @__PURE__ */ React30.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React30.createElement(Label, null, "Left labels"), /* @__PURE__ */ React30.createElement("div", { className: "h-64 flex items-center justify-center pl-10" }, /* @__PURE__ */ React30.createElement(
    RangeSlider,
    {
      orientation: "vertical",
      value: verticalValue,
      onValueChange: setVerticalValue,
      max: 100,
      step: 1,
      label: (val) => val && `${val}%`
    }
  ))), /* @__PURE__ */ React30.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React30.createElement(Label, null, "Right labels"), /* @__PURE__ */ React30.createElement("div", { className: "h-64 flex items-center justify-center pr-10" }, /* @__PURE__ */ React30.createElement(
    RangeSlider,
    {
      orientation: "vertical",
      value: verticalValue,
      onValueChange: setVerticalValue,
      max: 100,
      step: 1,
      label: (val) => val && `${val}%`,
      labelPosition: "bottom"
    }
  ))));
}
var init_range_slider_vertical = __esm({
  "registry/default/example/range-slider-vertical.tsx"() {
    "use strict";
    init_label();
    init_range_slider();
  }
});

// registry/default/example/range-slider-with-label.tsx
var range_slider_with_label_exports = {};
__export(range_slider_with_label_exports, {
  default: () => RangeSliderWithLabel
});
import * as React31 from "react";
function RangeSliderWithLabel() {
  const [value, setValue] = React31.useState([25, 75]);
  return /* @__PURE__ */ React31.createElement("div", { className: "flex flex-col min-w-96 gap-12" }, /* @__PURE__ */ React31.createElement("div", { className: "space-y-8" }, /* @__PURE__ */ React31.createElement(Label, null, "Top Labels"), /* @__PURE__ */ React31.createElement(
    RangeSlider,
    {
      value,
      onValueChange: setValue,
      max: 100,
      step: 1,
      className: "w-full",
      label: (val) => val && `${val}%`
    }
  )), /* @__PURE__ */ React31.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React31.createElement(Label, null, "Bottom Labels"), /* @__PURE__ */ React31.createElement(
    RangeSlider,
    {
      value,
      onValueChange: setValue,
      max: 100,
      step: 1,
      className: "w-full",
      label: (val) => val && `${val}%`,
      labelPosition: "bottom"
    }
  )));
}
var init_range_slider_with_label = __esm({
  "registry/default/example/range-slider-with-label.tsx"() {
    "use strict";
    init_label();
    init_range_slider();
  }
});

// registry/default/example/responsive-textarea-default.tsx
var responsive_textarea_default_exports = {};
__export(responsive_textarea_default_exports, {
  default: () => ResponsiveTextareaDefault
});
import * as React32 from "react";
function ResponsiveTextareaDefault() {
  return /* @__PURE__ */ React32.createElement("div", { className: "grid w-full gap-2" }, /* @__PURE__ */ React32.createElement(
    ResponsiveTextarea,
    {
      placeholder: "Type your message here.",
      className: "w-full"
    }
  ));
}
var init_responsive_textarea_default = __esm({
  "registry/default/example/responsive-textarea-default.tsx"() {
    "use strict";
    "use client";
    init_responsive_textarea();
  }
});

// registry/default/example/responsive-textarea-with-form.tsx
var responsive_textarea_with_form_exports = {};
__export(responsive_textarea_with_form_exports, {
  default: () => ResponsiveTextareaWithForm
});
import * as React33 from "react";
import * as z3 from "zod";
import { zodResolver as zodResolver3 } from "@hookform/resolvers/zod";
import { Send as Send3 } from "lucide-react";
import { useForm as useForm3 } from "react-hook-form";
function ResponsiveTextareaWithForm() {
  const { toast: toast2 } = useToast();
  const form = useForm3({
    resolver: zodResolver3(formSchema3),
    defaultValues: {
      message: ""
    }
  });
  function onSubmit(data) {
    toast2({
      title: "Message sent!",
      description: `Message: ${data.message}`
    });
  }
  return /* @__PURE__ */ React33.createElement(Form, { ...form }, /* @__PURE__ */ React33.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "w-full space-y-4" }, /* @__PURE__ */ React33.createElement(
    FormField,
    {
      control: form.control,
      name: "message",
      render: ({ field }) => /* @__PURE__ */ React33.createElement(FormItem, null, /* @__PURE__ */ React33.createElement(FormLabel, null, "Message"), /* @__PURE__ */ React33.createElement(FormControl, null, /* @__PURE__ */ React33.createElement(ResponsiveTextarea, { ...field })), /* @__PURE__ */ React33.createElement(FormMessage, null))
    }
  ), /* @__PURE__ */ React33.createElement(Button, { className: "w-full", type: "submit" }, "Send message", /* @__PURE__ */ React33.createElement(Send3, null))));
}
var formSchema3;
var init_responsive_textarea_with_form = __esm({
  "registry/default/example/responsive-textarea-with-form.tsx"() {
    "use strict";
    "use client";
    init_button();
    init_form();
    init_use_toast();
    init_responsive_textarea();
    formSchema3 = z3.object({
      message: z3.string().min(1, "Message is required")
    });
  }
});

// registry/default/example/responsive-textarea-with-label.tsx
var responsive_textarea_with_label_exports = {};
__export(responsive_textarea_with_label_exports, {
  default: () => ResponsiveTextareaWithLabel
});
import * as React34 from "react";
function ResponsiveTextareaWithLabel() {
  return /* @__PURE__ */ React34.createElement("div", { className: "grid w-full gap-2" }, /* @__PURE__ */ React34.createElement(Label, null, "Your message"), /* @__PURE__ */ React34.createElement(
    ResponsiveTextarea,
    {
      placeholder: "Type your message here.",
      className: "w-full"
    }
  ));
}
var init_responsive_textarea_with_label = __esm({
  "registry/default/example/responsive-textarea-with-label.tsx"() {
    "use strict";
    "use client";
    init_label();
    init_responsive_textarea();
  }
});

// registry/default/example/responsive-textarea-with-text.tsx
var responsive_textarea_with_text_exports = {};
__export(responsive_textarea_with_text_exports, {
  default: () => ResponsiveTextareaWithText
});
import * as React35 from "react";
function ResponsiveTextareaWithText() {
  return /* @__PURE__ */ React35.createElement("div", { className: "grid w-full gap-2" }, /* @__PURE__ */ React35.createElement(Label, null, "Your message"), /* @__PURE__ */ React35.createElement(
    ResponsiveTextarea,
    {
      placeholder: "Type your message here.",
      className: "w-full"
    }
  ), /* @__PURE__ */ React35.createElement("p", { className: "text-sm text-muted-foreground" }, "Your message will be copied to the support team."));
}
var init_responsive_textarea_with_text = __esm({
  "registry/default/example/responsive-textarea-with-text.tsx"() {
    "use strict";
    "use client";
    init_label();
    init_responsive_textarea();
  }
});

// registry/default/example/star-rating-customized.tsx
var star_rating_customized_exports = {};
__export(star_rating_customized_exports, {
  default: () => StarRatingCustomized
});
function StarRatingCustomized() {
  return /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "w-32 text-sm font-medium" }, "Default:"), /* @__PURE__ */ React.createElement(star_rating_default, { value: 4 })), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "w-32 text-sm font-medium" }, "Custom color:"), /* @__PURE__ */ React.createElement(star_rating_default, { value: 3.7, color: "#FF5733" })), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "w-32 text-sm font-medium" }, "Large size:"), /* @__PURE__ */ React.createElement(star_rating_default, { value: 4.2, size: 32 })), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "w-32 text-sm font-medium" }, "10 stars:"), /* @__PURE__ */ React.createElement(star_rating_default, { value: 7.5, maxStars: 10, size: 20 })));
}
var init_star_rating_customized = __esm({
  "registry/default/example/star-rating-customized.tsx"() {
    "use strict";
    init_star_rating();
  }
});

// registry/default/example/star-rating-default.tsx
var star_rating_default_exports = {};
__export(star_rating_default_exports, {
  default: () => StarRatingDefault
});
import { useState as useState9 } from "react";
function StarRatingDefault() {
  const [rating, setRating] = useState9(3);
  return /* @__PURE__ */ React.createElement(star_rating_default, { value: rating, onChange: setRating });
}
var init_star_rating_default = __esm({
  "registry/default/example/star-rating-default.tsx"() {
    "use strict";
    init_star_rating();
  }
});

// registry/default/example/star-rating-interactive.tsx
var star_rating_interactive_exports = {};
__export(star_rating_interactive_exports, {
  default: () => StarRatingInteractive
});
import { useState as useState10 } from "react";
function StarRatingInteractive() {
  const [rating, setRating] = useState10(3);
  return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2" }, /* @__PURE__ */ React.createElement(star_rating_default, { value: rating, onChange: setRating }), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-muted-foreground" }, "Current rating: ", rating));
}
var init_star_rating_interactive = __esm({
  "registry/default/example/star-rating-interactive.tsx"() {
    "use strict";
    "use client";
    init_star_rating();
  }
});

// registry/default/example/star-rating-readonly.tsx
var star_rating_readonly_exports = {};
__export(star_rating_readonly_exports, {
  default: () => StarRatingReadOnly
});
function StarRatingReadOnly() {
  return /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "w-32 text-sm font-medium" }, "1 star review:"), /* @__PURE__ */ React.createElement(star_rating_default, { value: 1, readOnly: true })), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "w-32 text-sm font-medium" }, "2.5 star review:"), /* @__PURE__ */ React.createElement(star_rating_default, { value: 2.5, readOnly: true })), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "w-32 text-sm font-medium" }, "5 star review:"), /* @__PURE__ */ React.createElement(star_rating_default, { value: 5, readOnly: true })));
}
var init_star_rating_readonly = __esm({
  "registry/default/example/star-rating-readonly.tsx"() {
    "use strict";
    init_star_rating();
  }
});

// registry/default/example/star-rating-with-form.tsx
var star_rating_with_form_exports = {};
__export(star_rating_with_form_exports, {
  default: () => StarRatingWithForm
});
import { zodResolver as zodResolver4 } from "@hookform/resolvers/zod";
import { useForm as useForm4 } from "react-hook-form";
import { z as z4 } from "zod";
function StarRatingWithForm() {
  const { toast: toast2 } = useToast();
  const form = useForm4({
    resolver: zodResolver4(FormSchema),
    defaultValues: {
      rating: 0
    }
  });
  function onSubmit(data) {
    toast2({
      title: "Form submitted!",
      description: `Rating: ${data.rating}`
    });
  }
  return /* @__PURE__ */ React.createElement(Form, { ...form }, /* @__PURE__ */ React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6" }, /* @__PURE__ */ React.createElement(
    FormField,
    {
      control: form.control,
      name: "rating",
      render: ({ field }) => /* @__PURE__ */ React.createElement(FormItem, null, /* @__PURE__ */ React.createElement(FormLabel, null, "Rating"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(star_rating_default, { value: field.value, onChange: field.onChange })), /* @__PURE__ */ React.createElement(FormDescription, null, "How would you rate our service?"), /* @__PURE__ */ React.createElement(FormMessage, null))
    }
  ), /* @__PURE__ */ React.createElement(Button, { type: "submit" }, "Submit Rating")));
}
var FormSchema;
var init_star_rating_with_form = __esm({
  "registry/default/example/star-rating-with-form.tsx"() {
    "use strict";
    "use client";
    init_button();
    init_form();
    init_use_toast();
    init_star_rating();
    FormSchema = z4.object({
      rating: z4.number().min(1, {
        message: "Please provide a rating"
      })
    });
  }
});

// registry/default/example/stepper-demo.tsx
var stepper_demo_exports = {};
__export(stepper_demo_exports, {
  default: () => StepperDemo
});
import * as React36 from "react";
import { Check as Check2, FileText, UserCircle } from "lucide-react";
function StepperDemo() {
  return /* @__PURE__ */ React36.createElement(StepperProvider, { className: "space-y-4", variant: "horizontal" }, ({ methods }) => /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement(StepperNavigation, null, methods.all.map((step) => /* @__PURE__ */ React36.createElement(
    StepperStep,
    {
      key: step.id,
      of: step.id,
      onClick: () => methods.goTo(step.id)
    },
    /* @__PURE__ */ React36.createElement(StepperTitle2, null, step.title)
  ))), methods.switch({
    "step-1": (step) => /* @__PURE__ */ React36.createElement(Content4, { id: step.id }),
    "step-2": (step) => /* @__PURE__ */ React36.createElement(Content4, { id: step.id }),
    "step-3": (step) => /* @__PURE__ */ React36.createElement(Content4, { id: step.id })
  }), /* @__PURE__ */ React36.createElement(StepperControls, null, !methods.isFirst && /* @__PURE__ */ React36.createElement(Button, { variant: "secondary", onClick: methods.prev }, "Back"), /* @__PURE__ */ React36.createElement(Button, { onClick: methods.isLast ? methods.reset : methods.next }, methods.isLast ? "Reset" : "Next"))));
}
var StepperProvider, StepperControls, StepperNavigation, StepperPanel, StepperStep, StepperTitle2, Content4;
var init_stepper_demo = __esm({
  "registry/default/example/stepper-demo.tsx"() {
    "use strict";
    init_button();
    init_stepper();
    ({
      StepperProvider,
      StepperControls,
      StepperNavigation,
      StepperPanel,
      StepperStep,
      StepperTitle: StepperTitle2
    } = defineStepper2(
      {
        id: "step-1",
        title: "Info"
      },
      {
        id: "step-2",
        title: "Docs"
      },
      {
        id: "step-3",
        title: "Completed"
      }
    ));
    Content4 = ({ id }) => {
      const contents = {
        "step-1": {
          icon: /* @__PURE__ */ React36.createElement(UserCircle, { className: "h-12 w-12 text-primary" }),
          title: "Personal Information",
          description: "Please fill in your basic information"
        },
        "step-2": {
          icon: /* @__PURE__ */ React36.createElement(FileText, { className: "h-12 w-12 text-primary" }),
          title: "Required Documents",
          description: "Please upload the required documents"
        },
        "step-3": {
          icon: /* @__PURE__ */ React36.createElement(Check2, { className: "h-12 w-12 text-primary" }),
          title: "Completed",
          description: "You have completed all the steps!"
        }
      };
      const content = contents[id];
      return /* @__PURE__ */ React36.createElement(StepperPanel, { className: "rounded-md border p-4" }, /* @__PURE__ */ React36.createElement("div", { className: "flex flex-col items-center text-center" }, content.icon, /* @__PURE__ */ React36.createElement("h3", { className: "mt-4 text-xl font-medium" }, content.title), /* @__PURE__ */ React36.createElement("p", { className: "mt-2 text-muted-foreground" }, content.description)));
    };
  }
});

// registry/default/example/stepper-description.tsx
var stepper_description_exports = {};
__export(stepper_description_exports, {
  default: () => StepperDemo2
});
import * as React37 from "react";
function StepperDemo2() {
  return /* @__PURE__ */ React37.createElement(StepperProvider2, { className: "space-y-4", variant: "horizontal" }, ({ methods }) => /* @__PURE__ */ React37.createElement(React37.Fragment, null, /* @__PURE__ */ React37.createElement(StepperNavigation2, null, methods.all.map((step) => /* @__PURE__ */ React37.createElement(
    StepperStep2,
    {
      key: step.id,
      of: step.id,
      onClick: () => methods.goTo(step.id)
    },
    /* @__PURE__ */ React37.createElement(StepperTitle3, null, step.title),
    /* @__PURE__ */ React37.createElement(StepperDescription2, null, step.description)
  ))), methods.switch({
    "step-1": (step) => /* @__PURE__ */ React37.createElement(Content5, { id: step.id }),
    "step-2": (step) => /* @__PURE__ */ React37.createElement(Content5, { id: step.id }),
    "step-3": (step) => /* @__PURE__ */ React37.createElement(Content5, { id: step.id })
  }), /* @__PURE__ */ React37.createElement(StepperControls2, null, !methods.isLast && /* @__PURE__ */ React37.createElement(
    Button,
    {
      variant: "secondary",
      onClick: methods.prev,
      disabled: methods.isFirst
    },
    "Previous"
  ), /* @__PURE__ */ React37.createElement(Button, { onClick: methods.isLast ? methods.reset : methods.next }, methods.isLast ? "Reset" : "Next"))));
}
var StepperProvider2, StepperControls2, StepperNavigation2, StepperPanel2, StepperStep2, StepperTitle3, StepperDescription2, Content5;
var init_stepper_description = __esm({
  "registry/default/example/stepper-description.tsx"() {
    "use strict";
    init_button();
    init_stepper();
    ({
      StepperProvider: StepperProvider2,
      StepperControls: StepperControls2,
      StepperNavigation: StepperNavigation2,
      StepperPanel: StepperPanel2,
      StepperStep: StepperStep2,
      StepperTitle: StepperTitle3,
      StepperDescription: StepperDescription2
    } = defineStepper2(
      {
        id: "step-1",
        title: "Info",
        description: "Your information"
      },
      {
        id: "step-2",
        title: "Docs",
        description: "Your documents"
      },
      {
        id: "step-3",
        title: "Completed",
        description: "Your information and documents are completed"
      }
    ));
    Content5 = ({ id }) => {
      return /* @__PURE__ */ React37.createElement(StepperPanel2, { className: "h-[200px] content-center rounded border p-8" }, /* @__PURE__ */ React37.createElement("p", { className: "text-xl font-normal" }, "Content for ", id));
    };
  }
});

// registry/default/example/stepper-form.tsx
var stepper_form_exports = {};
__export(stepper_form_exports, {
  default: () => StepperForm
});
import * as React38 from "react";
import { zodResolver as zodResolver5 } from "@hookform/resolvers/zod";
import { useForm as useForm5, useFormContext as useFormContext2 } from "react-hook-form";
import { z as z5 } from "zod";
function PaymentForm() {
  const {
    register,
    formState: { errors }
  } = useFormContext2();
  return /* @__PURE__ */ React38.createElement("div", { className: "space-y-4 text-start" }, /* @__PURE__ */ React38.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React38.createElement(
    "label",
    {
      htmlFor: register("cardNumber").name,
      className: "block text-sm font-medium text-primary"
    },
    "Card Number"
  ), /* @__PURE__ */ React38.createElement(
    Input,
    {
      id: register("cardNumber").name,
      ...register("cardNumber"),
      className: "block w-full rounded-md border p-2"
    }
  ), errors.cardNumber && /* @__PURE__ */ React38.createElement("span", { className: "text-sm text-destructive" }, errors.cardNumber.message)), /* @__PURE__ */ React38.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React38.createElement(
    "label",
    {
      htmlFor: register("expirationDate").name,
      className: "block text-sm font-medium text-primary"
    },
    "Expiration Date"
  ), /* @__PURE__ */ React38.createElement(
    Input,
    {
      id: register("expirationDate").name,
      ...register("expirationDate"),
      className: "block w-full rounded-md border p-2"
    }
  ), errors.expirationDate && /* @__PURE__ */ React38.createElement("span", { className: "text-sm text-destructive" }, errors.expirationDate.message)), /* @__PURE__ */ React38.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React38.createElement(
    "label",
    {
      htmlFor: register("cvv").name,
      className: "block text-sm font-medium text-primary"
    },
    "CVV"
  ), /* @__PURE__ */ React38.createElement(
    Input,
    {
      id: register("cvv").name,
      ...register("cvv"),
      className: "block w-full rounded-md border p-2"
    }
  ), errors.cvv && /* @__PURE__ */ React38.createElement("span", { className: "text-sm text-destructive" }, errors.cvv.message)));
}
function CompleteComponent() {
  return /* @__PURE__ */ React38.createElement("div", { className: "text-center" }, "Thank you! Your order is complete.");
}
function StepperForm() {
  return /* @__PURE__ */ React38.createElement(StepperProvider3, null, /* @__PURE__ */ React38.createElement(FormStepperComponent, null));
}
var shippingSchema, paymentSchema, ShippingForm, StepperProvider3, StepperControls3, StepperNavigation3, StepperStep3, StepperTitle4, useStepper, FormStepperComponent;
var init_stepper_form = __esm({
  "registry/default/example/stepper-form.tsx"() {
    "use strict";
    init_button();
    init_form();
    init_input();
    init_stepper();
    shippingSchema = z5.object({
      address: z5.string().min(1, "Address is required"),
      city: z5.string().min(1, "City is required"),
      postalCode: z5.string().min(5, "Postal code is required")
    });
    paymentSchema = z5.object({
      cardNumber: z5.string().min(16, "Card number is required"),
      expirationDate: z5.string().min(5, "Expiration date is required"),
      cvv: z5.string().min(3, "CVV is required")
    });
    ShippingForm = () => {
      const {
        register,
        formState: { errors }
      } = useFormContext2();
      return /* @__PURE__ */ React38.createElement("div", { className: "space-y-4 text-start" }, /* @__PURE__ */ React38.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React38.createElement(
        "label",
        {
          htmlFor: register("address").name,
          className: "block text-sm font-medium text-primary"
        },
        "Address"
      ), /* @__PURE__ */ React38.createElement(
        Input,
        {
          id: register("address").name,
          ...register("address"),
          className: "block w-full rounded-md border p-2"
        }
      ), errors.address && /* @__PURE__ */ React38.createElement("span", { className: "text-sm text-destructive" }, errors.address.message)), /* @__PURE__ */ React38.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React38.createElement(
        "label",
        {
          htmlFor: register("city").name,
          className: "block text-sm font-medium text-primary"
        },
        "City"
      ), /* @__PURE__ */ React38.createElement(
        Input,
        {
          id: register("city").name,
          ...register("city"),
          className: "block w-full rounded-md border p-2"
        }
      ), errors.city && /* @__PURE__ */ React38.createElement("span", { className: "text-sm text-destructive" }, errors.city.message)), /* @__PURE__ */ React38.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React38.createElement(
        "label",
        {
          htmlFor: register("postalCode").name,
          className: "block text-sm font-medium text-primary"
        },
        "Postal Code"
      ), /* @__PURE__ */ React38.createElement(
        Input,
        {
          id: register("postalCode").name,
          ...register("postalCode"),
          className: "block w-full rounded-md border p-2"
        }
      ), errors.postalCode && /* @__PURE__ */ React38.createElement("span", { className: "text-sm text-destructive" }, errors.postalCode.message)));
    };
    ({
      StepperProvider: StepperProvider3,
      StepperControls: StepperControls3,
      StepperNavigation: StepperNavigation3,
      StepperStep: StepperStep3,
      StepperTitle: StepperTitle4,
      useStepper
    } = defineStepper2(
      {
        id: "shipping",
        title: "Shipping",
        schema: shippingSchema,
        Component: ShippingForm
      },
      {
        id: "payment",
        title: "Payment",
        schema: paymentSchema,
        Component: PaymentForm
      },
      {
        id: "complete",
        title: "Complete",
        schema: z5.object({}),
        Component: CompleteComponent
      }
    ));
    FormStepperComponent = () => {
      const methods = useStepper();
      const form = useForm5({
        mode: "onTouched",
        resolver: zodResolver5(methods.current.schema)
      });
      const onSubmit = (values) => {
        console.log(`Form values for step ${methods.current.id}:`, values);
      };
      return /* @__PURE__ */ React38.createElement(Form, { ...form }, /* @__PURE__ */ React38.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4" }, /* @__PURE__ */ React38.createElement(StepperNavigation3, null, methods.all.map((step) => /* @__PURE__ */ React38.createElement(
        StepperStep3,
        {
          key: step.id,
          of: step.id,
          type: step.id === methods.current.id ? "submit" : "button",
          onClick: async () => {
            const valid = await form.trigger();
            if (!valid) return;
            methods.goTo(step.id);
          }
        },
        /* @__PURE__ */ React38.createElement(StepperTitle4, null, step.title)
      ))), methods.switch({
        shipping: ({ Component }) => /* @__PURE__ */ React38.createElement(Component, null),
        payment: ({ Component }) => /* @__PURE__ */ React38.createElement(Component, null),
        complete: ({ Component }) => /* @__PURE__ */ React38.createElement(Component, null)
      }), /* @__PURE__ */ React38.createElement(StepperControls3, null, !methods.isLast && /* @__PURE__ */ React38.createElement(
        Button,
        {
          variant: "secondary",
          onClick: methods.prev,
          disabled: methods.isFirst
        },
        "Previous"
      ), /* @__PURE__ */ React38.createElement(
        Button,
        {
          type: "submit",
          onClick: () => {
            if (methods.isLast) {
              return methods.reset();
            }
            methods.beforeNext(async () => {
              const valid = await form.trigger();
              if (!valid) return false;
              return true;
            });
          }
        },
        methods.isLast ? "Reset" : "Next"
      ))));
    };
  }
});

// registry/default/example/stepper-icon.tsx
var stepper_icon_exports = {};
__export(stepper_icon_exports, {
  default: () => StepperDemo3
});
import * as React39 from "react";
import { HomeIcon, SettingsIcon, UserIcon } from "lucide-react";
function StepperDemo3() {
  return /* @__PURE__ */ React39.createElement(StepperProvider4, { className: "space-y-4", variant: "horizontal" }, ({ methods }) => /* @__PURE__ */ React39.createElement(React39.Fragment, null, /* @__PURE__ */ React39.createElement(StepperNavigation4, null, methods.all.map((step) => /* @__PURE__ */ React39.createElement(
    StepperStep4,
    {
      key: step.id,
      of: step.id,
      onClick: () => methods.goTo(step.id),
      icon: step.icon
    },
    /* @__PURE__ */ React39.createElement(StepperTitle5, null, step.title)
  ))), methods.switch({
    "step-1": (step) => /* @__PURE__ */ React39.createElement(Content6, { id: step.id }),
    "step-2": (step) => /* @__PURE__ */ React39.createElement(Content6, { id: step.id }),
    "step-3": (step) => /* @__PURE__ */ React39.createElement(Content6, { id: step.id })
  }), /* @__PURE__ */ React39.createElement(StepperControls4, null, !methods.isLast && /* @__PURE__ */ React39.createElement(
    Button,
    {
      variant: "secondary",
      onClick: methods.prev,
      disabled: methods.isFirst
    },
    "Previous"
  ), /* @__PURE__ */ React39.createElement(Button, { onClick: methods.isLast ? methods.reset : methods.next }, methods.isLast ? "Reset" : "Next"))));
}
var StepperProvider4, StepperControls4, StepperNavigation4, StepperPanel3, StepperStep4, StepperTitle5, Content6;
var init_stepper_icon = __esm({
  "registry/default/example/stepper-icon.tsx"() {
    "use strict";
    init_button();
    init_stepper();
    ({
      StepperProvider: StepperProvider4,
      StepperControls: StepperControls4,
      StepperNavigation: StepperNavigation4,
      StepperPanel: StepperPanel3,
      StepperStep: StepperStep4,
      StepperTitle: StepperTitle5
    } = defineStepper2(
      {
        id: "step-1",
        title: "Step 1",
        icon: /* @__PURE__ */ React39.createElement(HomeIcon, null)
      },
      {
        id: "step-2",
        title: "Step 2",
        icon: /* @__PURE__ */ React39.createElement(SettingsIcon, null)
      },
      {
        id: "step-3",
        title: "Step 3",
        icon: /* @__PURE__ */ React39.createElement(UserIcon, null)
      }
    ));
    Content6 = ({ id }) => {
      return /* @__PURE__ */ React39.createElement(StepperPanel3, { className: "h-[200px] content-center rounded border p-8" }, /* @__PURE__ */ React39.createElement("p", { className: "text-xl font-normal" }, "Content for ", id));
    };
  }
});

// components/ui/radio-group.tsx
import * as React40 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
var RadioGroup, RadioGroupItem;
var init_radio_group = __esm({
  "components/ui/radio-group.tsx"() {
    "use strict";
    "use client";
    init_utils();
    RadioGroup = React40.forwardRef(({ className, ...props }, ref) => {
      return /* @__PURE__ */ React40.createElement(
        RadioGroupPrimitive.Root,
        {
          className: cn("grid gap-2", className),
          ...props,
          ref
        }
      );
    });
    RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
    RadioGroupItem = React40.forwardRef(({ className, ...props }, ref) => {
      return /* @__PURE__ */ React40.createElement(
        RadioGroupPrimitive.Item,
        {
          ref,
          className: cn(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          ),
          ...props
        },
        /* @__PURE__ */ React40.createElement(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center" }, /* @__PURE__ */ React40.createElement(Circle, { className: "h-3.5 w-3.5 fill-primary" }))
      );
    });
    RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
  }
});

// registry/default/example/stepper-label-orientation.tsx
var stepper_label_orientation_exports = {};
__export(stepper_label_orientation_exports, {
  default: () => StepperVariants
});
import * as React41 from "react";
function StepperVariants() {
  const [labelOrientation, setLabelOrientation] = React41.useState("horizontal");
  return /* @__PURE__ */ React41.createElement("div", { className: "flex w-full flex-col gap-8" }, /* @__PURE__ */ React41.createElement(
    RadioGroup,
    {
      value: labelOrientation,
      onValueChange: (value) => setLabelOrientation(value)
    },
    /* @__PURE__ */ React41.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React41.createElement(RadioGroupItem, { value: "horizontal", id: "horizontal-label" }), /* @__PURE__ */ React41.createElement(Label, { htmlFor: "horizontal-label" }, "Horizontal")),
    /* @__PURE__ */ React41.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React41.createElement(RadioGroupItem, { value: "vertical", id: "vertical-label" }), /* @__PURE__ */ React41.createElement(Label, { htmlFor: "vertical-label" }, "Vertical"))
  ), /* @__PURE__ */ React41.createElement(
    StepperProvider5,
    {
      className: "space-y-4",
      variant: "horizontal",
      labelOrientation
    },
    ({ methods }) => /* @__PURE__ */ React41.createElement(React41.Fragment, null, /* @__PURE__ */ React41.createElement(StepperNavigation5, null, methods.all.map((step) => /* @__PURE__ */ React41.createElement(
      StepperStep5,
      {
        key: step.id,
        of: step.id,
        onClick: () => methods.goTo(step.id)
      },
      /* @__PURE__ */ React41.createElement(StepperTitle6, null, step.title)
    ))), methods.switch({
      "step-1": (step) => /* @__PURE__ */ React41.createElement(Content7, { id: step.id }),
      "step-2": (step) => /* @__PURE__ */ React41.createElement(Content7, { id: step.id }),
      "step-3": (step) => /* @__PURE__ */ React41.createElement(Content7, { id: step.id })
    }), /* @__PURE__ */ React41.createElement(StepperControls5, null, !methods.isLast && /* @__PURE__ */ React41.createElement(
      Button,
      {
        variant: "secondary",
        onClick: methods.prev,
        disabled: methods.isFirst
      },
      "Previous"
    ), /* @__PURE__ */ React41.createElement(Button, { onClick: methods.isLast ? methods.reset : methods.next }, methods.isLast ? "Reset" : "Next")))
  ));
}
var StepperProvider5, StepperControls5, StepperNavigation5, StepperPanel4, StepperStep5, StepperTitle6, Content7;
var init_stepper_label_orientation = __esm({
  "registry/default/example/stepper-label-orientation.tsx"() {
    "use strict";
    init_button();
    init_label();
    init_radio_group();
    init_stepper();
    ({
      StepperProvider: StepperProvider5,
      StepperControls: StepperControls5,
      StepperNavigation: StepperNavigation5,
      StepperPanel: StepperPanel4,
      StepperStep: StepperStep5,
      StepperTitle: StepperTitle6
    } = defineStepper2(
      {
        id: "step-1",
        title: "Step 1"
      },
      {
        id: "step-2",
        title: "Step 2"
      },
      {
        id: "step-3",
        title: "Step 3"
      }
    ));
    Content7 = ({ id }) => {
      return /* @__PURE__ */ React41.createElement(StepperPanel4, { className: "h-[200px] content-center rounded border  p-8" }, /* @__PURE__ */ React41.createElement("p", { className: "text-xl font-normal" }, "Content for ", id));
    };
  }
});

// hooks/use-media-query.tsx
import * as React42 from "react";
function useMediaQuery(query) {
  const [value, setValue] = React42.useState(false);
  React42.useEffect(() => {
    function onChange(event) {
      setValue(event.matches);
    }
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);
    return () => result.removeEventListener("change", onChange);
  }, [query]);
  return value;
}
var init_use_media_query = __esm({
  "hooks/use-media-query.tsx"() {
    "use strict";
  }
});

// registry/default/example/stepper-responsive-variant.tsx
var stepper_responsive_variant_exports = {};
__export(stepper_responsive_variant_exports, {
  default: () => StepperResponsiveVariant
});
import * as React43 from "react";
function StepperResponsiveVariant() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return /* @__PURE__ */ React43.createElement(
    StepperProvider6,
    {
      className: "space-y-4",
      variant: isMobile ? "vertical" : "horizontal"
    },
    ({ methods }) => /* @__PURE__ */ React43.createElement(React43.Fragment, null, /* @__PURE__ */ React43.createElement(StepperNavigation6, null, methods.all.map((step) => /* @__PURE__ */ React43.createElement(
      StepperStep6,
      {
        key: step.id,
        of: step.id,
        onClick: () => methods.goTo(step.id)
      },
      /* @__PURE__ */ React43.createElement(StepperTitle7, null, step.title),
      isMobile && methods.when(step.id, (step2) => /* @__PURE__ */ React43.createElement(StepperPanel5, { className: "h-[200px] content-center rounded border  p-8" }, /* @__PURE__ */ React43.createElement("p", { className: "text-xl font-normal" }, "Content for ", step2.id)))
    ))), !isMobile && methods.switch({
      "step-1": (step) => /* @__PURE__ */ React43.createElement(Content8, { id: step.id }),
      "step-2": (step) => /* @__PURE__ */ React43.createElement(Content8, { id: step.id }),
      "step-3": (step) => /* @__PURE__ */ React43.createElement(Content8, { id: step.id })
    }), /* @__PURE__ */ React43.createElement(StepperControls6, null, !methods.isLast && /* @__PURE__ */ React43.createElement(
      Button,
      {
        variant: "secondary",
        onClick: methods.prev,
        disabled: methods.isFirst
      },
      "Previous"
    ), /* @__PURE__ */ React43.createElement(Button, { onClick: methods.isLast ? methods.reset : methods.next }, methods.isLast ? "Reset" : "Next")))
  );
}
var StepperProvider6, StepperControls6, StepperNavigation6, StepperPanel5, StepperStep6, StepperTitle7, Content8;
var init_stepper_responsive_variant = __esm({
  "registry/default/example/stepper-responsive-variant.tsx"() {
    "use strict";
    init_button();
    init_use_media_query();
    init_stepper();
    ({
      StepperProvider: StepperProvider6,
      StepperControls: StepperControls6,
      StepperNavigation: StepperNavigation6,
      StepperPanel: StepperPanel5,
      StepperStep: StepperStep6,
      StepperTitle: StepperTitle7
    } = defineStepper2(
      {
        id: "step-1",
        title: "Step 1"
      },
      {
        id: "step-2",
        title: "Step 2"
      },
      {
        id: "step-3",
        title: "Step 3"
      }
    ));
    Content8 = ({ id }) => {
      return /* @__PURE__ */ React43.createElement(StepperPanel5, { className: "h-[200px] content-center rounded border  p-8" }, /* @__PURE__ */ React43.createElement("p", { className: "text-xl font-normal" }, "Content for ", id));
    };
  }
});

// registry/default/example/stepper-tracking.tsx
var stepper_tracking_exports = {};
__export(stepper_tracking_exports, {
  default: () => StepperVerticalFollow
});
import * as React44 from "react";
function StepperVerticalFollow() {
  const [tracking, setTracking] = React44.useState(false);
  return /* @__PURE__ */ React44.createElement("div", { className: "flex w-full flex-col gap-8" }, /* @__PURE__ */ React44.createElement(
    RadioGroup,
    {
      value: tracking.toString(),
      onValueChange: (value) => setTracking(value === "true")
    },
    /* @__PURE__ */ React44.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React44.createElement(RadioGroupItem, { value: "true", id: "tracking" }), /* @__PURE__ */ React44.createElement(Label, { htmlFor: "tracking" }, "Tracking")),
    /* @__PURE__ */ React44.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React44.createElement(RadioGroupItem, { value: "false", id: "no-tracking" }), /* @__PURE__ */ React44.createElement(Label, { htmlFor: "no-tracking" }, "No Tracking"))
  ), /* @__PURE__ */ React44.createElement(
    StepperProvider7,
    {
      className: "space-y-4",
      variant: "vertical",
      tracking
    },
    ({ methods }) => /* @__PURE__ */ React44.createElement(React44.Fragment, null, /* @__PURE__ */ React44.createElement(StepperNavigation7, null, methods.all.map((step) => /* @__PURE__ */ React44.createElement(
      StepperStep7,
      {
        key: step.id,
        of: step.id,
        onClick: () => methods.goTo(step.id)
      },
      /* @__PURE__ */ React44.createElement(StepperTitle8, null, step.title),
      methods.when(step.id, () => /* @__PURE__ */ React44.createElement(StepperPanel6, { className: "space-y-4" }, /* @__PURE__ */ React44.createElement("div", { className: "h-[200px] content-center rounded border  p-8" }, /* @__PURE__ */ React44.createElement("p", { className: "text-xl font-normal" }, "Content for ", step.id)), /* @__PURE__ */ React44.createElement(StepperControls7, null, !methods.isLast && /* @__PURE__ */ React44.createElement(
        Button,
        {
          variant: "secondary",
          onClick: methods.prev,
          disabled: methods.isFirst
        },
        "Previous"
      ), /* @__PURE__ */ React44.createElement(
        Button,
        {
          onClick: methods.isLast ? methods.reset : methods.next
        },
        methods.isLast ? "Reset" : "Next"
      ))))
    ))))
  ));
}
var StepperProvider7, StepperControls7, StepperNavigation7, StepperPanel6, StepperStep7, StepperTitle8;
var init_stepper_tracking = __esm({
  "registry/default/example/stepper-tracking.tsx"() {
    "use strict";
    init_button();
    init_label();
    init_radio_group();
    init_stepper();
    ({
      StepperProvider: StepperProvider7,
      StepperControls: StepperControls7,
      StepperNavigation: StepperNavigation7,
      StepperPanel: StepperPanel6,
      StepperStep: StepperStep7,
      StepperTitle: StepperTitle8
    } = defineStepper2(
      {
        id: "step-1",
        title: "Step 1"
      },
      {
        id: "step-2",
        title: "Step 2"
      },
      {
        id: "step-3",
        title: "Step 3"
      },
      {
        id: "step-4",
        title: "Step 4"
      },
      {
        id: "step-5",
        title: "Step 5"
      },
      {
        id: "step-6",
        title: "Step 6"
      }
    ));
  }
});

// registry/default/example/stepper-variants.tsx
var stepper_variants_exports = {};
__export(stepper_variants_exports, {
  default: () => StepperVariants2
});
import * as React45 from "react";
function StepperVariants2() {
  const [variant, setVariant] = React45.useState("horizontal");
  return /* @__PURE__ */ React45.createElement("div", { className: "flex w-full flex-col gap-8" }, /* @__PURE__ */ React45.createElement(
    RadioGroup,
    {
      value: variant,
      onValueChange: (value) => setVariant(value)
    },
    /* @__PURE__ */ React45.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React45.createElement(RadioGroupItem, { value: "horizontal", id: "horizontal-variant" }), /* @__PURE__ */ React45.createElement(Label, { htmlFor: "horizontal-variant" }, "Horizontal")),
    /* @__PURE__ */ React45.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React45.createElement(RadioGroupItem, { value: "vertical", id: "vertical-variant" }), /* @__PURE__ */ React45.createElement(Label, { htmlFor: "vertical-variant" }, "Vertical")),
    /* @__PURE__ */ React45.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React45.createElement(RadioGroupItem, { value: "circle", id: "circle-variant" }), /* @__PURE__ */ React45.createElement(Label, { htmlFor: "circle-variant" }, "Circle"))
  ), variant === "horizontal" && /* @__PURE__ */ React45.createElement(HorizontalStepper, null), variant === "vertical" && /* @__PURE__ */ React45.createElement(VerticalStepper, null), variant === "circle" && /* @__PURE__ */ React45.createElement(CircleStepper, null));
}
var StepperProvider8, StepperControls8, StepperNavigation8, StepperPanel7, StepperStep8, StepperTitle9, HorizontalStepper, Content9, VerticalStepper, CircleStepper;
var init_stepper_variants = __esm({
  "registry/default/example/stepper-variants.tsx"() {
    "use strict";
    init_button();
    init_label();
    init_radio_group();
    init_stepper();
    ({
      StepperProvider: StepperProvider8,
      StepperControls: StepperControls8,
      StepperNavigation: StepperNavigation8,
      StepperPanel: StepperPanel7,
      StepperStep: StepperStep8,
      StepperTitle: StepperTitle9
    } = defineStepper2(
      {
        id: "step-1",
        title: "Step 1"
      },
      {
        id: "step-2",
        title: "Step 2"
      },
      {
        id: "step-3",
        title: "Step 3"
      }
    ));
    HorizontalStepper = () => {
      return /* @__PURE__ */ React45.createElement(StepperProvider8, { className: "space-y-4", variant: "horizontal" }, ({ methods }) => /* @__PURE__ */ React45.createElement(React45.Fragment, null, /* @__PURE__ */ React45.createElement(StepperNavigation8, null, methods.all.map((step) => /* @__PURE__ */ React45.createElement(
        StepperStep8,
        {
          key: step.id,
          of: step.id,
          onClick: () => methods.goTo(step.id)
        },
        /* @__PURE__ */ React45.createElement(StepperTitle9, null, step.title)
      ))), methods.switch({
        "step-1": (step) => /* @__PURE__ */ React45.createElement(Content9, { id: step.id }),
        "step-2": (step) => /* @__PURE__ */ React45.createElement(Content9, { id: step.id }),
        "step-3": (step) => /* @__PURE__ */ React45.createElement(Content9, { id: step.id })
      }), /* @__PURE__ */ React45.createElement(StepperControls8, null, !methods.isLast && /* @__PURE__ */ React45.createElement(
        Button,
        {
          variant: "secondary",
          onClick: methods.prev,
          disabled: methods.isFirst
        },
        "Previous"
      ), /* @__PURE__ */ React45.createElement(Button, { onClick: methods.isLast ? methods.reset : methods.next }, methods.isLast ? "Reset" : "Next"))));
    };
    Content9 = ({ id }) => {
      return /* @__PURE__ */ React45.createElement(StepperPanel7, { className: "h-[200px] content-center rounded border  p-8" }, /* @__PURE__ */ React45.createElement("p", { className: "text-xl font-normal" }, "Content for ", id));
    };
    VerticalStepper = () => {
      return /* @__PURE__ */ React45.createElement(StepperProvider8, { className: "space-y-4", variant: "vertical" }, ({ methods }) => /* @__PURE__ */ React45.createElement(React45.Fragment, null, /* @__PURE__ */ React45.createElement(StepperNavigation8, null, methods.all.map((step) => /* @__PURE__ */ React45.createElement(
        StepperStep8,
        {
          key: step.id,
          of: step.id,
          onClick: () => methods.goTo(step.id)
        },
        /* @__PURE__ */ React45.createElement(StepperTitle9, null, step.title),
        methods.when(step.id, () => /* @__PURE__ */ React45.createElement(StepperPanel7, { className: "h-[200px] content-center rounded border  p-8" }, /* @__PURE__ */ React45.createElement("p", { className: "text-xl font-normal" }, "Content for ", step.id)))
      ))), /* @__PURE__ */ React45.createElement(StepperControls8, null, !methods.isLast && /* @__PURE__ */ React45.createElement(
        Button,
        {
          variant: "secondary",
          onClick: methods.prev,
          disabled: methods.isFirst
        },
        "Previous"
      ), /* @__PURE__ */ React45.createElement(Button, { onClick: methods.isLast ? methods.reset : methods.next }, methods.isLast ? "Reset" : "Next"))));
    };
    CircleStepper = () => {
      return /* @__PURE__ */ React45.createElement(StepperProvider8, { className: "space-y-4", variant: "circle" }, ({ methods }) => /* @__PURE__ */ React45.createElement(React45.Fragment, null, /* @__PURE__ */ React45.createElement(StepperNavigation8, null, /* @__PURE__ */ React45.createElement(StepperStep8, { of: methods.current.id }, /* @__PURE__ */ React45.createElement(StepperTitle9, null, methods.current.title))), methods.when(methods.current.id, () => /* @__PURE__ */ React45.createElement(StepperPanel7, { className: "h-[200px] content-center rounded border  p-8" }, /* @__PURE__ */ React45.createElement("p", { className: "text-xl font-normal" }, "Content for ", methods.current.id))), /* @__PURE__ */ React45.createElement(StepperControls8, null, !methods.isLast && /* @__PURE__ */ React45.createElement(
        Button,
        {
          variant: "secondary",
          onClick: methods.prev,
          disabled: methods.isFirst
        },
        "Previous"
      ), /* @__PURE__ */ React45.createElement(Button, { onClick: methods.isLast ? methods.reset : methods.next }, methods.isLast ? "Reset" : "Next"))));
    };
  }
});

// registry/default/example/tel-input-custom-labels.tsx
var tel_input_custom_labels_exports = {};
__export(tel_input_custom_labels_exports, {
  default: () => TelInputCustomLabels
});
import * as React46 from "react";
function TelInputCustomLabels() {
  const [value, setValue] = React46.useState("");
  return /* @__PURE__ */ React46.createElement("div", { className: "flex flex-col gap-2" }, /* @__PURE__ */ React46.createElement(
    TelInput,
    {
      value,
      onChange: setValue,
      defaultCountry: "VN",
      labels: {
        VN: "Vietnam m\xE3i \u0111\u1EC9nh"
      },
      placeholder: "Custom country labels"
    }
  ), /* @__PURE__ */ React46.createElement("p", { className: "text-sm text-muted-foreground" }, "Phone number: ", value || "No phone number entered"));
}
var init_tel_input_custom_labels = __esm({
  "registry/default/example/tel-input-custom-labels.tsx"() {
    "use strict";
    "use client";
    init_tel_input();
  }
});

// registry/default/example/tel-input-default-country.tsx
var tel_input_default_country_exports = {};
__export(tel_input_default_country_exports, {
  default: () => TelInputDefaultCountry
});
import * as React47 from "react";
function TelInputDefaultCountry() {
  const [value, setValue] = React47.useState("");
  return /* @__PURE__ */ React47.createElement("div", { className: "flex flex-col gap-2" }, /* @__PURE__ */ React47.createElement(
    TelInput,
    {
      value,
      onChange: setValue,
      defaultCountry: "VN",
      placeholder: "Default country (Vietnam)"
    }
  ), /* @__PURE__ */ React47.createElement("p", { className: "text-sm text-muted-foreground" }, "Phone number: ", value || "No phone number entered"));
}
var init_tel_input_default_country = __esm({
  "registry/default/example/tel-input-default-country.tsx"() {
    "use strict";
    "use client";
    init_tel_input();
  }
});

// registry/default/example/tel-input-default.tsx
var tel_input_default_exports = {};
__export(tel_input_default_exports, {
  default: () => TelInputDefault
});
function TelInputDefault() {
  return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2" }, /* @__PURE__ */ React.createElement(TelInput, { defaultCountry: "VN" }));
}
var init_tel_input_default = __esm({
  "registry/default/example/tel-input-default.tsx"() {
    "use strict";
    "use client";
    init_tel_input();
  }
});

// registry/default/example/tel-input-international.tsx
var tel_input_international_exports = {};
__export(tel_input_international_exports, {
  default: () => TelInputInternational
});
import * as React48 from "react";
function TelInputInternational() {
  const [value, setValue] = React48.useState("");
  return /* @__PURE__ */ React48.createElement("div", { className: "flex flex-col gap-2" }, /* @__PURE__ */ React48.createElement(
    TelInput,
    {
      value,
      onChange: setValue,
      defaultCountry: "VN",
      international: true,
      placeholder: "Force international format"
    }
  ), /* @__PURE__ */ React48.createElement("p", { className: "text-sm text-muted-foreground" }, "Phone number: ", value || "No phone number entered"));
}
var init_tel_input_international = __esm({
  "registry/default/example/tel-input-international.tsx"() {
    "use strict";
    "use client";
    init_tel_input();
  }
});

// registry/default/example/tel-input-with-form.tsx
var tel_input_with_form_exports = {};
__export(tel_input_with_form_exports, {
  default: () => TelInputWithForm
});
import * as React49 from "react";
import * as z6 from "zod";
import { zodResolver as zodResolver6 } from "@hookform/resolvers/zod";
import { Send as Send4 } from "lucide-react";
import { useForm as useForm6 } from "react-hook-form";
function TelInputWithForm() {
  const { toast: toast2 } = useToast();
  const form = useForm6({
    resolver: zodResolver6(formSchema4),
    defaultValues: {
      phone: ""
    }
  });
  function onSubmit(data) {
    toast2({
      title: "Phone number submitted!",
      description: `Phone: ${data.phone}`
    });
  }
  return /* @__PURE__ */ React49.createElement(Form, { ...form }, /* @__PURE__ */ React49.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "w-full space-y-4" }, /* @__PURE__ */ React49.createElement(
    FormField,
    {
      control: form.control,
      name: "phone",
      render: ({ field }) => /* @__PURE__ */ React49.createElement(FormItem, null, /* @__PURE__ */ React49.createElement(FormLabel, null, "Phone Number"), /* @__PURE__ */ React49.createElement(FormControl, null, /* @__PURE__ */ React49.createElement(TelInput, { ...field, defaultCountry: "VN" })), /* @__PURE__ */ React49.createElement(FormMessage, null))
    }
  ), /* @__PURE__ */ React49.createElement(Button, { className: "w-full", type: "submit" }, "Submit", /* @__PURE__ */ React49.createElement(Send4, null))));
}
var formSchema4;
var init_tel_input_with_form = __esm({
  "registry/default/example/tel-input-with-form.tsx"() {
    "use strict";
    "use client";
    init_button();
    init_form();
    init_use_toast();
    init_tel_input();
    formSchema4 = z6.object({
      phone: z6.string().min(1, "Phone number is required")
    });
  }
});

// components/ui/card.tsx
import * as React50 from "react";
var Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter;
var init_card = __esm({
  "components/ui/card.tsx"() {
    "use strict";
    init_utils();
    Card = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React50.createElement(
      "div",
      {
        ref,
        className: cn(
          "rounded-xl border bg-card text-card-foreground shadow",
          className
        ),
        ...props
      }
    ));
    Card.displayName = "Card";
    CardHeader = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React50.createElement(
      "div",
      {
        ref,
        className: cn("flex flex-col space-y-1.5 p-6", className),
        ...props
      }
    ));
    CardHeader.displayName = "CardHeader";
    CardTitle = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React50.createElement(
      "div",
      {
        ref,
        className: cn("font-semibold leading-none tracking-tight", className),
        ...props
      }
    ));
    CardTitle.displayName = "CardTitle";
    CardDescription = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React50.createElement(
      "div",
      {
        ref,
        className: cn("text-muted-foreground text-sm", className),
        ...props
      }
    ));
    CardDescription.displayName = "CardDescription";
    CardContent = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React50.createElement("div", { ref, className: cn("p-6 pt-0", className), ...props }));
    CardContent.displayName = "CardContent";
    CardFooter = React50.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React50.createElement(
      "div",
      {
        ref,
        className: cn("flex items-center p-6 pt-0", className),
        ...props
      }
    ));
    CardFooter.displayName = "CardFooter";
  }
});

// registry/default/hooks/use-boolean.ts
var use_boolean_exports = {};
__export(use_boolean_exports, {
  useBoolean: () => useBoolean
});
import * as React51 from "react";
function useBoolean(defaultValue = false) {
  if (typeof defaultValue !== "boolean") {
    throw new Error("defaultValue must be `true` or `false`");
  }
  const [value, setValue] = React51.useState(defaultValue);
  const toggle = React51.useCallback(() => {
    setValue((x) => !x);
  }, []);
  const setTrue = React51.useCallback(() => {
    setValue(true);
  }, []);
  const setFalse = React51.useCallback(() => {
    setValue(false);
  }, []);
  return { value, setValue, setTrue, setFalse, toggle };
}
var init_use_boolean = __esm({
  "registry/default/hooks/use-boolean.ts"() {
    "use strict";
  }
});

// registry/default/example/use-boolean-default.tsx
var use_boolean_default_exports = {};
__export(use_boolean_default_exports, {
  default: () => UseBooleanDefault
});
function UseBooleanDefault() {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const customToggle = () => {
    setValue((x) => !x);
  };
  return /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "useBoolean Example"), /* @__PURE__ */ React.createElement(CardDescription, null, "A hook for managing boolean state with convenient control methods")), /* @__PURE__ */ React.createElement(CardContent, { className: "flex flex-col gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-center text-lg font-medium" }, "Current value:", " ", /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, value ? "True" : "False")), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2 justify-center" }, /* @__PURE__ */ React.createElement(Button, { onClick: setTrue, variant: "default", disabled: value }, "Set True"), /* @__PURE__ */ React.createElement(Button, { onClick: setFalse, variant: "default", disabled: !value }, "Set False"), /* @__PURE__ */ React.createElement(Button, { onClick: toggle, variant: "outline" }, "Toggle"), /* @__PURE__ */ React.createElement(Button, { onClick: customToggle, variant: "outline" }, "Custom Toggle"))));
}
var init_use_boolean_default = __esm({
  "registry/default/example/use-boolean-default.tsx"() {
    "use strict";
    "use client";
    init_button();
    init_card();
    init_use_boolean();
  }
});

// registry/default/hooks/use-click-outside.ts
var use_click_outside_exports = {};
__export(use_click_outside_exports, {
  useClickOutside: () => useClickOutside
});
import * as React52 from "react";
function useClickOutside(handler, events, nodes) {
  const ref = React52.useRef(null);
  React52.useEffect(() => {
    const listener = (event) => {
      const { target } = event ?? {};
      if (Array.isArray(nodes)) {
        const shouldIgnore = target?.hasAttribute("data-ignore-outside-clicks") || !document.body.contains(target) && target.tagName !== "HTML";
        const shouldTrigger = nodes.every(
          (node) => !!node && !event.composedPath().includes(node)
        );
        shouldTrigger && !shouldIgnore && handler();
      } else if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };
    (events || DEFAULT_EVENTS).forEach(
      (fn) => document.addEventListener(fn, listener)
    );
    return () => {
      (events || DEFAULT_EVENTS).forEach(
        (fn) => document.removeEventListener(fn, listener)
      );
    };
  }, [ref, handler, nodes]);
  return ref;
}
var DEFAULT_EVENTS;
var init_use_click_outside = __esm({
  "registry/default/hooks/use-click-outside.ts"() {
    "use strict";
    DEFAULT_EVENTS = ["mousedown", "touchstart"];
  }
});

// registry/default/example/use-click-outside-default.tsx
var use_click_outside_default_exports = {};
__export(use_click_outside_default_exports, {
  default: () => UseClickOutsideDefault
});
import * as React53 from "react";
function UseClickOutsideDefault() {
  const [opened, setOpened] = React53.useState(false);
  const ref = useClickOutside(() => setOpened(false));
  return /* @__PURE__ */ React53.createElement(React53.Fragment, null, /* @__PURE__ */ React53.createElement(Button, { onClick: () => setOpened(true) }, "Open dropdown"), opened && /* @__PURE__ */ React53.createElement("div", { ref, className: "absolute p-4 rounded-md border bg-background" }, /* @__PURE__ */ React53.createElement("span", null, "Click outside to close")));
}
var init_use_click_outside_default = __esm({
  "registry/default/example/use-click-outside-default.tsx"() {
    "use strict";
    "use client";
    init_button();
    init_use_click_outside();
  }
});

// registry/default/hooks/use-debounce.ts
var use_debounce_exports = {};
__export(use_debounce_exports, {
  useDebounce: () => useDebounce
});
import * as React54 from "react";
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React54.useState(value);
  React54.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}
var init_use_debounce = __esm({
  "registry/default/hooks/use-debounce.ts"() {
    "use strict";
  }
});

// registry/default/example/use-debounce-default.tsx
var use_debounce_default_exports = {};
__export(use_debounce_default_exports, {
  default: () => UseDebounceDefault
});
import { useState as useState21 } from "react";
function UseDebounceDefault() {
  const [inputValue, setInputValue] = useState21("");
  const debouncedValue = useDebounce(inputValue, 500);
  return /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "useDebounce Example"), /* @__PURE__ */ React.createElement(CardDescription, null, "A hook that delays updating a value until after a specified delay")), /* @__PURE__ */ React.createElement(CardContent, { className: "flex flex-col gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-medium" }, "Type something:"), /* @__PURE__ */ React.createElement(
    Input,
    {
      type: "text",
      value: inputValue,
      onChange: (e) => setInputValue(e.target.value),
      placeholder: "Type here..."
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-medium" }, "Input value (immediate):"), /* @__PURE__ */ React.createElement("div", { className: "p-2 border rounded-md bg-muted" }, inputValue)), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-sm font-medium" }, "Debounced value (500ms delay):"), /* @__PURE__ */ React.createElement("div", { className: "p-2 border rounded-md bg-muted" }, debouncedValue))));
}
var init_use_debounce_default = __esm({
  "registry/default/example/use-debounce-default.tsx"() {
    "use strict";
    "use client";
    init_card();
    init_input();
    init_use_debounce();
  }
});

// components/ui/textarea.tsx
import * as React55 from "react";
var Textarea;
var init_textarea = __esm({
  "components/ui/textarea.tsx"() {
    "use strict";
    init_utils();
    Textarea = React55.forwardRef(({ className, ...props }, ref) => {
      return /* @__PURE__ */ React55.createElement(
        "textarea",
        {
          className: cn(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          ),
          ref,
          ...props
        }
      );
    });
    Textarea.displayName = "Textarea";
  }
});

// registry/default/hooks/use-element-size.ts
var use_element_size_exports = {};
__export(use_element_size_exports, {
  useElementSize: () => useElementSize,
  useResizeObserver: () => useResizeObserver
});
import * as React56 from "react";
function useResizeObserver(options) {
  const frameID = React56.useRef(0);
  const ref = React56.useRef(null);
  const [rect, setRect] = React56.useState(defaultState);
  const observer = React56.useMemo(
    () => typeof window !== "undefined" ? new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        cancelAnimationFrame(frameID.current);
        frameID.current = requestAnimationFrame(() => {
          if (ref.current) {
            setRect(entry.contentRect);
          }
        });
      }
    }) : null,
    []
  );
  React56.useEffect(() => {
    if (ref.current) {
      observer?.observe(ref.current, options);
    }
    return () => {
      observer?.disconnect();
      if (frameID.current) {
        cancelAnimationFrame(frameID.current);
      }
    };
  }, [ref.current]);
  return [ref, rect];
}
function useElementSize(options) {
  const [ref, { width, height }] = useResizeObserver(options);
  return { ref, width, height };
}
var defaultState;
var init_use_element_size = __esm({
  "registry/default/hooks/use-element-size.ts"() {
    "use strict";
    defaultState = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    };
  }
});

// registry/default/example/use-element-size-default.tsx
var use_element_size_default_exports = {};
__export(use_element_size_default_exports, {
  default: () => UseElementSizeDefault
});
import * as React57 from "react";
function UseElementSizeDefault() {
  const { ref, width, height } = useElementSize();
  return /* @__PURE__ */ React57.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React57.createElement(
    Textarea,
    {
      ref,
      placeholder: "Type your message here.",
      className: "w-full"
    }
  ), /* @__PURE__ */ React57.createElement("div", null, "Width: ", width, ", height: ", height));
}
var init_use_element_size_default = __esm({
  "registry/default/example/use-element-size-default.tsx"() {
    "use strict";
    "use client";
    init_textarea();
    init_use_element_size();
  }
});

// registry/default/hooks/use-fullscreen.ts
var use_fullscreen_exports = {};
__export(use_fullscreen_exports, {
  useFullscreen: () => useFullscreen
});
import * as React58 from "react";
function getFullscreenElement() {
  const _document = window.document;
  const fullscreenElement = _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement;
  return fullscreenElement;
}
function exitFullscreen() {
  const _document = window.document;
  if (typeof _document.exitFullscreen === "function") {
    return _document.exitFullscreen();
  }
  if (typeof _document.msExitFullscreen === "function") {
    return _document.msExitFullscreen();
  }
  if (typeof _document.webkitExitFullscreen === "function") {
    return _document.webkitExitFullscreen();
  }
  if (typeof _document.mozCancelFullScreen === "function") {
    return _document.mozCancelFullScreen();
  }
  return null;
}
function enterFullScreen(element) {
  const _element = element;
  return _element.requestFullscreen?.() || _element.msRequestFullscreen?.() || _element.webkitEnterFullscreen?.() || _element.webkitRequestFullscreen?.() || _element.mozRequestFullscreen?.();
}
function addEvents(element, {
  onFullScreen,
  onError
}) {
  prefixes.forEach((prefix) => {
    element.addEventListener(`${prefix}fullscreenchange`, onFullScreen);
    element.addEventListener(`${prefix}fullscreenerror`, onError);
  });
  return () => {
    prefixes.forEach((prefix) => {
      element.removeEventListener(`${prefix}fullscreenchange`, onFullScreen);
      element.removeEventListener(`${prefix}fullscreenerror`, onError);
    });
  };
}
function useFullscreen() {
  const [fullscreen, setFullscreen] = React58.useState(false);
  const _ref = React58.useRef(null);
  const handleFullscreenChange = React58.useCallback(
    (event) => {
      setFullscreen(event.target === getFullscreenElement());
    },
    [setFullscreen]
  );
  const handleFullscreenError = React58.useCallback(
    (event) => {
      setFullscreen(false);
      console.error(
        `[@mantine/hooks] use-fullscreen: Error attempting full-screen mode method: ${event} (${event.target})`
      );
    },
    [setFullscreen]
  );
  const toggle = React58.useCallback(async () => {
    if (!getFullscreenElement()) {
      await enterFullScreen(_ref.current);
    } else {
      await exitFullscreen();
    }
  }, []);
  const ref = React58.useCallback((element) => {
    if (element === null) {
      _ref.current = window.document.documentElement;
    } else {
      _ref.current = element;
    }
  }, []);
  React58.useEffect(() => {
    if (!_ref.current && window.document) {
      _ref.current = window.document.documentElement;
      return addEvents(_ref.current, {
        onFullScreen: handleFullscreenChange,
        onError: handleFullscreenError
      });
    }
    if (_ref.current) {
      return addEvents(_ref.current, {
        onFullScreen: handleFullscreenChange,
        onError: handleFullscreenError
      });
    }
    return void 0;
  }, [_ref.current]);
  return { ref, toggle, fullscreen };
}
var prefixes;
var init_use_fullscreen = __esm({
  "registry/default/hooks/use-fullscreen.ts"() {
    "use strict";
    prefixes = ["", "webkit", "moz", "ms"];
  }
});

// registry/default/example/use-fullscreen-default.tsx
var use_fullscreen_default_exports = {};
__export(use_fullscreen_default_exports, {
  default: () => UseElementSizeDefault2
});
import * as React59 from "react";
function UseElementSizeDefault2() {
  const { toggle, fullscreen } = useFullscreen();
  return /* @__PURE__ */ React59.createElement(Button, { onClick: toggle, variant: fullscreen ? "destructive" : "default" }, fullscreen ? "Exit fullscreen" : "Enter fullscreen");
}
var init_use_fullscreen_default = __esm({
  "registry/default/example/use-fullscreen-default.tsx"() {
    "use strict";
    "use client";
    init_button();
    init_use_fullscreen();
  }
});

// registry/default/example/use-fullscreen-with-target.tsx
var use_fullscreen_with_target_exports = {};
__export(use_fullscreen_with_target_exports, {
  default: () => UseFullscreenWithTarget
});
import * as React60 from "react";
function UseFullscreenWithTarget() {
  const elementRef = React60.useRef(null);
  const { ref, toggle, fullscreen } = useFullscreen();
  React60.useEffect(() => {
    if (elementRef.current) {
      ref(elementRef.current);
    }
  }, [ref]);
  return /* @__PURE__ */ React60.createElement("div", { className: "flex flex-col gap-4 items-center justify-center" }, /* @__PURE__ */ React60.createElement(
    "img",
    {
      ref,
      src: "https://raw.githubusercontent.com/phamhuulocforwork/combillUI/master/public/images/demo.png",
      alt: "demo",
      width: 200,
      className: "rounded-md"
    }
  ), /* @__PURE__ */ React60.createElement(Button, { onClick: toggle, variant: fullscreen ? "destructive" : "default" }, fullscreen ? "Exit fullscreen" : "View in fullscreen"));
}
var init_use_fullscreen_with_target = __esm({
  "registry/default/example/use-fullscreen-with-target.tsx"() {
    "use strict";
    "use client";
    init_button();
    init_use_fullscreen();
  }
});

// components/ui/badge.tsx
import { cva as cva4 } from "class-variance-authority";
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ React.createElement("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
var badgeVariants;
var init_badge = __esm({
  "components/ui/badge.tsx"() {
    "use strict";
    init_utils();
    badgeVariants = cva4(
      "inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      {
        variants: {
          variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground"
          }
        },
        defaultVariants: {
          variant: "default"
        }
      }
    );
  }
});

// registry/default/hooks/use-mobile.ts
var use_mobile_exports = {};
__export(use_mobile_exports, {
  default: () => use_mobile_default
});
import * as React61 from "react";
import debounce from "lodash.debounce";
var useIsMobile, use_mobile_default;
var init_use_mobile = __esm({
  "registry/default/hooks/use-mobile.ts"() {
    "use strict";
    useIsMobile = () => {
      const [isMobile, setIsMobile] = React61.useState(false);
      React61.useLayoutEffect(() => {
        const updateSize = () => {
          setIsMobile(window.innerWidth < 768);
        };
        const debouncedUpdateSize = debounce(updateSize, 250);
        updateSize();
        window.addEventListener("resize", debouncedUpdateSize);
        return () => window.removeEventListener("resize", debouncedUpdateSize);
      }, []);
      return isMobile;
    };
    use_mobile_default = useIsMobile;
  }
});

// registry/default/example/use-mobile-default.tsx
var use_mobile_default_exports = {};
__export(use_mobile_default_exports, {
  default: () => UseMobileDemo
});
function UseMobileDemo() {
  const isMobile = use_mobile_default();
  return /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "useMobile Example"), /* @__PURE__ */ React.createElement(CardDescription, null, "A hook that detects if the current device is a mobile device")), /* @__PURE__ */ React.createElement(CardContent, { className: "flex flex-col gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-lg font-medium mb-2" }, "Current device type:"), isMobile ? /* @__PURE__ */ React.createElement(Badge, { variant: "default", className: "text-md px-3 py-1" }, "Mobile Device") : /* @__PURE__ */ React.createElement(Badge, { variant: "outline", className: "text-md px-3 py-1" }, "Desktop Device")), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-muted-foreground text-center" }, /* @__PURE__ */ React.createElement("p", null, "Resize your browser window to see the value change."), /* @__PURE__ */ React.createElement("p", { className: "mt-1" }, "(Mobile is detected when width < 768px)"))));
}
var init_use_mobile_default = __esm({
  "registry/default/example/use-mobile-default.tsx"() {
    "use strict";
    "use client";
    init_badge();
    init_card();
    init_use_mobile();
  }
});

// registry/default/snippets/avatar-default.tsx
var avatar_default_exports = {};
__export(avatar_default_exports, {
  default: () => AvatarDefault
});
function AvatarDefault() {
  return /* @__PURE__ */ React.createElement(Avatar, null, /* @__PURE__ */ React.createElement(
    AvatarImage,
    {
      src: "https://github.com/phamhuulocforwork.png",
      alt: "@phamhuulocforwork"
    }
  ), /* @__PURE__ */ React.createElement(AvatarFallback, null, "HL"));
}
var init_avatar_default = __esm({
  "registry/default/snippets/avatar-default.tsx"() {
    "use strict";
    init_avatar();
  }
});

// registry/default/snippets/avatar-group-max.tsx
var avatar_group_max_exports = {};
__export(avatar_group_max_exports, {
  default: () => AvatarGroupMaxAvatarDemo
});
import * as React62 from "react";
function AvatarGroupMaxAvatarDemo() {
  return /* @__PURE__ */ React62.createElement(AvatarGroup, { className: "flex items-center", max: 3 }, /* @__PURE__ */ React62.createElement(Avatar, { className: "-ml-2 first:ml-0 cursor-pointer" }, /* @__PURE__ */ React62.createElement(
    AvatarImage,
    {
      src: "https://github.com/phamhuulocforwork.png",
      alt: "@phamhuulocforwork"
    }
  ), /* @__PURE__ */ React62.createElement(AvatarFallback, { className: "bg-indigo-500 text-white" }, "HL")), /* @__PURE__ */ React62.createElement(Avatar, { className: "-ml-2 first:ml-0 cursor-pointer" }, /* @__PURE__ */ React62.createElement(AvatarFallback, { className: "bg-green-600 text-white" }, "VN")), /* @__PURE__ */ React62.createElement(Avatar, { className: "-ml-2 first:ml-0 cursor-pointer" }, /* @__PURE__ */ React62.createElement(AvatarFallback, { className: "bg-red-500 text-white" }, "AB")), /* @__PURE__ */ React62.createElement(Avatar, { className: "-ml-2 first:ml-0 cursor-pointer" }, /* @__PURE__ */ React62.createElement(AvatarFallback, { className: "bg-indigo-500 text-white" }, "VK")), /* @__PURE__ */ React62.createElement(Avatar, { className: "-ml-2 first:ml-0 cursor-pointer" }, /* @__PURE__ */ React62.createElement(AvatarFallback, { className: "bg-orange-500 text-white" }, "RS")));
}
var AvatarGroup;
var init_avatar_group_max = __esm({
  "registry/default/snippets/avatar-group-max.tsx"() {
    "use strict";
    init_avatar();
    init_utils();
    AvatarGroup = ({
      children,
      max,
      className,
      ...props
    }) => {
      const totalAvatars = React62.Children.count(children);
      const displayedAvatars = React62.Children.toArray(children).slice(0, max).reverse();
      const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;
      return /* @__PURE__ */ React62.createElement(
        "div",
        {
          className: cn("flex items-center flex-row-reverse", className),
          ...props
        },
        remainingAvatars > 0 && /* @__PURE__ */ React62.createElement(Avatar, { className: "-ml-2 hover:z-10 relative ring-2 ring-background" }, /* @__PURE__ */ React62.createElement(AvatarFallback, { className: "bg-muted-foreground text-white" }, "+", remainingAvatars)),
        displayedAvatars.map((avatar, index) => {
          if (!React62.isValidElement(avatar)) return null;
          return /* @__PURE__ */ React62.createElement("div", { key: index, className: "-ml-2 hover:z-10 relative" }, React62.cloneElement(avatar, {
            className: "ring-2 ring-background"
          }));
        })
      );
    };
  }
});

// registry/default/snippets/avatar-group.tsx
var avatar_group_exports = {};
__export(avatar_group_exports, {
  default: () => AvatarGroupDemo
});
import * as React63 from "react";
function AvatarGroupDemo() {
  return /* @__PURE__ */ React63.createElement(AvatarGroup2, null, /* @__PURE__ */ React63.createElement(Avatar, { className: "-ml-2 first:ml-0 cursor-pointer" }, /* @__PURE__ */ React63.createElement(
    AvatarImage,
    {
      src: "https://github.com/phamhuulocforwork.png",
      alt: "@phamhuulocforwork"
    }
  ), /* @__PURE__ */ React63.createElement(AvatarFallback, { className: "bg-indigo-500 text-white" }, "HL")), /* @__PURE__ */ React63.createElement(Avatar, { className: "-ml-2 first:ml-0 cursor-pointer" }, /* @__PURE__ */ React63.createElement(AvatarFallback, { className: "bg-green-600 text-white" }, "VN")), /* @__PURE__ */ React63.createElement(Avatar, { className: "-ml-2 first:ml-0 cursor-pointer" }, /* @__PURE__ */ React63.createElement(AvatarFallback, { className: "bg-red-500 text-white" }, "AB")));
}
var AvatarGroup2;
var init_avatar_group = __esm({
  "registry/default/snippets/avatar-group.tsx"() {
    "use strict";
    init_avatar();
    init_utils();
    AvatarGroup2 = ({
      children,
      max,
      className,
      ...props
    }) => {
      const totalAvatars = React63.Children.count(children);
      const displayedAvatars = React63.Children.toArray(children).slice(0, max).reverse();
      const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;
      return /* @__PURE__ */ React63.createElement(
        "div",
        {
          className: cn("flex items-center flex-row-reverse", className),
          ...props
        },
        remainingAvatars > 0 && /* @__PURE__ */ React63.createElement(Avatar, { className: "-ml-2 hover:z-10 relative ring-2 ring-background" }, /* @__PURE__ */ React63.createElement(AvatarFallback, { className: "bg-muted-foreground text-white" }, "+", remainingAvatars)),
        displayedAvatars.map((avatar, index) => {
          if (!React63.isValidElement(avatar)) return null;
          return /* @__PURE__ */ React63.createElement("div", { key: index, className: "-ml-2 hover:z-10 relative" }, React63.cloneElement(avatar, {
            className: "ring-2 ring-background"
          }));
        })
      );
    };
  }
});

// components/ui/hover-card.tsx
import * as React64 from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
var HoverCard, HoverCardTrigger, HoverCardContent;
var init_hover_card = __esm({
  "components/ui/hover-card.tsx"() {
    "use strict";
    "use client";
    init_utils();
    HoverCard = HoverCardPrimitive.Root;
    HoverCardTrigger = HoverCardPrimitive.Trigger;
    HoverCardContent = React64.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ React64.createElement(
      HoverCardPrimitive.Content,
      {
        ref,
        align,
        sideOffset,
        className: cn(
          "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        ),
        ...props
      }
    ));
    HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
  }
});

// registry/default/snippets/avatar-hover-card.tsx
var avatar_hover_card_exports = {};
__export(avatar_hover_card_exports, {
  default: () => AvatarHoverCard
});
import { CalendarIcon } from "lucide-react";
function AvatarHoverCard() {
  return /* @__PURE__ */ React.createElement(HoverCard, null, /* @__PURE__ */ React.createElement(HoverCardTrigger, { className: "cursor-pointer" }, /* @__PURE__ */ React.createElement(Avatar, null, /* @__PURE__ */ React.createElement(
    AvatarImage,
    {
      src: "https://github.com/phamhuulocforwork.png",
      alt: "@phamhuulocforwork"
    }
  ), /* @__PURE__ */ React.createElement(AvatarFallback, null, "HL"))), /* @__PURE__ */ React.createElement(HoverCardContent, { className: "w-full max-w-xs" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between space-x-4" }, /* @__PURE__ */ React.createElement(Avatar, null, /* @__PURE__ */ React.createElement(
    AvatarImage,
    {
      src: "https://github.com/phamhuulocforwork.png",
      alt: "@phamhuulocforwork"
    }
  ), /* @__PURE__ */ React.createElement(AvatarFallback, null, "HL")), /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-semibold" }, "@phamhuulocforwork"), /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "I'm currently studying at University (I stay up late and my hair is getting thinner and thinner. Do you think I'm bald? xD)"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center pt-2" }, /* @__PURE__ */ React.createElement(CalendarIcon, { className: "mr-2 h-4 w-4 opacity-70" }), " ", /* @__PURE__ */ React.createElement("span", { className: "text-xs text-muted-foreground" }, "Joined February 2025"))))));
}
var init_avatar_hover_card = __esm({
  "registry/default/snippets/avatar-hover-card.tsx"() {
    "use strict";
    init_avatar();
    init_hover_card();
  }
});

// registry/default/snippets/avatar-with-ring.tsx
var avatar_with_ring_exports = {};
__export(avatar_with_ring_exports, {
  default: () => AvatarWithRing
});
function AvatarWithRing() {
  return /* @__PURE__ */ React.createElement(Avatar, { className: "ring-2 ring-green-500 ring-offset-[3px] ring-offset-background" }, /* @__PURE__ */ React.createElement(
    AvatarImage,
    {
      src: "https://github.com/phamhuulocforwork.png",
      alt: "@phamhuulocforwork"
    }
  ), /* @__PURE__ */ React.createElement(AvatarFallback, null, "HL"));
}
var init_avatar_with_ring = __esm({
  "registry/default/snippets/avatar-with-ring.tsx"() {
    "use strict";
    init_avatar();
  }
});

// registry/default/snippets/avatar-with-status.tsx
var avatar_with_status_exports = {};
__export(avatar_with_status_exports, {
  default: () => AvatarWithStatus
});
function AvatarWithStatus() {
  return /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Avatar, null, /* @__PURE__ */ React.createElement(
    AvatarImage,
    {
      src: "https://github.com/phamhuulocforwork.png",
      alt: "@phamhuulocforwork"
    }
  ), /* @__PURE__ */ React.createElement(AvatarFallback, null, "CN")), /* @__PURE__ */ React.createElement("div", { className: "h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-green-500 absolute bottom-0 right-0" })), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Avatar, null, /* @__PURE__ */ React.createElement(
    AvatarImage,
    {
      src: "https://github.com/phamhuulocforwork.png",
      alt: "@phamhuulocforwork"
    }
  ), /* @__PURE__ */ React.createElement(AvatarFallback, null, "CN")), /* @__PURE__ */ React.createElement("div", { className: "h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-red-500 absolute bottom-0 right-0" })), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Avatar, null, /* @__PURE__ */ React.createElement(
    AvatarImage,
    {
      src: "https://github.com/phamhuulocforwork.png",
      alt: "@phamhuulocforwork"
    }
  ), /* @__PURE__ */ React.createElement(AvatarFallback, null, "CN")), /* @__PURE__ */ React.createElement("div", { className: "h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-yellow-500 absolute bottom-0 right-0" })), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Avatar, null, /* @__PURE__ */ React.createElement(
    AvatarImage,
    {
      src: "https://github.com/phamhuulocforwork.png",
      alt: "@phamhuulocforwork"
    }
  ), /* @__PURE__ */ React.createElement(AvatarFallback, null, "CN")), /* @__PURE__ */ React.createElement("div", { className: "h-2.5 w-2.5 ring-[2px] ring-background border-2 border-muted-foreground rounded-full bg-background absolute bottom-0 right-0" })));
}
var init_avatar_with_status = __esm({
  "registry/default/snippets/avatar-with-status.tsx"() {
    "use strict";
    init_avatar();
  }
});

// components/ui/tooltip.tsx
import * as React65 from "react";
import * as TooltipPrimitive2 from "@radix-ui/react-tooltip";
var TooltipProvider, Tooltip, TooltipTrigger, TooltipContent;
var init_tooltip = __esm({
  "components/ui/tooltip.tsx"() {
    "use strict";
    "use client";
    init_utils();
    TooltipProvider = TooltipPrimitive2.Provider;
    Tooltip = TooltipPrimitive2.Root;
    TooltipTrigger = TooltipPrimitive2.Trigger;
    TooltipContent = React65.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ React65.createElement(TooltipPrimitive2.Portal, null, /* @__PURE__ */ React65.createElement(
      TooltipPrimitive2.Content,
      {
        ref,
        sideOffset,
        className: cn(
          "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 animate-in overflow-hidden rounded-md bg-primary px-3 py-1.5 text-primary-foreground text-xs data-[state=closed]:animate-out",
          className
        ),
        ...props
      }
    )));
    TooltipContent.displayName = TooltipPrimitive2.Content.displayName;
  }
});

// registry/default/snippets/tooltip-with-arrow.tsx
var tooltip_with_arrow_exports = {};
__export(tooltip_with_arrow_exports, {
  default: () => WithArrowTooltip
});
import { TooltipArrow } from "@radix-ui/react-tooltip";
function WithArrowTooltip() {
  return /* @__PURE__ */ React.createElement(TooltipProvider, null, /* @__PURE__ */ React.createElement(Tooltip, null, /* @__PURE__ */ React.createElement(TooltipTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(Button, { variant: "outline" }, "Hover")), /* @__PURE__ */ React.createElement(TooltipContent, null, /* @__PURE__ */ React.createElement("p", null, "Tooltip with arrow"), /* @__PURE__ */ React.createElement(TooltipArrow, { className: "fill-foreground" }))));
}
var init_tooltip_with_arrow = __esm({
  "registry/default/snippets/tooltip-with-arrow.tsx"() {
    "use strict";
    init_button();
    init_tooltip();
  }
});

// registry/default/hooks/use-mounted.ts
var use_mounted_exports = {};
__export(use_mounted_exports, {
  useMounted: () => useMounted
});
import { useEffect as useEffect11, useState as useState25 } from "react";
function useMounted() {
  const [mounted, setMounted] = useState25(false);
  useEffect11(() => setMounted(true), []);
  return mounted;
}
var init_use_mounted = __esm({
  "registry/default/hooks/use-mounted.ts"() {
    "use strict";
  }
});

// source.config.ts
import { getHighlighter } from "@shikijs/compat";
import { rehypeCode, remarkGfm } from "fumadocs-core/mdx-plugins";
import { fileGenerator, remarkDocGen, remarkInstall } from "fumadocs-docgen";
import { defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkMath from "remark-math";
import { z as z7 } from "zod";

// lib/rehype-component.ts
import fs from "node:fs";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

// __registry__/index.tsx
import * as React66 from "react";
var Index = {
  default: {
    "animated-label-input": {
      name: "animated-label-input",
      description: "",
      type: "registry:ui",
      files: [
        {
          "path": "registry/default/ui/animated-label-input.tsx",
          "content": `import * as React from "react";\r
\r
import { Input } from "@/components/ui/input";\r
import { Label } from "@/components/ui/label";\r
\r
import { cn } from "@/lib/utils";\r
\r
const AnimatedLabel = React.forwardRef<\r
  React.ElementRef<typeof Label>,\r
  React.ComponentPropsWithoutRef<typeof Label>\r
>(({ className, ...props }, ref) => {\r
  return (\r
    <Label\r
      className={cn(\r
        "peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-1.5 z-10 origin-[0] -translate-y-4 scale-[0.85] transform bg-background px-2 text-sm text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-[0.85] peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 cursor-text",\r
        className,\r
      )}\r
      ref={ref}\r
      {...props}\r
    />\r
  );\r
});\r
AnimatedLabel.displayName = "AnimatedLabel";\r
\r
type AnimatedLabelInputProps = InputProps & { label?: string };\r
\r
const AnimatedLabelInput = React.forwardRef<\r
  React.ElementRef<typeof AnimatedInput>,\r
  React.PropsWithoutRef<AnimatedLabelInputProps>\r
>(({ id, label, ...props }, ref) => {\r
  const inputRef = React.useRef<HTMLInputElement>(null);\r
\r
  React.useImperativeHandle(ref, () => inputRef.current!);\r
\r
  const handleLabelClick = () => {\r
    if (inputRef.current) {\r
      inputRef.current.focus();\r
    }\r
  };\r
\r
  return (\r
    <div className='relative '>\r
      <AnimatedInput ref={inputRef} id={id} {...props} />\r
      <AnimatedLabel htmlFor={id} onClick={handleLabelClick}>\r
        {label}\r
      </AnimatedLabel>\r
    </div>\r
  );\r
});\r
AnimatedLabelInput.displayName = "AnimatedLabelInput";\r
\r
export interface InputProps\r
  extends React.InputHTMLAttributes<HTMLInputElement> {}\r
\r
const AnimatedInput = React.forwardRef<HTMLInputElement, InputProps>(\r
  ({ className, ...props }, ref) => {\r
    return (\r
      <Input\r
        placeholder=' '\r
        className={cn("peer", className)}\r
        ref={ref}\r
        {...props}\r
      />\r
    );\r
  },\r
);\r
AnimatedInput.displayName = "AnimatedInput";\r
\r
export { AnimatedLabelInput, AnimatedLabel, AnimatedInput };\r
`,
          "type": "registry:ui"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_animated_label_input(), animated_label_input_exports)))
    },
    "animated-tooltip": {
      name: "animated-tooltip",
      description: "",
      type: "registry:ui",
      files: [
        {
          "path": "registry/default/ui/animated-tooltip.tsx",
          "content": '"use client";\r\n\r\nimport * as React from "react";\r\n\r\nimport * as TooltipPrimitive from "@radix-ui/react-tooltip";\r\nimport { motion, useMotionValue, useSpring, useTransform } from "framer-motion";\r\n\r\nimport { cn } from "@/lib/utils";\r\n\r\nconst AnimatedTooltipProvider = TooltipPrimitive.Provider;\r\nconst AnimatedTooltip = TooltipPrimitive.Root;\r\nconst AnimatedTooltipTrigger = TooltipPrimitive.Trigger;\r\n\r\nconst springConfig = { stiffness: 100, damping: 5 };\r\n\r\nconst AnimatedTooltipContent = React.forwardRef<\r\n  React.ElementRef<typeof TooltipPrimitive.Content>,\r\n  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>\r\n>(({ className, sideOffset = 4, ...props }, ref) => {\r\n  const x = useMotionValue(0);\r\n  const rotate = useSpring(\r\n    useTransform(x, [-100, 100], [-45, 45]),\r\n    springConfig,\r\n  );\r\n  const translateX = useSpring(\r\n    useTransform(x, [-100, 100], [-50, 50]),\r\n    springConfig,\r\n  );\r\n\r\n  const handleMouseMove = (event: any) => {\r\n    const halfWidth = event.currentTarget.offsetWidth / 2;\r\n    x.set(event.nativeEvent.offsetX - halfWidth);\r\n  };\r\n\r\n  return (\r\n    <TooltipPrimitive.Portal>\r\n      <TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} {...props}>\r\n        <motion.div\r\n          onMouseMove={handleMouseMove}\r\n          initial={{ opacity: 0, y: 20, scale: 0.6 }}\r\n          animate={{\r\n            opacity: 1,\r\n            y: 0,\r\n            scale: 1,\r\n            transition: {\r\n              type: "spring",\r\n              stiffness: 260,\r\n              damping: 10,\r\n            },\r\n          }}\r\n          exit={{ opacity: 0, y: 20, scale: 0.6 }}\r\n          style={{\r\n            translateX: translateX,\r\n            rotate: rotate,\r\n          }}\r\n          className={cn(\r\n            "flex flex-col items-center justify-center rounded-md z-50 shadow-xl bg-primary px-3 py-1.5 text-primary-foreground ",\r\n            className,\r\n          )}\r\n        >\r\n          {props.children}\r\n        </motion.div>\r\n      </TooltipPrimitive.Content>\r\n    </TooltipPrimitive.Portal>\r\n  );\r\n});\r\nAnimatedTooltipContent.displayName = TooltipPrimitive.Content.displayName;\r\n\r\nexport {\r\n  AnimatedTooltip,\r\n  AnimatedTooltipTrigger,\r\n  AnimatedTooltipContent,\r\n  AnimatedTooltipProvider,\r\n};\r\n',
          "type": "registry:ui"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_animated_tooltip(), animated_tooltip_exports)))
    },
    "combobox-input": {
      name: "combobox-input",
      description: "",
      type: "registry:ui",
      files: [
        {
          "path": "registry/default/ui/combobox-input.tsx",
          "content": `"use client";\r
\r
import * as React from "react";\r
\r
import { Check } from "lucide-react";\r
import { type PopperProps, usePopper } from "react-popper";\r
\r
import {\r
  Command,\r
  CommandEmpty,\r
  CommandGroup,\r
  CommandInput,\r
  CommandItem,\r
  CommandList,\r
  CommandLoading,\r
} from "@/components/ui/command";\r
import { Skeleton } from "@/components/ui/skeleton";\r
\r
import { cn } from "@/lib/utils";\r
\r
import { useControllableState } from "@/registry/default/hooks/use-controllable-state";\r
\r
interface Option {\r
  label: string;\r
  value: string;\r
  icon?: React.ComponentType<{ className?: string }>;\r
  withCount?: boolean;\r
}\r
\r
const nonPrintableKeys = [\r
  "Tab",\r
  "Control",\r
  "Alt",\r
  "Shift",\r
  "Delete",\r
  "Home",\r
  "End",\r
  "PageUp",\r
  "PageDown",\r
  "Insert",\r
  "ArrowLeft",\r
  "ArrowRight",\r
];\r
\r
interface ComboboxInputProps\r
  extends Omit<\r
    React.ComponentPropsWithoutRef<typeof CommandInput>,\r
    "defaultValue" | "value" | "onValueChange"\r
  > {\r
  options: Option[];\r
  input?: string;\r
  onInputChange?: (value: string) => void;\r
  defaultValue?: Option;\r
  value?: Option;\r
  onValueChange?: (option: Option) => void;\r
  emptyMessage?: string;\r
  immediate?: boolean;\r
  placement?: PopperProps<HTMLElement>["placement"];\r
  alignOffset?: number;\r
  sideOffset?: number;\r
  loading?: boolean;\r
}\r
\r
export function ComboboxInput({\r
  options,\r
  input,\r
  onInputChange,\r
  defaultValue,\r
  value,\r
  onValueChange,\r
  placeholder,\r
  emptyMessage = "No results found",\r
  placement = "bottom-start",\r
  alignOffset = 0,\r
  sideOffset = 4,\r
  immediate = false,\r
  loading = false,\r
  className,\r
  ...props\r
}: ComboboxInputProps) {\r
  const inputRef = React.useRef<HTMLInputElement>(null);\r
  const [open, setOpen] = React.useState(false);\r
  const [controlledInput, setControlledInput] = useControllableState({\r
    prop: input,\r
    onChange: onInputChange,\r
  });\r
\r
  const [currentOption, setCurrentOption] = useControllableState({\r
    defaultProp: defaultValue,\r
    prop: value,\r
    onChange: onValueChange,\r
  });\r
\r
  const [referenceElement, setReferenceElement] =\r
    React.useState<HTMLDivElement | null>(null);\r
  const [popperElement, setPopperElement] =\r
    React.useState<HTMLDivElement | null>(null);\r
  const { styles, attributes } = usePopper(referenceElement, popperElement, {\r
    modifiers: [\r
      { name: "offset", options: { offset: [alignOffset, sideOffset] } },\r
    ],\r
    placement,\r
  });\r
\r
  const onKeyDown = React.useCallback(\r
    (event: React.KeyboardEvent<HTMLDivElement>) => {\r
      const inputElement = inputRef.current;\r
      if (!inputElement) return;\r
\r
      if (nonPrintableKeys.includes(event.key)) return;\r
\r
      if (event.key === "Backspace" && inputElement.value === "" && !open) {\r
        if (open) setOpen(false);\r
        return;\r
      }\r
\r
      if (event.key === "Escape") {\r
        if (currentOption && inputElement.value === currentOption.label) {\r
          if (open) setOpen(false);\r
          return;\r
        }\r
\r
        if (inputElement.value === "") {\r
          if (open) setOpen(false);\r
          return;\r
        }\r
\r
        setControlledInput("");\r
        setOpen(false);\r
        setCurrentOption(undefined);\r
        inputRef.current?.focus();\r
      }\r
\r
      if (event.key === "Enter" && inputElement.value !== "") {\r
        const selectedOption = options.find(\r
          (option) => option.label === inputElement.value,\r
        );\r
        setCurrentOption(selectedOption);\r
      }\r
\r
      if (!open) setOpen(true);\r
    },\r
    [currentOption, open, options, setControlledInput, setCurrentOption],\r
  );\r
\r
  const onBlur = React.useCallback(() => {\r
    setOpen(false);\r
    setControlledInput(currentOption?.label ?? "");\r
  }, [currentOption?.label, setControlledInput]);\r
\r
  const onSelect = React.useCallback(\r
    (selectedOption: Option) => {\r
      setControlledInput(selectedOption.label);\r
      setCurrentOption(selectedOption);\r
      setOpen(false);\r
    },\r
    [setControlledInput, setCurrentOption],\r
  );\r
\r
  return (\r
    <Command\r
      ref={setReferenceElement}\r
      className='relative overflow-visible [&_[cmdk-input-wrapper]]:rounded-md [&_[cmdk-input-wrapper]]:border'\r
      onKeyDown={onKeyDown}\r
      {...attributes.reference}\r
    >\r
      <CommandInput\r
        ref={inputRef}\r
        value={controlledInput}\r
        onValueChange={(value) => {\r
          if (loading) return;\r
\r
          setControlledInput(value);\r
          if (value === "") {\r
            setCurrentOption(undefined);\r
          }\r
        }}\r
        onBlur={onBlur}\r
        onFocus={() => {\r
          if (immediate) {\r
            setOpen(true);\r
          }\r
        }}\r
        placeholder={placeholder}\r
        className={cn("border-b-0", className)}\r
        {...props}\r
      />\r
      <CommandList\r
        ref={setPopperElement}\r
        data-state={open ? "open" : "closed"}\r
        style={styles.popper}\r
        className={cn(\r
          "z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:visible data-[state=closed]:invisible data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",\r
          "data-[popper-placement=bottom-end]:translate-x-1/2 data-[popper-placement=bottom-start]:-translate-x-1/2 data-[popper-placement=left-end]:translate-y-1/2 data-[popper-placement=left-start]:-translate-y-1/2 data-[popper-placement=right-end]:translate-y-1/2 data-[popper-placement=right-start]:-translate-y-1/2 data-[popper-placement=top-end]:translate-x-1/2 data-[popper-placement=top-start]:-translate-x-1/2 data-[popper-placement=bottom-end]:slide-in-from-top-2 data-[popper-placement=bottom-start]:slide-in-from-top-2 data-[popper-placement=bottom]:slide-in-from-top-2 data-[popper-placement=left-end]:slide-in-from-right-2 data-[popper-placement=left-start]:slide-in-from-right-2 data-[popper-placement=left]:slide-in-from-right-2 data-[popper-placement=right-end]:slide-in-from-left-2 data-[popper-placement=right-start]:slide-in-from-left-2 data-[popper-placement=right]:slide-in-from-left-2 data-[popper-placement=top-end]:slide-in-from-bottom-2 data-[popper-placement=top-start]:slide-in-from-bottom-2 data-[popper-placement=top]:slide-in-from-bottom-2",\r
        )}\r
        {...attributes.popper}\r
      >\r
        {loading ? (\r
          <CommandLoading className='p-1'>\r
            <Skeleton className='h-8 w-full' />\r
          </CommandLoading>\r
        ) : null}\r
        {options.length > 0 && !loading ? (\r
          <CommandGroup>\r
            {options.map((option) => {\r
              const isSelected = currentOption?.value === option.value;\r
\r
              return (\r
                <CommandItem\r
                  key={option.value}\r
                  value={option.label}\r
                  onMouseDown={(event) => {\r
                    event.preventDefault();\r
                    event.stopPropagation();\r
                  }}\r
                  onSelect={() => onSelect(option)}\r
                  className={cn("flex w-full items-center gap-2", {\r
                    "pl-8": !isSelected,\r
                  })}\r
                >\r
                  {isSelected ? (\r
                    <Check className='w-4' aria-hidden='true' />\r
                  ) : null}\r
                  {option.label}\r
                </CommandItem>\r
              );\r
            })}\r
          </CommandGroup>\r
        ) : null}\r
        {loading ? null : <CommandEmpty>{emptyMessage}</CommandEmpty>}\r
      </CommandList>\r
    </Command>\r
  );\r
}\r
`,
          "type": "registry:ui"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_combobox_input(), combobox_input_exports)))
    },
    "labeled-switch": {
      name: "labeled-switch",
      description: "",
      type: "registry:ui",
      files: [
        {
          "path": "registry/default/ui/labeled-switch.tsx",
          "content": `"use client";\r
\r
import * as React from "react";\r
\r
import * as SwitchPrimitives from "@radix-ui/react-switch";\r
import { motion } from "framer-motion";\r
\r
import { cn } from "@/lib/utils";\r
\r
interface LabeledSwitchProps {\r
  firstLabel: React.ReactNode;\r
  secondLabel: React.ReactNode;\r
  selected: boolean;\r
  onToggle: (checked: boolean) => void;\r
  className?: string;\r
}\r
\r
const LabeledSwitch = React.forwardRef<\r
  React.ElementRef<typeof SwitchPrimitives.Root>,\r
  LabeledSwitchProps\r
>(\r
  (\r
    { className, firstLabel, secondLabel, selected, onToggle, ...props },\r
    ref,\r
  ) => {\r
    return (\r
      <SwitchPrimitives.Root\r
        className={cn(\r
          "relative flex w-fit cursor-pointer items-center rounded-full ring-2 ring-input transition-colors",\r
          className,\r
        )}\r
        ref={ref}\r
        checked={selected}\r
        onCheckedChange={onToggle}\r
      >\r
        <LabeledSwitchButton selected={selected}>\r
          {firstLabel}\r
        </LabeledSwitchButton>\r
        <LabeledSwitchButton selected={!selected}>\r
          {secondLabel}\r
        </LabeledSwitchButton>\r
        <SwitchPrimitives.Thumb\r
          className={cn(\r
            "absolute inset-0 w-full z-0 flex data-[state=unchecked]:justify-start data-[state=checked]:justify-end",\r
          )}\r
        >\r
          <motion.span\r
            layout\r
            transition={{ type: "spring", damping: 15, stiffness: 250 }}\r
            className='h-full w-1/2 rounded-full bg-muted'\r
          />\r
        </SwitchPrimitives.Thumb>\r
      </SwitchPrimitives.Root>\r
    );\r
  },\r
);\r
LabeledSwitch.displayName = "LabeledSwitch";\r
\r
const LabeledSwitchButton = ({\r
  children,\r
  selected,\r
}: {\r
  children: React.ReactNode;\r
  selected: boolean;\r
}) => (\r
  <div\r
    className={cn(\r
      "relative z-10 flex w-full items-center justify-center gap-2 px-3 py-3 text-xs font-bold transition-colors md:py-1.5 md:pl-3 md:pr-3.5",\r
      selected ? "text-primary" : "text-muted-foreground",\r
    )}\r
    onMouseDown={(e) => e.preventDefault()}\r
  >\r
    <span className='relative z-10'>{children}</span>\r
  </div>\r
);\r
\r
export { LabeledSwitch };\r
`,
          "type": "registry:ui"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_labeled_switch(), labeled_switch_exports)))
    },
    "range-slider": {
      name: "range-slider",
      description: "",
      type: "registry:ui",
      files: [
        {
          "path": "registry/default/ui/range-slider.tsx",
          "content": '"use client";\r\n\r\nimport * as React from "react";\r\n\r\nimport * as SliderPrimitive from "@radix-ui/react-slider";\r\n\r\nimport { cn } from "@/lib/utils";\r\n\r\ninterface RangeSliderProps\r\n  extends React.ComponentProps<typeof SliderPrimitive.Root> {\r\n  labelPosition?: "top" | "bottom";\r\n  label?: (value: number | undefined) => React.ReactNode;\r\n  orientation?: "horizontal" | "vertical";\r\n}\r\n\r\nconst RangeSlider = React.forwardRef<\r\n  React.ElementRef<typeof SliderPrimitive.Root>,\r\n  RangeSliderProps\r\n>(\r\n  (\r\n    {\r\n      className,\r\n      label,\r\n      labelPosition = "top",\r\n      orientation = "horizontal",\r\n      ...props\r\n    },\r\n    ref,\r\n  ) => {\r\n    const initialValue = Array.isArray(props.value)\r\n      ? props.value\r\n      : [props.min, props.max];\r\n\r\n    return (\r\n      <SliderPrimitive.Root\r\n        ref={ref}\r\n        orientation={orientation}\r\n        className={cn(\r\n          orientation === "horizontal"\r\n            ? "relative flex w-full touch-none select-none items-center"\r\n            : "relative flex h-full min-h-[200px] touch-none select-none flex-col items-center",\r\n          className,\r\n        )}\r\n        {...props}\r\n      >\r\n        <SliderPrimitive.Track\r\n          className={cn(\r\n            orientation === "horizontal"\r\n              ? "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"\r\n              : "relative w-2 h-full grow overflow-hidden rounded-full bg-secondary",\r\n          )}\r\n        >\r\n          <SliderPrimitive.Range\r\n            className={cn(\r\n              orientation === "horizontal"\r\n                ? "absolute h-full bg-primary"\r\n                : "absolute w-full bg-primary",\r\n            )}\r\n          />\r\n        </SliderPrimitive.Track>\r\n        {initialValue.map((value, index) => (\r\n          <React.Fragment key={index}>\r\n            <SliderPrimitive.Thumb\r\n              className={cn(\r\n                "relative block border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",\r\n                orientation === "horizontal"\r\n                  ? "h-5 w-2 rounded-sm"\r\n                  : "h-2 w-5 rounded-sm",\r\n              )}\r\n            >\r\n              {label && (\r\n                <span\r\n                  className={cn(\r\n                    "absolute flex text-xs justify-center font-medium",\r\n                    orientation === "horizontal"\r\n                      ? labelPosition === "top"\r\n                        ? "-left-2 -top-5"\r\n                        : "-left-2 top-5"\r\n                      : labelPosition === "top"\r\n                        ? "-translate-x-full -translate-y-1/2 -left-2"\r\n                        : "translate-x-full -translate-y-1/2",\r\n                  )}\r\n                >\r\n                  {label(value)}\r\n                </span>\r\n              )}\r\n            </SliderPrimitive.Thumb>\r\n          </React.Fragment>\r\n        ))}\r\n      </SliderPrimitive.Root>\r\n    );\r\n  },\r\n);\r\nRangeSlider.displayName = "RangeSlider";\r\n\r\nexport { RangeSlider };\r\n',
          "type": "registry:ui"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_range_slider(), range_slider_exports)))
    },
    "responsive-textarea": {
      name: "responsive-textarea",
      description: "",
      type: "registry:ui",
      files: [
        {
          "path": "registry/default/ui/responsive-textarea.tsx",
          "content": '"use client";\r\n\r\nimport * as React from "react";\r\n\r\nimport { cn } from "@/lib/utils";\r\n\r\nconst ResponsiveTextarea = React.forwardRef<\r\n  HTMLTextAreaElement,\r\n  React.ComponentProps<"textarea">\r\n>(({ className, ...props }, ref) => {\r\n  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);\r\n  const [val, setVal] = React.useState<string>("");\r\n\r\n  React.useEffect(() => {\r\n    if (textAreaRef.current) {\r\n      textAreaRef.current.style.height = "auto";\r\n      textAreaRef.current.style.height =\r\n        textAreaRef.current.scrollHeight + "px";\r\n    }\r\n  }, [val]);\r\n\r\n  return (\r\n    <textarea\r\n      className={cn(\r\n        "placeholder:text-muted-foreground flex min-h-[80px] w-full resize-none overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",\r\n        className,\r\n      )}\r\n      ref={textAreaRef}\r\n      onChange={(e) => setVal(e.target.value)}\r\n      {...props}\r\n    />\r\n  );\r\n});\r\nResponsiveTextarea.displayName = "ResponsiveTextarea";\r\n\r\nexport { ResponsiveTextarea };\r\n',
          "type": "registry:ui"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_responsive_textarea(), responsive_textarea_exports)))
    },
    "star-rating": {
      name: "star-rating",
      description: "",
      type: "registry:ui",
      files: [
        {
          "path": "registry/default/ui/star-rating.tsx",
          "content": `"use client";\r
\r
import * as React from "react";\r
\r
import { Star } from "lucide-react";\r
\r
import { cn } from "@/lib/utils";\r
\r
let nextId = 0;\r
const generateStarIds = (count: number) =>\r
  Array.from({ length: count }, () => \`star-\${nextId++}\`);\r
\r
interface StarRatingProps {\r
  value: number;\r
  onChange?: (value: number) => void;\r
  className?: string;\r
  size?: number;\r
  maxStars?: number;\r
  readOnly?: boolean;\r
  color?: string;\r
}\r
\r
const StarIcon = React.memo(\r
  ({\r
    size,\r
    index,\r
    isInteractive,\r
    onClick,\r
    onMouseMove,\r
    style,\r
  }: {\r
    index: number;\r
    style: React.CSSProperties;\r
    size: number;\r
    onClick: (e: React.MouseEvent<SVGElement>) => void;\r
    onMouseMove: (e: React.MouseEvent<SVGElement>) => void;\r
    isInteractive: boolean;\r
  }) => (\r
    <Star\r
      key={index}\r
      size={size}\r
      fill={style.fill}\r
      color={style.color}\r
      onClick={onClick}\r
      onMouseMove={onMouseMove}\r
      className={cn(\r
        "transition-colors duration-200",\r
        isInteractive && "cursor-pointer hover:scale-110",\r
      )}\r
      style={style}\r
    />\r
  ),\r
);\r
StarIcon.displayName = "StarIcon";\r
\r
const StarRating = ({\r
  className,\r
  color = "#e4c616",\r
  size = 24,\r
  maxStars = 5,\r
  onChange,\r
  readOnly = false,\r
  value,\r
}: StarRatingProps) => {\r
  const [hoverRating, setHoverRating] = React.useState<number | null>(null);\r
  const [starIds] = React.useState(() => generateStarIds(maxStars));\r
\r
  const handleStarClick = React.useCallback(\r
    (index: number, event: React.MouseEvent<SVGElement>) => {\r
      if (readOnly || !onChange) return;\r
      const newRating = index + 1;\r
      onChange(newRating);\r
    },\r
    [readOnly, onChange],\r
  );\r
\r
  const handleStarHover = React.useCallback(\r
    (index: number, event: React.MouseEvent<SVGElement>) => {\r
      if (!readOnly) {\r
        setHoverRating(index + 1);\r
      }\r
    },\r
    [readOnly],\r
  );\r
\r
  const handleMouseLeave = React.useCallback(() => {\r
    if (!readOnly) {\r
      setHoverRating(null);\r
    }\r
  }, [readOnly]);\r
\r
  const getStarStyle = React.useCallback(\r
    (index: number) => {\r
      const ratingToUse =\r
        !readOnly && hoverRating !== null ? hoverRating : value;\r
\r
      const difference = ratingToUse - index;\r
\r
      if (difference <= 0) return { color: "gray", fill: "transparent" };\r
      if (difference >= 1) return { color: color, fill: color };\r
\r
      return {\r
        color: color,\r
        fill: \`url(#\${starIds[index]})\`,\r
      } as React.CSSProperties;\r
    },\r
    [readOnly, hoverRating, value, color, starIds],\r
  );\r
\r
  const renderGradientDefs = () => {\r
    if (!readOnly && hoverRating !== null) return null;\r
\r
    const partialStarIndex = Math.floor(value);\r
    const partialFill = (value % 1) * 100;\r
\r
    if (partialFill > 0) {\r
      return (\r
        <linearGradient\r
          id={starIds[partialStarIndex]}\r
          x1='0%'\r
          y1='0%'\r
          x2='100%'\r
          y2='0%'\r
        >\r
          <stop offset={\`\${partialFill}%\`} stopColor={color} />\r
          <stop offset={\`\${partialFill}%\`} stopColor='transparent' />\r
        </linearGradient>\r
      );\r
    }\r
    return null;\r
  };\r
\r
  const stars = React.useMemo(() => {\r
    return Array.from({ length: maxStars }).map((_, index) => {\r
      const style = getStarStyle(index);\r
      return (\r
        <StarIcon\r
          key={index}\r
          index={index}\r
          style={style}\r
          size={size}\r
          onClick={(e) => handleStarClick(index, e)}\r
          onMouseMove={(e) => handleStarHover(index, e)}\r
          isInteractive={!readOnly}\r
        />\r
      );\r
    });\r
  }, [\r
    maxStars,\r
    getStarStyle,\r
    size,\r
    handleStarClick,\r
    handleStarHover,\r
    readOnly,\r
  ]);\r
\r
  return (\r
    <div\r
      className={cn("relative flex items-center gap-x-0.5", className)}\r
      onMouseLeave={handleMouseLeave}\r
    >\r
      <svg width='0' height='0' style={{ position: "absolute" }}>\r
        <defs>{renderGradientDefs()}</defs>\r
      </svg>\r
      {stars}\r
    </div>\r
  );\r
};\r
\r
export default StarRating;\r
`,
          "type": "registry:ui"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_star_rating(), star_rating_exports)))
    },
    "stepper": {
      name: "stepper",
      description: "",
      type: "registry:ui",
      files: [
        {
          "path": "registry/default/ui/stepper.tsx",
          "content": `import * as React from "react";\r
\r
import * as Stepperize from "@stepperize/react";\r
import { Slot } from "@radix-ui/react-slot";\r
import { type VariantProps, cva } from "class-variance-authority";\r
\r
import { Button } from "@/components/ui/button";\r
\r
import { cn } from "@/lib/utils";\r
\r
type StepperVariant = "horizontal" | "vertical" | "circle";\r
type StepperLabelOrientation = "horizontal" | "vertical";\r
\r
type StepperConfig = {\r
  variant?: StepperVariant;\r
  labelOrientation?: StepperLabelOrientation;\r
  tracking?: boolean;\r
};\r
\r
type DefineStepperProps<Steps extends Stepperize.Step[]> = Omit<\r
  Stepperize.StepperReturn<Steps>,\r
  "Scoped"\r
> & {\r
  StepperProvider: (\r
    props: Omit<Stepperize.ScopedProps<Steps>, "children"> &\r
      Omit<React.ComponentProps<"div">, "children"> &\r
      StepperConfig & {\r
        children:\r
          | React.ReactNode\r
          | ((props: {\r
              methods: Stepperize.Stepper<Steps>;\r
            }) => React.ReactNode);\r
      },\r
  ) => React.ReactElement;\r
  StepperNavigation: (props: React.ComponentProps<"nav">) => React.ReactElement;\r
  StepperStep: (\r
    props: React.ComponentProps<"button"> & {\r
      of: Stepperize.Get.Id<Steps>;\r
      icon?: React.ReactNode;\r
    },\r
  ) => React.ReactElement;\r
  StepperTitle: (\r
    props: React.ComponentProps<"h4"> & { asChild?: boolean },\r
  ) => React.ReactElement;\r
  StepperDescription: (\r
    props: React.ComponentProps<"p"> & { asChild?: boolean },\r
  ) => React.ReactElement;\r
  StepperPanel: (\r
    props: React.ComponentProps<"div"> & { asChild?: boolean },\r
  ) => React.ReactElement;\r
  StepperControls: (\r
    props: React.ComponentProps<"div"> & { asChild?: boolean },\r
  ) => React.ReactElement;\r
};\r
\r
type CircleStepIndicatorProps = {\r
  currentStep: number;\r
  totalSteps: number;\r
  size?: number;\r
  strokeWidth?: number;\r
};\r
\r
const StepperContext = React.createContext<StepperConfig | null>(null);\r
\r
const useStepperProvider = (): StepperConfig => {\r
  const context = React.useContext(StepperContext);\r
  if (!context) {\r
    throw new Error("useStepper must be used within a StepperProvider.");\r
  }\r
  return context;\r
};\r
\r
const defineStepper = <const Steps extends Stepperize.Step[]>(\r
  ...steps: Steps\r
): DefineStepperProps<Steps> => {\r
  const { Scoped, useStepper, ...rest } = Stepperize.defineStepper(...steps);\r
\r
  const StepperContainer = ({\r
    children,\r
    className,\r
    ...props\r
  }: Omit<React.ComponentProps<"div">, "children"> & {\r
    children:\r
      | React.ReactNode\r
      | ((props: { methods: Stepperize.Stepper<Steps> }) => React.ReactNode);\r
  }) => {\r
    const methods = useStepper();\r
\r
    return (\r
      <div className={cn("w-full", className)} {...props}>\r
        {typeof children === "function" ? children({ methods }) : children}\r
      </div>\r
    );\r
  };\r
\r
  return {\r
    ...rest,\r
    useStepper,\r
    StepperProvider: ({\r
      variant = "horizontal",\r
      labelOrientation = "horizontal",\r
      tracking = false,\r
      children,\r
      className,\r
      ...props\r
    }) => {\r
      return (\r
        <StepperContext.Provider\r
          value={{ variant, labelOrientation, tracking }}\r
        >\r
          <Scoped\r
            initialStep={props.initialStep}\r
            initialMetadata={props.initialMetadata}\r
          >\r
            <StepperContainer className={className} {...props}>\r
              {children}\r
            </StepperContainer>\r
          </Scoped>\r
        </StepperContext.Provider>\r
      );\r
    },\r
    StepperNavigation: ({\r
      children,\r
      className,\r
      "aria-label": ariaLabel = "Stepper Navigation",\r
      ...props\r
    }) => {\r
      const { variant } = useStepperProvider();\r
      return (\r
        <nav\r
          aria-label={ariaLabel}\r
          role='tablist'\r
          className={cn("stepper-navigation", className)}\r
          {...props}\r
        >\r
          <ol className={listVariants({ variant: variant })}>{children}</ol>\r
        </nav>\r
      );\r
    },\r
    StepperStep: ({ children, className, icon, ...props }) => {\r
      const { variant, labelOrientation } = useStepperProvider();\r
      const { current } = useStepper();\r
\r
      const utils = rest.utils;\r
      const steps = rest.steps;\r
\r
      const stepIndex = utils.getIndex(props.of);\r
      const step = steps[stepIndex];\r
      const currentIndex = utils.getIndex(current.id);\r
\r
      const isLast = utils.getLast().id === props.of;\r
      const isActive = current.id === props.of;\r
\r
      const dataState = getStepState(currentIndex, stepIndex);\r
      const childMap = useStepChildren(children);\r
\r
      const title = childMap.get("title");\r
      const description = childMap.get("description");\r
      const panel = childMap.get("panel");\r
\r
      if (variant === "circle") {\r
        return (\r
          <li\r
            className={cn(\r
              "flex shrink-0 items-center gap-4 rounded-md transition-colors",\r
              className,\r
            )}\r
          >\r
            <CircleStepIndicator\r
              currentStep={stepIndex + 1}\r
              totalSteps={steps.length}\r
            />\r
            <div className='flex flex-col items-start gap-1'>\r
              {title}\r
              {description}\r
            </div>\r
          </li>\r
        );\r
      }\r
\r
      return (\r
        <>\r
          <li\r
            className={cn([\r
              "group peer relative flex items-center gap-2",\r
              "data-[variant=vertical]:flex-row",\r
              "data-[label-orientation=vertical]:w-full",\r
              "data-[label-orientation=vertical]:flex-col",\r
              "data-[label-orientation=vertical]:justify-center",\r
            ])}\r
            data-variant={variant}\r
            data-label-orientation={labelOrientation}\r
            data-state={dataState}\r
            data-disabled={props.disabled}\r
          >\r
            <Button\r
              id={\`step-\${step.id}\`}\r
              type='button'\r
              role='tab'\r
              tabIndex={dataState !== "inactive" ? 0 : -1}\r
              className='rounded-full'\r
              variant={dataState !== "inactive" ? "default" : "secondary"}\r
              size='icon'\r
              aria-controls={\`step-panel-\${props.of}\`}\r
              aria-current={isActive ? "step" : undefined}\r
              aria-posinset={stepIndex + 1}\r
              aria-setsize={steps.length}\r
              aria-selected={isActive}\r
              onKeyDown={(e) =>\r
                onStepKeyDown(\r
                  e,\r
                  utils.getNext(props.of),\r
                  utils.getPrev(props.of),\r
                )\r
              }\r
              {...props}\r
            >\r
              {icon ?? stepIndex + 1}\r
            </Button>\r
            {variant === "horizontal" && labelOrientation === "vertical" && (\r
              <StepperSeparator\r
                orientation='horizontal'\r
                labelOrientation={labelOrientation}\r
                isLast={isLast}\r
                state={dataState}\r
                disabled={props.disabled}\r
              />\r
            )}\r
            <div className='flex flex-col items-start'>\r
              {title}\r
              {description}\r
            </div>\r
          </li>\r
\r
          {variant === "horizontal" && labelOrientation === "horizontal" && (\r
            <StepperSeparator\r
              orientation='horizontal'\r
              isLast={isLast}\r
              state={dataState}\r
              disabled={props.disabled}\r
            />\r
          )}\r
\r
          {variant === "vertical" && (\r
            <div className='flex gap-4'>\r
              {!isLast && (\r
                <div className='flex justify-center ps-5'>\r
                  <StepperSeparator\r
                    orientation='vertical'\r
                    isLast={isLast}\r
                    state={dataState}\r
                    disabled={props.disabled}\r
                  />\r
                </div>\r
              )}\r
              <div className='my-3 flex-1 ps-4'>{panel}</div>\r
            </div>\r
          )}\r
        </>\r
      );\r
    },\r
    StepperTitle,\r
    StepperDescription,\r
    StepperPanel: ({ children, className, asChild, ...props }) => {\r
      const Comp = asChild ? Slot : "div";\r
      const { tracking } = useStepperProvider();\r
\r
      return (\r
        <Comp\r
          className={className}\r
          ref={(node) => scrollIntoStepperPanel(node, tracking)}\r
          {...props}\r
        >\r
          {children}\r
        </Comp>\r
      );\r
    },\r
    StepperControls: ({ children, className, asChild, ...props }) => {\r
      const Comp = asChild ? Slot : "div";\r
      return (\r
        <Comp className={cn(" flex justify-end gap-4", className)} {...props}>\r
          {children}\r
        </Comp>\r
      );\r
    },\r
  };\r
};\r
\r
const StepperTitle = ({\r
  children,\r
  className,\r
  asChild,\r
  ...props\r
}: React.ComponentProps<"h4"> & { asChild?: boolean }) => {\r
  const Comp = asChild ? Slot : "h4";\r
\r
  return (\r
    <Comp className={cn("text-base font-medium m-0", className)} {...props}>\r
      {children}\r
    </Comp>\r
  );\r
};\r
\r
const StepperDescription = ({\r
  children,\r
  className,\r
  asChild,\r
  ...props\r
}: React.ComponentProps<"p"> & { asChild?: boolean }) => {\r
  const Comp = asChild ? Slot : "p";\r
\r
  return (\r
    <Comp className={cn("text-sm text-muted-foreground", className)} {...props}>\r
      {children}\r
    </Comp>\r
  );\r
};\r
\r
const StepperSeparator = ({\r
  orientation,\r
  isLast,\r
  labelOrientation,\r
  state,\r
  disabled,\r
}: {\r
  isLast: boolean;\r
  state: string;\r
  disabled?: boolean;\r
} & VariantProps<typeof classForSeparator>) => {\r
  if (isLast) {\r
    return null;\r
  }\r
  return (\r
    <div\r
      data-orientation={orientation}\r
      data-state={state}\r
      data-disabled={disabled}\r
      role='separator'\r
      tabIndex={-1}\r
      className={classForSeparator({ orientation, labelOrientation })}\r
    />\r
  );\r
};\r
\r
const CircleStepIndicator = ({\r
  currentStep,\r
  totalSteps,\r
  size = 80,\r
  strokeWidth = 6,\r
}: CircleStepIndicatorProps) => {\r
  const radius = (size - strokeWidth) / 2;\r
  const circumference = radius * 2 * Math.PI;\r
  const fillPercentage = (currentStep / totalSteps) * 100;\r
  const dashOffset = circumference - (circumference * fillPercentage) / 100;\r
  return (\r
    <div\r
      role='progressbar'\r
      aria-valuenow={currentStep}\r
      aria-valuemin={1}\r
      aria-valuemax={totalSteps}\r
      tabIndex={-1}\r
      className='relative inline-flex items-center justify-center'\r
    >\r
      <svg width={size} height={size}>\r
        <title>Step Indicator</title>\r
        <circle\r
          cx={size / 2}\r
          cy={size / 2}\r
          r={radius}\r
          fill='none'\r
          stroke='currentColor'\r
          strokeWidth={strokeWidth}\r
          className='text-muted-foreground'\r
        />\r
        <circle\r
          cx={size / 2}\r
          cy={size / 2}\r
          r={radius}\r
          fill='none'\r
          stroke='currentColor'\r
          strokeWidth={strokeWidth}\r
          strokeDasharray={circumference}\r
          strokeDashoffset={dashOffset}\r
          className='text-primary transition-all duration-300 ease-in-out'\r
          transform={\`rotate(-90 \${size / 2} \${size / 2})\`}\r
        />\r
      </svg>\r
      <div className='absolute inset-0 flex items-center justify-center'>\r
        <span className='text-sm font-medium' aria-live='polite'>\r
          {currentStep} of {totalSteps}\r
        </span>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
const listVariants = cva(" flex gap-2", {\r
  variants: {\r
    variant: {\r
      horizontal: "flex-row items-center justify-between",\r
      vertical: "flex-col",\r
      circle: "flex-row items-center justify-between",\r
    },\r
  },\r
});\r
\r
const classForSeparator = cva(\r
  [\r
    "bg-muted",\r
    "data-[state=completed]:bg-primary data-[disabled]:opacity-50",\r
    "transition-all duration-300 ease-in-out",\r
  ],\r
  {\r
    variants: {\r
      orientation: {\r
        horizontal: "h-0.5 flex-1",\r
        vertical: "h-full w-0.5",\r
      },\r
      labelOrientation: {\r
        vertical:\r
          "absolute left-[calc(50%+30px)] right-[calc(-50%+20px)] top-5 block shrink-0",\r
      },\r
    },\r
  },\r
);\r
\r
function scrollIntoStepperPanel(\r
  node: HTMLDivElement | null,\r
  tracking?: boolean,\r
) {\r
  if (tracking) {\r
    node?.scrollIntoView({ behavior: "smooth", block: "center" });\r
  }\r
}\r
\r
const useStepChildren = (children: React.ReactNode) => {\r
  return React.useMemo(() => extractChildren(children), [children]);\r
};\r
\r
const extractChildren = (children: React.ReactNode) => {\r
  const childrenArray = React.Children.toArray(children);\r
  const map = new Map<string, React.ReactNode>();\r
\r
  for (const child of childrenArray) {\r
    if (React.isValidElement(child)) {\r
      if (child.type === StepperTitle) {\r
        map.set("title", child);\r
      } else if (child.type === StepperDescription) {\r
        map.set("description", child);\r
      } else {\r
        map.set("panel", child);\r
      }\r
    }\r
  }\r
\r
  return map;\r
};\r
\r
const onStepKeyDown = (\r
  e: React.KeyboardEvent<HTMLButtonElement>,\r
  nextStep: Stepperize.Step,\r
  prevStep: Stepperize.Step,\r
) => {\r
  const { key } = e;\r
  const directions = {\r
    next: ["ArrowRight", "ArrowDown"],\r
    prev: ["ArrowLeft", "ArrowUp"],\r
  };\r
\r
  if (directions.next.includes(key) || directions.prev.includes(key)) {\r
    const direction = directions.next.includes(key) ? "next" : "prev";\r
    const step = direction === "next" ? nextStep : prevStep;\r
\r
    if (!step) {\r
      return;\r
    }\r
\r
    const stepElement = document.getElementById(\`step-\${step.id}\`);\r
    if (!stepElement) {\r
      return;\r
    }\r
\r
    const isActive =\r
      stepElement.parentElement?.getAttribute("data-state") !== "inactive";\r
    if (isActive || direction === "prev") {\r
      stepElement.focus();\r
    }\r
  }\r
};\r
\r
const getStepState = (currentIndex: number, stepIndex: number) => {\r
  if (currentIndex === stepIndex) {\r
    return "active";\r
  }\r
  if (currentIndex > stepIndex) {\r
    return "completed";\r
  }\r
  return "inactive";\r
};\r
\r
export { defineStepper };\r
`,
          "type": "registry:ui"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_stepper(), stepper_exports)))
    },
    "tel-input": {
      name: "tel-input",
      description: "",
      type: "registry:ui",
      files: [
        {
          "path": "registry/default/ui/tel-input.tsx",
          "content": `import * as React from "react";\r
\r
import * as PhoneNumberInput from "react-phone-number-input";\r
import { CheckIcon, ChevronsUpDown } from "lucide-react";\r
import flags from "react-phone-number-input/flags";\r
\r
import { Button } from "@/components/ui/button";\r
import {\r
  Command,\r
  CommandEmpty,\r
  CommandGroup,\r
  CommandInput,\r
  CommandItem,\r
  CommandList,\r
} from "@/components/ui/command";\r
import { Input } from "@/components/ui/input";\r
import {\r
  Popover,\r
  PopoverContent,\r
  PopoverTrigger,\r
} from "@/components/ui/popover";\r
import { ScrollArea } from "@/components/ui/scroll-area";\r
\r
import { cn } from "@/lib/utils";\r
\r
type CountryEntry = {\r
  label: string;\r
  value: PhoneNumberInput.Country | undefined;\r
};\r
\r
type CountrySelectProps = {\r
  disabled?: boolean;\r
  value: PhoneNumberInput.Country;\r
  options: CountryEntry[];\r
  onChange: (country: PhoneNumberInput.Country) => void;\r
};\r
\r
interface CountrySelectOptionProps extends PhoneNumberInput.FlagProps {\r
  selectedCountry: PhoneNumberInput.Country;\r
  onChange: (country: PhoneNumberInput.Country) => void;\r
}\r
\r
type TelInputProps = Omit<\r
  React.ComponentProps<"input">,\r
  "onChange" | "value" | "ref"\r
> &\r
  Omit<PhoneNumberInput.Props<typeof PhoneNumberInput.default>, "onChange"> & {\r
    onChange?: (value: PhoneNumberInput.Value) => void;\r
  };\r
\r
const FlagComponent = ({\r
  country,\r
  countryName,\r
}: PhoneNumberInput.FlagProps) => {\r
  const Flag = flags[country];\r
\r
  return (\r
    <span className='flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full'>\r
      {Flag && <Flag title={countryName} />}\r
    </span>\r
  );\r
};\r
\r
const CountrySelectOption = ({\r
  country,\r
  countryName,\r
  selectedCountry,\r
  onChange,\r
}: CountrySelectOptionProps) => {\r
  return (\r
    <CommandItem\r
      className='gap-2 cursor-pointer'\r
      onSelect={() => onChange(country)}\r
    >\r
      <FlagComponent country={country} countryName={countryName} />\r
      <span className='flex-1 text-sm'>{countryName}</span>\r
      <span className='text-sm text-foreground/50'>{\`+\${PhoneNumberInput.getCountryCallingCode(country)}\`}</span>\r
      <CheckIcon\r
        className={\`ml-auto size-4 \${country === selectedCountry ? "opacity-100" : "opacity-0"}\`}\r
      />\r
    </CommandItem>\r
  );\r
};\r
\r
const InputComponent = React.forwardRef<\r
  HTMLInputElement,\r
  React.ComponentProps<"input">\r
>(({ className, ...props }, ref) => (\r
  <Input\r
    className={cn("rounded-e-lg rounded-s-none", className)}\r
    {...props}\r
    ref={ref}\r
  />\r
));\r
InputComponent.displayName = "InputComponent";\r
\r
const CountrySelect = ({\r
  disabled,\r
  value: selectedCountry,\r
  options: countryList,\r
  onChange,\r
}: CountrySelectProps) => {\r
  return (\r
    <Popover>\r
      <PopoverTrigger asChild>\r
        <Button\r
          type='button'\r
          variant='outline'\r
          className='flex gap-1 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10'\r
          disabled={disabled}\r
        >\r
          <FlagComponent\r
            country={selectedCountry}\r
            countryName={selectedCountry}\r
          />\r
          <ChevronsUpDown\r
            className={cn(\r
              "-mr-2 size-4 opacity-50",\r
              disabled ? "hidden" : "opacity-100",\r
            )}\r
          />\r
        </Button>\r
      </PopoverTrigger>\r
      <PopoverContent className='w-[300px] p-0'>\r
        <Command>\r
          <CommandInput placeholder='Search country...' />\r
          <CommandList>\r
            <ScrollArea className='h-72'>\r
              <CommandEmpty>No country found.</CommandEmpty>\r
              <CommandGroup>\r
                {countryList.map(({ value, label }) =>\r
                  value ? (\r
                    <CountrySelectOption\r
                      key={value}\r
                      country={value}\r
                      countryName={label}\r
                      selectedCountry={selectedCountry}\r
                      onChange={onChange}\r
                    />\r
                  ) : null,\r
                )}\r
              </CommandGroup>\r
            </ScrollArea>\r
          </CommandList>\r
        </Command>\r
      </PopoverContent>\r
    </Popover>\r
  );\r
};\r
\r
const TelInput: React.ForwardRefExoticComponent<TelInputProps> =\r
  React.forwardRef<\r
    React.ElementRef<typeof PhoneNumberInput.default>,\r
    TelInputProps\r
  >(({ className, onChange, ...props }, ref) => {\r
    return (\r
      <PhoneNumberInput.default\r
        ref={ref}\r
        className={cn("flex", className)}\r
        flagComponent={FlagComponent}\r
        countrySelectComponent={CountrySelect}\r
        inputComponent={InputComponent}\r
        smartCaret={false}\r
        onChange={(value) =>\r
          onChange?.(value || ("" as PhoneNumberInput.Value))\r
        }\r
        {...props}\r
      />\r
    );\r
  });\r
TelInput.displayName = "TelInput";\r
\r
export { TelInput };\r
`,
          "type": "registry:ui"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_tel_input(), tel_input_exports)))
    },
    "animated-label-input-default": {
      name: "animated-label-input-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/animated-label-input-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_animated_label_input_default(), animated_label_input_default_exports)))
    },
    "animated-label-input-with-form": {
      name: "animated-label-input-with-form",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/animated-label-input-with-form.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_animated_label_input_with_form(), animated_label_input_with_form_exports)))
    },
    "animated-tooltip-default": {
      name: "animated-tooltip-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/animated-tooltip-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_animated_tooltip_default(), animated_tooltip_default_exports)))
    },
    "combobox-input-default": {
      name: "combobox-input-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/combobox-input-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_combobox_input_default(), combobox_input_default_exports)))
    },
    "labeled-switch-default": {
      name: "labeled-switch-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/labeled-switch-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_labeled_switch_default(), labeled_switch_default_exports)))
    },
    "labeled-switch-with-form": {
      name: "labeled-switch-with-form",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/labeled-switch-with-form.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_labeled_switch_with_form(), labeled_switch_with_form_exports)))
    },
    "range-slider-default": {
      name: "range-slider-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/range-slider-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_range_slider_default(), range_slider_default_exports)))
    },
    "range-slider-vertical": {
      name: "range-slider-vertical",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/range-slider-vertical.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_range_slider_vertical(), range_slider_vertical_exports)))
    },
    "range-slider-with-label": {
      name: "range-slider-with-label",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/range-slider-with-label.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_range_slider_with_label(), range_slider_with_label_exports)))
    },
    "responsive-textarea-default": {
      name: "responsive-textarea-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/responsive-textarea-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_responsive_textarea_default(), responsive_textarea_default_exports)))
    },
    "responsive-textarea-with-form": {
      name: "responsive-textarea-with-form",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/responsive-textarea-with-form.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_responsive_textarea_with_form(), responsive_textarea_with_form_exports)))
    },
    "responsive-textarea-with-label": {
      name: "responsive-textarea-with-label",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/responsive-textarea-with-label.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_responsive_textarea_with_label(), responsive_textarea_with_label_exports)))
    },
    "responsive-textarea-with-text": {
      name: "responsive-textarea-with-text",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/responsive-textarea-with-text.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_responsive_textarea_with_text(), responsive_textarea_with_text_exports)))
    },
    "star-rating-customized": {
      name: "star-rating-customized",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/star-rating-customized.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_star_rating_customized(), star_rating_customized_exports)))
    },
    "star-rating-default": {
      name: "star-rating-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/star-rating-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_star_rating_default(), star_rating_default_exports)))
    },
    "star-rating-interactive": {
      name: "star-rating-interactive",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/star-rating-interactive.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_star_rating_interactive(), star_rating_interactive_exports)))
    },
    "star-rating-readonly": {
      name: "star-rating-readonly",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/star-rating-readonly.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_star_rating_readonly(), star_rating_readonly_exports)))
    },
    "star-rating-with-form": {
      name: "star-rating-with-form",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/star-rating-with-form.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_star_rating_with_form(), star_rating_with_form_exports)))
    },
    "stepper-demo": {
      name: "stepper-demo",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/stepper-demo.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_stepper_demo(), stepper_demo_exports)))
    },
    "stepper-description": {
      name: "stepper-description",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/stepper-description.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_stepper_description(), stepper_description_exports)))
    },
    "stepper-form": {
      name: "stepper-form",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/stepper-form.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_stepper_form(), stepper_form_exports)))
    },
    "stepper-icon": {
      name: "stepper-icon",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/stepper-icon.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_stepper_icon(), stepper_icon_exports)))
    },
    "stepper-label-orientation": {
      name: "stepper-label-orientation",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/stepper-label-orientation.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_stepper_label_orientation(), stepper_label_orientation_exports)))
    },
    "stepper-responsive-variant": {
      name: "stepper-responsive-variant",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/stepper-responsive-variant.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_stepper_responsive_variant(), stepper_responsive_variant_exports)))
    },
    "stepper-tracking": {
      name: "stepper-tracking",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/stepper-tracking.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_stepper_tracking(), stepper_tracking_exports)))
    },
    "stepper-variants": {
      name: "stepper-variants",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/stepper-variants.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_stepper_variants(), stepper_variants_exports)))
    },
    "tel-input-custom-labels": {
      name: "tel-input-custom-labels",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/tel-input-custom-labels.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_tel_input_custom_labels(), tel_input_custom_labels_exports)))
    },
    "tel-input-default-country": {
      name: "tel-input-default-country",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/tel-input-default-country.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_tel_input_default_country(), tel_input_default_country_exports)))
    },
    "tel-input-default": {
      name: "tel-input-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/tel-input-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_tel_input_default(), tel_input_default_exports)))
    },
    "tel-input-international": {
      name: "tel-input-international",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/tel-input-international.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_tel_input_international(), tel_input_international_exports)))
    },
    "tel-input-with-form": {
      name: "tel-input-with-form",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/tel-input-with-form.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_tel_input_with_form(), tel_input_with_form_exports)))
    },
    "use-boolean-default": {
      name: "use-boolean-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/use-boolean-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_boolean_default(), use_boolean_default_exports)))
    },
    "use-click-outside-default": {
      name: "use-click-outside-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/use-click-outside-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_click_outside_default(), use_click_outside_default_exports)))
    },
    "use-debounce-default": {
      name: "use-debounce-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/use-debounce-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_debounce_default(), use_debounce_default_exports)))
    },
    "use-element-size-default": {
      name: "use-element-size-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/use-element-size-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_element_size_default(), use_element_size_default_exports)))
    },
    "use-fullscreen-default": {
      name: "use-fullscreen-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/use-fullscreen-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_fullscreen_default(), use_fullscreen_default_exports)))
    },
    "use-fullscreen-with-target": {
      name: "use-fullscreen-with-target",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/use-fullscreen-with-target.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_fullscreen_with_target(), use_fullscreen_with_target_exports)))
    },
    "use-mobile-default": {
      name: "use-mobile-default",
      description: "",
      type: "registry:example",
      files: [
        {
          "path": "registry/default/example/use-mobile-default.tsx",
          "type": "registry:example"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_mobile_default(), use_mobile_default_exports)))
    },
    "avatar-default": {
      name: "avatar-default",
      description: "",
      type: "registry:snippet",
      files: [
        {
          "path": "registry/default/snippets/avatar-default.tsx",
          "content": `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";\r
\r
export default function AvatarDefault() {\r
  return (\r
    <Avatar>\r
      <AvatarImage\r
        src='https://github.com/phamhuulocforwork.png'\r
        alt='@phamhuulocforwork'\r
      />\r
      <AvatarFallback>HL</AvatarFallback>\r
    </Avatar>\r
  );\r
}\r
`,
          "type": "registry:snippet"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_avatar_default(), avatar_default_exports)))
    },
    "avatar-group-max": {
      name: "avatar-group-max",
      description: "",
      type: "registry:snippet",
      files: [
        {
          "path": "registry/default/snippets/avatar-group-max.tsx",
          "content": `import * as React from "react";\r
\r
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";\r
\r
import { cn } from "@/lib/utils";\r
\r
type AvatarProps = React.ComponentProps<typeof Avatar>;\r
\r
interface AvatarGroupProps extends React.ComponentProps<"div"> {\r
  children: React.ReactElement<AvatarProps>[];\r
  max?: number;\r
}\r
\r
const AvatarGroup = ({\r
  children,\r
  max,\r
  className,\r
  ...props\r
}: AvatarGroupProps) => {\r
  const totalAvatars = React.Children.count(children);\r
  const displayedAvatars = React.Children.toArray(children)\r
    .slice(0, max)\r
    .reverse();\r
  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\r
\r
  return (\r
    <div\r
      className={cn("flex items-center flex-row-reverse", className)}\r
      {...props}\r
    >\r
      {remainingAvatars > 0 && (\r
        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\r
          <AvatarFallback className='bg-muted-foreground text-white'>\r
            +{remainingAvatars}\r
          </AvatarFallback>\r
        </Avatar>\r
      )}\r
      {displayedAvatars.map((avatar, index) => {\r
        if (!React.isValidElement(avatar)) return null;\r
\r
        return (\r
          <div key={index} className='-ml-2 hover:z-10 relative'>\r
            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\r
              className: "ring-2 ring-background",\r
            })}\r
          </div>\r
        );\r
      })}\r
    </div>\r
  );\r
};\r
\r
export default function AvatarGroupMaxAvatarDemo() {\r
  return (\r
    <AvatarGroup className='flex items-center' max={3}>\r
      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r
        <AvatarImage\r
          src='https://github.com/phamhuulocforwork.png'\r
          alt='@phamhuulocforwork'\r
        />\r
        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\r
      </Avatar>\r
      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r
        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\r
      </Avatar>\r
      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r
        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\r
      </Avatar>\r
      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r
        <AvatarFallback className='bg-indigo-500 text-white'>VK</AvatarFallback>\r
      </Avatar>\r
      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r
        <AvatarFallback className='bg-orange-500 text-white'>RS</AvatarFallback>\r
      </Avatar>\r
    </AvatarGroup>\r
  );\r
}\r
`,
          "type": "registry:snippet"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_avatar_group_max(), avatar_group_max_exports)))
    },
    "avatar-group": {
      name: "avatar-group",
      description: "",
      type: "registry:snippet",
      files: [
        {
          "path": "registry/default/snippets/avatar-group.tsx",
          "content": `import * as React from "react";\r
\r
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";\r
\r
import { cn } from "@/lib/utils";\r
\r
type AvatarProps = React.ComponentProps<typeof Avatar>;\r
\r
interface AvatarGroupProps extends React.ComponentProps<"div"> {\r
  children: React.ReactElement<AvatarProps>[];\r
  max?: number;\r
}\r
\r
const AvatarGroup = ({\r
  children,\r
  max,\r
  className,\r
  ...props\r
}: AvatarGroupProps) => {\r
  const totalAvatars = React.Children.count(children);\r
  const displayedAvatars = React.Children.toArray(children)\r
    .slice(0, max)\r
    .reverse();\r
  const remainingAvatars = max ? Math.max(totalAvatars - max, 1) : 0;\r
\r
  return (\r
    <div\r
      className={cn("flex items-center flex-row-reverse", className)}\r
      {...props}\r
    >\r
      {remainingAvatars > 0 && (\r
        <Avatar className='-ml-2 hover:z-10 relative ring-2 ring-background'>\r
          <AvatarFallback className='bg-muted-foreground text-white'>\r
            +{remainingAvatars}\r
          </AvatarFallback>\r
        </Avatar>\r
      )}\r
      {displayedAvatars.map((avatar, index) => {\r
        if (!React.isValidElement(avatar)) return null;\r
\r
        return (\r
          <div key={index} className='-ml-2 hover:z-10 relative'>\r
            {React.cloneElement(avatar as React.ReactElement<AvatarProps>, {\r
              className: "ring-2 ring-background",\r
            })}\r
          </div>\r
        );\r
      })}\r
    </div>\r
  );\r
};\r
\r
export default function AvatarGroupDemo() {\r
  return (\r
    <AvatarGroup>\r
      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r
        <AvatarImage\r
          src='https://github.com/phamhuulocforwork.png'\r
          alt='@phamhuulocforwork'\r
        />\r
        <AvatarFallback className='bg-indigo-500 text-white'>HL</AvatarFallback>\r
      </Avatar>\r
      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r
        <AvatarFallback className='bg-green-600 text-white'>VN</AvatarFallback>\r
      </Avatar>\r
      <Avatar className='-ml-2 first:ml-0 cursor-pointer'>\r
        <AvatarFallback className='bg-red-500 text-white'>AB</AvatarFallback>\r
      </Avatar>\r
    </AvatarGroup>\r
  );\r
}\r
`,
          "type": "registry:snippet"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_avatar_group(), avatar_group_exports)))
    },
    "avatar-hover-card": {
      name: "avatar-hover-card",
      description: "",
      type: "registry:snippet",
      files: [
        {
          "path": "registry/default/snippets/avatar-hover-card.tsx",
          "content": `import { CalendarIcon } from "lucide-react";\r
\r
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";\r
import {\r
  HoverCard,\r
  HoverCardContent,\r
  HoverCardTrigger,\r
} from "@/components/ui/hover-card";\r
\r
export default function AvatarHoverCard() {\r
  return (\r
    <HoverCard>\r
      <HoverCardTrigger className='cursor-pointer'>\r
        <Avatar>\r
          <AvatarImage\r
            src='https://github.com/phamhuulocforwork.png'\r
            alt='@phamhuulocforwork'\r
          />\r
          <AvatarFallback>HL</AvatarFallback>\r
        </Avatar>\r
      </HoverCardTrigger>\r
      <HoverCardContent className='w-full max-w-xs'>\r
        <div className='flex justify-between space-x-4'>\r
          <Avatar>\r
            <AvatarImage\r
              src='https://github.com/phamhuulocforwork.png'\r
              alt='@phamhuulocforwork'\r
            />\r
            <AvatarFallback>HL</AvatarFallback>\r
          </Avatar>\r
          <div className='space-y-1'>\r
            <h4 className='text-sm font-semibold'>@phamhuulocforwork</h4>\r
            <p className='text-sm'>\r
              I'm currently studying at University (I stay up late and my hair\r
              is getting thinner and thinner. Do you think I'm bald? xD)\r
            </p>\r
            <div className='flex items-center pt-2'>\r
              <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{" "}\r
              <span className='text-xs text-muted-foreground'>\r
                Joined February 2025\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
      </HoverCardContent>\r
    </HoverCard>\r
  );\r
}\r
`,
          "type": "registry:snippet"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_avatar_hover_card(), avatar_hover_card_exports)))
    },
    "avatar-with-ring": {
      name: "avatar-with-ring",
      description: "",
      type: "registry:snippet",
      files: [
        {
          "path": "registry/default/snippets/avatar-with-ring.tsx",
          "content": `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";\r
\r
export default function AvatarWithRing() {\r
  return (\r
    <Avatar className='ring-2 ring-green-500 ring-offset-[3px] ring-offset-background'>\r
      <AvatarImage\r
        src='https://github.com/phamhuulocforwork.png'\r
        alt='@phamhuulocforwork'\r
      />\r
      <AvatarFallback>HL</AvatarFallback>\r
    </Avatar>\r
  );\r
}\r
`,
          "type": "registry:snippet"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_avatar_with_ring(), avatar_with_ring_exports)))
    },
    "avatar-with-status": {
      name: "avatar-with-status",
      description: "",
      type: "registry:snippet",
      files: [
        {
          "path": "registry/default/snippets/avatar-with-status.tsx",
          "content": `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";\r
\r
export default function AvatarWithStatus() {\r
  return (\r
    <div className='flex items-center gap-3'>\r
      {/* Online */}\r
      <div className='relative'>\r
        <Avatar>\r
          <AvatarImage\r
            src='https://github.com/phamhuulocforwork.png'\r
            alt='@phamhuulocforwork'\r
          />\r
          <AvatarFallback>CN</AvatarFallback>\r
        </Avatar>\r
        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-green-500 absolute bottom-0 right-0'></div>\r
      </div>\r
\r
      {/* DND */}\r
      <div className='relative'>\r
        <Avatar>\r
          <AvatarImage\r
            src='https://github.com/phamhuulocforwork.png'\r
            alt='@phamhuulocforwork'\r
          />\r
          <AvatarFallback>CN</AvatarFallback>\r
        </Avatar>\r
        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-red-500 absolute bottom-0 right-0'></div>\r
      </div>\r
\r
      {/* Busy */}\r
      <div className='relative'>\r
        <Avatar>\r
          <AvatarImage\r
            src='https://github.com/phamhuulocforwork.png'\r
            alt='@phamhuulocforwork'\r
          />\r
          <AvatarFallback>CN</AvatarFallback>\r
        </Avatar>\r
        <div className='h-2.5 w-2.5 ring-[2px] ring-background rounded-full bg-yellow-500 absolute bottom-0 right-0'></div>\r
      </div>\r
\r
      {/* Offline */}\r
      <div className='relative'>\r
        <Avatar>\r
          <AvatarImage\r
            src='https://github.com/phamhuulocforwork.png'\r
            alt='@phamhuulocforwork'\r
          />\r
          <AvatarFallback>CN</AvatarFallback>\r
        </Avatar>\r
        <div className='h-2.5 w-2.5 ring-[2px] ring-background border-2 border-muted-foreground rounded-full bg-background absolute bottom-0 right-0'></div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,
          "type": "registry:snippet"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_avatar_with_status(), avatar_with_status_exports)))
    },
    "tooltip-with-arrow": {
      name: "tooltip-with-arrow",
      description: "",
      type: "registry:snippet",
      files: [
        {
          "path": "registry/default/snippets/tooltip-with-arrow.tsx",
          "content": `import { TooltipArrow } from "@radix-ui/react-tooltip";\r
\r
import { Button } from "@/components/ui/button";\r
import {\r
  Tooltip,\r
  TooltipContent,\r
  TooltipProvider,\r
  TooltipTrigger,\r
} from "@/components/ui/tooltip";\r
\r
export default function WithArrowTooltip() {\r
  return (\r
    <TooltipProvider>\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant='outline'>Hover</Button>\r
        </TooltipTrigger>\r
        <TooltipContent>\r
          <p>Tooltip with arrow</p>\r
          <TooltipArrow className='fill-foreground' />\r
        </TooltipContent>\r
      </Tooltip>\r
    </TooltipProvider>\r
  );\r
}\r
`,
          "type": "registry:snippet"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_tooltip_with_arrow(), tooltip_with_arrow_exports)))
    },
    "use-boolean": {
      name: "use-boolean",
      description: "",
      type: "registry:hook",
      files: [
        {
          "path": "registry/default/hooks/use-boolean.ts",
          "content": 'import * as React from "react";\r\n\r\ntype UseBooleanReturn = {\r\n  value: boolean;\r\n  setValue: React.Dispatch<React.SetStateAction<boolean>>;\r\n  setTrue: () => void;\r\n  setFalse: () => void;\r\n  toggle: () => void;\r\n};\r\n\r\nexport function useBoolean(defaultValue = false): UseBooleanReturn {\r\n  if (typeof defaultValue !== "boolean") {\r\n    throw new Error("defaultValue must be `true` or `false`");\r\n  }\r\n  const [value, setValue] = React.useState(defaultValue);\r\n\r\n  const toggle = React.useCallback(() => {\r\n    setValue((x) => !x);\r\n  }, []);\r\n\r\n  const setTrue = React.useCallback(() => {\r\n    setValue(true);\r\n  }, []);\r\n\r\n  const setFalse = React.useCallback(() => {\r\n    setValue(false);\r\n  }, []);\r\n\r\n  return { value, setValue, setTrue, setFalse, toggle };\r\n}\r\n',
          "type": "registry:hook"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_boolean(), use_boolean_exports)))
    },
    "use-callback-ref": {
      name: "use-callback-ref",
      description: "",
      type: "registry:hook",
      files: [
        {
          "path": "registry/default/hooks/use-callback-ref.ts",
          "content": 'import * as React from "react";\r\n\r\nfunction useCallbackRef<T extends (...args: never[]) => unknown>(\r\n  callback: T | undefined,\r\n): T {\r\n  const callbackRef = React.useRef(callback);\r\n\r\n  React.useEffect(() => {\r\n    callbackRef.current = callback;\r\n  });\r\n\r\n  return React.useMemo(\r\n    () => ((...args) => callbackRef.current?.(...args)) as T,\r\n    [],\r\n  );\r\n}\r\n\r\nexport { useCallbackRef };\r\n',
          "type": "registry:hook"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_callback_ref(), use_callback_ref_exports)))
    },
    "use-click-outside": {
      name: "use-click-outside",
      description: "",
      type: "registry:hook",
      files: [
        {
          "path": "registry/default/hooks/use-click-outside.ts",
          "content": 'import * as React from "react";\r\n\r\nconst DEFAULT_EVENTS = ["mousedown", "touchstart"];\r\n\r\nexport function useClickOutside<T extends HTMLElement = any>(\r\n  handler: () => void,\r\n  events?: string[] | null,\r\n  nodes?: (HTMLElement | null)[],\r\n) {\r\n  const ref = React.useRef<T>(null);\r\n\r\n  React.useEffect(() => {\r\n    const listener = (event: any) => {\r\n      const { target } = event ?? {};\r\n      if (Array.isArray(nodes)) {\r\n        const shouldIgnore =\r\n          target?.hasAttribute("data-ignore-outside-clicks") ||\r\n          (!document.body.contains(target) && target.tagName !== "HTML");\r\n        const shouldTrigger = nodes.every(\r\n          (node) => !!node && !event.composedPath().includes(node),\r\n        );\r\n        shouldTrigger && !shouldIgnore && handler();\r\n      } else if (ref.current && !ref.current.contains(target)) {\r\n        handler();\r\n      }\r\n    };\r\n\r\n    (events || DEFAULT_EVENTS).forEach((fn) =>\r\n      document.addEventListener(fn, listener),\r\n    );\r\n\r\n    return () => {\r\n      (events || DEFAULT_EVENTS).forEach((fn) =>\r\n        document.removeEventListener(fn, listener),\r\n      );\r\n    };\r\n  }, [ref, handler, nodes]);\r\n\r\n  return ref;\r\n}\r\n',
          "type": "registry:hook"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_click_outside(), use_click_outside_exports)))
    },
    "use-controllable-state": {
      name: "use-controllable-state",
      description: "",
      type: "registry:hook",
      files: [
        {
          "path": "registry/default/hooks/use-controllable-state.ts",
          "content": 'import * as React from "react";\r\n\r\nimport { useCallbackRef } from "@/registry/default/hooks/use-callback-ref";\r\n\r\ntype UseControllableStateParams<T> = {\r\n  prop?: T | undefined;\r\n  defaultProp?: T | undefined;\r\n  onChange?: (state: T) => void;\r\n};\r\n\r\ntype SetStateFn<T> = (prevState?: T) => T;\r\n\r\nfunction useControllableState<T>({\r\n  prop,\r\n  defaultProp,\r\n  onChange = () => {},\r\n}: UseControllableStateParams<T>) {\r\n  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({\r\n    defaultProp,\r\n    onChange,\r\n  });\r\n  const isControlled = prop !== undefined;\r\n  const value = isControlled ? prop : uncontrolledProp;\r\n  const handleChange = useCallbackRef(onChange);\r\n\r\n  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> =\r\n    React.useCallback(\r\n      (nextValue) => {\r\n        if (isControlled) {\r\n          const setter = nextValue as SetStateFn<T>;\r\n          const value =\r\n            typeof nextValue === "function" ? setter(prop) : nextValue;\r\n          if (value !== prop) handleChange(value as T);\r\n        } else {\r\n          setUncontrolledProp(nextValue);\r\n        }\r\n      },\r\n      [isControlled, prop, setUncontrolledProp, handleChange],\r\n    );\r\n\r\n  return [value, setValue] as const;\r\n}\r\n\r\nfunction useUncontrolledState<T>({\r\n  defaultProp,\r\n  onChange,\r\n}: Omit<UseControllableStateParams<T>, "prop">) {\r\n  const uncontrolledState = React.useState<T | undefined>(defaultProp);\r\n  const [value] = uncontrolledState;\r\n  const prevValueRef = React.useRef(value);\r\n  const handleChange = useCallbackRef(onChange);\r\n\r\n  React.useEffect(() => {\r\n    if (prevValueRef.current !== value) {\r\n      handleChange(value as T);\r\n      prevValueRef.current = value;\r\n    }\r\n  }, [value, prevValueRef, handleChange]);\r\n\r\n  return uncontrolledState;\r\n}\r\n\r\nexport { useControllableState };\r\n',
          "type": "registry:hook"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_controllable_state(), use_controllable_state_exports)))
    },
    "use-debounce": {
      name: "use-debounce",
      description: "",
      type: "registry:hook",
      files: [
        {
          "path": "registry/default/hooks/use-debounce.ts",
          "content": 'import * as React from "react";\r\n\r\nexport function useDebounce<T>(value: T, delay?: number): T {\r\n  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);\r\n\r\n  React.useEffect(() => {\r\n    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);\r\n    return () => clearTimeout(timer);\r\n  }, [value, delay]);\r\n\r\n  return debouncedValue;\r\n}\r\n',
          "type": "registry:hook"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_debounce(), use_debounce_exports)))
    },
    "use-element-size": {
      name: "use-element-size",
      description: "",
      type: "registry:hook",
      files: [
        {
          "path": "registry/default/hooks/use-element-size.ts",
          "content": 'import * as React from "react";\r\n\r\ntype ObserverRect = Omit<DOMRectReadOnly, "toJSON">;\r\n\r\nconst defaultState: ObserverRect = {\r\n  x: 0,\r\n  y: 0,\r\n  width: 0,\r\n  height: 0,\r\n  top: 0,\r\n  left: 0,\r\n  bottom: 0,\r\n  right: 0,\r\n};\r\n\r\nexport function useResizeObserver<T extends HTMLElement = any>(\r\n  options?: ResizeObserverOptions,\r\n) {\r\n  const frameID = React.useRef(0);\r\n  const ref = React.useRef<T>(null);\r\n\r\n  const [rect, setRect] = React.useState<ObserverRect>(defaultState);\r\n\r\n  const observer = React.useMemo(\r\n    () =>\r\n      typeof window !== "undefined"\r\n        ? new ResizeObserver((entries: any) => {\r\n            const entry = entries[0];\r\n\r\n            if (entry) {\r\n              cancelAnimationFrame(frameID.current);\r\n\r\n              frameID.current = requestAnimationFrame(() => {\r\n                if (ref.current) {\r\n                  setRect(entry.contentRect);\r\n                }\r\n              });\r\n            }\r\n          })\r\n        : null,\r\n    [],\r\n  );\r\n\r\n  React.useEffect(() => {\r\n    if (ref.current) {\r\n      observer?.observe(ref.current, options);\r\n    }\r\n\r\n    return () => {\r\n      observer?.disconnect();\r\n\r\n      if (frameID.current) {\r\n        cancelAnimationFrame(frameID.current);\r\n      }\r\n    };\r\n  }, [ref.current]);\r\n\r\n  return [ref, rect] as const;\r\n}\r\n\r\nexport function useElementSize<T extends HTMLElement = any>(\r\n  options?: ResizeObserverOptions,\r\n) {\r\n  const [ref, { width, height }] = useResizeObserver<T>(options);\r\n  return { ref, width, height };\r\n}\r\n',
          "type": "registry:hook"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_element_size(), use_element_size_exports)))
    },
    "use-fullscreen": {
      name: "use-fullscreen",
      description: "",
      type: "registry:hook",
      files: [
        {
          "path": "registry/default/hooks/use-fullscreen.ts",
          "content": 'import * as React from "react";\r\n\r\nfunction getFullscreenElement(): HTMLElement | null {\r\n  const _document = window.document as any;\r\n\r\n  const fullscreenElement =\r\n    _document.fullscreenElement ||\r\n    _document.webkitFullscreenElement ||\r\n    _document.mozFullScreenElement ||\r\n    _document.msFullscreenElement;\r\n\r\n  return fullscreenElement;\r\n}\r\n\r\nfunction exitFullscreen() {\r\n  const _document = window.document as any;\r\n\r\n  if (typeof _document.exitFullscreen === "function") {\r\n    return _document.exitFullscreen();\r\n  }\r\n  if (typeof _document.msExitFullscreen === "function") {\r\n    return _document.msExitFullscreen();\r\n  }\r\n  if (typeof _document.webkitExitFullscreen === "function") {\r\n    return _document.webkitExitFullscreen();\r\n  }\r\n  if (typeof _document.mozCancelFullScreen === "function") {\r\n    return _document.mozCancelFullScreen();\r\n  }\r\n\r\n  return null;\r\n}\r\n\r\nfunction enterFullScreen(element: HTMLElement) {\r\n  const _element = element as any;\r\n\r\n  return (\r\n    _element.requestFullscreen?.() ||\r\n    _element.msRequestFullscreen?.() ||\r\n    _element.webkitEnterFullscreen?.() ||\r\n    _element.webkitRequestFullscreen?.() ||\r\n    _element.mozRequestFullscreen?.()\r\n  );\r\n}\r\n\r\nconst prefixes = ["", "webkit", "moz", "ms"];\r\n\r\nfunction addEvents(\r\n  element: HTMLElement,\r\n  {\r\n    onFullScreen,\r\n    onError,\r\n  }: { onFullScreen: (event: Event) => void; onError: (event: Event) => void },\r\n) {\r\n  prefixes.forEach((prefix) => {\r\n    element.addEventListener(`${prefix}fullscreenchange`, onFullScreen);\r\n    element.addEventListener(`${prefix}fullscreenerror`, onError);\r\n  });\r\n\r\n  return () => {\r\n    prefixes.forEach((prefix) => {\r\n      element.removeEventListener(`${prefix}fullscreenchange`, onFullScreen);\r\n      element.removeEventListener(`${prefix}fullscreenerror`, onError);\r\n    });\r\n  };\r\n}\r\n\r\nexport function useFullscreen<T extends HTMLElement = any>() {\r\n  const [fullscreen, setFullscreen] = React.useState<boolean>(false);\r\n\r\n  const _ref = React.useRef<T>(null);\r\n\r\n  const handleFullscreenChange = React.useCallback(\r\n    (event: Event) => {\r\n      setFullscreen(event.target === getFullscreenElement());\r\n    },\r\n    [setFullscreen],\r\n  );\r\n\r\n  const handleFullscreenError = React.useCallback(\r\n    (event: Event) => {\r\n      setFullscreen(false);\r\n      // eslint-disable-next-line no-console\r\n      console.error(\r\n        `[@mantine/hooks] use-fullscreen: Error attempting full-screen mode method: ${event} (${event.target})`,\r\n      );\r\n    },\r\n    [setFullscreen],\r\n  );\r\n\r\n  const toggle = React.useCallback(async () => {\r\n    if (!getFullscreenElement()) {\r\n      await enterFullScreen(_ref.current!);\r\n    } else {\r\n      await exitFullscreen();\r\n    }\r\n  }, []);\r\n\r\n  const ref = React.useCallback((element: T | null) => {\r\n    if (element === null) {\r\n      _ref.current = window.document.documentElement as T;\r\n    } else {\r\n      _ref.current = element;\r\n    }\r\n  }, []);\r\n\r\n  React.useEffect(() => {\r\n    if (!_ref.current && window.document) {\r\n      _ref.current = window.document.documentElement as T;\r\n      return addEvents(_ref.current, {\r\n        onFullScreen: handleFullscreenChange,\r\n        onError: handleFullscreenError,\r\n      });\r\n    }\r\n\r\n    if (_ref.current) {\r\n      return addEvents(_ref.current, {\r\n        onFullScreen: handleFullscreenChange,\r\n        onError: handleFullscreenError,\r\n      });\r\n    }\r\n\r\n    return undefined;\r\n  }, [_ref.current]);\r\n\r\n  return { ref, toggle, fullscreen } as const;\r\n}\r\n',
          "type": "registry:hook"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_fullscreen(), use_fullscreen_exports)))
    },
    "use-mobile": {
      name: "use-mobile",
      description: "",
      type: "registry:hook",
      files: [
        {
          "path": "registry/default/hooks/use-mobile.ts",
          "content": 'import * as React from "react";\r\n\r\nimport debounce from "lodash.debounce";\r\n\r\nconst useIsMobile = (): boolean => {\r\n  const [isMobile, setIsMobile] = React.useState(false);\r\n\r\n  React.useLayoutEffect(() => {\r\n    const updateSize = (): void => {\r\n      setIsMobile(window.innerWidth < 768);\r\n    };\r\n    const debouncedUpdateSize = debounce(updateSize, 250);\r\n\r\n    updateSize();\r\n\r\n    window.addEventListener("resize", debouncedUpdateSize);\r\n\r\n    return (): void =>\r\n      window.removeEventListener("resize", debouncedUpdateSize);\r\n  }, []);\r\n\r\n  return isMobile;\r\n};\r\n\r\nexport default useIsMobile;\r\n',
          "type": "registry:hook"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_mobile(), use_mobile_exports)))
    },
    "use-mounted": {
      name: "use-mounted",
      description: "",
      type: "registry:hook",
      files: [
        {
          "path": "registry/default/hooks/use-mounted.ts",
          "content": 'import { useEffect, useState } from "react";\r\n\r\nexport function useMounted() {\r\n  const [mounted, setMounted] = useState(false);\r\n  useEffect(() => setMounted(true), []);\r\n  return mounted;\r\n}\r\n',
          "type": "registry:hook"
        }
      ],
      component: React66.lazy(() => Promise.resolve().then(() => (init_use_mounted(), use_mounted_exports)))
    }
  }
};

// registry/registry-styles.ts
var styles = [
  {
    name: "default",
    label: "Default"
  }
];

// lib/rehype-component.ts
function rehypeComponent() {
  return async (tree) => {
    visit(tree, (node) => {
      const srcPath = getNodeAttributeByName(node, "src")?.value;
      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value;
        const fileName = getNodeAttributeByName(node, "fileName")?.value;
        if (!name && !srcPath) {
          return null;
        }
        try {
          for (const style of styles) {
            let src;
            if (srcPath) {
              src = srcPath;
            } else {
              const component = Index[style.name][name];
              src = fileName ? component.files.find((file) => {
                return file.endsWith(`${fileName}.tsx`) || file.endsWith(`${fileName}.ts`);
              }) || component.files[0]?.path : component.files[0]?.path;
            }
            const filePath = src;
            let source = fs.readFileSync(filePath, "utf8");
            source = source.replaceAll(
              `@/registry/${style.name}/`,
              "@/components/"
            );
            source = source.replaceAll("export default", "export");
            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  __src__: src,
                  __style__: style.name
                },
                attributes: [
                  {
                    name: "styleName",
                    type: "mdxJsxAttribute",
                    value: style.name
                  }
                ],
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"]
                    },
                    children: [
                      {
                        type: "text",
                        value: source
                      }
                    ]
                  })
                ]
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
      if (node.name === "ComponentTabs") {
        const name = getNodeAttributeByName(node, "name")?.value;
        if (!name) {
          return null;
        }
        try {
          for (const style of styles) {
            const component = Index[style.name][name];
            const src = component.files[0]?.path;
            const filePath = src;
            let source = fs.readFileSync(filePath, "utf8");
            source = source.replaceAll(
              `@/registry/${style.name}/`,
              "@/components/"
            );
            source = source.replaceAll("export default", "export");
            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  __src__: src
                },
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"]
                    },
                    children: [
                      {
                        type: "text",
                        value: source
                      }
                    ]
                  })
                ]
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}
function getNodeAttributeByName(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

// source.config.ts
var source_config_default = defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    rehypePlugins: [
      rehypeCode,
      rehypeSlug,
      rehypeComponent,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light"
          },
          getHighlighter: () => getHighlighter({
            themes: ["github-dark", "github-light"]
          }),
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ]
    ],
    remarkPlugins: [
      codeImport,
      remarkGfm,
      remarkMath,
      [remarkInstall, { persist: { id: "package-manager" } }],
      [remarkDocGen, { generators: [fileGenerator()] }]
    ]
  }
});
var { docs, meta } = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      preview: z7.boolean().optional(),
      links: z7.object({
        doc: z7.string().optional(),
        api: z7.string().optional()
      }).optional()
    })
  }
});
export {
  source_config_default as default,
  docs,
  meta
};
