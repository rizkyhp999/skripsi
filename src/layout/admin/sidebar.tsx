"use client";
import React, { useState } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-primer  ">
        {/* Navbar Content */}
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* Left Side (Logo and Toggle Button) */}
            <div className="flex items-center justify-start rtl:justify-end">
              {/* Toggle Button (Mobile Only) */}
              <button
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-sm  rounded-lg sm:hidden "
              >
                {/* Hamburger Icon */}
                <span className="sr-only">Open sidebar</span>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 18L20 18"
                    stroke="#FFD700"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="#FFD700"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 6L20 6"
                    stroke="#FFD700"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>

              {/* Logo */}
              <a href="/" className="flex ml-2  md:mr-24">
                <img src="/logo.png" className="h-8 mr-3" alt="" />
              </a>
            </div>
            {/* Right Side (User/Actions) */}
            <div className="flex items-center">
              <div className="flex items-center ml-3 text-white">Keluar</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-primer border-r border-gray-200 sm:translate-x-0  ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        {/* Sidebar Content */}
        <div className="h-full px-3 pb-4 overflow-y-auto bg-primer">
          <ul className="space-y-2 font-medium">
            {" "}
            <li>
              <a
                href="/admin/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 21"
                >
                  <path
                    className="fill-sekunder"
                    d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                  />
                  <path
                    className="fill-sekunder"
                    d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                  />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>
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
