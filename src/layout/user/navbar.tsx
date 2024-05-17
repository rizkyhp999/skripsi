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
  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tabel Bahasa", href: "/tabel_bahasa" },
    { label: "Peta Bahasa", href: "/peta" },
    { label: "Subindeks Bahasa", href: "/subindeks" },
    { label: "Tentang kami", href: "/tentangkami" },
    { label: "aaa", href: "/login" }, // Replace with actual label
  ];
  return (
    <>
      <header className="bg-primer relative h-[70px] top-0 left-0 flex items-center z-50 lg:px-[100px]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="logo"
                  className="size-5/6"
                  width={260}
                  height={50}
                />
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button
                className="block absolute right-4 lg:hidden"
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
                className="hidden absolute bg-primer py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  {navLinks.map((link, index) => (
                    <li
                      key={index}
                      className={`group pl-4 ${
                        index === 0 ? "" : "lg:pl-[30px]"
                      }`}
                    >
                      <Link
                        href={link.href}
                        className="py-2 flex text-justify text-white text-lg font-bold leading-relaxed"
                        prefetch
                      >
                        <TextGlowing>
                          <h1>{link.label}</h1>
                        </TextGlowing>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
