import { useParams } from "react-router-dom"


const BrandProducts = () => {

    const { brand } = useParams()

    console.log(brand)

  return (
    <div>BrandProducts</div>
  )
}

export default BrandProducts