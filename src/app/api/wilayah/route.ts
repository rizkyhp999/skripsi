import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailWilayah = await retrieveDataById("wilayah", id);
    if (detailWilayah) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailWilayah,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Data not found",
      data: {},
    });
  }

  const wilayah = await retrieveData("wilayah");
  return NextResponse.json({ status: 200, message: "Success", data: wilayah });
}
