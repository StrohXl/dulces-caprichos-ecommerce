import { Category } from "@/types/category";
import Link from "next/link";

export default function CardMiniCategory({ category }: { category: Category }) {
  return (
    <Link
      href={{
        pathname: category.url,
      }}
      className="flex galleta  flex-col px-6 card-mini-category duration-300 items-center justify-center h-full rounded-xl py-4 bg-[#FFF3F5]  text-primary duration-200 shadow-md"
      scroll={true}
    >
      <div className="text-3xl md:text-5xl">
        <category.icon />
      </div>
      <h2 className=" font-[inter] text-center text-primary  leading-[normal] font-medium mt-4">
        {category.name}
      </h2>
    </Link>
  );
}
