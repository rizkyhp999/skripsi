"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import GambarInfografik from "@/components/molecules/gambar";
import LoadingSkeleton from "@/components/molecules/loading";

async function fetcher(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}

interface InfografikData {
  gambar: string[];
  altText: string;
  judul: string;
  id: number;
}
export default function Page() {
  const [infografik, setInfografik] = useState<InfografikData[]>([]);
  const {
    data: infografikData,
    error: infografikError,
    isLoading: infografikLoading,
  } = useSWR("/api/infografik", fetcher);

  useEffect(() => {
    if (infografikData) {
      setInfografik(infografikData);
    }
  }, [infografikData]);

  return (
    <>
      {infografikLoading && <LoadingSkeleton />}
      <div className="flex flex-wrap justify-evenly items-center py-10">
        {infografik.map((data) => (
          <div className="m-5">
            <GambarInfografik
              gambar={data.gambar}
              judul={data.judul}
            ></GambarInfografik>
          </div>
        ))}
      </div>
    </>
  );
}
