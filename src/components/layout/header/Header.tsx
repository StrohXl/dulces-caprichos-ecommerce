"use client";

import ContainerWidth from "@/components/ContainerWidth";
import { useContextLayout } from "@/hooks/contextLayout";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import HeaderNavigation from "./HeaderNavigation";

import "./css/header.css";
import Image from "next/image";

export default function Header() {
  const { shoppingCart } = useContextLayout();

  return (
    <>
      <header
        className={`sticky w-full top-0 left-0 bg-white z-50 shadow-sm`}
      >
        <ContainerWidth className="relative">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <Link href="/" aria-label="Home" title="Inicio">
                <Image src="/logos/isotipo-1.png" alt="dulces" width={50} height={50} />
              </Link>
            </div>

            <HeaderNavigation />

            <div className=" flex items-center gap-8">
              <div className="input-search font-[inter] text-sm relative hidden lg:flex">
                <input
                  className={` px-4 bg-transparent border-1 border-gray-300 pl-5 py-[10px] outline-none rounded-full`}
                  type="text"
                  placeholder="Buscar productos..."
                />
                <button className="cursor-pointer text-primary absolute top-[50%] translate-y-[-50%] right-[20px] ">
                  <IoSearch />
                </button>
              </div>

              <div className="flex items-center lg:gap-6 gap-4 text-2xl md:text-2xl text-primary">
                <button className="cursor-pointer lg:hidden ">
                  <IoSearch />
                </button>
                <Link
                  title="Lista de favoritos"
                  aria-label="Favoritos"
                  href={"/favoritos"}
                  className="cursor-pointer hidden md:flex"
                >
                  <FaRegHeart />
                </Link>
                <Link
                  href={"/shopping-cart"}
                  aria-label="Carrito"
                  title="Carrito de compras"
                  className="cursor-pointer hidden outline-none relative md:flex"
                >
                  <RiShoppingCartLine />
                  {shoppingCart.products.length > 0 && (
                    <span className="quantity text-center absolute -top-[10px] -right-3 bg-primary-700 min-w-[20px] shadow-sm p-[2px] text-white text-xs rounded-full">
                      {shoppingCart.products.reduce(
                        (acc, item) => acc + item.quantity,
                        0,
                      )}
                    </span>
                  )}
                </Link>
                <button className="cursor-pointer md:hidden">
                  <HiOutlineMenuAlt1 className="rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </ContainerWidth>
      </header>
    </>
  );
}
