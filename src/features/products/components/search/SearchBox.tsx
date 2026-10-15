"use client";

import { SubmitEvent, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import categories from "@/data/categories";
import { searchProducts } from "@/features/products/utils/searchProducts";
import { cleanText } from "@/utils/cleanText";
import { FaXmark } from "react-icons/fa6";

export default function SearchBox({
  onNavigate,
  inlineResults = false,
}: {
  onNavigate?: () => void;
  inlineResults?: boolean;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const results = useMemo(() => searchProducts(query).slice(0, 6), [query]);
  const trimmedQuery = query.trim();

  function submitSearch(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const destination = trimmedQuery
      ? `/search?q=${encodeURIComponent(trimmedQuery)}`
      : "/search";

    setIsOpen(false);
    onNavigate?.();
    router.push(destination);
  }

  return (
    <div className="relative w-full font-[inter] text-sm">
      <form
        role="search"
        onSubmit={submitSearch}
        className="relative flex w-full"
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => window.setTimeout(() => setIsOpen(false), 150)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsOpen(false);
            }
          }}
          aria-label="Buscar productos por nombre o categoría"
          aria-autocomplete="list"
          placeholder="Buscar productos..."
          className="w-full rounded-full border border-primary/50 focus:text-primary text-primary/50 bg-transparent py-[10px] pl-5 pr-18 outline-none transition-colors focus:border-primary"
        />
        <button
          type="button"
          aria-label="limpiar"
          onClick={() => setQuery("")}
          className={`absolute right-[43px] top-1/2 hidden  -translate-y-1/2 cursor-pointer text-secondary ${query.length > 0 && "block!"}`}
        >
          <FaXmark />
        </button>
        <button
          type="submit"
          aria-label="Buscar"
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-lg text-primary"
        >
          <IoSearch />
        </button>
      </form>

      {isOpen && trimmedQuery && (
        <div
          className={`${inlineResults ? "relative mt-3" : "absolute left-0 right-0 top-full z-[60] mt-2"} overflow-hidden md:rounded-xl md:border border-primary/10 bg-white text-secondary md:shadow-lg`}
        >
          {results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto py-2 md:py-4 ">
              {results.map((product) => {
                const category = categories.find(
                  (item) => item.id === product.category,
                );

                return (
                  <li key={product.id}>
                    <Link
                      href={`/${cleanText(product.name)}`}
                      onClick={onNavigate}
                      className="flex items-center gap-3 px-4 py-2 transition-colors hover:bg-[#FFF3F5]"
                    >
                      <Image
                        src={product.image}
                        alt=""
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium text-primary">
                          {product.name}
                        </span>
                        <span className="block truncate text-xs">
                          {category?.name ?? "Producto"} · ${product.price}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="px-4 py-5  text-center">
              No encontramos coincidencias.
            </p>
          )}
          <button
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              setIsOpen(false);
              onNavigate?.();
              router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
            }}
            className="w-full  border-t border-primary/10 px-4  pt-4 md:py-3 text-left font-medium text-primary transition-colors cursor-pointer hover:text-secondary "
          >
            Ver todos los resultados para “{trimmedQuery}”
          </button>
        </div>
      )}
    </div>
  );
}
