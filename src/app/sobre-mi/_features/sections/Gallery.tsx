"use client";

import ButtonEffect from "@/app/_components/buttons/ButtonEffect";
import ContainerWidth from "@/app/_components/ContainerWidth";
import CarouselGallery from "@/app/_features/gallery/components/CarouselGallery";
import Link from "next/link";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-10 md:py-20 px-4 bg-white text-center md:text-start"
    >
      <ContainerWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div>
            <span className="text-rose-600 text-sm font-bold block mb-6 font-dm-sans uppercase">
              Mi Galería
            </span>
            <h2 className="text-4xl md:text-6xl max-w-lg  text-gray-800 font-[ui-sans]">
              Explora mi Galería de Creaciones
            </h2>
            <p className="font-md-sans max-w-xl text-lg text-gray-700 my-6 md:my-12">
              Explora el universo de mis pasteles y cupcakes personalizados,
              donde cada diseño refleja mi amor por la repostería.
            </p>
            <div className="hidden md:flex justify-center md:justify-start">
              <ButtonEffect>
                <Link href="/galeria" className="block w-full h-full">
                  Ver toda la galería
                </Link>
              </ButtonEffect>
            </div>
          </div>
          <div className="w-full relative">
            <CarouselGallery />
          </div>
          <div className="flex md:hidden justify-center mt-6">
            <ButtonEffect>
              <Link href="/galeria" className="block w-full h-full">
                Ver toda la galería
              </Link>
            </ButtonEffect>
          </div>
        </div>
      </ContainerWidth>
    </section>
  );
}
