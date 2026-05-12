import ContainerWidth from "@/app/_components/ContainerWidth";
import Image from "next/image";


export default function Hero() {
  return (
    <>
      <section  className="hero" >
        <ContainerWidth>
          <div className="py-40 pb-20 flex flex-col items-center justify-center relative">
            <div className="absolute top-0 left-0 w-80 h-80 bg-rose-600/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-rose-600/20 blur-3xl rounded-full"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-600/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-[40%] w-20 h-20 bg-rose-600/40 blur-3xl rounded-full"></div>
            <Image width={200} height={250} src="/logo.png" alt="Dulces caprichos"  quality={100} className="w-full mx-auto max-w-[200px] aspect-[0.800] " />
            <h1 className="text-5xl font-[ui-serif] max-w-[300px] text-rose-900 font-bold text-center">
              DULCES CAPRICHOS
              <span className="text-sm block">PASTELERIA CREATIVA</span>
            </h1>
          </div>
        </ContainerWidth>
      </section>
    </>
  );
}
