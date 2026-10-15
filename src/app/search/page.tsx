import Breadcrumb from "@/components/Breadcrumb";
import ContainerWidth from "@/components/ContainerWidth";
import CardProduct from "@/features/products/components/cards/CardProduct";
import products from "@/features/products/data/products";
import { searchProducts } from "@/features/products/utils/searchProducts";
import Image from "next/image";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const params = await searchParams;
  const query = Array.isArray(params.q) ? params.q[0] ?? "" : params.q ?? "";
  const results = query.trim() ? searchProducts(query) : products;

  return (
    <section className="bg-[#FFFCFA] py-12">
      <ContainerWidth>
        <Breadcrumb />
        <div className="mb-10 mt-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="mb-2 font-dm-serif-display text-2xl text-primary md:text-3xl">
              {query.trim()
                ? `Resultados para “${query.trim()}”`
                : "Buscar productos"}
            </h1>
            <p>
              {query.trim()
                ? "Encuentra tu próximo dulce favorito."
                : "Explora nuestros productos y encuentra tu próximo favorito."}
            </p>
          </div>
          <span className="rounded-full bg-[#FFF3F5] px-5 py-[10px] text-sm font-medium text-primary">
            {results.length} {results.length === 1 ? "Producto" : "Productos"}
          </span>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {results.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <Image
              src="/stove.png"
              className="translate-x-5"
              alt=""
              width={150}
              height={150}
            />
            <p className="max-w-[550px] text-center text-xl text-gray-800">
              ¡Oops! No encontramos productos que coincidan con tu búsqueda.
            </p>
          </div>
        )}
      </ContainerWidth>
    </section>
  );
}
