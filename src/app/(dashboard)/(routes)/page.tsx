'use client';

import {
  ComponentWarpper,
  ColorPaletteDemo,
  ButtonDemo,
  AlertDemo,
  CheckBoxDemo,
  SelectDemo,
  SeparatorDemo,
  SkeletonDemo,
  SliderDemo,
  SwitchDemo,
  LeverDemo,
  ResponsiveTextarea,
  Textarea,
  AlertDialogDemo,
} from '@/components';

export default function Home() {
  return (
    <div className='container'>
      <div className='flex flex-col gap-8 rounded-xl border border-border p-8 md:p-16'>
        <ComponentWarpper label='Colors'>
          <ColorPaletteDemo />
        </ComponentWarpper>

        <ComponentWarpper label='Button'>
          <ButtonDemo />
        </ComponentWarpper>

        <ComponentWarpper label='Alert'>
          <AlertDemo />
        </ComponentWarpper>

        <ComponentWarpper label='Check box'>
          <CheckBoxDemo />
        </ComponentWarpper>

        <ComponentWarpper label='Select' className='max-w-56'>
          <SelectDemo />
        </ComponentWarpper>

        <ComponentWarpper label='Separator'>
          <SeparatorDemo />
        </ComponentWarpper>

        <ComponentWarpper label='Skeleton'>
          <SkeletonDemo />
        </ComponentWarpper>

        <ComponentWarpper label='Slider'>
          <SliderDemo />
        </ComponentWarpper>

        <ComponentWarpper label='Switch'>
          <SwitchDemo />
        </ComponentWarpper>

        <ComponentWarpper label='Lever'>
          <LeverDemo />
        </ComponentWarpper>

        <ComponentWarpper label='Responsive Textarea'>
          <ResponsiveTextarea></ResponsiveTextarea>
        </ComponentWarpper>

        <ComponentWarpper label='Textarea'>
          <Textarea></Textarea>
        </ComponentWarpper>

        <ComponentWarpper label='Alert Dialog'>
          <AlertDialogDemo />
        </ComponentWarpper>
      </div>
    </div>
  );
}
