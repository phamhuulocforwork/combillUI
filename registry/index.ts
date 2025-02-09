import { ui } from "@/registry/registry-ui";
import { examples } from "@/registry/registry-examples";
import type { Registry } from "@/registry/schema";

export const registry: Registry = [...ui, ...examples];
