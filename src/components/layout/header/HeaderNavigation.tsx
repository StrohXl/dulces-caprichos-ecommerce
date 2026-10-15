import ButtonEffect from "@/components/buttons/ButtonEffect";
import navegation from "@/data/navegation";
import Link from "next/link";

export default function HeaderNavigation() {
  return (
    <nav className="mr-auto links-navigation">
      <div className="hidden ms-auto md:flex items-center space-x-8">
        <nav className="space-x-8">
          {navegation.map((item) => {
            return (
              <Link
                className={` duration-200 font-[inter] text-primary `}
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
        <ButtonEffect classBlob="bg-rose-400!"  classButton="py-[8px]! bg-primary! px-6!">
          Pedir Ahora
        </ButtonEffect>
      </div>
    </nav>
  );
}
