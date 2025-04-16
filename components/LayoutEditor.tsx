// components/LayoutEditor.tsx
"use client";

import { useDrop } from "react-dnd";
import { useState } from "react";
import DraggableModule from "./DraggableModule";

interface ModuleData {
  id: number;
  name: string;
}

export default function LayoutEditor() {
  const [modules, setModules] = useState<ModuleData[]>([
    { id: 1, name: "Entrance" },
    { id: 2, name: "Kitchen" },
    { id: 3, name: "Dining Hall" },
    { id: 4, name: "Workshop" },
    { id: 5, name: "Storage" },
  ]);

  const [{ isOver }, dropRef] = useDrop({
    accept: "MODULE",
    drop: (item: any) => {
      console.log("Dropped item:", item);
      // 모듈 위치 업데이트 로직 추가 예정
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={dropRef}
      className="border-2 p-4 relative"
      style={{ minHeight: "400px" }}
    >
      <h3 className="font-bold mb-2">Layout Editor</h3>
      <div className="grid grid-cols-3 gap-4">
        {modules.map((mod) => (
          <DraggableModule key={mod.id} id={mod.id} name={mod.name} />
        ))}
      </div>
      {isOver && (
        <div className="absolute inset-0 bg-blue-100 opacity-50 pointer-events-none" />
      )}
    </div>
  );
}
