import { Category } from "@/app/_types/category";
import Link from "next/link";

export default function CardMiniCategory({ category }: { category: Category }) {
  return (
    <Link
      href={{
        pathname:category.url,
        query:{
          id: category.id
        }
      }}
      className="flex flex-col card-mini-category duration-300 hover:shadow-rose-700/50 items-center justify-center px-4 py-6 h-full bg-white rounded-xl hover:shadow-md shadow-sm "
      scroll={true}
    >
      <div className="text-4xl md:text-5xl text-rose-400">
        <category.icon />
      </div>
      <h2 className="md:text-lg font-[ui-serif] text-center  leading-[normal] font-medium mt-4 text-rose-900">
        {category.name}
      </h2>
    </Link>
  );
}
