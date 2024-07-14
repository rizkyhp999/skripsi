"use client";

import React, { useEffect, useRef, useState } from "react";
import Judul from "../atoms/text";
import { BsCheckLg } from "react-icons/bs";
import InformasiStatus from "../organisms/informasiStatus";
import { AnimasiMuncul } from "../atoms/animasi";
import Link from "next/link";
import Image from "next/image";

export default function InformasiVitalitas(data: any) {
  const [vitalitas, setVitalitas] = useState<any>([]); // Type the state

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<any>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<any>([]);

  const [bahasa, setBahasa] = useState<string>("");
  const [indeks, setIndeks] = useState<number>();
  const [provinsi, setProvinsi] = useState<string>("");
  const [lokasiPengambilan, setLokasiPengambilan] = useState<string>("");
  const [tahun, setTahun] = useState<number>();

  useEffect(() => {
    setVitalitas(data?.data ?? []);
  }, [data]);

  useEffect(() => {
    const filtered = vitalitas.filter((item: any) =>
      item.bahasa?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSuggestions(searchQuery ? filtered : []);
  }, [searchQuery, vitalitas]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleSuggestionClick = (item: any) => {
    // Toggle selection
    if (selectedLanguages.includes(item)) {
      setSelectedLanguages(
        selectedLanguages.filter((lang: any) => lang !== item)
      );
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
  const handleRemoveLanguage = (languageToRemove: any) => {
    setSelectedLanguages(
      selectedLanguages.filter((lang: any) => lang !== languageToRemove)
    );
  };

  return (
    <>
      <div className="py-10">
        <AnimasiMuncul>
          <div className="flex items-center justify-center">
            <Judul classname="text-black">
              Informasi Status Daya Hidup Bahasa Daerah
            </Judul>
            <Link href="/metadata">
              <Image
                src={"/komponen/ikon/TandaTanyaHitam.svg"}
                className=""
                alt=" "
                width={20}
                height={20}
              ></Image>
            </Link>
          </div>
        </AnimasiMuncul>
        <AnimasiMuncul>
          <div className="flex flex-wrap sm:flex-row justify-center items-center mt-10 relative">
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
                {filteredSuggestions.slice(0, 5).map((item: any) => (
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
          {/* <div className="flex flex-wrap justify-center mt-5">
          {selectedLanguages.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-gray-200 rounded-full px-3 py-1 m-1"
            >
              <span>{item.bahasa}</span>
              <button
                onClick={() => handleRemoveLanguage(item)}
                className="ml-2 hover:text-red-500"
              >
                X
              </button>
            </div>
          ))}
        </div> */}

          <div className="flex flex-wrap justify-center items-center lg:px-[100px]">
            <InformasiStatus
              bahasa={bahasa}
              indeks={indeks}
              provinsi={provinsi}
              lokasiPengambilan={lokasiPengambilan}
              tahun={tahun}
            ></InformasiStatus>
          </div>
        </AnimasiMuncul>

        {/* <div className=" container mx-auto flex flex-wrap justify-center items-center ">
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
        </div> */}
      </div>
    </>
  );
}
