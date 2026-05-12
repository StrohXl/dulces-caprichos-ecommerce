"use client";

import { Product } from "@/app/_types/product.type";
import { removeProductFavorites } from "@/app/_utils/favorites.utils";
import { useContextLayout } from "@/app/hooks/contextLayout";
import Image from "next/image";
import Link from "next/link";
import { FaRegTrashAlt } from "react-icons/fa";

export default function ItemFavorite({ product }: { product: Product }) {
  const { setFavorites } = useContextLayout();

  return (
    <div className="grid grid-cols-2 md:grid-cols-[60px_1fr_100px_100px] items-center gap-3 md:gap-6 font-[ui-sans]">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
        <Link
          className="duration-200 hover:text-rose-800"
          href={{
            pathname: `/${product.name}`,
            query: {
              number: product.id,
            },
          }}
        >
          <Image
            fill
            src={product.image}
            alt={product.name}
            className=" object-cover"
          />
        </Link>
      </div>
      <div>
        <h4 className="text-lg">
          <Link
            className="duration-200 hover:text-rose-800"
            href={{
              pathname: `/${product.name}`,
              query: {
                number: product.id,
              },
            }}
          >
            {product.name}
          </Link>
        </h4>
      </div>
      <div>${product.price}</div>
      <div className="text-red-500 flex justify-end text-xl">
        <button
          onClick={() => {
            const newList = removeProductFavorites({ product });
            setFavorites(newList);
          }}
          className="cursor-pointer duration-200 hover:text-rose-800"
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}
