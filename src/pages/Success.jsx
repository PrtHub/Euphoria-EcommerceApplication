import { BsBagCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Canvas } from "../utils/canvas";
import { logToBugfender } from "../utils/Bugfender";
import { SEO } from "../components";

const Success = () => {
  const navigate = useNavigate();
  const goToProducts = () => {
    window.scrollTo(0, 0);
    navigate("/");
    logToBugfender("Success Component", "back to Shop page");
  };
  return (
    <>
    <SEO title="Order Successfull"/>
      <div className="content-wrapper flex items-center justify-center py-20">
        <section className="w-auto h-auto flex flex-col items-center justify-center gap-4">
          <Canvas />
          <BsBagCheckFill className="text-dark-violet w-10 h-10" />
          <h1 className="text-Primary text-4xl font-medium text-center">
            Thank You for Purchasing{" "}
          </h1>
          <p className="max-w-sm text-center text-light-gray-100 font-normal font-satoshi">
            We greatly appreciate your support. Your order is being processed
            and will be shipped to you soon.
          </p>
          <button
            className="bg-dark-violet text-white font-satoshi font-normal px-6 py-3 rounded"
            onClick={goToProducts}
          >
            Continue Shopping
          </button>
        </section>
      </div>
    </>
  );
};

export default Success;
