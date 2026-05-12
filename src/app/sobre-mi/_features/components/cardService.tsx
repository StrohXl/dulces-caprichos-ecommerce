import Link from "next/link";
import { Service } from "../type/service.type";

export default function CardService({ service }: { service: Service }) {
  return (
    <div key={service.id} className="">
      <div className="relative overflow-hidden w-full aspect-[1]  rounded-full group">
        <img
          src={service.urlImage}
          alt={service.name}
          className=" h-full w-full duration-300 object-cover group-hover:scale-[1.1]"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg md:text-xl leading-[normal] text-center font-[ui-serif] text-rose-900">
          <Link href={service.link} className="duration-300 hover:text-pink-600" >{service.name}</Link>
        </h3>
      </div>
    </div>
  );
}
