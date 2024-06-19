import React, { use, useEffect, useState } from "react";

import Modal from "react-modal";
import useSWR from "swr";
async function fetcher(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}
interface data {
  closeModal: () => void;
  selectedIdVitalitas?: string;
  selectedBahasa?: string;
  selectedProvinsi?: string;
  selectedKabupatenKota?: string;
  selectedIndeks?: number;
  selectedTahun?: number;
  selectedPewarisanAntargenerasi?: number;
  selectedJumlahDanProporsiPenutur?: number;
  selectedRanahPenggunaanBahasa?: number;
  selectedResponsTerhadapRanahDanMediaBaru?: number;
  selectedBahanAjarBahasaDanLiterasi?: number;
  selectedSikapPemerintahDanRegulasi?: number;
  selectedSikapPenutur?: number;
  selectedJenisDanKualitasDimensi?: number;
  selectedKedwibahasaan?: number;
  selectedKontakBahasa?: number;
}

export function ModalTambah({ closeModal }: data) {
  const [error, setError] = useState("");
  const [selectedProvinsi, setSelectedProvinsi] = useState("");
  const [selectedKabupatenKota, setSelectedKabupatenKota] = useState("");
  const [wilayah, setWilayah] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/vitalitas", {
        method: "POST",
        body: JSON.stringify({
          bahasa: e.target.bahasa.value,
          provinsi: e.target.provinsi.value,
          kabupaten_kota: e.target.kabupaten_kota.value,
          indeks: e.target.indeks.value,
          tahun: e.target.tahun.value,
          pewarisan_antargenerasi: e.target.pewarisan_antargenerasi.value,
          jumlah_dan_proporsi_penutur:
            e.target.jumlah_dan_proporsi_penutur.value, // Perbaiki ID input
          ranah_penggunaan_bahasa: e.target.ranah_penggunaan_bahasa.value,
          respons_terhadap_ranah_dan_media_baru:
            e.target.respons_terhadap_ranah_dan_media_baru.value,
          bahan_ajar_bahasa_dan_literasi:
            e.target.bahan_ajar_bahasa_dan_literasi.value,
          sikap_pemerintah_dan_regulasi:
            e.target.sikap_pemerintah_dan_regulasi.value,
          sikap_penutur: e.target.sikap_penutur.value,
          jenis_dan_kualitas_dokumentasi:
            e.target.jenis_dan_kualitas_dokumentasi.value,
          kedwibahasaan: e.target.kedwibahasaan.value,
          kontak_bahasa: e.target.kontak_bahasa.value,
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
          data.message || "Terjadi kesalahan saat mendaftarkan aapengguna"
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
        <div className="flex flex-col ">
          {" "}
          {/* Added space-y-4 for vertical spacing */}
          <fieldset className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
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
                <label htmlFor="indeks" className="block mb-2 text-md  ">
                  Indeks Daya Hidup Bahasa
                </label>
                <input
                  required
                  type="number"
                  name="indeks"
                  id="indeks"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="0 hingga 1"
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
              <div className="flex flex-wrap content-end ">
                <label htmlFor="tahun" className="block mb-2 text-md  ">
                  Tahun Pengambilan Data
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
          <fieldset className="">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-rows-4 gap-4 ">
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

export function ModalEdit({
  closeModal,
  selectedIdVitalitas,
  selectedBahasa,
  selectedProvinsi,
  selectedKabupatenKota,
  selectedIndeks,
  selectedTahun,
  selectedPewarisanAntargenerasi,
  selectedJumlahDanProporsiPenutur,
  selectedRanahPenggunaanBahasa,
  selectedResponsTerhadapRanahDanMediaBaru,
  selectedBahanAjarBahasaDanLiterasi,
  selectedSikapPemerintahDanRegulasi,
  selectedSikapPenutur,
  selectedJenisDanKualitasDimensi,
  selectedKedwibahasaan,
  selectedKontakBahasa,
}: data) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    id: selectedIdVitalitas || "",
    bahasa: selectedBahasa || "",
    provinsi: selectedProvinsi || "",
    kabupaten_kota: selectedKabupatenKota || "",
    indeks: selectedIndeks || "",
    tahun: selectedTahun || "",
    pewarisan_antargenerasi: selectedPewarisanAntargenerasi || "",
    jumlah_dan_proporsi_penutur: selectedJumlahDanProporsiPenutur || "",
    ranah_penggunaan_bahasa: selectedRanahPenggunaanBahasa || "",
    respons_terhadap_ranah_dan_media_baru:
      selectedResponsTerhadapRanahDanMediaBaru || "",
    bahan_ajar_bahasa_dan_literasi: selectedBahanAjarBahasaDanLiterasi || "",
    sikap_pemerintah_dan_regulasi: selectedSikapPemerintahDanRegulasi || "",
    sikap_penutur: selectedSikapPenutur || "",
    jenis_dan_kualitas_dokumentasi: selectedJenisDanKualitasDimensi || "",
    kedwibahasaan: selectedKedwibahasaan || "",
    kontak_bahasa: selectedKontakBahasa || "",
  });

  const [wilayah, setWilayah] = useState([]);
  const {
    data: wilayahData,
    error: wilayahError,
    isLoading: wilayahLoading,
  } = useSWR("/api/wilayah", fetcher);

  useEffect(() => {
    setWilayah(wilayahData ?? []);
  }, [wilayahData]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch("/api/wilayah");
  //       if (!res.ok) {
  //         throw new Error("Gagal mengambil data vitalitas");
  //       }
  //       const data = await res.json();
  //       setWilayah(data.data);
  //     } catch (err) {
  //       // setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchData(); // Panggil fungsi fetchData sekali saat komponen dimuat
  // }, []);
  const handleUpdate = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    setError("");
    try {
      const res = await fetch("/api/vitalitas", {
        method: "PUT",
        body: JSON.stringify(formData),
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
      console.error("Error updating data:", error);
      setError("Terjadi kesalahan saat memperbarui data.");
    } finally {
      setIsLoading(false);
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
      className="relative bg-white rounded-lg shadow "
      onSubmit={handleUpdate}
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
        <div className="flex flex-col ">
          {" "}
          {/* Added space-y-4 for vertical spacing */}
          <fieldset className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
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
                  value={formData.bahasa}
                  onChange={handleChange}
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
                  value={formData.provinsi}
                  onChange={handleChange} // Tambahkan onChange
                >
                  <option value="" disabled>
                    Pilih Provinsi
                  </option>
                  {isLoading ? (
                    <option value="" disabled>
                      Loading...
                    </option>
                  ) : (
                    wilayah.map((provinsi: any) => (
                      <option
                        key={provinsi.id}
                        value={provinsi.provinsi}
                        selected={formData.provinsi === provinsi.provinsi}
                      >
                        {provinsi.provinsi}
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
                  value={formData.kabupaten_kota}
                  onChange={handleChange} // Tambahkan onChange
                >
                  <option value="" disabled>
                    Pilih Kabupaten/Kota
                  </option>
                  {isLoading ? (
                    <option value="" disabled>
                      Loading...
                    </option>
                  ) : (
                    wilayah.map((kabupatenKota: any) => (
                      <>
                        {formData.provinsi == kabupatenKota.provinsi ? (
                          <option
                            key={kabupatenKota.id}
                            value={kabupatenKota.kabupaten_kota}
                          >
                            {kabupatenKota.kabupaten_kota}
                          </option>
                        ) : null}
                      </>
                    ))
                  )}
                </select>
              </div>
              <div className="flex flex-wrap content-end ">
                <label htmlFor="indeks" className="block mb-2 text-md  ">
                  Indeks Daya Hidup Bahasa
                </label>
                <input
                  required
                  type="number"
                  name="indeks"
                  id="indeks"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="0 hingga 1"
                  min="0"
                  max="1"
                  onChange={handleChange}
                  value={formData.indeks}
                />
              </div>
              <div className="flex flex-wrap content-end ">
                <label htmlFor="tahun" className="block mb-2 text-md  ">
                  Tahun Pengambilan Data
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
                  onChange={handleChange}
                  value={formData.tahun}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-rows-4 gap-4 ">
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
                  step="0.01"
                  max="1"
                  onChange={handleChange}
                  value={formData.pewarisan_antargenerasi}
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
                  onChange={handleChange}
                  value={formData.jumlah_dan_proporsi_penutur}
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
                  onChange={handleChange}
                  value={formData.ranah_penggunaan_bahasa}
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
                  onChange={handleChange}
                  value={formData.respons_terhadap_ranah_dan_media_baru}
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
                  onChange={handleChange}
                  value={formData.bahan_ajar_bahasa_dan_literasi}
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
                  onChange={handleChange}
                  value={formData.sikap_pemerintah_dan_regulasi}
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
                  onChange={handleChange}
                  value={formData.sikap_penutur}
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
                  onChange={handleChange}
                  value={formData.jenis_dan_kualitas_dokumentasi}
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
                  onChange={handleChange}
                  value={formData.kedwibahasaan}
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
                  onChange={handleChange}
                  value={formData.kontak_bahasa}
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

export function ModalHapus({
  closeModal,
  selectedIdVitalitas,
  selectedBahasa,
}: data) {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleHapus = async (e: any) => {
    setIsLoadingDelete(true);
    setError(null);

    const res = await fetch("/api/vitalitas", {
      method: "DELETE",

      body: JSON.stringify({
        vitalitasId: selectedIdVitalitas,
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
          <h2 className="text-2xl font-semibold mb-4">Hapus Bahasa Daerah</h2>
          <p className="text-gray-600 mb-6">
            Apakah Anda yakin ingin menghapus bahasa{" "}
            <span className="font-bold"> {selectedBahasa}</span>? Tindakan ini
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
