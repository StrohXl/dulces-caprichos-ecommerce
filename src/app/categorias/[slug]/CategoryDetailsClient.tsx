import BannerHero from "@/components/banners/BannerHero";
import Breadcrumb from "@/components/Breadcrumb";
import CardProduct from "@/features/products/components/cards/CardProduct";
import ContainerWidth from "@/components/ContainerWidth";
import { Category } from "@/types/category";
import { Product } from "@/types/product.type";
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
      <section className="py-12 bg-[#FFFCFA]">
        <ContainerWidth>
          <Breadcrumb />
          <div className="mt-6 mb-10 flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-dm-serif-display text-primary mb-2">
                Un dulce capricho para cada ocasión
              </h1>
              <p>
                Explora nuestras categorías y encuentra tu próximo favorito.
              </p>
            </div>
            <span className="bg-[#FFF3F5] text-primary flex py-[10] px-5 text-sm font-medium rounded-full">
              {productsCategory.length} Productos
            </span>
          </div>

          <div>
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
          </div>
        </ContainerWidth>
      </section>
    </>
  );
}
