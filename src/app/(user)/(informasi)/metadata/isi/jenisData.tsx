import Link from "next/link";
import React from "react";

export default function JenisData() {
  return (
    <>
      <div className="container p-4 md:p-10 bg-white rounded-sm">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Jenis Data</h1>
        <p className="mb-4 text-justify text-sm md:text-base">
          Data kajian vitalitas bahasa terdiri atas data primer dan data
          sekunder. Data primer adalah data yang diperoleh langsung dari
          sumbernya dan dicatat oleh peneliti. Data primer diperoleh melalui
          daftar tanyaan dalam kuesioner. Data sekunder adalah data yang secara
          tidak langsung diperoleh dari sumbernya. Misalnya, data diperoleh dari
          aparat desa serta dokumen-dokumen terkait.
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
