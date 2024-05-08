import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from '../assets/carousel1.jpg'
import banner2 from '../assets/carousel2.jpg'
import banner3 from '../assets/carousel3.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

export default function Slider() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-[600px] h-[400px]"
      >
        <SwiperSlide >
          <Slide
          
            image={banner1}
            text={"Get Your Web Development Projects Done In Minutes"}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={banner2}
            text={"Get Your Graphic Designs Projects Done In Minutes"}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={banner3}
            text={"Get Your Digital Marketing Projects Done In Minutes"}
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
