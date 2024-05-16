import React from "react";
import Image from "next/image";

export default function carousel() {
  return (
    <>
      <div className=" flex flex-row item-center justify-center bg-primer lg:pt-10  ">
        <div className="relative lg:left-10 my-10 lg:my-20 mx-10 flex flex-col items-center justify-center p-4  bg-white rounded-lg shadow-md z-20  max-w-xl max-h-xl">
          {" "}
          <h1 className="">Daya Hidup Bahasa</h1>
          <p className="">
            Daya hidup suatu bahasa merujuk pada intensitas penggunaan dan
            eksistensi sebuah bahasa sebagai alat komunikasi dalam berbagai
            konteks sosial untuk tujuan tertentu.Suatu bahasa dapat dikatakan
            memiliki vitalitas yang tinggi apabila penutur bahasa tersebut
            berjumlah banyak dan variasi bahasa tersebut digunakan secara luas.
            Saat ini terdapat XX bahasa berstatus aman, XX bahasa berstatus
            rentan, XX bahasa berstatus mengalami kemunduran, XX bahasa
            berstatus terancam punah, XX bahasa berstatus kritis dan XX bahasa
            berstatus punah
          </p>
        </div>

        <div className="relative right-10 z-10">
          <Image
            src="/carousel/1.png"
            alt=""
            width={450}
            height={300}
            className="hidden lg:block max-w-xl rounded-lg shadow-md  "
          />
        </div>
      </div>
    </>
  );
}
