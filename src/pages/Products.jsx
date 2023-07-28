import { useParams } from "react-router-dom";
import { products } from "../data/data";
import { ProductCard, SEO, TitleCard } from "../components";
import { BsFilter } from "react-icons/bs";
import { useState } from "react";

const Products = () => {
  const { category } = useParams();
  const [openFilter, setOpenFilter] = useState(false);


  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const cat = filteredProducts.map((f) => f.category);

  return (
    <>
      <SEO
        title={`Online Shopping for ${cat} Fashion - Euphoria`}
        desc="Online Shopping for Men, Women & Kids Fashion with exclusive deals"
      />
      <main className="w-full h-full">
        <section className="w-full h-full flex flex-col items-start justify-start px-5 xl:px-10 py-10 gap-10 ">
          <header className="w-full h-full flex items-center ">
            <TitleCard title={`${cat} Fashion Products`} />
            <button
              className="flex items-center gap-1 text-black-100 border-[1px] border-black-100 rounded px-2 py-1"
              onClick={() => setOpenFilter(!openFilter)}
            >
              Filters
              <BsFilter
                className={`text-lg ${openFilter ? "rotate-180" : ""}`}
                style={{ transition: "transform 0.5s" }}
              />
            </button>
          </header>
          <section className="w-full h-full flex flex-wrap items-center justify-center lg:justify-start gap-10">
            {filteredProducts?.map((product) => (
              <main key={product.id}>
                <ProductCard
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  brand={product.brand}
                />
              </main>
            ))}
          </section>
        </section>
        {openFilter && (
          <section className="absolute top-0 right-0 bottom-0 left-0  w-[30%] h-screen bg-white shadow-lg"></section>
        )}
      </main>
    </>
  );
};

export default Products;
