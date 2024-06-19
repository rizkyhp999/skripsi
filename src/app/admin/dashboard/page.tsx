"use client";
import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import JumlahStatusBahasa from "@/components/pages/jumlahStatusBahasa";
import JumlahStatus from "@/components/organisms/jumlahStatus";
import { BsCheckLg } from "react-icons/bs";

import InformasiStatus from "@/components/organisms/informasiStatus";
import useSWR from "swr";
async function fetcher(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}
interface VitalitasData {
  id: string;
  bahasa: string;

  provinsi: string;
  kabupaten_kota: string;
  indeks: number;
  tahun: number;
  pewarisan_antargenerasi: number;
  jumlah_dan_proporsi_penutur: number;
  ranah_penggunaan_bahasa: number;
  respons_terhadap_ranah_dan_media_baru: number;
  bahan_ajar_bahasa_dan_literasi: number;
  sikap_pemerintah_dan_regulasi: number;
  sikap_penutur: number;
  jenis_dan_kualitas_dokumentasi: number;
  kedwibahasaan: number;
  kontak_bahasa: number;
  // ...other properties
}
export default function Page() {
  const [vitalitas, setVitalitas] = useState<VitalitasData[]>([]); // Type the state
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    VitalitasData[]
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<VitalitasData[]>(
    []
  );
  const [aman, setAman] = useState(0);
  const [rentan, setRentan] = useState(0);
  const [mengalamiKemunduran, setMengalamiKemunduran] = useState(0);
  const [terancamPunah, setTerancamPunah] = useState(0);
  const [kritis, setKritis] = useState(0);

  const [bahasa, setBahasa] = useState<string>("");
  const [indeks, setIndeks] = useState<number>();
  const [provinsi, setProvinsi] = useState<string>("");
  const [lokasiPengambilan, setLokasiPengambilan] = useState<string>("");
  const [tahun, setTahun] = useState<number>();

  const {
    data: vitalitasData,
    error: vitalitasError,
    isLoading: vitalitasLoading,
  } = useSWR("/api/vitalitas", fetcher);

  useEffect(() => {
    setVitalitas(vitalitasData ?? []);
    setAman(0);
    setRentan(0);
    setMengalamiKemunduran(0);
    setTerancamPunah(0);
    setKritis(0);
    vitalitas.forEach((item: any) => {
      if (item.indeks > 0.8 && item.indeks <= 1) {
        setAman((prev) => prev + 1);
      } else if (item.indeks > 0.6 && item.indeks <= 0.8) {
        setRentan((prev) => prev + 1);
      } else if (item.indeks > 0.4 && item.indeks <= 0.6) {
        setMengalamiKemunduran((prev) => prev + 1);
      } else if (item.indeks > 0.2 && item.indeks <= 0.4) {
        setTerancamPunah((prev) => prev + 1);
      } else if (item.indeks > 0 && item.indeks <= 0.2) {
        setKritis((prev) => prev + 1);
      }
    });
  }, [vitalitasData]);

  // useEffect(() => {
  //   let isMounted = true;
  //   async function fetchData() {
  //     try {
  //       const res = await fetch("/api/vitalitas");
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch vitalitas data: " + res.status);
  //       }
  //       const data = await res.json();
  //       setVitalitas(data.data);

  //       data.data.forEach((item: any) => {
  //         if (item.indeks > 0.8 && item.indeks <= 1) {
  //           setAman((prev) => prev + 1);
  //         } else if (item.indeks > 0.6 && item.indeks <= 0.8) {
  //           setRentan((prev) => prev + 1);
  //         } else if (item.indeks > 0.4 && item.indeks <= 0.6) {
  //           setMengalamiKemunduran((prev) => prev + 1);
  //         } else if (item.indeks > 0.2 && item.indeks <= 0.4) {
  //           setTerancamPunah((prev) => prev + 1);
  //         } else if (item.indeks > 0 && item.indeks <= 0.2) {
  //           setKritis((prev) => prev + 1);
  //         }
  //       });
  //     } catch (err) {
  //       // setError(err.message);
  //     } finally {
  //     }
  //   }

  //   fetchData();
  // }, []);

  useEffect(() => {
    const filtered = vitalitas.filter((item) =>
      item.bahasa?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSuggestions(searchQuery ? filtered : []);
  }, [searchQuery, vitalitas]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleSuggestionClick = (item: VitalitasData) => {
    // Toggle selection
    if (selectedLanguages.includes(item)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== item));
    } else {
      setSelectedLanguages([...selectedLanguages, item]);
    }
    setSearchQuery(item.bahasa);
    setBahasa(item.bahasa);
    setIndeks(item.indeks);
    setProvinsi(item.provinsi);
    setLokasiPengambilan(item.kabupaten_kota);
    setTahun(item.tahun);
  };

  const handleInputBlur = () => {
    setFilteredSuggestions([]);
  };
  const handleRemoveLanguage = (languageToRemove: VitalitasData) => {
    setSelectedLanguages(
      selectedLanguages.filter((lang) => lang !== languageToRemove)
    );
  };

  return (
    <div className="flex flex-wrap m-5  justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center items-center lg:px-[100px]">
          <InformasiStatus
            bahasa={bahasa}
            indeks={indeks}
            provinsi={provinsi}
            lokasiPengambilan={lokasiPengambilan}
            tahun={tahun}
          ></InformasiStatus>
        </div>
        <div className="flex flex-wrap sm:flex-row justify-center items-center mt-5 relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Cari berdasarkan bahasa..."
            className="w-[300px] h-[60px]  rounded-xl text-xl text-center border border-gray-900  sm:mb-0 lg:w-[400px] lg:h-[60px]"
            value={searchQuery}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {searchQuery && filteredSuggestions.length > 0 && (
            <ul className="absolute top-full text-xl z-10 w-[300px] lg:w-[400px] bg-white border rounded shadow-md max-h-[200px] overflow-y-auto">
              {filteredSuggestions.slice(0, 5).map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer p-2 flex items-center hover:bg-gray-100 ${
                    selectedLanguages.includes(item) ? "bg-gray-200" : ""
                  }`}
                  onMouseDown={() => handleSuggestionClick(item)}
                >
                  <span className="mr-2">
                    {selectedLanguages.includes(item) && <BsCheckLg />}
                  </span>
                  {item.bahasa}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-10">
        <JumlahStatus
          judul="Jumlah Bahasa Daerah"
          jumlah={aman + rentan + mengalamiKemunduran + terancamPunah + kritis}
        ></JumlahStatus>

        <JumlahStatus
          judul="Aman"
          jumlah={aman}
          deskripsi="Tidak terancam punah, bahasa ini diharapkan dipelajari oleh semua anak dan semua orang dalam etnik itu"
        ></JumlahStatus>

        <JumlahStatus
          judul="Rentan"
          jumlah={rentan}
          deskripsi="Semua anak-anak dan kaum tua menggunakan, tetapi jumlah penutur sedikit"
        ></JumlahStatus>

        <JumlahStatus
          judul="Mengalami Kemunduran"
          jumlah={mengalamiKemunduran}
          deskripsi="Sebagian penutur anak-anak dan kaum tua, anak-anak lain tidak menggunakan"
        ></JumlahStatus>

        <JumlahStatus
          judul="Terancam Punah"
          jumlah={terancamPunah}
          deskripsi="Semua penutur 20 tahun ke atas"
        ></JumlahStatus>

        <JumlahStatus
          judul="Kritis"
          jumlah={kritis}
          deskripsi="Penuturnya 40 tahun ke atas dan sangat kritis (critically endangered) penuturnya sedikit, berusia 70 tahun ke atas"
        ></JumlahStatus>
      </div>
    </div>
  );
}
