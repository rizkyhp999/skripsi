import React from "react";
import Carousel from "@/components/pages/carousel/carousel";
import TextBeranda from "@/components/pages/textBeranda";
import Peta from "@/components/pages/peta/peta";
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
