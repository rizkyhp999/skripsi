"use strict";
import React, { useEffect, useState } from "react";
import { AnimasiMuncul } from "../atoms/animasi";
import JumlahStatus from "../organisms/jumlahStatus";
import Judul from "../atoms/text";
import Image from "next/image";

export default function TextBeranda() {
  return (
    <div className="bg-primer pt-10">
      <div className="relative flex flex-col container mx-auto px-5 lg:px-[100px] ">
        <AnimasiMuncul>
          <h1 className="text-white text-2xl text-justify font-bold mt-5 sm:font-semibold lg:text-3xl lg:mt-[50px] relative z-20">
            Menurut UNESCO dalam{" "}
            <span className="text-sekunder">30 tahun terakhir</span>,
            <span className="text-sekunder"> 200 bahasa daerah</span> di dunia
            <span className="text-sekunder"> punah</span>. Di Indonesia terdapat{" "}
            <span className="text-sekunder">718 bahasa daerah.</span> Namun,
            banyak kondisinya terancam{" "}
            <span className="text-sekunder">punah</span> dan{" "}
            <span className="text-sekunder">kritis</span>.
          </h1>
        </AnimasiMuncul>
        <br />
        <AnimasiMuncul>
          <h1 className="text-white text-2xl text-justify font-bold sm:font-semibold lg:text-3xl ">
            Penyebab bahasa daerah <span className="text-sekunder">punah </span>
            adalah penutur jati yang tak lagi menggunakan dan mewariskan
            bahasanya ke generasi berikutnya.
          </h1>
        </AnimasiMuncul>
      </div>
      <br />
      <AnimasiMuncul>
        <div className="container mx-auto w-auto h-auto px-5 sm:hidden  ">
          <Image
            src={"bubblechatsm.svg"}
            alt=""
            width={590}
            height={300}
            className=""
            loading="eager"
          ></Image>
        </div>
      </AnimasiMuncul>
      <AnimasiMuncul>
        <div className="container mx-auto w-auto h-auto hidden sm:block sm:px-[150px] lg:px-[150px]">
          <Image
            src={"bubblechatlg.svg"}
            alt=""
            width={1230}
            height={300}
            className=""
            loading="lazy"
          ></Image>
        </div>
      </AnimasiMuncul>

      <br />
    </div>
  );
}
