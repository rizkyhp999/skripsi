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
            delay: 1000,
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
            <div className=" flex flex-wrap lg:flex-nowrap items-center justify-center">
              <img
                width={500}
                height={500}
                src="/carousel/1.webp"
                alt=""
                loading="lazy"
                className="relative hidden md:block lg:w-1/2 lg:h-auto lg:static justify-center blur-sm lg:blur-0"
              />
              <img
                width={500}
                height={500}
                src="/carousel/1sm.webp"
                alt=""
                loading="lazy"
                className="relative md:hidden lg:w-1/2 lg:h-auto lg:static justify-center blur-sm  lg:blur-0"
              />
              <div className="swiper-lazy-preloader"></div>
              <div className=" absolute inset-x-0 m-auto flex flex-wrap items-center justify-center lg:static  lg:my-auto">
                <div className=" bg-white p-5 ">
                  <h1 className="text-sm sm:text-lg md:text-xl lg:text-3xl font-bold ">
                    Bahasa Daerah 1
                  </h1>
                  <div className="text-sm sm:text-lg md:text-xl lg:text-xl text-justify ">
                    Bahasa daerah di Indonesia berjumlah ratusan. Badan
                    Pengembangan dan Pembinaan Bahasa (Badan Bahasa) hingga 2019
                    telah memverifikasi sebanyak 718 bahasa daerah—bukan dialek
                    atau subdialek. Jumlah bahasa tersebut diperoleh berdasarkan
                    hasil pengolahan data pemetaan bahasa yang diambil di 2.560
                    daerah pengamatan (DP) di seluruh Indonesia yang dilakukan
                    sejak tahun 1992. Jumlah tersebut tentunya akan bertambah
                    seiring dengan bertambahnya jumlah daerah pengamatan dalam
                    pemetaan berikutnya.{" "}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex flex-wrap lg:flex-nowrap items-center justify-center">
              <img
                width={500}
                height={500}
                src="/carousel/1.webp"
                alt=""
                loading="lazy"
                className="relative hidden md:block lg:w-1/2 lg:h-auto lg:static justify-center blur-sm lg:blur-0"
              />
              <img
                width={500}
                height={500}
                src="/carousel/1sm.webp"
                alt=""
                loading="lazy"
                className="relative md:hidden lg:w-1/2 lg:h-auto lg:static justify-center blur-sm  lg:blur-0"
              />
              <div className="swiper-lazy-preloader"></div>
              <div className=" absolute inset-x-0 m-auto flex flex-wrap items-center justify-center lg:static  lg:my-auto">
                <div className=" bg-white p-5 ">
                  <h1 className="text-sm sm:text-lg md:text-xl lg:text-3xl font-bold ">
                    Bahasa Daerah 2
                  </h1>
                  <div className="text-sm sm:text-lg md:text-xl lg:text-xl text-justify ">
                    Bahasa daerah di Indonesia berjumlah ratusan. Badan
                    Pengembangan dan Pembinaan Bahasa (Badan Bahasa) hingga 2019
                    telah memverifikasi sebanyak 718 bahasa daerah—bukan dialek
                    atau subdialek. Jumlah bahasa tersebut diperoleh berdasarkan
                    hasil pengolahan data pemetaan bahasa yang diambil di 2.560
                    daerah pengamatan (DP) di seluruh Indonesia yang dilakukan
                    sejak tahun 1992. Jumlah tersebut tentunya akan bertambah
                    seiring dengan bertambahnya jumlah daerah pengamatan dalam
                    pemetaan berikutnya.{" "}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex flex-wrap lg:flex-nowrap items-center justify-center">
              <img
                width={500}
                height={500}
                src="/carousel/1.webp"
                alt=""
                loading="lazy"
                className="relative hidden md:block lg:w-1/2 lg:h-auto lg:static justify-center blur-sm lg:blur-0"
              />

              <img
                width={500}
                height={500}
                src="/carousel/1sm.webp"
                alt=""
                loading="lazy"
                className="relative md:hidden lg:w-1/2 lg:h-auto lg:static justify-center blur-sm  lg:blur-0"
              />
              <div className="swiper-lazy-preloader"></div>
              <div className=" absolute inset-x-0 m-auto flex flex-wrap items-center justify-center lg:static  lg:my-auto">
                <div className=" bg-white p-5 ">
                  <h1 className="text-sm sm:text-lg md:text-xl lg:text-3xl font-bold ">
                    Bahasa Daerah 3
                  </h1>
                  <div className="text-sm sm:text-lg md:text-xl lg:text-xl text-justify ">
                    Bahasa daerah di Indonesia berjumlah ratusan. Badan
                    Pengembangan dan Pembinaan Bahasa (Badan Bahasa) hingga 2019
                    telah memverifikasi sebanyak 718 bahasa daerah—bukan dialek
                    atau subdialek. Jumlah bahasa tersebut diperoleh berdasarkan
                    hasil pengolahan data pemetaan bahasa yang diambil di 2.560
                    daerah pengamatan (DP) di seluruh Indonesia yang dilakukan
                    sejak tahun 1992. Jumlah tersebut tentunya akan bertambah
                    seiring dengan bertambahnya jumlah daerah pengamatan dalam
                    pemetaan berikutnya.{" "}
                  </div>
                </div>
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
