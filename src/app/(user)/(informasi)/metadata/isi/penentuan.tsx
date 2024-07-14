import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function penentuan() {
  return (
    <>
      <div className="container p-4 md:p-10 bg-white rounded-sm">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Penentuan Vitalitas Bahasa
        </h1>
        <p className="mb-4 text-justify text-sm md:text-base">
          Vitalitas bahasa dapat diketahui dari dua hal yang dihubungkan, yaitu
          hubungan semua subindeks indikator dengan kararakteristik responden
          sebagai penutur bahasa asli. Subindeks indikator meliputi (1) penutur,
          (2) kontak bahasa, (3) bilingualisme, (4) posisi dominan masyarakat
          penutur, (5) ranah penggunaan bahasa, (6) sikap bahasa, (7) regulasi,
          (8) pembelajaran, (9) dokumentasi, dan (10) tantangan baru.
        </p>

        <p className="mb-4 text-justify text-sm md:text-base">
          Hubungan subindeks indikator dengan kararakteristik responden
          divisualisasi dalam bentuk diagram jaring laba-laba (spider diagram)
          seperti bagan berikut.
        </p>
        <Image
          src="/informasi/penentuan1.png"
          alt=""
          width={600}
          height={300}
          className="mx-auto"
        ></Image>
        <p className="mb-4 text-justify text-sm md:text-base">
          Dalam diagram itu ditampilkan gambaran bobot subindeks indikator dalam
          bentuk grafik dua dimensi yang kemudian diinterpretasikan sesuai
          dengan kriteria vitalitas bahasa Grimes (2001) dengan kisaran 0—1
          seperti yang digambarkan dalam tabel berikut.
        </p>
        <Image
          src="/informasi/penentuan2.png"
          alt=""
          width={600}
          height={300}
          className="mx-auto"
        ></Image>
        <p className="mb-4 text-justify text-sm md:text-base">
          Dengan visualisasi indeks pada diagram jaring laba-laba yang
          disesuaikan dengan kriteria vitalitas bahasa pada tabel, vitalitas
          bahasa dapat ditafsirkan dengan ketentuan berikut.
        </p>
        <ul className="list-decimal ml-6 text-left">
          <li className="mt-1 text-justify text-sm md:text-base">
            Apabila bobot indeks terletak atau mendekati angka 1 pada garis
            kelima dari garis titik pusat diagram jaring laba-laba, vitalitas
            bahasa tergolong aman.
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Apabila bobot indeks terletak atau mendekati angka 0,8 atau 0,80
            pada garis keempat dari garis titik pusat diagram jaring laba-laba,
            vitalitas bahasa tergolong stabil (mantap), tetapi terancam punah.{" "}
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Apabila bobot indeks terletak atau mendekati angka 0,6 atau 060 pada
            garis ketiga dari garis titik pusat diagram jaring laba-laba,
            vitalitas bahasa tergolong mengalami kemunduran.{" "}
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Apabila bobot indeks terletak atau mendekati angka 0,4 atau 0,40
            pada garis kedua dari garis titik pusat diagram jaring laba-laba,
            vitalitas bahasa tergolong terancam.{" "}
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Apabila bobot indeks terletak atau mendekati angka 0,2 atau 0,20
            pada garis pertama dari garis titik pusat diagram jaring laba-laba,
            vitalitas bahasa tergolong sangat terancam dan kritis.{" "}
          </li>
        </ul>
        <br />
        <p className="mb-4 text-justify text-sm md:text-base">
          Sumber :{" "}
          <Link href="/pedoman" className="underline text-blue-700">
            Buku Pedoman konservasi dan revitalisasi bahasa
          </Link>
        </p>
      </div>
    </>
  );
}
