"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import BannerHero from "../_components/banners/BannerHero";
import About from "./_features/sections/About";
import BannerContact from "../_components/banners/BannerContact";
import Services from "./_features/sections/Services";
import Gallery from "./_features/sections/Gallery";
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
