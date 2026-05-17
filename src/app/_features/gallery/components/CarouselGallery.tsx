import "../css/carousel-gallery.css";
import Image from "next/image";

const widthCard = 130;
const heightCard = 80;
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
];
const imagesReverse = images.slice().reverse();

export default function CarouselGallery() {
  return (
    <div className="container-carousel-gallery w-full overflow-hidden relative">
      {/* Fade lateral */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-white to-transparent" />

      <div style={{ marginLeft: `${widthCard}px` }}>
        <CarouselGalleryWrapper
          direction="left"
          carouselImages={imagesReverse}
        />
      </div>
      <div style={{ marginLeft: `${widthCard / 2}px` }}>
        <CarouselGalleryWrapper direction="left" carouselImages={images} />
      </div>
      <CarouselGalleryWrapper direction="left" carouselImages={imagesReverse} />
      <div style={{ marginLeft: `${widthCard / 2}px` }}>
        <CarouselGalleryWrapper direction="left" carouselImages={images} />
      </div>
      <div style={{ marginLeft: `${widthCard}px` }}>
        <CarouselGalleryWrapper
          direction="left"
          carouselImages={imagesReverse}
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
