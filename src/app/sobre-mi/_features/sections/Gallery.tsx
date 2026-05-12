"use client";

import ButtonEffect from "@/app/_components/buttons/ButtonEffect";
import ContainerWidth from "@/app/_components/ContainerWidth";
import SwiperFather from "@/app/_components/SwiperFather";
import { gallery } from "@/app/_data/gallery";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

export default function Gallery() {
  return (
    <section id="gallery" className="py-10 md:py-20 px-4 bg-white text-center">
      <ContainerWidth>
        <h2 className="text-2xl md:text-6xl font-bold text-gray-800 font-[ui-sans] mb-6">
          Galería de Productos
        </h2>
        <p className="font-md-sans max-w-[400px] mx-auto text-gray-600">
          Descubre una selección de mis creaciones más deliciosas y hermosas.
        </p>
        <div className="mt-8 mb-4">
          <SwiperFather
            props={{
              pagination: {
                bulletActiveClass: "bg-rose-800! opacity-100!",
                clickable: true,
              },
              wrapperClass: "pb-10",

              breakpoints: {
                300: {
                  slidesPerView: 1.4,
                  spaceBetween: 16,
                },
                600: {
                  slidesPerView: 2.4,
                  spaceBetween: 16,
                },
                900: {
                  slidesPerView: 3.4,
                  spaceBetween: 16,
                },
              },
            }}
          >
            {gallery.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="w-full aspect-[1.5] rounded-xl overflow-hidden relative">
                  <Image
                    src={item.imageUrl}
                    fill
                    alt={item.title}
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </SwiperFather>
        </div>
        <div className="flex justify-center">

          <ButtonEffect>
            <Link href="/galeria" className="block w-full h-full">
              Ver toda la galería
            </Link>
          </ButtonEffect>
        </div>
      </ContainerWidth>
    </section>
  );
}
