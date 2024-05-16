"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-primer">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* Left Side (Logo and Toggle Button) */}
            <div className="flex items-center justify-start md:justify-end">
              <a href="/" className=" ml-2 hidden sm:block md:mr-24">
                <img src="/logo.png" className="h-8 mr-3" alt="Your Logo" />
              </a>
              <a href="/" className=" ml-2 sm:hidden">
                <img
                  src="/logo kecil.png"
                  className="h-8 mr-3"
                  alt="Your Logo"
                />
              </a>
              <button
                type="button"
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none"
                aria-controls="logo-sidebar"
                aria-expanded={isSidebarOpen}
              >
                {/* Conditional rendering of icons */}

                <div className="relative inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-sekunder"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <div className="absolute inset-0 rounded-full bg-black opacity-0 active:opacity-30 "></div>
                </div>
              </button>
            </div>

            {/* Right Side (User/Actions) */}
            <div className="flex items-center">
              <a href="/" className="text-white">
                Keluar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform bg-primer border-r border-gray-200 sm:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-primer">
          <ul className="space-y-1 font-medium">
            <li>
              <Link
                href={"/admin/dashboard"}
                className="flex items-center p-2 text-white text-lg rounded-lg hover:bg-sekunder hover:text-primer"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 21"
                  fill="currentColor"
                >
                  <path
                    className="fill-current"
                    d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                  />
                  <path
                    className="fill-current"
                    d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                  />
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/admin/carousel"}
                className="flex items-center p-2 text-white text-lg rounded-lg hover:bg-sekunder hover:text-primer"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 21"
                  fill="currentColor"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="ml-3">Carousel</span>
              </Link>
            </li>

            <li>
              <Link
                href={"/admin/vitalitas"}
                className="flex items-center p-2 text-white text-lg rounded-lg hover:bg-sekunder hover:text-primer"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 21"
                  fill="currentColor"
                >
                  <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                </svg>
                <span className="ml-3">Data Vitalitas</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/admin/infografik"}
                className="flex items-center p-2 text-white text-lg rounded-lg hover:bg-sekunder hover:text-primer"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 21"
                  fill="currentColor"
                >
                  <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                  <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
                </svg>
                <span className="ml-3">Infografik</span>
              </Link>
            </li>

            <li>
              <Link
                href={"/admin/pengguna"}
                className="flex items-center p-2 text-white text-lg rounded-lg hover:bg-sekunder hover:text-primer"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 21"
                  fill="currentColor"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="ml-3">Pengguna</span>
              </Link>
            </li>
            {/* Add more sidebar links here */}
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {children}
        </div>
      </div>
    </>
  );
}
