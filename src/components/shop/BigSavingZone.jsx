import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import { cargo, hawai, oversized, print, urban } from "../../assets";
import TitleCard from "../Card/TitleCard";

const BigSavingZone = () => {
  const naviagte = useNavigate()
  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
      <TitleCard title="Big Saving Zone" />
      <main className="w-full h-full flex flex-wrap items-center justify-center gap-3">
        <section className="w-full h-[300px] sm:w-[32%] lg:w-[32.5%] sm:h-full md:h-[300px] lg:h-[393px] relative">
          <img
            src={hawai}
            className="w-full h-full object-cover object-center rounded"
          />
          <article className="absolute top-10 sm:top-8 lg:top-20 left-5 xl:left-10 flex flex-col  items-start gap-4 sm:gap-2 md:gap-4 text-white">
            <h1 className="font-semibold text-2xl sm:text-base md:text-2xl lg:text-4xl">
              Hawaiian <br /> Shirts
            </h1>
            <p className="text-xs sm:text-[10px] md:text-xs">
              Dress up in summer vibe
            </p>
            <h3 className="text-base sm:text-xs md:text-base font-semibold">
              UPTO 50% OFF
            </h3>
            <button
              onClick={() => {
                scroll.scrollToTop({
                  duration: 500,
                  smooth: true,
                })
                naviagte("/hawaii-shirts")
              }}
              className="bg-transparent border-[1px] border-white text-white font-medium rounded py-1 px-3 lg:px-4 text-base sm:text-xs md:text-base hover:bg-white hover:text-black-100 transition-all duration-300"
            >
              Shop Now
            </button>
          </article>
        </section>
        <section className="w-full h-[300px] sm:w-[32%] lg:w-[32.5%] sm:h-full md:h-[300px] lg:h-[393px] relative">
          <img
            src={print}
            className="w-full h-full object-cover object-center rounded"
          />
          <article className="absolute top-10 sm:top-8 lg:top-20 right-5 xl:right-10 flex flex-col items-end gap-4 sm:gap-2 md:gap-4 text-white">
            <h1 className="font-semibold text-2xl sm:text-base md:text-2xl lg:text-4xl">
              Printed
              <br /> T-Shirt{" "}
            </h1>
            <p className="text-xs sm:text-[10px] md:text-xs">
              New Designs Every Week
            </p>
            <h3 className="text-base sm:text-xs md:text-base font-semibold">
              UPTO 40% OFF
            </h3>
            <button
              onClick={() => {
                scroll.scrollToTop({
                  duration: 500,
                  smooth: true,
                })
                naviagte("/printed-tshirt")
              }}
              className="bg-transparent border-[1px] border-white text-white font-medium rounded py-1 px-3 lg:px-4 text-base sm:text-xs md:text-base  hover:bg-white hover:text-black-100 transition-all duration-300"
            >
              Shop Now
            </button>
          </article>
        </section>
        <section className="w-full h-[300px] sm:w-[32%] lg:w-[32.5%] sm:h-full md:h-[300px] lg:h-[393px] relative">
          <img
            src={cargo}
            className="w-full h-full object-cover object-center rounded"
          />
          <article className="absolute top-10 sm:top-8 lg:top-20 right-5 xl:right-10 flex flex-col sm:items-end md:items-start gap-4 sm:gap-2 md:gap-4 text-black-100">
            <h1 className="font-semibold text-2xl sm:text-base md:text-2xl lg:text-4xl text-end md:text-start">
              Cargo <br /> Joggers
            </h1>
            <p className="text-xs sm:text-[10px] md:text-xs">
              Move with style & comfort
            </p>
            <h3 className="text-base sm:text-xs md:text-base font-semibold">
              UPTO 50% OFF
            </h3>
            <button
              onClick={() => {
                scroll.scrollToTop({
                  duration: 500,
                  smooth: true,
                })
                naviagte("/cargo-joggers")
              }}
              className="bg-transparent border-[1px] border-black-100 text-black-100 font-medium rounded py-1 px-3 lg:px-4 text-base sm:text-xs md:text-base  hover:bg-black-100 hover:text-white-100 transition-all duration-300"
            >
              Shop Now
            </button>
          </article>
        </section>
        <section className="w-full sm:w-[49%] lg:w-[49.4%] h-72 sm:h-full md:h-[300px] lg:h-[393px] relative ">
          <img
            src={urban}
            className="w-full h-full object-cover object-center rounded"
          />
          <article className="absolute top-10 sm:top-8 lg:top-20 right-10 xl:right-20 flex flex-col sm:items-end md:items-start gap-4 sm:gap-2 md:gap-4 text-black-100">
            <h1 className="font-semibold text-2xl sm:text-base md:text-2xl lg:text-4xl">
              Urban <br /> Shirts
            </h1>
            <p className="text-xs sm:text-[10px] md:text-xs">Live in comfort</p>
            <h3 className="text-base sm:text-xs md:text-base font-semibold">
              UPTO 50% OFF
            </h3>
            <button
              onClick={() => {
                scroll.scrollToTop({
                  duration: 500,
                  smooth: true,
                })
                naviagte("/urban-shirt")
              }}
              className="bg-transparent border-[1px] border-black-100 text-black-100 font-medium rounded py-1 px-3 lg:px-4 text-base sm:text-xs md:text-base  hover:bg-black-100 hover:text-white-100 transition-all duration-300"
            >
              Shop Now
            </button>
          </article>
        </section>
        <section className="w-full sm:w-[49%] lg:w-[49.4%] h-72 sm:h-full md:h-[300px] lg:h-[393px] relative ">
          <img
            src={oversized}
            className="w-full h-full object-cover object-center rounded"
          />
          <article className="absolute top-10 sm:top-8 lg:top-20 right-10 xl:right-20 flex flex-col sm:items-end md:items-start gap-4 sm:gap-2 md:gap-4 text-black-100">
            <h1 className="font-semibold text-2xl sm:text-base md:text-2xl lg:text-4xl text-end md:text-start">
              Oversized <br /> T-Shirts
            </h1>
            <p className="text-xs sm:text-[10px] md:text-xs">
              Street Style Icon
            </p>
            <h3 className="text-base sm:text-xs md:text-base font-semibold">
              UPTO 60% OFF
            </h3>
            <button
              onClick={() => {
                scroll.scrollToTop({
                  duration: 500,
                  smooth: true,
                })
                naviagte("/oversized-tshirts")
              }}
              className="bg-transparent border-[1px] border-black-100 text-black-100 font-medium rounded py-1 px-3 lg:px-4 text-base sm:text-xs md:text-base  hover:bg-black-100 hover:text-white-100 transition-all duration-300"
            >
              Shop Now
            </button>
          </article>
        </section>
      </main>
    </section>
  );
};

export default BigSavingZone;
