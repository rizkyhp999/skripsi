import React from "react";
import Carousel from "@/components/pages/carousel";
import TextBeranda from "@/components/pages/textBeranda";
import Peta from "@/components/pages/peta";
import InformasiVitalitas from "@/components/pages/informasiVitalitas";
import SubIndeks from "@/components/pages/subIndeks";
import Infografik from "@/components/pages/infografik";
import JumlahStatusBahasa from "@/components/pages/jumlahStatusBahasa";
export default function page() {
  return (
    <>
      <Carousel></Carousel>
      <TextBeranda></TextBeranda>
      <JumlahStatusBahasa></JumlahStatusBahasa>
      {/* <Peta></Peta> */}
      <InformasiVitalitas></InformasiVitalitas>
      <SubIndeks></SubIndeks>
      <Infografik></Infografik>
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
