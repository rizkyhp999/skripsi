import React, { useState } from "react";
import Modal from "../molecules/modal";
import { Anybody } from "next/font/google";
interface data {
  closeModal: () => void;
}
export function ModalTambah({ closeModal }: data) {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const res = fetch("/api/auth/register", {
      method: "POST",

      body: JSON.stringify({
        nama: e.target.nama.value,
        email: e.target.email.value,
        posisi: e.target.posisi.value,
      }),
    });
    console.log(res);
    setIsLoading(false);
  };

  return (
    <Modal
      judul="Tambah Pengguna"
      closeModal={closeModal}
      handleSubmit={handleSubmit}
    >
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="nama"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
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
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              placeholder="contoh@email.com"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="posisi"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Posisi
            </label>
            <select
              name="posisi"
              id="posisi"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
            </select>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export function ModalEdit() {}

export function ModalHapus() {
  return <div>wakwau</div>;
}
