import { QrCode } from 'lucide-react';

export default function QRGeneratorHeader() {
  return (
    <div className="mb-8 text-center">
      <h1 className="mb-2 flex items-center justify-center gap-2 font-bold text-3xl">
        <QrCode className="h-8 w-8" />
        QR Code Generator
      </h1>
      <p className="text-muted-foreground">
        Generate a QR code from text, URL, or any content you want
      </p>
    </div>
  );
}
