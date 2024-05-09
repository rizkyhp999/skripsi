"use client";
import React from "react";
import { animate, motion, px, useAnimation, useInView } from "framer-motion";
import { AnimasiMuncul } from "@/components/animasi";
export default function TextBeranda() {
  return (
    <div className=" bg-primer">
      <div className="container mx-auto w-auto h-auto  ">
        {/* <AnimasiMuncul> */}
        <h1 className="text-white text-lg text-justify font-bold mx-5 lg:mx-20 mt-8 md:text-3xl lg:text-4xl 2xl:text-5xl lg:mt-10 xl:mt-20">
          Menurut UNESCO.aa dalam{" "}
          <span className="text-sekunder">30 tahun terakhir</span>, 200 bahasa
          daerah di dunia <span className="text-sekunder">punah</span>. Di
          Indonesia terdapat{" "}
          <span className="text-sekunder">718 bahasa daerah.</span> Namun,
          banyak kondisinya terancam{" "}
          <span className="text-sekunder">punah</span> dan{" "}
          <span className="text-sekunder">kritis</span>.
        </h1>
        {/* </AnimasiMuncul> */}

        {/* <AnimasiMuncul> */}
        <h1 className="text-white text-lg text-justify font-bold mx-5 lg:mx-20 mt-8 md:text-3xl lg:text-4xl 2xl:text-5xl ">
          Penyebab bahasa daerah <span className="text-sekunder">punah </span>
          adalah penutur jati yang tak lagi menggunakan dan mewariskan bahasanya
          ke generasi berikutnya.
        </h1>
        {/* </AnimasiMuncul> */}
        <div className="mx-auto">
          {/* <AnimasiMuncul> */}
          <img
            src="bubblechatsm.svg"
            alt=""
            className="px-5 md:hidden w-auto h-auto  "
          />
          {/* </AnimasiMuncul> */}
        </div>
        {/* <AnimasiMuncul> */}
        <img
          src="bubblechatlg.svg"
          alt=""
          className="px-10 mt-10 hidden md:block mb-10 w-auto h-auto "
        />
        {/* </AnimasiMuncul> */}
      </div>
    </div>
  );
}
