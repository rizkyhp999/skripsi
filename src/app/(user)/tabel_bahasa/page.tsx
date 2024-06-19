"use client";
import React from "react";
import { useState, useEffect } from "react";

import Admin from "@/components/templates/admin";
import { ButtonBiru } from "@/components/molecules/button";

import Pagination from "@/components/organisms/pagination";
import * as XLSX from "xlsx";
import useSWR from "swr";
async function fetcher(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}
export default function Page() {
  const [vitalitas, setVitalitas] = useState<any>([]); // Type the state

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10; // Or any number of items you want per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredVitalitas = vitalitas.filter((vitalitas: any) => {
    const searchFields = ["bahasa", "provinsi"];
    return searchFields.some((field) => {
      const fieldValue = vitalitas[field]; // Get the field value
      // Check if fieldValue is defined and a string before converting to lowercase
      return fieldValue && typeof fieldValue === "string"
        ? fieldValue.toLowerCase().includes(searchTerm.toLowerCase())
        : false; // Return false if undefined or not a string
    });
  });
  const currentItems = filteredVitalitas.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const {
    data: vitalitasData,
    error: vitalitasError,
    isLoading: vitalitasLoading,
  } = useSWR("/api/vitalitas", fetcher);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber); // Update the current page

  useEffect(() => {
    setVitalitas(vitalitasData ?? []);
    console.log(vitalitas);
  }, [vitalitasData]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch("/api/vitalitas");
  //       if (!res.ok) {
  //         throw new Error("Gagal mengambil data vitalitas");
  //       }
  //       const data = await res.json();
  //       setVitalitas(data.data);
  //     } catch (err) {
  //       // setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchData(); // Panggil fungsi fetchData sekali saat komponen dimuat
  // }, []);
  const unduhTabel = () => {
    const headers = [
      "Bahasa",
      "Provinsi",
      "Kabupaten/Kota",
      "Indeks",
      "Pewarisan Antargenerasi",
      "Jumlah dan Proporsi Penutur",
      "Penggunaan Bahasa",
      "Respons Terhadap Ranah dan Media Baru",
      "Bahan Ajar dan Literasi",
      "Sikap Pemerintah dan Regulasi",
      "Sikap Penutur",
      "Jenis dan Kualitas Dimensi",
      "Kedwibahasaan",
      "Kontak Bahasa",
      "Tahun",
    ]; // Sesuaikan dengan header tabel Anda

    const dataToExport = vitalitas.map((vitalitas: any) => {
      return {
        Bahasa: vitalitas.bahasa,
        Provinsi: vitalitas.provinsi,
        "Kabupaten/Kota": vitalitas.kabupaten_kota,
        Indeks: Number(vitalitas.indeks).toFixed(2), // Convert to number and format
        "Pewarisan Antargenerasi": Number(
          vitalitas.pewarisan_antargenerasi
        ).toFixed(2),
        "Jumlah dan Proporsi Penutur": Number(
          vitalitas.jumlah_dan_proporsi_penutur
        ).toFixed(2),
        "Penggunaan Bahasa": Number(vitalitas.ranah_penggunaan_bahasa).toFixed(
          2
        ),
        "Respons Terhadap Ranah dan Media Baru": Number(
          vitalitas.respons_terhadap_ranah_dan_media_baru
        ).toFixed(2),
        "Bahan Ajar dan Literasi": Number(
          vitalitas.bahan_ajar_bahasa_dan_literasi
        ).toFixed(2),
        "Sikap Pemerintah dan Regulasi": Number(
          vitalitas.sikap_pemerintah_dan_regulasi
        ).toFixed(2),
        "Sikap Penutur": Number(vitalitas.sikap_penutur).toFixed(2),
        "Jenis dan Kualitas Dimensi": Number(
          vitalitas.jenis_dan_kualitas_dokumentasi
        ).toFixed(2),
        Kedwibahasaan: Number(vitalitas.kedwibahasaan).toFixed(2),
        "Kontak Bahasa": Number(vitalitas.kontak_bahasa).toFixed(2),
        Tahun: vitalitas.tahun,
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(dataToExport, {
      header: headers,
    });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Vitalitas Bahasa");
    XLSX.writeFile(workbook, "data_vitalitas_bahasa.xlsx");
  };

  return (
    <>
      <div className="flex items-center justify-center lg:px-[100px] lg:py-[50px] bg-[#eeeeee]">
        <div className="container p-10 bg-white rounded-sm">
          <h1 className="text-3xl font-bold ">
            Tabel Daya Hidup Bahasa Daerah di Indonesia
          </h1>
          <div className="bg-primer w-full h-1 rounded-xl my-5"></div>
          <div className="flex flex-wrap justify-end md:flex-row md:justify-between">
            <input
              type="text"
              placeholder="Cari..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-auto mb-2 border rounded px-3 py-2"
            />
            <ButtonBiru onClick={unduhTabel} classname="">
              Unduh
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
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
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
                      Kabupaten/Kota Pengambilan Data
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
                      Tahun Pengambilan Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 &&
                    currentItems.map((vitalitas: any) => (
                      <tr
                        className="bg-white border-b hover:bg-gray-50"
                        key={vitalitas.id}
                      >
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
                        <td className="px-6 py-4">{vitalitas.provinsi}</td>
                        <td className="px-6 py-4">
                          {vitalitas.kabupaten_kota}
                        </td>
                        <td className="px-6 py-4">
                          {Number(vitalitas.indeks).toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          {Number(vitalitas.pewarisan_antargenerasi).toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          {Number(
                            vitalitas.jumlah_dan_proporsi_penutur
                          ).toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          {Number(vitalitas.ranah_penggunaan_bahasa).toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          {Number(
                            vitalitas.respons_terhadap_ranah_dan_media_baru
                          ).toFixed(2)}
                          .
                        </td>
                        <td className="px-6 py-4">
                          {Number(
                            vitalitas.bahan_ajar_bahasa_dan_literasi
                          ).toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          {Number(
                            vitalitas.sikap_pemerintah_dan_regulasi
                          ).toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          {Number(vitalitas.sikap_penutur).toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          {Number(
                            vitalitas.jenis_dan_kualitas_dokumentasi
                          ).toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          {Number(vitalitas.kedwibahasaan).toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          {Number(vitalitas.kontak_bahasa).toFixed(2)}
                        </td>
                        <td className="px-6 py-4">{vitalitas.tahun}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filteredVitalitas.length} // Use filtered data length
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
