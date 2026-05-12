import Image from "next/image";

export default function Banner1({
  urlImage,
  children,
}: {
  urlImage: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-linear-to-br from-rose-400 to-rose-950 rounded-xl overflow-hidden shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 relative h-48 md:h-auto md:aspect-[1.5]">
          <Image
            fill
            src={urlImage}
            alt="Celulares en oferta"
            className="w-full h-full object-cover top-0 left-0"
          />
        </div>
        <div className="p-8 md:w-1/2 row-start-1 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
