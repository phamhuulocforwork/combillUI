import * as fs from "fs";
import * as path from "path";
import type { Registry } from "@/registry/schema";

const UI_DIR = path.join(process.cwd(), "registry/default/ui");
const OUTPUT_FILE = path.join(process.cwd(), "registry/registry-ui.ts");

function buildUIRegistry() {
  // Đọc tất cả các file .tsx trong thư mục UI
  const files = fs.readdirSync(UI_DIR).filter((file) => file.endsWith(".tsx"));

  // Tạo registry items
  const registry: Registry = files.map((file) => {
    const name = path.basename(file, ".tsx");
    const relativePath = path.join("registry/default/ui", file).replace(/\\/g, "/");

    return {
      name,
      type: "registry:ui",
      files: [
        {
          path: relativePath,
          type: "registry:ui",
        },
      ],
    };
  });

  // Tạo nội dung file registry-ui.ts
  const content = `import type { Registry } from "@/registry/schema";

export const ui: Registry = ${JSON.stringify(registry, null, 2)};
`;

  // Ghi file
  fs.writeFileSync(OUTPUT_FILE, content);
  console.log("✅ Generated registry/registry-ui.ts");
}

buildUIRegistry();
