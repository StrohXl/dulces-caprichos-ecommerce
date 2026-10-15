"use client";

import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import menuMobile from "@/const/menuMobile";

export default function MobileMenuDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <button
        type="button"
        aria-label="Cerrar menú"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
        className={`fixed inset-0 z-[1000] cursor-default bg-black/0 transition duration-200 ${
          isOpen ? "visible bg-black/40" : "invisible"
        }`}
      />
      <aside
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed right-0 top-0 z-[1100] flex h-full w-[80%] max-w-[350px] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
          <h2
            id="mobile-menu-title"
            className="font-dm-serif-display text-2xl text-primary"
          >
            Menú
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="cursor-pointer rounded-full p-2 text-xl text-primary transition hover:bg-rose-50"
          >
            <FaXmark />
          </button>
        </div>

        <nav aria-label="Navegación principal" className="flex-1 px-5 py-4">
          <ul className="divide-y divide-gray-100 text-2xl font-[inter]">
            {menuMobile.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  onClick={onClose}
                  className="block py-4 text-secondary duration-200 hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-gray-200 px-5 py-5">
          <Link
            href="/arma-tu-torta"
            onClick={onClose}
            className="block w-full rounded-md bg-primary px-5 py-3 text-center font-[inter] text-white transition hover:bg-rose-400"
          >
            Pedir ahora
          </Link>
        </div>
      </aside>
    </>
  );
}
