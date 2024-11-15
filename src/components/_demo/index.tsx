import * as React from 'react';

export const Index: Record<string, any> = {
  demo: {
    ButtonDemo: {
      name: 'ButtonDemo',
      files: ['components/_demo/ButtonDemo.tsx'],
      component: React.lazy(() =>
        import('@/components/_demo/button/ButtonDemo').then((module) => ({
          default: module.ButtonDemo,
        })),
      ),
    },
    LeverDemo: {
      name: 'LeverDemo',
      files: ['components/_demo/LeverDemo.tsx'],
      component: React.lazy(() =>
        import('@/components/_demo/lever/LeverDemo').then((module) => ({
          default: module.LeverDemo,
        })),
      ),
    },
  },
};
