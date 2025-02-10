// Adopted from https://niels.foo/post/publishing-custom-shadcn-ui-components
import * as fs from 'fs';
import * as path from 'path';

import { ui } from '@/registry/registry-ui';
import type { Component } from '@/registry/schema';

function buildShadcnCli() {
  // Create the registry directory if it doesn't exist
  const registry = path.join(process.cwd(), 'public/registry/default/ui');
  if (!fs.existsSync(registry)) {
    fs.mkdirSync(registry, { recursive: true });
  }

  // Create the registry files
  for (const component of ui) {
    const schema = {
      name: component.name,
      type: component.type,
      registryDependencies: component.registryDependencies || [],
      dependencies: component.dependencies || [],
      devDependencies: component.devDependencies || [],
      tailwind: component.tailwind || {},
      cssVars: component.cssVars || {
        light: {},
        dark: {},
      },
      files: component.files.map((file) => ({
        path: file.path.split('/').pop() || '',
        content: file.content || '',
        type: file.type,
      })),
    } satisfies Component;

    fs.writeFileSync(
      path.join(registry, `${component.name}.json`),
      JSON.stringify(schema, null, 2),
    );
  }
  console.log('✅ Generated registry/default/ui');
}

buildShadcnCli();
