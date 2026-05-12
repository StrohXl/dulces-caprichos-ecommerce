"use client";

import ButtonEffect from "@/app/_components/buttons/ButtonEffect";
import ContainerWidth from "@/app/_components/ContainerWidth";
import navegation from "@/app/_data/navegation";
import { useContextLayout } from "@/app/hooks/contextLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";

export default function Header() {
  const { shoppingCart } = useContextLayout();
  const [activeHeader, setActiveHeader] = useState(false);

  const updateHeader = () => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      setActiveHeader(true);
    } else {
      setActiveHeader(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    updateHeader();

    addEventListener("scroll", updateHeader);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 ${activeHeader && "bg-white shadow-sm"}`}
      >
        <ContainerWidth>
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <Link href="/" aria-label="Home" title="Inicio" >
                <img src={"/logo.png"} alt="dulces" width={40} height={40} />
              </Link>
            </div>
            <nav className="mr-auto ms-12">
              <div className="hidden ms-auto md:flex items-center space-x-8">
                <nav className="space-x-8">
                  {navegation.map((item) => {
                    return (
                      <Link
                        className={` duration-200 font-dm-sans text-rose-900 hover:opacity-60 `}
                        key={item.title}
                        href={item.link}
                      >
                        {item.title}
                        {item.children.length > 0 && (
                          <div className="navigation-menu"></div>
                        )}
                      </Link>
                    );
                  })}
                </nav>
                <ButtonEffect classButton="py-[8px]! bg-rose-400! px-6!">
                  Pedir Ahora
                </ButtonEffect>
              </div>
            </nav>
            <div className=" flex items-center gap-8">
              <div className="input-search relative hidden lg:flex">
                <input
                  className={`${activeHeader ? "bg-gray-100" : "bg-white"} px-4 pl-5 py-2 outline-none rounded-full`}
                  type="text"
                  placeholder="Buscar..."
                />
                <button className="cursor-pointer absolute top-[50%] translate-y-[-50%] right-[20px] ">
                  <IoSearch />
                </button>
              </div>

              <div className="flex items-center lg:gap-6 gap-4 text-2xl md:text-2xl text-rose-900">
                <button className="cursor-pointer lg:hidden ">
                  <IoSearch />
                </button>
                <Link  title="Lista de favoritos" aria-label="Favoritos"  href={'/favoritos'} className="cursor-pointer hidden md:flex">
                  <FaRegHeart />
                </Link>
                <Link href={'/shopping-cart'} aria-label="Carrito" title="Carrito de compras" className="cursor-pointer hidden outline-none relative md:flex">
                  <RiShoppingCartLine />
                  {shoppingCart.products.length > 0 && (
                    <span className="quantity text-center absolute -top-[10px] -right-3 bg-rose-400 min-w-[20px] shadow-sm p-[2px] text-white text-xs rounded-full">
                      {shoppingCart.products.reduce((acc,item)=>acc + item.quantity,0)}
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
