import { Link, useParams } from "react-router-dom";
import { products } from "../data/data";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();
  const [goToCart, setGoToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);


  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <main className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
      <section className="w-full h-full flex flex-col lg:flex-row items-start  lg:items-center justify-start gap-10 lg:gap-20">
        <section className="w-full h-full sm:w-[410px] sm:h-[540px]">
          <img
            src={selectedProduct.img}
            alt=""
            className="w-full h-full  object-center"
          />
        </section>
        <section className="flex flex-col justify-start items-start gap-10">
            <div className="flex flex-col items-start justify-start gap-4">
              <h1 className="font-normal text-3xl md:text-4xl text-Primary">
                {selectedProduct.title}
              </h1>
              <p className="font-normal text-Primary text-2xl">
                &#8377; {selectedProduct.price}
              </p>
            </div>
            <div className="max-w-5xl flex flex-col justify-start items-start gap-4">
              <h3 className="font-normal text-xl text-Primary">
                Product description
              </h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                doloremque sapiente, tenetur nesciunt mollitia quaerat neque
                dolores blanditiis, autem, id officiis dolore nihil dolor
                assumenda dolorem. Quod dolorum excepturi quo.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <h3 className="font-normal text-Primary text-xl">
                Qunatity
              </h3>
              <div className="flex items-center justify-start gap-4 font-normal text-base text-Primary">
                <span
                  // className={`border-[1px] border-light-gray-100 px-4 py-2 cursor-pointer ${
                  //   quantity <= 1 ? "opacity-50 pointer-events-none" : ""
                  // }`}
                  // onClick={() => handleQuantity("d")}
                >
                  -
                </span>
                <p>1</p>
                <span
                  className="border-[1px] border-light-gray-100 px-4 py-2 cursor-pointer"
                  // onClick={() => handleQuantity("i")}
                >
                  +
                </span>
              </div>
            </div>
            <div className="flex items-center justify-start">
              {goToCart ? (
                <Link to="/cart" className="button">
                  Go to cart
                </Link>
              ) : (
                <button
                  className="button"
                  // onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              )}
            </div>
          </section>
        </section>
    </main>
  );
};

export default Product;
