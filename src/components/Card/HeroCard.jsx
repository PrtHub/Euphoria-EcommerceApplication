/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Lazy from "../LazyLoading/Lazy";


const HeroCard = ({image, para, title1, title2, url}) => {
  return (
    <section className="w-full h-full relative">
      <Lazy
        img={image}
        alt=""
        className="w-full md:w-[1920px] h-[440px] sm:h-[540px] md:h-[800px] object-cover object-center"
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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="bg-white text-black-100 font-semibold px-6 py-3 md:px-8 lg:px-10 md:py-4 text-base sm:text-lg md:text-xl rounded"
        >
          {url}
        </motion.button>
      </article>
    </section>
  );
};

export default HeroCard;
