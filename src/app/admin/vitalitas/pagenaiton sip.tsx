"use client";
import React from "react";
import Admin from "@/components/templates/admin";
import { useState, useEffect } from "react";
import { ButtonBiru } from "@/components/molecules/button";
import Modal from "react-modal";
import {
  ModalTambah,
  ModalHapus,
  ModalEdit,
} from "@/components/organisms/modalAdmin/modalVitalitas";
import { useRouter } from "next/navigation";
import Pagination from "@/components/organisms/pagination";
export default function page() {
  const [vitalitas, setVitalitas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalType, setModalType] = useState<
    "tambah" | "hapus" | "edit" | null
  >(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Or any number of items you want per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vitalitas.slice(indexOfFirstItem, indexOfLastItem); // Get the items for the current page

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber); // Update the current page

  const closeModal = () => {
    setModalType(null); // Atur modalType menjadi null saat ditutup
  };
  const openModalTambah = () => {
    setModalType("tambah");
  };
  const openModalEdit = () => {
    setModalType("edit");
  };
  const openModalHapus = (userId: string, userNama: string) => {
    setModalType("hapus");
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/vitalitas");
        if (!res.ok) {
          throw new Error("Gagal mengambil data vitalitas");
        }
        const data = await res.json();
        setVitalitas(data.data);
      } catch (err) {
        // setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(); // Panggil fungsi fetchData sekali saat komponen dimuat
  }, []); // Dependensi kosong [] memastikan useEffect hanya berjalan sekali

  if (isLoading) return <p>Loading...</p>; // Tampilkan loading jika data belum siap
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <Admin judul="Data Tabel Daya Hidup Bahasa Daerah">
        <div className="flex justify-end">
          <ButtonBiru onClick={openModalTambah} classname="">
            Tambah
          </ButtonBiru>
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bahasa
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Provinsi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Indeks
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pewarisan Antargenerasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jumlah dan Proporsi Penutur
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Penggunaan Bahasa
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Respons Terhadap Ranah dan Media Baru
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bahan Ajar dan Literasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sikap Pemerintah dan Regulasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sikap Penutur
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jenis dan Kualitas Dimensi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kedwibahasaan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kontak Bahasa
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 &&
                  currentItems.map((vitalitas: any) => (
                    <tr className="bg-white border-b hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {vitalitas.bahasa}
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">Yes</td>
                      <td className="px-6 py-4">Yes</td>
                      <td className="px-6 py-4">$2999</td>
                      <td className="px-6 py-4">1.0 lb.</td>
                      <td className="px-6 py-4">1.0 lb.</td>
                      <td className="px-6 py-4">1.0 lb.</td>
                      <td className="px-6 py-4">1.0 lb.</td>
                      <td className="px-6 py-4">1.0 lb.</td>
                      <td className="px-6 py-4">1.0 lb.</td>
                      <td className="px-6 py-4">1.0 lb.</td>
                      <td className="flex items-center px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="font-medium text-red-600 hover:underline ms-3"
                        >
                          Remove
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Admin>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={vitalitas.length} // Total number of items
        paginate={paginate}
        currentPage={currentPage}
      />
      <Modal
        isOpen={modalType !== null} // Modal terbuka jika modalType bukan null
        onRequestClose={closeModal}
        contentLabel={`Modal ${modalType}`}
        overlayClassName="flex justify-center items-center fixed inset-0 bg-black/50 z-50  "
        className="bg-transparent outline-none border-none w-[500px] mx-5"
      >
        {modalType === "tambah" && (
          <ModalTambah
            closeModal={closeModal}
            //Isi modal tambah
          />
        )}
        {modalType === "edit" && (
          <ModalEdit
            closeModal={closeModal}

            //Isi modal edit
          />
        )}
        {modalType === "hapus" && (
          <ModalHapus
            closeModal={closeModal}

            //Isi modal hapus
          />
        )}
      </Modal>
    </>
  );
}
