"use client";
import React from "react";
import Link from "next/link";
import { TextGlowing } from "@/components/atoms/animasi";
export default function navbar() {
  const handleHamburger = () => {
    const hamburger = document.querySelector("#hamburger");
    const nav = document.querySelector("#nav-menu");
    if (hamburger != null && nav != null) {
      hamburger.classList.toggle("hamburger-active");
      nav.classList.toggle("hidden");
    }
  };

  return (
    <header className=" bg-primer relative h-[70px] top-0 left-0 flex items-center z-10 lg:px-[100px] ">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link href={"/"}>
              <img src="/Logo.png" alt="logo" className="size-5/6" />
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              className="block absolute right-4 lg:hidden "
              id="hamburger"
              name="hamburger"
              type="button"
              aria-label="Hamburger"
              onClick={handleHamburger}
            >
              <span className="w-[30px] h-[3px] my-2 block bg-white transition duration-300 ease-in-out origin-top-left"></span>
              <span className="w-[30px] h-[3px] my-2 block bg-white transition duration-300 ease-in-out"></span>
              <span className="w-[30px] h-[3px] my-2 block bg-white transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className="hidden absolute bg-primer py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4  top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex ">
                <li className="group pl-4 lg:pl-[30px]">
                  <Link
                    href="/"
                    className="py-2  flex text-justify text-white text-lg font-bold  leading-relaxed"
                  >
                    <TextGlowing>
                      <h1>Beranda</h1>
                    </TextGlowing>
                  </Link>
                </li>
                <li className="group pl-4 lg:pl-[30px]">
                  <Link
                    href="/tabel_bahasa"
                    className="py-2  flex text-justify text-white text-lg font-bold  leading-relaxed"
                  >
                    <TextGlowing>
                      <h1>Tabel Bahasa</h1>
                    </TextGlowing>
                  </Link>
                </li>
                <li className="group pl-4 lg:pl-[20px]">
                  <Link
                    href="/peta"
                    className="py-2 flex text-justify text-white text-lg font-bold  leading-relaxed"
                  >
                    <TextGlowing>
                      <h1>Peta Bahasa</h1>
                    </TextGlowing>
                  </Link>
                </li>

                <li className="group pl-4  lg:pl-[30px]">
                  <Link
                    href="/subindeks"
                    className="py-2 flex text-justify text-white text-lg font-bold  leading-relaxed"
                  >
                    <TextGlowing>
                      <h1>Subindeks Bahasa</h1>
                    </TextGlowing>
                  </Link>
                </li>

                <li className="group pl-4  lg:pl-[30px]">
                  <Link
                    href="/tentangkami"
                    className="py-2 flex text-justify text-white text-lg font-bold  leading-relaxed"
                  >
                    <TextGlowing>
                      <h1>Tentang kami</h1>
                    </TextGlowing>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
