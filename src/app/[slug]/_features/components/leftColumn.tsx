import { Product } from "@/app/_types/product.type";
import Image from "next/image";
import { useState } from "react";

export default function LeftColumn({ product }: { product: Product }) {
  const images = [product.image];
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm shadow-gray-300">
        <div className="grid grid-cols-[100px_1fr] gap-6">
          <div className="flex md:flex-col gap-2 mt-4 md:mt-0 w-full overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 md:w-full relative md:h-auto! aspect-[1] rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index
                    ? "border-rose-400"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
          <div className="relative">
            <div className="aspect-square max-h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden">
              <Image
                fill
                src={images[selectedImage]}
                alt={product.name}
                className=" object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-lg p-6 shadow-sm shadow-gray-300">
        <h2 className="text-xl md:text-2xl  font-[ui-serif] text-rose-900 mb-4">Descripción</h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>

        {product.details && (
          <div className="mt-6">
            <h3 className="text-xl md:text-2xl font-[ui-serif] text-rose-900 mb-3">
              Características principales
            </h3>
            <ul className="space-y-2">
              {product.details.map((value, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  {value.detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
