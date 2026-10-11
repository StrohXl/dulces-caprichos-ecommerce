import { Category } from "@/types/category";
import Link from "next/link";

export default function CardMiniCategory({ category }: { category: Category }) {
  return (
    <Link
      href={{
        pathname: category.url,
      }}
      className="flex galleta  flex-col px-6 card-mini-category duration-300 items-center justify-center h-full rounded-xl py-4  text-primary duration-200 hover:bg-gray-900/5"
      scroll={true}
    >
      <div className="text-3xl md:text-5xl">
        <category.icon />
      </div>
      <h2 className=" font-[ui-serif] text-center text-gray-900  leading-[normal] font-medium mt-4">
        {category.name}
      </h2>
    </Link>
  );
}
