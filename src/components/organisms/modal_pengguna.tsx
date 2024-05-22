import React from "react";
import Modal from "../molecules/modal";
export function ModalTambah() {
  return (
    <Modal judul="Tambah Pengguna">
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              id="first-name"
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
              htmlFor="phone-number"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nomor Telepon
            </label>
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              placeholder="e.g. +(12)3456 789"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Posisi
            </label>
            <select
              name="position"
              id="position"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
            >
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
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
