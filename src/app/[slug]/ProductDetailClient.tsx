"use client";

import { Product } from "@/_types/product.type";
import RightColumn from "./_features/components/rightColumn";
import LeftColumn from "./_features/components/leftColumn";
import RelatedProducts from "./_features/components/relatedProducts";
import ContainerWidth from "../../components/ContainerWidth";
import Breadcrumb from "../../components/Breadcrumb";

export default function ProductDetailClient({
  product,
  products,
}: {
  product: Product;
  products: Product[];
}) {
  return (
    <div className="min-h-screen pt-26">
      <ContainerWidth>
        <div className="text-rose-700!">
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
