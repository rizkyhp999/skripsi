"use client";
import { useState } from "react";

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
              <a
                href="/admin/dashboard"
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
              </a>
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
