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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_300px] lg:grid-cols-3 ">
            <LeftColumn product={product} />
            <RightColumn product={product} />
          </div>
        </div>
      </ContainerWidth>
      <div className="bg-[#FFFcfa] py-14" >
        <ContainerWidth>
          <RelatedProducts product={product} products={products} />
        </ContainerWidth>
      </div>
    </div>
  );
}
