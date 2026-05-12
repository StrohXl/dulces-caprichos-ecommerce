import { Product } from "../_types/product.type";

const key = "Favorites";

function getFavorites(): Product[] {
  const favorites = window.localStorage.getItem(key);
  return favorites ? JSON.parse(favorites) : [];
}

function addProductToFavorites({
  product,
}: {
  product: Product;
}): Product[] | [] {
  const favorites = getFavorites();
  const findProduct = favorites.find((item) => item.id == product.id);
  if (!findProduct) {
    const newList: Product[] = [...favorites, product];
    window.localStorage.setItem(key, JSON.stringify(newList));
    return newList;
  }
  return favorites;
}

function removeProductFavorites({ product }: { product: Product }) {
  const favorites = getFavorites();
  const findProduct = favorites.find((item) => item.id == product.id);
  if (findProduct) {
    const newList: Product[] = favorites.filter((item) => item.id !== product.id);
    window.localStorage.setItem(key, JSON.stringify(newList));
    return newList;
  }
  return favorites;
}


export { getFavorites, addProductToFavorites, removeProductFavorites };
