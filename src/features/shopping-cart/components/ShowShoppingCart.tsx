import { ShoppingCart } from "@/types/shopping-cart.type";
import ItemShoppingCart from "../ItemShoppingCart";
import Link from "next/link";
import EmptyShoppingCart from "./EmptyShoppingCart";

export default function ShowShoppingCart({
  shoppingCart,
}: {
  shoppingCart: ShoppingCart;
}) {
  const quantity = shoppingCart.products.reduce(
    (acumulator, item) => acumulator + item.quantity,
    0,
  );

  return (
    <div className="grid md:grid-cols-[1fr_30%] gap-6 pt-4">
      <div className="bg-white rounded-lg p-6">
        <h1 className="text-2xl md:text-3xl text-primary font-dm-serif-display ">
          Carrito de compras
        </h1>
        {quantity > 0 ? (
          <>
            <div className="flex justify-end font-[inter] mb-2">
              <span>Precio</span>
            </div>
            <div className="flex flex-col gap-4 border-t-1 border-gray-300">
              {shoppingCart.products.map((product, index) => {
                return (
                  <div
                    key={product.id}
                    className={`${shoppingCart.products.length - 1 != index && "border-b-1  border-gray-300"}  py-6`}
                  >
                    <ItemShoppingCart product={product} />
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="mt-4" ><EmptyShoppingCart /></div>
        )}
      </div>
      <div>
        {quantity > 0 && (
          <div className="bg-white rounded-lg p-6 h-fit sticky top-[99px]">
            <div className="pb-4 border-b-1 border-gray-300">
              <div className="flex justify-between font-[inter]">
                <span>
                  {quantity} {quantity === 1 ? "artículo" : "artículos"}
                </span>
                <span>${shoppingCart.totalPrice}</span>
              </div>
              <div className="flex justify-between font-[inter]">
                <span>Transporte</span>
                <span>Gratis</span>
              </div>
            </div>
            <div className="flex justify-between mt-12 font-bold text-2xl pb-4 mb-4 border-b-1 border-gray-300 text-primary font-[inter]">
              <span>Total</span>
              <span>${shoppingCart.totalPrice}</span>
            </div>
            <div className="mt-5">
              <Link
                href={"/"}
                className="w-full bg-primary text-white block  rounded-full text-center duration-200 hover:bg-rose-400 font-[inter]! py-3! text-lg!"
              >
                Finalizar Compra
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
