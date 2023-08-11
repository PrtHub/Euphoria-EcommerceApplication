import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import HeroCard from "../Card/HeroCard";
import { Banner1, Banner3, Banner4, Banner5, Banner6 } from "../../assets";
import { Link } from "react-router-dom";

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
      className="mb-5 w-full "
    >
      <SwiperSlide>
        <HeroCard
          image={Banner5}
          para="Tops / skirts"
          title1="Women Fashion"
          title2="Collection"
          url={<Link to="/women/dress">Shop Now</Link>}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCard
          image={Banner1}
          para="Sweaters / Tops"
          title1="Winter Fashion"
          title2="Collection"
          url={<Link to="/women/sweaters">Shop Now</Link>}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCard
          image={Banner3}
          para="kids / dress"
          title1="Kids Fashion"
          title2="Collection"
          url={<Link to="/products/kids">Shop Now</Link>}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCard
          image={Banner4}
          para="T-shits / Jackets"
          title1="Men Fashion"
          title2="Collection"
          url={<Link to="/products/men">Shop Now</Link>}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCard
          image={Banner6}
          para="Joggers / Sports"
          title1="Sports Fashion"
          title2="Collection"
          url={<Link to="/women/joggers">Shop Now</Link>}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
