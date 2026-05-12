import { ShoppingCart } from "@/app/_types/shopping-cart.type";
import ButtonEffect from "@/app/_components/buttons/ButtonEffect";
import ItemShoppingCart from "../ItemShoppingCart";
import Link from "next/link";

export default function ShowShoppingCart({
  shoppingCart,
}: {
  shoppingCart: ShoppingCart;
}) {
  return (
    <div className="grid md:grid-cols-[1fr_30%] gap-6">
      <div className="bg-white rounded-lg p-6">
        <h1 className="text-2xl md:text-3xl text-rose-900 font-[ui-sans] mb-6 pb-6 border-b-1 border-gray-300">
          Carrito de compras
        </h1>
        <div className="flex flex-col gap-4">
          {shoppingCart.products.map((product, index) => {
            return (
              <div
                key={product.id}
                className={`${shoppingCart.products.length - 1 != index && "border-b-1  border-gray-300 pb-4"} `}
              >
                <ItemShoppingCart product={product} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="bg-white rounded-lg p-6 h-fit sticky top-[99px]">
          <div className="pb-4 border-b-1 border-gray-300">
            <div className="flex justify-between font-dm-sans">
              <span>
                {shoppingCart.products.reduce(
                  (acumulator, item) => acumulator + item.quantity,
                  0,
                )}{" "}
                artículos
              </span>
              <span>${shoppingCart.totalPrice}</span>
            </div>
            <div className="flex justify-between font-dm-sans">
              <span>Transporte</span>
              <span>Gratis</span>
            </div>
          </div>
          <div className="flex justify-between font-dm-sans mt-4 font-bold text-2xl pb-4 mb-4 border-b-1 border-gray-300">
            <span>Total</span>
            <span>${shoppingCart.totalPrice}</span>
          </div>
          <div>
            <Link href={'/'} className="w-full bg-rose-400 text-white block  rounded-full text-center duration-200 hover:bg-rose-800 font-semibold font-dm-sans! py-3! text-lg!">
              Finalizar Compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
