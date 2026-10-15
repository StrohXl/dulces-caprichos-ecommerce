"use client";

import SwiperFather from "@/components/SwiperFather";
import { SwiperSlide } from "swiper/react";
import CardMiniCategory from "@/features/categories/components/cards/CardMiniCategory";
import ContainerWidth from "@/components/ContainerWidth";
import categories from "@/data/categories";
import { Autoplay } from "swiper/modules";

export default function SwiperCategories() {
  return (
    <section className="mt-4 relative z-20 mb-10" id="swiper-categories">
      <ContainerWidth>
        <SwiperFather
          modules={[Autoplay]}
          props={{
            autoplay: {
              delay: 3000,
            },
            wrapperClass: "py-2",
            slidesPerView: 4,
            spaceBetween: 16,
            breakpoints: {
              300: {
                slidesPerView: 2,

                loop: true,
              },
              600: {
                slidesPerView: 4,
                loop: false,
                autoplay: false,
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
