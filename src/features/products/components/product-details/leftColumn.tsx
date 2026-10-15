import { Product } from "@/types/product.type";
import Image from "next/image";
import { useState } from "react";

export default function LeftColumn({ product }: { product: Product }) {
  const images = [product.image];
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-lg p-4 py-6 md:p-6 md:py-8 mb-4 shadow-sm shadow-gray-300">
        <div className="grid lg:grid-cols-[100px_1fr] gap-6 md:gap-4">
          <div className="flex lg:flex-col gap-2 mt-4 md:mt-0 w-full overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 md:w-full relative md:h-auto! aspect-[1] rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index
                    ? "border-primary-700"
                    : "border-[#fff3f5] hover:border-primary"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
          <div className="relative row-start-1 lg:col-start-2">
            <div className="aspect-square max-h-[500px] relative w-full bg-gray-100 rounded-lg overflow-hidden">
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
      <div className="bg-white rounded-lg p-4 py-6 md:p-6 md:py-8 shadow-sm shadow-gray-300">
        <h2 className="text-xl md:text-2xl font-dm-serif-display text-primary mb-4">Descripción</h2>
        <p className="text-secondary leading-relaxed text-sm font-[inter]">{product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil aut, obcaecati molestias harum aspernatur, sint perferendis quasi assumenda quas hic ipsa maiores numquam. Atque, asperiores? Suscipit praesentium sapiente itaque?</p>

     
      </div>
    </div>
  );
}
