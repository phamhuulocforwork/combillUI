import * as path from 'path';

import type { BuildConfig } from './types';

export const config: BuildConfig = {
  UI_DIR: path.join(process.cwd(), 'registry/default/ui'),
  UI_OUTPUT_FILE: path.join(process.cwd(), 'registry/registry-ui.ts'),
  EXAMPLE_DIR: path.join(process.cwd(), 'registry/default/example'),
  EXAMPLE_OUTPUT_FILE: path.join(
    process.cwd(),
    'registry/registry-examples.ts',
  ),
  SNIPPETS_DIR: path.join(process.cwd(), 'registry/default/snippets'),
  SNIPPETS_OUTPUT_FILE: path.join(
    process.cwd(),
    'registry/registry-snippets.ts',
  ),
  HOOKS_DIR: path.join(process.cwd(), 'registry/default/hooks'),
  HOOKS_OUTPUT_FILE: path.join(process.cwd(), 'registry/registry-hooks.ts'),
  REGISTRY_OUTPUT_FILE: path.join(process.cwd(), '__registry__/index.tsx'),
};
