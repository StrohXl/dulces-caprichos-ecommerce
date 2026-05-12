import Image from "next/image";
import Breadcrumb from "../Breadcrumb";

export default function BannerHero({
  title,
  urlImage,
}: {
  title: string;
  urlImage: string;
}) {
  return (
    <section
      id="hero"
      className="relative min-h-[400px] pt-8  px-4 md:px-6 lg:px-8 flex items-center justify-center flex-col"
    >
      <Image
        src={urlImage}
        fill
        className="object-cover grayscale-100 "
        alt={title}
      />
      <div className="absolute w-full h-full top-0 left-0 bg-rose-50 opacity-60"></div>
      <h1 className="text-6xl relative capitalize font-[ui-serif]  mb-4 font-bold">
        {title}
      </h1>
      <Breadcrumb />
    </section>
  );
}
