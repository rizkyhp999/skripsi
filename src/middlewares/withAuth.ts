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
      });

      if (!token) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }

      // Check for 'nonaktif' status
      if (token.status === "nonaktif") {
        // Handle 'nonaktif' status gracefully
        return NextResponse.redirect(new URL("/login", req.url)); // You might want to redirect to a specific error page instead
      }

      // Rest of the checks...

      if (token.aktivasi === false) {
        const url = new URL("/reset", req.url);
        url.searchParams.set("userId", token.id as string);
        return NextResponse.redirect(url);
      }

      if (token.posisi !== "Admin" && onlyAdminPage.includes(pathname)) {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
      }
    }

    return middleware(req, next);
  };
}
