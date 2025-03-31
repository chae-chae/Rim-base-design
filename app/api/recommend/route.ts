// app/api/recommend/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const dummyLayout = `
[Entrance] -> [Hall]
         ↓
[Kitchens] -> [Dining] -> [Workshop] -> [Storage]
  `;
  return NextResponse.json({ layout: dummyLayout });
}
