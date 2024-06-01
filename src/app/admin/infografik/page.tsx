"use client";
import React, { useEffect } from "react";
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
  judul: string;
}
export default function Page() {
  const [infografik, setInfografik] = useState<InfografikData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalType, setModalType] = useState<"tambah" | "hapus" | null>(null);
  const [judul, setJudul] = useState("");
  const [infografikId, setInfografikId] = useState("");
  const closeModal = () => {
    setModalType(null); // Atur modalType menjadi null saat ditutup
  };
  const openModalTambah = () => {
    setModalType("tambah");
  };
  const openModalHapus = (judul: string, infografikId: string) => {
    setModalType("hapus");
    setJudul(judul);
    setInfografikId(infografikId);
  };

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

    fetchData(); // Panggil fungsi fetchData sekali saat komponen dimuat
  }, []);

  return (
    <>
      <Admin judul="Infografik">
        <div className="flex items-center justify-end">
          <ButtonBiru onClick={openModalTambah} label="">
            Tambah
          </ButtonBiru>
        </div>
        <div className="flex flex-wrap justify-evenly items-center">
          {infografik.map((data: any) => (
            <div
              className="flex flex-col justify-center items-center pt-10"
              key={data.id}
            >
              <GambarInfografik
                gambar={data.gambar}
                judul={data.judul}
              ></GambarInfografik>
              <div className="container flex flex-row justify-evenly mt-5 ">
                <button onClick={() => openModalHapus(data.judul, data.id)}>
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
            closeModal={closeModal}
          />
        )}
        {modalType === "hapus" && (
          <ModalHapus
            closeModal={closeModal}
            judul={judul}
            infografikId={infografikId}
            //Isi modal hapus
          />
        )}
      </Modal>
    </>
  );
}
