"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Modal from "react-modal";
import ModalPemberitahuan from "@/components/molecules/modalPemberitahuan";

export default function Page() {
  const { push } = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [errors, setErrors] = useState(false);
  const [modalType, setModalType] = useState<"informasi" | null>(null);

  const closeModal = () => {
    setModalType(null); // Atur modalType menjadi null saat ditutup
  };
  const openModal = () => {
    setModalType("informasi");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };
  const handleResetPassword = async (e: any) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId"); // Get userId from query params

    if (!userId) {
      // Handle the case where userId is missing (e.g., redirect to error page)
      console.error("User ID missing in reset URL.");
      return;
    }

    // setIsReset(false);
    try {
      const res = await fetch("/api/auth/reset", {
        method: "PUT",
        body: JSON.stringify({
          id: userId,
          password: e.target.password.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      signOut();
      push("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
      // setError("Terjadi kesalahan saat mereset password.");
    } finally {
      // setIsReset(true);
    }
  };

  return (
    <>
      <div
        className="container flex items-center justify-center mx-auto my-auto h-screen "
        onLoad={openModal}
      >
        <div className="relative flex flex-col lg:flex-row w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl mx-10">
          {/* Colored Spans */}
          <span className="bg-primer w-full h-[15px] absolute top-0 left-0 lg:rounded-tr-md lg:h-full lg:w-2"></span>
          <span className="bg-sekunder h-[25px] absolute top-0 right-0 w-1/4 lg:mt-10 "></span>
          <span className="bg-primer h-[25px] absolute bottom-0 right-0 w-1/6 lg:rounded-br-md"></span>

          {/* Image Container (Responsive) */}
          <div className="relative lg:w-1/2 h-64 lg:h-auto lg:rounded-l-lg overflow-hidden hidden lg:block">
            <Link href="/">
              <Image
                src="/komponen/login.png"
                alt="Reset Password"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 33vw"
                className="object-cover"
              />
            </Link>
          </div>

          {/* Reset Password Form (Responsive & Centered) */}
          <form
            onSubmit={(e) => handleResetPassword(e)}
            className="w-full lg:w-1/2 p-8"
          >
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <h1 className="text-xl lg:text-2xl font-extrabold text-primer mb-5">
                  Atur Ulang Kata Sandi
                </h1>
                {/* Password Field with Visibility Toggle */}
                <div className="relative mb-4">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white pr-24" // Adjust pr-24
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Kata Sandi Baru"
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

                {/* Password Field with Visibility Toggle */}
                <div className="relative mb-4">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white pr-24" // Adjust pr-24
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    placeholder="Konfirmasi Kata Sandi"
                    name="konfirmasiPassword"
                  />

                  {/* "Show Password" Text Button */}
                  <button
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-sm text-gray-500 hover:text-gray-700" // Styling adjustments
                    onClick={toggleConfirmPasswordVisibility}
                    type="button"
                  >
                    {isConfirmPasswordVisible ? "Hide" : "Show"}
                  </button>
                </div>
                {/* Login Button */}
                {errors && (
                  <p className="text-red-500 text-sm mb-5 animate-pulse">
                    Kata sandi tidak sama
                  </p>
                )}

                <button
                  className="container mx-auto mt-10 tracking-wide font-semibold bg-primer text-gray-100 w-1/2 py-4 rounded-lg hover:bg-[#0074AB] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  type="submit"
                >
                  <span>Simpan</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={modalType !== null} // Modal terbuka jika modalType bukan null
        onRequestClose={closeModal}
        contentLabel={`Modal ${modalType}`}
        overlayClassName="flex justify-center items-center fixed inset-0 bg-black/50 z-50  "
        className="bg-transparent outline-none border-none w-[500px] mx-5"
      >
        {modalType === "informasi" && (
          <ModalPemberitahuan
            closeModal={closeModal}
            judul="Informasi"

            //Isi modal tambah
          >
            Untuk login pertama kali, silahkan atur ulang kata sandi anda
          </ModalPemberitahuan>
        )}
      </Modal>
    </>
  );
}
