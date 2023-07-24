import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import HeroCard from "../Card/HeroCard";
import { Banner1, Banner2, Banner4, Banner5, Banner6 } from "../../assets";
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
      className="mb-5"
    >
      <SwiperSlide>
        <HeroCard
          image={Banner5}
          para="Tops / skirts"
          title1="Women Fashion"
          title2="Collection"
          url={<Link to="/products/female">Shop Now</Link>}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCard
          image={Banner1}
          para="Sweaters / Tops"
          title1="Winter Fashion"
          title2="Collection"
          url={<Link to="/products/female">Shop Now</Link>}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCard
          image={Banner2}
          para="Combos / Sweaters"
          title1="Winter Combo"
          title2="Collection"
          url={<Link to="/products/combo">Shop Now</Link>}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCard
          image={Banner4}
          para="T-shits / Jackets"
          title1="Men Fashion"
          title2="Collection"
          url={<Link to="/products/male">Shop Now</Link>}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCard
          image={Banner6}
          para="Joggers / Sports"
          title1="Joggers Fashion"
          title2="Collection"
          url={<Link to="/products/joggers">Shop Now</Link>}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
