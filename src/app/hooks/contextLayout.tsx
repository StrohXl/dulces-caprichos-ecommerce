"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { Product } from "../_types/product.type";
import { getFavorites } from "../_utils/favorites.utils";
import { ShoppingCart } from "../_types/shopping-cart.type";
import { getShoppingCart } from "../_utils/shopping-cart.utils";

type Layout = {
  favorites: Product[];
  setFavorites: Dispatch<SetStateAction<Product[]>>;
  shoppingCart: ShoppingCart;
  setShoppingCart: Dispatch<SetStateAction<ShoppingCart>>;
};

const ContainerContextLayout = createContext<Layout | undefined>(undefined);

export default function ContextLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
    totalPrice: 0,
    products: [],
  });

  useLayoutEffect(() => {
    // eslint-disable-next-line
    setFavorites(getFavorites());
    setShoppingCart(getShoppingCart());
  }, []);

  return (
    <ContainerContextLayout.Provider
      value={{
        favorites,
        setFavorites,
        shoppingCart,
        setShoppingCart,
      }}
    >
      {children}
    </ContainerContextLayout.Provider>
  );
}

export function useContextLayout() {
  const context = useContext(ContainerContextLayout);
  if (!context) {
    throw new Error(
      "useContextLayout debe usarse dentro de ContainerContextLayout",
    );
  }
  return context;
}
