/* eslint-disable react/prop-types */
import { useState } from "react";
import Lazy from "../LazyLoading/Lazy";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const ProductCard = ({ img, title, brand, price }) => {
  const [color, setColor] = useState(false);

  return (
    <section className="w-[282px] h-[440px] flex flex-col items-start justify-start gap-2 rounded">
      <div className="w-full h-[370px] relative">
        <Lazy
          img={img}
          className="w-[282px] h-[370px] object-cover object-center rounded"
        />
        <section className="absolute top-5 right-5 bg-white rounded-full p-1">
          {color ? (
            <MdOutlineFavorite
              className="text-red-500 cursor-pointer"
              onClick={() => setColor(false)}
            />
          ) : (
            <MdOutlineFavoriteBorder
              className="text-black-100 cursor-pointer"
              onClick={() => setColor(true)}
            />
          )}
        </section>
      </div>
      <article className="w-full flex items-center justify-between gap-1">
        <div className="w-full flex flex-col justify-between">
          <h1 className="text-base font-medium text-black-100">{title}</h1>
          <p className="text-light-gray-100 text-xs lg:text-sm">{brand}</p>
        </div>
        <p>₹{price}</p>
      </article>
    </section>
  );
};

export default ProductCard;
