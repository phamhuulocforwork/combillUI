import * as React from 'react';

import { Label } from '@/components/ui/label';

import { RangeSlider } from '@/registry/default/ui/range-slider';

export default function RangeSliderWithLabel() {
  const [value, setValue] = React.useState<number[]>([25, 75]);

  return (
    <div className="flex min-w-96 flex-col gap-12">
      <div className="space-y-8">
        <Label>Top Labels</Label>
        <RangeSlider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
          className="w-full"
          label={(val) => val && `${val}%`}
        />
      </div>

      <div className="space-y-2">
        <Label>Bottom Labels</Label>
        <RangeSlider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
          className="w-full"
          label={(val) => val && `${val}%`}
          labelPosition="bottom"
        />
      </div>
    </div>
  );
}
