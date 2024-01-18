"use client";
import React from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { AnimasiNavbar, AnimasiMuncul } from "@/components/animasi";
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
    <>
      <header className="bg-primer relative h-[70px] top-0 left-0 w-full flex items-center z-10 lg:px-[100px] ">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <img src="/Logo.png" alt="" className="size-5/6" />
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
                  <li className="group pl-4 lg:pl-[40px]">
                    <Link
                      href="/"
                      className="py-2  flex text-justify text-white text-lg font-bold  leading-relaxed"
                    >
                      <AnimasiNavbar>
                        <h1 className="text-white">Beranda</h1>
                      </AnimasiNavbar>
                    </Link>
                  </li>
                  <li className="group pl-4  lg:pl-[40px]">
                    <Link
                      href="/peta"
                      className="py-2 flex text-justify text-white text-lg font-bold  leading-relaxed"
                    >
                      <AnimasiNavbar>
                        <h1 className="text-white">Peta Status</h1>
                      </AnimasiNavbar>
                    </Link>
                  </li>

                  <li className="group pl-4  lg:pl-[40px]">
                    <Link
                      href="/indikator"
                      className="py-2 flex text-justify text-white text-lg font-bold  leading-relaxed"
                    >
                      <AnimasiNavbar>
                        <h1 className="text-white">Indikator</h1>
                      </AnimasiNavbar>
                    </Link>
                  </li>

                  <li className="group pl-4  lg:pl-[40px]">
                    <Link
                      href="/tentangkami"
                      className="py-2 flex text-justify text-white text-lg font-bold  leading-relaxed"
                    >
                      <AnimasiNavbar>
                        <h1 className="text-white">Tentang kami</h1>
                      </AnimasiNavbar>
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
