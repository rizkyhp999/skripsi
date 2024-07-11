"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { TextGlowing } from "@/components/atoms/animasi";
import Image from "next/image";

export default function Navbar() {
  useEffect(() => {
    const handleHamburger = () => {
      const hamburger = document.querySelector("#hamburger");
      const nav = document.querySelector("#nav-menu");
      if (hamburger != null && nav != null) {
        hamburger.classList.toggle("hamburger-active");
        nav.classList.toggle("hidden");
      }
    };

    const hamburger = document.querySelector("#hamburger");
    if (hamburger) {
      hamburger.addEventListener("click", handleHamburger);
    }

    return () => {
      if (hamburger) {
        hamburger.removeEventListener("click", handleHamburger);
      }
    };
  }, []); // Jalankan hanya sekali saat komponen pertama kali di-render

  return (
    <>
      <header className="bg-primer w-full h-[70px] flex items-center lg:px-[100px]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={260} height={50} />
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button
                className="block absolute right-4 lg:hidden z-50"
                id="hamburger"
                name="hamburger"
                type="button"
                aria-label="Hamburger"
              >
                <span className="w-[30px] h-[3px] my-2 block bg-white transition duration-300 ease-in-out origin-top-left"></span>
                <span className="w-[30px] h-[3px] my-2 block bg-white transition duration-300 ease-in-out"></span>
                <span className="w-[30px] h-[3px] my-2 block bg-white transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav
                id="nav-menu"
                className="hidden absolute z-50 bg-primer py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group pl-4">
                    <Link
                      href="/"
                      className="py-2 flex text-justify text-white text-lg font-bold leading-relaxed"
                      prefetch
                    >
                      <TextGlowing>
                        <h1>Beranda</h1>
                      </TextGlowing>
                    </Link>
                  </li>
                  <li className="group pl-4 lg:pl-[30px] relative">
                    <div className="py-2 flex text-justify text-white text-lg font-bold leading-relaxed cursor-pointer">
                      <TextGlowing>
                        <h1>Data</h1>
                      </TextGlowing>
                    </div>
                    <ul className="hidden group-hover:block absolute  bg-primer shadow-lg rounded-lg mt-2 lg:mt-0 lg:shadow-none lg:rounded-none lg:static">
                      <li className="pl-4 lg:pl-[30px]">
                        <Link
                          href="/tabel_bahasa"
                          className="py-2 flex text-justify text-white text-lg font-bold leading-relaxed"
                          prefetch
                        >
                          <TextGlowing>
                            <h1>Tabel Bahasa</h1>
                          </TextGlowing>
                        </Link>
                      </li>
                      <li className="pl-4 lg:pl-[30px]">
                        <Link
                          href="/subindeks"
                          className="py-2 flex text-justify text-white text-lg font-bold leading-relaxed"
                          prefetch
                        >
                          <TextGlowing>
                            <h1>Subindeks Bahasa</h1>
                          </TextGlowing>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group pl-4 lg:pl-[30px]">
                    <Link
                      href="/tentangkami"
                      className="py-2 flex text-justify text-white text-lg font-bold leading-relaxed"
                      prefetch
                    >
                      <TextGlowing>
                        <h1>Tentang kami</h1>
                      </TextGlowing>
                    </Link>
                  </li>
                  <li className="group pl-4 lg:pl-[30px]">
                    <Link
                      href="/admin/dashboard"
                      className="py-2 flex text-justify text-white text-lg font-bold leading-relaxed"
                      prefetch
                    >
                      <TextGlowing>
                        <h1>Login</h1>
                      </TextGlowing>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
