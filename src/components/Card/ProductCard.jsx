/* eslint-disable react/prop-types */
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useDispatch } from "react-redux";
import { addToWishlist, removeItem } from "../../redux/favReducer";
import { logToBugfender } from "../../utils/Bugfender";
import { toast } from "react-toastify";


const ProductCard = ({ img, title, brand, price, isNew, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState(false);

  const handleNaviagte = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
    navigate(`/product/${id}`);
  };


  const handlefav = () => {
    if(color) {
      dispatch(removeItem(id))
      setColor(false);
      logToBugfender("NewCard Component", "Remove item from Wishlist")
      toast.info("Product remove from Wishlist")
    } else {
      dispatch(
        addToWishlist({
          id,
          img,
          title,
          brand,
          price,
          isNew
        })
      )
      setColor(true)
      toast.success("Product added successfully")
      logToBugfender("Product Component", "Item added to wishlist:", {
        id,
        title,
        price,
        brand,
        isNew,
      });
    }
  }
 

  return (
    <section className="w-[282px] h-[440px] flex flex-col items-start justify-start gap-2 rounded cursor-pointer">
      <div className="w-full h-[370px] relative overflow-hidden rounded">
        <section
          className="w-[282px] h-[370px] object-cover object-center rounded overflow-hidden hover:scale-110 transition-all duration-300 ease-in-out"
          onClick={handleNaviagte}
        >
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
              onClick={handlefav}
            />
          ) : (
            <MdOutlineFavoriteBorder
              className="text-black-100 cursor-pointer"
              onClick={handlefav}
            />
          )}
        </section>
        {isNew && (
          <div className="absolute top-3 left-0 bg-[#f95e7f] text-white w-8 h-5 flex items-center justify-center">
            <p className="capitalize text-sm font-medium">new</p>
          </div>
        )}
      </div>
      <article className="w-full flex items-center justify-between gap-2">
        <div className="w-full flex flex-col justify-between">
          <h1
            className="text-base font-medium text-black-100"
            onClick={handleNaviagte}
          >
            {title}
          </h1>
          <p className="text-light-gray-100 text-xs lg:text-sm capitalize">{brand}</p>
        </div>
        <p>₹{price}</p>
      </article>
    </section>
  );
};

export default ProductCard;
