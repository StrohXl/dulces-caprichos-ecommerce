import Breadcrumb from "@/components/Breadcrumb";
import ContainerWidth from "@/components/ContainerWidth";
import CountUp from "@/components/CountUp";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12 px-4 bg-[#FFFCFA] ">
      <ContainerWidth>
        <Breadcrumb />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-700/20 rounded-full opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-700/80 rounded-full opacity-50" />
            <div className="relative w-full aspect-[1] bg-white rounded-2xl p-2 shadow-2xl">
              <Image
                fill
                alt="viviana"
                src="/vivian-about.webp"
                className="w-full h-96 object-cover rounded-2xl object-top"
              />
            </div>
          </div>
          <div>
            <span className="text-primary text-sm font-bold tracking-wider uppercase">
              Viviana Mayora
            </span>
            <h2 className="text-4xl md:text-6xl  font-dm-serif-display text-primary mt-2 mb-6">
              Pasión por la Repostería
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                ¡Hola! Soy{" "}
                <strong className="text-primary">Viviana Mayora</strong>,
                repostera certificada con más de{" "}
                <strong className="text-primary">5 años de experiencia</strong>{" "}
                creando obras deliciosas para toda ocasión.
              </p>
              <p>
                Mi viaje comenzó en una pequeña cocina en la casa de mi abuela,
                donde descubrí mi pasión por transformar ingredientes simples en
                creaciones extraordinarias. Hoy, esa pasión se ha convertido en
                mi profesión y razón de vivir.
              </p>
              <p>
                Mi compromiso es simple: ofrecerte productos horneados frescos,
                con un sabor excepcional y una presentación que robe suspiros.
                Ya sea tu boda perfecta, el cumpleaños de un ser querido o
                simplemente un dulce capricho, estaré aquí para hacer realidad
                tus deseos reposteros.
              </p>
            </div>
            {/* Features */}
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="">
                  <span className="text-primary flex justify-center items-center font-dm-serif-display text-3xl md:text-5xl font-bold">
                    <CountUp from={0} to={5} />
                    <span className="text-3xl ">+</span>
                  </span>
                </div>
                <span className=" font-semibold">Años de Trayectoria</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="">
                  <span className="text-primary flex justify-center items-center font-dm-serif-display text-3xl md:text-5xl font-bold">
                    <CountUp from={0} to={100} />
                    <span className="text-3xl ">%</span>
                  </span>
                </div>
                <span className=" font-semibold">Productos Caseros</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="">
                  <span className="text-primary flex justify-center items-center font-dm-serif-display text-3xl md:text-5xl font-bold">
                    <CountUp from={0} to={200} />
                    <span className="text-3xl ">+</span>
                  </span>
                </div>
                <span className=" font-semibold">Clientes Satisfechos</span>
              </div>
            </div>
          </div>
        </div>
      </ContainerWidth>
    </section>
  );
}
