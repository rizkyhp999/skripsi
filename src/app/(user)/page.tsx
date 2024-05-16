import React from "react";
import Carousel from "@/components/pages/carousel";
import TextBeranda from "@/components/pages/textBeranda";
import Peta from "@/components/pages/peta";
import Subindeks from "@/components/pages/subindeks";
export default function page() {
  return (
    <>
      <Carousel tulisan="wakwau"></Carousel>
      <TextBeranda></TextBeranda>
      <Peta></Peta>
      <Subindeks></Subindeks>
    </>
  );
}