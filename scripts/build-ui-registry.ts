import * as fs from 'fs';
import * as path from 'path';

import type { Registry } from '@/registry/schema';

const UI_DIR = path.join(process.cwd(), 'registry/default/ui');
const OUTPUT_FILE = path.join(process.cwd(), 'registry/registry-ui.ts');

function detectDependencies(content: string): {
  registryDependencies: string[];
  dependencies: string[];
} {
  const registryDeps = new Set<string>();
  const deps = new Set<string>();

  // Match imports from @/components/ui/
  const uiImports = content.match(/@\/components\/ui\/([a-zA-Z-]+)/g);
  if (uiImports) {
    uiImports.forEach((imp) => {
      const component = imp.split('/').pop();
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

function buildUIRegistry() {
  // Read all .tsx files in UI directory
  const files = fs.readdirSync(UI_DIR).filter((file) => file.endsWith('.tsx'));

  // Create registry items
  const registry: Registry = files.map((file) => {
    const name = path.basename(file, '.tsx');
    const relativePath = path
      .join('registry/default/ui', file)
      .replace(/\\/g, '/');

    // Read file content
    const content = fs.readFileSync(path.join(UI_DIR, file), 'utf8');
    const { registryDependencies, dependencies } = detectDependencies(content);

    return {
      name,
      type: 'registry:ui',
      registryDependencies,
      dependencies,
      devDependencies: [],
      tailwind: {},
      cssVars: {
        light: {},
        dark: {},
      },
      files: [
        {
          path: relativePath,
          content,
          type: 'registry:ui',
        },
      ],
    };
  });

  // Generate registry-ui.ts content
  const content = `import type { Registry } from "@/registry/schema";

export const ui: Registry = ${JSON.stringify(registry, null, 2)};
`;

  // Write file
  fs.writeFileSync(OUTPUT_FILE, content);
  console.log('✅ Generated registry/registry-ui.ts');
}

buildUIRegistry();
