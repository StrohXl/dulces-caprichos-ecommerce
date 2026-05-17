import ContainerWidth from "./_components/ContainerWidth";
import products from "./_data/products";
import CardProduct from "./_components/cards/CardProduct";
import Banner1 from "./_components/banners/Banner_1";
import ButtonEffect from "./_components/buttons/ButtonEffect";
import Hero from "./_features/home/sections/Hero";
import SwiperCategories from "./_features/home/sections/SwiperCategories";

export default function Home() {
  
  return (
    <div className="min-h-screen">
      <Hero />
      <SwiperCategories />
      <section className="mb-12">
        <ContainerWidth>
          <div className="">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-medium font-[ui-serif] text-rose-900">
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
            <span className="text-[#ffe600] font-bold text-sm mb-2 font-dm-sans">
              PUBLICIDAD
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-[ui-serif]  text-white mb-4">
              ¡Celulares con hasta 40% OFF!
            </h2>
            <p className="text-gray-100 mb-6  font-dm-sans font-medium  md:text-lg">
              Los mejores smartphones de las marcas más populares. Envío gratis
              y garantía oficial.
            </p>
            <ButtonEffect
              classButton="bg-[#ffe600] font-dm-sans text-gray-800! font-semibold"
              classBlob="bg-white"
            >
              Ver Ofertas
            </ButtonEffect>
          </Banner1>
        </ContainerWidth>
      </section>
      <section className="mb-12">
        <ContainerWidth>
          <div className="">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-medium font-[ui-serif] text-rose-900">
                Productos de la semana
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map(
                (product, index) =>
                  index >= 4 && (
                    <CardProduct key={product.id} product={product} />
                  ),
              )}
            </div>
          </div>
        </ContainerWidth>
      </section>
    </div>
  );
}
