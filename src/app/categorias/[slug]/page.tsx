import categories from "@/data/categories";
import products from "@/features/products/data/products";
import { notFound } from "next/navigation";
import CategoryDetailsClient from "./CategoryDetailsClient";

export default async function IdCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  
  const { slug } = await params;
  const category = categories.find((item) => item.url === `/categorias/${slug}`);

  if (category) {
    const productsCategory = products.filter(
      (product) => product.category == Number(category.id),
    );
    return (
      <CategoryDetailsClient
        category={category}
        productsCategory={productsCategory}
      />
    );
  } else {
    notFound();
  }
}
