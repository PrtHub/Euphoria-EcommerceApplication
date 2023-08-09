/* eslint-disable react/prop-types */
import Lazy from "../LazyLoading/Lazy";


const HeroCard = ({image, para, title1, title2, url}) => {
  return (
    <section className="w-full h-full relative">
      <Lazy
        img={image}
        alt=""
        className="w-full md:w-[1448px] h-[440px] sm:h-[540px] md:h-[750px] object-cover object-center"
      />
      <article className="absolute bottom-20 sm:bottom-40 md:top-60 left-10 md:left-10 lg:left-20 text-white flex flex-col items-start gap-5 md:gap-10 font-satoshi">
        <p className=" text-start text-sm md:text-base lg:text-xl font-medium">
          {para}
        </p>
        <h1 className="text-start text-4xl md:text-5xl lg:text-7xl font-extrabold leading-10">
          {title1} <br /> {title2}
        </h1>
        <p className="text-start text-sm md:text-base lg:text-xl font-medium">
          cool / colorful / comfy
        </p>
        <button
          className="bg-white text-black-100 font-semibold px-6 py-3 md:px-8 lg:px-10 md:py-4 text-base sm:text-lg md:text-xl rounded hover:bg-transparent border-2 border-white hover:text-white transition-all duration-300"
        >
          {url}
        </button>
      </article>
    </section>
  );
};

export default HeroCard;
