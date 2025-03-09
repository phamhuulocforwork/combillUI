"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";

import { RangeSlider } from "@/registry/default/ui/range-slider";

export default function TestPage() {
  const [value, setValue] = React.useState<number[]>([25, 75]);
  const [verticalValue, setVerticalValue] = React.useState<number[]>([30, 70]);

  return (
    <section className='container flex flex-col items-center justify-center gap-6 py-8'>
      <div className='w-full max-w-md space-y-8'>
        <div className='space-y-2'>
          <Label>Basic Range Slider</Label>
          <RangeSlider
            defaultValue={[20, 80]}
            max={100}
            step={1}
            className='w-full'
          />
        </div>

        <div className='space-y-8'>
          <Label>Range Slider with Labels</Label>
          <RangeSlider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
            className='w-full'
            label={(val) => val && `${val}%`}
          />
        </div>

        <div className='space-y-2'>
          <Label>Range Slider with Bottom Labels</Label>
          <RangeSlider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
            className='w-full'
            label={(val) => val && `${val}%`}
            labelPosition='bottom'
          />
        </div>

        <div className='flex gap-12 mt-10'>
          <div className='space-y-2'>
            <Label>Vertical Range Slider (Left Labels)</Label>
            <div className='h-64 flex items-center justify-center pl-10'>
              <RangeSlider
                orientation='vertical'
                value={verticalValue}
                onValueChange={setVerticalValue}
                max={100}
                step={1}
                label={(val) => val && `${val}%`}
              />
            </div>
          </div>

          <div className='space-y-2'>
            <Label>Vertical with Right Labels</Label>
            <div className='h-64 flex items-center justify-center pr-10'>
              <RangeSlider
                orientation='vertical'
                value={verticalValue}
                onValueChange={setVerticalValue}
                max={100}
                step={1}
                label={(val) => val && `${val}%`}
                labelPosition='bottom'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
