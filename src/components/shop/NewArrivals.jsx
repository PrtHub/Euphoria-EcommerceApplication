import ArrivalCard from "../Card/ArrivalCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const NewArrivals = () => {
  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-5">
      <span className="flex items-center gap-4 mb-10">
        <div className="w-1 h-6 rounded text-dark-violet bg-dark-violet" />
        <h1 className="text-black-100 font-semibold text-2xl md:text-3xl">
          New Arrival
        </h1>
      </span>
        <Swiper
          slidesPerView={2}
          spaceBetween={300}
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 140
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 60
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 200
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 60
            },
            852: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 80
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1360: {
              slidesPerView: 5,
              spaceBetween: 40
            },
          }}
          freeMode={true}
          modules={[FreeMode]}
          className="w-full h-full"
        >
          <SwiperSlide>
            <ArrivalCard title="Knitted Joggers" />
          </SwiperSlide>
          <SwiperSlide>
            <ArrivalCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArrivalCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArrivalCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArrivalCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArrivalCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArrivalCard />
          </SwiperSlide>
        </Swiper>
    </section>
  );
};

export default NewArrivals;
