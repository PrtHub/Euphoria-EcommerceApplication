import { useParams } from "react-router-dom"
import { products } from "../data/data"


const Products = () => {
  const { category } = useParams();
  const filteredProducts = products.filter((product) => product.category === category);
  
  return (
    <section className="w-full h-full flex py-10">
      {filteredProducts?.map((product) => (
        <div className="w-[300px] h-[400px]" key={product.id}>
           <img src={product.img} alt="" className="w-full h-full" />
        </div>
      ))}
    </section>
  )
}

export default Products