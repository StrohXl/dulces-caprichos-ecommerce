import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function CardCategory({ category }: { category: Category }) {
  const IconCategory = category.icon;
  return (
    <div
      key={category.id}
      className="shadow-sm relative rounded-xl overflow-hidden flex flex-col"
    >
      <div className="relative w-full aspect-[1.2]">
        <Image
          src={category.imageUrl}
          fill
          className="object-cover"
          alt={category.name}
        />
      </div>

      <div className="p-4 pb-6 h-full bg-white flex flex-col gap-4">
        <div className="grid grid-cols-[50px_1fr] items-center gap-4">
          <div className="w-full aspect-square  bg-[#FFF3F5] rounded-md flex items-center justify-center">
            <IconCategory className="text-primary text-3xl" />
          </div>
          <h2 className="text-xl font-dm-serif-display text-primary">
            {category.name}
          </h2>
        </div>
        <p className="mb-4 md:mb-0 hidden md:block">{category.description}</p>
        <Link
          href={category.url}
          className="text-primary border-1 mt-auto border-primary block py-[6px]  block md:py-[10px] flex items-center justify-center gap-2 rounded-lg font-medium duration-200 hover:bg-primary hover:text-white"
        >
          Ver productos
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
