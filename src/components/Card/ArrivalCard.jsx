/* eslint-disable react/prop-types */
import { joggers } from "../../assets"
import Lazy from "../LazyLoading/Lazy"


const ArrivalCard = ({ title}) => {
  return (
    <section className="w-64 h-80 flex flex-col items-start gap-5">
      <Lazy img={joggers} className="w-64 h-64 object-cover object-center"/>
       <h1 className="text-lg font-semibold text-black-100">{title}</h1>
    </section>
  )
}

export default ArrivalCard