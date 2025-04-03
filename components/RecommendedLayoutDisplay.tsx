// components/RecommendedLayoutDisplay.tsx
interface RecommendedLayoutDisplayProps {
  layout: string;
}

export default function RecommendedLayoutDisplay({
  layout,
}: RecommendedLayoutDisplayProps) {
  return (
    <div className="p-4 border rounded shadow-md whitespace-pre-line">
      <h3 className="font-bold mb-2">Recommended Layout:</h3>
      <p>{layout}</p>
    </div>
  );
}
