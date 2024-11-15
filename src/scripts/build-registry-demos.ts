//TODO: Đọc toàn bộ file demo từ @/components/_demo tạo file registry.ts khai báo các component demo

import { existsSync, readdirSync, promises as fs } from 'node:fs';
import path from 'path';
import { rimraf } from 'rimraf';

async function buildRegistryDemos() {
  let index = `
type RegistryDemoItem = {
  name: string;
  files: string[];
};

type RegistryDemos = RegistryDemoItem[];

const buildDemos = (component: string, demos: string[]): RegistryDemos => {
  return demos.map((demo) => {
    return {
      name: \`\${component}-\${demo}\`,
      files: [\`@/components/_demo/\${component}/\${demo}.tsx\`],
    };
  });
};

export const demos: RegistryDemos = [
`;

  const components = readdirSync(
    path.join(process.cwd(), 'src/components/_demo'),
  ).filter((dir) => {
    return dir !== 'index.tsx' && dir !== 'registry.ts';
  });

  for (const component of components) {
    const demoFiles = readdirSync(
      path.join(process.cwd(), 'src/components/_demo', component),
    ).filter((file) => file.endsWith('.tsx'));

    const demos = demoFiles.map((file) => file.replace('.tsx', ''));

    if (demos.length) {
      index += `  ...buildDemos("${component}", [${demos.map(
        (demo) => `"${demo}"`,
      )}]),\n`;
    }
  }

  index += `]
`;

  rimraf.sync(path.join(process.cwd(), 'src/components/_demo/registry.ts'));
  await fs.writeFile(
    path.join(process.cwd(), 'src/components/_demo/registry.ts'),
    index,
  );
  console.log('✅ Done!');
}

buildRegistryDemos();
