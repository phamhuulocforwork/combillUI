import { Label } from '../ui/Label';

const colors = ['primary', 'secondary', 'destructive', 'muted', 'accent'];

const shades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
];

export function ColorPalette() {
  return (
    <div className='flex flex-col gap-4'>
      {colors.map((color) => (
        <>
          <Label className='capitalize'>{color}</Label>
          <div key={color} className='grid grid-cols-11 grid-rows-1 gap-1'>
            {shades.map((shade) => (
              <div className='flex flex-col items-center justify-center gap-1'>
                <div
                  key={shade}
                  className={`h-10 w-full bg-${color}-${shade} rounded-md`}
                />
                <Label className='text-sm font-semibold'>{shade}</Label>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
