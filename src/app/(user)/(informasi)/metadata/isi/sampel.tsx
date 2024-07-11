import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function sampel() {
  return (
    <>
      <div className="container p-4 md:p-10 bg-white rounded-sm">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Populasi dan Sampel
        </h1>
        <p className="mb-4 text-justify text-sm md:text-base">
          Populasi dalam kajian vitalitas bahasa merujuk pada objek/subjek yang
          mempunyai kualitas dan karakteristik tertentu di dalam suatu wilayah
          generalisasi. Populasi tersebut, misalnya kelompok etnik tertentu
          sebagai penutur bahasa yang akan dikaji vitalitasnya. Sampel merupakan
          bagian dari jumlah dan karakteristik yang dimiliki oleh populasi
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Penentuan sampel dari populasi dilakukan dengan mempertimbangkan
          derajat keseragaman, tujuan yang dikehendaki, rencana analisis, serta
          tenaga, biaya, dan waktu yang tersedia. Untuk pemilihan sampel dapat
          digunakan teknik sampel bertujuan (purposive sampling), yaitu
          penentuan sampel dilakukan dengan sengaja dan sampel tersebut dianggap
          representatif atau mewakili populasi. Artinya, pemilihan sampel
          didasarkan atas ciri-ciri atau sifat-sifat tertentu yang dipandang
          mempunyai sangkut paut yang erat dengan ciri-ciri atau sifat-sifat
          populasi yang sudah diketahui sebelumnya. Teknik ini dipergunakan
          untuk mencapai tujuan-tujuan tertentu (purpose ’maksud/tujuan’).{" "}
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Salah satu metode yang digunakan untuk menentukan jumlah sampel adalah
          menggunakan rumus Slovin (Sevilla et. al., 1960: 182), sebagai
          berikut:
        </p>
        <Image
          src="/informasi/sampel1.png"
          alt=""
          width={600}
          height={300}
          className="mx-auto"
        ></Image>{" "}
        <p className="mb-4 text-justify text-sm md:text-base">
          Untuk menggunakan rumus ini, pertama ditentukan berapa batas toleransi
          kesalahan. Batas toleransi kesalahan ini dinyatakan dengan persentase.
          Semakin kecil toleransi kesalahan, semakin akurat sampel menggambarkan
          populasi. Misalnya, penelitian dengan batas kesalahan 5% berarti
          memiliki tingkat akurasi 95%. Penelitian dengan batas kesalahan 2%
          memiliki tingkat akurasi 98%. Dengan jumlah populasi yang sama,
          semakin kecil toleransi kesalahan, semakin besar jumlah sampel yang
          dibutuhkan.
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">Contoh:</p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Sebuah masyarakat etnik memiliki 1000 penduduk. Sampel yang dibutuhkan
          dengan batas toleransi kesalahan 5% adalah sebagai berikut.
        </p>
        <Image
          src="/informasi/sampel2.png"
          alt=""
          width={600}
          height={300}
          className="mx-auto"
        ></Image>{" "}
        <p className="mb-4 text-justify text-sm md:text-base">
          Dengan demikian, jumlah sampel yang dibutuhkan adalah 286 responden.
          Jumlah sampel yang diambil ditetapkan sebanyak jumlah tertentu
          tersebut, misalnya 286, responden dengan rincian (1) 206 responden
          untuk penutur asli bahasa, (2) 50 responden untuk penutur bahasa lain
          yang dekat dengan penutur bahasa asli, dan (3) 30 responden untuk
          representasi pemerintah, seperti kepala kampung, tokoh adat, atau
          pegawai kelurahan/dusun . Penentuan jumlah sampel dengan rumus Slovin
          ini hanya dapat digunakan apabila jumlah populasinya dapat
          diidentifikasi atau diperkirakan.
        </p>{" "}
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
