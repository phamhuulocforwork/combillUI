import * as fs from 'fs';
import * as path from 'path';

import type { Registry } from '@/registry/schema';

import { config } from './config';

export function buildExampleRegistry(): void {
  console.log('🔨 Building example registry...');

  // Read all .tsx files in example directory
  const files = fs
    .readdirSync(config.EXAMPLE_DIR)
    .filter((file) => file.endsWith('.tsx'));

  // Create registry items
  const registry: Registry = files.map((file) => {
    const name = path.basename(file, '.tsx');
    const relativePath = path
      .join('registry/default/example', file)
      .replace(/\\/g, '/');

    return {
      name,
      type: 'registry:example',
      files: [
        {
          path: relativePath,
          type: 'registry:example',
        },
      ],
    };
  });

  // Generate registry-examples.ts content
  const content = `import type { Registry } from "@/registry/schema";

export const examples: Registry = ${JSON.stringify(registry, null, 2)};
`;

  // Write file
  fs.writeFileSync(config.EXAMPLE_OUTPUT_FILE, content);
  console.log('✅ Generated registry/registry-examples.ts');
}
