import { Product } from "@/types/product.type";
import ItemFavorite from "./ItemFavorite";
import EmptyFavorites from "./EmptyFavorites";

export default function ShowFavorites({ favorites }: { favorites: Product[] }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg max-w-[827.2px]">
      <h1 className="text-2xl md:text-3xl text-primary font-dm-serif-display mb-4">
        Lista de Favoritos
      </h1>
      {favorites.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <div className="border-t-1 border-gray-300 pt-6">
          {favorites.map((favorite, index) => (
            <div
              key={favorite.id}
              className={`${favorites.length - 1 != index && "border-b-1 border-gray-300 pb-4 mb-4"} `}
            >
              <ItemFavorite product={favorite} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
