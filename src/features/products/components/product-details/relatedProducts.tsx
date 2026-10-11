import CardProduct from "@/features/products/components/cards/CardProduct";
import { Product } from "@/types/product.type";
import { useContextLayout } from "@/hooks/contextLayout";

export default function RelatedProducts({
  product,
  products,
}: {
  product: Product;
  products: Product[];
}) {
  const { favorites } = useContextLayout();

  const relatedProducts = products.filter((producto) =>
    product?.relatedProducts.includes(producto.id),
  );

  return (
    <div className="mt-8">
      <h2 className="text-xl font-[ui-serif] text-primary md:text-2xl mb-4">
        Productos relacionados
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map((producto) => {
          return (
            <CardProduct
              key={producto.id}
              product={producto}
            />
          );
        })}
      </div>
    </div>
  );
}
