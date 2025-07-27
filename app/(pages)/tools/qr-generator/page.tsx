"use client";

import React, { useRef, useState } from "react";

import { Image, Loader2, QrCode, SplinePointer } from "lucide-react";
import QRCode from "qrcode";
import { toast } from "sonner";

import CopyButton from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { ResponsiveTextarea } from "@/registry/default/ui/responsive-textarea";

export default function QRGeneratorPage() {
  const [text, setText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasQRCode, setHasQRCode] = useState(false);
  const [pngDataUrl, setPngDataUrl] = useState("");
  const svgRef = useRef<HTMLDivElement>(null);
  const [svgString, setSvgString] = useState("");

  const generateQRCode = async () => {
    if (!text.trim()) {
      toast.error("Please enter content to generate QR code");
      return;
    }

    setIsGenerating(true);
    setHasQRCode(false);

    // TODO: Add more color options
    try {
      const pngUrl = await QRCode.toDataURL(text, {
        width: 1280,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      });
      setPngDataUrl(pngUrl);

      const svg = await QRCode.toString(text, {
        type: "svg",
        width: 256,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      });

      setSvgString(svg);
      if (svgRef.current) {
        svgRef.current.innerHTML = svg;
      }

      setHasQRCode(true);
      toast.success("QR code generated successfully!");
    } catch (error) {
      console.error("Error generating QR code:", error);
      toast.error("An error occurred while generating QR code");
      setHasQRCode(false);
    } finally {
      setIsGenerating(false);
    }
  };

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

  const onEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isGenerating) {
      generateQRCode();
    }
  };

  return (
    <div className='container mx-auto py-8 px-4 max-w-4xl'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold mb-2 flex items-center justify-center gap-2'>
          <QrCode className='h-8 w-8' />
          QR Code Generator
        </h1>
        <p className='text-muted-foreground'>
          Generate a QR code from text, URL, or any content you want
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <Card>
          <CardHeader>
            <CardTitle>Enter Content</CardTitle>
            <CardDescription>
              Enter text, URL, or data you want to convert to a QR code
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='qr-text'>Content</Label>
              <ResponsiveTextarea
                id='qr-text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={onEnterPress}
                placeholder='Enter text, URL, email...'
              />
            </div>

            <Button
              onClick={generateQRCode}
              disabled={!text.trim() || isGenerating}
              className='w-full'
            >
              {isGenerating ? (
                <>
                  <Loader2 className='h-4 w-4 mr-2 animate-spin' />
                  Generating QR Code...
                </>
              ) : (
                <>Generate QR Code</>
              )}
            </Button>
          </CardContent>
        </Card>

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
      </div>
    </div>
  );
}
