import { Lever } from '@/components';
import { cn } from '@/lib/utils';

export default function Home() {
  const handleToggle = (value: boolean) => {
    console.log('Lever is now:', value ? 'Option A' : 'Option B');
  };

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
        <Lever>
          <span>Danh sách phát</span>
          <span>Nghe gần đây</span>
        </Lever>
      </div>
    </main>
  );
}
