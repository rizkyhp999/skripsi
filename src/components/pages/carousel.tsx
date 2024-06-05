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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/carousel");
      if (!res.ok) {
        throw new Error("Failed to fetch carousel data");
      }
      const data = await res.json();
      setCarousel(data.data);
    }

    fetchData();
    setImageLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carousel.length);
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [carousel.length]);
  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-primer pt-10">
      <div
        className={`container relative  mx-auto flex flex-row items-center justify-center ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={goToPrevSlide}
          className="text-white text-2xl py-2 px-4 rounded-l"
        >
          {"<"}
        </button>

        <div className="flex flex-col items-center justify-center">
          <div className="relative lg:left-10  lg:my-20 mx-5 flex flex-col justify-center p-5 bg-white rounded-lg shadow-md z-20 max-w-xl max-h-xl">
            <h1 className="text-left text-2xl font-bold mb-3">
              {carousel[activeIndex]?.judul}
            </h1>
            <p className="text-justify text-sm md:text-md xl:text-lg lg:mx-5">
              {carousel[activeIndex]?.deskripsi}
            </p>
          </div>
        </div>

        <Image
          src={carousel[activeIndex]?.gambar}
          alt=""
          width={500}
          height={300}
          className="relative hidden lg:block blur-sm sm:blur-none max-w-xl rounded-lg shadow-md z-10 lg:right-10 aspect-square"
        />

        <button
          onClick={goToNextSlide}
          className="text-white text-2xl py-2 px-4 rounded-r z-10"
        >
          {">"}
        </button>
        <Image
          src={"/komponen/blob1.svg"}
          alt={"blob"}
          width={250}
          height={300}
          className="hidden sm:block absolute right-10 top-0 z-0 "
        ></Image>
        <Image
          src={"/komponen/blob2.svg"}
          alt={"blob"}
          width={250}
          height={300}
          className="hidden sm:block absolute -left-0 bottom-0 z-0 "
        ></Image>
      </div>
    </div>
  );
}
