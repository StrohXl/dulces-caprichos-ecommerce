"use client";

import { Product } from "@/types/product.type";
import { cleanText } from "@/utils/cleanText";
import {
  addProductToFavorites,
  removeProductFavorites,
} from "@/utils/favorites.utils";
import { addProductToShoppingCart } from "@/utils/shopping-cart.utils";
import { useContextLayout } from "@/hooks/contextLayout";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";

export default function CardProduct({ product }: { product: Product }) {
  const { favorites, setFavorites, setShoppingCart } = useContextLayout();
  const pathname = cleanText(product.name);

  const heartActive = !favorites.some((item) => item.id == product.id);

  return (
    <div className="h-full flex flex-col" >
      <div className="card-media  w-full rounded-t-xl aspect-[1.2] relative overflow-hidden group">
        <Link
          href={{
            pathname: `/${pathname}`,
          }}
        >
          <Image
            fill
            src={product.image}
            alt={product.name}
            className="object-cover duration-300 group-hover:scale-[1.05]"
          />
        </Link>
        <ButtonHeart heartActive={heartActive} product={product} setFavorites={setFavorites} />
      </div>
      <div className="pt-4 bg-white border-x-1 flex-1 border-x-primary/50 border-b-4 font-dm-serif-display border-primary rounded-b-xl p-2 md:p-4 flex flex-col">
        
        <h4 className="text-primary md:text-lg md:text-xl line-clamp-2 mb-2">
          <Link
            href={{
              pathname: `/${product.name.replace(" ", "-").toLowerCase()}`,
            }}
          >
            {product.name}
          </Link>
        </h4>

        <p className="text-sm text-secondary mb-2 md:mb-4 line-clamp-3 font-dm-sans">
          {product.description}
        </p>

        <div className="text-primary font-dm-serif-display  mt-auto  text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4">
          <span>$</span>
          <span>{product.price}</span>
        </div>


        <button
          onClick={() => {
            const newList = addProductToShoppingCart({
              product: { ...product, quantity: 1 },
            });
            setShoppingCart(newList);
          }}
          className="w-full py-[6px] border-primaryduration-200 hover:bg-primary hover:text-white flex items-center gap-2 justify-center  text-primary cursor-pointer border-1 text-center rounded-md text-sm md:py-2 font-[inter]"
        >
          Agregar al carrito{" "}
          <RiShoppingCartLine className="text-lg hidden sm:flex" />
        </button>
      </div>
    </div>
  );
}

const ButtonHeart = ({
  heartActive,
  product,
  setFavorites,
}: {
  heartActive: boolean;
  product: Product;
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>>;
}) => {
  return (
    <button
      onClick={() => {
        let newList = [];
        if (heartActive) {
          newList = addProductToFavorites({ product });
        } else {
          newList = removeProductFavorites({ product });
        }
        setFavorites(newList);
      }}
      className="cursor-pointer group-hover:right-4! group-hover:opacity-100 duration-200 opacity-0 outline-none  absolute bg-[#FFF3F5] p-2 text-primary top-4 right-3  text-xl rounded-full"
    >
      {heartActive ? <FaRegHeart /> : <FaHeart />}
    </button>
  );
};
