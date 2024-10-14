import { ButtonDemo, CodeBlock, ComponentPreview } from '@/components';

export default function Home() {
  return (
    <div className='container min-h-screen'>
      {/* <ComponentPreview>
        <ButtonDemo />
      </ComponentPreview> */}

      <CodeBlock
        preview="import React from 'react';"
        files={[
          {
            fileName: 'example.tsx',
            code: `
import React from 'react';

const Example = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Example;`,
            lang: 'typescript',
          },
        ]}
      />
    </div>
  );
}
