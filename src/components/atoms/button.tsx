import React from "react";
interface data {
  label: string;
  onClick: () => void;
}
export default function button({ label, onClick }: data) {
  return <button onClick={onClick}>{label}</button>;
}
