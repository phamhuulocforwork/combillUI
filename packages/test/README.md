# @combillui/test

A simple test package that provides a hello world function and React component.

## Installation

```bash
npm install @combillui/test
# or
pnpm add @combillui/test
# or
yarn add @combillui/test
# or
bun add @combillui/test
```

## Usage

### JavaScript/TypeScript Function

```typescript
import { helloWorld } from "@combillui/test";

// Basic usage
console.log(helloWorld()); // "Hello World"

// With name
console.log(helloWorld("Alice")); // "Hello Alice!"
```

### React Component

```tsx
import { HelloWorld } from "@combillui/test";

function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld name="React" />
    </div>
  );
}
```

## API

### `helloWorld(name?: string): string`

Returns a hello world message.

- `name` (optional): Name to greet
- Returns: Hello world message string

### `HelloWorld` Component

A React component that displays a hello world message.

Props:

- `name` (optional): Name to greet

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build package
npm run build

# Type checking
npm run typecheck

# Development watch mode
npm run dev
```

## License

MIT
