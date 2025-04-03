// app/recommended-layout/page.tsx
"use client";

import { useState } from "react";
import RecommendedLayoutDisplay from "../../components/RecommendedLayoutDisplay";

export default function RecommendedLayoutPage() {
  const [layoutData, setLayoutData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateLayout = async () => {
    setLoading(true);
    // 더미 데이터 요청: 실제로는 사용자의 모듈 데이터 등을 함께 보내야 합니다.
    const response = await fetch("/api/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ modules: [] }), // 추후 모듈 데이터를 보내도록 수정
    });
    const data = await response.json();
    setLayoutData(data.layout);
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recommended Layout Generator</h2>
      <button
        onClick={generateLayout}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
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
