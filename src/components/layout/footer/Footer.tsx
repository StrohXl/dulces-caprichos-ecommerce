import ContainerWidth from "@/components/ContainerWidth";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
<footer
  className="bg-white font-dm-sans"
>
  <ContainerWidth className="px-6 pt-2 sm:px-8" > 


    <div
      className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.15fr] lg:gap-14"
    >
      <div>
        <Link
          href="/"
          aria-label="Dulces caprichos, inicio"
          className="inline-block  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#870A4B]"
        >
          <Image alt="Dulces Caprichos" src="/logos/logotipo-1.png" width={800} height={800} className="max-w-[200px]  h-auto! " />
        </Link>

      </div>

      <nav aria-label="Descubre">
        <h3 className="font-[ui-serif] mb-5 text-lg font-semibold ">
          Descubre
        </h3>
        <ul className="space-y-3 text-base">
          <li>
            <Link href="/categorias" className="hover:text-[#870A4B] hover:underline">
              Categorías
            </Link>
          </li>
          <li>
            <Link href="/sobre-mi" className="hover:text-[#870A4B] hover:underline">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link href="/arma-tu-torta" className="hover:text-[#870A4B] hover:underline">
              Arma tu torta
            </Link>
          </li>
          <li>
            <Link href="/pedidos" className="hover:text-[#870A4B] hover:underline">
              Pedir ahora
            </Link>
          </li>
        </ul>
      </nav>

      <nav aria-label="Tus pedidos">
        <h3 className="font-[ui-serif] mb-5 text-lg font-semibold">
          Tus pedidos
        </h3>
        <ul className="space-y-3 text-base">
          <li>
            <Link href="/como-pedir" className="hover:text-[#870A4B] hover:underline">
              Cómo pedir
            </Link>
          </li>
          <li>
            <Link
              href="/preguntas-frecuentes"
              className="hover:text-[#870A4B] hover:underline"
            >
              Preguntas frecuentes
            </Link>
          </li>
          <li>
            <Link
              href="/conservacion-y-alergenos"
              className="hover:text-[#870A4B] hover:underline"
            >
              Conservación y alérgenos
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-[#870A4B] hover:underline">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <h3
          className="mb-5 text-lg font-semibold font-[ui-serif]"
        >
          ¿Una idea especial?
        </h3>
        <p className="max-w-[280px] text-base leading-relaxed">
          Cuéntame qué tienes en mente. Hagamos de tu celebración algo único.
        </p>
        <Link
          href="/contacto"
          className="mt-6 inline-flex items-center justify-center gap-5 rounded-full border border-[#E8CCD7] px-6 py-3 text-base font-medium text-[#870A4B] transition-colors hover:bg-[#F5E0E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#870A4B]"
        >
          Hablemos
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>

    <div
      className="flex gap-5 border-t border-[#E8CCD7] py-6 mt-6 text-sm justify-center"
    >
      <p>© Dulces caprichos. Todos los derechos reservados.</p>
    </div>
  </ContainerWidth>
</footer>

  );
}
