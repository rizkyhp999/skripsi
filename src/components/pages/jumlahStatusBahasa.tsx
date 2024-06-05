"use client";
import React, { useEffect, useState } from "react";
import Judul from "../atoms/text";
import JumlahStatus from "../organisms/jumlahStatus";
import Modal from "react-modal";
import ModalJumlahBahasa from "../organisms/modalJumlahBahasa";
import Image from "next/image";
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
export default function JumlahStatusBahasa() {
  const [vitalitas, setVitalitas] = useState<VitalitasData[]>([]); // Type the state

  const [aman, setAman] = useState(0);
  const [rentan, setRentan] = useState(0);
  const [mengalamiKemunduran, setMengalamiKemunduran] = useState(0);
  const [terancamPunah, setTerancamPunah] = useState(0);
  const [kritis, setKritis] = useState(0);

  const [modalType, setModalType] = useState<
    | "aman"
    | "rentan"
    | "mengalamiKemunduran"
    | "terancamPunah"
    | "kritis"
    | null
  >(null);
  const [status, setStatus] = useState("");

  const closeModal = () => {
    setModalType(null); // Atur modalType menjadi null saat ditutup
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/vitalitas");
        if (!res.ok) {
          throw new Error("Failed to fetch vitalitas data: " + res.status);
        }
        const data = await res.json();
        setVitalitas(data.data);

        data.data.forEach((item: any) => {
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
      } catch (err) {
        // setError(err.message);
      } finally {
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-primer pb-10">
        <div className="container mx-auto relative">
          <Judul classname="text-white relative z-20">
            Jumlah Status Daya Hidup Bahasa Daerah
          </Judul>
          <div className="relative z-20 flex flex-wrap justify-evenly items-center lg:px-[100px] mt-10">
            <div
              onClick={() => setModalType("aman")}
              className="cursor-pointer"
            >
              <JumlahStatus
                judul="Aman"
                jumlah={aman}
                deskripsi="Tidak terancam punah, bahasa ini diharapkan dipelajari oleh semua anak dan semua orang dalam etnik itu"
              ></JumlahStatus>
            </div>
            <div
              onClick={() => setModalType("rentan")}
              className="cursor-pointer"
            >
              <JumlahStatus
                judul="Rentan"
                jumlah={rentan}
                deskripsi="Semua anak-anak dan kaum tua menggunakan, tetapi jumlah penutur sedikit"
              ></JumlahStatus>
            </div>
            <div
              onClick={() => setModalType("mengalamiKemunduran")}
              className="cursor-pointer"
            >
              <JumlahStatus
                judul="Mengalami Kemunduran"
                jumlah={mengalamiKemunduran}
                deskripsi="Sebagian penutur anak-anak dan kaum tua, anak-anak lain tidak menggunakan"
              ></JumlahStatus>
            </div>
            <div
              onClick={() => setModalType("terancamPunah")}
              className="cursor-pointer"
            >
              <JumlahStatus
                judul="Terancam Punah"
                jumlah={terancamPunah}
                deskripsi="Semua penutur 20 tahun ke atas"
              ></JumlahStatus>
            </div>
            <div
              onClick={() => setModalType("kritis")}
              className="cursor-pointer"
            >
              <JumlahStatus
                judul="Kritis"
                jumlah={kritis}
                deskripsi="Penuturnya 40 tahun ke atas dan sangat kritis (critically endangered) penuturnya sedikit, berusia 70 tahun ke atas"
              ></JumlahStatus>
            </div>
          </div>

          <Image
            src={"/komponen/blob3.svg"}
            alt={"blob"}
            width={500}
            height={300}
            className="hidden sm:block absolute right-0 -bottom-10 z-0 "
          ></Image>
        </div>

        <Modal
          isOpen={modalType !== null} // Modal terbuka jika modalType bukan null
          onRequestClose={closeModal}
          contentLabel={`Modal ${modalType}`}
          overlayClassName="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          className="bg-white rounded-lg outline-none border-none max-w-5xl mx-5 max-h-[60vh] overflow-y-auto" // Improved styling and responsiveness
          ariaHideApp={false} // This is important for accessibility
        >
          {modalType === "aman" && (
            <ModalJumlahBahasa
              //Isi modal tambah
              closeModal={closeModal}
              status="aman"
            />
          )}
          {modalType === "rentan" && (
            <ModalJumlahBahasa
              //Isi modal tambah
              closeModal={closeModal}
              status="rentan"
            />
          )}
          {modalType === "mengalamiKemunduran" && (
            <ModalJumlahBahasa
              //Isi modal tambah
              closeModal={closeModal}
              status="mengalamiKemunduran"
            />
          )}
          {modalType === "terancamPunah" && (
            <ModalJumlahBahasa
              //Isi modal tambah
              closeModal={closeModal}
              status="terancamPunah"
            />
          )}
          {modalType === "kritis" && (
            <ModalJumlahBahasa
              //Isi modal tambah
              closeModal={closeModal}
              status="kritis"
            />
          )}
        </Modal>
      </div>
    </>
  );
}