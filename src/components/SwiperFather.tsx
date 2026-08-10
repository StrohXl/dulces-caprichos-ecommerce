import { ReactNode } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { SwiperModule } from "swiper/types";

export default function SwiperFather({
  children,
  props,
  modules,
}: {
  children: ReactNode;
  modules?: SwiperModule[];
  props?: SwiperProps;
}) {
  const newModules: SwiperModule[] = [Navigation, Pagination];
  modules?.forEach((module) => {
    if (!newModules.includes(module)) {
      newModules.push(module);
    }
  });

  return (
    <>
      <Swiper modules={newModules} {...props}>
        {children}
      </Swiper>
    </>
  );
}
