"use client";

import { useCallback, useState } from "react";
import ContainerWidth from "@/components/ContainerWidth";
import { useContextLayout } from "@/hooks/contextLayout";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import HeaderNavigation from "./HeaderNavigation";
import CartDrawer from "@/features/shopping-cart/components/CartDrawer";
import SearchBox from "@/features/products/components/search/SearchBox";
import SearchDrawer from "@/features/products/components/search/SearchDrawer";
import MobileMenuDrawer from "./MobileMenuDrawer";

import "./css/header.css";
import Image from "next/image";

export default function Header() {
  const { shoppingCart } = useContextLayout();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const closeSearch = useCallback(() => setIsSearchOpen(false), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <header className={`sticky w-full top-0 left-0 bg-white z-50 shadow-sm`}>
        <ContainerWidth className="relative">
          <div className="grid grid-cols-[auto_auto_1fr] gap-6 justify-between items-center py-3">
            <div className="flex items-center md:mr-4">
              <Link href="/" aria-label="Home" title="Inicio">
                <Image
                  src="/logos/isotipo-1.png"
                  alt="dulces"
                  width={50}
                  height={50}
                />
              </Link>
            </div>

            <HeaderNavigation />

            <div>
              <div className="flex items-center justify-end gap-6 text-2xl md:text-2xl text-primary">
                <div className="input-search relative hidden w-full max-w-[325px] lg:flex">
                  <SearchBox />
                </div>

                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Buscar productos"
                  aria-expanded={isSearchOpen}
                  aria-controls="search-drawer"
                  className="cursor-pointer lg:hidden"
                >
                  <IoSearch />
                </button>

                <Link
                  title="Lista de favoritos"
                  aria-label="Favoritos"
                  href={"/favoritos"}
                  className="cursor-pointer"
                >
                  <FaRegHeart />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  aria-label="Carrito"
                  title="Carrito de compras"
                  aria-expanded={isCartOpen}
                  aria-controls="cart-drawer"
                  className="cursor-pointer outline-none relative"
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
                </button>
                
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(true)}
                  aria-label="Abrir menú"
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu-drawer"
                  className="cursor-pointer md:hidden"
                >
                  <HiOutlineMenuAlt1 className="rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </ContainerWidth>
      </header>
      <CartDrawer
        isCartOpen={isCartOpen}
        shoppingCart={shoppingCart}
        onClose={closeCart}
      />
      <SearchDrawer isOpen={isSearchOpen} onClose={closeSearch} />
      <MobileMenuDrawer isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
