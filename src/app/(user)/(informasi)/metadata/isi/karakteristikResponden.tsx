import Link from "next/link";
import React from "react";

export default function karakteristikResponden() {
  return (
    <>
      <div className="container p-4 md:p-10 bg-white rounded-sm">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Karakteristik Responden
        </h1>
        <p className="mb-4 text-justify text-sm md:text-base">
          Responden dalam kajian vitalitas bahasa adalah penutur bahasa yang
          menetap di wilayah penelitian. Responden terdiri atas aparat desa,
          pegawai, petani, penenun, nelayan, guru, warga yang tidak bekerja, dan
          pelajar.
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Karakteristik responden dalam kajian vitalitas adalah karakteristik
          individu yang meliputi hal berikut.
        </p>
        <ul className="list-decimal ml-6 text-left">
          <li className="mt-1 text-justify text-sm md:text-base">
            Jenis kelamin terdiri dari laki-laki dan perempuan.
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Kelompok usia adalah kelompok usia responden pada saat penelitian
            dilakukan yang diukur dalam satuan tahun. Data yang akan diperloleh
            dikatagorikan usia dewasa awal ({"<"}25 tahun), usia dewasa menengah
            ({">"}25--50 tahun), dan usia dewasa akhir ({">"}50 tahun).
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Tempat lahir adalah daerah kelahiran responden, apakah di dalam
            dusun atau di luar dusun itu).{" "}
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Nama etnik merujuk pada sebutan suku, apakah termasuk heterogen dan
            homogen
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Jenjang pendidikan adalah tingkat pendidikan responden (rendah,
            menengah, dan tinggi).
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Jenis pekerjaan, yakni jenis sumber mata pencaharian responden
            (rendah, menengah, dan tinggi).
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Lama tinggal/berdomisili adalah waktu responden menetap di suatu
            dusun atau kampung dengan usia {"<"} 25 tahun, 25--50 tahun, dan{" "}
            {">"} 50 tahun.
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Tempat tinggal/berdomisili adalah lokasi responden menetap di suatu
            dusun atau kampung.
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Nama bahasa ibu adalah sebutan untuk bahasa ibu responden.{" "}
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Wilayah pemakaian bahasa ibu adalah daerah yang menjadi tempat
            dituturkan bahasa ibu
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Indeks adalah rasio antara dua unsur kebahasaan tertentu yang
            mungkin menjadi ukuran suatu ciri tertentu.
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
