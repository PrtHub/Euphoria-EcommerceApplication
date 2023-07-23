import { Link, useLocation } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { logo } from "../assets";

const Navbar = () => {
  const location = useLocation();

  const locationRoute = (route) => {
    if (location.pathname === route) {
      return true;
    }
  };
  return (
    <>
      <section className="w-full h-full flex items-center justify-between px-0 xl:px-5 py-5">
        <section className="w-full h-full flex items-center justify-start gap-5 sm:gap-10 xl:gap-20">
          <div className="w-20 h-10">
            <img
              src={logo}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <ul className="hidden md:flex items-center justify-center gap-10 font-satoshi text-base font-medium text-light-gray">
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
                locationRoute("/men") ? "text-black-100 font-semibold" : ""
              }`}
            >
              <li>Men</li>
            </Link>
            <Link
              to="/women"
              className={`${
                locationRoute("/women") ? "text-black-100 font-semibold" : ""
              }`}
            >
              <li>Women</li>
            </Link>
            <Link
              to="/combos"
              className={`${
                locationRoute("/combos") ? "text-black-100 font-semibold" : ""
              }`}
            >
              <li>Combos</li>
            </Link>
            <Link
              to="/joggers"
              className={`${
                locationRoute("/joggers") ? "text-black-100 font-semibold" : ""
              }`}
            >
              <li>Joggers</li>
            </Link>
          </ul>
        </section>
        <section className="w-full h-full hidden md:flex items-center justify-end gap-10">
          <form className="flex items-center bg-white-100 px-3 py-2 gap-2">
            <AiOutlineSearch className="text-light-gray" />
            <input
              type="text"
              placeholder="Search"
              className="bg-white-100 text-light-gray rounded outline-none border-none"
            />
          </form>
          <Link to="/favorite" className="relative">
            <MdOutlineFavoriteBorder className=" w-6 h-6 text-light-gray" />
            <span className="w-5 h-5 absolute -top-3 -right-3 bg-red-500 text-white rounded-full flex justify-center items-center p-2">
              0
            </span>
          </Link>
          <Link to="/cart" className="relative">
            <HiOutlineShoppingBag className=" w-6 h-6 text-light-gray" />
            <span className="w-5 h-5 absolute -top-3 -right-3 bg-red-500 text-white rounded-full flex justify-center items-center p-2">
              0
            </span>
          </Link>
        </section>
      </section>
    </>
  );
};

export default Navbar;
