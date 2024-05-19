"use client";
import React from "react";
import Admin from "@/components/templates/admin";
import GambarInfografik from "@/components/molecules/gambar";
import Image from "next/image";
import { ButtonBiru, ButtonMerah } from "@/components/molecules/button";
interface InfografikData {
  gambar: string[];
  altText: string;
}
export default function page() {
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
    <Admin judul="Infografik">
      <div className="flex items-center justify-end">
        <ButtonBiru onClick={() => {}} label="">
          Tambah
        </ButtonBiru>
        <ButtonMerah onClick={() => {}} label={""}>
          Hapus
        </ButtonMerah>
      </div>
      <div className="flex flex-wrap justify-evenly items-center">
        {infografikData.map((data, index) => (
          <div
            className="flex flex-col justify-center items-center pt-10"
            key={index}
          >
            <GambarInfografik
              gambar={data.gambar}
              altText={data.altText}
            ></GambarInfografik>
            <div className="container flex flex-row justify-evenly mt-5 ">
              <Image
                src={"/komponen/ikon/Hapus.svg"}
                alt="Hapus"
                width={30}
                height={30}
              ></Image>
              <Image
                src={"/komponen/ikon/Edit.svg"}
                alt="Hapus"
                width={30}
                height={30}
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </Admin>
  );
}
