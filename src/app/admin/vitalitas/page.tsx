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
import useSWR from "swr";
import LoadingSkeleton from "@/components/molecules/loading";
import * as XLSX from "xlsx";
async function fetcher(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}
export default function Page() {
  const {
    data: vitalitasData,
    error: vitalitasError,
    isLoading: vitalitasLoading,
  } = useSWR("/api/vitalitas", fetcher);

  const [vitalitas, setVitalitas] = useState([]);

  const [modalType, setModalType] = useState<
    "tambah" | "hapus" | "edit" | null
  >(null);

  // ... (import yang diperlukan)

  const [selectedIdVitalitas, setSelectedIdVitalitas] = useState("");
  const [selectedBahasa, setSelectedBahasa] = useState("");
  const [selectedProvinsi, setSelectedProvinsi] = useState("");
  const [selectedKabupatenKota, setSelectedKabupatenKota] = useState("");

  // ubah type data untuk input berupa angka menjadi number
  const [selectedIndeks, setSelectedIndeks] = useState<number>(0);
  const [selectedTahun, setSelectedTahun] = useState<number>(0);
  const [selectedPewarisanAntargenerasi, setSelectedPewarisanAntargenerasi] =
    useState<number>(0);
  const [
    selectedJumlahDanProporsiPenutur,
    setSelectedJumlahDanProporsiPenutur,
  ] = useState<number>(0);
  const [selectedRanahPenggunaanBahasa, setSelectedRanahPenggunaanBahasa] =
    useState<number>(0);
  const [
    selectedResponsTerhadapRanahDanMediaBaru,
    setSelectedResponsTerhadapRanahDanMediaBaru,
  ] = useState<number>(0);
  const [
    selectedBahanAjarBahasaDanLiterasi,
    setSelectedBahanAjarBahasaDanLiterasi,
  ] = useState<number>(0);
  const [
    selectedSikapPemerintahDanRegulasi,
    setSelectedSikapPemerintahDanRegulasi,
  ] = useState<number>(0);
  const [selectedSikapPenutur, setSelectedSikapPenutur] = useState<number>(0);
  const [selectedJenisDanKualitasDimensi, setSelectedJenisDanKualitasDimensi] =
    useState<number>(0);
  const [selectedKedwibahasaan, setSelectedKedwibahasaan] = useState<number>(0);
  const [selectedKontakBahasa, setSelectedKontakBahasa] = useState<number>(0);

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

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber); // Update the current page
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...filteredVitalitas];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredVitalitas, sortConfig]);
  const requestSort = (key: string) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  const closeModal = () => {
    setModalType(null); // Atur modalType menjadi null saat ditutup
  };
  const openModalTambah = () => {
    setModalType("tambah");
  };
  const openModalEdit = (
    selectedIdVitalitas: string,
    selectedBahasa: string,
    selectedProvinsi: string,
    selectedKabupatenKota: string,
    selectedIndeks: number,
    selectedTahun: number,
    selectedPewarisanAntargenerasi: number,
    selectedJumlahDanProporsiPenutur: number,
    selectedRanahPenggunaanBahasa: number,
    selectedResponsTerhadapRanahDanMediaBaru: number,
    selectedBahanAjarBahasaDanLiterasi: number,
    selectedSikapPemerintahDanRegulasi: number,
    selectedSikapPenutur: number,
    selectedJenisDanKualitasDimensi: number,
    selectedKedwibahasaan: number,
    selectedKontakBahasa: number
  ) => {
    setModalType("edit");
    setSelectedIdVitalitas(selectedIdVitalitas);
    setSelectedBahasa(selectedBahasa);
    setSelectedProvinsi(selectedProvinsi);
    setSelectedKabupatenKota(selectedKabupatenKota);
    setSelectedIndeks(selectedIndeks);
    setSelectedTahun(selectedTahun);
    setSelectedPewarisanAntargenerasi(selectedPewarisanAntargenerasi);
    setSelectedJumlahDanProporsiPenutur(selectedJumlahDanProporsiPenutur);
    setSelectedRanahPenggunaanBahasa(selectedRanahPenggunaanBahasa);
    setSelectedResponsTerhadapRanahDanMediaBaru(
      selectedResponsTerhadapRanahDanMediaBaru
    );
    setSelectedBahanAjarBahasaDanLiterasi(selectedBahanAjarBahasaDanLiterasi);
    setSelectedSikapPemerintahDanRegulasi(selectedSikapPemerintahDanRegulasi);
    setSelectedSikapPenutur(selectedSikapPenutur);
    setSelectedJenisDanKualitasDimensi(selectedJenisDanKualitasDimensi);
    setSelectedKedwibahasaan(selectedKedwibahasaan);
    setSelectedKontakBahasa(selectedKontakBahasa);
  };

  const openModalHapus = (
    selectedIdVitalitas: string,
    selectedBahasa: string
  ) => {
    setModalType("hapus");
    setSelectedIdVitalitas(selectedIdVitalitas);
    setSelectedBahasa(selectedBahasa);
  };

  useEffect(() => {
    setVitalitas(vitalitasData ?? []);
  }, [vitalitasData, vitalitas]);

  const [sortOrder, setSortOrder] = useState<{
    [key: number]: "asc" | "desc" | null;
  }>({});
  const exportToExcel = () => {
    if (!vitalitasData) return;

    // Salin data vitalitasData
    const modifiedData = vitalitasData.map((item: any) => {
      // Buat objek baru tanpa properti pertama
      const { id, createdAt, ...rest } = item; // Misalkan kolom pertama bernama 'id'
      return rest;
    });

    // Konversi data yang telah dimodifikasi menjadi sheet
    const worksheet = XLSX.utils.json_to_sheet(modifiedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Vitalitas");
    XLSX.writeFile(workbook, "data_vitalitas.xlsx");
  };

  const importFromExcel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        // setVitalitas(jsonData);
        // console.log(jsonData);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <>
      {vitalitasLoading && <LoadingSkeleton />}

      <Admin judul="Data Tabel Daya Hidup Bahasa Daerah">
        <div className="flex flex-wrap sm:flex-row justify-between">
          <input
            type="text"
            placeholder="Cari..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-auto mb-2 border rounded px-3 py-2"
          />
          <div className="">
            <ButtonBiru onClick={exportToExcel} classname="mr-5 mt-2">
              Export
            </ButtonBiru>
            <ButtonBiru classname="mr-5 mt-2">
              <label htmlFor="fileUpload">Import</label>
              <input
                type="file"
                accept=".xlsx, .xls"
                onChange={importFromExcel}
                className="hidden"
                id="fileUpload"
              />
            </ButtonBiru>
            <ButtonBiru onClick={openModalTambah} classname="mt-2">
              Tambah
            </ButtonBiru>
          </div>
        </div>

        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <button type="button" onClick={() => requestSort("no")}>
                      No
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button type="button" onClick={() => requestSort("bahasa")}>
                      Bahasa
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() => requestSort("provinsi")}
                    >
                      Provinsi
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() => requestSort("kabupaten_kota")}
                    >
                      Kabupaten/Kota Pengambilan Data
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button type="button" onClick={() => requestSort("indeks")}>
                      Indeks
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() => requestSort("pewarisan_antargenerasi")}
                    >
                      Pewarisan Antargenerasi
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() => requestSort("jumlah_dan_proporsi_penutur")}
                    >
                      Jumlah dan Proporsi Penutur
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() => requestSort("ranah_penggunaan_bahasa")}
                    >
                      Penggunaan Bahasa
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() =>
                        requestSort("respons_terhadap_ranah_dan_media_baru")
                      }
                    >
                      Respons Terhadap Ranah dan Media Baru
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() =>
                        requestSort("bahan_ajar_bahasa_dan_literasi")
                      }
                    >
                      Bahan Ajar dan Literasi
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() =>
                        requestSort("sikap_pemerintah_dan_regulasi")
                      }
                    >
                      Sikap Pemerintah dan Regulasi
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() => requestSort("sikap_penutur")}
                    >
                      Sikap Penutur
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() =>
                        requestSort("jenis_dan_kualitas_dokumentasi")
                      }
                    >
                      Jenis dan Kualitas Dimensi Dokumentasi
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() => requestSort("kedwibahasaan")}
                    >
                      Kedwibahasaan
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button
                      type="button"
                      onClick={() => requestSort("kontak_bahasa")}
                    >
                      Kontak Bahasa
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button type="button" onClick={() => requestSort("tahun")}>
                      Tahun
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 &&
                  currentItems.map((vitalitas: any, index: number) => (
                    <tr
                      className="bg-white border-b hover:bg-gray-50"
                      key={vitalitas.id}
                    >
                      <td className="px-6 py-4 text-center">
                        {currentPage * itemsPerPage - itemsPerPage + index + 1}
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {vitalitas.bahasa}
                      </th>
                      <td className="px-6 py-4">{vitalitas.provinsi}</td>
                      <td className="px-6 py-4">{vitalitas.kabupaten_kota}</td>
                      <td className="px-6 py-4">
                        {Number(vitalitas.indeks).toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        {Number(vitalitas.pewarisan_antargenerasi).toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        {Number(vitalitas.jumlah_dan_proporsi_penutur).toFixed(
                          2
                        )}
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
                      <td className=" px-6 py-4 ">
                        <button
                          className="mr-2 text-primer"
                          onClick={() =>
                            openModalEdit(
                              vitalitas.id,
                              vitalitas.bahasa,
                              vitalitas.provinsi,
                              vitalitas.kabupaten_kota,
                              vitalitas.indeks,
                              vitalitas.tahun,
                              vitalitas.pewarisan_antargenerasi,
                              vitalitas.jumlah_dan_proporsi_penutur,
                              vitalitas.ranah_penggunaan_bahasa,
                              vitalitas.respons_terhadap_ranah_dan_media_baru,
                              vitalitas.bahan_ajar_bahasa_dan_literasi,
                              vitalitas.sikap_pemerintah_dan_regulasi,
                              vitalitas.sikap_penutur,
                              vitalitas.jenis_dan_kualitas_dokumentasi,
                              vitalitas.kedwibahasaan,
                              vitalitas.kontak_bahasa
                            )
                          }
                        >
                          Edit
                        </button>
                        <button
                          className="text-[#ff0000]"
                          onClick={() =>
                            openModalHapus(vitalitas.id, vitalitas.bahasa)
                          }
                        >
                          Hapus
                        </button>
                      </td>
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
      </Admin>

      <Modal
        isOpen={modalType !== null} // Modal terbuka jika modalType bukan null
        onRequestClose={closeModal}
        contentLabel={`Modal ${modalType}`}
        overlayClassName="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        className="bg-white rounded-lg outline-none border-none max-w-5xl mx-3 max-h-[90vh] overflow-y-auto" // Improved styling and responsiveness
        ariaHideApp={false} // This is important for accessibility
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
            selectedIdVitalitas={selectedIdVitalitas}
            selectedBahasa={selectedBahasa}
            selectedProvinsi={selectedProvinsi}
            selectedKabupatenKota={selectedKabupatenKota}
            selectedIndeks={selectedIndeks}
            selectedTahun={selectedTahun}
            selectedPewarisanAntargenerasi={selectedPewarisanAntargenerasi}
            selectedJumlahDanProporsiPenutur={selectedJumlahDanProporsiPenutur}
            selectedRanahPenggunaanBahasa={selectedRanahPenggunaanBahasa}
            selectedResponsTerhadapRanahDanMediaBaru={
              selectedResponsTerhadapRanahDanMediaBaru
            }
            selectedBahanAjarBahasaDanLiterasi={
              selectedBahanAjarBahasaDanLiterasi
            }
            selectedSikapPemerintahDanRegulasi={
              selectedSikapPemerintahDanRegulasi
            }
            selectedSikapPenutur={selectedSikapPenutur}
            selectedJenisDanKualitasDimensi={selectedJenisDanKualitasDimensi}
            selectedKedwibahasaan={selectedKedwibahasaan}
            selectedKontakBahasa={selectedKontakBahasa}
            //Isi modal edit
          />
        )}
        {modalType === "hapus" && (
          <ModalHapus
            closeModal={closeModal}
            selectedIdVitalitas={selectedIdVitalitas}
            selectedBahasa={selectedBahasa}
            //Isi modal hapus
          />
        )}
      </Modal>
    </>
  );
}
