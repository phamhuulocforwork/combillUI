import * as fs from "fs";
import * as path from "path";

import { registry } from "@/registry";
import { hooks } from "@/registry/registry-hooks";
import { snippets } from "@/registry/registry-snippets";
import { ui } from "@/registry/registry-ui";
import type { Registry } from "@/registry/schema";
import type { Component, ComponentFile } from "@/registry/schema";

const UI_DIR = path.join(process.cwd(), "registry/default/ui");
const UI_OUTPUT_FILE = path.join(process.cwd(), "registry/registry-ui.ts");

const EXAMPLE_DIR = path.join(process.cwd(), "registry/default/example");
const EXAMPLE_OUTPUT_FILE = path.join(
  process.cwd(),
  "registry/registry-examples.ts",
);

const SNIPPETS_DIR = path.join(process.cwd(), "registry/default/snippets");
const SNIPPETS_OUTPUT_FILE = path.join(
  process.cwd(),
  "registry/registry-snippets.ts",
);

const HOOKS_DIR = path.join(process.cwd(), "registry/default/hooks");
const HOOKS_OUTPUT_FILE = path.join(
  process.cwd(),
  "registry/registry-hooks.ts",
);

const REGISTRY_OUTPUT_FILE = path.join(process.cwd(), "__registry__/index.tsx");

