import { Lever } from '@/components';

export default function Home() {
  return (
    <main className='flex min-h-screen w-full items-center justify-center'>
      {/* <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-center text-4xl font-bold'>
          Welcome to the TailwindCSS UI Kit!
        </h1>
        <p className='text-center text-lg'>
          This is a Next.js starter template with TailwindCSS and TypeScript.
        </p>
      </div> */}
      <div className='flex flex-col items-center justify-center gap-4'>
        <Lever></Lever>
      </div>
    </main>
  );
}
