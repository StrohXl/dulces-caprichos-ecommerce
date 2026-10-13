import ContainerWidth from "@/components/ContainerWidth";
import Image from "next/image";


export default function Hero() {
  return (
    <>
      <section  className="hero pb-12 pt-4" >
        <ContainerWidth>
          <div className=" flex flex-col items-center justify-center relative">
            <div className="w-full h-uato aspect-[1.45] relative max-w-[500px]">
            <Image  src="/logos/logotipo-1.png" alt="Dulces caprichos" fill className="object-contain" />

            </div>
          </div>
        </ContainerWidth>
      </section>
    </>
  );
}
