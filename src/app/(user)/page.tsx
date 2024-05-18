import React from "react";
import Carousel from "@/components/pages/carousel";
import TextBeranda from "@/components/pages/textBeranda";
import Peta from "@/components/pages/peta";
import Subindeks from "@/components/pages/subindeks";
import Infografik from "@/components/pages/infografik";
export default function page() {
  return (
    <>
      <Carousel></Carousel>
      <TextBeranda></TextBeranda>
      <Peta></Peta>
      <Subindeks></Subindeks>
      <Infografik></Infografik>
    </>
  );
}
