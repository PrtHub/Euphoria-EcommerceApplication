/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Lazy = ({ img, className }) => {
  return (
    <div className="w-full h-full">
      <LazyLoadImage
      className={ className || "w-full h-full object-cover object-center"} alt="" src={img} effect="blur"
      />
    </div>
    )
}

export default Lazy