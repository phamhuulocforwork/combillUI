# CombillUI Project Overview

## Purpose

CombillUI is a modern React component library that provides animated, accessible UI components. It's designed as a monorepo containing individual component packages and shared utilities, with comprehensive documentation.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tools**: Turborepo (monorepo), Vite (package building), tsup (bundling)
- **Package Manager**: pnpm
- **Linting/Formatting**: Biome (with custom rules)
- **Testing**: Vitest + React Testing Library
- **Documentation**: Next.js with Fumadocs
- **UI Primitives**: Radix UI
- **Styling**: Tailwind CSS + tailwind-merge + clsx
- **Animations**: Framer Motion
- **Versioning**: Changesets

## Key Dependencies

- React 19, React DOM 19
- Radix UI components (@radix-ui/\*)
- Tailwind CSS utilities
- Framer Motion for animations
- clsx and tailwind-merge for conditional styling
- TypeScript for type safety

## Project Structure

```txt
combillUI/
├── packages/
│   ├── animated-label-input/     # Animated input component
│   └── shared/                   # Shared utilities and types
├── docs/                         # Next.js documentation site
├── biome.json                    # Linting and formatting config
├── turbo.json                    # Build pipeline config
├── tsconfig.json                 # TypeScript configuration
└── pnpm-workspace.yaml          # Workspace configuration
```
