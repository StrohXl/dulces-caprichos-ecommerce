import { RiShoppingCartLine } from "react-icons/ri";

export default function EmptyShoppingCart() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <RiShoppingCartLine className="mb-4 text-5xl text-primary" />
      <p className="font-dm-serif-display text-xl text-primary">
        Tu carrito está vacío
      </p>
      <p className="mt-2 text-sm text-secondary">
        Agrega tus dulces favoritos para continuar.
      </p>
    </div>
  );
}
