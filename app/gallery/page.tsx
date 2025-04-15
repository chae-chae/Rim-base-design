// app/gallery/page.tsx
"use client";

import GalleryItem from "../../components/GalleryItem";

const galleryItems = [
  {
    id: 1,
    title: "Modern Harbor Base",
    description: "강과 자연을 활용한 현대적인 기지 디자인",
    image: "/gallery/photo1.jpg",
  },
  {
    id: 2,
    title: "Desert Oasis",
    description: "사막에서도 효율적인 동선과 미니멀한 디자인",
    image: "/gallery/photo2.jpg",
  },
  {
    id: 3,
    title: "Medieval Fortress",
    description: "중세 성 컨셉의 복잡한 기지 레이아웃",
    image: "/gallery/photo3.jpg",
  },
];

export default function GalleryPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Beautiful Base Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
