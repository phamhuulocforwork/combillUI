import { demos } from '@/components/_demo/registry';
import { existsSync, promises as fs } from 'node:fs';
import path from 'path';

const REGISTRY_PATH = path.join(process.cwd(), 'public/registry');

const buildDemos = async () => {
  const demosPath = path.join(REGISTRY_PATH, 'demos');
  if (!existsSync(demosPath)) {
    await fs.mkdir(demosPath, { recursive: true });
  }

  for (const demo of demos) {
    const name = demo.name;
    const componentPath = demo.files[0].replace('@/', '');

    const source = await fs.readFile(
      path.join(process.cwd(), 'src', componentPath),
      'utf8',
    );

    const demoRegistry = {
      name,
      files: [
        {
          name: path.basename(componentPath),
          content: source,
          lang: 'tsx',
        },
      ],
    };

    await fs.writeFile(
      path.join(demosPath, `${name}.json`),
      JSON.stringify(demoRegistry, null, 2),
    );
  }

  console.log('✅ Generated demos');
};

buildDemos();
