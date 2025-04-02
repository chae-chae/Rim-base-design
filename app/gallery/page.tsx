// app/gallery/page.tsx
"use client";

import GalleryItem from "../../components/GalleryItem";

const galleryItems = [
  {
    id: 1,
    title: "Modern Harbor Base",
    description:
      "강을 활용한 현대적인 해군 기지, 중앙 집중형 배치와 자연과의 조화가 돋보입니다.",
    image: "/gallery/harbor.jpg",
  },
  {
    id: 2,
    title: "Desert Oasis",
    description:
      "사막 속에서도 효율적 동선과 미니멀한 디자인이 구현된 기지입니다.",
    image: "/gallery/desert.jpg",
  },
  {
    id: 3,
    title: "Medieval Fortress",
    description:
      "중세 성 컨셉의 기지로, 복잡한 내부 구성과 세밀한 인테리어가 특징입니다.",
    image: "/gallery/medieval.jpg",
  },
  // 추가 예시 항목...
];

export default function GalleryPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Beautiful Base Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
