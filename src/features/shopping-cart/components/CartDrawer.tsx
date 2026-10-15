"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaMinus, FaPlus, FaXmark } from "react-icons/fa6";
import { RiDeleteBinLine, RiShoppingCartLine } from "react-icons/ri";
import { useContextLayout } from "@/hooks/contextLayout";
import { ShoppingCart } from "@/types/shopping-cart.type";
import {
  minusProductShoppingCart,
  plusProductShoppingCart,
  removeProductShoppingCart,
} from "@/utils/shopping-cart.utils";
import EmptyShoppingCart from "./EmptyShoppingCart";

type CartDrawerProps = {
  shoppingCart: ShoppingCart;
  isCartOpen: boolean;
  onClose: () => void;
};

const drawerWidth = 350; // Width of the drawer in pixels

export default function CartDrawer({
  shoppingCart,
  isCartOpen,
  onClose,
}: CartDrawerProps) {
  const { setShoppingCart } = useContextLayout();
  const quantity = shoppingCart.products.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  return (
    <>
      <div
        aria-label="Cerrar carrito"
        onClick={onClose}
        className={`fixed cursor-default w-full top-0 left-0 z-[1000] bg-black/0 invisible duration-200  h-full ${isCartOpen && "visible! bg-black/40! "}`}
      ></div>
      <aside
        id="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className={`fixed right-0 top-0 z-[1100] sm:max-w-[350px] flex h-full w-full flex-col duration-300 bg-white shadow-2xl ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-5 ">
          <h2
            id="cart-drawer-title"
            className="font-dm-serif-display text-2xl text-primary"
          >
            Tu carrito
            <span className="ml-2 font-[inter] text-sm text-secondary">
              ({quantity} {quantity === 1 ? "artículo" : "artículos"})
            </span>
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar carrito"
            className="rounded-full p-2 text-xl cursor-pointer transition hover:bg-rose-50 cursor-pointer text-primary"
          >
            <FaXmark />
          </button>
        </div>

        {quantity > 0 ? (
          <div className="flex-1 overflow-y-auto px-5 sm:px-6">
            <ul className="divide-y divide-gray-200">
              {shoppingCart.products.map((product) => (
                <li key={product.id} className="flex gap-4 py-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-rose-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="line-clamp-2 font-dm-serif-display text-lg leading-tight text-primary">
                        <Link
                          href={{
                            pathname: `/${product.name.replace(" ", "-").toLowerCase()}`,
                          }}
                        >
                          {product.name}
                        </Link>
                      </h3>
                      <span className="shrink-0 font-[inter] text-sm font-semibold text-primary">
                        ${product.price * product.quantity}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-1 text-sm text-secondary">
                      ${product.price} c/u
                    </p>
                    <div className="mt-auto flex items-center gap-4 pt-3">
                      <div className="flex items-center rounded-md border border-gray-200 text-primary">
                        <button
                          type="button"
                          aria-label={`Disminuir cantidad de ${product.name}`}
                          onClick={() =>
                            setShoppingCart(
                              minusProductShoppingCart({
                                idProduct: product.id,
                              }),
                            )
                          }
                          className=" p-2 transition hover:bg-rose-50 cursor-pointer"
                        >
                          <FaMinus className="text-xs" />
                        </button>
                        <span className="min-w-8 text-center font-[inter] text-sm">
                          {product.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Aumentar cantidad de ${product.name}`}
                          onClick={() =>
                            setShoppingCart(
                              plusProductShoppingCart({
                                idProduct: product.id,
                              }),
                            )
                          }
                          className="p-2 transition hover:bg-rose-50 cursor-pointer"
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>
                      |
                      <span
                        className="text-primary duration-200 hover:text-secondary font-[inter] cursor-pointer"
                        onClick={() => {
                          const newList = removeProductShoppingCart({
                            product,
                          });
                          setShoppingCart(newList);
                        }}
                      >
                        Eliminar
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <EmptyShoppingCart />
        )}
        <div className="border-t border-gray-200 px-4 py-5 mt-4 flex justify-between">
          <span>Total:</span>
          <span className="font-bold text-primary font-[inter]">
            ${shoppingCart.totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="border-t border-gray-200 px-4 py-5">
          <div className="grid gap-3">
            {quantity > 0 ? (
              <Link
                href="/"
                onClick={onClose}
                className="w-full rounded-md bg-primary px-5 py-3 text-center font-[inter] text-white transition hover:bg-rose-400"
              >
                Finalizar compra
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="w-full cursor-not-allowed rounded-md bg-gray-300 px-5 py-3 font-[inter] text-white"
              >
                Finalizar compra
              </button>
            )}
            <Link
              href="/shopping-cart"
              onClick={onClose}
              className="w-full rounded-md border border-primary px-5 py-3 text-center font-[inter] text-primary transition hover:bg-primary hover:text-white duration-200"
            >
              Ver carrito
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
