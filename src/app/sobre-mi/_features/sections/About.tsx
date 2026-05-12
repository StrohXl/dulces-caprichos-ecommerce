import ContainerWidth from "@/app/_components/ContainerWidth";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <ContainerWidth>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose-200 rounded-full opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rose-400 rounded-full opacity-50" />
            <div className="relative w-full aspect-[1] bg-white rounded-2xl p-2 shadow-2xl">
              <Image
                fill
                alt="viviana"
                src="/vivian-about.webp"
                className="w-full h-96 object-cover rounded-2xl object-top"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6">
                <div className="text-center">
                  <span className="text-4xl font-bold text-rose-500 font-[ui-serif]">5+</span>
                  <p className="text-gray-600 text-sm font-dm-sans">
                    Años de
                    <br />
                    experiencia
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-rose-600  font-dm-sans text-sm font-bold tracking-wider uppercase">
              Viviana Mayora
            </span>
            <h2 className="text-4xl md:text-6xl  font-[ui-serif] font-bold text-gray-800 mt-2 mb-6">
              Pasión por la Repostería
            </h2>
            <div className="space-y-4 text-gray-600 font-dm-sans text-lg leading-relaxed">
              <p>
                ¡Hola! Soy <strong>Viviana Mayora</strong>, repostera
                certificada con más de <strong>5 años de experiencia</strong>{" "}
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
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-rose-500">✓</span>
                </div>
                <span className="text-gray-700 font-medium">
                  Ingredientes Premium
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-rose-500">✓</span>
                </div>
                <span className="text-gray-700 font-medium">100% Casero</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-rose-500">✓</span>
                </div>
                <span className="text-gray-700 font-medium">
                  Envío a Domicilio
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-rose-500">✓</span>
                </div>
                <span className="text-gray-700 font-medium">
                  Diseños Personalizados
                </span>
              </div>
            </div>

          </div>
        </div>
      </ContainerWidth>
    </section>
  );
}
