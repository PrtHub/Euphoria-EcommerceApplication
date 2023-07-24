import { motion } from "framer-motion";
import { Banner } from "../../assets";
import Lazy from "../LazyLoading/Lazy";

const HeroCard = () => {
  return (
    <section className="w-full h-full relative">
      <Lazy
        img={Banner}
        alt=""
        className="w-[1920px] h-[800px] object-cover object-center"
      />
      <article className="absolute bottom-12 sm:bottom-32 left-20 text-white flex flex-col items-start text">
        <h1 className="text-3xl font-semibold"></h1>
        <p className="text-left ">Female Fashion Pack</p>
        <p className="max-w-sm text-left my-5 text-xs sm:text-base">cool / colorful / comfy</p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="">
          Shop Now
        </motion.button>
      </article>
    </section>
  );
};

export default HeroCard;
