"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimasiMuncul } from "../atoms/animasi";
interface CarouselItem {
  id: string;
  gambar: string; // Assuming 'gambar' is the image URL
  judul: string;
  deskripsi: string;
}

export default function Carousel() {
  const [carousel, setCarousel] = useState<CarouselItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/carousel");
        if (!res.ok) {
          throw new Error("Failed to fetch carousel data");
        }
        const data = await res.json();
        setCarousel(data.data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
        // Handle error gracefully (e.g., display an error message)
      } finally {
        setLoading(false); // Set loading to false when data is loaded or error occurs
      }
    }
    fetchData();
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
    <div className="bg-primer pt-10 ">
      <AnimasiMuncul>
        <div className="container relative mx-auto  flex flex-row items-center justify-center">
          <button
            onClick={goToPrevSlide}
            className="text-white text-2xl py-2 px-4 rounded-l z-10"
          >
            {"<"}
          </button>

          {/* Content Section */}
          <div className="flex flex-col items-center justify-center z-20">
            {" "}
            {/* Added z-index */}
            {/* Placeholder for Title and Description (Optimized) */}
            {carousel[activeIndex]?.deskripsi ? (
              <AnimasiMuncul>
                <div className="relative lg:left-10 lg:my-20 mx-5 flex flex-col justify-center p-5 bg-white rounded-lg shadow-md max-w-xl">
                  <h1 className="text-left text-xl md:text-2xl lg:text-3xl mb-3 font-bold">
                    {carousel[activeIndex].judul}
                  </h1>
                  <p className="text-justify text-sm md:text-base lg:text-md lg:mx-5 max-h-[20rem] overflow-y-auto">
                    {carousel[activeIndex].deskripsi}
                  </p>
                </div>
              </AnimasiMuncul>
            ) : (
              <div className="relative lg:left-10 lg:my-20 mx-5 flex flex-col justify-center p-5 bg-white rounded-lg shadow-md max-w-xl">
                <div className="bg-gray-200 animate-pulse rounded-md h-[2.5rem] md:h-[3rem] lg:h-[4rem] mb-3"></div>
                <div className="bg-gray-200 animate-pulse rounded-md h-[20rem]"></div>
              </div>
            )}
          </div>

          {/* Optimized Image */}
          {/* <Image
            src={carousel[activeIndex]?.gambar}
            alt="a"
            width={500}
            height={300}
            className="relative hidden lg:block blur-sm sm:blur-none max-w-xl rounded-lg shadow-md z-10 lg:right-10 aspect-square"
            priority // Prioritize loading this image
            quality={85} // Adjust quality for better compression
          /> */}
          {carousel[activeIndex]?.gambar ? (
            <Image
              src={carousel[activeIndex]?.gambar}
              alt="a"
              width={500}
              height={300}
              className="relative hidden lg:block blur-sm sm:blur-none max-w-xl rounded-lg shadow-md z-10 lg:right-10 aspect-square"
              priority // Prioritize loading this image
              quality={85} // Adjust quality for better compression
            />
          ) : (
            <div></div>
          )}

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
            width={200}
            height={300}
            className="hidden sm:block absolute -left-0 -bottom-0 z-0 "
          ></Image>
        </div>
      </AnimasiMuncul>
    </div>
  );
}
