"use client";

import ButtonEffect from "@/components/buttons/ButtonEffect";
import ContainerWidth from "@/components/ContainerWidth";
import CarouselGallery from "@/features/gallery/components/CarouselGallery";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 md:py-20 px-4 bg-white text-center md:text-start"
    >
      <ContainerWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-bold block mb-2 uppercase">
              Mi Galería
            </span>
            <h2 className="text-4xl md:text-6xl max-w-lg  text-primary font-dm-serif-display">
              Explora mi Galería de Creaciones
            </h2>
            <p className="max-w-xl my-6 ">
              Explora el universo de mis pasteles y cupcakes personalizados,
              donde cada diseño refleja mi amor por la repostería.
            </p>
            <div className="hidden md:flex justify-center md:justify-start">
              <Link href="/galeria" className="flex items-center gap-2 w-full h-full duration-200 text-primary hover:text-secondary text-lg font-dm-serif-display ">

                Ver toda la galería
                <IoIosArrowRoundForward className="text-2xl translate-y-[1px]" />
              </Link>
            </div>
          </div>
          <div className="w-full relative overflow-hidden">
            <CarouselGallery />
          </div>
          <div className="flex md:hidden justify-center mt-6">
            <Link href="/galeria" className="flex items-center gap-2 w-full h-full duration-200 hover:text-primary text-gray-800 text-lg font-[ui-serif] ">

              Ver toda la galería
              <IoIosArrowRoundForward className="text-2xl translate-y-[1px]" />
            </Link>
          </div>
        </div>
      </ContainerWidth>
    </section>
  );
}