function detectDependencies(content: string): {
  registryDependencies: string[];
  dependencies: string[];
} {
  const registryDeps = new Set<string>();
  const deps = new Set<string>();

  // Match imports from @/components/ui/
  const uiImports = content.match(/@\/components\/ui\/([a-zA-Z-]+)/g);
  if (uiImports) {
    uiImports.forEach((imp) => {
      const component = imp.split("/").pop();
      if (component) {
        registryDeps.add(component);
      }
    });
  }

  // Match package imports
  const importLines = content.match(/^import.*from\s+['"]([^'"@][^'"]+)['"]/gm);
  if (importLines) {
    importLines.forEach((line) => {
      const match = line.match(/from\s+['"]([^'"@][^'"]+)['"]/);
      if (match && match[1]) {
        deps.add(match[1]);
      }
    });
  }

  return {
    registryDependencies: Array.from(registryDeps),
    dependencies: Array.from(deps),
  };
}

function buildUIRegistry() {
  // Read all .tsx files in UI directory
  const files = fs.readdirSync(UI_DIR).filter((file) => file.endsWith(".tsx"));

  // Create registry items
  const registry: Registry = files.map((file) => {
    const name = path.basename(file, ".tsx");
    const relativePath = path
      .join("registry/default/ui", file)
      .replace(/\\/g, "/");

    // Read file content
    const content = fs.readFileSync(path.join(UI_DIR, file), "utf8");
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
  fs.writeFileSync(UI_OUTPUT_FILE, content);
  console.log("✅ Generated registry/registry-ui.ts");
}

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
  fs.writeFileSync(EXAMPLE_OUTPUT_FILE, content);
  console.log("✅ Generated registry/registry-examples.ts");
}

function buildSnippetsRegistry() {
  // Check if snippets directory exists
  if (!fs.existsSync(SNIPPETS_DIR)) {
    fs.mkdirSync(SNIPPETS_DIR, { recursive: true });
    console.log("✅ Created registry/default/snippets directory");
    return;
  }

  // Read all subdirectories in snippets directory
  const subdirs = fs
    .readdirSync(SNIPPETS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const registry: Registry = [];

  // Create a map of category to component names for index.ts
  const categoryComponentsMap: Record<string, string[]> = {};

  // Process each subdirectory
  for (const subdir of subdirs) {
    const subdirPath = path.join(SNIPPETS_DIR, subdir);

    // Initialize the category in the map
    categoryComponentsMap[subdir] = [];

    // Read all .tsx files in the subdirectory
    const files = fs
      .readdirSync(subdirPath)
      .filter((file) => file.endsWith(".tsx"));

    // Process each file in the subdirectory
    for (const file of files) {
      const name = path.basename(file, ".tsx");
      const relativePath = path
        .join("registry/default/snippets", subdir, file)
        .replace(/\\/g, "/");

      // Add component name to the category map
      categoryComponentsMap[subdir].push(name);

      // Read file content
      const content = fs.readFileSync(path.join(subdirPath, file), "utf8");

      registry.push({
        name,
        type: "registry:ui",
        files: [
          {
            path: relativePath,
            content,
            type: "registry:ui",
          },
        ],
      });
    }
  }

  // Generate registry-snippets.ts content
  const content = `import type { Registry } from "@/registry/schema";

export const snippets: Registry = ${JSON.stringify(registry, null, 2)};
`;

  // Write file
  fs.writeFileSync(SNIPPETS_OUTPUT_FILE, content);
  console.log("✅ Generated registry/registry-snippets.ts");

  // Generate index.ts file with category to components mapping
  const indexContent = `// This file is auto-generated by scripts/build-registry.ts
// Do not edit this file directly

${Object.entries(categoryComponentsMap)
  .map(
    ([category, components]) =>
      `export const ${category}Components = ${JSON.stringify(
        components.map((name) => ({ name })),
        null,
        2,
      )};`,
  )
  .join("\n\n")}

export const categories = {
${Object.keys(categoryComponentsMap)
  .map((category) => `  ${category}: ${category}Components,`)
  .join("\n")}
};
`;

  // Write index.ts file
  fs.writeFileSync(path.join(SNIPPETS_DIR, "index.ts"), indexContent);
  console.log("✅ Generated registry/default/snippets/index.ts");
}

function buildHooksRegistry() {
  // Check if hooks directory exists
  if (!fs.existsSync(HOOKS_DIR)) {
    fs.mkdirSync(HOOKS_DIR, { recursive: true });
    console.log("✅ Created registry/default/hooks directory");
    return;
  }

  // Read all .ts and .tsx files in hooks directory
  const files = fs
    .readdirSync(HOOKS_DIR)
    .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"));

  // Create registry items
  const registry: Registry = files.map((file) => {
    const name = path.basename(file, path.extname(file));
    const relativePath = path
      .join("registry/default/hooks", file)
      .replace(/\\/g, "/");

    // Read file content
    const content = fs.readFileSync(path.join(HOOKS_DIR, file), "utf8");
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
  fs.writeFileSync(HOOKS_OUTPUT_FILE, content);
  console.log("✅ Generated registry/registry-hooks.ts");
}

function buildShadcnCli() {
  // Create the registry directory if it doesn't exist
  const registry = path.join(process.cwd(), "public/registry");
  if (!fs.existsSync(registry)) {
    fs.mkdirSync(registry, { recursive: true });
  }

  // Process UI components
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
        path: file.path.split("/").pop() || "",
        content: file.content || "",
        type: file.type,
      })),
    } satisfies Component;

    fs.writeFileSync(
      path.join(registry, `${component.name}.json`),
      JSON.stringify(schema, null, 2),
    );
  }

  // Process snippets
  for (const snippet of snippets) {
    const schema = {
      name: snippet.name,
      type: snippet.type,
      files: snippet.files.map((file) => ({
        path: file.path.split("/").pop() || "",
        content: file.content || "",
        type: file.type,
      })),
    };

    fs.writeFileSync(
      path.join(registry, `${snippet.name}.json`),
      JSON.stringify(schema, null, 2),
    );
  }

  // Process hooks
  for (const hook of hooks) {
    const schema = {
      name: hook.name,
      type: hook.type,
      registryDependencies: hook.registryDependencies || [],
      dependencies: hook.dependencies || [],
      devDependencies: hook.devDependencies || [],
      files: hook.files.map((file) => ({
        path: file.path.split("/").pop() || "",
        content: file.content || "",
        type: file.type,
      })),
    } satisfies Component;

    fs.writeFileSync(
      path.join(registry, `${hook.name}.json`),
      JSON.stringify(schema, null, 2),
    );
  }

  console.log("✅ Generated public/registry");
}

function buildRegistry() {
  const components: Record<string, Component> = {};

  for (const component of registry) {
    const { name, description = "", type, files } = component;

    const processedFiles: ComponentFile[] = files.map((file) => ({
      ...file,
    }));

    components[name] = {
      name,
      description,
      type,
      files: processedFiles,
    };
  }

  const registryContent = `// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react";

export const Index: Record<string, any> = {
  default: {
    ${Object.entries(components)
      .map(
        ([name, component]) => `
    "${name}": {
      name: "${name}",
      description: "${component.description}",
      type: "${component.type}",
      files: ${JSON.stringify(component.files, null, 2)},
      component: React.lazy(() => import("@/${component.files[0].path}")),
    }`,
      )
      .join(",\n")}
  }
};`;

  const registryDir = path.dirname(REGISTRY_OUTPUT_FILE);
  if (!fs.existsSync(registryDir)) {
    fs.mkdirSync(registryDir, { recursive: true });
  }

  fs.writeFileSync(REGISTRY_OUTPUT_FILE, registryContent);
  console.log("✅ Generated __registry__/index.tsx");
}

buildUIRegistry();
buildExampleRegistry();
buildSnippetsRegistry();
buildHooksRegistry();
buildShadcnCli();
buildRegistry();
