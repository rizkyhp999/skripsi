import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const onlyAdminPage = ["/admin/pengguna"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      }); // **The Fix: Null/Undefined Check**

      if (!token) {
        const url = new URL("/login", req.url); // Remove extra space in "/login "
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      } // **Now it's safe to access token properties**

      if (token.aktivasi === false) {
        const url = new URL("/reset", req.url);
        url.searchParams.set("userId", token.id as string); // Add the user's ID
        return NextResponse.redirect(url);
      }
      console.log(token);

      if (token.posisi !== "Admin" && onlyAdminPage.includes(pathname)) {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
      }
    }

    return middleware(req, next);
  };
}
