import { Banner } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import HeroCard from "../Card/HeroCard";

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className=""
    >
      <SwiperSlide>
        <HeroCard />
      </SwiperSlide>
      {/* <SwiperSlide>
        <HeroCard />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Hero;
