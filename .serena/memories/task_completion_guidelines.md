# Task Completion Guidelines

## Pre-Commit Checklist
Before committing any changes, ensure:

1. **Code Quality**
   ```bash
   pnpm lint:fix          # Auto-fix linting issues
   pnpm typecheck         # Verify TypeScript types
   pnpm test              # Run test suite
   ```

2. **Build Verification**
   ```bash
   pnpm build             # Ensure all packages build successfully
   ```

3. **Documentation Updates**
   - Update README files for changed packages
   - Update docs if new components or APIs are added
   - Update TypeScript types if interfaces change

## Code Review Standards
- All code must pass Biome linting
- TypeScript compilation must succeed with strict mode
- Tests must pass (aim for >80% coverage)
- Components must be accessible (WCAG AA compliant)
- Performance should not regress significantly

## Component Development Workflow
When creating new components:

1. **Setup Package Structure**
   ```bash
   mkdir packages/new-component
   cd packages/new-component
   pnpm init
   ```

2. **Configure Build Tools**
   - Add `tsup.config.ts` for bundling
   - Add `tsconfig.json` extending root config
   - Update workspace configuration

3. **Implement Component**
   - Create main component with TypeScript
   - Add proper ref forwarding
   - Include accessibility features
   - Use Radix UI primitives where applicable

4. **Add Documentation**
   - Create component documentation in docs
   - Add usage examples
   - Update component registry

5. **Testing**
   - Write unit tests with Vitest
   - Test user interactions
   - Test accessibility features
   - Test edge cases

6. **Versioning**
   ```bash
   pnpm changeset    # Create changeset for new component
   ```

## Release Process
1. **Version Bump**
   ```bash
   pnpm changeset    # Create changesets for changes
   pnpm changeset version  # Update versions based on changesets
   ```

2. **Publishing**
   ```bash
   pnpm release     # Build and publish packages
   ```

3. **Documentation Deployment**
   ```bash
   pnpm build       # Build docs site
   # Deploy docs/ build output
   ```

## Common Pitfalls to Avoid
- Don't commit directly to main branch
- Don't merge without CI passing
- Don't publish without proper versioning
- Don't forget to update peer dependencies
- Don't break existing APIs without migration guide
- Don't add large binaries to git

## Performance Considerations
- Minimize bundle size impact
- Use tree shaking friendly exports
- Optimize re-renders with React.memo when appropriate
- Lazy load heavy dependencies
- Use CSS-in-JS only when necessary (prefer Tailwind)

## Accessibility Requirements
- All interactive elements must have proper ARIA labels
- Color contrast must meet WCAG AA standards
- Keyboard navigation must work
- Screen reader support required
- Focus management for complex interactions