// components/GalleryItem.tsx
import Image from "next/image";

interface GalleryItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function GalleryItem({
  title,
  description,
  image,
}: GalleryItemProps) {
  return (
    <div className="border p-4 rounded shadow-md">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="rounded"
      />
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
