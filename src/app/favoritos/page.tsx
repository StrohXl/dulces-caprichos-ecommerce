"use client";

import ContainerWidth from "@/components/ContainerWidth";
import EmptyFavorites from "@/features/favorites/EmptyFavorites";
import ShowFavorites from "@/features/favorites/ShowFavorites";
import { useContextLayout } from "@/hooks/contextLayout";

export default function Favoritos() {
  const { favorites } = useContextLayout();
  return (
    <section>
      <ContainerWidth>
        {favorites.length > 0 ? <ShowFavorites favorites={favorites} /> : <EmptyFavorites />}
      </ContainerWidth>
    </section>
  );
}
