"use client";

import { useDrag } from "react-dnd";

interface DraggableModuleProps {
  id: number;
  name: string;
}

export default function DraggableModule({ id, name }: DraggableModuleProps) {
  const [{ isDragging }, drag] = useDrag({
    type: "MODULE",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return drag(
    <div
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="border p-2 rounded bg-white shadow cursor-move"
    >
      {name}
    </div>
  );
}
