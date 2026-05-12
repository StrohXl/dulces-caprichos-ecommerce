import { Product } from "@/app/_types/product.type";
import ItemFavorite from "./ItemFavorite";

export default function ShowFavorites({ favorites }: { favorites: Product[] }) {
  return (
    <div className="bg-white p-6 rounded-lg max-w-[827.2px]">
      <h1 className="text-2xl md:text-3xl font-[ui-sans] text-rose-900 mb-6 pb-6 border-b-1 border-gray-300">
        Lista de Favoritos
      </h1>
      <div>
        {favorites.map((favorite,index) => (
            <div key={favorite.id} className={`${favorites.length - 1 != index && "border-b-1 border-gray-300 pb-4 mb-4"} `}>
                <ItemFavorite product={favorite} />
            </div>
        ))}
      </div>
    </div>
  );
}
