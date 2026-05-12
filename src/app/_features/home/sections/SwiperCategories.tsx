"use client";

import CardMiniCategory from "@/app/_components/cards/CardMiniCategory";
import ContainerWidth from "@/app/_components/ContainerWidth";
import SwiperFather from "@/app/_components/SwiperFather";
import categories from "@/app/_data/categories";
import { SwiperSlide } from "swiper/react";

export default function SwiperCategories() {
  return (
    <section className="-mt-10 relative z-20 mb-6" id="swiper-categories">
      <ContainerWidth>
        <SwiperFather
          props={{
            wrapperClass: "py-2 pb-4",
            loop: true,
            slidesPerView: 4,

            breakpoints: {
              300: {
                slidesPerView: 2.5,
                spaceBetween: 25,
                centeredSlides: true,
              },
              600: {
                slidesPerView: 4.5,
                spaceBetween: 25,
                centeredSlides: true,
              },
              998: {
                centeredSlides: false,
                slidesPerView: 6,
                spaceBetween: 15,
              },
              1200: {
                centeredSlides: false,
                spaceBetween: 15,
                slidesPerView: 8,
              },
            },
          }}
        >
          {categories.map((category) => {
            return (
              <SwiperSlide className="h-auto!" key={category.id}>
                <CardMiniCategory category={category} />
              </SwiperSlide>
            );
          })}
        </SwiperFather>
      </ContainerWidth>
    </section>
  );
}
