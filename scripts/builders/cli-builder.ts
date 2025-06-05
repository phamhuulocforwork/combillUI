import * as fs from "fs";
import * as path from "path";

import type { Component } from "@/registry/schema";

export async function buildShadcnCli(): Promise<void> {
  console.log("🔨 Building Shadcn CLI files...");

  // Dynamically import registry data after they've been generated
  const { ui } = await import("@/registry/registry-ui");
  const { snippets } = await import("@/registry/registry-snippets");
  const { hooks } = await import("@/registry/registry-hooks");

  // Create the registry directory if it doesn't exist
  const registryDir = path.join(process.cwd(), "public/registry");
  if (!fs.existsSync(registryDir)) {
    fs.mkdirSync(registryDir, { recursive: true });
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
      path.join(registryDir, `${component.name}.json`),
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
      path.join(registryDir, `${snippet.name}.json`),
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
      path.join(registryDir, `${hook.name}.json`),
      JSON.stringify(schema, null, 2),
    );
  }

  console.log("✅ Generated public/registry");
}
