import * as fs from "fs";
import * as path from "path";

import type { Registry } from "@/registry/schema";

import { config } from "./config";
import { detectDependencies } from "./utils";

export function buildHooksRegistry(): void {
  console.log("🔨 Building hooks registry...");

  // Check if hooks directory exists
  if (!fs.existsSync(config.HOOKS_DIR)) {
    fs.mkdirSync(config.HOOKS_DIR, { recursive: true });
    console.log("✅ Created registry/default/hooks directory");
    return;
  }

  // Read all .ts and .tsx files in hooks directory
  const files = fs
    .readdirSync(config.HOOKS_DIR)
    .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"));

  // Create registry items
  const registry: Registry = files.map((file) => {
    const name = path.basename(file, path.extname(file));
    const relativePath = path
      .join("registry/default/hooks", file)
      .replace(/\\/g, "/");

    // Read file content
    const content = fs.readFileSync(path.join(config.HOOKS_DIR, file), "utf8");
    const { registryDependencies, dependencies } = detectDependencies(content);

    return {
      name,
      type: "registry:hook",
      registryDependencies,
      dependencies,
      devDependencies: [],
      files: [
        {
          path: relativePath,
          content,
          type: "registry:hook",
        },
      ],
    };
  });

  // Generate registry-hooks.ts content
  const content = `import type { Registry } from "@/registry/schema";

export const hooks: Registry = ${JSON.stringify(registry, null, 2)};
`;

  // Write file
  fs.writeFileSync(config.HOOKS_OUTPUT_FILE, content);
  console.log("✅ Generated registry/registry-hooks.ts");
}
