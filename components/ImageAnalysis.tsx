"use client";

import { useState } from "react";

export default function ImageAnalysis() {
  const [file, setFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<{
    layout: string;
    features: string[];
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setAnalysisResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAnalysisResult(data);
    } catch (error) {
      console.error("Error analyzing image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && (
        <div>
          <p>Selected File: {file.name}</p>
          <button
            onClick={handleAnalyze}
            className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Image"}
          </button>
        </div>
      )}
      {analysisResult && (
        <div className="p-4 border rounded mt-4">
          <h3 className="font-bold">Analysis Summary</h3>
          <p className="mt-2">
            <strong>Layout:</strong> {analysisResult.layout}
          </p>
          <ul className="list-disc list-inside mt-2">
            {analysisResult.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
