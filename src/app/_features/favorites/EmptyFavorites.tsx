import { FaRegHeart } from "react-icons/fa6";

export default function EmptyFavorites() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-2xl md:text-3xl text-rose-900 font-[ui-sans]">
        Lista de Favoritos
      </h1>
      <div>
        <FaRegHeart className="text-6xl text-gray-500 mb-4 mx-auto" />
        <p className="text-sm text-gray-600">
          Tu lista de favoritos está vacía.
        </p>
      </div>
    </div>
  );
}
