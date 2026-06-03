import "../css/carousel-gallery.css";
import Image from "next/image";

const widthCard = 130;
const heightCard = 80;

const carousel_1 = [
  "/products/torta-pina.jpg",
  "/products/tortaquesillo.jpg",
  "/products/quesillo.png",
  "/products/carrot-cake.jpg",
  "/products/red-velvet.jpg",
  "/products/matilda.jpg",
  "/products/capitas.jpg",
  "/products/tres-leches.jpg",
];

const carousel_2 = [
  "/products/beso-de-angel.jpg",
  "/products/cuchareables.jpg",
  "/products/brownies.jpg",
  "/products/galleta-clasica.jpg",
  "/products/galleta-red-velvet.jpg",
  "/products/galleta-triple-chocolate.jpg",
  "/products/maxi-alfajores.jpg",
  "/products/mini-dulces.jpg",
];

const carousel_3 = [
  "/products/ponquesitos.jpg",
  "/products/torta-pina.jpg",
  "/products/tortaquesillo.jpg",
  "/products/quesillo.png",
  "/products/carrot-cake.jpg",
  "/products/red-velvet.jpg",
  "/products/matilda.jpg",
  "/products/capitas.jpg",
];

const carousel_4 = [
  "/products/tres-leches.jpg",
  "/products/beso-de-angel.jpg",
  "/products/cuchareables.jpg",
  "/products/brownies.jpg",
  "/products/galleta-clasica.jpg",
  "/products/galleta-red-velvet.jpg",
  "/products/galleta-triple-chocolate.jpg",
  "/products/maxi-alfajores.jpg",
];

const carousel_5 = [
  "/products/mini-dulces.jpg",
  "/products/ponquesitos.jpg",
  "/products/torta-pina.jpg",
  "/products/tortaquesillo.jpg",
  "/products/quesillo.png",
  "/products/carrot-cake.jpg",
  "/products/red-velvet.jpg",
  "/products/matilda.jpg",
];

export default function CarouselGallery() {
  return (
    <div className="container-carousel-gallery w-full overflow-hidden relative">
      {/* Fade lateral */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-white to-transparent" />

      <div style={{ marginLeft: `${widthCard}px` }}>
        <CarouselGalleryWrapper
          direction="left"
          carouselImages={carousel_1}
        />
      </div>
      <div style={{ marginLeft: `${widthCard / 2}px` }}>
        <CarouselGalleryWrapper direction="left" carouselImages={carousel_2} />
      </div>
      <CarouselGalleryWrapper direction="left" carouselImages={carousel_3} />
      <div style={{ marginLeft: `${widthCard / 2}px` }}>
        <CarouselGalleryWrapper direction="left" carouselImages={carousel_4} />
      </div>
      <div style={{ marginLeft: `${widthCard}px` }}>
        <CarouselGalleryWrapper
          direction="left"
          carouselImages={carousel_5}
        />
      </div>
    </div>
  );
}

const CarouselGalleryWrapper = ({
  carouselImages,
  direction,
}: {
  carouselImages: string[];
  direction: "left" | "right";
}) => {
  const widthWrapper = carouselImages.length * widthCard * 2;
  return (
    <div
      style={{
        width: `${widthWrapper}px`,
      }}
      className={`carousel-gallery-wrapper carousel-gallery-${direction} flex`}
    >
      {carouselImages.map((src, index) => (
        <CardGallery src={src} key={index} />
      ))}
      {carouselImages.map((src, index) => (
        <CardGallery src={src} key={index} />
      ))}
    </div>
  );
};

const CardGallery = ({ src }: { src: string }) => {
  return (
    <div
      style={{
        width: `${widthCard}px`,
        height: `${heightCard}px`,
      }}
      className={`relative overflow-hidden`}
    >
      <Image src={src} alt={src} fill className="object-cover" />
    </div>
  );
};
