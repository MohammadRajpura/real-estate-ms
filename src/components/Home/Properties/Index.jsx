import React from "react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Properties = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        pagination={{
          type: "fraction",
          renderFraction: (currentClass, totalClass) => {
            return `<span class="${currentClass}">Page ${currentClass}</span> of <span class="${totalClass}">${totalClass}</span>`;
          },
        }}
        modules={[Pagination]}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
          (item, index) => (
            <SwiperSlide key={index}>Slide {index}</SwiperSlide>
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
