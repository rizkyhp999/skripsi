"use client";

import React from "react";
import Judul from "../atoms/text";
import GambarInfografik from "../molecules/gambar";

interface InfografikData {
  gambar: string[];
  altText: string;
}

export default function Infografik() {
  const infografikData: InfografikData[] = [
    {
      gambar: [
        "184_1645531041-1.png",
        "184_1645531041-2.png",
        "184_1645531041-3.png",
        "184_1645531041-4.png",
        "184_1645531041-5.png",
        "184_1645531041-6.png",
        "184_1645531041-7.png",
      ],
      altText: "Infografik pertama",
    },
    {
      gambar: [
        "783Leflet_Peta_Bahasa_2019-1.png",
        "783Leflet_Peta_Bahasa_2019-2.png",
        "783Leflet_Peta_Bahasa_2019-3.png",
        "783Leflet_Peta_Bahasa_2019-4.png",
      ], // Data infografik kedua
      altText: "Infografik kedua",
    },
    {
      gambar: [
        "INFOGRAFIK_MB17-01-01.png",
        "INFOGRAFIK_MB17-01-02.png",
        "INFOGRAFIK_MB17-01-03.png",
        "INFOGRAFIK_MB17-01-04.png",
        "INFOGRAFIK_MB17-01-05.png",
      ],
      altText: "Infografik ketigas",
    },
    // Tambahkan data infografik lainnya sesuai kebutuhan
  ];

  return (
    <div className="pt-10">
      <Judul classname="text-black">Infografik</Judul>
      <div className="flex flex-wrap items-center justify-evenly mb-10 ">
        {infografikData.map((data, index) => (
          <div className="pt-10" key={index}>
            <GambarInfografik gambar={data.gambar} altText={data.altText} />
          </div>
        ))}
      </div>
    </div>
  );
}
