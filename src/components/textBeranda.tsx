import React from "react";

export default function textBeranda() {
  return (
    <div className="  ">
      <div className="container mx-auto w-auto h-auto px-12 z-10 ">
        <h1 className="text-white text-lg text-justify font-bold ">
          Menurut UNESCO dalam{" "}
          <span className="text-sekunder">30 tahun terakhir</span>, 200 bahasa
          daerah di dunia <span className="text-sekunder">punah</span>. Di
          Indonesia terdapat{" "}
          <span className="text-sekunder">718 bahasa daerah.</span> Namun,
          banyak kondisinya terancam{" "}
          <span className="text-sekunder">punah</span> dan{" "}
          <span className="text-sekunder">kritis</span>.
        </h1>
        <h1 className="text-white text-lg text-justify font-bold  ">
          Penyebab bahasa daerah <span className="text-sekunder">punah </span>
          adalah penutur jati yang tak lagi menggunakan dan mewariskan bahasanya
          ke generasi berikutnya.
        </h1>
      </div>
      <div className="mx-auto w-auto h-auto px-12 md:hidden ">
        <img src="bubblechatsm.svg" alt="" className=" " />
      </div>
      <div className="mx-auto w-auto h-auto hidden md:block ">
        <img src="bubblechatlg.svg" alt="" className=" " />
      </div>
    </div>
  );
}
