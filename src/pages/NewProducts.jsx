import { useParams } from "react-router-dom";
import { Newproducts } from "../data/data";
import { ProductCard, SEO, TitleCard } from "../components";

const NewProducts = () => {
  const { tag } = useParams();
  const { category } = useParams();

  const filteredProducts = Newproducts.filter(
    (product) => product.tag === tag && product.category === category
  );

  return (
    <>
      <SEO
        title={`Online Shopping for ${category} Fashion - Euphoria`}
        desc="Online Shopping for Men, Women & Kids Fashion with exclusive deals"
      />
      <section className="w-full h-full flex flex-col items-start justify-start px-5 xl:px-10 py-10 gap-10 ">
        <header className="w-full h-full flex items-start lg:items-center ">
          <TitleCard title={`${tag} for ${category}`} />
        </header>
        <section className="w-full h-full flex flex-wrap items-center justify-center md:justify-start gap-10">
          {filteredProducts.map((product) => (
            <main key={product.id}>
              <ProductCard
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

export default NewProducts;
