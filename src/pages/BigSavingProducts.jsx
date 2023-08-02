import { useParams } from "react-router-dom";
import { products } from "../data/data";


const BigSavingProducts = () => {
    const { tag } = useParams();
    const { category } = useParams();
    // const [sortBy, setSortBy] = useState("lowToHigh");
  
    const filteredProducts = products.filter(
      (product) => product.tag === tag && product.category === category
    );
  
    console.log(filteredProducts)

    // const sortedProductsByPrice = (products, sortBy) => {
    //   const sortedProducts = [...products];
    //   if (sortBy === "lowToHigh") {
    //     sortedProducts.sort((a, b) => a.price - b.price);
    //   } else if (sortBy === "highToLow") {
    //     sortedProducts.sort((a, b) => b.price - a.price);
    //   }
    //   return sortedProducts;
    // };
  
    // const sortOptions = [
    //   { value: "lowToHigh", label: "Price: Low to High" },
    //   { value: "highToLow", label: "Price: High to Low" },
    // ];
  return (
    <div>BigSavingProducts</div>
  )
}

export default BigSavingProducts