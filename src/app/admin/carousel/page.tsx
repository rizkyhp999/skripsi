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
  ModalEdit,
} from "@/components/organisms/modalAdmin/modalCarousel";
export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalType, setModalType] = useState<
    "tambah" | "edit" | "hapus" | null
  >(null);
  const [judul, setJudul] = useState("");
  const [carousel, setCarousel] = useState([]);
  const [carouselId, setCarouselId] = useState("");
  const [selectedCarouselId, setSelectedCarouselId] = useState("");
  const [selectedCarouselGambar, setSelectedCarouselGambar] = useState("");
  const [selectedCarouselJudul, setSelectedCarouselJudul] = useState("");

  const [selectedCarouselDeskripsi, setSelectedCarouselDeskripsi] =
    useState("");
  const closeModal = () => {
    setModalType(null); // Atur modalType menjadi null saat ditutup
  };
  const openModalTambah = () => {
    setModalType("tambah");
  };
  const openModalEdit = (
    selectedCarouselId: string,
    selectedCarouselGambar: string,
    selectedCarouselJudul: string,
    selectedCarouselDeskripsi: string
  ) => {
    setModalType("edit");
    setSelectedCarouselId(selectedCarouselId);
    setSelectedCarouselGambar(selectedCarouselGambar);

    setSelectedCarouselJudul(selectedCarouselJudul);
    setSelectedCarouselDeskripsi(selectedCarouselDeskripsi);
  };
  const openModalHapus = (carouselId: string, judul: string) => {
    setModalType("hapus");
    setCarouselId(carouselId);
    setJudul(judul);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/carousel");
        if (!res.ok) {
          throw new Error("Gagal mengambil data carousel");
        }
        const data = await res.json();
        setCarousel(data.data);
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
      <Admin judul="Carousel">
        <div className="flex items-center justify-end">
          <ButtonBiru onClick={openModalTambah} label="">
            Tambah
          </ButtonBiru>
        </div>
        <div className=" flex flex-col  justify-center items-start mx-10  ">
          {carousel.map((data: any) => (
            <div key={data.id} className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 border mt-10 hover:bg-gray-100 rounded ">
                <div className="relative aspect-[4/3] ">
                  {" "}
                  {/* Maintain aspect ratio */}
                  <Image
                    src={data.gambar}
                    alt={data.judul} // Use title for alt text
                    fill // Fill the container
                    className="object-cover rounded-md" // Cover image, add border-radius
                  />
                </div>

                <div className="flex flex-col mt-5">
                  <h1 className="text-xl md:text-2xl font-bold mb-2">
                    {data.judul}
                  </h1>
                  <p className="text-justify text-gray-700 text-sm md:text-base overflow-y-auto max-h-[10rem] md:max-h-[15rem]">
                    {data.deskripsi}
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-end ">
                <button onClick={() => openModalHapus(data.id, data.judul)}>
                  <Image
                    src={"/komponen/ikon/Hapus.svg"}
                    alt="Hapus"
                    width={30}
                    height={30}
                    className="m-2"
                  ></Image>
                </button>
                <button
                  onClick={() =>
                    openModalEdit(
                      data.id,
                      data.gambar,
                      data.judul,
                      data.deskripsi
                    )
                  }
                >
                  <Image
                    src={"/komponen/ikon/Edit.svg"}
                    alt="Edit"
                    width={30}
                    height={30}
                    className="m-2"
                  ></Image>
                </button>
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
        {modalType === "edit" && (
          <ModalEdit
            closeModal={closeModal}
            selectedCarouselId={selectedCarouselId}
            selectedCarouselGambar={selectedCarouselGambar}
            selectedCarouselJudul={selectedCarouselJudul}
            selectedCarouselDeskripsi={selectedCarouselDeskripsi}
          />
        )}
        {modalType === "hapus" && (
          <ModalHapus
            closeModal={closeModal}
            carouselId={carouselId}
            judul={judul}

            //Isi modal hapus
          />
        )}
      </Modal>
    </>
  );
}
