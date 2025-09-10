# Architecture and Design Patterns

## Component Architecture

### Atomic Design Principles
CombillUI follows atomic design with clear separation:
- **Atoms**: Basic UI elements (buttons, inputs, labels)
- **Molecules**: Composite components (input with label, form fields)
- **Organisms**: Complex UI sections (forms, navigation)
- **Templates**: Page layouts
- **Pages**: Complete page implementations

### Component Composition
- Use Radix UI Slot pattern for flexible composition
- Prefer composition over inheritance
- Allow `asChild` prop for component polymorphism
- Support `className` prop for styling customization

```typescript
// Example composition pattern
interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return <Comp ref={ref} className={cn("base-styles", className)} {...props} />;
  }
);
```

## State Management Patterns

### Local State
- Use `useState` sparingly, prefer derived state
- Co-locate state with components that use it
- Avoid lifting state unnecessarily
- Use `useReducer` for complex state logic

### Props vs State
- Prefer props over internal state when possible
- Use controlled components pattern
- Support uncontrolled usage with `defaultValue` props
- Provide `onChange` callbacks for state synchronization

## Animation Patterns

### Framer Motion Integration
- Use `motion.div` for animatable containers
- Prefer CSS transitions for simple animations
- Use `AnimatePresence` for enter/exit animations
- Respect `prefers-reduced-motion` setting

```typescript
import { motion } from "framer-motion";

const AnimatedComponent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.2 }}
  >
    Content
  </motion.div>
);
```

## TypeScript Patterns

### Generic Components
```typescript
interface SelectProps<T> {
  options: T[];
  value: T | null;
  onChange: (value: T) => void;
  getDisplayValue: (option: T) => string;
}

function Select<T>({ options, value, onChange, getDisplayValue }: SelectProps<T>) {
  // Implementation
}
```

### Utility Types
```typescript
type ComponentProps = React.ComponentProps<typeof BaseComponent>;
type OmitProps = Omit<ComponentProps, "conflictingProp">;
type PartialProps = Partial<ComponentProps>;
```

## Error Handling
- Use error boundaries for React components
- Provide fallback UI for error states
- Log errors appropriately
- Don't expose internal errors to users

## Performance Patterns
- Use `React.memo` for expensive components
- Implement proper dependency arrays in hooks
- Use `useCallback` and `useMemo` appropriately
- Lazy load components with `React.lazy`
- Optimize bundle splitting with dynamic imports

## Accessibility Patterns
- Use semantic HTML elements
- Provide ARIA labels and descriptions
- Support keyboard navigation
- Manage focus appropriately
- Test with screen readers
- Meet WCAG AA contrast requirements

## Testing Patterns
- Unit test component logic
- Integration test user interactions
- Test accessibility features
- Mock external dependencies
- Use testing-library for DOM testing
- Test error states and edge cases

## Build and Bundle Patterns
- Use tsup for component library bundling
- Support both ESM and CommonJS outputs
- Generate TypeScript declaration files
- Minimize bundle size
- Tree shake unused exports
- Support both development and production builds