"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import BannerHero from "../../components/banners/BannerHero";
import SwiperFather from "@/components/SwiperFather";
import categories from "@/data/categories";
import products from "@/features/products/data/products";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import "./galeria.css";
import Breadcrumb from "@/components/Breadcrumb";
import ContainerWidth from "@/components/ContainerWidth";

export default function Galleria() {
  return (
    <>
      <BannerHero title="Galería" urlImage="/cake.webp" />
      <GalleryByCategory />
    </>
  );
}

function GalleryByCategory() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    categories[0]?.id ?? 1,
  );

  const activeProducts = useMemo(
    () => products.filter((product) => product.category === activeCategoryId),
    [activeCategoryId],
  );

  return (
    <section className="py-12 bg-[#FFFCFA]">
      <ContainerWidth>
        <Breadcrumb />
        <div className="my-6">
          <h1 className=" text-xl md:text-2xl lg:text-3xl font-dm-serif-display text-primary">
            Categorías
          </h1>
          <p className="mt-4">
            Selecciona una categoría para ver las imágenes de los productos.
          </p>
        </div>
        <div className="px-[50px] relative ">
          <button className="btn-left-carousel-gallery w-[40px] aspect-square rounded-full flex items-center justify-center bg-primary text-white cursor-pointer absolute top-[50%] translate-y-[-50%] left-0">
            <FaChevronLeft />
          </button>
          <button className="btn-right-carousel-gallery w-[40px] aspect-square rounded-full flex items-center justify-center bg-primary text-white cursor-pointer absolute top-[50%] translate-y-[-50%] right-0">
            <FaChevronRight />
          </button>

          <SwiperFather
            props={{
              wrapperClass: "py-4",
              loop: false,
              slidesPerView: 3,
              spaceBetween: 15,
              navigation: {
                prevEl: ".btn-left-carousel-gallery",
                nextEl: ".btn-right-carousel-gallery",
              },

              onSlideChange: (swiper) => {
                const category = categories[swiper.activeIndex];
                if (category) {
                  setActiveCategoryId(category.id);
                }
              },
              breakpoints: {
                300: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 14,
                },
                800: {
                  slidesPerView: 3,
                  spaceBetween: 14,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 18,
                },
              },
            }}
          >
            {categories.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <SwiperSlide key={category.id} className="!h-auto">
                  <button
                    type="button"
                    onClick={() => setActiveCategoryId(category.id)}
                    className={`w-full rounded-3xl cursor-pointer border px-4 py-3 text-center text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-primary bg-white text-primary font-semibold shadow-sm"
                        : "border-gray-200 bg-white hover:border-primary"
                    }`}
                  >
                    {category.name}
                  </button>
                </SwiperSlide>
              );
            })}
          </SwiperFather>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activeProducts.length > 0 ? (
            activeProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm text-gray-600">
              No hay productos en esta categoría.
            </div>
          )}
        </div>
      </ContainerWidth>
    </section>
  );
}
