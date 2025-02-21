import * as fs from "fs";
import * as path from "path";

import type { Registry } from "@/registry/schema";

const EXAMPLE_DIR = path.join(process.cwd(), "registry/default/example");
const OUTPUT_FILE = path.join(process.cwd(), "registry/registry-examples.ts");

function buildExampleRegistry() {
  // Read all .tsx files in example directory
  const files = fs
    .readdirSync(EXAMPLE_DIR)
    .filter((file) => file.endsWith(".tsx"));

  // Create registry items
  const registry: Registry = files.map((file) => {
    const name = path.basename(file, ".tsx");
    const relativePath = path
      .join("registry/default/example", file)
      .replace(/\\/g, "/");

    return {
      name,
      type: "registry:example",
      files: [
        {
          path: relativePath,
          type: "registry:example",
        },
      ],
    };
  });

  // Generate registry-examples.ts content
  const content = `import type { Registry } from "@/registry/schema";

export const examples: Registry = ${JSON.stringify(registry, null, 2)};
`;

  // Write file
  fs.writeFileSync(OUTPUT_FILE, content);
  console.log("✅ Generated registry/registry-examples.ts");
}

buildExampleRegistry();
