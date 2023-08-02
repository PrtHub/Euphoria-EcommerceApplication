import { useDispatch, useSelector } from "react-redux";
import { Lazy, SEO, TitleCard } from "../components";

import { GiShoppingBag } from "react-icons/gi";
import { removeItem } from "../redux/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.clothes);

  return (
    <>
      <SEO
        title="Shopping Bag"
        desc="Men Shopping Online - Shop for Men Clothings"
      />
      <main className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
        <TitleCard title="Your shopping cart" />
        {products.length === 0 ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-5">
            <GiShoppingBag className="text-7xl text-dark-violet" />
            <article className="flex flex-col items-center justify-center">
              <h3 className="text-2xl font-medium">Hey, It feels so light!</h3>
              <p className="text-light-gray text-xs">
                There is nothing in your bag
              </p>
            </article>
            <button className="text-white bg-dark-violet px-6 py-2 font-normal rounded">
              Add Products
            </button>
          </div>
        ) : (
          products.map((item) => (
            <section
              key={item.id}
              className="w-full h-full max-w-4xl mx-auto flex flex-row items-center justify-between"
            >
              <section className="flex items-center justify-start gap-5">
                <div className="w-72 h-52">
                  <Lazy
                    img={item.image || item.img}
                    className="w-72 h-52 object-cover object-center rounded"
                  />
                </div>
                <article className="w-full h-full flex flex-col gap-2 items-start">
                  <h1 className="text-black-100 font-medium text-xl">
                    {item.title}
                  </h1>
                  <p className="text-base font-medium text-black-100">
                    Brand:{" "}
                    <span className="text-light-gray v">{item.brand}</span>
                  </p>
                  <p className="text-base font-medium text-black-100">
                    Color:{" "}
                    <span className="text-light-gray ml-2">{item.color}</span>
                  </p>
                  <div className="flex items-center gap-2 text-center font-satoshi font-normal text-Primary text-base">
                    <p className="text-base font-medium text-black-100 mr-2">
                      Quantity:{" "}
                    </p>
                    <button
                      className={`border-Primary border-[1px] px-2 flex items-center justify-center ${
                        item.quantity <= 1
                          ? "opacity-50 pointer-events-none"
                          : ""
                      }`}
                      // onClick={() =>
                      //   handleQuantityChange(item.id, item.quantity - 1)
                      // }
                    >
                      -
                    </button>
                    <p className="text-base font-normal text-Primary font-satoshi">
                      {item.quantity}
                    </p>
                    <button
                      className="border-Primary border-[1px] px-2 flex items-center justify-center"
                      // onClick={() =>
                      //   handleQuantityChange(item.id, item.quantity + 1)
                      // }
                    >
                      +
                    </button>
                  </div>
                  <p className="text-base font-medium text-black-100">
                    Price:{" "}
                    <span className="text-light-gray ml-2">
                      {" "}
                      &#8377; {item.price}
                    </span>
                  </p>
                </article>
              </section>
              <section className="">
                <button
                  className="bg-dark-violet text-white text-lg font-medium px-6 py-2 rounded "
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </section>
            </section>
          ))
        )}
      </main>
    </>
  );
};

export default Cart;
