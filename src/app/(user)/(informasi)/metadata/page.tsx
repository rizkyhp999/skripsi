"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

// Dynamic import of components
const components: { component: ComponentType<any>; nama: string }[] = [
  {
    component: dynamic(() => import("./isi/deskripsi")),
    nama: "Deskripsi",
  },
  { component: dynamic(() => import("./isi/jenisData")), nama: "Jenis Data" },
  {
    component: dynamic(() => import("./isi/karakteristikResponden")),
    nama: "Karakteristik Responden",
  },
  {
    component: dynamic(() => import("./isi/sampel")),
    nama: "Populasi dan Sampel",
  },
  {
    component: dynamic(() => import("./isi/pengumpulan")),
    nama: " Pengumpulan Data ",
  },
  {
    component: dynamic(() => import("./isi/pengolahan")),
    nama: "Pengolahan Data ",
  },
  {
    component: dynamic(() => import("./isi/penentuan")),
    nama: "Penentuan Vitalitas Bahasa ",
  },

  // Tambahkan lebih banyak komponen jika diperlukan
];

const Page: React.FC = () => {
  const [contentIndex, setContentIndex] = useState<number>(0);

  return (
    <div className="flex flex-col md:flex-row p-5 md:px-[50px] md:py-[25px] lg:px-[100px] lg:py-[50px] bg-[#eeeeee]">
      <div className="flex flex-wrap pb-5 md:flex-col items-center justify-center md:justify-start  bg-[#eeeeee]">
        {components.map((item, index) => (
          <button
            key={index}
            className={`w-full md:w-40 h-12 m-1 md:mr-4  ${
              contentIndex === index ? "bg-primer text-white" : "bg-gray-300"
            }`}
            onClick={() => setContentIndex(index)}
          >
            {item.nama}
          </button>
        ))}
      </div>
      <div className="flex  justify-center bg-[#eeeeee]">
        {React.createElement(components[contentIndex].component, {
          nama: components[contentIndex].nama,
        })}
      </div>
    </div>
  );
};

export default Page;
