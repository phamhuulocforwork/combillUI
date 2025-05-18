"use client";

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { CodeEditor } from "@/registry/default/ui/code-editor";

const defaultCode = `// Welcome to the Code Editor
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Try editing this code
console.log(greet("World"));`;

export default function TestPage() {
  const [code, setCode] = useState(defaultCode);

  return (
    <main className='flex flex-col items-center justify-center gap-4 min-h-screen'>
      <section className='container flex flex-col items-center justify-center gap-4'>
        <Card className='w-full'>
          <CardHeader className='pb-3'>
            <CardTitle>Code Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeEditor value={code} onChange={setCode} height='400px' />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
