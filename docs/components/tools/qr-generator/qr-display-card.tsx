import { Image, Loader2, SplinePointer } from 'lucide-react';
import { useRef } from 'react';
import { toast } from 'sonner';

import CopyButton from '@/components/copy-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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
      toast.error('No QR code to download');
      return;
    }

    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qr-code.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success('SVG downloaded!');
  };

  const downloadPNG = () => {
    if (!pngDataUrl) {
      toast.error('No QR code to download');
      return;
    }

    const link = document.createElement('a');
    link.href = pngDataUrl;
    link.download = 'qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('PNG downloaded!');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>QR Code</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          {isGenerating ? (
            <div className="flex h-64 w-64 items-center justify-center rounded-lg border-2 border-muted-foreground/25 border-dashed">
              <div className="text-center text-muted-foreground">
                <Loader2 className="mx-auto mb-2 h-12 w-12 animate-spin" />
                <p>Generating QR code...</p>
              </div>
            </div>
          ) : hasQRCode ? (
            <div className="rounded-lg border bg-white p-4">
              <img
                src={pngDataUrl}
                alt="QR Code"
                className="hidden max-w-full"
              />
              {svgString && (
                <div
                  ref={svgRef}
                  className="max-w-full"
                  dangerouslySetInnerHTML={{ __html: svgString }}
                />
              )}
            </div>
          ) : (
            <div className="flex h-64 w-64 items-center justify-center rounded-lg border-2 border-muted-foreground/25 border-dashed">
              <div className="text-center text-muted-foreground"></div>
            </div>
          )}
        </div>

        {hasQRCode && !isGenerating && (
          <>
            <Separator />

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={downloadSVG}
                  className="flex-1"
                >
                  Download SVG
                  <SplinePointer className="mr-2 h-4 w-4" />
                </Button>
                <CopyButton
                  source={svgString}
                  toast="SVG copied!"
                  btnClassName="h-10 w-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={downloadPNG}
                  className="flex-1"
                >
                  Download PNG
                  <Image className="mr-2 h-4 w-4" />
                </Button>
                <CopyButton
                  source={pngDataUrl}
                  toast="PNG data URL copied!"
                  btnClassName="h-10 w-10"
                />
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
