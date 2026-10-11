import ContainerWidth from "@/components/ContainerWidth";

export default function BannerContact() {
  return (
    <section
      style={{
        background:
          "linear-gradient(45deg, #800946bb, #800946bb), url(/patron-morado.webp)",
        backgroundSize: "52%",
        }}
      id="contacto"
      className="py-20"
    >
      <ContainerWidth>
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-[ui-serif]  mb-6">
            ¿Listo para hacer tu pedido?
          </h2>
          <p className=" text-gray-100 mb-8 font-dm-sans max-w-xl mx-auto">
            Contáctame y hagamos realidad tu postre soñado. Estoy aquí para
            hacer de tu celebración algo dulce e inolvidable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary  font-[ui-serif] px-12 py-3 cursor-pointer rounded-full text-lg transition-all transform hover:scale-105 shadow-xl">
              WhatsApp
            </button>
          </div>
        </div>
      </ContainerWidth>
    </section>
  );
}
