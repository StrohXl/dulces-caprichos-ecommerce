import ButtonEffect from "@/app/_components/buttons/ButtonEffect";
import CardService from "../components/cardService";
import services from "../data/services";
import Link from "next/link";

export default function Services() {
  return (
    <section id="servicios" className="py-10 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-rose-600 text-sm font-bold font-dm-sans tracking-wider uppercase">
            Lo que ofrezco
          </span>
          <h2 className="text-4xl md:text-6xl font-[ui-serif] font-bold text-gray-800 mt-2">
            Mis Servicios
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl font-dm-sans mx-auto">
            Desde pasteles de boda hasta cupcakes para fiestas infantiles, cada
            creación es elaborada con los mejores ingredientes y mucho amor.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-5 gap-8 lg:gap-12">
          {services.map((service) => (
            <CardService service={service} key={service.id} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <ButtonEffect>
            <Link href="/servicios">Ver todos los servicios</Link>
          </ButtonEffect>
        </div>
      </div>
    </section>
  );
}
