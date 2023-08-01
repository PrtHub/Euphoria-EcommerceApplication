/* eslint-disable react/prop-types */
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const NewCard = ({ img, title, brand, price, isNew, id }) => {
  const navigate = useNavigate()
  const [color, setColor] = useState(false);

  const hnadleNaviagte = () => {
    scroll.scrollToTop({
      duration: 5000,
      smooth: true
    })
    navigate(`/single/${id}`)
  }

  return (
    <section className="w-[282px] h-[440px] flex flex-col items-start justify-start gap-2 rounded" onClick={hnadleNaviagte}>
      <div className="w-full h-[370px] relative overflow-hidden rounded">
        <section className="w-[282px] h-[370px] object-cover object-center rounded overflow-hidden hover:scale-110 transition-all duration-300 ease-in-out">
          <LazyLoadImage
            alt="Your Image"
            effect="blur"
            src={img}
            className="w-full h-full object-cover object-center rounded"
          />
        </section>
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
        {isNew && (
          <div className="absolute top-3 left-0 bg-[#f95e7f] text-white w-8 h-5 flex items-center justify-center">
            <p className="capitalize text-sm font-medium">new</p>
          </div>
        )}
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

export default NewCard;