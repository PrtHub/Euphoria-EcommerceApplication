/* eslint-disable react/prop-types */
import Lazy from "../LazyLoading/Lazy"


const ProductCard = ({img,title, brand, price }) => {
  return (
    <section className="w-[282px] h-[440px] flex flex-col items-start justify-start gap-2">
    <div className="w-full h-full">
      <Lazy img={img} className="w-[282px] h-[370px]" />
    </div>
    <article className="w-full flex items-center justify-between gap-1">
      <div className="w-full flex flex-col justify-between">
        <h1 className="text-lg font-semibold text-black-100">{title}</h1>
      <p className="text-light-gray-100 text-xs lg:text-sm">{brand}</p>
      </div>
       <p>{price}</p>
    </article>
  </section>
  )
}

export default ProductCard