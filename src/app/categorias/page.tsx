import Image from "next/image";
import BannerHero from "../_components/banners/BannerHero";
import ContainerWidth from "../_components/ContainerWidth";
import categories from "../_data/categories";
import Link from "next/link";

export default function Categories() {
  return (
    <>
     <BannerHero title="Categorias" urlImage="/cake.webp" />
     <section className="py-12">
      <ContainerWidth>
        <div className="grid gap-4 sm:grid-cols-2  " >
          {categories.map((category)=>{
            return(
              <div key={category.id} className="w-full lg:aspect-[2] shadow-sm shadow-gray-400 p-4 py-14 md:px-8 relative rounded-2xl overflow-hidden  flex items-center " >
                <Image src={category.imageUrl} fill className="object-cover object-[150px_center] sm:object-[50px_center] lg:object-[150px_center]  -z-20" alt={category.name} />
                <div className="bg-linear-to-r from-pink-600 from-40%  to-gray-50/50 absolute top-0 left-0 w-full h-full -z-10" ></div>
                <div className="font-[ui-serif]" >
                  <h2 className="text-white text-6xl md:text-8xl font-bold " >
                    <Link href={category.url} className="before:absolute before:top-0 before:left-0 before:w-full before:h-full "  >
                    {category.name}
                    </Link>
                  </h2>
                  <p className="text-white text-xl md:text-2xl max-w-[350px]  mt-4 line-clamp-2" >{category.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </ContainerWidth>
     </section>
    </>
  );
}
