import BannerHero from "@/components/banners/BannerHero";
import Breadcrumb from "@/components/Breadcrumb";
import ContainerWidth from "@/components/ContainerWidth";
import FormArmaTuTorta from "@/features/arma-tu-torta/components/FormArmaTuTorta";

export default function ArmaTuTorta() {
  return (
    <>
      <BannerHero title="Arma tu Torta" urlImage="/cake.webp" />
      <section className="bg-[#fffcfa] pt-12  pb-14">
        <ContainerWidth>
          <Breadcrumb/>
          <div className="grid gap-12 mt-6 grid-cols-1">
            <div className="text-center">
              <span className="text-primary text-sm font-bold  tracking-wider uppercase">
                Tortas Personalizadas
              </span>
              <h2 className="text-4xl md:text-6xl text-primary font-dm-serif-display mb-6">
                Crea tu torta perfecta
              </h2>
              <p className="max-w-4xl text-lg  font-dm-sans mx-auto">
                Elige las características favoritas para tu torta. Al recibir tu
                pedido, te contactaremos para conversar sobre los detalles
                finales y asegurarnos de darle ese toque mágico y especial que
                buscas.
              </p>
            </div>
            <div className="bg-white border-1 border-primary max-w-3xl mx-auto w-full rounded-lg text-start">
              <FormArmaTuTorta />
            </div>
          </div>
        </ContainerWidth>
      </section>
    </>
  );
}
