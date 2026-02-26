import type { CompositionProps } from '@/types';

export interface RootProps extends CompositionProps {}

export interface AnimatedLabelInputProps extends RootProps {
  /**
   * The label text to display for the input.
   * This label will animate when the input is focused or has a value.
   * @example
   * <AnimatedLabelInput label="Email" />
   */
  label?: string;
}
