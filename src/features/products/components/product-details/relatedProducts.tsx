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
    <div >
      <h2 className="text-xl font-dm-serif-display text-primary md:text-2xl lg:text-3xl mb-8">
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
