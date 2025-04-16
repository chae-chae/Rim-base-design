// app/edit-layout/page.tsx
"use client";

import LayoutEditor from "../../components/LayoutEditor";

export default function EditLayoutPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Edit Your Layout</h2>
      <LayoutEditor />
    </div>
  );
}
