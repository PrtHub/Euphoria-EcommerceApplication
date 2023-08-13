import { useParams } from "react-router-dom";
import Select from "react-select";
import { products } from "../data/data";
import { ProductCard, SEO, TitleCard } from "../components";
import { useState } from "react";

const ProductCategory = () => {
  const { tag } = useParams();
  const { category } = useParams();
  const [sortBy, setSortBy] = useState("lowToHigh");

  const filteredProducts = products.filter(
    (product) => product.tag === tag && product.category === category
  );

  const sortedProductsByPrice = (products, sortBy) => {
    const sortedProducts = [...products];
    if (sortBy === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  };

  const sortOptions = [
    { value: "lowToHigh", label: "Price: Low to High" },
    { value: "highToLow", label: "Price: High to Low" },
  ];

  return (
    <>
      <SEO
        title={`Online Shopping for ${category} Fashion - Euphoria`}
      />
      <section className="w-full h-full flex flex-col items-start justify-start px-5 xl:px-10 py-10 gap-10 ">
        <header className="w-full h-full flex items-start lg:items-center ">
          <TitleCard title={`${tag} for ${category}`} />
          <div className="flex flex-col lg:flex-row  items-center gap-4">
            <Select
              name="sort"
              value={sortBy}
              onChange={(selectedOption) => setSortBy(selectedOption.value)}
              isClearable={true}
              isSearchable={true}
              options={sortOptions}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
              placeholder="Sort by"
              classNamePrefix="select"
              className="w-[120px] sm:w-[200px] text-black outline-none"
            />
          </div>
        </header>
        <section className="w-full h-full flex flex-wrap items-center justify-center gap-10">
          {sortedProductsByPrice(filteredProducts, sortBy).map((product) => (
            <main key={product.id}>
              <ProductCard
               id={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
                brand={product.brand}
                isNew={product.isNew}
              />
            </main>
          ))}
        </section>
      </section>
    </>
  );
};

export default ProductCategory;
