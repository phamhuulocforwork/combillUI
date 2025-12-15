import type { Registry } from "@/registry/schema";

export interface DependencyAnalysis {
  registryDependencies: string[];
  dependencies: string[];
}

export interface BuildConfig {
  UI_DIR: string;
  UI_OUTPUT_FILE: string;
  EXAMPLE_DIR: string;
  EXAMPLE_OUTPUT_FILE: string;
  SNIPPETS_DIR: string;
  SNIPPETS_OUTPUT_FILE: string;
  HOOKS_DIR: string;
  HOOKS_OUTPUT_FILE: string;
  BLOCKS_DIR: string;
  BLOCKS_CACHE_DIR: string;
  REGISTRY_OUTPUT_FILE: string;
}

export type BuilderFunction = () => Promise<void> | void;
