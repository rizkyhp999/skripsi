"use client";

import React, { useEffect, useState } from "react";
import Judul from "../atoms/text";
import GambarInfografik from "../molecules/gambar";

interface InfografikData {
  gambar: string[];
  altText: string;
  judul: string;
  id: number;
}

export default function Infografik() {
  const [infografik, setInfografik] = useState<InfografikData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ukuran, setUkuran] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/infografik");
        if (!res.ok) {
          throw new Error("Gagal mengambil data infografik");
        }
        const data = await res.json();
        setInfografik(data.data);
      } catch (err) {
        // setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % infografik.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 3;
      return newIndex < 0 ? infografik.length + newIndex : newIndex;
    });
  };

  const visibleInfografik = infografik
    .slice(currentIndex)
    .concat(infografik.slice(0, currentIndex))
    .slice(0, 3);

  return (
    <div className="container mx-auto pt-10">
      <Judul classname="text-black">Infografik</Judul>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap items-center justify-evenly mb-10 ">
          <button onClick={handlePrev} className="text-5xl">
            {"<"}
          </button>
          {visibleInfografik.slice(ukuran).map((data) => (
            <div
              className="flex flex-col justify-center items-center pt-10"
              key={data.id}
            >
              <GambarInfografik gambar={data.gambar} judul={data.judul} />
            </div>
          ))}

          <button onClick={handleNext} className="text-5xl">
            {">"}
          </button>
        </div>
      )}
    </div>
  );
}
