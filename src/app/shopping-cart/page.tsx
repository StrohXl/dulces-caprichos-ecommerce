"use client";

import ContainerWidth from "@/components/ContainerWidth";
import { useContextLayout } from "@/hooks/contextLayout";
import EmptyShoppingCart from "@/features/shopping-cart/components/EmptyShoppingCart";
import ShowShoppingCart from "@/features/shopping-cart/components/ShowShoppingCart";

export default function ShoppingCart() {
  const { shoppingCart } = useContextLayout();
  return (
    <section >
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
