"use client";
import React from "react";
import { useState } from "react";
import Admin from "@/components/templates/admin";
import GambarInfografik from "@/components/molecules/gambar";
import Image from "next/image";
import { ButtonBiru, ButtonMerah } from "@/components/molecules/button";
import Modal from "react-modal";
import {
  ModalTambah,
  ModalHapus,
} from "@/components/organisms/modalAdmin/modalInfografik";
interface InfografikData {
  gambar: string[];
  altText: string;
}
export default function Page() {
  const [modalType, setModalType] = useState<"tambah" | "hapus" | null>(null);
  const closeModal = () => {
    setModalType(null); // Atur modalType menjadi null saat ditutup
  };
  const openModalTambah = () => {
    setModalType("tambah");
  };
  const openModalHapus = () => {
    setModalType("hapus");
  };
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
    <>
      <Admin judul="Infografik">
        <div className="flex items-center justify-end">
          <ButtonBiru onClick={openModalTambah} label="">
            Tambah
          </ButtonBiru>
          <ButtonMerah onClick={openModalHapus} label={""}>
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
                <button onClick={openModalHapus}>
                  <Image
                    src={"/komponen/ikon/Hapus.svg"}
                    alt="Hapus"
                    width={30}
                    height={30}
                  ></Image>
                </button>

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
      <Modal
        isOpen={modalType !== null} // Modal terbuka jika modalType bukan null
        onRequestClose={closeModal}
        contentLabel={`Modal ${modalType}`}
        overlayClassName="flex justify-center items-center fixed inset-0 bg-black/50 z-50   "
        className="bg-transparent outline-none border-none"
      >
        {modalType === "tambah" && (
          <ModalTambah
          //Isi modal tambah
          />
        )}
        {modalType === "hapus" && (
          <ModalHapus
          //Isi modal hapus
          />
        )}
      </Modal>
    </>
  );
}
