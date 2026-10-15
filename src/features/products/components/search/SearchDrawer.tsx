"use client";

import SearchBox from "@/features/products/components/search/SearchBox";
import { IoClose } from "react-icons/io5";

export default function SearchDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/30 lg:hidden"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        id="search-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Buscar productos"
        className="bg-white px-4 pb-5 pt-4 shadow-lg"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-dm-serif-display text-xl text-primary">
            Buscar productos
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar búsqueda"
            className="cursor-pointer p-1 text-2xl text-primary"
          >
            <IoClose />
          </button>
        </div>
        <SearchBox onNavigate={onClose} inlineResults />
      </section>
    </div>
  );
}
