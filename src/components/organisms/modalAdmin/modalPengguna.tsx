import React, { useState } from "react";
import { ButtonMerah } from "@/components/molecules/button";
interface data {
  closeModal: () => void;
  selectedUserId?: string;
  selectedUserNama?: string;
  selectedUserEmail?: string;
  selectedUserPosisi?: string;
  selectedUserStatus?: string;
}
export function ModalTambah({ closeModal }: data) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (!e.target.nama.value.trim() || !e.target.email.value.trim()) {
      setError("Nama dan email harus diisi");
      setIsLoading(false);
      return;
    }
    setError("");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          nama: e.target.nama.value,
          email: e.target.email.value,
          posisi: e.target.posisi.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        closeModal();
        location.reload();
      } else {
        // Handle error responses (e.g., show error message)
        const data = await res.json();
        setError(
          data.message || "Terjadi kesalahan saat mendaftarkan pengguna"
        );
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setError("Terjadi kesalahan saat mendaftarkan pengguna");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="relative bg-white rounded-lg shadow max-w-2xl max-h-full "
      onSubmit={handleSubmit}
    >
      <div className="flex items-start justify-between px-5 pt-5 pb-2 border-b rounded-t">
        <h1 className="text-xl font-bold text-gray-900 ">Tambah Pengguna</h1>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          data-modal-hide="editUserModal"
          onClick={closeModal}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className="p-6 space-y-6 ">
        <div className="space-y-4">
          {" "}
          {/* Added space-y-4 for vertical spacing */}
          <div>
            <label htmlFor="nama" className="block mb-2 ">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              placeholder="Masukkan Nama"
            />
          </div>{" "}
          <div>
            <label htmlFor="email" className="block mb-2  ">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              placeholder="contoh@email.com"
            />
          </div>
          <div>
            <label htmlFor="posisi" className="block mb-2  ">
              Posisi
            </label>
            <select
              name="posisi"
              id="posisi"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
            >
              <option value="Editor">Editor</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-2">
        {error && (
          <p className="text-red-500 animate-pulse max-auto">{error}</p>
        )}
      </div>
      <div className="flex justify-end items-center p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b">
        <button
          className="px-4 py-2 bg-primer text-white rounded hover:bg-[#0074AB] disabled:opacity-50 "
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Simpan"}
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          onClick={closeModal}
        >
          Batal
        </button>
      </div>
    </form>
  );
}

export function ModalEdit({
  closeModal,
  selectedUserId,
  selectedUserNama,
  selectedUserEmail,
  selectedUserPosisi,
  selectedUserStatus,
}: data) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isReset, setIsReset] = useState(false);
  const [formData, setFormData] = useState({
    nama: selectedUserNama || "", // Initialize with props
    email: selectedUserEmail || "",
    posisi: selectedUserPosisi || "",
    status: selectedUserStatus || "",
  });
  const handleUpdate = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (!e.target.nama.value.trim() || !e.target.email.value.trim()) {
      setError("Nama dan email harus diisi");
      setIsLoading(false);
      return;
    }
    setError("");
    try {
      const res = await fetch("/api/pengguna", {
        method: "PUT",
        body: JSON.stringify({
          id: selectedUserId,
          nama: e.target.nama.value,
          email: e.target.email.value,
          posisi: e.target.posisi.value,
          status: e.target.status.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        closeModal();
        location.reload();
      } else {
        const data = await res.json();
        setError(
          data.message || "Terjadi kesalahan saat memperbarui pengguna."
        );
      }
    } catch (error) {
      console.error("Error updating user:", error);
      setError("Terjadi kesalahan saat memperbarui pengguna.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleResetPassword = async (e: any) => {
    e.preventDefault();
    setIsReset(false);
    try {
      const res = await fetch("/api/auth/reset", {
        method: "PUT",
        body: JSON.stringify({
          id: selectedUserId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error resetting password:", error);
      setError("Terjadi kesalahan saat mereset password.");
    } finally {
      setIsReset(true);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      className="relative bg-white rounded-lg shadow max-w-2xl max-h-full "
      onSubmit={handleUpdate}
    >
      <div className="flex items-start justify-between px-5 pt-5 pb-2 border-b rounded-t">
        <h1 className="text-xl font-bold text-gray-900 ">Edit Pengguna</h1>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          data-modal-hide="editUserModal"
          onClick={closeModal}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className="p-6 space-y-6 ">
        <div className="space-y-4">
          {" "}
          {/* Added space-y-4 for vertical spacing */}
          <div>
            <label htmlFor="nama" className="block mb-2 ">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              placeholder="Masukkan Nama"
              value={formData.nama}
              onChange={handleChange}
            />
          </div>{" "}
          <div>
            <label htmlFor="email" className="block mb-2  ">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              placeholder="contoh@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="posisi" className="block mb-2">
              Posisi
            </label>
            <select
              name="posisi"
              id="posisi"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              value={formData.posisi} // Use formData.posisi directly for value
              onChange={handleChange}
            >
              <option value="Editor" selected={formData.posisi === "Editor"}>
                Editor
              </option>
              <option value="Admin" selected={formData.posisi === "Admin"}>
                Admin
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="status" className="block mb-2">
              Status
            </label>
            <select
              name="status"
              id="status"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
              value={formData.status} // Use formData.posisi directly for value
              onChange={handleChange}
            >
              <option
                value="Non-Aktif"
                selected={formData.status === "Non-Aktif"}
              >
                Non-Aktif
              </option>

              <option value="Aktif" selected={formData.status === "Aktif"}>
                Aktif
              </option>
            </select>
          </div>
          <div className="flex justify-end ">
            <button
              className={`px-4 py-2 text-white rounded ${
                isReset
                  ? "bg-primer hover:bg-blue-600"
                  : "bg-red-500 hover:bg-red-600"
              } disabled:opacity-50`}
              onClick={handleResetPassword}
            >
              {isReset ? "Berhasil Direset" : "Reset Password"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-2">
        {error && (
          <p className="text-red-500 animate-pulse max-auto">{error}</p>
        )}
      </div>
      <div className="flex justify-end items-center p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b">
        <button
          className="px-4 py-2 bg-primer text-white rounded hover:bg-[#0074AB] disabled:opacity-50 "
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Simpan"}
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          onClick={closeModal}
        >
          Batal
        </button>
      </div>
    </form>
  );
}

export function ModalHapus({
  closeModal,
  selectedUserId,
  selectedUserNama,
}: data) {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleHapus = async (e: any) => {
    setIsLoadingDelete(true);
    setError(null);

    const res = await fetch("/api/pengguna", {
      method: "DELETE",

      body: JSON.stringify({
        userId: selectedUserId,
      }),
    });

    closeModal();
    setIsLoadingDelete(false);
    location.reload();
  };
  return (
    <>
      <div className="relative w-full max-w-2xl max-h-full ">
        <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Hapus Pengguna</h2>
          <p className="text-gray-600 mb-6">
            Apakah Anda yakin ingin menghapus pengguna{" "}
            <span className="font-bold">{selectedUserNama}</span>? Tindakan ini
            tidak dapat diurungkan.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
              onClick={handleHapus}
              disabled={isLoadingDelete}
            >
              {isLoadingDelete ? "Menghapus..." : "Hapus"}
            </button>
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              onClick={closeModal}
            >
              Batal
            </button>
          </div>

          {error && (
            <p className="mt-4 text-red-500 text-sm text-center">{error}</p>
          )}
        </div>
      </div>
    </>
  );
}
