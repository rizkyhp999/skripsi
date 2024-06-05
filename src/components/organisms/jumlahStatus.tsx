import React from "react";

interface data {
  judul?: string;
  jumlah?: number;
  deskripsi?: string;
  onClick?: () => void;
}

export default function JumlahStatus({
  judul,
  jumlah,
  deskripsi,
  onClick,
}: data) {
  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden w-[200px] h-[200px] m-2 hover:bg-gray-100">
      <div className="flex flex-col justify-evenly h-full p-4">
        {" "}
        {/* Added justify-between */}
        <h1 className="text-xl text-center font-semibold mb-2">{judul}</h1>
        <h3 className="text-lg text-center self-center font-semibold ">
          {jumlah}
        </h3>
        <p className="text-xs text-justify text-gray-600 self-end">
          {" "}
          {/* Added self-end */}
          {deskripsi}
        </p>
      </div>
    </div>
  );
}
