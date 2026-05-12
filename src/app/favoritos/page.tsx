"use client";

import ContainerWidth from "../_components/ContainerWidth";
import EmptyFavorites from "../_features/favorites/EmptyFavorites";
import ShowFavorites from "../_features/favorites/ShowFavorites";
import { useContextLayout } from "../hooks/contextLayout";

export default function Favoritos() {
  const { favorites } = useContextLayout();
  return (
    <section className="py-32 pb-20 ">
      <ContainerWidth>
        {favorites.length > 0 ? <ShowFavorites favorites={favorites} /> : <EmptyFavorites />}
      </ContainerWidth>
    </section>
  );
}
