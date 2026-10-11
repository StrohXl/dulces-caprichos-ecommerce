"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import BannerHero from "@/components/banners/BannerHero";
import About from "@/features/sobre-mi/sections/About";
import BannerContact from "@/components/banners/BannerContact";
import Services from "@/features/sobre-mi/sections/Services";
import Gallery from "@/features/sobre-mi/sections/Gallery";
import { useEffect } from "react";

export default function PageAbout() {
  useEffect(() => {
    AOS.init({
      duration:1000
    });
  },[]);
  return (
    <>
      <BannerHero title="Sobre Mí" urlImage="/cake.webp" />
      <About />
      <Services />
      <Gallery />
      <BannerContact />
    </>
  );
}
