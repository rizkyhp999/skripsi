import { on } from "events";
import React from "react";
interface data {
  children: React.ReactNode;
  label?: string;
  onClick: () => void;
}
export default function Button({ children, onClick }: data) {
  return <button onClick={onClick}>{children}</button>;
}

export function ButtonBiru({ children, onClick }: data) {
  return (
    <button
      type="button"
      className="text-white bg-primer hover:bg-[#0074AB] focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-xl  px-5 py-2.5 me-2 mb-2 focus:outline-none "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function ButtonMerah({ children, onClick }: data) {
  return (
    <button
      type="button"
      className="focus:outline-none text-white bg-[#dc3545] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-xl px-5 py-2.5 me-2 mb-2 "
      onClick={onClick}
    >
      {children}
    </button>
  );
}
