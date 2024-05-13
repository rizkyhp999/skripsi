import React from "react";

interface data {
  children: React.ReactNode;
  classname: string;
}

export default function Judul({ children, classname }: data) {
  return (
    <>
      <div className={classname}>
        <div className="flex justify-center text-3xl font-semibold text-center px-5 pt-5 lg:text-4xl lg:px-[100px]  lg:pt-[50px]">
          {children}
        </div>
      </div>
    </>
  );
}
