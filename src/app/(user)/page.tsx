import React from "react";
import Carousel from "@/components/pages/carousel";
import TextBeranda from "@/components/pages/textBeranda";
import Peta from "@/components/pages/peta";
import SubIndeks from "@/components/pages/subIndeks";
import Infografik from "@/components/pages/infografik";
export default function page() {
  return (
    <>
      <Carousel></Carousel>
      <TextBeranda></TextBeranda>
      <Peta></Peta>
      {/* <Subindeks></Subindeks> */}
      <SubIndeks></SubIndeks>
      <Infografik></Infografik>
    </>
  );
}
//aaa
