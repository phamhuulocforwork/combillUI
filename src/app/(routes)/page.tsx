import { ComponentPreview } from '@/components/_demo/ComponentPreview';

export default function Home() {
  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <div className='container flex h-full w-full flex-col items-center justify-center gap-4'>
        <ComponentPreview name='ui/ButtonDemo' />
        <ComponentPreview name='ui/LeverDemo' />
      </div>
    </div>
  );
}
