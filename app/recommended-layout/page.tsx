// app/recommended-layout/page.tsx
"use client";

import { useState } from "react";
import RecommendedLayoutDisplay from "../../components/RecommendedLayoutDisplay";

export default function RecommendedLayoutPage() {
  const [layoutData, setLayoutData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateLayout = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ modules: [] }), // 실제 모듈 데이터로 교체 예정
      });
      if (!response.ok) throw new Error("Layout generation failed");
      const data = await response.json();
      setLayoutData(data.layout);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Recommended Layout Generator</h2>
      <button
        onClick={generateLayout}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Layout"}
      </button>
      {layoutData ? (
        <RecommendedLayoutDisplay layout={layoutData} />
      ) : (
        <p>Click the button to generate a recommended layout.</p>
      )}
    </div>
  );
}
