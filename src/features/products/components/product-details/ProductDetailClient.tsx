"use client";

import { Product } from "@/types/product.type";
import RightColumn from "@/features/products/components/product-details/rightColumn";
import LeftColumn from "@/features/products/components/product-details/leftColumn";
import RelatedProducts from "@/features/products/components/product-details/relatedProducts";
import ContainerWidth from "@/components/ContainerWidth";
import Breadcrumb from "@/components/Breadcrumb";

export default function ProductDetailClient({
  product,
  products,
}: {
  product: Product;
  products: Product[];
}) {
  return (
    <div className="min-h-screen">
      <ContainerWidth>
        <div className="text-primary-700!">
          <Breadcrumb />
        </div>
        <div className="py-6 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <LeftColumn product={product} />
            <RightColumn product={product} />
          </div>
          <RelatedProducts product={product} products={products} />
        </div>
      </ContainerWidth>
    </div>
  );
}
