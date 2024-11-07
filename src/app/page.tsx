import { ButtonDemo } from '@/components/demo/ButtonDemo';
import { ComponentPreview } from '@/components/demo/ComponentPreview';

export default function Home() {
  return (
    <div className='container flex min-h-screen flex-col items-center justify-center'>
      <ComponentPreview>
        <ButtonDemo />
      </ComponentPreview>
    </div>
  );
}
