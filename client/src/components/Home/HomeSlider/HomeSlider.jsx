import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="home-slider mt-3 relative">
      <div className="container mx-auto px-2">
        <Swiper
          navigation={true}
          spaceBetween={10}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper"
          breakpoints={{
            320: { spaceBetween: 5 },
            640: { spaceBetween: 10 },
            1024: { spaceBetween: 20 },
          }}
        >
          {[
            "https://serviceapi.spicezgold.com/download/1761362043357_34292.jpg",
            "https://serviceapi.spicezgold.com/download/1761362025223_34295.jpg",
            "https://serviceapi.spicezgold.com/download/1759938751802_30744.jpg",
            "https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg",
            "https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg",
          ].map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center bg-black/5 rounded-xl"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full max-h-[450px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] object-contain rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
