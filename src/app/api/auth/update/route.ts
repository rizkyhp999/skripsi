import { NextRequest, NextResponse } from "next/server";
import { updateUser } from "@/lib/firebase/service";

export async function PUT(request: NextRequest) {
  const req = await request.json();
  const res = await updateUser(req);
  return NextResponse.json(
    { status: res.statusCode, message: res.message },
    { status: res.statusCode }
  );
}
