"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";
import Link from "next/link";

const cardData = [
  {
    title: "Brokerage",
    description:
      "ISA Brokerage excels in complex insurance placements, providing unmatched market access and expertise.",
    link: "/brokerage",
    icon: "👤",
  },
  {
    title: "Small Accounts",
    description:
      "ISA Access streamlines small P&C placements with expert underwriting and advanced technology for quick, tailored solutions.",
    link: "/small-accounts",
    icon: "💼",
  },
  {
    title: "Underwriting",
    description:
      "ISA Underwriting delivers tailored coverage with expert insight, data analytics, and advanced technology.",
    link: "/underwriting",
    icon: "📊",
  },
  {
    title: "Risk Management",
    description:
      "Comprehensive risk assessment and management solutions for modern business challenges.",
    link: "/risk-management",
    icon: "⚠️",
  },
  {
    title: "Claims Processing",
    description:
      "Efficient and transparent claims handling with cutting-edge digital solutions.",
    link: "/claims",
    icon: "📝",
  },
  {
    title: "Consulting Services",
    description:
      "Strategic insurance consulting to optimize your coverage and risk management approach.",
    link: "/consulting",
    icon: "💡",
  },
];

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full lg:border lg:py-10 mt-5 lg:mt-12">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true} // ✅ Centers the active slide
        slidesPerView={"auto"} // Show 3 slides at a time
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiper"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index} className="p-4">
            <div
              className={`flex flex-col h-full p-6 rounded-lg shadow-lg transition-all duration-500 ${
                index === activeIndex
                  ? "bg-gradient-to-r from-[#11071F] to-[#32155C] text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="mb-4 flex-grow">{card.description}</p>
              <Link
                href={card.link}
                className={`inline-block px-4 py-2 rounded transition-colors mt-auto ${
                  index === activeIndex
                    ? "  text-purple-600] "
                    : "text-purple-600 hover:bg-purple-700 hover:text-white"
                }`}
              >
                Read More
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
