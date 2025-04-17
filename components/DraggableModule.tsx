// components/DraggableModule.tsx
"use client";

import { useDrag } from "react-dnd";

interface DraggableModuleProps {
  id: number;
  name: string;
}

export default function DraggableModule({ id, name }: DraggableModuleProps) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "MODULE",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="border p-2 rounded"
    >
      {name}
    </div>
  );
}
