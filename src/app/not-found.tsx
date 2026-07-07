import Link from "next/link";
import ButtonEffect from "@/app/_components/buttons/ButtonEffect";
import networks from "@/app/_data/networks";

export default function NotFound() {
  const waUrl = networks.find((n) => n.name === "WhatsApp")?.url || "https://wa.me/";

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-[ui-serif] text-gray-800">404</h1>
        <h2 className="text-2xl md:text-3xl mt-4">Página no encontrada</h2>
        <p className="text-gray-600 mt-4">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>

        <div className="flex flex-col  gap-4 items-center justify-center mt-8">
          <ButtonEffect>
            <Link href="/">Volver al inicio</Link>
          </ButtonEffect>

          <ButtonEffect classButton="bg-rose-500" classBlob="bg-pink-700">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              Solicitar servicio (WhatsApp)
            </a>
          </ButtonEffect>
        </div>
      </div>
    </main>
  );
}
