"use client";

import React, { useState } from "react";

import PagesContent from "@/components/layout/pages-content";
import QRDisplayCard from "@/components/tools/qr-generator/qr-display-card";
import QRGeneratorHeader from "@/components/tools/qr-generator/qr-generator-header";
import QRInputCard from "@/components/tools/qr-generator/qr-input-card";

export default function QRGeneratorPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [pngDataUrl, setPngDataUrl] = useState("");
  const [svgString, setSvgString] = useState("");

  const handleQRGenerated = (pngUrl: string, svg: string) => {
    setPngDataUrl(pngUrl);
    setSvgString(svg);
  };

  const handleGeneratingChange = (generating: boolean) => {
    setIsGenerating(generating);
  };

  return (
    <div className='flex flex-1'>
      <div className='mx-auto flex w-full container border-dashed min-[1400px]:border-x'>
        <PagesContent className='flex items-center justify-center'>
          <div className='container mx-auto py-8 px-4 max-w-4xl'>
            <QRGeneratorHeader />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <QRInputCard
                onQRGenerated={handleQRGenerated}
                onGeneratingChange={handleGeneratingChange}
              />
              <QRDisplayCard
                isGenerating={isGenerating}
                pngDataUrl={pngDataUrl}
                svgString={svgString}
              />
            </div>
          </div>
        </PagesContent>
      </div>
    </div>
  );
}
