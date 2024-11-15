type RegistryDemoItem = {
  name: string;
  files: string[];
};

type RegistryDemos = RegistryDemoItem[];

const buildDemos = (component: string, demos: string[]): RegistryDemos => {
  return demos.map((demo) => {
    return {
      name: `${component}-${demo}`,
      type: 'registry:demo',
      files: [`@/components/_demo/${component}/${demo}.tsx`],
    };
  });
};

export const demos: RegistryDemos = [
  ...buildDemos('button', ['ButtonDemo']),
  ...buildDemos('lever', ['LeverDemo']),
];
