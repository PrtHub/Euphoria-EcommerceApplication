
import { products } from "../../data/data"
import { logToBugfender } from "../../utils/Bugfender"
import ProductCard from "../Card/ProductCard"
import TitleCard from "../Card/TitleCard"


const LimeLight = () => {
  const Trending = 'trending'

  const filteredProduct = products.filter((product) => product.Trending === Trending)

  logToBugfender('LimeLight Component', `Filtered products: ${JSON.stringify(filteredProduct)}`);

  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
      <TitleCard title="In the Limelight"/>
      <section className="w-full h-full flex flex-row gap-10 overflow-x-scroll">
        {filteredProduct?.map((product) => (
          <main key={product.id}>
            <ProductCard id={product.id} img={product.img} title={product.title} price={product.price} brand={product.brand}/>
          </main>
        ))}
      </section>
    </section>
  )
}

export default LimeLight