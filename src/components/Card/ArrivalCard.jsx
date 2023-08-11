/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { animateScroll as scroll } from 'react-scroll';
import Lazy from "../LazyLoading/Lazy"
import { logToBugfender } from "../../utils/Bugfender";


const ArrivalCard = ({img, title,category, tag}) => {
  const navigate = useNavigate()
    const handleNavigate = () => {
      scroll.scrollToTop({
        duration: 500,
         smooth: true
       });
      navigate(`new/${category}/${tag}`)
    }

    logToBugfender('ArrivalCard Component', `Navigate to: new/${category}/${tag}`);

  return (
    <section className="w-64 h-full flex flex-col items-start gap-2 cursor-pointer" onClick={handleNavigate}>
      <div className="w-full h-full">
      <Lazy img={img} className="w-64 h-64 object-cover object-center rounded"/>
      </div>
       <h1 className="text-lg font-semibold text-black-100 px-2 capitalize">{title}</h1>
    </section>
  )
}

export default ArrivalCard