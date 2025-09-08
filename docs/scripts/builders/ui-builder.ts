import * as fs from "fs";
import * as path from "path";

import type { Registry } from "@/registry/schema";

import { config } from "./config";
import { detectDependencies } from "./utils";

export function buildUIRegistry(): void {
  console.log("🔨 Building UI registry...");

  // Read all .tsx files in UI directory
  const files = fs
    .readdirSync(config.UI_DIR)
    .filter((file) => file.endsWith(".tsx"));

  // Create registry items
  const registry: Registry = files.map((file) => {
    const name = path.basename(file, ".tsx");
    const relativePath = path
      .join("registry/default/ui", file)
      .replace(/\\/g, "/");

    // Read file content
    const content = fs.readFileSync(path.join(config.UI_DIR, file), "utf8");
    const { registryDependencies, dependencies } = detectDependencies(content);

    return {
      name,
      type: "registry:ui",
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
          type: "registry:ui",
        },
      ],
    };
  });

  // Generate registry-ui.ts content
  const content = `import type { Registry } from "@/registry/schema";

export const ui: Registry = ${JSON.stringify(registry, null, 2)};
`;

  // Write file
  fs.writeFileSync(config.UI_OUTPUT_FILE, content);
  console.log("✅ Generated registry/registry-ui.ts");
}
