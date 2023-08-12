import { useLocation } from "react-router-dom";
import { Lazy, TitleCard } from "../components";

const Billing = () => {
  const location = useLocation();
  const cartProducts = location.state?.products || [];

  console.log(cartProducts);

  const subTotalPrice = () => {
    let total = 0;

    cartProducts.forEach((product) => {
      total += product.quantity * product.price;
    });
    return total.toFixed(2);
  };

  const calculateDiscount = (percentage, amount) => {
    return (percentage / 100) * amount;
  };

  const discountAmount = calculateDiscount(5, subTotalPrice());
  const totalAfterDiscount = (subTotalPrice() - discountAmount).toFixed(2);

  return (
    <main className="w-full h-full flex flex-col items-start justify-center gap-10 py-10 px-10">
      <TitleCard title="Check Out" />
      <section className="w-full h-full flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="flex flex-col items-start justify-start gap-10">
          <h1 className="text-black-100 font-semibold text-2xl">
            Billing details
          </h1>
        </div>
        <div className="flex flex-col items-start justify-start gap-10">
          <h1 className="text-black-100 font-semibold text-2xl">
            Order Summary
          </h1>
          <section className="w-full h-full flex flex-col items-start justify-start gap-5">
            {cartProducts.map((product) => (
              <main
                key={product.id}
                className="w-full h-full flex items-center justify-center gap-5"
              >
                <div className="w-40 h-40">
                <Lazy
                  img={product.image}
                  className="w-full h-full rounded object-cover"
                  />
                  </div>
                <div className="w-full flex flex-col gap-2">
                  <h2 className="text-lg font-medium text-black-100">{product.title}</h2>
                  <p className="text-base font-medium text-black-100">
                    Color:{" "}
                    <span className="text-light-gray ml-2 capitalize">
                      {product.color}
                    </span>
                  </p>
                  <p className="text-base font-medium text-black-100">
                    Quantity:{" "}
                    <span className="text-light-gray ml-2 capitalize">
                      {product.quantity}
                    </span>
                  </p>
                </div>
                <h2 className="text-light-gray ">&#8377;{product.price}</h2>
              </main>
            ))}
          </section>
          <section className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
               <h2 className="text-black-100 font-medium text-lg">Subtotal <span className="text-light-gray ">({cartProducts.length} items)</span></h2>
               <h2 className="text-light-gray ">&#8377;{subTotalPrice()}</h2>
            </div>
            <div className="w-full flex justify-between items-center">
            <h2 className="text-black-100 font-medium text-lg">Discount</h2>
               <h2 className="text-light-gray ">5%</h2>
            </div>
            <hr />
            <div className="w-full flex justify-between items-center">
            <h2 className="text-black-100 font-medium text-lg">Total</h2>
               <h2 className="text-light-gray ">&#8377;{totalAfterDiscount}</h2>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Billing;
