import { examples } from '@/registry/registry-examples';
import { hooks } from '@/registry/registry-hooks';
import { snippets } from '@/registry/registry-snippets';
import { ui } from '@/registry/registry-ui';
import type { Registry } from '@/registry/schema';

export const registry: Registry = [...ui, ...examples, ...snippets, ...hooks];
