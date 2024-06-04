"use client";

import React, { useEffect, useRef, useState } from "react";
import Judul from "../atoms/text";
import { BsCheckLg } from "react-icons/bs";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet"; // Pastikan Anda memiliki file ini

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

export default function Peta() {
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

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/vitalitas");
        if (!res.ok) {
          throw new Error("Failed to fetch vitalitas data: " + res.status);
        }
        const data = await res.json();
        setVitalitas(data.data);
      } catch (err) {
        // setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

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
  };

  const handleInputBlur = () => {
    setFilteredSuggestions([]);
  };
  const handleRemoveLanguage = (languageToRemove: VitalitasData) => {
    setSelectedLanguages(
      selectedLanguages.filter((lang) => lang !== languageToRemove)
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="py-10">
        <Judul classname="text-black">
          Peta Status Daya Hidup Bahasa Daerah
        </Judul>

        <div className="flex flex-wrap sm:flex-row justify-center items-center mt-10 relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Cari berdasarkan bahasa..."
            className="w-[300px] h-[60px] text-2xl text-center border rounded-xl border-black mr-5 lg:w-[450px] lg:h-[60px] focus:outline-none focus:ring-0"
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
        <div className="flex flex-wrap justify-center mt-5">
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
        </div>
        <div className="flex justify-center items-center lg:px-[100px]"></div>
      </div>
    </>
  );
}
