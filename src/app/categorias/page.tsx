import BannerHero from "@/components/banners/BannerHero";
import ContainerWidth from "@/components/ContainerWidth";
import categories from "@/data/categories";
import Breadcrumb from "@/components/Breadcrumb";
import CardCategory from "@/features/categories/components/cards/CardCategory";

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

          <div className="grid gap-2 md:gap-4 sm:grid-cols-2 md:grid-cols-3   ">
            {categories.map((category) => (
              <CardCategory key={category.id} category={category} />
            ))}
          </div>
        </ContainerWidth>
      </section>
    </>
  );
}
