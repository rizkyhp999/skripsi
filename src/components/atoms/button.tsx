import React from "react";
interface data {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}
export default function button({ children, onClick, ...props }: data) {
  return (
    <button {...props} onClick={onClick}>
      {children}
    </button>
  );
}
