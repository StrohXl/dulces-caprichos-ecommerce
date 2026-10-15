"use client";

import ContainerWidth from "@/components/ContainerWidth";
import ShowFavorites from "@/features/favorites/ShowFavorites";
import { useContextLayout } from "@/hooks/contextLayout";

export default function Favoritos() {
  const { favorites } = useContextLayout();
  return (
    <section className="pt-4">
      <ContainerWidth>
        <ShowFavorites favorites={favorites} />
      </ContainerWidth>
    </section>
  );
}
