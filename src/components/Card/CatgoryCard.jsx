/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { animateScroll as scroll } from 'react-scroll';
import { BsArrowRight } from "react-icons/bs";
import Lazy from "../LazyLoading/Lazy";
import { useNavigate } from "react-router-dom";
import { logToBugfender } from "../../utils/Bugfender";

const CatgoryCard = ({ img, title, category }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    })
    navigate(`${category}/${title}`);
  };

  logToBugfender('CatgoryCard Component', `Navigate to: ${category}/${title}`);

  return (
    <section className="w-[270px] h-[460px] flex flex-col items-start justify-start gap-2 rounded">
      <div className="w-full h-full">
        <Lazy
          img={img}
          className="w-[270px] h-[393px] rounded cursor-pointer object-cover object-center"
        />
      </div>
      <a className="w-full flex flex-col justify-between items-start gap-1">
        <div className="w-full flex justify-between">
          <h1 className="text-lg font-semibold text-black-100 capitalize cursor-pointer">
            {title}
          </h1>
          <motion.div
            animate={{
              x: [-0, 5, -0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            onClick={handleNavigate}
          >
            <BsArrowRight className="cursor-pointer" />
          </motion.div>
        </div>
        <p
          onClick={handleNavigate}
          className="text-light-gray-100 text-xs lg:text-sm cursor-pointer"
        >
          Explore Now
        </p>
      </a>
    </section>
  );
};

export default CatgoryCard;
