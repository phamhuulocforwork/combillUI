import { demos } from '@/components/_demo/registry';
import { existsSync, promises as fs } from 'node:fs';
import path from 'path';

const REGISTRY_PATH = path.join(process.cwd(), 'public/registry');

// Build registry/demos/[name].json
const buildDemos = async () => {
  // Create registry/demos directory if it doesn't exist
  const demosPath = path.join(REGISTRY_PATH, 'demos');
  if (!existsSync(demosPath)) {
    await fs.mkdir(demosPath, { recursive: true });
  }

  // Build individual demo JSON files
  for (const demo of demos) {
    const name = demo.name;
    const componentPath = demo.files[0].replace('@/', '');

    // Read the source file
    const source = await fs.readFile(
      path.join(process.cwd(), 'src', componentPath),
      'utf8',
    );

    // Create demo registry entry
    const demoRegistry = {
      name,
      files: [
        {
          name: path.basename(componentPath),
          content: source,
        },
      ],
    };

    // Write to registry/demos/[name].json
    await fs.writeFile(
      path.join(demosPath, `${name}.json`),
      JSON.stringify(demoRegistry, null, 2),
    );
  }

  console.log('✅ Generated demo registry files');
};

buildDemos();
