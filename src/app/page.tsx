import Image from "next/image";
import Carousel from "@/components/carousel";
import TextBeranda from "@/components/textBeranda";
import Peta from "@/components/peta/peta";
export default function Home() {
  return (
    <>
      <Carousel></Carousel>
      <TextBeranda></TextBeranda>
      <Peta></Peta>
    </>
  );
}
