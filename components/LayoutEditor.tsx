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

  const [{ isOver }, drop] = useDrop({
    accept: "MODULE",
    drop: (item: any) => {
      console.log("Dropped item:", item);
      // 나중에 모듈 위치를 실제로 바꾸는 로직 추가 가능
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return drop(
    <div className="border-2 p-4 relative min-h-[400px] bg-gray-50 rounded">
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
