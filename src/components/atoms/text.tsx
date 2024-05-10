import React from "react";

interface data {
  children: React.ReactNode;
  warna: string;
}

export default function Judul({ children, warna }: data) {
  return (
    <>
      <div className={"text-" + warna}>
        <div className="flex justify-center">{children}</div>
      </div>
    </>
  );
}
