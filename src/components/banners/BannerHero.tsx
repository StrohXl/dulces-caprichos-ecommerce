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
      className="relative min-h-[200px] pb-10 pt-2 flex items-center justify-center flex-col"
    >
      <div className="w-full h-uato aspect-[1.45] relative max-w-[250px]">
        <Image
          src="/logos/logotipo-1.png"
          alt="Dulces caprichos"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
