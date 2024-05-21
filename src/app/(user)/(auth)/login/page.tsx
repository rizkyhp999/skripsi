"use client";
import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const router = useRouter();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        // callbackUrl: "/admin/dashboard",
      });
      if (!res?.error) {
        router.push("/admin/dashboard");
      } else {
        console.log(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
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
            src="/komponen/login.png"
            alt="Login"
            fill
            sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <form onSubmit={(e) => handleLogin(e)} className="w-full lg:w-1/2 p-8">
          <div className="w-full flex-1 mt-8">
            <div className="mx-auto max-w-xs">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-primer mb-5">
                Login
              </h1>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-5"
                type="email"
                placeholder="Email"
                name="email"
              />

              {/* Password Field with Visibility Toggle */}
              <div className="relative mb-4">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white pr-24" // Adjust pr-24
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Kata Sandi"
                  name="password"
                />

                {/* "Show Password" Text Button */}
                <button
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-sm text-gray-500 hover:text-gray-700" // Styling adjustments
                  onClick={togglePasswordVisibility}
                  type="button"
                >
                  {isPasswordVisible ? "Hide" : "Show"}
                </button>
              </div>
              {/* Login Button */}

              <button
                className="container mx-auto mt-10 tracking-wide font-semibold bg-primer text-gray-100 w-1/2 py-4 rounded-lg hover:bg-[#0074AB] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                type="submit"
              >
                <span>Masuk</span>
              </button>
            </div>
          </div>
        </form>
        {/* Login Form (Responsive) */}
      </div>
    </div>
  );
}
