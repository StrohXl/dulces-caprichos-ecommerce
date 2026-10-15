"use client";

import Image from "next/image";
import Link from "next/link";

import {
  minusProductShoppingCart,
  plusProductShoppingCart,
  removeProductShoppingCart,
} from "@/utils/shopping-cart.utils";
import { useContextLayout } from "@/hooks/contextLayout";
import { ProductShoppingCart } from "@/types/shopping-cart.type";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function ItemShoppingCart({
  product,
}: {
  product: ProductShoppingCart;
}) {
  const { setShoppingCart } = useContextLayout();

  return (
    <div
      key={product.id}
      className={`grid  grid-cols-[130px_1fr_100px] gap-6  font-[ui-sans]`}
    >
      <div className="w-full relative aspect-square rounded-lg overflow-clip">
        <Link
          href={{
            pathname: `/${product.name.replace(" ", "-").toLowerCase()}`,
          }}
        >
          <Image
            src={product.image}
            fill
            alt={product.name}
            className="rounded-full object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl font-dm-serif-display text-primary line-clamp-2 mb-2 ">
          <Link
            href={{
              pathname: `/${product.name.replace(" ", "-").toLowerCase()}`,
            }}
            className="duration-200 hover:text-secondary"
          >
            {product.name}
          </Link>
        </h4>
        <p className="text-secondary font-[inter] mb-2">
          {product.description}
        </p>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center border-1 border-gray-200 rounded-md w-fit text-primary  text-sm">
            <button
              onClick={() => {
                const newList = minusProductShoppingCart({
                  idProduct: product.id,
                });

                setShoppingCart(newList);
              }}
              className="px-1 outline-none ps-3  flex items-center justify-center cursor-pointer "
            >
              <FaMinus />
            </button>
            <span className="w-8 h-full py-[6px] font-dm-serif-display text-center font-medium">
              {product.quantity}
            </span>
            <button
              onClick={() => {
                const newList = plusProductShoppingCart({
                  idProduct: product.id,
                });
                setShoppingCart(newList);
              }}
              className="px-1 outline-none pe-3 flex items-center justify-center cursor-pointer "
            >
              <FaPlus />
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
      <div className="text-end font-[inter] ">
        <div className="text-secondary">
          <span className="">$</span>
          {product.price}
          <span className="ms-1">c/u</span>
        </div>

        <div className="text-2xl text-primary">
          <span className="">$</span>
          {product.price * product.quantity}
        </div>
      </div>
    </div>
  );
}
