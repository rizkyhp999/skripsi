import React, { useEffect, useState } from "react";

import Modal from "react-modal";

interface data {
  closeModal: () => void;
}
export function ModalTambah({ closeModal }: data) {
  const [wilayah, setWilayah] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedProvinsi, setSelectedProvinsi] = useState("");
  const [selectedKabupatenKota, setSelectedKabupatenKota] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/wilayah");
        if (!res.ok) {
          throw new Error("Gagal mengambil data vitalitas");
        }
        const data = await res.json();
        setWilayah(data.data);
      } catch (err) {
        // setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(); // Panggil fungsi fetchData sekali saat komponen dimuat
  }, []);

  return (
    <form
      className="relative bg-white rounded-lg shadow "
      onSubmit={handleSubmit}
    >
      <div className="flex items-start justify-between px-5 pt-5 pb-2 border-b rounded-t">
        <h1 className="text-xl font-bold text-gray-900 ">Tambah Data</h1>
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
        <div className="flex flex-col">
          {" "}
          {/* Added space-y-4 for vertical spacing */}
          <fieldset className="mb-4">
            <legend className="text-lg font-medium text-gray-900">
              Identitas
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-3 gap-4 bg-slate-200">
              <div className="flex flex-wrap content-end ">
                <label htmlFor="bahasa" className="block mb-2 text-md  ">
                  Bahasa Daerah
                </label>
                <input
                  required
                  type="text"
                  name="bahasa"
                  id="bahasa"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Bahasa Indonesia"
                />
              </div>
              <div className="flex flex-wrap content-end ">
                <label htmlFor="provinsi" className="block mb-2 text-md    ">
                  Provinsi
                </label>
                <select
                  name="provinsi"
                  id="provinsi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 z-10"
                  value={selectedProvinsi}
                  onChange={(e) => setSelectedProvinsi(e.target.value)} // Tambahkan onChange
                >
                  <option value="" disabled>
                    Pilih Provinsi
                  </option>
                  {isLoading ? (
                    <option value="" disabled>
                      Loading...
                    </option>
                  ) : (
                    wilayah.map((wilayah: any) => (
                      <option key={wilayah.id} value={wilayah.provinsi}>
                        {wilayah.provinsi}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div className="flex flex-wrap content-end ">
                <label htmlFor="kabupaten_kota" className="block mb-2 text-md ">
                  Kabupaten/Kota Pengambilan Data
                </label>
                <select
                  name="kabupaten_kota"
                  id="kabupaten_kota"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 z-10"
                  value={selectedKabupatenKota}
                  onChange={(e) => setSelectedKabupatenKota(e.target.value)} // Tambahkan onChange
                >
                  <option value="" disabled>
                    Pilih Kabupaten/Kota
                  </option>
                  {isLoading ? (
                    <option value="" disabled>
                      Loading...
                    </option>
                  ) : (
                    wilayah.map((wilayah: any) => (
                      <>
                        {selectedProvinsi == wilayah.provinsi ? (
                          <option
                            key={wilayah.id}
                            value={wilayah.kabupaten_kota}
                          >
                            {wilayah.kabupaten_kota}
                          </option>
                        ) : null}
                      </>
                    ))
                  )}
                </select>
              </div>
              <div className="flex flex-wrap content-end ">
                <label htmlFor="tahun" className="block mb-2 text-md  ">
                  Bahasa Daerah
                </label>
                <input
                  required
                  type="number"
                  name="tahun"
                  id="tahun"
                  min="2015"
                  max="2100"
                  step="1"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Tahun"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="mb-4">
            <legend className="text-lg font-medium text-gray-900">
              Indeks
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-rows-4 gap-4 bg-slate-200">
              <div className="flex flex-wrap content-end ">
                <label
                  htmlFor="pewarisan_antargenerasi"
                  className="block mb-2 text-sm  "
                >
                  Pewarisan Antargenerasi
                </label>
                <input
                  required
                  type="number"
                  name="pewarisan_antargenerasi"
                  id="pewarisan_antargenerasi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="0 hingga 1"
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
              <div>
                <label
                  htmlFor="jumlah_dan_proporsi_penutur"
                  className="block mb-2 text-sm  "
                >
                  Jumlah dan Proporsi Penutur
                </label>
                <input
                  required
                  type="number"
                  name="jumlah_dan_proporsi_penutur"
                  id="jumlah_dan_proporsi_penutur"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="0 hingga 1"
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
              <div className="flex flex-wrap content-end ">
                <label
                  htmlFor="ranah_penggunaan_bahasa"
                  className="block mb-2 text-sm  "
                >
                  Ranah Penggunaan Bahasa
                </label>
                <input
                  required
                  type="number"
                  name="ranah_penggunaan_bahasa"
                  id="ranah_penggunaan_bahasa"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="0 hingga 1"
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
              <div className="flex flex-wrap content-end ">
                <label
                  htmlFor="respons_terhadap_ranah_dan_media_baru"
                  className="block mb-2 text-sm  "
                >
                  Respons Terhadap Ranah dan Media Baru
                </label>
                <input
                  required
                  type="number"
                  name="respons_terhadap_ranah_dan_media_baru"
                  id="respons_terhadap_ranah_dan_media_baru"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="0 hingga 1"
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
              <div className="flex flex-wrap content-end ">
                <label
                  htmlFor="bahan_ajar_bahasa_dan_literasi"
                  className="block mb-2 text-sm  "
                >
                  Bahan Ajar Bahasa dan Literasi
                </label>
                <input
                  required
                  type="number"
                  name="bahan_ajar_bahasa_dan_literasi"
                  id="bahan_ajar_bahasa_dan_literasi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="0 hingga 1"
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
              <div className="flex flex-wrap content-end ">
                <label
                  htmlFor="sikap_pemerintah_dan_regulasi"
                  className="block mb-2 text-sm  "
                >
                  Sikap Pemerintah dan Regulasi
                </label>
                <input
                  required
                  type="number"
                  name="sikap_pemerintah_dan_regulasi"
                  id="sikap_pemerintah_dan_regulasi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="0 hingga 1"
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
              <div className="flex flex-wrap content-end ">
                <label htmlFor="sikap_penutur" className="block mb-2 text-sm  ">
                  Sikap Penutur
                </label>
                <input
                  required
                  type="number"
                  name="sikap_penutur"
                  id="sikap_penutur"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="0 hingga 1"
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
              <div className="flex flex-wrap content-end ">
                <label
                  htmlFor="jenis_dan_kualitas_dokumentasi"
                  className="block mb-2 text-sm  "
                >
                  Jenis dan Kualitas Dokumentasi
                </label>
                <input
                  required
                  type="number"
                  name="jenis_dan_kualitas_dokumentasi"
                  id="jenis_dan_kualitas_dokumentasi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="0 hingga 1"
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
              <div className="flex flex-wrap content-end ">
                <label htmlFor="kedwibahasaan" className="block mb-2 text-sm  ">
                  Kedwibahasaan
                </label>
                <input
                  required
                  type="number"
                  name="kedwibahasaan"
                  id="kedwibahasaan"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="0 hingga 1"
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
              <div className="flex flex-wrap content-end ">
                <label htmlFor="kontak_bahasa" className="block mb-2 text-sm  ">
                  Kontak Bahasa
                </label>
                <input
                  required
                  type="number"
                  name="kontak_bahasa"
                  id="kontak_bahasa"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="0 hingga 1"
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
            </div>
          </fieldset>
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
          type="submit"
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

export function ModalEdit({ closeModal }: data) {
  return <div>wakwau</div>;
}

export function ModalHapus({ closeModal }: data) {
  return <div>wakwau</div>;
}
