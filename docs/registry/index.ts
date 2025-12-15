import { examples } from "@/registry/registry-examples";
import { hooks } from "@/registry/registry-hooks";
import { snippets } from "@/registry/registry-snippets";
import { ui } from "@/registry/registry-ui";
import type { Registry } from "@/registry/schema";

import { blocks } from "./registry-blocks";

export const registry: Registry = [
  ...ui,
  ...examples,
  ...snippets,
  ...blocks,
  ...hooks,
];
