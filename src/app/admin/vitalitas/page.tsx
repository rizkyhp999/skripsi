import React from "react";
import Admin from "@/components/templates/admin";

export default function page() {
  return (
    <>
      <Admin judul="Data Tabel Daya Hidup Bahasa Daerah">
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
                    Lampung Cikoneng
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
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        htmlFor="checkbox-table-search-2"
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
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">No</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">$1999</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </Admin>
    </>
  );
}
