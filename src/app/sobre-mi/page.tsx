
import BannerHero from "../_components/banners/BannerHero";
import About from "./_features/sections/About";
import BannerContact from "../_components/banners/BannerContact";
import Services from "./_features/sections/Services";
import Gallery from "./_features/sections/Gallery";


export default function PageAbout() {
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
