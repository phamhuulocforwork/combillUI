import CodeEditorDemo from "./code-editor-demo";

export default function TestPage() {
  return (
    <main className='flex flex-col items-center justify-center gap-4 min-h-screen'>
      <section className='container flex flex-col items-center justify-center gap-4'>
        <CodeEditorDemo />
      </section>
    </main>
  );
}
