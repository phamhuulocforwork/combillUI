import * as React from 'react';

export const Index: Record<string, any> = {
  ui: {
    ButtonDemo: {
      name: 'ButtonDemo',
      files: ['components/_demo/ButtonDemo.tsx'],
      component: React.lazy(() =>
        import('@/components/_demo/ButtonDemo').then((module) => ({
          default: module.ButtonDemo,
        })),
      ),
    },
    LeverDemo: {
      name: 'LeverDemo',
      files: ['components/_demo/LeverDemo.tsx'],
      component: React.lazy(() =>
        import('@/components/_demo/LeverDemo').then((module) => ({
          default: module.LeverDemo,
        })),
      ),
    },
  },
};
