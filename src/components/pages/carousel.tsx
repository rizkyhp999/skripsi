"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
interface CarouselItem {
  id: string;
  gambar: string;
  judul: string;
  deskripsi: string;
}

export default function Carousel() {
  const [carousel, setCarousel] = useState<CarouselItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/carousel");
        if (!res.ok) {
          throw new Error("Gagal mengambil data carousel");
        }
        const data = await res.json();
        setCarousel(data.data);
      } catch (err) {
        // setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(); // Panggil fungsi fetchData sekali saat komponen dimuat
  }, []);
  return (
    <>
      <div className="bg-primer py-10">
        <div className=" container mx-auto flex flex-row item-center justify-center   ">
          <>
            <div className="flex flex-col items-center justify-center">
              <div className="relative lg:left-10 my-10 lg:my-20 mx-5 flex flex-col justify-center p-5  bg-white rounded-lg shadow-md z-20  max-w-xl max-h-xl">
                {" "}
                <h1 className="text-left text-2xl font-bold mb-3">
                  {carousel[0]?.judul}
                </h1>
                <p className="text-justify text-md lg:text-md lg:mx-5">
                  {carousel[0]?.deskripsi}
                </p>
              </div>
              {/* <div className="">aaaa</div> */}
            </div>

            <Image
              src={carousel[0]?.gambar}
              alt=""
              width={500}
              height={300}
              className="relative hidden lg:block blur-sm sm:blur-none max-w-xl rounded-lg shadow-md z-10 lg:right-10  aspect-square"
            />
          </>
        </div>
      </div>
    </>
  );
}
