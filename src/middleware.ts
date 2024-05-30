import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";
import { NextResponse } from "next/server";

export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, [
  "/admin/dashboard",
  "/admin/carousel",
  "/admin/infografik",
  "/admin/vitalitas",
  "/admin/pengguna",
  "/api/pengguna",
]);
