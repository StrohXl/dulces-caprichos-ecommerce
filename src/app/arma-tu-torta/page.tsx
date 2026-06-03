import BannerHero from "../_components/banners/BannerHero";
import ContainerWidth from "../_components/ContainerWidth";
import FormArmaTuTorta from "../_features/arma-tu-torta/components/FormArmaTuTorta";

export default function ArmaTuTorta() {
  return (
    <>
      <BannerHero title="Arma tu Torta" urlImage="/cake.webp" />
      <ContainerWidth>
        <section className="py-10 md:py-20">
          <div className="grid gap-12 grid-cols-1">
            <div className="text-center">
              <span className="text-rose-600 text-sm font-bold font-dm-sans tracking-wider uppercase">
                Tortas Personalizadas
              </span>
              <h2 className="text-4xl md:text-6xl text-gray-800 font-[ui-sans] mb-6">
                Crea tu torta perfecta
              </h2>
              <p className="max-w-4xl text-gray-700  font-dm-sans mx-auto">
                Elige las características favoritas para tu torta. Al recibir tu
                pedido, te contactaremos para conversar sobre los detalles
                finales y asegurarnos de darle ese toque mágico y especial que
                buscas.
              </p>
            </div>
            <div className="bg-white max-w-3xl mx-auto w-full  p-6 py-10 rounded-lg text-start">
              <FormArmaTuTorta />
            </div>
          </div>
        </section>
      </ContainerWidth>
    </>
  );
}
