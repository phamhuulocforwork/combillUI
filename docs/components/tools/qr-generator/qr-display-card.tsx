import { useRef } from "react";

import { Image, Loader2, SplinePointer } from "lucide-react";
import { toast } from "sonner";

import CopyButton from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface QRDisplayCardProps {
  isGenerating: boolean;
  pngDataUrl: string;
  svgString: string;
}

export default function QRDisplayCard({
  isGenerating,
  pngDataUrl,
  svgString,
}: QRDisplayCardProps) {
  const svgRef = useRef<HTMLDivElement>(null);
  const hasQRCode = !!svgString;

  if (svgString && svgRef.current) {
    svgRef.current.innerHTML = svgString;
  }

  const downloadSVG = () => {
    if (!svgString) {
      toast.error("No QR code to download");
      return;
    }

    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("SVG downloaded!");
  };

  const downloadPNG = () => {
    if (!pngDataUrl) {
      toast.error("No QR code to download");
      return;
    }

    const link = document.createElement("a");
    link.href = pngDataUrl;
    link.download = "qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("PNG downloaded!");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>QR Code</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex justify-center'>
          {isGenerating ? (
            <div className='w-64 h-64 border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center'>
              <div className='text-center text-muted-foreground'>
                <Loader2 className='h-12 w-12 mx-auto mb-2 animate-spin' />
                <p>Generating QR code...</p>
              </div>
            </div>
          ) : hasQRCode ? (
            <div className='p-4 bg-white rounded-lg border'>
              <img
                src={pngDataUrl}
                alt='QR Code'
                className='max-w-full hidden'
              />
              {svgString && (
                <div
                  ref={svgRef}
                  className='max-w-full'
                  dangerouslySetInnerHTML={{ __html: svgString }}
                />
              )}
            </div>
          ) : (
            <div className='w-64 h-64 border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center'>
              <div className='text-center text-muted-foreground'></div>
            </div>
          )}
        </div>

        {hasQRCode && !isGenerating && (
          <>
            <Separator />

            <div className='space-y-3'>
              <div className='flex items-center gap-2'>
                <Button
                  variant='outline'
                  onClick={downloadSVG}
                  className='flex-1'
                >
                  Download SVG
                  <SplinePointer className='h-4 w-4 mr-2' />
                </Button>
                <CopyButton
                  source={svgString}
                  toast='SVG copied!'
                  btnClassName='h-10 w-10'
                />
              </div>
              <div className='flex items-center gap-2'>
                <Button
                  variant='outline'
                  onClick={downloadPNG}
                  className='flex-1'
                >
                  Download PNG
                  <Image className='h-4 w-4 mr-2' />
                </Button>
                <CopyButton
                  source={pngDataUrl}
                  toast='PNG data URL copied!'
                  btnClassName='h-10 w-10'
                />
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
