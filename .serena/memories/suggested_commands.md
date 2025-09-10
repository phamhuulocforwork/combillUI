# Development Commands for CombillUI

## Essential Commands

### Package Management
```bash
pnpm install              # Install all dependencies
pnpm add <package>        # Add a new dependency
pnpm add -D <package>     # Add a dev dependency
pnpm remove <package>     # Remove a dependency
```

### Development
```bash
pnpm dev                  # Start all development servers (packages + docs)
pnpm docs:dev            # Start only the docs development server
pnpm --filter=<package> dev  # Start dev server for specific package
```

### Building
```bash
pnpm build               # Build all packages and docs
pnpm build:packages      # Build only component packages
pnpm build:registry      # Build component registry for docs
pnpm --filter=<package> build  # Build specific package
```

### Code Quality
```bash
pnpm lint                # Lint all code with Biome
pnpm lint:fix            # Fix linting issues automatically
pnpm typecheck           # Run TypeScript type checking
pnpm check               # Run both linting and type checking
pnpm test                # Run all tests with Vitest
pnpm --filter=<package> test  # Test specific package
```

### Maintenance
```bash
pnpm clean               # Clean all build artifacts and caches
pnpm clean:all           # Deep clean including node_modules
```

### Publishing
```bash
pnpm release             # Publish packages using changesets
```

## Common Workflows

### New Component Development
1. Create new package directory under `packages/`
2. Add to workspace in `pnpm-workspace.yaml`
3. Implement component with TypeScript
4. Add to docs registry
5. Write tests
6. `pnpm build` and `pnpm test`

### Code Changes
1. Make changes to source files
2. `pnpm lint:fix` to format code
3. `pnpm typecheck` to verify types
4. `pnpm test` to run tests
5. `pnpm build` to ensure builds work

### Documentation
1. `pnpm docs:dev` to preview docs locally
2. Update component docs in `docs/content/`
3. `pnpm build:registry` to update component examples
4. `pnpm build` to build complete docs site