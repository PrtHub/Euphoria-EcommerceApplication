import { useLocation, useNavigate } from "react-router-dom";
import { Lazy, SEO, TitleCard } from "../components";
import { useState } from "react";
import { toast } from "react-toastify";
import { logToBugfender } from "../utils/Bugfender";

const Billing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartProducts = location.state?.products || [];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address || !number) {
      toast.warning("Please fill in all the fields");
      return;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      toast.warning("Invalid name. Please enter a valid name");
      return;
    } else if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
      toast.warning("Invalid email. Please enter a valid email address");
      return;
    } else if (!/^(?:[0-9]{4}-){3}[0-9]{4}$/.test(number)) {
      toast.warning("Invalid Card Number. Please enter a valid Card Number");
    } else {
      navigate("/success");
    }

    logToBugfender("Billing Component", "Payment button clicked");
  };

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
    <>
    <SEO title="Billing Deatils"/>
    <main className="w-full h-full flex flex-col items-start justify-center gap-10 py-10 px-10">
      <TitleCard title="Check Out" />
      <section className="w-full h-full max-w-7xl mx-auto flex flex-col-reverse xl:flex-row-reverse items-start justify-between gap-20 sm:gap-10">
        <div className="w-full max-w-lg sm:p-8 rounded-lg shadow-md flex flex-col items-start justify-start gap-10">
          <h1 className="text-black-100 font-semibold text-2xl">
            Billing Details
          </h1>
          <form className="w-full h-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 text-light-gray p-2 rounded-md  outline-none"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 text-light-gray p-2 rounded-md "
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-600">
                Address
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 p-2 text-light-gray rounded-md outline-none"
                placeholder="123 Street, City, Country"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="creditCard" className="block text-gray-600">
                Credit Card Number
              </label>
              <input
                type="text"
                id="creditCard"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full border border-gray-300  text-light-gray p-2 rounded-md  outline-none"
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
            </div>
            <button
              type="submit"
              className="bg-dark-violet text-white py-2 px-4 rounded-md transition duration-300"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
        <div className="flex flex-col items-start justify-start gap-10 sm:p-8 ">
          <h1 className="text-black-100 font-semibold text-2xl">
            Order Summary
          </h1>
          <section className="w-full h-full flex flex-col items-start justify-start gap-5">
            {cartProducts.map((product) => (
              <main
                key={product.id}
                className="w-full h-full flex items-start sm:items-center justify-center gap-5"
              >
                <div className="w-40 h-40">
                  <Lazy
                    img={product.image}
                    className="w-full h-full rounded object-cover"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <h2 className="text-sm sm:text-lg font-medium text-black-100">
                    {product.title}
                  </h2>
                  <p className="text-xs sm:text-base font-medium text-black-100">
                    Color:{" "}
                    <span className="text-light-gray ml-2 capitalize">
                      {product.color}
                    </span>
                  </p>
                  <p className="text-xs sm:text-base font-medium text-black-100">
                    Quantity:{" "}
                    <span className="text-light-gray ml-2 capitalize">
                      {product.quantity}
                    </span>
                  </p>
                </div>
                <h2 className=" text-light-gray text-xs sm:text-base">
                  &#8377;{product.price}
                </h2>
              </main>
            ))}
          </section>
          <section className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
              <h2 className="text-black-100 font-medium text-lg">
                Subtotal{" "}
                <span className="text-light-gray ">
                  ({cartProducts.length} items)
                </span>
              </h2>
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
    </>
  );
};

export default Billing;
