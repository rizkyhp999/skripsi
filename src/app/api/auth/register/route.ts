import { NextRequest, NextResponse } from "next/server";
import { register } from "@/lib/firebase/service/auth";
export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await register(req);
  return NextResponse.json(
    { status: res.statusCode, message: res.message },
    { status: res.statusCode }
  );
}
