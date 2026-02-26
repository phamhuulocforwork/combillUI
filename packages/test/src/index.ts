/**
 * Returns a hello world message
 * @param name - Optional name to greet
 * @returns Hello world message
 */
export function helloWorld(name?: string): string {
  return name !== undefined ? `Hello ${name}!` : 'Hello World';
}

/**
 * React component that displays a hello world message
 */
export const HelloWorld = ({ name }: { name?: string } = {}) => {
  return helloWorld(name);
};

/**
 * Default export for backward compatibility
 */
export default helloWorld;
