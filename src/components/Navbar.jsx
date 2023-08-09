import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineShoppingBag } from "react-icons/hi";
import { MdClose, MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { logo } from "../assets";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const products = useSelector((state) => state.cart.clothes);
  const favItems = useSelector((state) => state.fav.clothes);

  const locationRoute = (route) => {
    if (location.pathname === route) {
      return true;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.length > 0) {
      navigate(`/search/${searchQuery}`);
    }
    setSearchOpen(false);
  };

  return (
    <>
      <nav className="w-full h-full flex items-center justify-between px-5 xl:px-10 py-5">
        <section className="w-full h-full flex items-center justify-start gap-5 sm:gap-10 xl:gap-20">
          <Link to="/" className="w-20 h-10">
            <img
              src={logo}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </Link>
          <ul className="hidden lg:flex items-center justify-center gap-10 font-satoshi text-base font-medium text-light-gray">
            <Link
              to="/"
              className={`${
                locationRoute("/") ? "text-black-100 font-semibold" : ""
              }`}
            >
              <li>Shop</li>
            </Link>
            <Link
              to="/products/men"
              className={`${
                locationRoute("/products/men")
                  ? "text-black-100 font-semibold"
                  : ""
              }`}
            >
              <li>Men</li>
            </Link>
            <Link
              to="/products/women"
              className={`${
                locationRoute("/products/women")
                  ? "text-black-100 font-semibold"
                  : ""
              }`}
            >
              <li>Women</li>
            </Link>
            <Link
              to="/products/kids"
              className={`${
                locationRoute("/products/kids")
                  ? "text-black-100 font-semibold"
                  : ""
              }`}
            >
              <li>Kids</li>
            </Link>
          </ul>
        </section>
        <section className="w-full h-full flex items-center justify-end gap-5 sm:gap-10">
          <form
            className="hidden sm:flex items-center bg-white-100 px-3 py-2 gap-2"
            onSubmit={handleSearch}
          >
            <AiOutlineSearch className="text-light-gray" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white-100 text-light-gray rounded outline-none border-none"
            />
          </form>
          <Link to="/favorite" className="relative hidden lg:block">
            <MdOutlineFavoriteBorder className=" w-6 h-6 text-light-gray" />
            <span className="w-5 h-5 absolute -top-3 -right-3 bg-red-500 text-white rounded-full flex justify-center items-center text-sm p-2">
              {favItems.length}
            </span>
          </Link>
          <Link to="/cart" className="relative hidden lg:block">
            <HiOutlineShoppingBag className=" w-6 h-6 text-light-gray" />
            <span className="w-5 h-5 absolute -top-3 -right-3 bg-red-500 text-white rounded-full flex justify-center items-center text-sm p-2">
              {products.length}
            </span>
          </Link>
          <section className="block sm:hidden">
            <AiOutlineSearch
              className="text-black-100 w-5 h-5 cursor-pointer"
              onClick={() => setSearchOpen(true)}
            />
            {searchOpen && (
              <form
                className={`absolute top-0 left-0 z-50 w-full  py-6 bg-white flex items-center justify-between px-10 gap-2 ${
                  searchOpen ? "search-bar-fade-in" : "search-bar-fade-out"
                }`}
                onSubmit={handleSearch}
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent placeholder:text-light-gray text-light-gray border-none outline-none"
                />
                <MdClose
                  className="w-6 h-6 text-light-gray cursor-pointer"
                  onClick={() => setSearchOpen(false)}
                />
              </form>
            )}
          </section>
          <nav className="block lg:hidden">
            {toggleMenu ? (
              <MdClose
                className="w-6 h-6 text-light-gray cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <HiOutlineMenu
                className="w-6 h-6 text-light-gray cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className=" bg-white absolute top-20 right-0 w-48 h-fit slide-left shadow-xl rounded-bl z-20">
                <ul className="flex flex-col items-start justify-center gap-5 py-5 px-5 font-satoshi text-base font-normal text-light-gray-100">
                  <Link
                    to="/"
                    className={`${
                      locationRoute("/") ? "text-black-100 font-semibold" : ""
                    }`}
                  >
                    <li>Shop</li>
                  </Link>
                  <Link
                    to="/products/men"
                    className={`${
                      locationRoute("/products/men")
                        ? "text-black-100 font-semibold"
                        : ""
                    }`}
                  >
                    <li>Men</li>
                  </Link>
                  <Link
                    to="/products/women"
                    className={`${
                      locationRoute("/products/women")
                        ? "text-black-100 font-semibold"
                        : ""
                    }`}
                  >
                    <li>Women</li>
                  </Link>
                  <Link
                    to="/products/kids"
                    className={`${
                      locationRoute("/products/kids")
                        ? "text-black-100 font-semibold"
                        : ""
                    }`}
                  >
                    <li>Kids</li>
                  </Link>
                  <li>
                    <div className="w-full h-1 text-blue-600" />
                  </li>
                  <Link
                    to="/favorite"
                    className={`${
                      locationRoute("/favorite")
                        ? "text-black-100 font-semibold"
                        : ""
                    }`}
                  >
                    <li>My Wishlist</li>
                  </Link>
                  <Link
                    to="/cart"
                    className={`${
                      locationRoute("/cart")
                        ? "text-black-100 font-semibold"
                        : ""
                    }`}
                  >
                    <li>My Cart Items</li>
                  </Link>
                </ul>
              </div>
            )}
          </nav>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
