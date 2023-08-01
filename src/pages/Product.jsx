import { useParams } from "react-router-dom"
import { products } from "../data/data"


const Product = () => {
  const { id } = useParams()

  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <main className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
     {selectedProduct.title}
    </main> 
  )
}

export default Product