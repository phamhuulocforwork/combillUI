import * as React from 'react';

import { RangeSlider } from '@/registry/default/ui/range-slider';

export default function RangeSliderDefault() {
  return (
    <RangeSlider
      defaultValue={[20, 80]}
      max={100}
      step={1}
      className="w-full"
    />
  );
}
