"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Carousel() {
  return (
    <>
      <div className="container mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 100000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" flex flex-wrap xl:flex-nowrap items-center justify-center">
              <img
                src="/carousel/1.webp"
                alt=""
                className="hidden  md:block xl:w-[45%] lg:h-auto lg:static justify-center blur-sm xl:blur-0 "
              />
              <img
                src="/carousel/1sm.webp"
                alt=""
                className="block md:hidden lg:h-auto lg:static justify-center blur-sm xl:blur-0"
              />

              <div className=" absolute bg-white inset-x-0 m-auto py-2 flex flex-wrap items-center justify-center xl:static  xl:my-auto">
                <h1 className="text-md sm:text-lg md:text-2xl md:mb-5 lg:text-4xl xl:text-5xl lg:mb-5 font-bold ">
                  Bahasa Daerah 1
                </h1>
                <p className="text-sm mx-10 overflow-y-auto h-56 md:h-fit sm:text-lg md:text-xl lg:text-2xl lg:mx-20 text-justify ">
                  Bahasa daerah di Indonesia berjumlah ratusan. Badan
                  Pengembangan dan Pembinaan Bahasa (Badan Bahasa) hingga 2019
                  telah memverifikasi sebanyak 718 bahasa daerah—bukan dialek
                  atau subdialek. Jumlah bahasa tersebut diperoleh berdasarkan
                  hasil pengolahan data pemetaan bahasa yang diambil di 2.560
                  daerah pengamatan (DP) di seluruh Indonesia yang dilakukan
                  sejak tahun 1992. Jumlah tersebut tentunya akan bertambah
                  seiring dengan bertambahnya jumlah daerah pengamatan dalam
                  pemetaan berikutnya.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex flex-wrap xl:flex-nowrap items-center justify-center">
              <img
                src="/carousel/1.webp"
                alt=""
                className="hidden  md:block xl:w-[45%] lg:h-auto lg:static justify-center blur-sm xl:blur-0 "
              />
              <img
                src="/carousel/1sm.webp"
                alt=""
                className="block md:hidden lg:h-auto lg:static justify-center blur-sm xl:blur-0"
              />

              <div className=" absolute bg-white inset-x-0 m-auto py-2 flex flex-wrap items-center justify-center xl:static  xl:my-auto">
                <h1 className="text-md sm:text-lg md:text-2xl md:mb-5 lg:text-4xl xl:text-5xl lg:mb-5 font-bold ">
                  Bahasa Daerah 2
                </h1>
                <p className="text-sm mx-10 overflow-y-auto h-56 md:h-fit sm:text-lg md:text-xl lg:text-2xl lg:mx-20 text-justify ">
                  Bahasa daerah di Indonesia berjumlah ratusan. Badan
                  Pengembangan dan Pembinaan Bahasa (Badan Bahasa) hingga 2019
                  telah memverifikasi sebanyak 718 bahasa daerah—bukan dialek
                  atau subdialek. Jumlah bahasa tersebut diperoleh berdasarkan
                  hasil pengolahan data pemetaan bahasa yang diambil di 2.560
                  daerah pengamatan (DP) di seluruh Indonesia yang dilakukan
                  sejak tahun 1992. Jumlah tersebut tentunya akan bertambah
                  seiring dengan bertambahnya jumlah daerah pengamatan dalam
                  pemetaan berikutnya.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex flex-wrap xl:flex-nowrap items-center justify-center">
              <img
                src="/carousel/1.webp"
                alt=""
                className="hidden  md:block xl:w-[45%] lg:h-auto lg:static justify-center blur-sm xl:blur-0 "
              />
              <img
                src="/carousel/1sm.webp"
                alt=""
                className="block md:hidden lg:h-auto lg:static justify-center blur-sm xl:blur-0"
              />

              <div className=" absolute bg-white inset-x-0 m-auto py-2 flex flex-wrap items-center justify-center xl:static  xl:my-auto">
                <h1 className="text-md sm:text-lg md:text-2xl md:mb-5 lg:text-4xl xl:text-5xl lg:mb-5 font-bold ">
                  Bahasa Daerah 3
                </h1>
                <p className="text-sm mx-10 overflow-y-auto h-56 md:h-fit sm:text-lg md:text-xl lg:text-2xl lg:mx-20 text-justify ">
                  Bahasa daerah di Indonesia berjumlah ratusan. Badan
                  Pengembangan dan Pembinaan Bahasa (Badan Bahasa) hingga 2019
                  telah memverifikasi sebanyak 718 bahasa daerah—bukan dialek
                  atau subdialek. Jumlah bahasa tersebut diperoleh berdasarkan
                  hasil pengolahan data pemetaan bahasa yang diambil di 2.560
                  daerah pengamatan (DP) di seluruh Indonesia yang dilakukan
                  sejak tahun 1992. Jumlah tersebut tentunya akan bertambah
                  seiring dengan bertambahnya jumlah daerah pengamatan dalam
                  pemetaan berikutnya.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}
