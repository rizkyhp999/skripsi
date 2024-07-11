import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function pengolahan() {
  return (
    <>
      <div className="container p-4 md:p-10 bg-white rounded-sm">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Pengolahan Data</h1>
        <p className="mb-4 text-justify text-sm md:text-base">
          Langkah-langkah pengolahan data kajian vitalitas terdiri atas
          penyuntingan, pengodea, pemrosesan, dan pengecekan data.
        </p>
        <h2 className="text-lg md:text-xl font-bold mb-4">Penyuntingan data</h2>
        <p className="mb-4 text-justify text-sm md:text-base">
          Penyuntingan data merupakan proses menata dan menyusun semua lembar
          jawaban yang terkumpul berdasarkan nomor skala yang telah ditentukan.
          Selanjutnya, memeriksa kembali jawaban responden satu per satu dengan
          maksud untuk memastikan bahwa jawaban atau pertimbangan yang diberikan
          sesuai dengan perintah dan petunjuk pelaksanaan. Jawaban skala yang
          memenuhi persyaratan dipersiapkan untuk diproses sesuai langkah
          berikutnya dan data yang tidak memenuhi persyaratan dimusnahkan untuk
          kerahasiaan.
        </p>{" "}
        <h2 className="text-lg md:text-xl font-bold mb-4">Pengodean Data</h2>
        <p className="mb-4 text-justify text-sm md:text-base">
          Pengodean data dilakukan untuk memudahkan proses pengolahan data.
          Pengodean ini dilakukan dengan mengklasifikasikan jawaban responden
          menurut jenisnya dengan cara menandai setiap jawaban dengan kode
          tertentu
        </p>
        <h2 className="text-lg md:text-xl font-bold mb-4">Pemrosesan Data</h2>
        <p className="mb-4 text-justify text-sm md:text-base">
          Pemrosesan data atau pengolahan data dimulai dengan memasukkan data
          kasar dalam bentuk tabulasi pada program Excel. Tujuannya adalah
          memastikan kesiapan data dengan tepat untuk dipindahkan ke dalam
          program SPSS (Statistical Package for the Social Sciences atau lebih
          dikenal dengan Paket Statistik untuk Ilmu Sosial). Sebelum
          dipindahkan, terlebih dahulu dibuat desain pengolahan data dalam
          program SPSS.
        </p>
        <h2 className="text-lg md:text-xl font-bold mb-4">Pengecekan</h2>
        <p className="mb-4 text-justify text-sm md:text-base">
          Pengecekan kembali data yang sudah dimasukkan ke dalam program SPSS
          bertujuan untuk mengevaluasi apakah masih ada kesalahan atau tidak.
          Hal ini biasanya terlihat pada (1) missing data atau data yang
          terlewati, (2) variasi data (karena kesalahan pengetikan, dsb.), dan
          (3) konsistensi data, yaitu kesesuaian data dengan penabulasian skor.{" "}
        </p>
        <h2 className="text-lg md:text-xl font-bold mb-4">
          Teknik Analisis Data
        </h2>
        <p className="mb-4 text-justify text-sm md:text-base">
          Data kualitatif kajian vitalitas bahasa dianalisis dengan menggunakan
          model analisis interaktif yang terdiri atas tiga kegiatan utama yang
          berkaitan satu sama lain. Kegiatan tersebut meliputi reduksi data
          (data reduction), sajian data (data display), dan penarikan
          simpulan/verifikasi (conclution drawing), seperti terlihat dalam bagan
          berikut ini.
        </p>
        <Image
          src="/informasi/pengolahan.png"
          alt=""
          width={600}
          height={300}
          className="mx-auto"
        ></Image>
        <p className="mb-4 text-justify text-sm md:text-base">
          tersebut memperlihatkan bahwa proses analisis data dalam penelitian
          ini dimulai dari pengumpulan data, kemudian dibuat reduksi data dan
          dilanjutkan dengan sajian data dan penarikan kesimpulan. Reduksi
          dilakukan sejak pengumpulan data, dimulai dengan membuat ringkasan,
          memberi kode, menelusuri tiap variabel, menulis memo, dan sebagainya,
          dengan maksud menyisihkan data/informasi yang tidak relevan. Reduksi
          data dalam kajian vitalitas dilakukan terus menerus selama kajian
          berlangsung. Langkah-langkah dalam reduksi data adalah menajamkan
          analisis, menggolongkan atau mengelompokkan, mengarahkan, membuang
          yang tidak perlu, dan mengorganisasikan data sehinga
          kesimpulankesimpulan finalnya dapat ditarik dan diverifikasi.
          Penyajian data merupakan pendeskripsian sekumpulan informasi tersusun
          yang memberikan kemungkinan adanya penarikan kesimpulan dan
          pengambilan tindakan. Penyajian data kualitatif disajikan dalam bentuk
          teks naratif. Penyajian juga dapat berbentuk matriks, grafik,
          jaringan, dan bagan. Semuanya dirancang guna menggabungkan informasi
          yang tersusun dalam bentuk yang padu dengan data kuantitatif dan mudah
          dipahami.
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Data kuantitatif yang diperoleh melalui teknik kuesioner dianalisis
          secara deskriptif kuantitatif berdasarkan penghitungan frekuensi dan
          persentase. Perhitungan diawali dengan menghitung frekuensi dan
          persentase karakteristik responden. Perhitungan lanjutan adalah
          menghitung frekuensi dan persentase setiap butir pernyataan yang
          merupakan bagian indikator pengujian vitalitas bahasa, meliputi
          indikator (1) penutur, (2) kontak bahasa, (3) bilingualisme, (4)
          posisi dominan masyarakat penutur, (5) ranah penggunaan bahasa, (6)
          sikap bahasa, (7) regulasi, (8) pembelajaran, (9) dokumentasi, dan
          (10) tantangan baru. Penentuan vitalitas bahasa dilakukan dengan
          perhitungan indeks berdasarkan hubungan semua subindeks indikator
          dengan karakteristik responden. Untuk perhitungan itu digunakan
          aplikasi program Excel dan SPSS untuk sarana analisisnya. Setelah itu,
          dilanjutkan dengan analisis tanggapan aparat desa dan masyarakat
          tetangga.
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Teknik analisis data kualitatif dan kuantitatif ini ditujukan untuk
          saling melengkapi, bukan mempertentangkan. Secara konseptual, jenis
          analisis interaktif dalam kajian kualitatif pada dasarnya digunakan
          oleh para peneliti kuantitatif. Misalnya, pada tahap reduksi data pun
          terdapat perhitungan rerata (mean), standar deviasi, dan indeks; di
          dalam penyajian data terdapat tabel korelasi, cetakan angka-angka
          regresi; dan pada penarikan kesimpulan/verifikasi ada derajat
          signifikansi dan perbedaan eksperimental/kontrol. Meskipun demikian,
          proses itu dilakukan melalui batasan-batasan yang jelas, metode yang
          sudah dikenal, dan kegiatannya lebih menentukan pada urutan kerja.
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
