/* eslint-disable react/prop-types */
import Lazy from "../LazyLoading/Lazy"


const ArrivalCard = ({img, title}) => {
  return (
    <section className="w-64 h-full flex flex-col items-start gap-2">
      <div className="w-full h-full">
      <Lazy img={img} className="w-64 h-64 object-cover object-center rounded"/>
      </div>
       <h1 className="text-lg font-semibold text-black-100 px-2">{title}</h1>
    </section>
  )
}

export default ArrivalCard