import { useSelector } from "react-redux"


const Favorite = () => {
  const prodcuts = useSelector((state) => state.fav.clothes)
  console.log(prodcuts)
  return (
    <div>Prolsndkbn</div>
  )
}

export default Favorite