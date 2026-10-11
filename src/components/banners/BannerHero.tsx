import Image from "next/image";

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
      className="relative min-h-[200px] -mt-18  px-4 md:px-6 lg:px-8 flex items-center justify-center flex-col"
    >
      <h1 className="text-6xl relative capitalize font-[ui-serif] font-bold">
        {title}
      </h1>
    </section>
  );
}
