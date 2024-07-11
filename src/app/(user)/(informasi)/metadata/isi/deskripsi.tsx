import Link from "next/link";
import React from "react";

export default function DeskripsiUmum() {
  return (
    <>
      <div className="container p-4 md:p-10 bg-white rounded-sm">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Pendahuluan</h1>
        <p className="mb-4 text-justify text-sm md:text-base">
          Bahasa daerah di Indonesia berjumlah ratusan. Badan Pengembangan dan
          Pembinaan Bahasa (Badan Bahasa) hingga Agustus 2017 telah
          memverifikasi sebanyak 669 bahasa daerah—bukan dialek atau subdialek.
          Jumlah bahasa tersebut diperoleh berdasarkan hasil pengolahan data
          pemetaan bahasa yang diambil di 2.357 daerah pengamatan (DP) di
          seluruh Indonesia yang dilakukan sejak tahun 1992. Jumlah tersebut
          tentunya akan bertambah seiring dengan bertambahnya jumlah DP dalam
          pemetaan berikutnya. Artinya, masih banyak bahasa daerah yang belum
          dipetakan. Sebagai perbandingan jumlah bahasa hasil pemetaan yang
          dipublikasikan pada tahun 1972, Lembaga Bahasa Nasional (sekarang
          Badan Bahasa, Kemendikbud) menyebutkan ada 418 bahasa daerah
          berdasarkan inventarisasi bahasa-bahasa di Indonesia pada tahun
          1969—1971. Informasi bahasa-bahasa yang telah dipetakan oleh Badan
          Bahasa dapat dilihat di http://badanbahasa.kemdikbud.go.id/petabahasa.
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Berbagai lembaga internasional pun telah mencoba memetakan bahasa di
          Indonesia dengan metodologinya masing-masing. Perserikatan
          Bangsa-Bangsa (PBB) melalui program United Nations Educational,
          Scientific, and Cultural Organization (UNESCO) dengan proyek Atlas of
          the World’s Languages in Danger
          (http://www.unesco.org/languages-atlas) dan Summer Institute of
          Linguistics (SIL) Internasional dengan proyek Ethnologue
          (https://www.ethnologue.com) merupakan contoh lembaga dunia yang telah
          melakukan upaya pemetaan bahasa. Karena perbedaan metodologi itu pula,
          jumlah bahasa hasil pemetaan lembagalembaga tersebut pun berbeda-beda.
          Misalnya, dengan memasukkan pengakuan penutur secara sosiolinguistik,
          SIL (Simons dan Fennig, 2017) menyebut jumlah bahasa di Indonesia
          sebanyak 719 bahasa daerah dan 707 di antaranya masih aktif
          dituturkan. UNESCO sendiri baru mencatatkan 143 bahasa daerah di
          Indonesia berdasarkan status vitalitas (daya hidup) bahasa. Di antara
          ratusan bahasa yang terdapat di Indonesia tersebut hanya tiga belas
          bahasa yang memiliki penutur di atas satu juta, yakni bahasa Jawa,
          Sunda, Batak, Bali, Bugis, Madura, Minang, Rejang Lebong, Lampung,
          Makassar, Banjar, Bima, dan Sasak. Namun, dari tahun ke tahun jumlah
          bahasa daerah tersebut terus berkurang.{" "}
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Pada umumnya bahasa daerah yang jumlah penuturnya sedikit cenderung
          merupakan bahasa yang tidak mempunyai aksara. Dengan demikian, tradisi
          lisan yang berkembang pada bahasa-bahasa minoritas ini, jika tidak
          segera dikonservasi atau bahkan sekaligus direvitalisasi, akan sangat
          sulit untuk mempertahankan eksistensi bahasa itu.{" "}
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Fakta kepunahan bahasa di Indonesia yang dikemukakan tersebut cukup
          mengkhawatirkan. Oleh karena itu, tidak berlebihan jika bangsa
          Indonesia sudah saatnya segera melakukan berbagai upaya konservasi dan
          revitalisasi bahasa. Kita berharap bahwa upaya tersebut akan
          memberikan sumbangan signifikan dalam upaya melindungi dan mengelola
          bahasa sebagai kekayaan dan kekuatan untuk memperkukuh Negara Kesatuan
          Republik Indonesia (NKRI).
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Pada awal pertengahan abad XX, upaya pelindungan bahasa yang terancam
          punah menjadi sebuah fokus studi yang penting di kalangan pakar
          linguistik, bahkan sudah menjadi Rencana Aksi PBB melalui UNESCO.
          Upaya pelindungan bahasa ini menjadi sangat penting karena bahasa
          merupakan sisi yang tidak terpisahkan dari kehidupan masyarakat. Studi
          ini pun berkembang dengan pesat dan menyebar luas dalam bingkai
          konservasi dan revitalisasi dengan tujuan intinya untuk mengembangkan,
          menciptakan ranah, dan fungsi baru, bahkan menyelamatkan bahasa.
        </p>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Tujuan dan Manfaat Kajian Vitalitas Bahasa
        </h1>
        <p className="mb-4 text-justify text-sm md:text-base">
          Tujuan umum dari kajian vitalitas bahasa adalah untuk mengetahui
          status suatu bahasa, dari kategori punah hingga aman. Status bahasa
          itu berimplikasi pada tindakan yang perlu dilakukan terhadap bahasa
          yang bersangkutan, apakah perlu dilakukan konservasi, revitalisasi,
          atau sekaligus konservasi dan revitalisasi. Sebagai contoh, tindakan
          konservasi berupa dokumentasi saja dapat dilakukan jika bahasa
          tersebut termasuk kategori punah atau perlu dilakukan konservasi dan
          revitalisasi sekaligus jika bahasa tersebut berkategori hampir punah
          atau terancam punah.
        </p>
        <p className="mb-4 text-justify text-sm md:text-base">
          Tujuan khusus dari kajian vitalitas adalah sebagai berikut.
        </p>
        <ul className="list-decimal ml-6 text-left">
          <li className="mt-1 text-justify text-sm md:text-base">
            Mendeskripsikan karakteristik penutur suatu bahasa;
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Mendeskripsikan distribusi frekuensi dan persentase respons penutur
            terhadap pernyataan setiap indikator vitalitas bahasa dan hubungan
            semua indikator tersebut dengan karakteristik penutur;
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Mendeskripsikan sikap bahasa penutur bahasa, termasuk sikap bahasa
            pihak pemerintahnya; serta
          </li>
          <li className="mt-1 text-justify text-sm md:text-base">
            Menetapkan kondisi vitalitas suatu bahasa berdasarkan hubungan semua
            subindeks indikator dengan karakteristik penutur.
          </li>
        </ul>
        <br />
        <p className="mb-4 text-justify text-sm md:text-base">
          Kajian vitalitas bahasa bermanfaat untuk pemetaan vitalitas
          bahasa-bahasa daerah dan dapat dijadikan sebagai sumber pendalaman
          ilmu linguistik, khususnya untuk studi perencanaan dan kebijakan
          bahasa terhadap bahasa-bahasa daerah.
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
