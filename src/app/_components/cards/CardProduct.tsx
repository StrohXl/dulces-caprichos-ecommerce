"use client";

import { Product } from "@/app/_types/product.type";
import {
  addProductToFavorites,
  removeProductFavorites,
} from "@/app/_utils/favorites.utils";
import { addProductToShoppingCart } from "@/app/_utils/shopping-cart.utils";
import { useContextLayout } from "@/app/hooks/contextLayout";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart, FaTruck } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";

export default function CardProduct({ product }: { product: Product }) {
  const { favorites, setFavorites, setShoppingCart } = useContextLayout();

  return (
    <div>
      <div className="card-media  w-full rounded-t-xl aspect-[1.3] relative overflow-hidden group">
        <Link
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
            className="object-cover duration-300 group-hover:scale-[1.05]"
          />
        </Link>
        {!favorites.some((item) => item.id == product.id) ? (
          <button
            onClick={() => {
              const newList = addProductToFavorites({ product });
              setFavorites(newList);
            }}
            className="cursor-pointer outline-none text-white absolute top-4 right-4  text-2xl rounded-full"
          >
            <FaRegHeart />
          </button>
        ) : (
          <button
            onClick={() => {
              const newList = removeProductFavorites({ product });
              setFavorites(newList);
            }}
            className="cursor-pointer outline-none  absolute text-rose-700 top-4 right-4  text-2xl rounded-full"
          >
            <FaHeart />
          </button>
        )}
      </div>
      <div className="pt-4 bg-white border-b-4 font-dm-sans border-rose-400 rounded-b-xl p-4">
        <h4 className="text-rose-900 text-lg md:text-xl font-[ui-serif] font-medium line-clamp-2 mb-2 min-h-[2.5rem]">
          <Link
            href={{
              pathname: `/${product.name}`,
              query: {
                number: product.id,
              },
            }}
            className=""
          >
            {product.name}
          </Link>
        </h4>
        <p className="text-sm text-gray-600 mb-2 line-clamp-3">
          {product.description}
        </p>
        <div className="flex items-baseline mt-2  text-rose-900 font-[ui-serif]">
          <span>$</span>
          <span className="text-2xl font-semibold ">{product.price}</span>
        </div>
        <button
          onClick={() => {
            const newList = addProductToShoppingCart({
              product: { ...product, quantity: 1 },
            });
            setShoppingCart(newList);
          }}
          className="w-full py-2 border-rose-400 mt-4 duration-200 hover:bg-rose-400 hover:text-white flex text-sm md:text-base items-center gap-2 justify-center  text-rose-400 font-medium cursor-pointer border-1 text-center rounded-lg"
        >
          Agregar al carrito <RiShoppingCartLine className="text-lg hidden sm:flex" />
        </button>
      </div>
    </div>
  );
}
