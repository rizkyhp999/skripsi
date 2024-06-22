import {
  retrieveData,
  retrieveDataById,
  addCarousel,
  deleteCarousel,
  deleteFolder,
} from "@/lib/firebase/service/konten";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailCarousel = await retrieveDataById("carousel", id);
    if (detailCarousel) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailCarousel,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Data not found",
      data: {},
    });
  }

  const carousel = await retrieveData("carousel");
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: carousel,
  });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await addCarousel(req);

  return NextResponse.json(
    { status: res.statusCode, message: res.message },
    { status: res.statusCode }
  );
}
export async function DELETE(request: NextRequest) {
  const req = await request.json();
  // Panggil fungsi deleteFolder
  //   await deleteFolder(req.judul);
  await deleteFolder(req.judul);

  const res = await deleteCarousel(req);

  return NextResponse.json(
    { status: res.statusCode, message: res.message },
    { status: res.statusCode }
  );
}
