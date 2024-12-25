import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Properties = () => {
  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
          (item, index) => (
            <SwiperSlide>Slide {index}</SwiperSlide>
          )
        )}
      </Swiper>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Properties;
