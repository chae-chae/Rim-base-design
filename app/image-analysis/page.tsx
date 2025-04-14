// app/image-analysis/page.tsx
"use client";

import ImageAnalysis from "../../components/ImageAnalysis";

export default function ImageAnalysisPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Image Analysis Module</h2>
      <ImageAnalysis />
    </div>
  );
}
