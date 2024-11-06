import { Label } from "@/components/ui/Label";
import config from "@/tailwind.config";

const colors = Object.entries(config.theme.extend.colors).filter(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ([_, value]) => typeof value === "object" && value !== null,
);

export function ColorPaletteDemo() {
  return (
    <div className="container flex flex-col gap-4 rounded-lg bg-zinc-100 p-8 dark:bg-gray-800">
      {colors.map(([colorName, colorValue]) => {
        const colorObj = colorValue as Record<string, string>;
        const shades = Object.entries(colorObj).filter(
          ([key]) => key !== "foreground" && key !== "DEFAULT",
        );

        return (
          <div key={colorName} className="flex flex-col gap-2">
            <Label className="capitalize">{colorName}</Label>
            <div className="flex items-center gap-2">
              {/* Default color if exists */}
              {colorObj.DEFAULT && (
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`h-10 w-20 rounded-md border shadow-md dark:border-none`}
                    style={{ backgroundColor: colorObj.DEFAULT }}
                  />
                  <Label className="text-xs font-semibold md:text-sm">
                    Default
                  </Label>
                </div>
              )}

              {/* Color shades */}
              <div className="grid flex-1 grid-cols-6 gap-1 md:grid-cols-11">
                {shades.map(([shade, hex]) => (
                  <div
                    key={shade}
                    className="flex flex-col items-center justify-center gap-1"
                  >
                    <div
                      className="h-10 w-full rounded-md border shadow-md dark:border-none"
                      style={{ backgroundColor: hex }}
                    />
                    <Label className="text-xs font-semibold md:text-sm">
                      {shade}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
