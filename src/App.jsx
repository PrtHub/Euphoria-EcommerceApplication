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
  SingleNew,
  HawaiiShirts,
  CargoJoggers,
  OversizedTshirts,
  PrintedTshirts,
  UrbanShirts,
  Search,
  Billing,
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
          <Route path="/hawaii-shirts" element={<HawaiiShirts />} />
          <Route path="/cargo-joggers" element={<CargoJoggers />} />
          <Route path="/oversized-tshirts" element={<OversizedTshirts />} />
          <Route path="/printed-tshirt" element={<PrintedTshirts />} />
          <Route path="/urban-shirt" element={<UrbanShirts />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/single/:id" element={<SingleNew />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>
    </>
  );
};

export default App;
