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
            <span className="text-white hover:bg-sekunder hover:text-primer">
              Menurut
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              UNESCO
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              dalam
            </span>{" "}
            <span className="text-sekunder hover:bg-sekunder hover:text-primer">
              30
            </span>{" "}
            <span className="text-sekunder hover:bg-sekunder hover:text-primer">
              tahun
            </span>{" "}
            <span className="text-sekunder hover:bg-sekunder hover:text-primer">
              terakhir,
            </span>{" "}
            <span className="text-sekunder hover:bg-sekunder hover:text-primer">
              {" "}
              200
            </span>{" "}
            <span className="text-sekunder hover:bg-sekunder hover:text-primer">
              {" "}
              bahasa
            </span>{" "}
            <span className="text-sekunder hover:bg-sekunder hover:text-primer">
              {" "}
              daerah
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              di
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              dunia
            </span>{" "}
            <span className="text-sekunder font-bold hover:bg-sekunder hover:text-primer">
              {" "}
              PUNAH.
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              Di
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              Indonesia
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              terdapat
            </span>{" "}
            <span className="text-sekunder hover:bg-sekunder hover:text-primer">
              {" "}
              718
            </span>{" "}
            <span className="text-sekunder hover:bg-sekunder hover:text-primer">
              {" "}
              bahasa
            </span>{" "}
            <span className="text-sekunder hover:bg-sekunder hover:text-primer">
              {" "}
              daerah.
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              Namun,
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              banyak
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              kondisinya
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              terancam
            </span>{" "}
            <span className="text-sekunder font-bold hover:bg-sekunder hover:text-primer">
              {" "}
              PUNAH
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              dan
            </span>{" "}
            <span className="text-sekunder font-bold hover:bg-sekunder hover:text-primer">
              KRITIS.
            </span>{" "}
          </h1>
        </AnimasiMuncul>
        <br />
        <AnimasiMuncul>
          <h1 className="text-white text-2xl text-justify font-bold sm:font-semibold lg:text-3xl ">
            <span className="text-white hover:bg-sekunder hover:text-primer">
              Penyebab
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              bahasa
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              daerah
            </span>{" "}
            <span className="text-sekunder font-bold hover:bg-sekunder hover:text-primer">
              {" "}
              PUNAH
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              adalah
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              penutur
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              jati
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              yang
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              tak
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              lagi
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              menggunakan
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              dan
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              mewariskan
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              bahasanya
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              ke
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              generasi
            </span>{" "}
            <span className="text-white hover:bg-sekunder hover:text-primer">
              berikutnya
            </span>{" "}
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
