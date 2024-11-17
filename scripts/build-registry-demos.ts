/**
 * This script scans all demo components in @/components/_demo directory and generates a registry.ts file
 * The registry.ts file contains metadata about each demo component including:
 * - name: Name of the demo component
 * - files: Array of file paths for the demo
 * - registry: Path to the JSON registry file containing the demo source code
 */

import { readdirSync, promises as fs } from 'node:fs';
import path from 'path';
import { rimraf } from 'rimraf';

async function buildRegistryDemos() {
  let index = `// This file is autogenerated by scripts/build-registry-demos.ts
// Do not edit this file directly.

type RegistryDemoItem = {
  name: string;
  files: string[];
  registry: string;
};

type RegistryDemos = RegistryDemoItem[];

const buildDemos = (component: string, demos: string[]): RegistryDemos => {
  return demos.map((demo) => {
    return {
      name: \`\${demo}\`,
      files: [\`@/components/_demo/\${component}/\${demo}.tsx\`],
    };
  });
};

export const demos: RegistryDemos = [
`;

  const components = readdirSync(
    path.join(process.cwd(), 'src/components/_demo'),
  ).filter((dir) => {
    return dir !== 'index.tsx' && dir !== 'registry.ts';
  });

  for (const component of components) {
    const demoFiles = readdirSync(
      path.join(process.cwd(), 'src/components/_demo', component),
    ).filter((file) => file.endsWith('.tsx'));

    const demos = demoFiles.map((file) => file.replace('.tsx', ''));

    if (demos.length) {
      index += `  ...buildDemos("${component}", [${demos.map(
        (demo) => `"${demo}"`,
      )}]),\n`;
    }
  }

  index += `]
`;

  rimraf.sync(path.join(process.cwd(), 'src/components/_demo/registry.ts'));
  await fs.writeFile(
    path.join(process.cwd(), 'src/components/_demo/registry.ts'),
    index,
  );
  console.log('✅ Generated demo registry.ts file');
}

buildRegistryDemos();
