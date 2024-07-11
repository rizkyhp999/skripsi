import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <>
      <div className="flex items-center justify-center px-4 py-8 lg:px-[100px] lg:py-[50px] bg-[#eeeeee]">
        <div className="container p-4 md:p-10 bg-white rounded-sm">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Tentang Kami</h1>
          <p className="mb-4 text-justify text-sm md:text-base">
            Pusat Pengembangan dan Pelindungan Bahasa dan Sastra (Pusbanglin)
            merupakan unit organisasi dari Badan Pengembangan dan Pembinaan
            Bahasa yang melaksanakan penyiapan kebijakan teknis dan pelaksanaan
            pengembangan dan pelindungan bahasa dan sastra. Pusat Pengembangan
            dan Pelindungan Bahasa dan Sastra dipimpin oleh Kepala Pusat yang
            berada di bawah dan bertanggung jawab kepada Kepala Badan.
          </p>
          <br />
          <Image
            src="/profil/StrukturOrganisasi.jpg"
            alt=" "
            width={600}
            height={300}
            className="mx-auto"
          ></Image>
          <br />
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Visi</h1>
          <p className="mb-4 text-justify text-sm md:text-base">
            Menciptakan pelajar Pancasila yang beriman, bertakwa kepada Tuhan
            Yang Maha Esa, dan berakhlak mulia, berkebinekaan global, bergotong
            royong, mandiri, bernalar kritis, dan kreatif melalui pengembangan
            dan pelindungan bahasa dan sastra.
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Misi</h1>
          <p className="mb-4 text-justify text-sm md:text-base">
            Untuk mewujudkan visi tersebut, Pusat Pengembangan dan Pelindungan
            Bahasa dan Sastra memiliki misi sebagai berikut.
          </p>
          <ul className="list-decimal ml-6 text-left">
            <li className="text-justify text-sm md:text-base">
              Mewujudkan ketersedian produk pengembangan bahasa dan sastra
            </li>
            <li className="text-justify text-sm md:text-base">
              Mengoptimalkan partisipasi masyarakat dalam pelindungan bahasa dan
              sastra
            </li>
            <li className="text-justify text-sm md:text-base">
              Meningkatkan tata kelola Pusat Pengembangan dan Pelindungan Bahasa
              dan Sastra
            </li>
            {/* Tambahkan anggota tim lainnya di sini */}
          </ul>
          <br />
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Tugas</h1>
          <p className="mb-4 text-justify text-sm md:text-base">
            Melaksanakan penyiapan kebijakan teknis dan pelaksanaan pengembangan
            dan pelindungan bahasa dan sastra.
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Fungsi</h1>
          <p className="mb-4 text-justify text-sm md:text-base">
            Dalam melaksanakan tugas, Pusat Pengembangan dan Pelindungan Bahasa
            dan Sastra menyelenggarakan fungsi:
          </p>
          <ul className="list-decimal ml-6 text-left">
            <li className="text-justify text-sm md:text-base">
              Penyiapan kebijakan teknis di bidang pengembangan dan pelindungan
              bahasa dan sastra
            </li>
            <li className="text-justify text-sm md:text-base">
              Pelaksanaan pengembangan dan pelindungan bahasa dan sastra
            </li>
            <li className="text-justify text-sm md:text-base">
              Pengelolaan kebinekaan bahasa
            </li>
            <li className="text-justify text-sm md:text-base">
              Pembakuan dan kodifikasi bahasa dan sastra
            </li>
            <li className="text-justify text-sm md:text-base">
              Koordinasi dan fasilitasi pelaksanaan pengembangan dan pelindungan
              bahasa dan sastra
            </li>
            <li className="text-justify text-sm md:text-base">
              Pemberian bimbingan teknis dan supervisi di bidang pengembangan
              dan pelindungan bahasa dan sastra
            </li>
            <li className="text-justify text-sm md:text-base">
              Pemantauan, evaluasi, dan pelaporan di bidang pengembangan dan
              pelindungan bahasa dan sastra
            </li>
            <li className="text-justify text-sm md:text-base">
              Pelaksanaan urusan ketatausahaan pusat
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
