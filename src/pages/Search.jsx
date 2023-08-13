import { useEffect, useState } from "react";
import { products } from "../data/data";
import { useParams } from "react-router-dom";
import { ProductCard, SEO, TitleCard } from "../components";
import { logToBugfender } from "../utils/Bugfender";
import Select from "react-select";

const Search = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      // Add conditional checks to handle undefined tags
      const tag = product.tag ? product.tag.toLowerCase() : "";
      const title = product.title ? product.title.toLowerCase() : "";
      const productCategory = product.category
        ? product.category.toLowerCase()
        : "";

      return (
        (tag === searchQuery.toLowerCase() ||
          title === searchQuery.toLowerCase()) &&
        (category === "" || productCategory === category)
      );
    });

    setSearchResults(filteredProducts);

    logToBugfender("Search Component", `Search query: ${searchQuery}`);
    logToBugfender(
      "Search Component",
      `Filtered products: ${JSON.stringify(filteredProducts)}`
    );
  }, [searchQuery, category]);

  const categoriesData = [
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "kids", label: "Kids" },
  ];

  return (
    <main className="w-full h-full">
      <SEO
       title={`Online Shopping for ${query} - Euphoria`}
      />
      <section className="w-full h-full flex flex-col items-start justify-start px-5 xl:px-10 py-10 gap-10 ">
        <header className="w-full h-full flex items-start justify-between lg:items-center ">
          <TitleCard title={`Search Results for ${query}`} />
          <Select
            name="sort"
            value={category}
            onChange={(selectedOption) =>
              setCategory(selectedOption ? selectedOption.value : "")
            }
            isClearable={true}
            isSearchable={true}
            options={categoriesData}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            placeholder="Sort By"
            classNamePrefix="select"
            className="w-[200px] text-black outline-none"
          />
        </header>
        <section className="w-full h-full flex flex-wrap items-center justify-center gap-10">
          {searchResults.length === 0 ? (
            <div className="w-full py-10 text-center text-gray-600">
              No results found for your search query.
            </div>
          ) : (
            searchResults.map((item, index) => (
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
            ))
          )}
        </section>
      </section>
    </main>
  );
};

export default Search;
