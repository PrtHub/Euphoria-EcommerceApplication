import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Cart,
  Combos,
  Joggers,
  Men,
  Product,
  Shop,
  Success,
  Women,
} from "./pages";
import { Footer, Navbar } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <main className="overflow-hidden max-w-[1920px] px-10 mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/combos" element={<Combos />} />
          <Route path="/joggers" element={<Joggers />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
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
