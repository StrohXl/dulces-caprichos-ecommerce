import categories from "@/data/categories";
import products from "@/features/products/data/products";
import { cleanText } from "@/utils/cleanText";

export function searchProducts(query: string) {
  const normalizedQuery = cleanText(query.trim());

  if (!normalizedQuery) {
    return [];
  }

  return products.filter((product) => {
    const matchesName = cleanText(product.name).includes(normalizedQuery);
    const category = categories.find((item) => item.id === product.category);
    const matchesCategory = category
      ? cleanText(category.name).includes(normalizedQuery)
      : false;

    return matchesName || matchesCategory;
  });
}
