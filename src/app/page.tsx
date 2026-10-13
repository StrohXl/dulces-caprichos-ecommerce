import ContainerWidth from "../components/ContainerWidth";
import products from "@/features/products/data/products";
import CardProduct from "../features/products/components/cards/CardProduct";
import Banner1 from "../components/banners/Banner_1";
import ButtonEffect from "../components/buttons/ButtonEffect";
import Hero from "../features/home/sections/Hero";
import SwiperCategories from "../features/home/sections/SwiperCategories";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      <SwiperCategories />

      <div className="bg-[#FFFCFA] py-12" >
        <section className="mb-12">
          <ContainerWidth>
            <div className="">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-dm-serif-display text-primary">
                  Productos de la semana
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(
                  (product, index) =>
                    index < 4 && (
                      <CardProduct key={product.id} product={product} />
                    ),
                )}
              </div>
            </div>
          </ContainerWidth>
        </section>

        <section className="mb-12">
          <ContainerWidth>
            <Banner1 urlImage="/cake.webp">
              <span className="text-primary font-bold text-sm mb-6 font-[inter]">
                PUBLICIDAD
              </span>
              <h2 className="text-3xl md:text-5xl font-dm-serif-display  text-primary mb-6">
                ¡Celulares con hasta 40% OFF!
              </h2>
              <p className="text-secondary mb-6 font-[inter]">
                Los mejores smartphones de las marcas más populares. Envío
                gratis y garantía oficial.
              </p>
              <ButtonEffect
                classButton="bg-primary font-dm-sans text-white font-semibold"
                classBlob="bg-rose-400"
              >
                Ver Ofertas
              </ButtonEffect>
            </Banner1>
          </ContainerWidth>
        </section>

        <section>
          <ContainerWidth>
            <div className="">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-dm-serif-display text-primary">
                  Productos de la semana
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(
                  (product, index) =>
                    index >= 4 &&
                    index < 12 && (
                      <CardProduct key={product.id} product={product} />
                    ),
                )}
              </div>
            </div>
          </ContainerWidth>
        </section>
      </div>
    </div>
  );
}
