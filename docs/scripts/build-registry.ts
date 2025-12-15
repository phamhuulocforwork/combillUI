import {
  buildBlockRegistry,
  buildExampleRegistry,
  buildHooksRegistry,
  buildMainRegistry,
  buildShadcnCli,
  buildSnippetsRegistry,
  buildUIRegistry,
} from "./builders";

async function main(): Promise<void> {
  console.log("🚀 Starting registry build process...");

  try {
    console.log("\n📦 Phase 1: Building individual registries...");
    await Promise.all([
      Promise.resolve(buildUIRegistry()),
      Promise.resolve(buildExampleRegistry()),
      Promise.resolve(buildSnippetsRegistry()),
      Promise.resolve(buildBlockRegistry()),
      Promise.resolve(buildHooksRegistry()),
    ]);

    console.log("\n🔧 Phase 2: Building CLI files...");
    await buildShadcnCli();

    console.log("\n🎯 Phase 3: Building main registry...");
    await buildMainRegistry();

    console.log("\n✅ Registry build completed successfully!");
    console.log("📋 Summary:");
    console.log("   • Generated registry/registry-ui.ts");
    console.log("   • Generated registry/registry-examples.ts");
    console.log("   • Generated registry/registry-snippets.ts");
    console.log("   • Generated registry/.cache/default/blocks/*.json");
    console.log("   • Generated registry/registry-hooks.ts");
    console.log("   • Generated public/registry/*.json files");
    console.log("   • Generated __registry__/index.tsx");
  } catch (error) {
    console.error("\n❌ Build failed:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { main as buildRegistry };
