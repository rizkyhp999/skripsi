import { NextRequest, NextResponse } from "next/server";
import { resetPassword } from "@/lib/firebase/service/auth";

export async function PUT(request: NextRequest) {
  const req = await request.json();
  const res = await resetPassword(req);
  return NextResponse.json(
    { status: res.statusCode, message: res.message },
    { status: res.statusCode }
  );
}
