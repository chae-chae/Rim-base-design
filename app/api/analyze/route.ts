// app/api/analyze/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { image } = await request.json();

  const result = {
    layout:
      "Centralized layout: Entrance -> Kitchen -> Dining Hall, with adjacent Workshop and Storage areas.",
    features: [
      "Efficient movement path",
      "Clear zone separation",
      "Minimalistic design with tasteful decoration",
    ],
  };

  return NextResponse.json(result);
}
