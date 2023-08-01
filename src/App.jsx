import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Cart,
  Favorite,
  Product,
  Products,
  Shop,
  Success,
  ProductCategory,
  BrandProducts,
  NewProducts,
  BigSavingProducts,
  SingleNew,
} from "./pages";
import { Footer, Navbar } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const App = () => {
  return (
    <>
      <main className="w-full h-full max-w-[1448px] overflow-hidden font-satoshi mx-auto relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/:category/:tag" element={<ProductCategory />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/new/:category/:tag" element={<NewProducts />} />
          <Route path="/products/brand/:brand" element={<BrandProducts />} />
          <Route path="/products/:category/:tag" element={<BigSavingProducts />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/single/:id" element={<SingleNew />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>
    </>
  );
};

export default App;
