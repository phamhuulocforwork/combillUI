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

export function ColorPaletteDemo() {
  return (
    <div className='flex flex-col gap-4'>
      {colors.map((color) => (
        <>
          <Label className='capitalize'>{color}</Label>
          <div key={color} className='grid grid-cols-6 gap-1 md:grid-cols-11'>
            {shades.map((shade) => (
              <div
                key={shade}
                className='flex flex-col items-center justify-center gap-1'
              >
                <div
                  className={`h-10 w-full bg-${color}-${shade} rounded-md`}
                />
                <Label className='text-xs font-semibold md:text-sm'>
                  {shade}
                </Label>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
