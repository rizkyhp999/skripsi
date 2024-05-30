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
    const detailVitalitas = await retrieveDataById("vitalitas", id);
    if (detailVitalitas) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailVitalitas,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Data not found",
      data: {},
    });
  }

  const vitalitas = await retrieveData("vitalitas");
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: vitalitas,
  });
}

//   export async function DELETE(request: NextRequest) {
//     const req = await request.json();
//     const res = await deleteUser(req);
//   }
