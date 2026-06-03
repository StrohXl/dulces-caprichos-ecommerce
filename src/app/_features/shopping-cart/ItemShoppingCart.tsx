'use client'

import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

import {
  ProductShoppingCart,
  ShoppingCart,
} from "@/app/_types/shopping-cart.type";
import Image from "next/image";
import Link from "next/link";
import {
  minusProductShoppingCart,
  plusProductShoppingCart,
  removeProductShoppingCart,
} from "@/app/_utils/shopping-cart.utils";
import { useContextLayout } from "@/app/hooks/contextLayout";

export default function ItemShoppingCart({
  product,
}: {
  product: ProductShoppingCart;
}) {
  const { setShoppingCart } = useContextLayout();

  return (
    <div
      key={product.id}
      className={`grid  grid-cols-[130px_1fr_200px] gap-4  font-[ui-sans]`}
    >
      <div className="w-full relative aspect-square rounded-lg overflow-clip">
        <Link
          href={{
            pathname: product.name,
            query: {
              number: product.id,
            },
          }}
          className="duration-200 hover:text-rose-800"
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
        <h4 className="text-xl font-medium line-clamp-2 h-[56px]">
          <Link
            href={{
              pathname: product.name,
              query: {
                number: product.id,
              },
            }}
            className="duration-200 hover:text-rose-800"
          >
            {product.name}
          </Link>
        </h4>
        <div className="mt-auto">
          <span className="text-3xl font-semibold font-[ui-serif] text-rose-900">
            <span className="text-lg ">$</span>
            {product.price}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center flex gap-2 items-center justify-end">
          <button
            className="text-sm cursor-pointer border-1 border-gray-400 h-[30px] w-[30px] rounded-sm flex items-center justify-center"
            onClick={() => {
              const newList = minusProductShoppingCart({
                idProduct: product.id,
              });

              setShoppingCart(newList);
            }}
          >
            <FaMinus />
          </button>
          <span className="w-[30px] font-dm-sans">{product.quantity}</span>
          <button
            className="text-sm cursor-pointer border-1 border-gray-400 h-[30px] w-[30px] rounded-sm flex items-center justify-center"
            onClick={() => {
              const newList = plusProductShoppingCart({
                idProduct: product.id,
              });
              setShoppingCart(newList);
            }}
          >
            <FaPlus />
          </button>
        </div>
        <div className="text-red-500 flex justify-end text-2xl mt-auto">
          <button
            onClick={() => {
              const newList = removeProductShoppingCart({
                product,
              });
              setShoppingCart(newList);
            }}
            className="cursor-pointer duration-200 hover:text-rose-800"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}
