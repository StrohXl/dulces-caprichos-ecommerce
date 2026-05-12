import { RiShoppingCartLine } from "react-icons/ri";

export default function EmptyShoppingCart() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-2xl md:text-3xl text-rose-900 font-[ui-sans]">
        Carrito de compras
      </h1>
      <div >
        <RiShoppingCartLine className="text-6xl text-gray-500 mb-4 mx-auto" />
        <p className="text-sm text-gray-600">
          Tu carrito de compras está vacío.
        </p>
      </div>
    </div>
  );
}
