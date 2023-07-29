import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineShoppingBag } from "react-icons/hi";
import { MdClose, MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { logo } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const locationRoute = (route) => {
    if (location.pathname === route) {
      return true;
    }
  };
  return (
    <>
      <nav className="w-full h-full flex items-center justify-between px-5 xl:px-10 py-5">
        <section className="w-full h-full flex items-center justify-start gap-5 sm:gap-10 xl:gap-20">
          <div className="w-20 h-10">
            <img
              src={logo}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
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
                locationRoute("/products/men") ? "text-black-100 font-semibold" : ""
              }`}
            >
              <li>Men</li>
            </Link>
            <Link
              to="/products/women"
              className={`${
                locationRoute("/products/women") ? "text-black-100 font-semibold" : ""
              }`}
            >
              <li>Women</li>
            </Link>
            <Link
              to="/products/kids"
              className={`${
                locationRoute("/products/kids") ? "text-black-100 font-semibold" : ""
              }`}
            >
              <li>Kids</li>
            </Link>
            <Link
              to="/products/combos"
              className={`${
                locationRoute("/products/combos") ? "text-black-100 font-semibold" : ""
              }`}
            >
              <li>Combos</li>
            </Link>
          </ul>
        </section>
        <section className="w-full h-full flex items-center justify-end gap-10">
          <form className="hidden sm:flex items-center bg-white-100 px-3 py-2 gap-2">
            <AiOutlineSearch className="text-light-gray" />
            <input
              type="text"
              placeholder="Search"
              className="bg-white-100 text-light-gray rounded outline-none border-none"
            />
          </form>
          <Link to="/favorite" className="relative hidden lg:block">
            <MdOutlineFavoriteBorder className=" w-6 h-6 text-light-gray" />
            <span className="w-5 h-5 absolute -top-3 -right-3 bg-red-500 text-white rounded-full flex justify-center items-center text-sm p-2">
              0
            </span>
          </Link>
          <Link to="/cart" className="relative hidden lg:block">
            <HiOutlineShoppingBag className=" w-6 h-6 text-light-gray" />
            <span className="w-5 h-5 absolute -top-3 -right-3 bg-red-500 text-white rounded-full flex justify-center items-center text-sm p-2">
              0
            </span>
          </Link>
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
              <div className=" bg-dark-white fixed top-0 right-0 w-52 h-full slideAnimation z-20">
                <MdClose
                  className="w-6 h-6 cursor-pointer absolute top-5 right-7"
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="flex flex-col items-start justify-center gap-10 py-10 px-5 font-satoshi text-base font-normal text-light-gray-100">
                  <Link
                    to="/"
                    className={`${
                      locationRoute("/") ? "text-black-100 font-semibold" : ""
                    }`}
                  >
                    <li>Shop</li>
                  </Link>
                  <Link
                    to="/men"
                    className={`${
                      locationRoute("/men")
                        ? "text-black-100 font-semibold"
                        : ""
                    }`}
                  >
                    <li>Men</li>
                  </Link>
                  <Link
                    to="/women"
                    className={`${
                      locationRoute("/women")
                        ? "text-black-100 font-semibold"
                        : ""
                    }`}
                  >
                    <li>Women</li>
                  </Link>
                  <Link
                    to="/combos"
                    className={`${
                      locationRoute("/combos")
                        ? "text-black-100 font-semibold"
                        : ""
                    }`}
                  >
                    <li>Combos</li>
                  </Link>
                  <Link
                    to="/joggers"
                    className={`${
                      locationRoute("/joggers")
                        ? "text-black-100 font-semibold"
                        : ""
                    }`}
                  >
                    <li>Joggers</li>
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
                <form className="w-52 flex sm:hidden items-center p-2 gap-2 border-b-[1px] border-black-100">
                  <AiOutlineSearch className="text-black-100 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent placeholder:text-black-100 text-black-100 border-none outline-none"
                  />
                </form>
              </div>
            )}
          </nav>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
