"use client";
import React from "react";
import useSWR from "swr";

import Carousel from "@/components/pages/carousel";
import TextBeranda from "@/components/pages/textBeranda";
import Peta from "@/components/pages/peta";
import InformasiVitalitas from "@/components/pages/informasiVitalitas";
import SubIndeks from "@/components/pages/subIndeks";
import Infografik from "@/components/pages/infografik";
import JumlahStatusBahasa from "@/components/pages/jumlahStatusBahasa";
import LoadingSkeleton from "@/components/molecules/loading";
async function fetcher(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}

export default function Page() {
  const {
    data: carouselData,
    error: carouselError,
    isLoading: carouselLoading,
  } = useSWR("/api/carousel", fetcher);
  const {
    data: vitalitasData,
    error: vitalitasError,
    isLoading: vitalitasLoading,
  } = useSWR("/api/vitalitas", fetcher);

  const {
    data: infografikData,
    error: infografikError,
    isLoading: infografikLoading,
  } = useSWR("/api/infografik", fetcher);

  // if (error) return <div>Gagal memuat data: {error.message}</div>;
  // if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {vitalitasLoading && <LoadingSkeleton />}

      <Carousel data={carouselData}></Carousel>
      <TextBeranda></TextBeranda>
      <JumlahStatusBahasa data={vitalitasData}></JumlahStatusBahasa>
      <InformasiVitalitas data={vitalitasData}></InformasiVitalitas>
      <SubIndeks data={vitalitasData}></SubIndeks>
      <Infografik data={infografikData}></Infografik>
      <h1 className=" container mx-auto text-center text-md mt-10 lg:text-xl mb-10 lg:mt-20 px-5 lg:px-[100px]">
        “Bahasa daerah adalah salah satu wujud kekayaan dari kebinekaan
        Indonesia.{" "}
        <span className="text-primer font-bold">
          {" "}
          Mari kita lestarikan bahasa daerah
        </span>{" "}
        dengan cara mengembangkannya agar tetap adaptif terhadap perubahan zaman
        dan terus menjadi ciri dari keindonesiaan kita”
      </h1>
    </>
  );
}
//aaa
