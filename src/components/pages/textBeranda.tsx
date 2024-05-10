import React from "react";
import { AnimasiMuncul } from "../atoms/animasi";
export default function textBeranda() {
  return (
    <div className="bg-primer">
      <div className="container mx-auto w-auto h-auto px-5 z-10 lg:px-[100px]">
        <AnimasiMuncul>
          <h1 className="text-white text-2xl text-justify font-bold sm:font-semibold lg:text-4xl ">
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
        <br />
        <AnimasiMuncul>
          <h1 className="text-white text-2xl text-justify font-bold sm:font-semibold lg:text-4xl">
            Penyebab bahasa daerah <span className="text-sekunder">punah </span>
            adalah penutur jati yang tak lagi menggunakan dan mewariskan
            bahasanya ke generasi berikutnya.
          </h1>
        </AnimasiMuncul>
      </div>
      <br />
      <AnimasiMuncul>
        <div className="mx-auto w-auto h-auto px-5 sm:hidden  ">
          <img src="bubblechatsm.svg" alt="" className=" " />
        </div>
      </AnimasiMuncul>
      <AnimasiMuncul>
        <div className="mx-auto w-auto h-auto hidden sm:block sm:px-[100px] lg:px-[100px]">
          <img src="bubblechatlg.svg" alt="" className=" " />
        </div>
      </AnimasiMuncul>

      <br />
    </div>
  );
}
