"use client";
import React from "react";
import { animate, motion, useAnimation, useInView } from "framer-motion";
import { Animasi } from "@/components/animasi/animasi";
export default function textBeranda() {
  return (
    <div className=" bg-primer relative block overflow-hidden ">
      <div className="container mx-auto">
        {/* <div className=" absolute -top-[100px] right-0  aspect-w-1">
        <img src="blob1.png" alt="" className="w-1/3 " />
      </div> */}
        {/* <img src="blob1.png" alt="" className=" w-1/3 absolute -top-[100px]" /> */}
        {/* <img src="blob2.svg" alt=" " className="absolute w-1/5  " />
      <img src="blob3.svg" alt="" className="absolute w-1/3 " /> */}
        <Animasi>
          <h1 className="text-white text-lg text-justify font-bold mx-5 mt-8 md:text-2xl lg:text-4xl md:px-[20px] lg:px-[50px] md:mt-[25px] lg:pt-[100px]">
            Menurut UNESCO dalam{" "}
            <span className="text-sekunder">30 tahun terakhir</span>, 200 bahasa
            daerah di dunia <span className="text-sekunder">punah</span>. Di
            Indonesia terdapat{" "}
            <span className="text-sekunder">718 bahasa daerah.</span> Namun,
            banyak kondisinya terancam{" "}
            <span className="text-sekunder">punah</span> dan{" "}
            <span className="text-sekunder">kritis</span>.
          </h1>
        </Animasi>
        <br />
        <Animasi>
          <h1 className="text-white text-lg text-justify font-bold mx-5 md:text-2xl lg:text-4xl md:px-[20px] lg:px-[50px]">
            Penyebab bahasa daerah <span className="text-sekunder">punah </span>
            adalah penutur jati yang tak lagi menggunakan dan mewariskan
            bahasanya ke generasi berikutnya.
          </h1>
        </Animasi>
        <Animasi>
          <img
            src="bubblechatsm.svg"
            alt=""
            className="mx-auto w-3/4 md:hidden"
          />
        </Animasi>
        <Animasi>
          <img
            src="bubblechatlg.svg"
            alt=""
            className="mx-auto w-11/12 mt-10 hidden md:block mb-10"
          />
        </Animasi>
      </div>
    </div>
  );
}
