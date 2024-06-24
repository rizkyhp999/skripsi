"use client";
import React, { useEffect, useState } from "react";
import { BsTypeH2 } from "react-icons/bs";

interface Data {
  closeModal: () => void;
  status?: string;
}

interface VitalitasData {
  id: string;
  bahasa: string;
  provinsi: string;
  kabupaten_kota: string;
  indeks: number;
  tahun: number;
  // ...other properties
}

export default function ModalJumlahBahasa({ closeModal, status }: Data) {
  const [vitalitas, setVitalitas] = useState<VitalitasData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/vitalitas");
        if (!res.ok) {
          throw new Error("Failed to fetch vitalitas data: " + res.status);
        }
        const data = await res.json();
        setVitalitas(data.data);
      } catch (err) {
        // Handle error
      }
    }
    fetchData();
  }, []);

  const filteredVitalitas = vitalitas.filter((item) => {
    if (status === "aman") {
      return item.indeks > 0.8; // Filter hanya yang indeksnya > 0.8
    } else if (status === "rentan") {
      return item.indeks > 0.6; // Filter hanya yang indeksnya > 0.8
    } else if (status === "mengalamiKemunduran") {
      return item.indeks > 0.4; // Filter hanya yang indeksnya > 0.8
    } else if (status === "terancamPunah") {
      return item.indeks > 0.2; // Filter hanya yang indeksnya > 0.8
    } else if (status === "kritis") {
      return item.indeks > 0.0; // Filter hanya yang indeksnya > 0.8
    }
  });

  return (
    <div className=" contaier mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              No
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Bahasa Daerah
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Provinsi
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Kabupaten/Kota
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Indeks
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tahun
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredVitalitas.map((item, index) => (
            <tr key={item.id}>
              <td className="px-6 py-4 text-xs">{index + 1}</td>
              <td className="px-6 py-4 text-xs ">{item.bahasa}</td>
              <td className="px-6 py-4 text-xs ">{item.provinsi}</td>
              <td className="px-6 py-4 text-xs ">{item.kabupaten_kota}</td>
              <td className="px-6 py-4 text-xs ">
                {Number(item.indeks).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-xs ">{item.tahun}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
