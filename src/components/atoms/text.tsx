import React from "react";

interface data {
  children: React.ReactNode;
  warna: string;
}

export default function Judul({ children, warna }: data) {
  return (
    <>
      <div className={"text-" + warna}>
        <div className="flex justify-center text-3xl font-bold text-center px-5 pt-5 lg:text-4xl lg:px-[100px]  lg:pt-[50px]">
          {children}
        </div>
      </div>
    </>
  );
}
