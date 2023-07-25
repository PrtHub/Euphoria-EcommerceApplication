import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  // Combos,
  // Joggers,
  // Men,
  // Women,
  Cart,
  Favorite,
  Product,
  Products,
  Shop,
  Success,
} from "./pages";
import { Footer, Navbar } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
      <main className="w-full h-full max-w-[1448px] overflow-hidden font-satoshi mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          {/* <Route path="/products/men" element={<Men />} />
          <Route path="/products/women" element={<Women />} />
          <Route path="/products/combos" element={<Combos />} />
          <Route path="/products/joggers" element={<Joggers />} /> */}
          <Route path="/products/:category" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
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
