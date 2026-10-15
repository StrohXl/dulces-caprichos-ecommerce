"use client";

import { removeProductFavorites } from "@/utils/favorites.utils";
import { useContextLayout } from "@/hooks/contextLayout";
import Image from "next/image";
import Link from "next/link";
import { FaRegTrashAlt } from "react-icons/fa";
import { Product } from "@/types/product.type";

export default function ItemFavorite({ product }: { product: Product }) {
  const { setFavorites } = useContextLayout();

  return (
    <div className="grid grid-cols-[60px_1fr_auto_auto] md:grid-cols-[60px_1fr_100px_100px] items-center gap-4 md:gap-6 font-[ui-sans]">
      <div className="relative w-full aspect-square rounded-md overflow-hidden">
        <Link
          className="duration-200 hover:text-rose-800"
          href={{
            pathname: `/${product.name.replace(" ", "-").toLowerCase()}`,
          }}
        >
          <Image
            fill
            src={product.image}
            alt={product.name}
            className="object-cover"
          />
        </Link>
      </div>
      <div>
        <h4 className="md:text-lg">
          <Link
            className="duration-200 text-primary hover:text-secondary font-dm-serif-display"
            href={{
              pathname: `/${product.name.replace(" ", "-").toLowerCase()}`,
            }}
          >
            {product.name}
          </Link>
        </h4>
      </div>
      <div className="text-primary" >${product.price}</div>
      <div className="text-secondary flex justify-end text-xl">
        <button
          onClick={() => {
            const newList = removeProductFavorites({ product });
            setFavorites(newList);
          }}
          className="text-sm md:text-base cursor-pointer duration-200 hover:text-primary"
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}
