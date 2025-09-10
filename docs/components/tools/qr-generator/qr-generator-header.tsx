import { QrCode } from "lucide-react";

export default function QRGeneratorHeader() {
  return (
    <div className='text-center mb-8'>
      <h1 className='text-3xl font-bold mb-2 flex items-center justify-center gap-2'>
        <QrCode className='h-8 w-8' />
        QR Code Generator
      </h1>
      <p className='text-muted-foreground'>
        Generate a QR code from text, URL, or any content you want
      </p>
    </div>
  );
}
