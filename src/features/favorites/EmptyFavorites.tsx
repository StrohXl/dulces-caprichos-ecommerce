import { FaRegHeart } from "react-icons/fa6";

export default function EmptyFavorites() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div>
        <FaRegHeart className="text-5xl text-primary mb-4 mx-auto" />
        <p className="font-dm-serif-display text-xl text-primary">
          Tu lista de favoritos está vacía
        </p>
        <p className="mt-2 text-sm text-secondary">
          Agrega tus dulces favoritos para continuar.
        </p>
      </div>
    </div>
  );
}
