/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import Lazy from "../LazyLoading/Lazy";

const CatgoryCard = ({ img, title }) => {
  return (
    <section className="w-[270px] h-[460px] flex flex-col items-start justify-start gap-2 rounded">
      <div className="w-full h-full">
        <Lazy img={img} className="w-[270px] h-[393px] rounded" />
      </div>
      <article className="w-full flex flex-col justify-between items-start gap-1">
        <div className="w-full flex justify-between">
          <h1 className="text-lg font-semibold text-black-100">{title}</h1>
          <BsArrowRight />
        </div>
        <p className="text-light-gray-100 text-xs lg:text-sm">Explore Now</p>
      </article>
    </section>
  );
};

export default CatgoryCard;
