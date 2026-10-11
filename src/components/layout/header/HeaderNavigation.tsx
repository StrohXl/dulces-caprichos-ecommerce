import ButtonEffect from "@/components/buttons/ButtonEffect";
import navegation from "@/data/navegation";
import Link from "next/link";

export default function HeaderNavigation() {
  return (
    <nav className="mr-auto ms-12 links-navigation">
      <div className="hidden ms-auto md:flex items-center space-x-8">
        <nav className="space-x-8">
          {navegation.map((item) => {
            return (
              <Link
                className={` duration-200 font-[ui-serif] text-lg text-primary `}
                key={item.title}
                href={item.link}
              >
                {item.title}
                {item.children.length > 0 && (
                  <div className="navigation-menu"></div>
                )}
              </Link>
            );
          })}
        </nav>
        <ButtonEffect classBlob="bg-primary!"  classButton="py-[8px]! bg-rose-400! px-6!">
          Pedir Ahora
        </ButtonEffect>
      </div>
    </nav>
  );
}
