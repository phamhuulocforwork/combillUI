import { Slider } from '@/components';

export function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} aria-label='Volume' />;
}
