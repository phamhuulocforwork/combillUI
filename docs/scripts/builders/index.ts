export { buildUIRegistry } from "./ui-builder";
export { buildExampleRegistry } from "./example-builder";
export { buildSnippetsRegistry } from "./snippets-builder";
export { buildHooksRegistry } from "./hooks-builder";
export { buildShadcnCli } from "./cli-builder";
export { buildMainRegistry } from "./main-builder";

export { config } from "./config";
export { detectDependencies } from "./utils";
export type { DependencyAnalysis, BuildConfig, BuilderFunction } from "./types";
