import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

function Carousel({ items, renderItem }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
        1500: { slidesPerView: 5 },
      }}
      className={styles.carousel}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={item.id || idx}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
