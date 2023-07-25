import { InLimeLight } from "../../data/data"
import ProductCard from "../Card/ProductCard"
import TitleCard from "../Card/TitleCard"


const LimeLight = () => {
  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10">
      <TitleCard title="In the Limelight"/>
      <section className="flex flex-row gap-5 overflow-x-scroll">
        {InLimeLight?.map((product) => (
          <main key={product.id}>
            <ProductCard img={product.img} title={product.title} price={product.price} brand={product.brand}/>
          </main>
        ))}
      </section>
    </section>
  )
}

export default LimeLight