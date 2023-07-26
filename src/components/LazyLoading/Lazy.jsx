/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Lazy = ({ img, className }) => {
  return (
    <LazyLoadImage
    className={className || ""} alt="" src={img} effect="blur"
    />
  )
}

export default Lazy