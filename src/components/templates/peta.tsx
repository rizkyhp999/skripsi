"use client";

import React from "react";
import Judul from "../atoms/text";
import Dropdown from "../organisms/dropdown";

const items = ["Item 1", "Item 2", "Item 3"];

const handleSelect = (item: string) => {
  console.log(`Selected item: ${item}`);
};
export default function peta() {
  return (
    <>
      <Judul warna="black">Peta Status Daya Hidup Bahasa Daerah</Judul>
      <Dropdown label={items[1]} items={items} onSelect={handleSelect} />
    </>
  );
}
