import { Product } from "@/types/product.type";
import { FaPlus, FaMinus, FaRegHeart, FaHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";
import { useState } from "react";
import { useContextLayout } from "@/hooks/contextLayout";
import {
  addProductToFavorites,
  removeProductFavorites,
} from "@/utils/favorites.utils";
import categories from "@/data/categories";
import { addProductToShoppingCart } from "@/utils/shopping-cart.utils";

export default function RightColumn({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { favorites, setFavorites, setShoppingCart } = useContextLayout();

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 py-8 sticky shadow-sm shadow-gray-300 top-[100px] font-[ui-serif]">
        <div className="flex justify-between mb-4 ">
          <span className="font-medium  text-gray-700">
            {categories.find((item) => item.id == product.id)?.name}
          </span>
          {!favorites.some((item) => item.id == product.id) ? (
            <button
              onClick={() => {
                const newList = addProductToFavorites({ product });
                setFavorites(newList);
              }}
              className="cursor-pointer text-primary-700 text-xl outline-none"
            >
              <FaRegHeart />
            </button>
          ) : (
            <button
              onClick={() => {
                const newList = removeProductFavorites({ product });
                setFavorites(newList);
              }}
              className="cursor-pointer text-xl text-primary-700"
            >
              <FaHeart />
            </button>
          )}
        </div>
        <h1 className="text-xl font-[ui-serif] md:text-2xl  text-gray-800 mb-2">
          {product?.name}
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 text-sm font-dm-sans ">
            {product.description}
          </p>
        </div>
        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-[ui-serif] text-primary font-medium">
              <span className="text-lg ">$</span>
              {product.price}.00
            </span>
          </div>
        </div>
        {/* Quantity */}
        <div className="mb-6 ">
          <label className="block  font-medium text-gray-700 mb-2">
            Cantidad
          </label>
          <div className="flex items-center border-1 border-gray-200 rounded-md w-fit ">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 outline-none ps-6  flex items-center justify-center cursor-pointer "
            >
              <FaMinus />
            </button>
            <span className="w-8  h-full py-2 font-[ui-sans] text-center font-medium">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((preValue) => preValue + 1)}
              className="px-2 outline-none pe-6 flex items-center justify-center cursor-pointer "
            >
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3 mb-6 mt-12 text-lg">
          <button className="w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 px-4 rounded-md transition-colors  cursor-pointer">
            Comprar ahora
          </button>
          <button
            onClick={() => {
              const newList = addProductToShoppingCart({
                product: { ...product, quantity },
              });
              setShoppingCart(newList);
            }}
            className="w-full border-1 border-primary text-primary font-medium py-3 px-4 rounded-md hover:text-white hover:bg-primary cursor-pointer transition-colors flex items-center justify-center gap-2"
          >
            Agregar al carrito
            <LuShoppingCart className="text-xl" />
          </button>
        </div>

        {/* Benefits */}
        <div className="space-y-3 pt-4 border-t border-gray-200">
          {product.freeShipping && (
            <div className="flex items-center gap-3 text-sm">
              <MdOutlineDeliveryDining className=" text-green-600 text-2xl" />
              <div>
                <p className="font-medium text-gray-800">Envío gratis</p>
                <p className="text-gray-500 text-xs font-dm-sans">
                  A toda Cumana
                </p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-3 text-sm">
            <LuShieldCheck className=" text-[#3483fa] text-2xl" />
            <div>
              <p className="font-medium text-gray-800">Compra protegida</p>
              <p className="text-gray-500 text-xs font-dm-sans">
                Recibe lo que pagaste o te devolvemos el dinero
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
