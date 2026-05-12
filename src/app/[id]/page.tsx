"use client";
import { useSearchParams } from "next/navigation";
import products from "../_data/products";
import RightColumn from "./_features/components/rightColumn";
import LeftColumn from "./_features/components/leftColumn";
import RelatedProducts from "./_features/components/relatedProducts";
import ContainerWidth from "../_components/ContainerWidth";
import Breadcrumb from "../_components/Breadcrumb";
import './css/header.css'

export default function ProductDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("number");
  const product = products.find((value) => value.id === Number(id));

  if (product) {
    return (
      <div className="min-h-screen pt-26">
        <ContainerWidth>
          <div className="text-rose-700!" >
          <Breadcrumb  />
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
  } else {
    return <div>Hola</div>;
  }
}
