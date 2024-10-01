import { ComponentWarpper, DragItem } from '@/components';

export default function Complex() {
  return (
    <div className='flex w-full flex-col gap-8 rounded-lg border-border p-8 md:border md:p-16'>
      <ComponentWarpper label='Drag Items'>
        <DragItem />
      </ComponentWarpper>
    </div>
  );
}
