import React from "react";

export default function page() {
  return (
    <>
      <div className="flex items-center justify-center px-4 py-8 lg:px-[100px] lg:py-[50px] bg-[#eeeeee]">
        <div className="container p-4 md:p-10 bg-white rounded-sm">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Tentang Kami</h1>
          <p className="mb-4 text-justify">
            Kami adalah tim yang berdedikasi untuk melestarikan dan
            mempromosikan bahasa daerah di Indonesia. Melalui platform ini, kami
            berusaha untuk meningkatkan kesadaran akan pentingnya bahasa daerah
            serta menyediakan sumber daya untuk pembelajaran dan penelitian.
          </p>
          <p className="mb-4 text-justify">
            Visi kami adalah menciptakan masyarakat yang menghargai keberagaman
            bahasa dan budaya Indonesia. Kami percaya bahwa setiap bahasa adalah
            harta yang tak ternilai, dan dengan melestarikannya, kita juga
            melestarikan identitas dan sejarah bangsa.
          </p>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Tim Kami</h2>
          <ul className="list-disc ml-6">
            <li>Nama Anggota 1 (Peran)</li>
            <li>Nama Anggota 2 (Peran)</li>
            {/* Tambahkan anggota tim lainnya di sini */}
          </ul>
        </div>
      </div>
    </>
  );
}
