import React from "react";
import Carousel from "@/components/carousel/carousel";
import TextBeranda from "@/components/textBeranda";
import Peta from "@/components/peta/peta";
export default function page() {
  return (
    <>
      <div className="bg-primer">
        <Carousel></Carousel>
        <TextBeranda></TextBeranda>
      </div>
      <Peta></Peta>
    </>
  );
}
