import {
  retrieveData,
  retrieveDataById,
  deleteUser,
  updateUser,
  addInfografik,
  deleteInfografik,
  deleteFolder,
} from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailInfografik = await retrieveDataById("infografik", id);
    if (detailInfografik) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailInfografik,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Data not found",
      data: {},
    });
  }

  const infografik = await retrieveData("infografik");
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: infografik,
  });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await addInfografik(req);
  return NextResponse.json(
    { status: res.statusCode, message: res.message },
    { status: res.statusCode }
  );
}
export async function DELETE(request: NextRequest) {
  const req = await request.json();
  // Panggil fungsi deleteFolder
  await deleteFolder(req.judul);

  const res = await deleteInfografik(req);

  return NextResponse.json(
    { status: res.statusCode, message: res.message },
    { status: res.statusCode }
  );
}
