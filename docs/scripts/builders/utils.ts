import type { DependencyAnalysis } from "./types";

export function detectDependencies(content: string): DependencyAnalysis {
  const registryDeps = new Set<string>();
  const deps = new Set<string>();

  // Match imports from @/components/ui/
  const uiImports = content.match(/@\/components\/ui\/([a-zA-Z-]+)/g);
  if (uiImports) {
    uiImports.forEach((imp) => {
      const component = imp.split("/").pop();
      if (component) {
        registryDeps.add(component);
      }
    });
  }

  // Match package imports
  const importLines = content.match(/^import.*from\s+['"]([^'"@][^'"]+)['"]/gm);
  if (importLines) {
    importLines.forEach((line) => {
      const match = line.match(/from\s+['"]([^'"@][^'"]+)['"]/);
      if (match && match[1]) {
        deps.add(match[1]);
      }
    });
  }

  return {
    registryDependencies: Array.from(registryDeps),
    dependencies: Array.from(deps),
  };
}
