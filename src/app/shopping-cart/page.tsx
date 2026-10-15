"use client";

import ContainerWidth from "@/components/ContainerWidth";
import { useContextLayout } from "@/hooks/contextLayout";
import ShowShoppingCart from "@/features/shopping-cart/components/ShowShoppingCart";

export default function ShoppingCart() {
  const { shoppingCart } = useContextLayout();
  return (
    <section >
      <ContainerWidth>
           <ShowShoppingCart shoppingCart={shoppingCart} />
      </ContainerWidth>
    </section>
  );
}
