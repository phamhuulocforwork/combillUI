import * as fs from "fs";
import * as path from "path";

import type { Registry } from "@/registry/schema";

const SNIPPETS_DIR = path.join(process.cwd(), "registry/default/snippets");
const OUTPUT_FILE = path.join(process.cwd(), "registry/registry-snippets.ts");

function buildSnippetsRegistry() {
  // Check if snippets directory exists
  if (!fs.existsSync(SNIPPETS_DIR)) {
    fs.mkdirSync(SNIPPETS_DIR, { recursive: true });
    console.log("✅ Created registry/default/snippets directory");
    return;
  }

  // Read all .tsx files in snippets directory
  const files = fs
    .readdirSync(SNIPPETS_DIR)
    .filter((file) => file.endsWith(".tsx"));

  // Create registry items
  const registry: Registry = files.map((file) => {
    const name = path.basename(file, ".tsx");
    const relativePath = path
      .join("registry/default/snippets", file)
      .replace(/\\/g, "/");

    // Read file content
    const content = fs.readFileSync(path.join(SNIPPETS_DIR, file), "utf8");

    return {
      name,
      type: "registry:snippet",
      files: [
        {
          path: relativePath,
          content,
          type: "registry:snippet",
        },
      ],
    };
  });

  // Generate registry-snippets.ts content
  const content = `import type { Registry } from "@/registry/schema";

export const snippets: Registry = ${JSON.stringify(registry, null, 2)};
`;

  // Write file
  fs.writeFileSync(OUTPUT_FILE, content);
  console.log("✅ Generated registry/registry-snippets.ts");
}

buildSnippetsRegistry();
