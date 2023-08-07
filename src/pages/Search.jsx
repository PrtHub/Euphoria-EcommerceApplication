import { useEffect, useState } from "react";
import { products } from "../data/data";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components";

const Search = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      // Add conditional checks to handle undefined tags
      const tag = product.tag ? product.tag.toLowerCase() : "";
      const title = product.title ? product.title.toLowerCase() : "";

      return (
        tag.includes(searchQuery.toLowerCase()) ||
        title.includes(searchQuery.toLowerCase())
      );
    });

    setSearchResults(filteredProducts);
  }, [searchQuery]);

  console.log(query);

  return (
    <div>
      {searchResults.map((item, index) => (
        <section key={`${item.id}-${index}`}>
          <ProductCard
            product={item}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            brand={item.brand}
            isNew={item.isNew}
          />
        </section>
      ))}
    </div>
  );
};

export default Search;
