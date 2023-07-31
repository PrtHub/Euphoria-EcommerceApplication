import { useParams } from "react-router-dom";
import { products } from "../data/data";
import { FilterCard, ProductCard, SEO, TitleCard } from "../components";
import { BsFilter } from "react-icons/bs";
import { useState } from "react";
import Select from "react-select";

const Products = () => {
  const { category } = useParams();
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    tag: null,
    range: null,
    color: null,
  });

  const [sortBy, setSortBy] = useState("lowToHigh");

  const sortProductsByPrice = (products, sortBy) => {
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

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const handleFilterChange = (filter) => {
    setSelectedFilters({ ...selectedFilters, ...filter });
  };

  let filteredProductsState = filteredProducts;

  if (selectedFilters.tag) {
    filteredProductsState = filteredProductsState.filter(
      (product) => product.tag === selectedFilters.tag
    );
  }
  if (selectedFilters.range) {
    filteredProductsState = filteredProductsState.filter(
      (product) => product.range === selectedFilters.range
    );
  }
  if (selectedFilters.color) {
    filteredProductsState = filteredProductsState.filter(
      (product) => product.color === selectedFilters.color
    );
  }

  return (
    <>
      <SEO
        title={`Online Shopping for ${category} Fashion - Euphoria`}
        desc="Online Shopping for Men, Women & Kids Fashion with exclusive deals"
      />
      <main className="w-full h-full">
        <section className="w-full h-full flex flex-col items-start justify-start px-5 xl:px-10 py-10 gap-10 ">
          <header className="w-full h-full flex items-start lg:items-center ">
            <TitleCard title={`${category} Fashion Products`} />
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
              <button
                className="w-[120px] sm:w-[200px] lg:w-28 flex justify-between items-center gap-4 text-[#808080] border-[1px] border-dark-white rounded px-3 py-[6px]"
                onClick={() => setOpenFilter(!openFilter)}
              >
                Filters
                <BsFilter
                  className={`text-lg ${openFilter ? "rotate-180" : ""}`}
                  style={{ transition: "transform 0.5s" }}
                />
              </button>
            </div>
          </header>
          <section className="w-full h-full flex flex-wrap items-center justify-center md:justify-start gap-10">
            {sortProductsByPrice(filteredProductsState, sortBy).map(
              (product) => (
                <main key={product.id}>
                  <ProductCard
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    brand={product.brand}
                    isNew={product.isNew}
                  />
                </main>
              )
            )}
          </section>
        </section>
        {openFilter && (
          <section className="absolute top-0 right-0 bottom-0 left-0 w-[50%] sm:w-[50%] md:w-[40%] lg:w-[30%] h-fit bg-white shadow-lg rounded">
            <FilterCard
              category={category}
              setOpenFilter={setOpenFilter}
              filteredProducts={filteredProducts}
              onFilterChange={handleFilterChange}
              selectedFilters={selectedFilters}
            />
          </section>
        )}
      </main>
    </>
  );
};

export default Products;
