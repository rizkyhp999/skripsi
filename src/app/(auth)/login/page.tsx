"use client";
import React, { useState } from "react";
import Image from "next/image";
import Judul from "@/components/atoms/text";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <div className="container flex items-center justify-center mx-auto my-10 ">
      <div className=" relative flex flex-col lg:flex-row w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl mx-10">
        {/* Colored Spans (Positioned using absolute) */}
        <span className="bg-primer w-full h-[15px] absolute top-0 left-0 lg:rounded-tr-md lg:h-full lg:w-2"></span>
        <span className="bg-sekunder h-[25px] absolute top-0 right-0 w-1/4 lg:mt-10 "></span>
        <span className="bg-primer h-[25px] absolute bottom-0 right-0 w-1/6 lg:rounded-br-md"></span>

        {/* Image Container (Responsive) */}
        <div className="relative  lg:w-1/2 h-64 lg:h-auto lg:rounded-l-lg overflow-hidden hidden lg:block  ">
          <Image
            src={"/komponen/login.png"}
            alt="Login"
            fill
            sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 33vw"
            className="object-cover "
          />
        </div>

        {/* Login Form (Responsive) */}
        <div className="w-full lg:w-1/2 p-8">
          <div className="w-full flex-1 mt-8">
            <div className="mx-auto max-w-xs">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-primer mb-5">
                Login
              </h1>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-5"
                type="email"
                placeholder="Email"
              />

              {/* Password Field with Visibility Toggle */}
              <div className="relative mb-4">
                {" "}
                {/* Added mb-4 for spacing */}
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Kata Sandi"
                />
                {/* Remember Me Checkbox */}
                <div className="flex items-center mb-4">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="mr-2 text-primer focus:ring-primer"
                  />
                  <label htmlFor="rememberMe" className="text-sm text-gray-700">
                    Remember Me
                  </label>
                </div>
                {/* Login Button */}
                <button className="container mx-auto mt-10 tracking-wide font-semibold bg-primer text-gray-100 w-1/2 py-4 rounded-lg hover:bg-[#0074AB] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span>Masuk</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
