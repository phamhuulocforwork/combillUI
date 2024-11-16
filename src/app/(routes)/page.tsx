import { ComponentPreview } from '@/components/_app/ComponentPreview';

export default function Home() {
  return (
    <div className='my-16 flex w-full items-center justify-center'>
      <div className='container flex h-full w-full flex-col items-center justify-center gap-4'>
        <ComponentPreview name='demo/ButtonDemo' />
      </div>
    </div>
  );
}
