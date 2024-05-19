import React from "react";
import JudulAdmin from "../atoms/text";
interface data {
  children: React.ReactNode;
  judul: string;
}

export default function Admin({ children, judul }: data) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold ">{judul}</h1>
      <div className="bg-primer w-full h-1 rounded-xl my-5"></div>
      {children}
    </div>
  );
}
