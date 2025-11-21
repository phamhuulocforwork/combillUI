"use client";

import React, { useState } from "react";

import PagesContent from "@/components/layout/pages-content";
import JSONCompareHeader from "@/components/tools/json-compare/json-compare-header";
import JSONInputCard from "@/components/tools/json-compare/json-input-card";
import JSONResultCard from "@/components/tools/json-compare/json-result-card";
import {
  compareJSON,
  mergeJSON,
  type ComparisonResult,
} from "@/components/tools/json-compare/utils/json-utils";

export default function JSONComparePage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [comparisonResult, setComparisonResult] =
    useState<ComparisonResult | null>(null);
  const [mergedResult, setMergedResult] = useState<any | null>(null);
  const [mode, setMode] = useState<"two-files" | "template">("two-files");

  const handleCompare = (
    json1: any,
    json2: any,
    comparisonMode: "two-files" | "template",
  ) => {
    setIsProcessing(true);
    setMode(comparisonMode);

    setTimeout(() => {
      const result = compareJSON(json1, json2, comparisonMode);
      setComparisonResult(result);
      setMergedResult(null); // Clear merge result when comparing
      setIsProcessing(false);
    }, 100);
  };

  const handleMerge = (json1: any, json2: any) => {
    setIsProcessing(true);

    setTimeout(() => {
      const result = mergeJSON(json1, json2);
      setMergedResult(result);
      setComparisonResult(null); // Clear comparison result when merging
      setIsProcessing(false);
    }, 100);
  };

  return (
    <div className='flex flex-1'>
      <div className='mx-auto flex w-full container border-dashed min-[1400px]:border-x'>
        <PagesContent className='flex items-center justify-center'>
          <div className='container mx-auto py-8 px-4 max-w-7xl'>
            <JSONCompareHeader />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <JSONInputCard
                onCompare={handleCompare}
                onMerge={handleMerge}
                isProcessing={isProcessing}
              />
              <JSONResultCard
                comparisonResult={comparisonResult}
                mergedResult={mergedResult}
                mode={mode}
              />
            </div>
          </div>
        </PagesContent>
      </div>
    </div>
  );
}
