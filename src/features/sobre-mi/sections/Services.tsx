import ButtonEffect from "@/components/buttons/ButtonEffect";
import CardService from "../components/cardService";
import services from "../data/services";
import networks from "@/data/networks";
import ContainerWidth from "@/components/ContainerWidth";

export default function Services() {
  return (
    <section id="servicios" className="py-10 md:py-20 px-4 ">
      <ContainerWidth>
                <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold tracking-wider uppercase">
            Lo que ofrezco
          </span>
          <h2 className="text-4xl md:text-6xl font-dm-serif-display  text-primary mt-2">
            Mis Servicios
          </h2>
          <p className="mt-6 max-w-[650px]  mx-auto text-lg">
            Desde pasteles de boda hasta cupcakes para fiestas infantiles, cada
            creación es elaborada con los mejores ingredientes y mucho amor.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 my-16 justify-center lg:grid-cols-5 gap-8 lg:gap-12 mx-auto max-w-5xl">
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
          <ButtonEffect classButton="text-lg bg-primary px-8! py-3!" classBlob="bg-rose-400 translate-x-18 " >
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
      </ContainerWidth>
    </section>
  );
}
