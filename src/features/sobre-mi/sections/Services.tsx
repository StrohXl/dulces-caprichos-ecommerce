import ButtonEffect from "@/components/buttons/ButtonEffect";
import CardService from "../components/cardService";
import services from "../data/services";
import networks from "@/data/networks";

export default function Services() {
  return (
    <section id="servicios" className="py-10 md:py-20 px-4 bg-rose-200/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary-700 text-sm font-bold font-dm-sans tracking-wider uppercase">
            Lo que ofrezco
          </span>
          <h2 className="text-4xl md:text-6xl font-[ui-serif]  text-gray-800 mt-2">
            Mis Servicios
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl font-dm-sans mx-auto">
            Desde pasteles de boda hasta cupcakes para fiestas infantiles, cada
            creación es elaborada con los mejores ingredientes y mucho amor.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 my-16 justify-center lg:grid-cols-5 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={service.id}
            >
              <CardService service={service} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8  ">
          <ButtonEffect classButton=" text-lg! bg-primary-700! px-12! py-3! rounded-[50rem]!" classBlob="bg-primary! translate-x-18 " >
            <a
              href={
                networks.find((n) => n.name === "WhatsApp")?.url ||
                "https://wa.me/"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar servicios ahora
            </a>
          </ButtonEffect>
        </div>
      </div>
    </section>
  );
}
