import { Newproducts } from "../data/data";
import { Lazy, NewCard, SEO, TitleCard } from "../components";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart, updateSize } from "../redux/cartReducer";
import { logToBugfender } from "../utils/Bugfender";
import { toast } from "react-toastify";

const SingleNew = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [goToCart, setGoToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const selectedProduct = Newproducts.find(
    (product) => product.id === parseInt(id)
  );

  const similarProduct = Newproducts.filter(
    (product) =>
      product.tag === selectedProduct.tag && product.id !== selectedProduct.id
  );

  const similarProductCount = similarProduct.slice(0, 4);

  const handleQuantity = (operation) => {
    setQuantity((prevQuantity) =>
      operation === "i" ? prevQuantity + 1 : prevQuantity - 1
    );
  };

  const title = selectedProduct.title;
  const image = selectedProduct.img;
  const price = selectedProduct.price;
  const brand = selectedProduct.brand;
  const color = selectedProduct.color;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: selectedProduct.id,
        title,
        image,
        price,
        brand,
        color,
        quantity,
        selectedSize
      })
    ),
      setGoToCart(true);
      toast.success("Product added successfully")
      logToBugfender("Product Component", "Item added to cart:", {
        id: selectedProduct.id,
        title,
        price,
        brand,
        color,
        quantity,
        size: selectedSize,
      });
  };

  const handleChangeSize = (size) => {
    setSelectedSize(size);
    dispatch(updateSize({ id: selectedProduct.id, size }));

    logToBugfender("Product Component", "Size changed:", {
      id: selectedProduct.id,
      size,
    });
  };

  return (
    <>
    <SEO
    title={`${title} - Euphoria`}
    />
    <main className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-20">
      <section className="w-full h-full flex flex-col lg:flex-row items-start  lg:items-center justify-start gap-10 lg:gap-20">
        <section className="w-full h-full sm:w-[410px] sm:h-[540px]">
          <Lazy
            img={selectedProduct.img}
            className="w-full h-full sm:w-[410px] sm:h-[540px] object-center rounded"
          />
        </section>
        <section className="flex flex-col justify-start items-start gap-6">
          <header className="flex flex-col items-start justify-start gap-4">
            <section className="flex flex-col items-start justify-start gap-1">
              <h1 className="font-medium text-3xl md:text-4xl text-black-100 capitalize">
                {selectedProduct.title}
              </h1>
              <p className="capitalize text-light-gray text-xl font-medium">
                {selectedProduct.brand}
              </p>
            </section>
            <section className="">
              <p className="font-normal text-black-100 text-2xl">
                &#8377; {selectedProduct.price}
              </p>
              <p className="text-dark-violet font-medium">
                inclusive of all taxes
              </p>
            </section>
          </header>
          <article className="max-w-5xl flex flex-col justify-start items-start gap-2">
            <h3 className="font-medium text-xl text-black-100">
              Product description
            </h3>
            <p className="text-light-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              doloremque sapiente, tenetur nesciunt mollitia quaerat neque
              dolores blanditiis, autem, id officiis dolore nihil dolor
              assumenda dolorem. Quod dolorum excepturi quo.
            </p>
          </article>
          <section className="flex flex-col gap-2 items-start">
            <h3 className="font-medium text-xl text-black-100">Select Size</h3>
            <div className="flex items-center gap-4">
              <p
                className={`w-10 h-10 text-light-gray border-[1px] border-light-gray rounded-full p-4 flex items-center justify-center text-sm  cursor-pointer ${
                  selectedSize === "S" ? "bg-dark-violet text-white" : ""
                }`}
                onClick={() => handleChangeSize("S")}
              >
                S
              </p>
              <p
                className={`w-10 h-10 text-light-gray border-[1px] border-light-gray rounded-full p-4 flex items-center justify-center text-sm  cursor-pointer ${
                  selectedSize === "M" ? "bg-dark-violet text-white" : ""
                }`}
                onClick={() => handleChangeSize("M")}
              >
                M
              </p>
              <p
                className={`w-10 h-10 text-light-gray border-[1px] border-light-gray rounded-full p-4 flex items-center justify-center text-sm cursor-pointer ${
                  selectedSize === "L" ? "bg-dark-violet text-white" : ""
                }`}
                onClick={() => handleChangeSize("L")}
              >
                L
              </p>
              <p
                className={`w-10 h-10 text-light-gray border-[1px] border-light-gray rounded-full p-4 flex items-center justify-center text-sm cursor-pointer ${
                  selectedSize === "XL" ? "bg-dark-violet text-white" : ""
                }`}
                onClick={() => handleChangeSize("XL")}
              >
                XL
              </p>
              <p
                className={`w-10 h-10 text-light-gray border-[1px] border-light-gray rounded-full p-4 flex items-center justify-center text-sm cursor-pointer ${
                  selectedSize === "2XL" ? "bg-dark-violet text-white" : ""
                }`}
                onClick={() => handleChangeSize("2XL")}
              >
                2XL
              </p>
            </div>
          </section>
          <section className="flex flex-col items-start justify-start gap-4">
            <h3 className="font-medium text-xl text-black-100">Qunatity</h3>
            <div className="flex items-center justify-start gap-4 font-normal text-base text-Primary">
              <span
                className={`border-[1px] border-light-gray-100 px-4 py-2 cursor-pointer ${
                  quantity <= 1 ? "opacity-50 pointer-events-none" : ""
                }`}
                onClick={() => handleQuantity("d")}
              >
                -
              </span>
              <p>{quantity}</p>
              <span
                className="border-[1px] border-light-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => handleQuantity("i")}
              >
                +
              </span>
            </div>
          </section>
          <div className="flex items-center justify-start">
            {goToCart ? (
              <Link
                to="/cart"
                className="bg-dark-violet text-white px-5 py-2 rounded"
              >
                Go to cart
              </Link>
            ) : (
              <button
                className="flex items-center  gap-2 bg-dark-violet text-white font-medium
                 px-6 py-2 rounded"
                onClick={handleAddToCart}
              >
                <HiOutlineShoppingBag /> Add to cart
              </button>
            )}
          </div>
        </section>
      </section>
      <section
        className="w-full h-full flex flex-col
         items-start justify-start gap-10"
      >
        <TitleCard title="Similar Products" />
        <section className="w-full h-full flex flex-wrap items-start justify-start gap-10 xl:gap-4">
          {similarProductCount.map((product) => (
            <NewCard
              key={product.id}
              id={product.id}
              img={product.img}
              title={product.title}
              brand={product.brand}
              price={product.price}
              isNew={product.isNew}
            />
          ))}
        </section>
      </section>
    </main>
    </>
  );
};

export default SingleNew;
