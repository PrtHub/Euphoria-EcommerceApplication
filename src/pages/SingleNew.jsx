import { useParams } from "react-router-dom"
import { Newproducts } from "../data/data"


const SIngleNew = () => {

  const { id } = useParams()

  const selectedProductId =  Newproducts.find((product) => product.id === parseInt(id))

  return (
    <div>SIngleNew</div>
  )
}

export default SIngleNew