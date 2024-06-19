"use client";
import React, { useEffect, useRef, useState } from "react";
import Judul from "../atoms/text";
import SpiderChart from "../organisms/spiderChart";
import { BsCheckLg } from "react-icons/bs";
import Image from "next/image";
import { AnimasiMuncul } from "../atoms/animasi";

interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}
export default function SubIndeks(data: any) {
  const [vitalitas, setVitalitas] = useState<any>([]); // Type the state
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<any>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<any>([]);
  const [indikator, setIndikator] = useState({
    indikator: [
      "Pewarisan Antargenerasi", // Label dibagi menjadi dua baris
      "Jumlah dan Proporsi Penutur",
      "Ranah Penggunaan Bahasa",
      "Respons terhadap Ranah dan Media Baru",
      "Bahan Ajar Bahasa dan Literasi",
      "Sikap Pemerintah dan Regulasi",
      "Sikap Penutur",
      "Jenis dan Kualitas Dokumentasi",
      "Kedwibahasaan", // Menggunakan tanda hubung untuk estetika
      "Kontak Bahasa",
    ],
  });
  const [chartData, setChartData] = useState({
    labels: [
      "Respons terhadap Ranah dan Media Baru",
      "Ranah Penggunaan Bahasa",
      // Label dibagi menjadi dua baris
      "Sikap Penutur",
      "Kedwibahasaan",
      "Bahan Ajar Bahasa dan Literasi",
      "Sikap Pemerintah dan Regulasi",

      "Jenis dan Kualitas Dokumentasi",

      "Pewarisan Antargenerasi",
      // Menggunakan tanda hubung untuk estetika
      "Kontak Bahasa",
      "Jumlah dan Proporsi Penutur",
    ],
    datasets: [] as ChartDataset[], // Initialize as empty array
  });

  useEffect(() => {
    setVitalitas(data?.data ?? []);
  }, [data]);
  // useEffect(() => {
  //   async function fetchData() {
  //     setIsLoading(true);
  //     setError(null);
  //     try {
  //       const res = await fetch("/api/vitalitas");
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch vitalitas data: " + res.status);
  //       }
  //       const data = await res.json();
  //       setVitalitas(data.data);
  //     } catch (err) {
  //       // setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);

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
  };
  useEffect(() => {
    // Update chart data whenever selectedLanguages changes
    setChartData({
      ...chartData,
      datasets: selectedLanguages.map((item: any) => ({
        label: item.bahasa,
        data: [
          item.pewarisan_antargenerasi,
          item.jumlah_dan_proporsi_penutur,
          item.ranah_penggunaan_bahasa,
          item.respons_terhadap_ranah_dan_media_baru,
          item.bahan_ajar_bahasa_dan_literasi,
          item.sikap_pemerintah_dan_regulasi,
          item.sikap_penutur,
          item.jenis_dan_kualitas_dokumentasi,
          item.kedwibahasaan,
          item.kontak_bahasa,
        ],
        backgroundColor: `rgba(${Math.random() * 255}, ${
          Math.random() * 255
        }, ${Math.random() * 255}, 0.2)`, // Random colors
        borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        }, 1)`,
        borderWidth: 1,
      })),
    });
  }, [selectedLanguages]);

  const handleInputBlur = () => {
    setFilteredSuggestions([]);
  };
  const handleRemoveLanguage = (languageToRemove: any) => {
    setSelectedLanguages(
      selectedLanguages.filter((lang: any) => lang !== languageToRemove)
    );
  };
  const [showChart, setShowChart] = useState(false); // Default menampilkan chart

  const toggleView = () => {
    setShowChart(!showChart);
  };
  return (
    <div className="bg-primer py-10">
      <div className="container mx-auto relative">
        <AnimasiMuncul>
          <Judul classname="text-white">
            Indeks Faktor Daya Hidup Bahasa Daerah
          </Judul>
        </AnimasiMuncul>
        <div className="flex flex-wrap sm:flex-row justify-center items-center mt-10 relative z-30">
          <AnimasiMuncul>
            <input
              ref={inputRef}
              type="text"
              placeholder="Cari berdasarkan bahasa..."
              className="w-[300px] h-[60px]  rounded-xl text-xl text-center  border-black  sm:mb-0 lg:w-[400px] lg:h-[60px]"
              value={searchQuery}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </AnimasiMuncul>
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
        </div>{" "}
        <AnimasiMuncul>
          <div className="flex justify-center items-center mt-5  relative z-10">
            <button
              onClick={toggleView}
              className={`px-4 py-2 rounded-l focus:outline-none ${
                showChart
                  ? "bg-white text-gray-700 shadow-md" // Active Radar Chart button
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200" // Inactive button
              }`}
            >
              Tabel
            </button>
            <button
              onClick={toggleView}
              className={`px-4 py-2 rounded-r focus:outline-none ${
                !showChart
                  ? "bg-white text-gray-700 shadow-md" // Active Table button
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200" // Inactive button
              }`}
            >
              Radar Chart
            </button>
          </div>
        </AnimasiMuncul>
        <div className="flex flex-wrap justify-center mt-5  relative z-10 ">
          {selectedLanguages.map((item: any) => (
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
        <AnimasiMuncul>
          <div className="container mx-auto flex  mb-10 justify-center items-center px-5  mt-5">
            <Image
              src={"/komponen/blob7.svg"}
              alt={"blob"}
              width={700}
              height={300}
              className="hidden sm:block absolute left-0  z-0 "
            ></Image>

            {showChart ? (
              <>
                <div className="flex flex-col relative z-10  items-center bg-white rounded-md shadow-md w-full h-full md:w-1/2 md:h-1/2">
                  {" "}
                  <SpiderChart
                    labels={chartData.labels}
                    datasets={chartData.datasets}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col relative z-10  items-center bg-white rounded-md shadow-md p-5 w-full h-full md:w-1/2 md:h-1/2 overflow-x-auto ">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-black">
                          No
                        </th>
                        <th scope="col" className="px-6 py-3 text-black">
                          Subindikator
                        </th>
                        {chartData.datasets.map((dataset, index) => (
                          <th
                            key={index}
                            scope="col"
                            className="px-6 py-3 text-black"
                          >
                            {dataset.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {chartData.labels.map((label, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className="bg-white border-b hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 text-black text-sm">
                            {rowIndex + 1}
                          </td>
                          <td className="px-6 py-4 text-black">{label}</td>
                          {chartData.datasets.map((dataset, colIndex) => (
                            <td key={colIndex} className="px-6 py-4 text-black">
                              {Number(dataset.data[rowIndex]).toFixed(2)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </AnimasiMuncul>
        <Image
          src={"/komponen/blob5.svg"}
          alt={"blob"}
          width={250}
          height={300}
          className="hidden sm:block absolute left-0 -top-10 z-0 "
        ></Image>
        <Image
          src={"/komponen/blob6.svg"}
          alt={"blob"}
          width={300}
          height={300}
          className="hidden sm:block absolute right-0 -bottom-10 z-0 "
        ></Image>
      </div>

      {/* Tampilkan hasil filter */}
    </div>
  );
}
