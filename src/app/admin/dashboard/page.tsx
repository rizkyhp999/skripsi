"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import JumlahStatusBahasa from "@/components/pages/jumlahStatusBahasa";
import JumlahStatus from "@/components/organisms/jumlahStatus";
interface VitalitasData {
  id: string;
  bahasa: string;

  provinsi: string;
  kabupaten_kota: string;
  indeks: number;
  tahun: number;
  pewarisan_antargenerasi: number;
  jumlah_dan_proporsi_penutur: number;
  ranah_penggunaan_bahasa: number;
  respons_terhadap_ranah_dan_media_baru: number;
  bahan_ajar_bahasa_dan_literasi: number;
  sikap_pemerintah_dan_regulasi: number;
  sikap_penutur: number;
  jenis_dan_kualitas_dokumentasi: number;
  kedwibahasaan: number;
  kontak_bahasa: number;
  // ...other properties
}
export default function Page() {
  const [vitalitas, setVitalitas] = useState<VitalitasData[]>([]); // Type the state

  const [aman, setAman] = useState(0);
  const [rentan, setRentan] = useState(0);
  const [mengalamiKemunduran, setMengalamiKemunduran] = useState(0);
  const [terancamPunah, setTerancamPunah] = useState(0);
  const [kritis, setKritis] = useState(0);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      try {
        const res = await fetch("/api/vitalitas");
        if (!res.ok) {
          throw new Error("Failed to fetch vitalitas data: " + res.status);
        }
        const data = await res.json();
        setVitalitas(data.data);

        data.data.forEach((item: any) => {
          if (item.indeks > 0.8 && item.indeks <= 1) {
            setAman((prev) => prev + 1);
          } else if (item.indeks > 0.6 && item.indeks <= 0.8) {
            setRentan((prev) => prev + 1);
          } else if (item.indeks > 0.4 && item.indeks <= 0.6) {
            setMengalamiKemunduran((prev) => prev + 1);
          } else if (item.indeks > 0.2 && item.indeks <= 0.4) {
            setTerancamPunah((prev) => prev + 1);
          } else if (item.indeks > 0 && item.indeks <= 0.2) {
            setKritis((prev) => prev + 1);
          }

          console.log(item.indeks);
        });
      } catch (err) {
        // setError(err.message);
      } finally {
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      <JumlahStatus
        judul="Jumlah Bahasa Daerah"
        jumlah={aman + rentan + mengalamiKemunduran + terancamPunah + kritis}
      ></JumlahStatus>
    </div>
  );
}
