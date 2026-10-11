"use client";

import SwiperFather from "@/components/SwiperFather";
import { SwiperSlide } from "swiper/react";
import CardMiniCategory from "@/features/categories/components/cards/CardMiniCategory";
import ContainerWidth from "@/components/ContainerWidth";
import categories from "@/data/categories";

export default function SwiperCategories() {
  return (
    <section className="mt-4 relative z-20 mb-12" id="swiper-categories">
      <ContainerWidth className="max-w-[1100px]!">
        <SwiperFather
          props={{
            wrapperClass: "py-2 pb-4",
            loop: false,
            slidesPerView: 4,
            spaceBetween: 16,

            breakpoints: {
              300: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 4,
              },
              998: {
                slidesPerView: 6,
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
