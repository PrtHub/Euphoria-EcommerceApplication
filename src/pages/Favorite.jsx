import { useSelector } from "react-redux"


const Favorite = () => {
  const prodcuts = useSelector((state) => state.fav.clothes)
  console.log(prodcuts)
  return (
    <div>Favorite</div>
  )
}

export default Favorite