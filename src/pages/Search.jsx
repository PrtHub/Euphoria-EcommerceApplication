import { useEffect, useState } from "react";
import { products } from "../data/data";
import { useParams } from "react-router-dom";
import { ProductCard, TitleCard } from "../components";

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
        tag === searchQuery.toLowerCase() ||
        title === searchQuery.toLowerCase()
      );
    });

    setSearchResults(filteredProducts);
  }, [searchQuery]);

  console.log(query);

  return (
    <main className="w-full h-full">
      <section className="w-full h-full flex flex-col items-start justify-start px-5 xl:px-10 py-10 gap-10 ">
        <header className="w-full h-full flex items-start lg:items-center ">
          <TitleCard title={`Search Results for ${query}`} />
        </header>
        <section className="w-full h-full flex flex-wrap items-center justify-center md:justify-start gap-10">
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
        </section>
      </section>
    </main>
  );
};

export default Search;