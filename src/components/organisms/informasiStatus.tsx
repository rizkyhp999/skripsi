import React from "react";

interface Data {
  bahasa?: string;
  indeks?: number;
  provinsi?: string;
  lokasiPengambilan?: string;
  tahun?: number;
}

export default function InformasiStatus({
  bahasa,
  indeks,
  provinsi,
  lokasiPengambilan,
  tahun,
}: Data) {
  const getStatus = (indeks?: any): string => {
    if (indeks > 1) return "Indeks tidak boleh lebih dari 1";
    if (indeks > 0.8) return "Aman";
    if (indeks > 0.6) return "Rentan";
    if (indeks > 0.4) return "Mengalami Kemunduran";
    if (indeks > 0.2) return "Terancam Punah";
    return "Kritis";
  };

  return (
    <div className="bg-white rounded-lg border shadow-md p-4 m-5 w-full md:w-[600px] ">
      <h2 className="text-2xl font-semibold mb-2">Informasi Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-lg font-bold">Bahasa:</p>
          <p>{bahasa || "-"}</p>
        </div>
        <div>
          <p className="text-lg font-bold">Indeks:</p>
          <p>{Number(indeks).toFixed(2) || "-"}</p>
        </div>
        <div>
          <p className="text-lg font-bold">Status:</p>
          <p>{getStatus(indeks)}</p>
        </div>
        <div>
          <p className="text-lg font-bold">Provinsi:</p>
          <p>{provinsi || "-"}</p>
        </div>
        <div>
          <p className="text-lg font-bold">Lokasi Pengambilan Data:</p>
          <p>{lokasiPengambilan || "-"}</p>
        </div>
        <div>
          <p className="text-lg font-bold">Tahun:</p>
          <p>{tahun || "-"}</p>
        </div>
      </div>
    </div>
  );
}
