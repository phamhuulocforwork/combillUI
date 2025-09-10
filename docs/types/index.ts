export type ControlledProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  "defaultValue" | "value" | "onValueChange"
>;

export type EmptyProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  keyof React.ComponentPropsWithoutRef<T>
>;

export enum EditorTheme {
  ESPRESSO = "espresso",
  COBALT = "cobalt",
  DRACULA = "dracula",
}

export enum EditorLanguage {
  HTML = "html",
  JAVASCRIPT = "javascript",
}

export interface CompositionProps {
  /**
   * Whether to merge props with the immediate child.
   * @default false
   */
  asChild?: boolean;
}
