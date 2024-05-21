import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: "59hb998uwy",
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = {
          id: 1,
          nama: "Rizky",
          email: "222011402@stis.ac.id",
          role: "admin",
        };
        if (email === "222011402@stis.ac.id" && password === "123") {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.nama = user.nama;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token, user }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("nama" in token) {
        session.user.nama = token.nama;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/admin")) {
        return url; // If the original URL started with /admin, redirect there
      }
      return baseUrl + "/admin/dashboard"; // Otherwise, redirect to the dashboard
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
