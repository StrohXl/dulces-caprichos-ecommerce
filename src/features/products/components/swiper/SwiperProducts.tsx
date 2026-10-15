"use client";

import SwiperFather from "@/components/SwiperFather";
import { Product } from "@/types/product.type";
import { SwiperSlide } from "swiper/react";
import CardProduct from "../cards/CardProduct";

export default function SwiperProducts({ products }: { products: Product[] }) {
  return (
    <SwiperFather
      props={{
        slidesPerView: 2,
        spaceBetween: 8,
        pagination: {
          bulletActiveClass: "bg-primary! opacity-100!",
        },

        breakpoints: {
          600: {
            slidesPerView: 2.5,
            autoplay: false,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      }}
    >
      {products.map((product) => {
        return (
          <SwiperSlide className="pb-12" key={product.id}>
            <CardProduct product={product} />
          </SwiperSlide>
        );
      })}
    </SwiperFather>
  );
}
