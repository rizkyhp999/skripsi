import {
  retrieveData,
  retrieveDataById,
  deleteUser,
} from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailPengguna = await retrieveDataById("pengguna", id);
    if (detailPengguna) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailPengguna,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Data not found",
      data: {},
    });
  }

  const pengguna = await retrieveData("pengguna");
  return NextResponse.json({ status: 200, message: "Success", data: pengguna });
}

export async function DELETE(request: NextRequest) {
  const req = await request.json();
  const res = await deleteUser(req);
}
