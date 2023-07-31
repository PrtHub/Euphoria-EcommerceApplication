/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import Lazy from "../LazyLoading/Lazy"


const ArrivalCard = ({img, title,category, tag}) => {
  const navigate = useNavigate()
    const handleNavigate = () => {
      window.scrollTo(0,0)
      navigate(`new/${category}/${tag}`)
    }
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