// app/layout.tsx
import "../styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "RimWorld Base Design",
  description: "Custom base design helper for RimWorld",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">RimWorld Base Design</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/image-analysis">Image Analysis</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/recommended-layout">Auto Layout</Link>
            <Link href="/edit-layout">Edit Layout</Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
