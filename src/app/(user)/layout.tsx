import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "../globals.css";

// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

import Navbar from "@/layout/user/navbar";
import Footer from "@/layout/user/footer";
export const metadata: Metadata = {
  title: "Diseminasi Daya Hidup Bahasa Daerah",
  description: "Diseminasi Daya Hidup Bahasa Daerah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>

        {/* <SpeedInsights />
        <Analytics /> */}
      </body>
    </html>
  );
}
