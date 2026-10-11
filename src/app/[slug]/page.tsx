import { notFound } from "next/navigation";
import products from "@/features/products/data/products";
import ProductDetailClient from "@/features/products/components/product-details/ProductDetailClient";
import { cleanText } from "@/utils/cleanText";

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
