import React, { useState } from "react";
interface data {
  closeModal: () => void;
  selectUser?: string;
}
export function ModalTambah({ closeModal }: data) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e);
    setIsLoading(true);

    if (e.target.name.value === "") {
      setError("Nama harus diisi");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",

      body: JSON.stringify({
        nama: e.target.nama.value,
        email: e.target.email.value,
        posisi: e.target.posisi.value,
      }),
    });
    if (res.status === 200) {
      closeModal();
      location.reload();
    } else {
      console.error("Registration failed with status:", res.status);
      // Handle errors or show error messages to the user
    }
    setIsLoading(false);
  };

  return (
    <div className="container">
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
              <path
                stroke="currentColor"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="py-6 px-4 space-y-6 ">
          <div className="space-y-4">
            {" "}
            {/* Added space-y-4 for vertical spacing */}
            <div>
              <label htmlFor="nama" className="block mb-2 font-medium">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Masukkan Nama"
              />
            </div>
            {error ? <p className="text-red-500">{error}</p> : null}
            <div>
              <label htmlFor="email" className="block mb-2  font-medium">
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
              <label htmlFor="posisi" className="block mb-2  font-medium">
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
        <div className="flex justify-end items-center p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b">
          <button
            className="px-4 py-2 bg-primer text-white rounded hover:bg-[#0074AB] disabled:opacity-50"
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
    </div>
  );
}

export function ModalEdit() {}

export function ModalHapus({ closeModal, selectUser }: data) {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleHapus = async (e: any) => {
    setIsLoadingDelete(true);
    setError(null);

    const res = await fetch("/api/pengguna", {
      method: "DELETE",

      body: JSON.stringify({
        userId: selectUser,
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
            Apakah Anda yakin ingin menghapus pengguna ini? Tindakan ini tidak
            dapat diurungkan.
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
