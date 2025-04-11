// app/page.tsx
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold">Image-Based Base Analysis</h2>
        <p>
          업로드한 기지 이미지를 분석하여 레이아웃 및 디자인 특징(동선, 기능
          분할 등)을 추출합니다.
        </p>
        <Link href="/image-analysis" className="text-blue-600 underline">
          Go to Image Analysis
        </Link>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Beautiful Base Gallery</h2>
        <p>
          다양한 아름다운 기지 예시를 갤러리 형태로 제공하고, 각 예시의 특징을
          설명합니다.
        </p>
        <Link href="/gallery" className="text-blue-600 underline">
          Go to Gallery
        </Link>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Recommended Layout Generator</h2>
        <p>
          필수 및 커스텀 모듈 데이터를 기반으로 최적의 기지 레이아웃을 자동으로
          생성합니다.
        </p>
        <Link href="/recommended-layout" className="text-blue-600 underline">
          Go to Auto Layout
        </Link>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Edit Your Layout</h2>
        <p>
          생성된 레이아웃을 드래그 앤 드롭으로 편집할 수 있는 인터페이스입니다.
        </p>
        <Link href="/edit-layout" className="text-blue-600 underline">
          Go to Edit Layout
        </Link>
      </section>
    </div>
  );
}
