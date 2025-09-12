# Code Style and Conventions

## TypeScript Configuration

- **Target**: ES2022
- **Module**: ESNext with bundler resolution
- **Strict mode**: Enabled with `noUncheckedIndexedAccess`
- **JSX**: Preserve mode (for Next.js compatibility)
- **Lib**: DOM, DOM.Iterable, ES2022

## Formatting (Biome)

- **Indentation**: 2 spaces
- **Line endings**: Auto-detected
- **Quotes**: Double quotes preferred
- **Semicolons**: Required
- **Trailing commas**: ES5 style
- **Import organization**: Auto-organized by Biome

## Naming Conventions

- **Directories**: kebab-case (e.g., `animated-label-input`)
- **Files**: kebab-case for components, camelCase for utilities
- **Components**: PascalCase (e.g., `AnimatedLabelInput`)
- **Functions**: camelCase
- **Types/Interfaces**: PascalCase
- **Constants**: SCREAMING_SNAKE_CASE
- **Variables**: camelCase

## Component Patterns

- Use `React.forwardRef` for all components that need refs
- Set `displayName` for all components
- Use `React.ElementRef<typeof Component>` for ref types
- Prefer functional components over class components
- Use `React.useImperativeHandle` when exposing imperative API

## Import/Export Style

```typescript
// Preferred: named exports
export { AnimatedLabelInput };

// Avoid: default exports
// export default AnimatedLabelInput;

// Import organization (Biome handles automatically)
import * as React from "react";
import { useState } from "react";

import { Slot } from "@radix-ui/react-slot";
import { cn } from "@combillui/shared";

import type { AnimatedLabelInputProps } from "./types";
import { AnimatedInput } from "./animated-input";
```

## Styling Patterns

- Use `cn()` utility for conditional classes (clsx + tailwind-merge)
- Prefer utility-first approach with Tailwind CSS
- Use CSS variables for theming when needed
- Avoid inline styles except for dynamic values

```typescript
import { cn } from "@combillui/shared";

interface ComponentProps {
  className?: string;
  variant?: "default" | "destructive";
}

function Component({ className, variant = "default" }: ComponentProps) {
  return (
    <div
      className={cn(
        "base-styles",
        {
          "bg-red-500": variant === "destructive",
          "bg-blue-500": variant === "default",
        },
        className
      )}
    />
  );
}
```

## TypeScript Patterns

- Use interfaces for object props
- Prefer `type` for unions and utility types
- Use `React.ComponentProps<typeof Component>` for extending component props
- Enable strict null checks and no implicit any

```typescript
interface AnimatedLabelInputProps extends React.ComponentProps<"input"> {
  label?: string;
  asChild?: boolean;
}

type ComponentVariant = "default" | "destructive" | "outline";
```

## File Structure

```txt
packages/component-name/
├── src/
│   ├── index.ts              # Main exports
│   ├── component.tsx         # Main component
│   ├── sub-component.tsx     # Sub-components
│   ├── utils.ts              # Component utilities
│   └── types.ts              # Type definitions
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── README.md
```

## Testing Conventions

- Use `.test.ts` or `.test.tsx` extensions
- Use `describe` blocks for component suites
- Use `it` for individual test cases
- Mock external dependencies
- Test user interactions with `@testing-library/user-event`
- Test accessibility features

## Git Conventions

- Use conventional commits
- Squash feature branches before merging
- Use changesets for versioning (`pnpm changeset`)
- Keep PRs focused on single features
