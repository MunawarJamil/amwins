"use client";
// import React from "react";

// function CardSlider() {
//   return (
//     <div className="lg:w-[1220px] lg:mx-auto sm:shadow-lg w-full  flex flex-col  lg:flex-row  lg:my-10 my-5 lg:gap-10">
//       <div className="  p-4 shadow-xl w-full  ">
//         <div className="icon my-3">🎧</div>
//         <h1 className="my-3 text-2xl font-bold">Brokarage</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
//           odit ducimus! Maiores non eius qui eaque iure distinctio a delectus
//           sunt accusamus, explicabo accusantium expedita aperiam, magni nostrum
//           veritatis.
//         </p>
//         <p className="my-3 text-purple-700">Read more </p>
//       </div>

//       <div className="  p-4 shadow-xl w-full bg-gradient-to-r from-[#11071F] to-[#32155C]
// text-white  ">
//         <div className="icon my-3">🎧</div>
//         <h1 className="my-3 text-2xl font-bold">Brokarage</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
//           odit ducimus! Maiores non eius qui eaque iure distinctio a delectus
//           sunt accusamus, explicabo accusantium expedita aperiam, magni nostrum
//           veritatis.
//         </p>
//         <p className="my-3 text-purple-700">Read more </p>
//       </div>

//       <div className="  p-4 shadow-xl w-full  ">
//         <div className="icon my-3">🎧</div>
//         <h1 className="my-3 text-2xl font-bold">Brokarage</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
//           odit ducimus! Maiores non eius qui eaque iure distinctio a delectus
//           sunt accusamus, explicabo accusantium expedita aperiam, magni nostrum
//           veritatis.
//         </p>
//         <p className="my-3 text-purple-700">Read more </p>
//       </div>
//     </div>
//   );
// }

// export default CardSlider;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./CardSlider.css";

// import required modules
import { EffectCoverflow,Navigation, Autoplay, Pagination } from "swiper/modules";

export default function CardSlider() {
  return (
    <>
    <div className="w-full border-4">
      <Swiper  
        effect={"coverflow"}
        grabCursor={true} 
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
