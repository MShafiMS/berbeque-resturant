import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

const Modall = () => {
  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="http://www.pixel-industry.com/html/royal-plate/img/gallery/gallery-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://www.pixel-industry.com/html/royal-plate/img/gallery/gallery-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://www.pixel-industry.com/html/royal-plate/img/gallery/gallery-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://www.pixel-industry.com/html/royal-plate/img/gallery/gallery-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://www.pixel-industry.com/html/royal-plate/img/gallery/gallery-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://www.pixel-industry.com/html/royal-plate/img/gallery/gallery-1.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Modall;
