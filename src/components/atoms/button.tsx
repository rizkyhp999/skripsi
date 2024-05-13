import React from "react";
interface data {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}
export default function button({ children, onClick }: data) {
  return <button onClick={onClick}>{children}</button>;
}
