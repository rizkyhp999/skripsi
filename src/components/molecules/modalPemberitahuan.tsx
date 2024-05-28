import React from "react";
import Modal from "react-modal";
interface data {
  judul?: string;
  children?: React.ReactNode;

  closeModal?: () => void;
}
export default function ModalPemberitahuan({
  judul,
  children,
  closeModal,
}: data) {
  return (
    <div className="relative w-full max-w-2xl max-h-full ">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">{judul}</h2>
        <p className="text-gray-600 mb-6">{children}</p>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            onClick={closeModal}
          >
            Oke
          </button>
        </div>
      </div>
    </div>
  );
}
