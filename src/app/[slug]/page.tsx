import { notFound } from "next/navigation";
import products from "../_data/products";
import ProductDetailClient from "./ProductDetailClient";
import { cleanText } from "../_utils/cleanText";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => cleanText(item.name) === slug);
  if (product) {
    return <ProductDetailClient product={product} products={products} />;
  } else {
    notFound();
  }
}
