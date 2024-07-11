"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TextGlowing } from "@/components/atoms/animasi";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FaCaretDown } from "react-icons/fa";

type DropdownState = {
  id: number;
  name: string;
  isOpen: boolean;
  items: { name: string; href: string }[];
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState<DropdownState[]>([
    {
      id: 1,
      name: "Daya Hidup Bahasa ",
      isOpen: false,
      items: [
        { name: "Tabel Daya Hidup Bahasa", href: "/tabel_bahasa" },
        { name: "Subindeks Daya Hidup Bahasa", href: "/subindeks" },
      ],
    },
    {
      id: 2,
      name: "Informasi ",
      isOpen: false,
      items: [
        { name: "Informasi Data", href: "/metadata" },
        { name: "Buku Pedoman", href: "/pedoman" },
      ],
    },
    {
      id: 3,
      name: "Media ",
      isOpen: false,
      items: [{ name: "Infografik", href: "/infografik" }],
    },
    // Tambahkan dropdown lainnya sesuai kebutuhan
  ]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (id: number) => {
    const updatedDropdowns = dropdowns.map((dropdown) =>
      dropdown.id === id
        ? { ...dropdown, isOpen: !dropdown.isOpen }
        : { ...dropdown, isOpen: false }
    );
    setDropdowns(updatedDropdowns);
  };

  return (
    <nav className="bg-primer text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:px-[50px]">
          <div className="flex-shrink">
            <Link href="/admin/dashboard">
              <Image src="/logo.png" alt="logo" width={260} height={50} />
            </Link>
          </div>
          <div className="flex-shrink hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="pl-4 py-2 flex text-justify text-white text-lg font-bold leading-relaxed"
                prefetch
              >
                <TextGlowing>
                  <h1 className="text-base md:text-sm lg:text-lg">Beranda</h1>
                </TextGlowing>
              </Link>
              {dropdowns.map((dropdown) => (
                <div key={dropdown.id} className="relative">
                  <button
                    onClick={() => toggleDropdown(dropdown.id)}
                    className="pl-4 py-2 flex text-justify text-white text-lg font-bold leading-relaxed focus:outline-none"
                  >
                    <TextGlowing>
                      <h1 className="flex items-center text-base md:text-sm lg:text-lg">
                        {dropdown.name}
                        <FaCaretDown />
                      </h1>
                    </TextGlowing>
                  </button>
                  {dropdown.isOpen && (
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    >
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby={`options-menu-${dropdown.id}`}
                      >
                        {dropdown.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            prefetch
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
              <Link
                href="/tentangkami"
                className="pl-4 py-2 flex text-justify text-white text-lg font-bold leading-relaxed"
                prefetch
              >
                <TextGlowing>
                  <h1 className="text-base md:text-sm lg:text-lg">
                    Tentang Kami
                  </h1>
                </TextGlowing>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-sekunder focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", marginTop: 0 },
          closed: { opacity: 0, height: 0, marginTop: 0 },
        }}
        className="sm:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="hover:bg-sekunder block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          {dropdowns.map((dropdown) => (
            <div key={dropdown.id} className="relative">
              <button
                onClick={() => toggleDropdown(dropdown.id)}
                className="item-center justify-center hover:bg-sekunder block px-3 py-2 rounded-md text-base font-medium"
              >
                <h1 className="flex items-center text-base md:text-sm lg:text-lg">
                  {dropdown.name}
                  <FaCaretDown />
                </h1>
              </button>
              {dropdown.isOpen && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`options-menu-${dropdown.id}`}
                  >
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        prefetch
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
          <Link
            href="/tentangkami"
            className="hover:bg-sekunder block px-3 py-2 rounded-md text-base font-medium"
          >
            Tentang Kami
          </Link>
          <Link
            href="/admin/dashboard"
            className="hover:bg-sekunder block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
