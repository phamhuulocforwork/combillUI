import * as React from "react";

import { Label } from "@/components/ui/label";

import { RangeSlider } from "@/registry/default/ui/range-slider";

export default function RangeSliderVertical() {
  const [verticalValue, setVerticalValue] = React.useState<number[]>([30, 70]);

  return (
    <div className='flex gap-12 mt-10'>
      <div className='space-y-2'>
        <Label>Left labels</Label>
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
        <Label>Right labels</Label>
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
  );
}
