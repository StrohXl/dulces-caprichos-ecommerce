import BannerHero from "@/components/banners/BannerHero";
import Breadcrumb from "@/components/Breadcrumb";
import CardProduct from "@/components/cards/CardProduct";
import ContainerWidth from "@/components/ContainerWidth";
import { Category } from "@/_types/category";
import { Product } from "@/_types/product.type";
import Image from "next/image";
import Link from "next/link";

export default function CategoryDetailsClient({
  category,
  productsCategory,
}: {
  category: Category;
  productsCategory: Product[];
}) {
  return (
    <>
      <BannerHero title={category.name} urlImage="/cake.webp" />
      <ContainerWidth className="py-10" >
        <Breadcrumb />
      </ContainerWidth>
      <div className="pb-20">
        <ContainerWidth>
          {productsCategory.length == 0 && (
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                src="/stove.png"
                className="translate-x-5"
                alt="stove"
                width={150}
                height={150}
              />
              <p className="max-w-[550px] text-gray-800 text-xl text-center">
                ¡Oops! No encontramos productos en esta categoría.
              </p>
              <Link
                className="text-lg duration-300 hover:text-pink-700 mt-6 border-gray-800 rounded-full  border-1 p-3 px-8 font-semibold text-gray-800 hover:border-pink-700"
                href={"/"}
              >
                Ir a la página de inicio
              </Link>
            </div>
          )}
          {productsCategory.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {productsCategory.map((product) => (
                <CardProduct key={product.id} product={product} />
              ))}
            </div>
          )}
        </ContainerWidth>
      </div>
    </>
  );
}
