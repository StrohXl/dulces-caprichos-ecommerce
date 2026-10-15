import Image from "next/image";
import BannerHero from "@/components/banners/BannerHero";
import ContainerWidth from "@/components/ContainerWidth";
import categories from "@/data/categories";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { FaArrowRight } from "react-icons/fa6";

export default function Categories() {
  return (
    <>
      <BannerHero title="Categorias" urlImage="/cake.webp" />
      <section className="py-12 bg-[#FFFCFA]">
        <ContainerWidth>
          <Breadcrumb />
          <div className="mt-6 mb-10 flex flex-col gap-6 md:flex-row items-start md:items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-dm-serif-display text-primary mb-2">
                Un dulce capricho para cada ocasión
              </h1>
              <p>
                Explora nuestras categorías y encuentra tu próximo favorito.
              </p>
            </div>

            <span className="bg-[#FFF3F5] text-primary flex py-[10] px-5 text-sm font-medium rounded-full">
              {categories.length} Categorías
            </span>
          </div>

          <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-3   ">
            {categories.map((category) => {
              const IconCategory = category.icon;

              return (
                <div
                  key={category.id}
                  className="shadow-sm relative rounded-xl overflow-hidden flex flex-col"
                >
                  <div className="relative w-full aspect-[1.2]">
                    <Image
                      src={category.imageUrl}
                      fill
                      className="object-cover"
                      alt={category.name}
                    />
                  </div>

                  <div className="p-2 md:p-4 pb-6 h-full bg-white flex flex-col gap-2 md:gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-[50px_1fr] items-center gap-4">
                      <div className="w-[50px] h-[50px] hidden md:block bg-[#FFF3F5] rounded-md flex items-center justify-center">
                      <IconCategory className="text-primary text-3xl" />
                        </div>
                      <h2 className="md:text-xl font-dm-serif-display text-primary">
                        {category.name}
                      </h2>
                    </div>
                    <p className="text-sm md:text-base mb-4 md:mb-0">{category.description}</p>
                    <Link
                      href={category.url}
                      className="text-primary border-1 mt-auto border-primary block py-[6px]  block md:py-[10px] flex items-center justify-center gap-2 rounded-lg font-medium duration-200 hover:bg-primary hover:text-white text-[12px] md:text-base"
                    >
                      Ver productos
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </ContainerWidth>
      </section>
    </>
  );
}
