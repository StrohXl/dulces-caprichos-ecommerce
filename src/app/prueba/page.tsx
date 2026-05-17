"use client";

import { motion } from "framer-motion";
import ContainerWidth from "../_components/ContainerWidth";

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

const rows = [
  {
    offset: "ml-32",
    items: [0, 1],
  },
  {
    offset: "ml-12",
    items: [2, 3, 4],
  },
  {
    offset: "ml-0",
    items: [5, 6, 7],
  },
  {
    offset: "ml-12",
    items: [8, 9, 0],
  },
  {
    offset: "ml-36",
    items: [1, 2],
  },
];

export default function BrickCarousel() {
  return (
    <div>
      <ContainerWidth>
        <section className="relative w-full overflow-hidden scale-[.5]  py-20">
          {/* Fade lateral */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-rose-50 to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-rose-50 to-transparent" />

          <div className="">
            {rows.map((row, rowIndex) => (
              <InfiniteRow
                key={rowIndex}
                images={row.items.map((index) => images[index])}
                offset={row.offset}
                reverse={rowIndex % 2 === 0}
                speed={20 + rowIndex * 5}
              />
            ))}
          </div>
        </section>
      </ContainerWidth>
    </div>
  );
}

type InfiniteRowProps = {
  images: string[];
  offset?: string;
  reverse?: boolean;
  speed?: number;
};

function InfiniteRow({
  images,
  offset = "",
  reverse = false,
  speed = 25,
}: InfiniteRowProps) {
  const duplicated = [...images, ...images];

  return (
    <div className={`relative flex ${offset}`}>
      <motion.div
        className="flex"
        animate={{
          x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicated.map((image, index) => (
          <BrickCard key={index} image={image} />
        ))}
      </motion.div>
    </div>
  );
}

function BrickCard({ image }: { image: string }) {
  return (
    <div
      className="
        relative
        h-32
        w-60
        flex-shrink-0
        overflow-hidden
        shadow-2xl
      "
    >
      <img
        src={`${image}?auto=format&fit=crop&w=1200&q=80`}
        alt=""
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          hover:scale-110
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />
    </div>
  );
}
