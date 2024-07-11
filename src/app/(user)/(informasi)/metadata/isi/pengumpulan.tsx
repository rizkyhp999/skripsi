import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function pengumpulan() {
  return (
    <>
      <div className="container p-4 md:p-10 bg-white rounded-sm">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Pengumpulan Data dan Instrumen Kajian
        </h1>
        <p className="mb-4 text-justify text-sm md:text-base">
          Dalam kajian vitalitas bahasa, teknik pengumpulan data menyangkut
          bagaimana cara mengumpulkan data, siapa sumbernya, dan alat atau
          instrumen yang digunakan. Untuk mengumpulkan data dalam kajian ini
          digunakan teknik angket (kuesioner), observasi, dan wawancara. Teknik
          angket diterapkan untuk memperoleh data mengenai situasi kebahasaan
          dengan menggunakan angket tertutup, yaitu angket yang telah disediakan
          pilihan jawabannya. Bentuk angket yang digunakan adalah angket
          berjenjang dengan dua jawaban, yaitu ya dan tidak
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Instrumen yang berupa kuesioner itu digunakan untuk menjaring data
          vitalitas bahasa melalui jawaban para responden. Materi kuesioner
          mengandung data pribadi responden untuk mengetahui data informan yang
          meliputi jenis kelamin, umur, status perkawinan, jenis pekerjaan
          kerja, tingkat pendidikan, dan waktu berdomisili. Selain itu, terdapat
          beberapa variabel dan indikator kajian, seperti diperlihatkan pada
          kisi-kisi instrumen pada Tabel berikut.
        </p>
        <Image
          src="/informasi/pengumpulan1.png"
          alt=""
          width={600}
          height={300}
          className="mx-auto"
        ></Image>{" "}
        <Image
          src="/informasi/pengumpulan2.png"
          alt=""
          width={600}
          height={300}
          className="mx-auto"
        ></Image>{" "}
        <p className="mb-4 text-justify text-sm md:text-base">
          Alternatif-alternatif jawaban yang ada dalam kuesioner merujuk pada
          skala Guttman. Skala pengukuran dengan skala Guttman akan didapat
          jawaban yang tegas, yaitu ya atau tidak untuk mengukut mengukur sikap,
          pendapat, atau persepsi seseorang atau sekelompok orang tentang
          kejadian atau gejala sosial . Selanjutnya, pada skala Likert
          masing-masing diberi bobot atau nilai sesuai dengan alternatif
          jawaban.{" "}
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Kuesioner itu didukung juga dengan kuesioner tambahan untuk menjaring
          data dari aparat desa dan penutur bahasa lain. Tujuan kuesioner ini
          untuk mengetahui tanggapan mereka terhadap bahasa asli mereka.
        </p>
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
