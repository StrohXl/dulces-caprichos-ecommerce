"use client";

import ContainerWidth from "../_components/ContainerWidth";
import { useContextLayout } from "../hooks/contextLayout";
import EmptyShoppingCart from "../_features/shopping-cart/components/EmptyShoppingCart";
import ShowShoppingCart from "../_features/shopping-cart/components/ShowShoppingCart";

export default function ShoppingCart() {
  const { shoppingCart } = useContextLayout();
  return (
    <section className="py-32 pb-20 ">
      <ContainerWidth>
        {shoppingCart.products.length > 0 ? (
          <ShowShoppingCart shoppingCart={shoppingCart} />
        ) : (
          <EmptyShoppingCart />
        )}
      </ContainerWidth>
    </section>
  );
}
