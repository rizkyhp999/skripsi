import React from "react";
import Image from "next/image";

export default function carousel() {
  return (
    <>
      <div className=" flex flex-row item-center justify-center bg-primer lg:pt-10  ">
        <div className="relative lg:left-10 my-10 lg:my-20 mx-5 flex flex-col  justify-center p-5  bg-white rounded-lg shadow-md z-20  max-w-xl max-h-xl">
          {" "}
          <h1 className="text-left text-2xl font-bold mb-3">
            Daya Hidup Bahasa
          </h1>
          <p className="text-justify text-md lg:text-md lg:mx-5">
            Daya hidup suatu bahasa merujuk pada intensitas penggunaan dan
            eksistensi sebuah bahasa sebagai alat komunikasi dalam berbagai
            konteks sosial untuk tujuan tertentu. Suatu bahasa dapat dikatakan
            memiliki vitalitas yang tinggi apabila penutur bahasa tersebut
            berjumlah banyak dan variasi bahasa tersebut digunakan secara luas.
            Saat ini terdapat XX bahasa berstatus aman, XX bahasa berstatus
            rentan, XX bahasa berstatus mengalami kemunduran, XX bahasa
            berstatus terancam punah, XX bahasa berstatus kritis dan XX bahasa
            berstatus punah
          </p>
        </div>

        <Image
          src="/carousel/1.png"
          alt=""
          width={500}
          height={300}
          className="relative hidden lg:block blur-sm sm:blur-none max-w-xl rounded-lg shadow-md z-10 lg:right-10 "
        />
      </div>
    </>
  );
}
