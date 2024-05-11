"use client";

import React from "react";
import Judul from "../atoms/text";
import Dropdown from "../molecules/dropdown";
import SearchBar from "../organisms/searchbar";

// Definisikan tipe data

const data = [
  { id: 1, name: "2024" },
  { id: 2, name: "2023" },
  { id: 3, name: "2022" },
];

const dataS = [
  "Aceh",
  "Alas-Kluet",
  "Gayo",
  "Tamiang",
  "Simeulue",
  "Singkil",
  "Minangkabau",
  "Rejang",
  "Kubu",
  "Tembilahan",
  "Bentong",
  "Jambi",
  "Kubu",
  "Orang Kluet",
  "Orang Pesisir",
  "Lampong",
  "Komering",
  "Kubu",
  "Lingga",
  "Melayu",
  "Minangkabau",
  "Orang Sakai",
  "Orang Laut",
  "Suku Anak Dalam",
  "Suku Kubu",
  "Palembang",
  "Lubu",
  "Tenggarong",
  "Dayak",
  "Paser",
  "Banjar",
  "Katingan",
  "Samarinda",
  "Bugis",
  "Makassar",
  "Toraja",
  "Minahasa",
  "Manado",
  "Ternate",
  "Tidore",
  "Ambon",
  "Seram",
  "Ternate",
  "Buru",
  "Moluccan",
  "Halmahera",
  "Ternate",
  "Biak",
  "Papuan",
  "Ternate",
];

export default function peta() {
  return (
    <>
      <Judul warna="black">Peta Status Daya Hidup Bahasa Daerah</Judul>
      <div className="flex flex-wrap justify-center items-center my-10 ">
        <SearchBar suggestions={dataS}></SearchBar>
        <Dropdown data={data}></Dropdown>
      </div>
    </>
  );
}
