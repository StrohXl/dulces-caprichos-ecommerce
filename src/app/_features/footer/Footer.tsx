import ContainerWidth from "@/app/_components/ContainerWidth";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 px-4">
      <ContainerWidth>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl">🎂</span>
                <span className="ml-2 text-xl font-serif font-bold">
                  Dulce Repostería
                </span>
              </div>
              <p className="text-gray-700">
                Creando momentos dulces e inolvidables desde 2021.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a
                    href="#inicio"
                    className="hover:text-rose-400 transition-colors"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-rose-400 transition-colors"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-rose-400 transition-colors"
                  >
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-rose-400 transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Pasteles Personalizados</li>
                <li>Cupcakes Artesanales</li>
                <li>Macarons Franceses</li>
                <li>Galletas Decoradas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-700">
                <li>📍 Ciudad de México</li>
                <li>📱 +52 55 1234 5678</li>
                <li>✉️ hola@dulcereposteria.com</li>
                <li>📸 @dulcereposteria</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© 2026 Dulce Repostería. Todos los derechos reservados.</p>
          </div>
      </ContainerWidth>
    </footer>
  );
}
