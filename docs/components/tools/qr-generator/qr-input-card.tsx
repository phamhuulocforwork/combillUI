import { Loader2 } from 'lucide-react';
import QRCode from 'qrcode';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';

import { ResponsiveTextarea } from '@/registry/default/ui/responsive-textarea';

interface QRInputCardProps {
  onQRGenerated: (pngDataUrl: string, svgString: string) => void;
  onGeneratingChange: (isGenerating: boolean) => void;
}

export default function QRInputCard({
  onQRGenerated,
  onGeneratingChange,
}: QRInputCardProps) {
  const [text, setText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQRCode = async () => {
    if (!text.trim()) {
      toast.error('Please enter content to generate QR code');
      return;
    }

    setIsGenerating(true);
    onGeneratingChange(true);

    try {
      const pngUrl = await QRCode.toDataURL(text, {
        width: 1280,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });

      const svg = await QRCode.toString(text, {
        type: 'svg',
        width: 256,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });

      onQRGenerated(pngUrl, svg);
      toast.success('QR code generated successfully!');
    } catch (error) {
      console.error('Error generating QR code:', error);
      toast.error('An error occurred while generating QR code');
    } finally {
      setIsGenerating(false);
      onGeneratingChange(false);
    }
  };

  const onEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isGenerating) {
      generateQRCode();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter Content</CardTitle>
        <CardDescription>
          Enter text, URL, or data you want to convert to a QR code
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="qr-text">Content</Label>
          <ResponsiveTextarea
            id="qr-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onEnterPress}
            placeholder="Enter text, URL, email..."
          />
        </div>

        <Button
          onClick={generateQRCode}
          disabled={!text.trim() || isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating QR Code...
            </>
          ) : (
            <>Generate QR Code</>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
