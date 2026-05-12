import ContainerWidth from "@/app/_components/ContainerWidth";

export default function BannerContact() {
  return (
    <section id="contacto" className="py-20 bg-rose-600">
      <ContainerWidth>
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-[ui-serif] font-bold mb-6">
            ¿Listo para hacer tu pedido?
          </h2>
          <p className=" text-gray-100 mb-8 font-md-sans max-w-xl mx-auto">
            Contáctame y hagamos realidad tu postre soñado. Estoy aquí para
            hacer de tu celebración algo dulce e inolvidable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-600 hover:bg-gray-100 font-md-sans px-8 py-3 cursor-pointer rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
              WhatsApp
            </button>
          </div>
        </div>
      </ContainerWidth>
    </section>
  );
}
